import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const { wishlist, removeFromWishlist, moveToCart } = useShop();

    if (wishlist.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <Heart size={48} className="text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
                <p className="text-gray-500 mb-8 text-center max-w-md">Save items you love here to buy later.</p>
                <Link to="/shop" className="px-8 py-3 bg-primary-orange text-white font-bold rounded hover:bg-orange-600 transition-colors flex items-center gap-2">
                    Start Exploring <ArrowRight size={20} />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">My Wishlist ({wishlist.length})</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {wishlist.map((product) => (
                        <div key={product._id} className="group bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col relative">
                            {/* Remove Button */}
                            <button
                                onClick={() => removeFromWishlist(product._id)}
                                className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-all"
                                title="Remove from Wishlist"
                            >
                                <Trash2 size={16} />
                            </button>

                            {/* Image */}
                            <div className="relative aspect-square p-8 flex items-center justify-center bg-gray-50">
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1 border-t border-gray-50">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{product.brand}</p>

                                <div className="mt-auto flex items-center justify-between pt-4">
                                    <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>

                                    <button
                                        onClick={() => moveToCart(product)}
                                        className="p-3 bg-black text-white hover:bg-primary-orange transition-colors shadow-lg hover:shadow-orange-500/50 flex items-center gap-2 text-sm font-bold"
                                    >
                                        <ShoppingCart size={16} /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
