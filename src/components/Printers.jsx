import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import { Eye, ShoppingBag, Heart, ChevronRight, X, ChevronLeft } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import api from '../utils/api';

// Build image URL from product
const getImageUrl = (product) => {
    if (!product.images || product.images.length === 0)
        return 'https://placehold.co/400x300?text=No+Image';
    const img = product.images[0];
    if (img.startsWith('http')) return img;
    return `${import.meta.env.VITE_API_URL.replace('/api', '')}${img}`;
};

// ── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product, onDetails, onWishlist, isWishlisted }) => {
    const imageUrl = getImageUrl(product);
    return (
        <div className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-orange/30 transition-all duration-300 flex flex-col h-full relative">
            <div className="relative aspect-[4/3] p-4 flex items-center justify-center bg-gray-50 overflow-hidden group-hover:bg-white transition-colors duration-300">
                <img
                    src={imageUrl}
                    alt={product.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://placehold.co/400x300?text=No+Image'; }}
                />
                {product.countInStock === 0 && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Sold Out</div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                        className={`p-3 rounded-full shadow-lg transition-all transform hover:scale-110 ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-white text-gray-900 hover:bg-primary-orange hover:text-white'}`}
                        title="Wishlist"
                        onClick={(e) => { e.stopPropagation(); onWishlist(product); }}
                    >
                        <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>
                    <button
                        className="p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-primary-orange hover:text-white transition-all transform hover:scale-110"
                        title="View Details"
                        onClick={() => onDetails(product)}
                    >
                        <Eye size={18} />
                    </button>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1 border-t border-gray-100">
                <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.brand}</span>
                    <div className="flex text-primary-orange text-xs">
                        {'★'.repeat(Math.round(product.rating || 0))}
                        <span className="text-gray-200">{'★'.repeat(5 - Math.round(product.rating || 0))}</span>
                    </div>
                </div>
                <h3
                    className="text-sm font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary-orange transition-colors cursor-pointer line-clamp-2"
                    onClick={() => onDetails(product)}
                >
                    {product.title}
                </h3>
                <p className="text-xs text-gray-500 mb-4 line-clamp-2 flex-1">{product.description}</p>
                <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-50">
                    <div className="flex flex-col">
                        {product.oldPrice > 0 && (
                            <span className="text-xs text-gray-400 line-through">${Number(product.oldPrice).toFixed(2)}</span>
                        )}
                        <span className="text-lg font-bold text-gray-900">${Number(product.price).toFixed(2)}</span>
                    </div>
                    <button
                        onClick={() => onDetails(product)}
                        className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-orange transition-colors duration-300 flex items-center gap-2"
                    >
                        <ShoppingBag size={13} /> Details
                    </button>
                </div>
            </div>
        </div>
    );
};

// ── Single Category Section (used on the overview page) ──────────────────────
const CategorySection = ({ catName, catSlug, onViewAll, onDetails, onWishlist, isWishlisted }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/products?category=${encodeURIComponent(catName)}&limit=4`)
            .then(r => r.json())
            .then(d => setProducts(d.products || []))
            .catch(() => setProducts([]))
            .finally(() => setLoading(false));
    }, [catName]);

    return (
        <section className="mb-16">
            {/* Section header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-primary-orange rounded-full" />
                    <h2 className="text-2xl font-bold text-gray-900">{catName}</h2>
                    {!loading && (
                        <span className="text-sm text-gray-400 font-medium">
                            ({products.length} shown)
                        </span>
                    )}
                </div>
                <button
                    onClick={() => onViewAll(catSlug, catName)}
                    className="flex items-center gap-1 text-sm font-bold text-primary-orange hover:underline"
                >
                    View All <ChevronRight size={16} />
                </button>
            </div>

            {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => <div key={i} className="bg-gray-100 aspect-[4/3] rounded animate-pulse" />)}
                </div>
            ) : products.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-xl p-10 text-center text-gray-400">
                    <p>No products in this category yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(p => (
                        <ProductCard
                            key={p._id}
                            product={p}
                            onDetails={onDetails}
                            onWishlist={onWishlist}
                            isWishlisted={isWishlisted(p._id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

// ── Filtered View (single category, with search/sort/pagination) ─────────────
const FilteredView = ({ catName, onDetails, onWishlist, isWishlisted }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [debounced, setDeb] = useState('');
    const [sortBy, setSortBy] = useState('featured');

    const { loading, error, products = [], pages = 1, page = 1 } = useSelector(s => s.productList);

    useEffect(() => { const t = setTimeout(() => setDeb(search), 400); return () => clearTimeout(t); }, [search]);
    useEffect(() => { dispatch(listProducts(debounced, catName, 1)); }, [dispatch, debounced, catName]);

    const sorted = [...products].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        return 0;
    });

    return (
        <>
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between bg-gray-50 p-4 border border-gray-100">
                <div className="w-full md:w-1/3 relative">
                    <input
                        type="text" placeholder={`Search ${catName}...`} value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 text-sm focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-all"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                    className="py-3 px-4 bg-white border border-gray-200 text-sm focus:outline-none focus:border-primary-orange">
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                </select>
            </div>
            <p className="text-gray-500 text-sm mb-6">Showing <span className="font-bold text-black">{sorted.length}</span> results</p>

            {loading ? (
                <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-orange" /></div>
            ) : error ? (
                <div className="text-center py-20 text-red-500">
                    <p className="font-bold">{error}</p>
                    <button onClick={() => dispatch(listProducts('', catName, 1))} className="mt-4 px-6 py-2 bg-primary-orange text-white font-bold">Retry</button>
                </div>
            ) : sorted.length === 0 ? (
                <div className="text-center py-20">
                    <X size={40} className="text-gray-300 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-500">Try adjusting your search.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sorted.map(p => (
                        <ProductCard key={p._id} product={p} onDetails={onDetails} onWishlist={onWishlist} isWishlisted={isWishlisted(p._id)} />
                    ))}
                </div>
            )}

            {/* Pagination */}
            {pages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                    <button onClick={() => dispatch(listProducts(debounced, catName, page - 1))} disabled={page <= 1}
                        className="p-2 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-40">
                        <ChevronLeft size={18} />
                    </button>
                    {[...Array(pages)].map((_, i) => (
                        <button key={i + 1} onClick={() => dispatch(listProducts(debounced, catName, i + 1))}
                            className={`w-9 h-9 text-sm font-bold rounded border transition-colors ${page === i + 1 ? 'bg-black text-white border-black' : 'border-gray-200 hover:bg-gray-50'}`}>
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={() => dispatch(listProducts(debounced, catName, page + 1))} disabled={page >= pages}
                        className="p-2 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-40">
                        <ChevronRight size={18} />
                    </button>
                </div>
            )}
        </>
    );
};

// ── Main Printers Page ────────────────────────────────────────────────────────
const Printers = () => {
    const navigate = useNavigate();
    const { category: catSlug } = useParams();
    const { addToWishlist, isInWishlist } = useShop();

    // Load all categories dynamically from the backend
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        api.get('/categories')
            .then(res => {
                setAllCategories(Array.isArray(res.data) ? res.data : []);
            })
            .catch(() => setAllCategories([]));
    }, []);

    // Resolve active category from URL slug
    const activeCatObj = allCategories.find(c => c.slug === catSlug) || null;
    const activeCatName = activeCatObj?.name || '';

    const handleDetails = (product) => navigate(`/product/${product.slug || product._id}`);
    const handleWishlist = (product) => {
        const ok = addToWishlist(product);
        if (!ok) { alert('Please log in to save items to your wishlist.'); navigate('/login'); }
    };
    const handleViewAll = (slug, name) => navigate(`/shop/${slug}`);

    return (
        <div className="bg-white min-h-screen font-sans text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* ── Header ─────────────────────────────────────────────── */}
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold mb-4 tracking-tight">
                        {activeCatName || 'Popular Printers & Best-Selling Supplies'}
                    </h1>
                    <div className="w-20 h-1 bg-primary-orange mx-auto" />
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                        {activeCatName
                            ? `Browse our range of ${activeCatName}.`
                            : 'Browse customer favorites, top-rated items, and frequently purchased printing essentials.'}
                    </p>

                    {/* Category tabs */}
                    {allCategories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 mt-8">
                            <button
                                onClick={() => navigate('/shop')}
                                className={`px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors border ${!catSlug ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200 hover:border-primary-orange hover:text-primary-orange'}`}
                            >
                                All
                            </button>
                            {allCategories.map(cat => (
                                <button
                                    key={cat._id}
                                    onClick={() => navigate(`/shop/${cat.slug}`)}
                                    className={`px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors border ${catSlug === cat.slug ? 'bg-primary-orange text-white border-primary-orange' : 'bg-white text-gray-600 border-gray-200 hover:border-primary-orange hover:text-primary-orange'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── Content ────────────────────────────────────────────── */}
                {activeCatName ? (
                    <FilteredView
                        catName={activeCatName}
                        onDetails={handleDetails}
                        onWishlist={handleWishlist}
                        isWishlisted={isInWishlist}
                    />
                ) : (
                    allCategories.length === 0 ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-orange" />
                        </div>
                    ) : (
                        allCategories.map(cat => (
                            <CategorySection
                                key={cat._id}
                                catName={cat.name}
                                catSlug={cat.slug}
                                onViewAll={handleViewAll}
                                onDetails={handleDetails}
                                onWishlist={handleWishlist}
                                isWishlisted={isInWishlist}
                            />
                        ))
                    )
                )}
            </div>
        </div>
    );
};

export default Printers;
