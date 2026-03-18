import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails, createProductReview } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../redux/constants/productConstants';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import {
    Star, ShoppingBag, ShoppingCart, Heart, Truck, Shield,
    ChevronLeft, ChevronRight, Check, RotateCcw, Award
} from 'lucide-react';

/* ── Micro components ─────────────────────────────────────────────────────── */
const Loader = () => (
    <div className="flex justify-center items-center py-24">
        <div className="w-14 h-14 rounded-sm border-4 border-gray-100 border-t-[#024ad8] animate-spin" />
    </div>
);

const Alert = ({ variant = 'info', children }) => {
    const cls = {
        danger: 'bg-red-50 border-gray-100 text-red-700 font-extrabold uppercase tracking-widest text-[10px]',
        success: 'bg-green-50 border-gray-100 text-green-700 font-extrabold uppercase tracking-widest text-[10px]',
        info: 'bg-blue-50 border-gray-100 text-[#024ad8] font-extrabold uppercase tracking-widest text-[10px]',
    };
    return <div className={`rounded-sm p-5 border text-center ${cls[variant] || cls.info}`}>{children}</div>;
};

const Stars = ({ value, size = 16, interactive = false, onSet, onHover, onLeave }) => (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
            <Star
                key={s}
                size={size}
                fill={value >= s ? 'currentColor' : 'none'}
                className={`${value >= s ? 'text-[#024ad8]' : 'text-gray-200'} ${interactive ? 'cursor-pointer transition-transform hover:scale-110' : ''}`}
                onClick={interactive ? () => onSet?.(s) : undefined}
                onMouseEnter={interactive ? () => onHover?.(s) : undefined}
                onMouseLeave={interactive ? () => onLeave?.() : undefined}
            />
        ))}
    </div>
);

/* helper chip */
const Chip = ({ label, value }) => (
    <span className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-sm px-4 py-2 text-[9px] uppercase font-extrabold tracking-[0.2em] text-gray-300 shadow-sm">
        {label && <span className="text-gray-400">{label}:</span>}
        <span className="text-black">{value}</span>
    </span>
);
/* ─────────────────────────────────────────────────────────────────────────── */

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [activeImg, setActiveImg] = useState(0);
    const [qty, setQty] = useState(1);
    const [activeTab, setActiveTab] = useState('overview');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');

    const { addToWishlist, isInWishlist, addToCart: ctxAddToCart } = useShop();
    const { isAuthenticated } = useAuth();

    const { loading, error, product } = useSelector((s) => s.productDetails);
    const { userInfo } = useSelector((s) => s.userLogin);
    const {
        success: okReview,
        loading: loadingReview,
        error: errReview,
    } = useSelector((s) => s.productReviewCreate);

    /* fetch ---------------------------------------------------------------- */
    useEffect(() => {
        dispatch(listProductDetails(id));
        setActiveImg(0);
        window.scrollTo({ top: 0 });
    }, [dispatch, id]);

    useEffect(() => {
        if (okReview) {
            setRating(0); setComment('');
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
            dispatch(listProductDetails(id));
        }
    }, [dispatch, id, okReview]);

    /* helpers -------------------------------------------------------------- */
    const imgUrl = (src) => {
        if (!src) return 'https://placehold.co/600x600?text=No+Image';
        return src.startsWith('http') ? src : `${import.meta.env.VITE_API_URL.replace('/api', '')}${src}`;
    };

    const images = product?.images?.length ? product.images : [];
    const mainImg = images[activeImg] ? imgUrl(images[activeImg]) : 'https://placehold.co/600x600?text=No+Image';
    const toCart = () => {
        if (!isAuthenticated) { alert('Please sign in to add items to cart.'); navigate('/login'); return; }
        ctxAddToCart(product, qty); navigate('/cart');
    };
    const buyNow = () => {
        if (!isAuthenticated) { alert('Please sign in to buy products.'); navigate('/login'); return; }
        ctxAddToCart(product, qty); navigate('/cart?redirect=shipping');
    };
    const wishlist = () => {
        if (!isAuthenticated) { alert('Please sign in to save items.'); navigate('/login'); return; }
        if (!addToWishlist(product)) { alert('Please sign in to save items.'); navigate('/login'); }
    };

    const submitReview = (e) => {
        e.preventDefault();
        dispatch(createProductReview(id, { rating, comment }));
    };

    /* ── render ─────────────────────────────────────────────────────────── */
    return (
        <div className="bg-[#F8F9FA] min-h-screen">

            {/* ── Breadcrumb ───────────────────────────────────────────── */}
            <div className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <nav className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[0.3em] text-gray-300">
                        <Link to="/" className="hover:text-[#024ad8] transition-colors">Home</Link>
                        <ChevronRight size={10} className="text-gray-200" />
                        <Link to="/shop" className="hover:text-[#024ad8] transition-colors">Asset Catalog</Link>
                        <ChevronRight size={10} className="text-gray-200" />
                        <span className="text-black truncate max-w-xs block">
                            {product?.title || 'Specifications'}
                        </span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

                {loading ? <Loader /> : error ? (
                    <div className="max-w-lg mx-auto mt-8 space-y-6">
                        <Alert variant="danger">{error}</Alert>
                        <button onClick={() => navigate('/shop')} className="flex items-center justify-center gap-3 w-full py-4 font-extrabold text-[10px] uppercase tracking-[0.3em] text-black border border-black hover:bg-black hover:text-white rounded-sm transition-all">
                            <ChevronLeft size={14} /> Back to Catalog
                        </button>
                    </div>
                ) : product ? (
                    <>
                        {/* ══ MAIN GRID ══════════════════════════════════ */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

                            {/* ── LEFT: Gallery ─────────────────────── */}
                            <div className="space-y-8">
                                {/* Main image */}
                                <div className="relative bg-white aspect-square rounded-sm overflow-hidden flex items-center justify-center border border-gray-50 group shadow-2xl shadow-black/[0.02]">
                                    <img
                                        src={mainImg}
                                        alt={product.title}
                                        className="w-full h-full object-contain p-16 mix-blend-multiply transition-transform duration-[2000ms] group-hover:scale-105"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x600?text=No+Image'; }}
                                    />

                                    {/* Stock badge */}
                                    <div className="absolute top-8 left-8">
                                        {product.countInStock > 0 ? (
                                            <span className="inline-flex items-center gap-2 bg-[#024ad8] text-white text-[9px] font-extrabold px-5 py-2 rounded-sm uppercase tracking-[0.2em] shadow-xl shadow-[#024ad8]/20">
                                                <Check size={12} strokeWidth={3} /> Logistics: Ready
                                            </span>
                                        ) : (
                                            <span className="bg-black text-white text-[9px] font-extrabold px-5 py-2 rounded-sm uppercase tracking-[0.2em] shadow-xl shadow-black/20">
                                                Depleted State
                                            </span>
                                        )}
                                    </div>

                                    {/* Wishlist floating btn */}
                                    <button
                                        onClick={wishlist}
                                        className={`absolute top-8 right-8 w-12 h-12 rounded-sm shadow-xl flex items-center justify-center transition-all duration-500
                                            ${isInWishlist(product._id) ? 'bg-red-500 text-white scale-110' : 'bg-white text-gray-400 hover:text-red-500 hover:bg-red-50'}`}
                                        title="Wishlist"
                                    >
                                        <Heart size={20} fill={isInWishlist(product._id) ? 'currentColor' : 'none'} strokeWidth={isInWishlist(product._id) ? 0 : 2} />
                                    </button>

                                    {/* Arrow nav */}
                                    {images.length > 1 && (
                                        <>
                                            <button onClick={() => setActiveImg((p) => (p - 1 + images.length) % images.length)}
                                                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md shadow-2xl rounded-sm flex items-center justify-center text-black hover:text-[#024ad8] opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button onClick={() => setActiveImg((p) => (p + 1) % images.length)}
                                                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md shadow-2xl rounded-sm flex items-center justify-center text-black hover:text-[#024ad8] opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <ChevronRight size={24} />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnails */}
                                {images.length > 1 && (
                                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                                        {images.map((img, i) => (
                                            <button key={i} onClick={() => setActiveImg(i)}
                                                className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-500 bg-white ${activeImg === i ? 'border-[#024ad8] shadow-2xl scale-105' : 'border-gray-50 hover:border-gray-200'}`}>
                                                <img src={imgUrl(img)} alt={`view ${i + 1}`}
                                                    className="w-full h-full object-contain p-2 mix-blend-multiply"
                                                    onError={(e) => { e.target.src = 'https://placehold.co/80x80?text=x'; }} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* ── RIGHT: Info ───────────────────────── */}
                            <div className="flex flex-col py-4">

                                {/* Brand / category chips */}
                                <div className="flex flex-wrap items-center gap-3 mb-8">
                                    {product.brand && (
                                        <span className="text-[10px] font-extrabold text-[#024ad8] bg-blue-50/50 border border-blue-100/50 px-4 py-1.5 rounded-sm uppercase tracking-[0.25em]">
                                            {product.brand}
                                        </span>
                                    )}
                                    {product.category?.name && (
                                        <span className="text-[10px] font-extrabold text-gray-400 bg-white border border-gray-50 px-4 py-1.5 rounded-sm uppercase tracking-[0.2em] shadow-sm">
                                            {product.category.name}
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-black mb-10 leading-[1.1] tracking-tighter uppercase max-w-xl">
                                    {product.title}
                                </h1>

                                {/* Rating row */}
                                <div className="flex items-center gap-6 mb-10 pb-10 border-b border-gray-100/50">
                                    <Stars value={Math.round(product.rating || 0)} size={18} />
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-extrabold text-black">
                                            {Number(product.rating || 0).toFixed(1)}
                                        </span>
                                        <span className="text-[10px] font-extrabold text-gray-300 uppercase tracking-widest border-l border-gray-200 pl-4">
                                            {product.numReviews || 0} AUDITED REVIEWS
                                        </span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="flex items-end gap-5 mb-12">
                                    <span className="text-5xl font-extrabold text-black tracking-tighter">
                                        ${Number(product.price || 0).toFixed(2)}
                                    </span>
                                    {product.oldPrice > 0 && (
                                        <div className="flex flex-col mb-1.5">
                                            <span className="text-sm text-gray-300 line-through font-extrabold tracking-tight">
                                                MSRP: ${Number(product.oldPrice).toFixed(2)}
                                            </span>
                                            <span className="text-[9px] font-extrabold text-white bg-[#024ad8] px-3 py-1 rounded-sm uppercase tracking-[0.2em] mt-1 shadow-lg shadow-[#024ad8]/20 inline-block text-center">
                                                PROTECTIVE MARGIN: -${(product.oldPrice - product.price).toFixed(2)}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Multi-Attributes */}
                                <div className="flex flex-wrap gap-4 mb-12">
                                    {product.technology?.length > 0 && (
                                        <Chip label="CORE TECH" value={product.technology.join(', ')} />
                                    )}
                                    {product.usageCategory?.length > 0 && (
                                        <Chip label="USE CASE" value={product.usageCategory.join(', ')} />
                                    )}
                                </div>

                                {/* ── Quantity + Buttons ──────────────── */}
                                {product.countInStock > 0 ? (
                                    <div className="space-y-8 bg-white p-10 rounded-sm border border-gray-50 shadow-2xl shadow-black/[0.02]">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.3em]">Batch Quantity</span>
                                                <div className="flex items-center border border-gray-100 rounded-sm overflow-hidden bg-[#F8F9FA]">
                                                    <button
                                                        onClick={() => setQty(Math.max(1, qty - 1))}
                                                        className="w-14 h-14 flex items-center justify-center text-xl font-bold hover:bg-white transition-all border-r border-gray-100"
                                                    >−</button>
                                                    <span className="min-w-[60px] text-center font-extrabold text-lg tracking-tighter">{qty}</span>
                                                    <button
                                                        onClick={() => setQty(Math.min(product.countInStock, qty + 1))}
                                                        className="w-14 h-14 flex items-center justify-center text-xl font-bold hover:bg-white transition-all border-l border-gray-100"
                                                    >+</button>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.3em] bg-blue-50 px-4 py-2 rounded-sm border border-blue-100 inline-block">
                                                    PROCUREMENT RESERVOIR: {product.countInStock}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Buttons Row */}
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <button
                                                onClick={toCart}
                                                className="flex-1 flex items-center justify-center gap-4 bg-black text-white font-extrabold py-6 px-10 rounded-sm hover:-translate-y-1 transition-all text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-black/10 active:translate-y-0"
                                            >
                                                <ShoppingCart size={18} />
                                                Authorize Addition
                                            </button>

                                            <button
                                                onClick={buyNow}
                                                className="flex-1 flex items-center justify-center gap-4 bg-[#024ad8] text-white font-extrabold py-6 px-10 rounded-sm hover:-translate-y-1 transition-all text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-[#024ad8]/20 active:translate-y-0"
                                            >
                                                <ShoppingBag size={18} />
                                                Execute Procurement
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full py-8 text-center bg-black text-white rounded-sm font-extrabold uppercase tracking-[0.4em] text-xs shadow-2xl shadow-black/20">
                                        RESOURCE DEPLETED • NOTIFY UPON REPLENISHMENT
                                    </div>
                                )}

                                 {/* ── Trust badges ────────────────────── */}
                                 <div className="grid grid-cols-2 gap-6 mt-16">
                                     {[
                                         { icon: <Truck size={20} />, label: 'Standard Logistics', sub: 'Priority Dispatch' },
                                         { icon: <RotateCcw size={20} />, label: 'Asset Reversal', sub: '30-Day Window' },
                                         { icon: <Shield size={20} />, label: 'Integrated Warranty', sub: 'Core Coverage' },
                                         { icon: <Award size={20} />, label: 'Authentic Source', sub: 'OEM Certified' },
                                     ].map((b, i) => (
                                         <div key={i} className="flex flex-col gap-4 p-6 bg-white rounded-sm border border-gray-50 group hover:border-[#024ad8]/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/[0.03]">
                                             <div className="w-12 h-12 rounded-sm bg-[#F8F9FA] border border-gray-100 flex items-center justify-center shrink-0 text-black shadow-inner group-hover:bg-[#024ad8] group-hover:text-white transition-all transform group-hover:rotate-12">
                                                 {b.icon}
                                             </div>
                                             <div>
                                                 <p className="text-[11px] font-extrabold text-black uppercase tracking-[0.2em]">{b.label}</p>
                                                 <p className="text-[8px] font-extrabold text-gray-300 uppercase tracking-widest mt-1.5">{b.sub}</p>
                                             </div>
                                         </div>
                                     ))}
                                 </div>
                            </div>
                        </div>

                        {/* ══ TABS ══════════════════════════════════════ */}
                        <div className="bg-white rounded-sm border border-gray-50 shadow-2xl shadow-black/[0.02] overflow-hidden">
                            {/* Tab header */}
                            <div className="flex border-b border-gray-100 bg-white px-8 sm:px-16 overflow-x-auto scrollbar-hide">
                                <div className="flex w-full sm:w-auto">
                                    {['overview', 'specifications', 'reviews'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`relative py-10 px-6 sm:px-2 mr-12 sm:mr-20 text-[11px] font-extrabold uppercase tracking-[0.4em] transition-all flex-shrink-0 whitespace-nowrap ${activeTab === tab ? 'text-[#024ad8]' : 'text-gray-300 hover:text-black'}`}
                                        >
                                            {tab}
                                            {activeTab === tab && (
                                                <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#024ad8]" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab body */}
                            <div className="p-10 lg:p-20 min-h-96">

                                {/* OVERVIEW */}
                                {activeTab === 'overview' && (
                                    <div className="max-w-4xl mx-auto">
                                        <div
                                            className="prose prose-sm max-w-none text-gray-500 leading-[1.8] font-medium uppercase tracking-wider prose-headings:text-black prose-headings:font-extrabold prose-headings:tracking-tighter prose-headings:uppercase prose-p:mb-8"
                                            dangerouslySetInnerHTML={{ __html: product.overview }}
                                        />
                                    </div>
                                )}

                                {/* SPECIFICATIONS */}
                                {activeTab === 'specifications' && (
                                    <div className="max-w-5xl mx-auto">
                                        <h2 className="text-2xl font-extrabold text-black mb-12 uppercase tracking-tight">Integrated System Metrics</h2>
                                        {product.technicalSpecification ? (
                                            <div
                                                className="prose max-w-none text-gray-600 [&>table]:w-full [&>table]:border-collapse [&>table>tbody>tr]:border-b [&>table>tbody>tr]:border-gray-50 [&>table>tbody>tr>td]:py-6 [&>table>tbody>tr>td]:px-8 [&>table>tbody>tr>td]:text-[11px] [&>table>tbody>tr>td]:font-bold [&>table>tbody>tr>td]:uppercase [&>table>tbody>tr>td]:tracking-widest [&>table>tbody>tr>td:first-child]:font-extrabold [&>table>tbody>tr>td:first-child]:w-1/3 [&>table>tbody>tr>td:first-child]:bg-[#F8F9FA] [&>table>tbody>tr>td:first-child]:text-black"
                                                dangerouslySetInnerHTML={{ __html: product.technicalSpecification }}
                                            />
                                        ) : (
                                            <Alert>Metric data unavailable for this asset sequence.</Alert>
                                        )}
                                    </div>
                                )}

                                {/* REVIEWS */}
                                {activeTab === 'reviews' && (
                                    <div className="grid lg:grid-cols-12 gap-20">

                                        {/* List */}
                                        <div className="lg:col-span-7">
                                             <h2 className="text-xl font-extrabold text-black mb-12 uppercase tracking-tight flex items-center gap-6">
                                                 Audited Feedback
                                                 {product.numReviews > 0 && (
                                                     <span className="text-[10px] font-extrabold text-[#024ad8] bg-blue-50 px-4 py-1.5 rounded-sm border border-blue-100 uppercase tracking-widest">{product.numReviews} ENTRIES</span>
                                                 )}
                                             </h2>

                                             {/* Average summary card */}
                                             {product.numReviews > 0 && (
                                                 <div className="flex items-center gap-12 p-12 bg-[#F8F9FA] border border-gray-100 rounded-sm mb-16 shadow-inner">
                                                     <div className="text-7xl font-extrabold text-black tracking-tighter">
                                                         {Number(product.rating || 0).toFixed(1)}
                                                     </div>
                                                     <div className="space-y-3">
                                                         <Stars value={Math.round(product.rating || 0)} size={28} />
                                                         <p className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.3em] bg-white px-4 py-2 rounded-sm border border-gray-100 inline-block shadow-sm">Verified Operational Quality</p>
                                                     </div>
                                                 </div>
                                             )}

                                            {!product.reviews?.length ? (
                                                <Alert>Zero audit entries identified. Be the first to initialize feedback loop.</Alert>
                                            ) : (
                                                <div className="space-y-8">
                                                     {product.reviews.map((rev) => (
                                                         <div key={rev._id} className="border border-gray-50 rounded-sm p-10 bg-white hover:bg-[#F8F9FA] transition-all duration-500 shadow-sm group">
                                                             <div className="flex items-start justify-between mb-8">
                                                                 <div className="flex items-center gap-6">
                                                                     <div className="w-14 h-14 rounded-sm bg-black flex items-center justify-center text-white font-black text-sm uppercase shadow-xl group-hover:bg-[#024ad8] transition-colors">
                                                                         {rev.name?.charAt(0)?.toUpperCase() || 'U'}
                                                                     </div>
                                                                     <div>
                                                                         <p className="font-extrabold text-xs text-black uppercase tracking-[0.2em]">{rev.name}</p>
                                                                         <p className="text-[9px] font-extrabold text-gray-300 uppercase tracking-widest mt-1.5">{rev.createdAt?.substring(0, 10)} • STAMPED</p>
                                                                     </div>
                                                                 </div>
                                                                 <Stars value={rev.rating} size={14} />
                                                             </div>
                                                             <p className="text-gray-500 text-[11px] leading-relaxed font-bold uppercase tracking-[0.15em] border-l-4 border-gray-100 pl-8 group-hover:border-[#024ad8] transition-all">{rev.comment}</p>
                                                         </div>
                                                     ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Write review */}
                                        <div className="lg:col-span-5">
                                            <h2 className="text-xl font-extrabold text-black mb-12 uppercase tracking-tight">Initialize Audit Entry</h2>

                                            {okReview && <div className="mb-8"><Alert variant="success">Audit Entry Successfully Cataloged.</Alert></div>}
                                            {errReview && <div className="mb-8"><Alert variant="danger">{errReview}</Alert></div>}

                                            {userInfo ? (
                                                <form onSubmit={submitReview} className="bg-[#F8F9FA] border border-gray-100 rounded-sm p-12 space-y-12 shadow-inner">
                                                    <div className="space-y-6">
                                                        <label className="block text-[11px] font-extrabold text-black uppercase tracking-[0.3em]">Quality Coefficient</label>
                                                        <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm inline-block">
                                                            <Stars
                                                                value={hoverRating || rating}
                                                                size={40}
                                                                interactive
                                                                onSet={setRating}
                                                                onHover={setHoverRating}
                                                                onLeave={() => setHoverRating(0)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-6">
                                                        <label className="block text-[11px] font-extrabold text-black uppercase tracking-[0.3em]">Technical Commentary</label>
                                                        <textarea
                                                            rows="6"
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                            placeholder="IDENTIFY PERFORMANCE METRICS AND USER EXPERIENCE PARAMETERS..."
                                                            className="w-full p-8 bg-white border border-gray-100 rounded-sm text-[11px] font-extrabold uppercase tracking-widest focus:outline-none focus:border-[#024ad8] resize-none placeholder:text-gray-200 shadow-sm min-h-[200px]"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        disabled={loadingReview || rating === 0 || !comment.trim()}
                                                        className="w-full py-6 bg-black text-white font-extrabold rounded-sm hover:bg-[#024ad8] transition-all uppercase tracking-[0.5em] text-[11px] disabled:opacity-20 disabled:cursor-not-allowed shadow-2xl shadow-black/10 transform hover:-translate-y-1 active:translate-y-0"
                                                    >
                                                        {loadingReview ? 'SYNCING...' : 'COMMIT AUDIT ENTRY'}
                                                    </button>
                                                </form>
                                            ) : (
                                                <div className="bg-white border border-gray-100 rounded-sm p-12 text-center shadow-xl">
                                                    <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.3em] mb-10 leading-relaxed">Identity verification required to initialize feedback terminal.</p>
                                                    <Link to="/login"
                                                        className="inline-block bg-black text-white font-extrabold px-12 py-5 rounded-sm hover:bg-[#024ad8] transition-all uppercase tracking-[0.4em] text-[11px] transform hover:-translate-y-1 active:translate-y-0 shadow-xl">
                                                        Verify Identity
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                )}

                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};


export default ProductDetails;
