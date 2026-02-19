import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { printers } from '../data/printers';
import { Star, ShoppingBag, Heart, Check, Truck, Shield, Share2 } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, addToWishlist, isInWishlist } = useShop();
    const [quantity, setQuantity] = useState(1);

    const product = printers.find(p => p._id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <button onClick={() => navigate('/shop')} className="ml-4 text-primary-orange underline">Back to Shop</button>
            </div>
        );
    }

    const inWishlist = isInWishlist(product._id);

    return (
        <div className="bg-white min-h-screen font-sans text-black py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <div className="text-sm text-gray-500 mb-8">
                    <span onClick={() => navigate('/')} className="cursor-pointer hover:text-primary-orange">Home</span>
                    <span className="mx-2">/</span>
                    <span onClick={() => navigate('/shop')} className="cursor-pointer hover:text-primary-orange">Shop</span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">{product.name}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Product Image Gallery */}
                    <div className="lg:w-1/2">
                        <div className="bg-gray-50 aspect-square flex items-center justify-center p-12 border border-gray-100 relative group overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4">
                                {product.countInStock > 0 ? (
                                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wide">In Stock</span>
                                ) : (
                                    <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wide">Out of Stock</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="lg:w-1/2 flex flex-col">
                        <div className="mb-2">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{product.brand}</span>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-yellow-400 text-sm">
                                {'★'.repeat(Math.round(product.rating))}
                                <span className="text-gray-200">{'★'.repeat(5 - Math.round(product.rating))}</span>
                            </div>
                            <span className="text-sm text-gray-500">(128 reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-end gap-4 mb-8">
                            <span className="text-4xl font-bold text-black">${product.price.toFixed(2)}</span>
                            {product.originalPrice > 0 && (
                                <span className="text-xl text-gray-400 line-through mb-1">${product.originalPrice.toFixed(2)}</span>
                            )}
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
                            {product.description} Enhance your productivity with high-quality printing, fast speeds, and reliable connectivity. Perfect for both home and office environments.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-8 border-b border-gray-100">
                            <div className="flex items-center border border-gray-200 w-32">
                                <button
                                    className="w-10 h-12 flex items-center justify-center hover:bg-gray-50"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >-</button>
                                <div className="flex-1 text-center font-bold">{quantity}</div>
                                <button
                                    className="w-10 h-12 flex items-center justify-center hover:bg-gray-50"
                                    onClick={() => setQuantity(quantity + 1)}
                                >+</button>
                            </div>

                            <button
                                onClick={() => addToCart(product, quantity)}
                                className="flex-1 bg-black text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-primary-orange transition-colors shadow-lg hover:shadow-orange-500/50 flex items-center justify-center gap-2"
                            >
                                <ShoppingBag size={20} /> Add to Cart
                            </button>

                            <button
                                onClick={() => {
                                    const success = addToWishlist(product);
                                    if (!success) {
                                        alert("Please login to add items to your wishlist.");
                                        navigate('/login');
                                    }
                                }}
                                className={`w-12 h-12 flex items-center justify-center border ${inWishlist ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-200 hover:border-black'} transition-colors`}
                            >
                                <Heart size={20} fill={inWishlist ? "currentColor" : "none"} />
                            </button>
                        </div>

                        {/* Key Features / Specs */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {product.specs && Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="bg-gray-50 p-4 rounded-sm">
                                    <span className="block text-xs text-gray-400 uppercase font-bold mb-1">{key}</span>
                                    <span className="font-medium text-gray-900">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Value Props */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Truck size={18} className="text-primary-orange" />
                                <span>Free shipping on all orders over $50</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Shield size={18} className="text-primary-orange" />
                                <span>2-year warranty included</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Check size={18} className="text-primary-orange" />
                                <span>30-day money-back guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
