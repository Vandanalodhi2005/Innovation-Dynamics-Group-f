import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, ShoppingBag, Heart, ArrowRight, Eye, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Build image URL from product
const getImageUrl = (product) => {
    if (!product.images || product.images.length === 0)
        return 'https://placehold.co/400x300?text=No+Image';
    const img = product.images[0];
    if (img.startsWith('http')) return img;
    return `${import.meta.env.VITE_API_URL.replace('/api', '')}${img}`;
};

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useShop();
    const navigate = useNavigate();

    const handleDetails = (product) => navigate(`/product/${product.slug || product._id}`);

    if (wishlist.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center mb-8"
                >
                    <Heart size={64} className="text-primary-orange" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-3 text-gray-900">Your wishlist is empty</h2>
                <p className="text-gray-500 mb-10 text-center max-w-md text-lg">
                    Discover our collection and save items you love here for easy access later.
                </p>
                <Link
                    to="/shop"
                    className="px-10 py-4 bg-black text-white font-bold rounded-lg hover:bg-primary-orange transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-orange-500/20"
                >
                    Discover Products <ArrowRight size={22} />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-1 h-8 bg-primary-orange rounded-full" />
                            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">My Wishlist</h1>
                        </div>
                        <p className="text-gray-500 font-medium ml-4">You have {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
                    </div>
                    <Link
                        to="/shop"
                        className="flex items-center gap-2 text-primary-orange font-bold hover:underline transition-all"
                    >
                        Continue Shopping <ArrowRight size={18} />
                    </Link>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {wishlist.map((product) => (
                            <motion.div
                                layout
                                key={product._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="group bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary-orange/30 transition-all duration-500 flex flex-col h-full relative"
                            >
                                {/* Remove Button */}
                                <button
                                    onClick={() => removeFromWishlist(product._id)}
                                    className="absolute top-4 right-4 z-20 p-2.5 bg-white shadow-md rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all transform hover:scale-110 active:scale-95"
                                    title="Remove from Wishlist"
                                >
                                    <Trash2 size={18} />
                                </button>

                                {/* Image Container */}
                                <div className="relative aspect-[4/5] p-6 flex items-center justify-center bg-white overflow-hidden group-hover:bg-gray-50 transition-colors duration-500">
                                    <img
                                        src={getImageUrl(product)}
                                        alt={product.title || product.name}
                                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        onError={(e) => { e.target.src = 'https://placehold.co/400x300?text=No+Image'; }}
                                    />

                                    {/* Action Hover Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                                        <button
                                            onClick={() => handleDetails(product)}
                                            className="w-full bg-white/95 backdrop-blur-sm text-black py-3 rounded-lg font-bold shadow-xl hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 text-sm border border-gray-100"
                                        >
                                            <Eye size={16} /> View Details
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-black text-primary-orange uppercase tracking-[.25em]">{product.brand || 'Premium'}</span>
                                        <div className="flex items-center text-primary-orange">
                                            <Star size={12} fill="currentColor" />
                                            <span className="text-xs font-bold ml-1 text-gray-900">{product.rating || '4.8'}</span>
                                        </div>
                                    </div>

                                    <h3
                                        className="text-base font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary-orange transition-colors cursor-pointer line-clamp-2"
                                        onClick={() => handleDetails(product)}
                                    >
                                        {product.title || product.name}
                                    </h3>

                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-black text-gray-900">${(product.price || 0).toFixed(2)}</span>
                                            {product.countInStock > 0 ? (
                                                <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider">In Stock</span>
                                            ) : (
                                                <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Out of Stock</span>
                                            )}
                                        </div>

                                        <button
                                            onClick={() => handleDetails(product)}
                                            className="w-12 h-12 bg-black text-white hover:bg-primary-orange transition-all duration-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-500/40 transform hover:-rotate-12 active:scale-95"
                                            title="Add to Cart"
                                        >
                                            <ShoppingBag size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Features Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-16">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                            <Heart className="text-primary-orange" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1 text-lg">Save Your Favorites</h4>
                            <p className="text-gray-500 text-sm">Keep track of the products you love most and shop them any time.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                            <ShoppingBag className="text-primary-orange" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1 text-lg">Express Checkout</h4>
                            <p className="text-gray-500 text-sm">Transfer your wishlist items directly to your cart in seconds.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                            <Star className="text-primary-orange" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1 text-lg">Curated Selection</h4>
                            <p className="text-gray-500 text-sm">Only the best premium equipment for your professional needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
