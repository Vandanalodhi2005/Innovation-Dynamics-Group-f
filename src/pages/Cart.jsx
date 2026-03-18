import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useShop();

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 pt-20">
                <div className="w-32 h-32 bg-[#F8F9FA] rounded-sm flex items-center justify-center mb-10 border border-gray-100 shadow-sm">
                    <ShoppingBag size={48} className="text-gray-200" />
                </div>
                <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-tight text-black text-center">Procurement Log Empty</h2>
                <p className="text-gray-400 mb-12 text-center max-w-sm text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed">System scan reveals no active assets staged for acquisition at this time.</p>
                <Link to="/shop" className="px-12 py-5 bg-black text-white font-extrabold rounded-sm hover:bg-[#024ad8] transition-all flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-black/10 transform hover:-translate-y-1">
                    <ArrowLeft size={18} />
                    Consult Catalog
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#F8F9FA] min-h-screen py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end gap-6 mb-16">
                    <h1 className="text-5xl font-extrabold uppercase tracking-tight text-black">Acquisition <span className="text-[#024ad8]">Cart</span></h1>
                    <div className="h-1 flex-1 bg-black mb-2 opacity-5"></div>
                    <span className="text-[12px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em] bg-blue-50 px-4 py-2 rounded-sm border border-blue-100">STAGED: {cart.length}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items List */}
                    <div className="flex-1">
                        <div className="bg-white shadow-2xl rounded-sm border border-gray-50 overflow-hidden divide-y divide-gray-50">
                            {cart.map((item) => (
                                <div key={item._id} className="p-10 flex flex-col sm:flex-row gap-10 items-center bg-white hover:bg-[#F8F9FA] transition-all group">
                                    {/* Image */}
                                    <div className="w-36 h-36 bg-[#F8F9FA] rounded-sm border border-gray-50 p-4 flex-shrink-0 group relative overflow-hidden shadow-inner">
                                        <img src={item.images?.[0] || item.image || 'https://placehold.co/100x100?text=No+Image'} alt={item.title} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-110" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 text-center sm:text-left space-y-2">
                                        <h3 className="font-extrabold text-lg text-black uppercase tracking-tight leading-tight group-hover:text-[#024ad8] transition-colors">{item.title}</h3>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">{item.brand}</p>
                                        <p className="font-extrabold text-xl text-[#024ad8] tracking-tight mt-4">${Number(item.price || 0).toFixed(2)}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center border-2 border-gray-50 rounded-sm bg-white shadow-sm overflow-hidden">
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                            className="w-12 h-12 flex items-center justify-center hover:bg-red-50 text-gray-300 hover:text-red-500 transition-all border-r-2 border-gray-50"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-14 text-center font-extrabold text-sm">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                            className="w-12 h-12 flex items-center justify-center hover:bg-blue-50 text-gray-300 hover:text-[#024ad8] transition-all border-l-2 border-gray-50"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    {/* Total Price for Item */}
                                    <div className="text-right min-w-[120px] hidden sm:block">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">AGGREGATE</p>
                                        <p className="font-extrabold text-lg text-black tracking-tight">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-gray-200 hover:text-red-600 transition-all p-4 hover:bg-red-50 rounded-sm border border-transparent hover:border-red-100"
                                        title="Purge item"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-between items-center bg-white p-6 rounded-sm border border-gray-50 shadow-sm">
                            <Link to="/shop" className="text-gray-400 hover:text-[#024ad8] flex items-center gap-3 font-extrabold text-[10px] uppercase tracking-[0.3em] transition-all">
                                <ArrowLeft size={18} /> Continue Acquisition
                            </Link>
                            <button onClick={clearCart} className="text-gray-300 hover:text-red-600 text-[10px] font-extrabold uppercase tracking-[0.3em] transition-all px-4 py-2 hover:bg-red-50 rounded-sm">
                                Reset Manifest
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-white p-10 shadow-2xl rounded-sm border-t-8 border-black sticky top-32">
                            <h2 className="text-[12px] font-extrabold mb-10 uppercase tracking-[0.5em] text-black">Fiscal Summary</h2>

                            <div className="space-y-6 mb-10">
                                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                                    <span>Subtotal (Net)</span>
                                    <span className="text-black font-extrabold">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                                    <span>Logistics & Handling</span>
                                    <span className="text-green-600 font-extrabold">COMPLIMENTARY</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                                    <span>Estimated Surcharge</span>
                                    <span className="text-black font-extrabold">${(cartTotal * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="h-0.5 bg-gray-50 my-8"></div>
                                <div className="flex justify-between items-end text-black uppercase">
                                    <span className="text-[10px] font-bold tracking-[0.4em] mb-1">Total Payable</span>
                                    <span className="text-3xl font-extrabold tracking-tight text-[#024ad8]">${(cartTotal * 1.08).toFixed(2)}</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="w-full py-6 bg-black text-white font-extrabold text-[11px] uppercase tracking-[0.4em] hover:bg-[#024ad8] transition-all flex items-center justify-center gap-4 rounded-sm shadow-2xl shadow-black/10 transform hover:-translate-y-1"
                            >
                                Secure Checkout <ArrowRight size={18} />
                            </Link>

                            <div className="mt-10 text-[9px] font-extrabold text-gray-400 text-center uppercase tracking-[0.4em] border-t border-gray-50 pt-10">
                                <p className="leading-relaxed">End-to-End Encrypted <br/> Protocol 256-Bit SSL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
