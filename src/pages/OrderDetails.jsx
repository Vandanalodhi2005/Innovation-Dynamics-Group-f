import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Package, Truck, CheckCircle, Clock, MapPin, CreditCard, ChevronLeft, Calendar, User, ShoppingBag } from 'lucide-react';

const OrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/orders/${id}`);
                setOrder(data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
                setLoading(false);
            }
        };
        fetchOrder();
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-primary-orange rounded-full animate-spin"></div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-16 px-4 text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                <Clock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Not Found</h2>
            <p className="text-gray-600 mb-8">{error}</p>
            <Link to="/orders" className="px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-primary-orange transition-colors">
                Back to My Orders
            </Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <Link to="/orders" className="flex items-center gap-1 text-gray-500 hover:text-primary-orange font-bold text-sm mb-4 transition-colors">
                            <ChevronLeft size={16} /> Back to My Orders
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            Order Details
                            <span className="text-gray-400 text-xl font-medium font-mono">#{order._id.slice(-8).toUpperCase()}</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        {order.isDelivered ? (
                            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                <CheckCircle size={14} /> Delivered
                            </span>
                        ) : order.isPaid ? (
                            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-orange-100 text-primary-orange rounded-full text-xs font-bold uppercase tracking-wider">
                                <Truck size={14} /> Processing
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                <Clock size={14} /> Pending
                            </span>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Order Items */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
                                <ShoppingBag size={18} className="text-gray-400" />
                                <h3 className="font-bold text-gray-800">Order Items</h3>
                            </div>
                            <div className="p-6 divide-y divide-gray-100">
                                {order.orderItems.map((item, idx) => (
                                    <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                                        <div className="w-20 h-20 bg-gray-50 rounded-xl border border-gray-100 p-2 flex-shrink-0">
                                            <img
                                                src={item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Price: ${item.price.toFixed(2)} | Qty: {item.qty}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Customer Information Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Shipping Details */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4 border-b pb-3 border-gray-50">
                                    <MapPin size={18} className="text-primary-orange" /> Shipping Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                                            <User size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Recipient</p>
                                            <p className="text-sm font-bold text-gray-800">{order.user.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                                            <Truck size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Address</p>
                                            <p className="text-sm text-gray-600">
                                                {order.shippingAddress.address}<br />
                                                {order.shippingAddress.city}, {order.shippingAddress.postalCode}<br />
                                                {order.shippingAddress.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4 border-b pb-3 border-gray-50">
                                    <CreditCard size={18} className="text-primary-orange" /> Payment Summary
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                                            <Calendar size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Ordered On</p>
                                            <p className="text-sm font-bold text-gray-800">{new Date(order.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                                            <CheckCircle size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Payment Status</p>
                                            <p className={`text-sm font-bold ${order.isPaid ? 'text-green-600' : 'text-amber-500'}`}>
                                                {order.isPaid ? 'Paid via Clover' : 'Awaiting Payment'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Price Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-black text-white rounded-2xl shadow-xl p-8 sticky top-24">
                            <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-4">Cost Summary</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between text-gray-400">
                                    <span>Items Subtotal</span>
                                    <span className="text-white font-medium">${order.itemsPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Shipping Fee</span>
                                    <span className="text-white font-medium">${order.shippingPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Tax Amount</span>
                                    <span className="text-white font-medium">${order.taxPrice.toFixed(2)}</span>
                                </div>
                                <div className="pt-6 border-t border-gray-800 flex justify-between">
                                    <span className="text-xl font-bold">Total Paid</span>
                                    <span className="text-xl font-bold text-primary-orange">${order.totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-primary-orange hover:text-white transition-all text-sm uppercase tracking-widest">
                                    Download Invoice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
