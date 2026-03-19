import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useShop();

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 pt-20">
                <div className="w-24 h-24 bg-[#F8F9FA] rounded-sm flex items-center justify-center mb-8 border border-gray-100 shadow-sm">
                    <ShoppingBag size={40} className="text-gray-300" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-black text-center">Your cart is empty</h2>
                <p className="text-gray-400 mb-10 text-center max-w-sm text-sm leading-relaxed">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/shop" className="px-10 py-4 bg-[#024ad8] text-white font-bold rounded-sm hover:bg-[#0133a1] transition-all flex items-center gap-3 text-sm shadow-lg">
                    <ArrowLeft size={16} />
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#F8F9FA] min-h-screen py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Your <span className="text-[#024ad8]">Cart</span></h1>
                    <div className="h-px flex-1 bg-gray-200 hidden sm:block"></div>
                    <span className="text-xs font-bold text-[#024ad8] bg-blue-50 px-3 py-1.5 rounded-sm border border-blue-100">{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-1">
                        <div className="bg-white shadow-xl rounded-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
                            {cart.map((item) => (
                                <div key={item._id} className="p-5 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8 items-center bg-white hover:bg-gray-50/50 transition-all">
                                    {/* Image */}
                                    <div className="w-28 h-28 bg-[#F8F9FA] rounded-sm border border-gray-100 p-3 flex-shrink-0 shadow-inner">
                                        <img src={item.images?.[0] || item.image || 'https://placehold.co/100x100?text=No+Image'} alt={item.title} className="w-full h-full object-contain" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 text-center sm:text-left space-y-1">
                                        <h3 className="font-bold text-base text-black leading-tight">{item.title}</h3>
                                        <p className="text-xs text-gray-400 font-medium">{item.brand}</p>
                                        <p className="font-bold text-lg text-[#024ad8]">${Number(item.price || 0).toFixed(2)}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center border border-gray-200 rounded-sm bg-white overflow-hidden">
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                            className="w-10 h-10 flex items-center justify-center hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                            className="w-10 h-10 flex items-center justify-center hover:bg-blue-50 text-gray-400 hover:text-[#024ad8] transition-all"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    {/* Item Total */}
                                    <div className="text-right min-w-[100px] hidden sm:block">
                                        <p className="text-xs text-gray-400 font-medium mb-0.5">Total</p>
                                        <p className="font-bold text-base text-black">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-gray-300 hover:text-red-500 transition-all p-2.5 hover:bg-red-50 rounded-sm"
                                        title="Remove item"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 flex justify-between items-center bg-white p-5 rounded-sm border border-gray-100 shadow-sm">
                            <Link to="/shop" className="text-gray-400 hover:text-[#024ad8] flex items-center gap-2 font-medium text-sm transition-all">
                                <ArrowLeft size={16} /> Continue Shopping
                            </Link>
                            <button onClick={clearCart} className="text-gray-300 hover:text-red-500 text-sm font-medium transition-all px-3 py-1.5 hover:bg-red-50 rounded-sm">
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-[380px]">
                        <div className="bg-white p-8 shadow-xl rounded-sm border-t-4 border-[#024ad8] sticky top-28">
                            <h2 className="text-base font-bold mb-7 text-black">Order Summary</h2>

                            <div className="space-y-4 mb-7">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="text-black font-bold">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-bold">Free</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Estimated Tax</span>
                                    <span className="text-black font-bold">${(cartTotal * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="h-px bg-gray-100 my-4"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">Total</span>
                                    <span className="text-2xl font-bold text-[#024ad8]">${(cartTotal * 1.08).toFixed(2)}</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="w-full py-4 bg-black text-white font-bold text-sm hover:bg-[#024ad8] transition-all flex items-center justify-center gap-3 rounded-sm shadow-lg"
                            >
                                Proceed to Checkout <ArrowRight size={16} />
                            </Link>

                            <div className="mt-6 text-xs text-gray-400 text-center border-t border-gray-50 pt-5">
                                <p>🔒 Secure checkout — 256-bit SSL encrypted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
