import React, { useState } from 'react';
import axios from 'axios';
import { Search, Package, CheckCircle, AlertCircle, MapPin, Calendar, CreditCard } from 'lucide-react';

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
        <div className="min-h-screen bg-[#F8F9FA] pt-28 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Search Header */}
                <div className="bg-white p-8 sm:p-12 rounded-sm shadow-xl border border-gray-100 text-center mb-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#024ad8]"></div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">Track Your Order</h1>
                    <p className="text-gray-400 text-sm mb-8">Enter your Order ID to get the latest status update.</p>

                    <form onSubmit={handleTrack} className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                            <input
                                type="text"
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-sm outline-none focus:border-[#024ad8] focus:bg-white transition-all text-sm placeholder:text-gray-300"
                                placeholder="Order ID (e.g. ORD-12345)"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-3.5 bg-[#024ad8] text-white font-bold rounded-sm hover:bg-[#0133a1] transition-all text-sm disabled:opacity-50 whitespace-nowrap"
                        >
                            {loading ? 'Searching...' : 'Track Order'}
                        </button>
                    </form>
                </div>

                {error && (
                    <div className="bg-white border-l-4 border-red-500 rounded-sm p-5 shadow-sm flex items-center gap-3 text-red-600 mb-8">
                        <AlertCircle size={20} />
                        <p className="text-sm font-medium">{error}</p>
                    </div>
                )}

                {order && (
                    <div className="space-y-6">
                        {/* Status Summary Card */}
                        <div className="bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden">
                            <div className="bg-black p-7 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 border-b-4 border-[#024ad8]">
                                <div>
                                    <p className="text-[#024ad8] text-xs font-semibold mb-1">Order ID</p>
                                    <h2 className="text-2xl font-bold">#{order._id.slice(-8).toUpperCase()}</h2>
                                </div>
                                <div className="text-left sm:text-right">
                                    <p className="text-gray-400 text-xs mb-2">Status</p>
                                    <span className="inline-block px-5 py-2 bg-[#024ad8] text-white rounded-sm text-xs font-bold">
                                        {order.isDelivered ? 'Delivered' : order.isPaid ? 'Processing' : 'Awaiting Payment'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-7 sm:p-10">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#F8F9FA] rounded-sm flex items-center justify-center text-[#024ad8] shrink-0 border border-gray-100">
                                            <Calendar size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium mb-1">Order Date</p>
                                            <p className="font-bold text-black text-base">{new Date(order.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#F8F9FA] rounded-sm flex items-center justify-center text-[#024ad8] shrink-0 border border-gray-100">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium mb-1">Destination</p>
                                            <p className="font-bold text-black text-base">{order.shippingAddress.city}, {order.shippingAddress.country}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#F8F9FA] rounded-sm flex items-center justify-center text-[#024ad8] shrink-0 border border-gray-100">
                                            <CreditCard size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium mb-1">Order Total</p>
                                            <p className="font-bold text-black text-base">${order.totalPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="bg-white rounded-sm shadow-xl border border-gray-100 p-7 sm:p-10">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-black">
                                <Package className="text-[#024ad8]" size={22} />
                                Items in Your Order
                            </h3>
                            <div className="space-y-4">
                                {order.orderItems.map((item, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row items-center gap-5 p-5 bg-[#F8F9FA] rounded-sm border border-gray-100">
                                        <div className="w-20 h-20 bg-white rounded-sm p-3 flex-shrink-0 shadow-sm border border-gray-50">
                                            <img
                                                src={item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-grow text-center sm:text-left">
                                            <h4 className="font-bold text-black text-base mb-1">{item.name}</h4>
                                            <p className="text-[#024ad8] text-xs font-medium">Qty: {item.qty}</p>
                                        </div>
                                        <div className="text-center sm:text-right">
                                            <p className="font-bold text-black text-xl">${(item.price * item.qty).toFixed(2)}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">USD</p>
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
