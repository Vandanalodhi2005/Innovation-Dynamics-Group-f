import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import { Eye, ShoppingBag, Heart, ChevronRight, X, ChevronLeft } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import api from '../utils/api';

// Build image URL from product
const getImageUrl = (product) => {
    if (!product.images || product.images.length === 0)
        return 'https://placehold.co/600x600?text=No+Image';
    const img = product.images[0];
    if (img.startsWith('http')) return img;
    const baseUrl = import.meta.env.VITE_API_URL.replace('/api', '');
    const path = img.startsWith('/') ? img : `/${img}`;
    return `${baseUrl}${path}`;
};

// ── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product, onDetails, onWishlist, isWishlisted }) => {
    const imageUrl = getImageUrl(product);
    return (
        <div
            className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative rounded-sm overflow-hidden flex flex-row sm:flex-col h-full"
        >
            {/* Image area */}
            <div className="relative flex-shrink-0 w-32 sm:w-auto sm:aspect-[4/3] sm:flex flex-col items-center justify-center bg-gray-50/50 overflow-hidden group-hover:bg-white transition-colors duration-500 aspect-square">
                <img
                    src={imageUrl}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 sm:p-6 transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = 'https://placehold.co/400x300?text=No+Image'; }}
                />
                {product.countInStock === 0 && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider">Sold Out</div>
                )}
                {/* Hover overlay buttons — only on sm+ */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:flex items-center justify-center gap-2">
                    <button
                        className={`p-2.5 shadow-lg transition-all transform hover:scale-110 rounded-sm ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-white text-gray-900 hover:bg-[#024ad8] hover:text-white'}`}
                        title="Wishlist"
                        onClick={(e) => { e.stopPropagation(); onWishlist(product); }}
                    >
                        <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>
                    <button
                        className="p-2.5 bg-white text-gray-900 shadow-lg hover:bg-[#024ad8] hover:text-white transition-all transform hover:scale-110 rounded-sm"
                        title="View Details"
                        onClick={() => onDetails(product)}
                    >
                        <Eye size={16} />
                    </button>
                </div>
            </div>

            {/* Content area */}
            <div className="p-4 sm:p-6 flex flex-col flex-1 sm:border-t border-l sm:border-l-0 border-gray-50 min-w-0">
                <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.brand || 'HP'}</span>
                    <div className="flex text-[#024ad8] text-[10px]">
                        {'★'.repeat(Math.min(5, Math.max(0, Math.round(product.rating || 0))))}
                        <span className="text-gray-200">{'★'.repeat(Math.max(0, 5 - Math.min(5, Math.max(0, Math.round(product.rating || 0)))))}</span>
                    </div>
                </div>
                <h3
                    className="text-sm font-bold text-black mb-2 leading-tight group-hover:text-[#024ad8] transition-colors cursor-pointer line-clamp-2"
                    onClick={() => onDetails(product)}
                >
                    {product.title || 'HP Printer'}
                </h3>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2 flex-grow leading-relaxed hidden sm:block">{product.description || 'Professional printing solution for your needs.'}</p>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex flex-col">
                        {Number(product.oldPrice) > 0 && (
                            <span className="text-[10px] text-gray-400 line-through font-bold">${Number(product.oldPrice).toFixed(2)}</span>
                        )}
                        <span className="text-base sm:text-lg font-black text-black tracking-tight">${Number(product.price || 0).toFixed(2)}</span>
                    </div>
                    <button
                        onClick={() => onDetails(product)}
                        className="px-3 sm:px-5 py-2 bg-[#024ad8] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#0133a1] transition-all duration-300 flex items-center gap-1.5 rounded-sm shadow-sm"
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
        fetch(`${import.meta.env.VITE_API_URL}/products?category=${encodeURIComponent(catName)}&limit=4&brand=HP`)
            .then(r => r.json())
            .then(d => setProducts(d.products || []))
            .catch(() => setProducts([]))
            .finally(() => setLoading(false));
    }, [catName]);

    if (!loading && products.length === 0) return null;

    return (
        <section className="mb-16">
            {/* Section header */}
            <div className="flex items-center justify-between mb-8 border-b-2 border-gray-50 pb-4">
                <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-[#024ad8]" />
                    <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight">{catName}</h2>
                    {!loading && (
                        <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest ml-2">
                            [{products.length} Models]
                        </span>
                    )}
                </div>
                <button
                    onClick={() => onViewAll(catSlug, catName)}
                    className="flex items-center gap-2 text-xs font-bold text-[#024ad8] hover:text-[#0133a1] uppercase tracking-widest group transition-colors"
                >
                    View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => <div key={i} className="bg-gray-100 aspect-[4/3] rounded animate-pulse" />)}
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

// ── Filtered View (single category or search, with search/sort/pagination) ─────────────
const FilteredView = ({ catName, initialSearch = '', onDetails, onWishlist, isWishlisted }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(initialSearch);
    const [debounced, setDeb] = useState(initialSearch);
    const [sortBy, setSortBy] = useState('featured');

    const productList = useSelector(s => s.productList || {});
    const { loading, error, products = [], pages = 1, page = 1 } = productList;

    useEffect(() => { setSearch(initialSearch); }, [initialSearch]);
    useEffect(() => { const t = setTimeout(() => setDeb(search), 400); return () => clearTimeout(t); }, [search]);
    useEffect(() => { 
        console.log(`[DEBUG] FilteredView dispatching listProducts for: "${catName}"`);
        dispatch(listProducts(debounced, catName, 1, 'HP')); 
    }, [dispatch, debounced, catName]);

    if (error) {
        return (
            <div className="text-center py-20 text-red-500">
                <p className="font-bold">{error}</p>
                <button onClick={() => dispatch(listProducts('', catName, 1))} className="mt-4 px-6 py-2 bg-primary-blue text-white font-bold text-xs uppercase tracking-widest">Retry</button>
            </div>
        );
    }

    const safeProducts = Array.isArray(products) ? products : [];

    const sorted = [...safeProducts].sort((a, b) => {
        if (sortBy === 'price-low') return (a.price || 0) - (b.price || 0);
        if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0);
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        return 0;
    });

    return (
        <>
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-12 items-stretch md:items-center justify-between bg-white p-4 md:p-6 border-b-4 border-black shadow-2xl shadow-gray-100">
                <div className="w-full md:w-1/2 relative">
                    <input
                        type="text" placeholder={`ENTER SEARCH PARAMETERS...`} value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-100 text-[11px] font-bold uppercase tracking-[0.1em] focus:outline-none focus:ring-1 focus:ring-[#024ad8] focus:bg-white rounded-sm transition-all placeholder:text-gray-300"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">Sort:</span>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                        className="flex-1 md:flex-none py-3 md:py-4 px-4 md:px-6 bg-gray-50 border border-gray-100 text-[11px] font-bold uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-[#024ad8] focus:bg-white rounded-sm transition-all cursor-pointer">
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 flex-grow bg-gray-100"></div>
                <p className="text-gray-400 text-xs font-medium whitespace-nowrap">
                    <span className="text-[#024ad8] font-bold">{sorted.length}</span> products found
                </p>
                <div className="h-0.5 flex-grow bg-gray-100"></div>
            </div>

            {loading ? (
                <div className="flex justify-center py-32">
                    <div className="animate-spin rounded-sm h-12 w-12 border-4 border-[#024ad8] border-t-transparent shadow-xl" />
                </div>
            ) : sorted.length === 0 ? (
                <div className="text-center py-28 bg-gray-50 rounded-sm border border-dashed border-gray-200">
                    <X size={40} className="text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-black mb-2">No Products Found</h3>
                    <p className="text-sm text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {sorted.map(p => (
                        <ProductCard 
                            key={p._id || Math.random()} 
                            product={p} 
                            onDetails={onDetails} 
                            onWishlist={onWishlist} 
                            isWishlisted={typeof isWishlisted === 'function' ? isWishlisted(p._id) : false} 
                        />
                    ))}
                </div>
            )}

            {/* Pagination: Professional & Sharp */}
            {pages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-20 pb-16">
                    <button 
                        onClick={() => dispatch(listProducts(debounced, catName, page - 1, 'HP'))} 
                        disabled={page <= 1}
                        className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-sm bg-white hover:border-black transition-all disabled:opacity-20 shadow-sm"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    {[...Array(isNaN(pages) ? 0 : Number(pages))].map((_, i) => (
                        <button key={i + 1} onClick={() => dispatch(listProducts(debounced, catName, i + 1, 'HP'))}
                            className={`w-12 h-12 text-[11px] font-bold uppercase tracking-wider rounded-sm border transition-all shadow-sm ${page === i + 1 ? 'bg-black text-white border-black shadow-[#024ad8]/20' : 'bg-white text-gray-400 border-gray-100 hover:border-[#024ad8] hover:text-[#024ad8]'}`}>
                            {String(i + 1).padStart(2, '0')}
                        </button>
                    ))}
                    <button 
                        onClick={() => dispatch(listProducts(debounced, catName, page + 1, 'HP'))} 
                        disabled={page >= pages}
                        className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-sm bg-white hover:border-black transition-all disabled:opacity-20 shadow-sm"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </>
    );
};

// ── Main Printers Page ────────────────────────────────────────────────────────
const Printers = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { category: catSlug } = useParams();
    const { addToWishlist, isInWishlist } = useShop();

    // Get search query from URL
    const searchParams = new URLSearchParams(location.search);
    const globalSearch = searchParams.get('search') || '';

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

                {/* ── Header ─────────────────────────────────────────────── */}
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#024ad8] mb-4 block">Official Catalog</span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight text-black uppercase leading-tight">
                        {globalSearch ? `Search: "${globalSearch}"` : (activeCatName ? `HP ${activeCatName}` : 'Reliable Printing Solutions')}
                    </h1>
                    <div className="w-16 h-1 bg-[#024ad8] mx-auto" />
                    <p className="text-gray-500 mt-4 md:mt-6 text-base md:text-lg max-w-2xl mx-auto font-medium">
                        {globalSearch
                            ? `Showing filtered search results from our professional HP inventory.`
                            : (activeCatName
                                ? `Explore our high-performance range of ${activeCatName} designed for reliability.`
                                : 'Browse our carefully selected range of professional HP printers and genuine supplies.')}
                    </p>

                    {/* Category tabs: Sharp & Professional */}
                    {allCategories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 md:mt-12 pb-2">
                            <button
                                onClick={() => navigate('/shop')}
                                className={`px-4 sm:px-8 py-2 sm:py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-all border rounded-sm ${!catSlug ? 'bg-black text-white border-black shadow-lg shadow-black/10' : 'bg-white text-gray-500 border-gray-100 hover:border-[#024ad8] hover:text-[#024ad8]'}`}
                            >
                                All Models
                            </button>
                            {allCategories.map(cat => (
                                <button
                                    key={cat._id}
                                    onClick={() => navigate(`/shop/${cat.slug}`)}
                                    className={`px-4 sm:px-8 py-2 sm:py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-all border rounded-sm ${catSlug === cat.slug ? 'bg-[#024ad8] text-white border-[#024ad8] shadow-lg shadow-[#024ad8]/10' : 'bg-white text-gray-500 border-gray-100 hover:border-[#024ad8] hover:text-[#024ad8]'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── Content ────────────────────────────────────────────── */}
                {globalSearch ? (
                    <FilteredView
                        catName=""
                        initialSearch={globalSearch}
                        onDetails={handleDetails}
                        onWishlist={handleWishlist}
                        isWishlisted={isInWishlist}
                    />
                ) : activeCatName ? (
                    <FilteredView
                        catName={activeCatName}
                        onDetails={handleDetails}
                        onWishlist={handleWishlist}
                        isWishlisted={isInWishlist}
                    />
                ) : (
                    allCategories.length === 0 ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue" />
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
