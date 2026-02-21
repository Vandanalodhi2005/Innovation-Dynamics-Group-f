import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useShop();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={48} className="text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added any printers to your cart yet.</p>
                <Link to="/shop" className="px-8 py-3 bg-primary-orange text-white font-bold rounded hover:bg-orange-600 transition-colors flex items-center gap-2">
                    <ArrowLeft size={20} />
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cart.length} items)</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="flex-1">
                        <div className="bg-white shadow-sm border border-gray-100 divide-y divide-gray-100">
                            {cart.map((item) => (
                                <div key={item._id} className="p-6 flex flex-col sm:flex-row gap-6 items-center">
                                    {/* Image */}
                                    <div className="w-24 h-24 bg-gray-50 rounded p-2 flex-shrink-0">
                                        <img src={item.images?.[0] || item.image || 'https://placehold.co/100x100?text=No+Image'} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
                                        <p className="font-bold text-primary-orange">${Number(item.price || 0).toFixed(2)}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    {/* Total Price for Item */}
                                    <div className="text-right min-w-[80px] hidden sm:block">
                                        <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                                        title="Remove item"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 flex justify-between">
                            <Link to="/shop" className="text-gray-500 hover:text-primary-orange flex items-center gap-2 font-medium">
                                <ArrowLeft size={16} /> Continue Shopping
                            </Link>
                            <button onClick={clearCart} className="text-red-500 hover:text-red-700 text-sm font-medium">
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-96">
                        <div className="bg-white p-6 shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (Estimate)</span>
                                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="h-px bg-gray-100 my-4"></div>
                                <div className="flex justify-between text-lg font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>${(cartTotal * 1.08).toFixed(2)}</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="w-full py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-primary-orange transition-colors flex items-center justify-center gap-2"
                            >
                                Checkout <ArrowRight size={18} />
                            </Link>

                            <div className="mt-6 text-xs text-gray-400 text-center">
                                <p>Secure Checkout - SSL Encrypted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
