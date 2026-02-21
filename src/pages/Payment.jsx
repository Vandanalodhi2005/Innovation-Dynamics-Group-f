import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ArrowRight, ShieldCheck, MapPin, Truck, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Payment = () => {
    const { cart, cartTotal, shippingInfo, clearCart } = useShop();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState('card');
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    // Redirect if not logged in
    React.useEffect(() => {
        if (!user) {
            navigate('/login?redirect=payment');
        } else if (!shippingInfo.fullName || !shippingInfo.address || !shippingInfo.city || !shippingInfo.postalCode || !shippingInfo.country) {
            navigate('/shipping');
        }
    }, [user, shippingInfo, navigate]);

    const handlePlaceOrder = () => {
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            setOrderPlaced(true);
            clearCart();
        }, 2000);
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
                    <p className="text-gray-500 mb-8">Thank you for your purchase. Your order has been placed successfully.</p>

                    <button
                        onClick={() => navigate('/')}
                        className="w-full py-3 bg-primary-orange text-white font-bold rounded hover:bg-orange-600 transition-colors"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
                    <div className="flex items-center gap-2 text-sm mt-2 text-gray-500">
                        <span className="text-primary-orange font-bold">Cart</span>
                        <span>&gt;</span>
                        <span className="text-primary-orange font-bold">Shipping</span>
                        <span>&gt;</span>
                        <span className="text-black font-bold">Payment</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Payment Info */}
                    <div className="flex-1">

                        {/* Review Shipping */}
                        <div className="bg-white p-6 mb-6 shadow-sm border border-gray-100 rounded-sm">
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <MapPin className="text-primary-orange" size={20} /> Shipping To
                            </h2>
                            <div className="ml-7 text-gray-600">
                                <p className="font-bold text-gray-900">{shippingInfo.fullName}</p>
                                <p>{shippingInfo.address}</p>
                                <p>{shippingInfo.city}, {shippingInfo.postalCode}</p>
                                <p>{shippingInfo.country}</p>
                                <button
                                    onClick={() => navigate('/shipping')}
                                    className="text-sm text-primary-orange hover:underline mt-2"
                                >
                                    Edit Shipping Info
                                </button>
                            </div>
                        </div>

                        {/* Payment method */}
                        <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <CreditCard className="text-primary-orange" size={20} /> Payment Method
                            </h2>

                            <div className="space-y-4">
                                <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${selectedMethod === 'card' ? 'border-primary-orange bg-orange-50' : 'border-gray-200'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        checked={selectedMethod === 'card'}
                                        onChange={() => setSelectedMethod('card')}
                                        className="h-4 w-4 text-primary-orange focus:ring-primary-orange"
                                    />
                                    <span className="ml-3 flex-1 font-medium">Credit/Debit Card</span>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-5 bg-gray-200 rounded"></div>
                                        <div className="w-8 h-5 bg-gray-200 rounded"></div>
                                    </div>
                                </label>

                                {selectedMethod === 'card' && (
                                    <div className="p-4 bg-gray-50 rounded border border-gray-100 ml-7 space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Card Number</label>
                                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary-orange" />
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Expiry</label>
                                                <input type="text" placeholder="MM/YY" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary-orange" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">CVC</label>
                                                <input type="text" placeholder="123" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary-orange" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <label className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${selectedMethod === 'paypal' ? 'border-primary-orange bg-orange-50' : 'border-gray-200'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="paypal"
                                        checked={selectedMethod === 'paypal'}
                                        onChange={() => setSelectedMethod('paypal')}
                                        className="h-4 w-4 text-primary-orange focus:ring-primary-orange"
                                    />
                                    <span className="ml-3 flex-1 font-medium">PayPal</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="w-full lg:w-96">
                        <div className="bg-white p-6 shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Subtotal ({cart.length} items)</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Tax</span>
                                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="h-px bg-gray-100 my-4"></div>
                                <div className="flex justify-between text-lg font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>${(cartTotal * 1.08).toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                disabled={isProcessing}
                                className={`w-full py-4 text-white font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-primary-orange'}`}
                            >
                                {isProcessing ? (
                                    <span>Processing...</span>
                                ) : (
                                    <>Place Order <CheckCircle size={18} /></>
                                )}
                            </button>

                            <div className="mt-6 text-xs text-gray-400 text-center flex justify-center gap-4">
                                <ShieldCheck size={16} />
                                <span>100% Secure Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
