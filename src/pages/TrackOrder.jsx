import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Search, Package, CheckCircle2, AlertCircle, MapPin, 
    Calendar, CreditCard, Box, Truck, Check, ChevronRight,
    Clock
} from 'lucide-react';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Initial check from URL if possible
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (id) {
            setOrderId(id);
            fetchOrder(id);
        }
    }, []);

    const fetchOrder = async (id) => {
        const cleanId = id.replace('#', '').replace('ORD-', '').trim();
        if (!cleanId) return;

        try {
            setLoading(true);
            setError(null);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/orders/${cleanId}`);
            setOrder(data);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.message || "Order tracking details not found. Please verify your Order ID.");
            setOrder(null);
            setLoading(false);
        }
    };

    const handleTrack = (e) => {
        e.preventDefault();
        fetchOrder(orderId);
    };

    const getStatusSteps = (order) => {
        const steps = [
            { label: 'Confirmed', desc: 'Order placed', status: 'completed', icon: <Box size={18} /> },
            { 
                label: 'Payment', 
                desc: order.isPaid ? 'Success' : 'Pending', 
                status: order.isPaid ? 'completed' : 'pending', 
                icon: <CreditCard size={18} /> 
            },
            { 
                label: 'Processing', 
                desc: 'In Warehouse', 
                status: (order.status === 'Processing' || order.status === 'Shipped' || order.isDelivered) ? 'completed' : 'pending', 
                icon: <Package size={18} /> 
            },
            { 
                label: 'On the Way', 
                desc: order.tracking?.currentLocation || 'Transit', 
                status: (order.status === 'Shipped' || order.isDelivered) ? 'completed' : 'pending', 
                icon: <Truck size={18} /> 
            },
            { 
                label: 'Delivered', 
                desc: order.isDelivered ? 'Received' : 'Estimated 3-5 days', 
                status: order.isDelivered ? 'completed' : 'pending', 
                icon: <CheckCircle2 size={18} /> 
            }
        ];
        return steps;
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] pt-32 pb-24 font-sans">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Search Panel */}
                <div className="bg-white rounded-sm shadow-2xl border border-gray-100 overflow-hidden mb-12">
                    <div className="md:flex">
                        <div className="bg-black p-10 md:w-1/3 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-[#024ad8]">
                            <h1 className="text-white text-3xl font-black uppercase tracking-tighter leading-none mb-4">
                                Tracker <span className="text-[#024ad8]">Live</span>
                            </h1>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                                Enter your unique order identification code provided in your confirmation email.
                            </p>
                        </div>
                        <div className="p-10 flex-1 bg-white">
                            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-grow">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                    <input
                                        type="text"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-sm outline-none focus:border-[#024ad8] focus:bg-white transition-all text-xs font-bold uppercase tracking-widest placeholder:text-gray-200"
                                        placeholder="ORDER REFERENCE (e.g. 65f...)"
                                        value={orderId}
                                        onChange={(e) => setOrderId(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-10 py-4 bg-black text-white font-black uppercase tracking-widest text-[10px] rounded-sm hover:bg-[#024ad8] transition-all disabled:opacity-50 shadow-xl"
                                >
                                    {loading ? 'Initializing...' : 'Verify Status'}
                                </button>
                            </form>
                            {error && (
                                <div className="mt-6 flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-sm border border-red-100 animate-in fade-in slide-in-from-top-2">
                                    <AlertCircle size={16} />
                                    <p className="text-[10px] font-bold uppercase tracking-wider">{error}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {order && (
                    <div className="space-y-8 animate-in fade-in duration-700">
                        {/* Status Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            
                            {/* Left Col: Main Status & Delivery Info */}
                            <div className="lg:col-span-8 space-y-8">
                                
                                {/* Progress Stepper */}
                                <div className="bg-white rounded-sm shadow-xl p-8 sm:p-12 border border-gray-100">
                                    <div className="flex justify-between items-center mb-12">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-blue-50 text-[#024ad8] rounded-sm">
                                                <Box size={24} />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-black text-black uppercase tracking-tighter">Current Lifecycle</h2>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Real-time logistics update</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm 
                                                ${order.status === 'Delivered' ? 'bg-green-600 text-white' : 
                                                  order.status === 'Failed' ? 'bg-red-600 text-white' : 
                                                  order.status === 'Shipped' ? 'bg-[#024ad8] text-white' : 
                                                  'bg-gray-800 text-white'}`}>
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Stepper Logic */}
                                    <div className="relative">
                                        {/* Connector Line */}
                                        <div className="absolute top-5 left-8 right-8 h-0.5 bg-gray-100 hidden md:block" />
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                                            {getStatusSteps(order).map((step, i) => (
                                                <div key={i} className="relative flex flex-row md:flex-col items-center gap-4 md:text-center group">
                                                    <div className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 z-10 transition-all duration-500 border-2
                                                        ${step.status === 'completed' ? 'bg-[#024ad8] border-[#024ad8] text-white shadow-lg shadow-blue-200' : 'bg-white border-gray-100 text-gray-300'}`}>
                                                        {step.status === 'completed' ? <Check size={18} strokeWidth={3} /> : step.icon}
                                                    </div>
                                                    <div className="flex flex-col md:items-center">
                                                        <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${step.status === 'completed' ? 'text-black' : 'text-gray-300'}`}>
                                                            {step.label}
                                                        </span>
                                                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-0.5 whitespace-nowrap">
                                                            {step.desc}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Tracking Details Bar */}
                                <div className="bg-black rounded-sm shadow-xl p-8 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-800 gap-8 md:gap-0">
                                    <div className="flex-1 md:px-8 first:pl-0 flex items-center gap-5">
                                        <MapPin className="text-[#024ad8]" size={20} />
                                        <div>
                                            <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">Last Node</p>
                                            <p className="text-white text-xs font-bold uppercase tracking-wider">{order.tracking?.currentLocation || 'Processing Center'}</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 md:px-8 flex items-center gap-5 pt-8 md:pt-0">
                                        <Clock className="text-[#024ad8]" size={20} />
                                        <div>
                                            <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">Time Estimate</p>
                                            <p className="text-white text-xs font-bold uppercase tracking-wider">{order.tracking?.estTime || '3-5 Business Days'}</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 md:px-8 last:pr-0 flex items-center gap-5 pt-8 md:pt-0">
                                        <Truck className="text-[#024ad8]" size={20} />
                                        <div>
                                            <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">Carrier</p>
                                            <p className="text-white text-xs font-bold uppercase tracking-wider">Internal Logistics</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Col: Summary & Actions */}
                            <div className="lg:col-span-4 space-y-8">
                                <div className="bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden">
                                    <div className="bg-[#F8F9FA] p-6 border-b border-gray-100 flex items-center justify-between">
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#024ad8]">Order Manifest</h3>
                                        <span className="text-[10px] font-bold text-gray-400">#{order._id.slice(-8).toUpperCase()}</span>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        {order.orderItems.map((item, idx) => (
                                            <div key={idx} className="flex gap-4 items-center group">
                                                <div className="w-14 h-14 bg-gray-50 rounded-sm p-2 flex-shrink-0 border border-gray-100 group-hover:border-[#024ad8] transition-colors">
                                                    <img 
                                                        src={item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`} 
                                                        alt={item.name} 
                                                        className="w-full h-full object-contain" 
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] font-bold text-black uppercase truncate group-hover:text-[#024ad8] transition-colors">{item.name}</p>
                                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">QTY: {item.qty} × ${item.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-2">
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                                            <span className="text-gray-400">Total Charged</span>
                                            <span className="text-black text-sm font-black">${order.totalPrice.toFixed(2)}</span>
                                        </div>
                                        {!order.isPaid && (
                                            <div className="pt-4">
                                                <div className="bg-amber-50 border border-amber-100 text-amber-600 p-3 rounded-sm flex items-center gap-2">
                                                    <CreditCard size={14} />
                                                    <span className="text-[9px] font-black uppercase tracking-widest animate-pulse">Payment Pending</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Return Information */}
                                <div className="bg-blue-50 border border-blue-100 p-6 rounded-sm">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#024ad8] mb-4">Support & Returns</h4>
                                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest leading-relaxed mb-4">
                                        Need help with this order? Contact our professional assistance team.
                                    </p>
                                    <a href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#024ad8] group">
                                        Open Support Ticket <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Info Text */}
                {!order && !loading && (
                    <div className="text-center max-w-xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-1000">
                        <div className="w-16 h-16 bg-blue-50 text-[#024ad8] rounded-full flex items-center justify-center mx-auto mb-8">
                            <Box size={32} />
                        </div>
                        <h2 className="text-xl font-bold text-black uppercase tracking-tighter">Your logistics, simplified.</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Access real-time shipping manifests, tracking nodes, and delivery estimations through our secure portal. 
                            Our professional inventory management system ensures you stay informed at every step of your order's journey.
                        </p>
                    </div>
                )}
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    75% { transform: translateX(4px); }
                }
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: .5; }
                }
            `}} />
        </div>
    );
};

export default TrackOrder;
