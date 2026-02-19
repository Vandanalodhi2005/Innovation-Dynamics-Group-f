import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Eye, ShoppingBag, X, Heart, ShoppingCart } from 'lucide-react';

import { printers as ALL_PRINTERS } from '../data/printers';
import { useShop } from '../context/ShopContext';

const Printers = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { addToCart, addToWishlist, isInWishlist } = useShop();

    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
    const [sortBy, setSortBy] = useState('featured');
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [loading, setLoading] = useState(true);

    // Sync state with URL params changes
    useEffect(() => {
        const catParam = searchParams.get('category');
        if (catParam) setSelectedCategory(catParam);
    }, [searchParams]);

    // Simulate loading
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, [selectedCategory, searchQuery]);


    // Filter and sort logic
    const filteredAndSortedPrinters = useMemo(() => {
        let filtered = ALL_PRINTERS;

        // Category Filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        // Search Filter
        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.brand.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Price range filter
        filtered = filtered.filter(p =>
            p.price >= priceRange.min && p.price <= priceRange.max
        );

        // Sort
        const sorted = [...filtered];
        switch (sortBy) {
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                sorted.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return sorted;
    }, [selectedCategory, searchQuery, priceRange, sortBy]);

    const handleDetails = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="bg-white min-h-screen font-sans text-black">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 tracking-tight">Our Printers</h1>
                    <div className="w-20 h-1 bg-primary-orange mx-auto"></div>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                        Discover the perfect printing solution for your needs. From compact home devices to high-performance office machines.
                    </p>
                </div>

                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between bg-gray-50 p-4 border border-gray-100">
                    {/* Search */}
                    <div className="w-full md:w-1/3 relative">
                        <input
                            type="text"
                            placeholder="Search printers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 text-sm focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-all placeholder-gray-400"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                    </div>

                    {/* Filter Controls */}
                    <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
                        {/* Category Select - Mobile/Quick */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="py-3 px-4 bg-white border border-gray-200 text-sm focus:outline-none focus:border-primary-orange"
                        >
                            <option value="all">All Categories</option>
                            <option value="home-printers">Home Printers</option>
                            <option value="office-printers">Office Printers</option>
                            <option value="laser-printers">Laser Printers</option>
                            <option value="inkjet-printers">Inkjet Printers</option>
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="py-3 px-4 bg-white border border-gray-200 text-sm focus:outline-none focus:border-primary-orange"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Top Rated</option>
                        </select>

                        {/* Price Range */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 hidden lg:flex">
                            <span className="text-xs font-bold text-gray-500 uppercase">Max: ${priceRange.max}</span>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                step="50"
                                value={priceRange.max}
                                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                                className="w-24 h-1 bg-gray-200 appearance-none cursor-pointer accent-primary-orange"
                            />
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 flex justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        Showing <span className="font-bold text-black">{filteredAndSortedPrinters.length}</span> results
                    </p>
                </div>

                {/* Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-orange"></div>
                    </div>
                ) : filteredAndSortedPrinters.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredAndSortedPrinters.map((printer) => (
                            <div
                                key={printer._id}
                                className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-orange/30 transition-all duration-300 flex flex-col h-full relative"
                            >
                                {/* Image Area */}
                                <div className="relative aspect-square p-8 flex items-center justify-center bg-gray-50 overflow-hidden group-hover:bg-white transition-colors duration-300">
                                    <img
                                        src={printer.image}
                                        alt={printer.name}
                                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                                    />
                                    {printer.countInStock === 0 && (
                                        <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                                            Sold Out
                                        </div>
                                    )}
                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        <button
                                            className={`p-3 rounded-full shadow-lg transition-all transform hover:scale-110 ${isInWishlist(printer._id) ? 'bg-red-50 text-red-500' : 'bg-white text-gray-900 hover:bg-primary-orange hover:text-white'}`}
                                            title="Add to Wishlist"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const success = addToWishlist(printer);
                                                if (!success) {
                                                    alert("Please login to add items to your wishlist.");
                                                    navigate('/login');
                                                }
                                            }}
                                        >
                                            <Heart size={20} fill={isInWishlist(printer._id) ? "currentColor" : "none"} />
                                        </button>
                                        <button
                                            className="p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-primary-orange hover:text-white transition-all transform hover:scale-110"
                                            title="Add to Cart"
                                            onClick={() => addToCart(printer)}
                                        >
                                            <ShoppingCart size={20} />
                                        </button>
                                        <button className="p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-primary-orange hover:text-white transition-all transform hover:scale-110" onClick={() => handleDetails(printer._id)} title="View Details">
                                            <Eye size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1 border-t border-gray-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{printer.brand}</span>
                                        <div className="flex text-yellow-400 text-xs">
                                            {'★'.repeat(Math.round(printer.rating))}
                                            <span className="text-gray-200">{'★'.repeat(5 - Math.round(printer.rating))}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary-orange transition-colors">
                                        {printer.name}
                                    </h3>

                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{printer.description}</p>

                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                                        <div className="flex flex-col">
                                            {printer.originalPrice > 0 && (
                                                <span className="text-xs text-gray-400 line-through">${printer.originalPrice.toFixed(2)}</span>
                                            )}
                                            <span className="text-xl font-bold text-gray-900">${printer.price.toFixed(2)}</span>
                                        </div>

                                        <button
                                            onClick={() => addToCart(printer)}
                                            className="px-4 py-2 bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-primary-orange transition-colors duration-300 shadow-lg hover:shadow-orange-500/50 flex items-center gap-2"
                                        >
                                            <ShoppingBag size={16} />
                                            <span>Buy Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                            <X size={32} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No printers found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters.</p>
                        <button
                            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setPriceRange({ min: 0, max: 1000 }) }}
                            className="mt-6 px-6 py-2 bg-primary-orange text-white font-bold hover:bg-orange-600 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Printers;
