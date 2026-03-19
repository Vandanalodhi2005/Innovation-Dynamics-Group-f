import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../redux/actions/cartActions';
import axios from 'axios';
import { Loader2, Truck, CreditCard, ChevronRight, Lock, AlertCircle } from 'lucide-react';
import { CART_CLEAR_ITEMS } from '../redux/constants/cartConstants';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [province, setProvince] = useState(shippingAddress.state || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');
    const [phone, setPhone] = useState(shippingAddress.phone || '');

    const [shippingRates, setShippingRates] = useState([]);
    const [selectedRate, setSelectedRate] = useState(null);
    const [loadingShipping, setLoadingShipping] = useState(false);
    const [shippingError, setShippingError] = useState(null);

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [clover, setClover] = useState(null);

    // Style configuration
    const inputStyle = "w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus:border-[#024ad8] outline-none transition-all text-black placeholder:text-gray-300 font-medium text-sm";
    const labelStyle = "block text-xs font-semibold text-gray-500 mb-1.5";

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/cart');
        } else if (!userInfo) {
            navigate('/login?redirect=checkout');
        } else if (step === 2 && window.Clover) {
            setTimeout(() => {
                const numberEl = document.querySelector('#card-number');
                const dateEl = document.querySelector('#card-date');
                const cvvEl = document.querySelector('#card-cvv');
                const zipEl = document.querySelector('#card-postal-code');

                if (numberEl && !numberEl.hasChildNodes()) {
                    try {
                        const cloverInstance = new window.Clover(import.meta.env.VITE_CLOVER_PUBLIC_KEY);
                        const elements = cloverInstance.elements();

                        const styles = {
                            body: {
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '16px',
                                color: '#000000',
                                fontWeight: '600',
                            }
                        };

                        const cardNumber = elements.create('CARD_NUMBER', { styles });
                        const cardDate = elements.create('CARD_DATE', { styles });
                        const cardCvv = elements.create('CARD_CVV', { styles });
                        const cardPostalCode = elements.create('CARD_POSTAL_CODE', { styles });

                        cardNumber.mount('#card-number');
                        cardDate.mount('#card-date');
                        cardCvv.mount('#card-cvv');
                        cardPostalCode.mount('#card-postal-code');

                        setClover(cloverInstance);
                    } catch (err) {
                        console.error("Clover initialization error:", err);
                    }
                }
            }, 300);
        }
    }, [userInfo, cartItems, navigate, step]);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const taxPrice = Number((0.15 * subtotal).toFixed(2));
    const shippingPrice = selectedRate ? Number(selectedRate.rate) : 0;
    const totalPrice = subtotal + taxPrice + shippingPrice;

    // Calculate Shipping Rates
    const calculateShipping = async (e) => {
        e.preventDefault();
        setLoadingShipping(true);
        setShippingError(null);
        setShippingRates([]);
        setSelectedRate(null);

        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/shipping/rates`,
                {
                    shippingAddress: { address, city, state: province, postalCode, country, phone },
                    cartItems
                },
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );

            setShippingRates(Array.isArray(data) ? data : []);
            if (Array.isArray(data) && data.length > 0) {
                const sortedRates = [...data].sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate));
                setSelectedRate(sortedRates[0]);
            } else {
                setShippingError("We couldn't find any shipping options for this address. Please verify your address and try again.");
            }
        } catch (error) {
            console.error(error);
            setShippingError(error.response?.data?.message || "Failed to calculate shipping rates.");
        } finally {
            setLoadingShipping(false);
        }
    };

    const submitShippingHandler = () => {
        if (!selectedRate) {
            alert("Please select a shipping method.");
            return;
        }
        dispatch(saveShippingAddress({ address, city, state: province, postalCode, country, phone }));
        setStep(2);
        window.scrollTo(0, 0);
    };

    const initPayment = async () => {
        try {
            setLoading(true);
            if (!clover) {
                alert('Payment gateway is loading. Please try again in a few seconds.');
                setLoading(false);
                return;
            }

            const result = await clover.createToken();
            if (result.errors) {
                alert('Payment Error: ' + Object.values(result.errors).join(', '));
                setLoading(false);
                return;
            }

            const orderData = {
                orderItems: cartItems,
                shippingAddress: { address, city, state: province, postalCode, country, phone },
                paymentMethod: 'Clover',
                itemsPrice: subtotal,
                taxPrice,
                shippingPrice,
                totalPrice,
            };

            const { data: createdOrder } = await axios.post(
                `${import.meta.env.VITE_API_URL}/orders`,
                orderData,
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );

            // Try to pay
            try {
                await axios.post(
                    `${import.meta.env.VITE_API_URL}/orders/clover/pay`,
                    {
                        amount: totalPrice,
                        orderId: createdOrder._id,
                        source: result.token
                    },
                    { headers: { Authorization: `Bearer ${userInfo.token}` } }
                );
                
                // Payment Success
                dispatch({ type: CART_CLEAR_ITEMS });
                localStorage.removeItem('cartItems');
                navigate(`/order/${createdOrder._id}?success=true`);
                
            } catch (payErr) {
                console.error("Payment Step Failed:", payErr);
                // The order is created but payment failed
                // Redirect to order page so they can try again with the 'Pay Now' button
                alert('Your order was placed successfully, but the payment could not be processed. You can complete your payment on the Order Details page.');
                
                dispatch({ type: CART_CLEAR_ITEMS });
                localStorage.removeItem('cartItems');
                navigate(`/order/${createdOrder._id}`);
            }

        } catch (error) {
            console.error("Order Creation Failed:", error);
            alert(error.response?.data?.message || 'Failed to place order. Please try again or check your connection.');
        } finally {
            setLoading(false);
        }
    };

    if (cartItems.length === 0) return null;

    return (
        <div className="min-h-screen bg-[#F8F9FA] py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 md:mb-12">
                    <h1 className="text-2xl sm:text-3xl font-bold text-black">
                        Checkout
                    </h1>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                        <span className={step >= 1 ? "text-[#024ad8] bg-blue-50 px-3 py-1.5 border border-blue-100 rounded-sm" : "text-gray-300 px-3 py-1.5"}>
                            1. Shipping
                        </span>
                        <ChevronRight size={16} className="text-gray-300" />
                        <span className={step >= 2 ? "text-[#024ad8] bg-blue-50 px-3 py-1.5 border border-blue-100 rounded-sm" : "text-gray-300 px-3 py-1.5"}>
                            2. Payment
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Sidebar – Order Summary */}
                    <div className="lg:col-span-5 lg:order-last">
                        <div className="bg-white rounded-sm shadow-xl border-t-4 border-black p-7 lg:sticky lg:top-28">
                            <h3 className="text-sm font-bold text-black mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                                {cartItems.map((item, i) => (
                                    <div key={i} className="flex gap-4 pb-4 border-b border-gray-50 last:border-0">
                                        <div className="h-16 w-16 bg-[#F8F9FA] rounded-sm border border-gray-100 p-2 flex-shrink-0">
                                            <img
                                                src={item.image ? (item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`) : "https://placehold.co/100"}
                                                alt={item.title}
                                                className="w-full h-full object-contain mix-blend-multiply"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-black line-clamp-2 leading-snug">{item.title}</p>
                                            <p className="text-xs text-[#024ad8] font-medium mt-1">Qty: {item.qty}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <p className="text-sm font-bold text-black">${(item.price * item.qty).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-5 border-t border-gray-100">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="text-black font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Shipping</span>
                                    <span className={shippingPrice === 0 ? "text-[#024ad8] font-medium text-xs" : "text-black font-semibold"}>
                                        {shippingPrice === 0 ? 'Calculated at next step' : `$${shippingPrice.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Tax (15%)</span>
                                    <span className="text-black font-semibold">${taxPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-5 pt-5 border-t border-gray-100">
                                <span className="text-sm font-semibold text-black">Total</span>
                                <span className="text-2xl font-bold text-[#024ad8]">${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="mt-5 pt-5 border-t border-gray-50 flex items-center gap-2 text-gray-400">
                                <Lock size={13} />
                                <span className="text-xs">256-bit SSL encrypted checkout</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-7">
                        {step === 1 ? (
                            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-7 sm:p-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-[#F8F9FA] text-[#024ad8] rounded-sm">
                                        <Truck size={24} />
                                    </div>
                                    <h2 className="text-xl font-bold text-black">Shipping Address</h2>
                                </div>

                                <form onSubmit={calculateShipping} className="space-y-5">
                                    <div>
                                        <label className={labelStyle}>Street Address</label>
                                        <input
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required
                                            placeholder="123 Main Street, Apt 4B"
                                            className={inputStyle}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className={labelStyle}>City</label>
                                            <input
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                required
                                                placeholder="New York"
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>State / Province</label>
                                            <input
                                                value={province}
                                                onChange={(e) => setProvince(e.target.value)}
                                                required
                                                placeholder="NY"
                                                className={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className={labelStyle}>Postal Code</label>
                                            <input
                                                value={postalCode}
                                                onChange={(e) => setPostalCode(e.target.value)}
                                                required
                                                placeholder="10001"
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>Country</label>
                                            <input
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                required
                                                placeholder="US"
                                                className={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelStyle}>Phone Number</label>
                                        <input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            placeholder="+1 (555) 000-0000"
                                            className={inputStyle}
                                        />
                                    </div>

                                    {/* Action Buttons */}
                                    {shippingRates.length === 0 ? (
                                        <button
                                            type="submit"
                                            disabled={loadingShipping}
                                            className="w-full mt-4 bg-[#024ad8] text-white py-4 rounded-sm font-bold hover:bg-[#0133a1] transition-all flex items-center justify-center gap-3 disabled:opacity-70 text-sm shadow-lg"
                                        >
                                            {loadingShipping ? <><Loader2 className="animate-spin" size={18} /> Calculating rates...</> : 'Get Shipping Rates'}
                                        </button>
                                    ) : (
                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <h3 className="text-sm font-semibold text-gray-600 mb-4">Select a Shipping Method</h3>
                                            <div className="space-y-3">
                                                {shippingRates.map((rate) => (
                                                    <div
                                                        key={rate.id}
                                                        onClick={() => setSelectedRate(rate)}
                                                        className={`p-4 border-2 rounded-sm cursor-pointer flex items-center justify-between transition-all ${selectedRate?.id === rate.id ? 'border-[#024ad8] bg-blue-50/50' : 'border-gray-100 hover:border-[#024ad8]/30 bg-white'}`}
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedRate?.id === rate.id ? 'border-[#024ad8] bg-[#024ad8]' : 'border-gray-300'}`}>
                                                                {selectedRate?.id === rate.id && <div className="w-2 h-2 rounded-full bg-white" />}
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-sm text-black">{rate.service}</p>
                                                                <p className="text-xs text-gray-400 mt-0.5">{rate.carrier} • {rate.est_delivery_days ? `${rate.est_delivery_days} business days` : 'Standard delivery'}</p>
                                                            </div>
                                                        </div>
                                                        <span className="font-bold text-base text-black">${parseFloat(rate.rate).toFixed(2)}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                                <button
                                                    type="button"
                                                    onClick={() => setShippingRates([])}
                                                    className="px-6 py-3 border border-gray-200 rounded-sm text-gray-500 font-medium text-sm hover:border-black hover:text-black transition-all"
                                                >
                                                    Change Address
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={submitShippingHandler}
                                                    className="flex-1 bg-black text-white py-3 rounded-sm font-bold text-sm hover:bg-[#024ad8] transition-all flex items-center justify-center gap-3 shadow-lg"
                                                >
                                                    Continue to Payment <ChevronRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {shippingError && (
                                        <div className="p-4 mt-4 bg-red-50 text-red-600 rounded-sm border border-red-100 text-sm">
                                            {shippingError}
                                        </div>
                                    )}
                                </form>
                            </div>
                        ) : (
                            <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-7 sm:p-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-[#F8F9FA] text-[#024ad8] rounded-sm">
                                            <CreditCard size={24} />
                                        </div>
                                        <h2 className="text-xl font-bold text-black">Payment Details</h2>
                                    </div>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="text-sm text-[#024ad8] hover:text-black font-medium transition-all hover:underline"
                                    >
                                        Edit Shipping
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-5 bg-[#F8F9FA] rounded-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium mb-1">Amount Due</p>
                                            <p className="text-3xl font-bold text-black">${totalPrice.toFixed(2)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 bg-white px-3 py-2 rounded-sm border border-gray-100 shadow-sm">
                                                {selectedRate ? `${selectedRate.carrier} — ${selectedRate.service}` : 'Standard shipping'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <div>
                                            <label className={labelStyle}>Card Number</label>
                                            <div className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus-within:border-[#024ad8] transition-all">
                                                <div id="card-number" className="h-6"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className={labelStyle}>Expiry Date</label>
                                                <div className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus-within:border-[#024ad8] transition-all">
                                                    <div id="card-date" className="h-6"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <label className={labelStyle}>CVV</label>
                                                <div className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus-within:border-[#024ad8] transition-all">
                                                    <div id="card-cvv" className="h-6"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className={labelStyle}>Billing Zip Code</label>
                                            <div className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-sm focus-within:border-[#024ad8] transition-all">
                                                <div id="card-postal-code" className="h-6"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-50 p-3 rounded-sm border border-gray-100">
                                        <Lock size={12} className="text-[#024ad8] flex-shrink-0" />
                                        <span>Your payment info is encrypted and never stored on our servers.</span>
                                    </div>

                                    <button
                                        onClick={initPayment}
                                        disabled={loading}
                                        className="w-full bg-[#024ad8] text-white py-4 rounded-sm font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                                    >
                                        {loading ? <><Loader2 className="animate-spin" size={18} /> Processing...</> : 'Place Order & Pay'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
