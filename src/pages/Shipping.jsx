import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { Truck, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // Assuming useAuth is imported from somewhere

const Shipping = () => {
    const { cart, cartTotal, shippingInfo, saveShippingInfo } = useShop();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState(shippingInfo);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Final validation
        if (!formData.fullName || !formData.address || !formData.city || !formData.postalCode || !formData.country) {
            setError('Please fill in all shipping details');
            return;
        }

        saveShippingInfo(formData);
        console.log("Shipping Info Saved:", formData);
        navigate('/payment');
    };

    if (!user) {
        navigate('/login?redirect=shipping');
        return null;
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
                        <span className="text-black font-bold">Shipping</span>
                        <span>&gt;</span>
                        <span>Payment</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Shipping Form */}
                    <div className="flex-1">
                        <div className="bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Truck className="text-primary-orange" /> Shipping Information
                            </h2>

                            {error && (
                                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-2">
                                    <AlertCircle size={20} />
                                    <span>{error}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
                                        placeholder="123 Main St, Apt 4B"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
                                            placeholder="New York"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            required
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
                                            placeholder="10001"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
                                    >
                                        <option value="">Select Country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="AU">Australia</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-primary-orange transition-colors flex items-center justify-center gap-2 mt-8"
                                >
                                    Continue to Payment <ArrowRight size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="w-full lg:w-96">
                        <div className="bg-white p-6 shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            <div className="flex flex-col gap-4 mb-6 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                                {cart.map(item => (
                                    <div key={item._id} className="flex gap-4 items-center">
                                        <div className="w-16 h-16 bg-gray-50 rounded p-1 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold line-clamp-1">{item.name}</h4>
                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="text-sm font-bold">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="h-px bg-gray-100 my-4"></div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Tax (Estimate)</span>
                                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="h-px bg-gray-100 my-4"></div>
                                <div className="flex justify-between text-lg font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>${(cartTotal * 1.08).toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded">
                                <ShieldCheck size={16} className="text-green-600" />
                                <span>SSL Secure Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
