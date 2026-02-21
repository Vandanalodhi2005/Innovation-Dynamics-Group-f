import React, { useState } from 'react';
import axios from 'axios';
import { Search, Package, Truck, CheckCircle, Clock, AlertCircle, MapPin, Calendar, CreditCard } from 'lucide-react';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleTrack = async (e) => {
        if (e) e.preventDefault();
        const cleanId = orderId.replace('#', '').replace('ORD-', '').trim();
        if (!cleanId) return;

        try {
            setLoading(true);
            setError(null);
            setOrder(null);

            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/orders/${cleanId}`);
            setOrder(data);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.message || "Order not found. Please check your Order ID.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans">
            <div className="max-w-4xl mx-auto px-4">
                {/* Search Header */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Order</h1>
                    <p className="text-gray-600 mb-8">Enter your Order ID to see real-time status and delivery updates.</p>

                    <form onSubmit={handleTrack} className="max-w-xl mx-auto relative">
                        <input
                            type="text"
                            className="w-full pl-12 pr-32 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange transition-all"
                            placeholder="Enter Order ID (e.g. ORD-12345)"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-black text-white font-bold rounded-lg hover:bg-primary-orange transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Searching...' : 'Track'}
                        </button>
                    </form>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3 text-red-700 mb-8">
                        <AlertCircle size={20} />
                        <p className="font-medium">{error}</p>
                    </div>
                )}

                {order && (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Status Summary Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-black p-6 text-white flex justify-between items-center">
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Order ID</p>
                                    <h2 className="text-xl font-bold">#{order._id.slice(-8).toUpperCase()}</h2>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Status</p>
                                    <span className="inline-block px-3 py-1 bg-primary-orange text-white rounded-full text-xs font-bold uppercase tracking-wider">
                                        {order.isDelivered ? 'Delivered' : order.isPaid ? 'Processing' : 'Pending'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-primary-orange shrink-0">
                                            <Calendar size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase mb-1">Order Date</p>
                                            <p className="font-bold text-gray-800">{new Date(order.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-primary-orange shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase mb-1">Shipping To</p>
                                            <p className="font-bold text-gray-800 truncate">{order.shippingAddress.city}, {order.shippingAddress.country}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-primary-orange shrink-0">
                                            <CreditCard size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase mb-1">Total Amount</p>
                                            <p className="font-bold text-gray-800">${order.totalPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Package className="text-gray-400" />
                                Order Items
                            </h3>
                            <div className="space-y-4">
                                {order.orderItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className="w-16 h-16 bg-white rounded-lg p-2 flex-shrink-0">
                                            <img
                                                src={item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                                            <p className="text-gray-500 text-xs">Quantity: {item.qty}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackOrder;
