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
        <div className="min-h-screen bg-[#F8F9FA] pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Search Header */}
                <div className="bg-white p-12 rounded-sm shadow-2xl border border-gray-100 text-center mb-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#024ad8]"></div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 uppercase tracking-tight">Track Your Order</h1>
                    <p className="text-gray-400 mb-12 font-bold uppercase tracking-widest text-[11px]">Enter your Order ID for real-time logistics status.</p>

                    <form onSubmit={handleTrack} className="max-w-2xl mx-auto relative group">
                        <input
                            type="text"
                            className="w-full pl-14 pr-40 py-5 bg-white border-2 border-gray-100 rounded-sm outline-none focus:border-[#024ad8] transition-all font-bold uppercase tracking-widest text-xs placeholder:text-gray-300"
                            placeholder="ORDER ID (E.G. ORD-12345)"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#024ad8] transition-colors" size={24} />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 top-1/2 -translate-y-1/2 px-10 py-3.5 bg-black text-white font-extrabold rounded-sm hover:bg-[#024ad8] transition-all uppercase tracking-widest text-[11px] disabled:opacity-50 shadow-lg shadow-black/10"
                        >
                            {loading ? 'Validating...' : 'Track Order'}
                        </button>
                    </form>
                </div>

                {error && (
                    <div className="bg-white border-l-4 border-red-600 rounded-sm p-6 shadow-xl flex items-center gap-4 text-red-600 mb-12 animate-slideIn">
                        <AlertCircle size={24} />
                        <p className="font-extrabold uppercase tracking-tight text-sm">{error}</p>
                    </div>
                )}

                {order && (
                    <div className="space-y-12 animate-fadeIn">
                        {/* Status Summary Card */}
                        <div className="bg-white rounded-sm shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="bg-black p-10 text-white flex flex-col md:flex-row justify-between items-center gap-8 border-b-4 border-[#024ad8]">
                                <div className="text-center md:text-left">
                                    <p className="text-[#024ad8] text-[10px] font-bold uppercase tracking-[0.4em] mb-3">Order Authentication</p>
                                    <h2 className="text-3xl font-extrabold uppercase tracking-tight">#{order._id.slice(-8).toUpperCase()}</h2>
                                </div>
                                <div className="text-center md:text-right">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-3">Live Status</p>
                                    <span className="inline-block px-8 py-3 bg-[#024ad8] text-white rounded-sm text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-lg shadow-[#024ad8]/20">
                                        {order.isDelivered ? 'Delivered' : order.isPaid ? 'Processing' : 'Awaiting Payment'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-12">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 bg-[#F8F9FA] rounded-sm flex items-center justify-center text-[#024ad8] shrink-0 border border-gray-100 shadow-sm group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-500">
                                            <Calendar size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-2">Order Date</p>
                                            <p className="font-extrabold text-black uppercase tracking-tight text-lg">{new Date(order.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 bg-[#F8F9FA] rounded-sm flex items-center justify-center text-[#024ad8] shrink-0 border border-gray-100 shadow-sm group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-500">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-2">Destination</p>
                                            <p className="font-extrabold text-black uppercase tracking-tight text-lg truncate">{order.shippingAddress.city}, {order.shippingAddress.country}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 bg-[#F8F9FA] rounded-sm flex items-center justify-center text-[#024ad8] shrink-0 border border-gray-100 shadow-sm group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-500">
                                            <CreditCard size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-2">Investment Total</p>
                                            <p className="font-extrabold text-black uppercase tracking-tight text-lg">${order.totalPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="bg-white rounded-sm shadow-2xl border border-gray-100 p-12">
                            <h3 className="text-2xl font-extrabold mb-10 flex items-center gap-4 text-black uppercase tracking-tight">
                                <Package className="text-[#024ad8]" size={32} />
                                Inventory Allocation
                            </h3>
                            <div className="space-y-6">
                                {order.orderItems.map((item, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-[#F8F9FA] rounded-sm border border-gray-100 hover:border-[#024ad8]/30 transition-colors group">
                                        <div className="w-24 h-24 bg-white rounded-sm p-4 flex-shrink-0 shadow-sm border border-gray-50 group-hover:scale-105 transition-transform">
                                            <img
                                                src={item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-grow text-center sm:text-left">
                                            <h4 className="font-extrabold text-black uppercase tracking-tight text-lg mb-2">{item.name}</h4>
                                            <p className="text-[#024ad8] text-[10px] font-bold uppercase tracking-[0.3em]">Units Prepared: {item.qty}</p>
                                        </div>
                                        <div className="text-center sm:text-right">
                                            <p className="font-extrabold text-black text-xl uppercase tracking-tight">${(item.price * item.qty).toFixed(2)}</p>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">USD NET</p>
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
