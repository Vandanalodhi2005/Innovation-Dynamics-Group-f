import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../redux/actions/cartActions';
import axios from 'axios';
import { Loader2, Truck, CreditCard, ChevronRight, Lock, Package, CheckCircle } from 'lucide-react';

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
    const inputStyle = "w-full px-5 py-4 bg-white border border-gray-100 rounded-sm focus:border-[#024ad8] outline-none transition-all text-black placeholder:text-gray-300 font-medium text-sm shadow-sm";
    const labelStyle = "block text-[10px] font-extrabold text-gray-400 mb-2 uppercase tracking-[0.3em]";

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

            // Filter rates by allowed EasyPost account IDs
            const allowedAccounts = [
                'ca_e3cbd16a6eb84914985d90875a6ec074', // Canada Post
                'ca_76d0939dc1ce4c99870bbc2844d8d02b', // FedEx
                'ca_c5f03a14c10d4fbab837e8a35b01c7df', // UPS
                'ca_b82a2962176446d09a48bc649977f467',  // USPS
                'ca_fb3ad562209b4e7d930bd0f31f44f2fe'   // DHL Express
            ];
            const filteredRates = Array.isArray(data)
                ? data.filter(rate => allowedAccounts.includes(rate.carrier_account_id))
                : [];

            setShippingRates(filteredRates);
            if (filteredRates.length > 0) {
                // Auto-select the cheapest option by default
                const sortedRates = [...filteredRates].sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate));
                setSelectedRate(sortedRates[0]);
            } else {
                setShippingError("No shipping rates found for this address.");
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

            await axios.post(
                `${import.meta.env.VITE_API_URL}/orders/clover/pay`,
                {
                    amount: totalPrice,
                    orderId: createdOrder._id,
                    source: result.token
                },
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );

            navigate('/orders');

        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (cartItems.length === 0) return null;

    return (
        <div className="min-h-screen bg-[#F8F9FA] py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-12 lg:mb-20">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight">Procurement <span className="text-[#024ad8]">Finalization</span></h1>
                    <div className="mt-8 flex items-center gap-6 text-[11px] font-extrabold uppercase tracking-[0.4em]">
                        <span className={step >= 1 ? "text-[#024ad8] bg-blue-50 px-4 py-2 border border-blue-100 rounded-sm" : "text-gray-300 px-4 py-2"}>01. Logistics</span>
                        <ChevronRight size={14} className="text-gray-300" />
                        <span className={step >= 2 ? "text-[#024ad8] bg-blue-50 px-4 py-2 border border-blue-100 rounded-sm" : "text-gray-300 px-4 py-2"}>02. Financial</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Sidebar */}
                    <div className="lg:col-span-5 lg:order-last">
                        <div className="bg-white rounded-sm shadow-2xl border-t-8 border-black p-10 lg:sticky lg:top-32">
                            <h3 className="text-[12px] font-extrabold text-black mb-10 uppercase tracking-[0.5em]">Manifest Summary</h3>

                            <div className="space-y-6 mb-10 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
                                {cartItems.map((item, i) => (
                                    <div key={i} className="flex gap-6 pb-6 border-b border-gray-50 last:border-0 group">
                                        <div className="h-20 w-20 bg-[#F8F9FA] rounded-sm border border-gray-50 p-2 flex-shrink-0 group-hover:bg-white transition-colors">
                                            <img
                                                src={item.image ? (item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`) : "https://placehold.co/100"}
                                                alt={item.title}
                                                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-extrabold text-black uppercase tracking-tight line-clamp-2 leading-snug group-hover:text-[#024ad8] transition-colors">{item.title}</p>
                                            <p className="text-[9px] text-[#024ad8] font-bold mt-2 uppercase tracking-[0.2em] bg-blue-50/50 px-2 py-0.5 rounded-sm inline-block">QTY: {item.qty}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-extrabold text-black tracking-tight">${(item.price * item.qty).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-8 border-t border-gray-100">
                                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                                    <span>Subtotal (Net)</span>
                                    <span className="text-black font-extrabold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                                    <span>Logistics Quote</span>
                                    <span className={shippingPrice === 0 ? "text-[#024ad8]" : "text-black font-extrabold"}>{shippingPrice === 0 ? 'PENDING CALCULATION' : `$${shippingPrice.toFixed(2)}`}</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                                    <span>Est. Surcharge (15%)</span>
                                    <span className="text-black font-extrabold">${taxPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mt-10 pt-10 border-t border-gray-100">
                                <span className="text-[10px] font-extrabold text-black uppercase tracking-[0.4em] mb-1">Total Payable</span>
                                <span className="text-3xl font-extrabold text-[#024ad8] tracking-tight">${totalPrice.toFixed(2)}</span>
                            </div>
                            
                            <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-3 text-gray-300">
                                <Lock size={14} />
                                <span className="text-[8px] font-extrabold uppercase tracking-[.4em]">Encrypted Financial Pipeline Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-7">
                        {step === 1 ? (
                            <div className="bg-white rounded-sm shadow-sm border border-gray-50 p-10 sm:p-12">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="p-4 bg-[#F8F9FA] text-[#024ad8] rounded-sm shadow-sm">
                                        <Truck size={32} />
                                    </div>
                                    <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight">Logistics Destination</h2>
                                </div>

                                <form onSubmit={calculateShipping} className="space-y-8">
                                    <div className="space-y-2">
                                        <label className={labelStyle}>Street Address (Required)</label>
                                        <input
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required
                                            placeholder="OFFICE / RESIDENCE IDENTIFIER"
                                            className={inputStyle}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className={labelStyle}>Municipality</label>
                                            <input
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                required
                                                placeholder="CITY / DISTRICT"
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className={labelStyle}>Region / State</label>
                                            <input
                                                value={province}
                                                onChange={(e) => setProvince(e.target.value)}
                                                required
                                                placeholder="STATE / PROVINCE"
                                                className={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className={labelStyle}>Postal Zone</label>
                                            <input
                                                value={postalCode}
                                                onChange={(e) => setPostalCode(e.target.value)}
                                                required
                                                placeholder="ZIP / POSTAL CODE"
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className={labelStyle}>National Identifier</label>
                                            <input
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                required
                                                placeholder="US"
                                                className={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className={labelStyle}>Contact Frequency (Phone)</label>
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
                                            className="w-full mt-10 bg-black text-white py-6 rounded-sm font-extrabold hover:bg-[#024ad8] transition-all flex items-center justify-center gap-4 disabled:opacity-70 uppercase tracking-[0.4em] text-[11px] shadow-2xl shadow-black/10 transform hover:-translate-y-1"
                                        >
                                            {loadingShipping ? <Loader2 className="animate-spin" size={20} /> : 'INITIALIZE LOGISTICS SCAN'}
                                        </button>
                                    ) : (
                                        <div className="mt-12 pt-10 border-t border-gray-50">
                                            <h3 className="text-[10px] font-extrabold text-gray-400 mb-8 uppercase tracking-[0.25em]">Select Protocol Method</h3>
                                            <div className="space-y-4">
                                                {shippingRates.map((rate) => (
                                                    <div
                                                        key={rate.id}
                                                        onClick={() => setSelectedRate(rate)}
                                                        className={`p-6 border-2 rounded-sm cursor-pointer flex items-center justify-between transition-all duration-500 ${selectedRate?.id === rate.id ? 'border-[#024ad8] bg-blue-50/50 shadow-xl' : 'border-gray-50 hover:border-[#024ad8]/30 bg-white'}`}
                                                    >
                                                        <div className="flex items-center gap-6">
                                                            <div className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center transition-colors ${selectedRate?.id === rate.id ? 'border-[#024ad8] bg-[#024ad8]' : 'border-gray-200'}`}>
                                                                {selectedRate?.id === rate.id && <div className="w-2 h-2 rounded-sm bg-white" />}
                                                            </div>
                                                            <div>
                                                                <p className="font-extrabold text-sm text-black uppercase tracking-tight leading-tight">{rate.service}</p>
                                                                <p className="text-[9px] text-[#024ad8] font-bold mt-1 uppercase tracking-widest">{rate.carrier} • {rate.est_delivery_days ? `${rate.est_delivery_days} BUSINESS DAYS` : 'STANDARD FREIGHT'}</p>
                                                            </div>
                                                        </div>
                                                        <span className="font-extrabold text-lg text-black tracking-tighter">${parseFloat(rate.rate).toFixed(2)}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-6 mt-12">
                                                <button
                                                    type="button"
                                                    onClick={() => setShippingRates([])}
                                                    className="px-8 py-5 border-2 border-gray-100 rounded-sm text-gray-400 font-extrabold text-[10px] uppercase tracking-[0.3em] hover:border-black hover:text-black transition-all"
                                                >
                                                    REVOKE ADDRESS
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={submitShippingHandler}
                                                    className="flex-1 bg-black text-white py-5 rounded-sm font-extrabold text-[11px] uppercase tracking-[0.4em] hover:bg-[#024ad8] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-black/10 transform hover:-translate-y-1"
                                                >
                                                    VALIDATE LOGISTICS & PROCEED <ChevronRight size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {shippingError && (
                                        <div className="p-6 mt-6 bg-red-50 text-red-600 rounded-sm border border-red-100 text-[10px] font-extrabold uppercase tracking-widest leading-relaxed">
                                            ERROR: {shippingError}
                                        </div>
                                    )}
                                </form>
                            </div>
                        ) : (
                            <div className="bg-white rounded-sm shadow-sm border border-gray-50 p-10 sm:p-12">
                                <div className="flex items-center justify-between mb-12">
                                    <div className="flex items-center gap-6">
                                        <div className="p-4 bg-[#F8F9FA] text-[#024ad8] rounded-sm shadow-sm">
                                            <CreditCard size={32} />
                                        </div>
                                        <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight">Financial Pipeline</h2>
                                    </div>
                                    <button onClick={() => setStep(1)} className="text-[10px] text-[#024ad8] hover:text-black font-extrabold uppercase tracking-[.3em] transition-all border-b border-[#024ad8] hover:border-black">
                                        ADJUST LOGISTICS
                                    </button>
                                </div>

                                <div className="space-y-10">
                                    <div className="p-8 bg-[#F8F9FA] rounded-sm border border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-[0.3em] mb-2">Aggregate Authorization</p>
                                            <p className="text-4xl font-extrabold text-black tracking-tighter">${totalPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[9px] text-[#024ad8] font-bold uppercase tracking-[0.2em] bg-white px-4 py-2 rounded-sm border border-gray-100 shadow-sm leading-relaxed">
                                                PROTOCOL: {selectedRate ? `${selectedRate.carrier} ${selectedRate.service}` : 'STANDARD'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <label className={labelStyle}>Primary Asset Key (Card Number)</label>
                                            <div className="w-full px-5 py-4 bg-white border border-gray-100 rounded-sm focus-within:border-[#024ad8] transition-all shadow-sm">
                                                <div id="card-number" className="h-6"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className={labelStyle}>Temporal Validation (Expiry)</label>
                                                <div className="w-full px-5 py-4 bg-white border border-gray-100 rounded-sm focus-within:border-[#024ad8] transition-all shadow-sm">
                                                    <div id="card-date" className="h-6"></div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className={labelStyle}>Security Coefficient (CVV)</label>
                                                <div className="w-full px-5 py-4 bg-white border border-gray-100 rounded-sm focus-within:border-[#024ad8] transition-all shadow-sm">
                                                    <div id="card-cvv" className="h-6"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className={labelStyle}>Authentication Zip Code</label>
                                            <div className="w-full px-5 py-4 bg-white border border-gray-100 rounded-sm focus-within:border-[#024ad8] transition-all shadow-sm">
                                                <div id="card-postal-code" className="h-6"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-[9px] text-gray-300 font-extrabold uppercase tracking-[0.4em] bg-[#F8F9FA] p-4 rounded-sm border border-gray-50">
                                        <Lock size={12} className="text-[#024ad8]" />
                                        <span>Full End-to-End Encryption Sequence Active (AES-256)</span>
                                    </div>

                                    <button
                                        onClick={initPayment}
                                        disabled={loading}
                                        className="w-full bg-[#024ad8] text-white py-6 rounded-sm font-extrabold text-[11px] uppercase tracking-[0.4em] hover:bg-black transition-all flex items-center justify-center gap-4 mt-10 disabled:opacity-70 disabled:cursor-not-allowed shadow-2xl shadow-[#024ad8]/20 transform hover:-translate-y-1"
                                    >
                                        {loading ? <Loader2 className="animate-spin" size={20} /> : 'AUTHORIZE PROCUREMENT & COMPLETE'}
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
