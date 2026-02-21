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
        <div className="w-14 h-14 rounded-full border-4 border-gray-200 border-t-primary-orange animate-spin" />
    </div>
);

const Alert = ({ variant = 'info', children }) => {
    const cls = {
        danger: 'bg-red-50  border-l-4 border-red-500  text-red-700',
        success: 'bg-green-50 border-l-4 border-green-500 text-green-700',
        info: 'bg-orange-50 border-l-4 border-primary-orange text-orange-800',
    };
    return <div className={`rounded-lg p-4 text-sm ${cls[variant] || cls.info}`}>{children}</div>;
};

const Stars = ({ value, size = 16, interactive = false, onSet, onHover, onLeave }) => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
            <Star
                key={s}
                size={size}
                fill={value >= s ? 'currentColor' : 'none'}
                className={`${value >= s ? 'text-primary-orange' : 'text-gray-300'} ${interactive ? 'cursor-pointer transition-transform hover:scale-110' : ''}`}
                onClick={interactive ? () => onSet?.(s) : undefined}
                onMouseEnter={interactive ? () => onHover?.(s) : undefined}
                onMouseLeave={interactive ? () => onLeave?.() : undefined}
            />
        ))}
    </div>
);

/* helper chip */
const Chip = ({ label, value }) => (
    <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-sm">
        {label && <span className="text-gray-500">{label}:</span>}
        <span className="font-bold text-gray-800">{value}</span>
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
        <div className="bg-white min-h-screen font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>

            {/* ── Breadcrumb ───────────────────────────────────────────── */}
            <div className="border-b border-gray-100 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link to="/" className="hover:text-primary-orange transition-colors">Home</Link>
                        <ChevronRight size={13} className="text-gray-300" />
                        <Link to="/shop" className="hover:text-primary-orange transition-colors">Shop</Link>
                        <ChevronRight size={13} className="text-gray-300" />
                        <span className="text-gray-900 font-semibold truncate max-w-xs">
                            {product?.title || 'Product Details'}
                        </span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {loading ? <Loader /> : error ? (
                    <div className="max-w-lg mx-auto mt-8 space-y-4">
                        <Alert variant="danger">{error}</Alert>
                        <button onClick={() => navigate('/shop')} className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-primary-orange">
                            <ChevronLeft size={16} /> Back to Shop
                        </button>
                    </div>
                ) : product ? (
                    <>
                        {/* ══ MAIN GRID ══════════════════════════════════ */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

                            {/* ── LEFT: Gallery ─────────────────────── */}
                            <div>
                                {/* Main image */}
                                <div className="relative bg-gray-50 aspect-square rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100 group mb-4">
                                    <img
                                        src={mainImg}
                                        alt={product.title}
                                        className="w-full h-full object-contain p-10 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x600?text=No+Image'; }}
                                    />

                                    {/* Stock badge */}
                                    <div className="absolute top-4 left-4">
                                        {product.countInStock > 0 ? (
                                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                                <Check size={10} /> In Stock
                                            </span>
                                        ) : (
                                            <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                                Out of Stock
                                            </span>
                                        )}
                                    </div>

                                    {/* Wishlist floating btn */}
                                    <button
                                        onClick={wishlist}
                                        className={`absolute top-4 right-4 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all
                                            ${isInWishlist(product._id) ? 'bg-red-500 text-white' : 'bg-white text-gray-400 hover:text-red-500'}`}
                                        title="Wishlist"
                                    >
                                        <Heart size={17} fill={isInWishlist(product._id) ? 'currentColor' : 'none'} />
                                    </button>

                                    {/* Arrow nav */}
                                    {images.length > 1 && (
                                        <>
                                            <button onClick={() => setActiveImg((p) => (p - 1 + images.length) % images.length)}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white shadow rounded-full flex items-center justify-center text-gray-600 hover:text-primary-orange opacity-0 group-hover:opacity-100 transition-all">
                                                <ChevronLeft size={18} />
                                            </button>
                                            <button onClick={() => setActiveImg((p) => (p + 1) % images.length)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white shadow rounded-full flex items-center justify-center text-gray-600 hover:text-primary-orange opacity-0 group-hover:opacity-100 transition-all">
                                                <ChevronRight size={18} />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnails */}
                                {images.length > 1 && (
                                    <div className="flex gap-3 overflow-x-auto pb-1">
                                        {images.map((img, i) => (
                                            <button key={i} onClick={() => setActiveImg(i)}
                                                className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-primary-orange shadow-md' : 'border-gray-200 hover:border-gray-400'}`}>
                                                <img src={imgUrl(img)} alt={`view ${i + 1}`}
                                                    className="w-full h-full object-contain p-1 mix-blend-multiply"
                                                    onError={(e) => { e.target.src = 'https://placehold.co/80x80?text=x'; }} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* ── RIGHT: Info ───────────────────────── */}
                            <div className="flex flex-col">

                                {/* Brand / category chips */}
                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    {product.brand && (
                                        <span className="text-xs font-bold text-primary-orange bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-widest">
                                            {product.brand}
                                        </span>
                                    )}
                                    {product.category?.name && (
                                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wide">
                                            {product.category.name}
                                        </span>
                                    )}
                                </div>

                                {/* Tech & Usage attributes */}
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    {product.technology?.length > 0 && (
                                        <Chip value={product.technology.join(', ')} />
                                    )}
                                    {product.usageCategory?.length > 0 && (
                                        <Chip value={product.usageCategory.join(', ')} />
                                    )}
                                    {product.allInOneType?.length > 0 && (
                                        <Chip value={product.allInOneType.join(', ')} />
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    {product.title}
                                </h1>

                                {/* Rating row */}
                                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-100">
                                    <Stars value={Math.round(product.rating || 0)} />
                                    <span className="text-sm font-bold text-gray-700">
                                        {Number(product.rating || 0).toFixed(1)}
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        ({product.numReviews || 0} reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-end gap-3 mb-5">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        ${Number(product.price || 0).toFixed(2)}
                                    </span>
                                    {product.oldPrice > 0 && (
                                        <>
                                            <span className="text-lg text-gray-400 line-through mb-1">
                                                ${Number(product.oldPrice).toFixed(2)}
                                            </span>
                                            <span className="mb-1 text-xs font-bold text-white bg-primary-orange px-2.5 py-0.5 rounded-full">
                                                SAVE ${(product.oldPrice - product.price).toFixed(2)}
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* Description */}
                                {product.description && (
                                    <p className="text-gray-600 leading-relaxed text-sm mb-6 line-clamp-4">
                                        {product.description}
                                    </p>
                                )}

                                {/* ── Quantity + Buttons ──────────────── */}
                                {product.countInStock > 0 ? (
                                    <div className="space-y-3 mb-8">
                                        {/* Qty selector */}
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-bold text-gray-700">Qty</span>
                                            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                                                <button
                                                    onClick={() => setQty(Math.max(1, qty - 1))}
                                                    className="w-10 h-10 flex items-center justify-center text-lg font-bold hover:bg-gray-100 transition-colors"
                                                >−</button>
                                                <span className="w-12 text-center font-bold">{qty}</span>
                                                <button
                                                    onClick={() => setQty(Math.min(product.countInStock, qty + 1))}
                                                    className="w-10 h-10 flex items-center justify-center text-lg font-bold hover:bg-gray-100 transition-colors"
                                                >+</button>
                                            </div>
                                            <span className="text-xs text-gray-400">{product.countInStock} in stock</span>
                                        </div>

                                        {/* Add to Cart */}
                                        <button
                                            onClick={toCart}
                                            className="w-full flex items-center justify-center gap-2 bg-black text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-orange transition-colors duration-300 text-base uppercase tracking-wide shadow-lg hover:shadow-orange-200"
                                        >
                                            <ShoppingCart size={20} />
                                            Add to Cart
                                        </button>

                                        {/* Buy Now */}
                                        <button
                                            onClick={buyNow}
                                            className="w-full flex items-center justify-center gap-2 bg-primary-orange text-white font-bold py-4 px-8 rounded-xl hover:bg-active-orange transition-colors duration-300 text-base uppercase tracking-wide shadow-lg hover:shadow-orange-300"
                                        >
                                            <ShoppingBag size={20} />
                                            Buy Now
                                        </button>
                                    </div>
                                ) : (
                                    <button disabled className="w-full py-4 rounded-xl bg-gray-100 text-gray-400 font-bold mb-8 cursor-not-allowed uppercase tracking-wide">
                                        Out of Stock
                                    </button>
                                )}

                                {/* ── Trust badges ────────────────────── */}
                                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100">
                                    {[
                                        { icon: <Truck size={17} />, bg: 'bg-orange-50 text-primary-orange', label: 'Free Shipping', sub: 'Orders over $500' },
                                        { icon: <RotateCcw size={17} />, bg: 'bg-gray-100 text-gray-600', label: 'Easy Returns', sub: '30-day policy' },
                                        { icon: <Shield size={17} />, bg: 'bg-green-50 text-green-600', label: '2-Year Warranty', sub: 'Official warranty' },
                                        { icon: <Award size={17} />, bg: 'bg-orange-50 text-primary-orange', label: 'Genuine Product', sub: '100% authentic' },
                                    ].map((b, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${b.bg}`}>
                                                {b.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-800">{b.label}</p>
                                                <p className="text-xs text-gray-500">{b.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ══ TABS ══════════════════════════════════════ */}
                        <div className="border border-gray-100 rounded-2xl overflow-hidden">
                            {/* Tab header */}
                            <div className="flex border-b border-gray-100 bg-gray-50 px-8">
                                {['overview', 'specifications', 'reviews'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`relative py-5 px-2 mr-8 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === tab ? 'text-primary-orange' : 'text-gray-400 hover:text-gray-600'}`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-orange rounded-full" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab body */}
                            <div className="p-8 lg:p-10 min-h-64 bg-white">

                                {/* OVERVIEW */}
                                {activeTab === 'overview' && (
                                    <div>


                                        <div className="flex flex-wrap gap-3">
                                            <div
                                                className="prose max-w-none text-gray-600 "
                                                dangerouslySetInnerHTML={{ __html: product.overview }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* SPECIFICATIONS */}
                                {activeTab === 'specifications' && (
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                                        {product.technicalSpecification ? (
                                            <div
                                                className="prose max-w-none text-gray-600 [&>table]:w-full [&>table]:border-collapse [&>table>tbody>tr]:border-b [&>table>tbody>tr]:border-gray-100 [&>table>tbody>tr>td]:py-3 [&>table>tbody>tr>td]:px-4 [&>table>tbody>tr>td:first-child]:font-bold [&>table>tbody>tr>td:first-child]:w-1/3 [&>table>tbody>tr>td:first-child]:bg-gray-50 [&>table>tbody>tr>td:first-child]:text-gray-700"
                                                dangerouslySetInnerHTML={{ __html: product.technicalSpecification }}
                                            />
                                        ) : (
                                            <Alert>No specifications available for this product.</Alert>
                                        )}
                                    </div>
                                )}

                                {/* REVIEWS */}
                                {activeTab === 'reviews' && (
                                    <div className="grid md:grid-cols-2 gap-12">

                                        {/* List */}
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                                Customer Reviews
                                                {product.numReviews > 0 && (
                                                    <span className="ml-2 text-sm font-normal text-gray-400">({product.numReviews})</span>
                                                )}
                                            </h2>

                                            {/* Average summary card */}
                                            {product.numReviews > 0 && (
                                                <div className="flex items-center gap-5 p-5 bg-orange-50 border border-orange-100 rounded-xl mb-6">
                                                    <div className="text-5xl font-extrabold text-gray-900">
                                                        {Number(product.rating || 0).toFixed(1)}
                                                    </div>
                                                    <div>
                                                        <Stars value={Math.round(product.rating || 0)} size={20} />
                                                        <p className="text-xs text-gray-500 mt-1">Based on {product.numReviews} reviews</p>
                                                    </div>
                                                </div>
                                            )}

                                            {!product.reviews?.length ? (
                                                <Alert>No reviews yet — be the first!</Alert>
                                            ) : (
                                                <div className="space-y-4">
                                                    {product.reviews.map((rev) => (
                                                        <div key={rev._id} className="border border-gray-100 rounded-xl p-5">
                                                            <div className="flex items-start justify-between mb-3">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-orange to-active-orange flex items-center justify-center text-white font-bold text-sm">
                                                                        {rev.name?.charAt(0)?.toUpperCase() || 'U'}
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-bold text-sm text-gray-900">{rev.name}</p>
                                                                        <p className="text-xs text-gray-400">{rev.createdAt?.substring(0, 10)}</p>
                                                                    </div>
                                                                </div>
                                                                <Stars value={rev.rating} size={13} />
                                                            </div>
                                                            <p className="text-gray-600 text-sm leading-relaxed">{rev.comment}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Write review */}
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 mb-6">Write a Review</h2>

                                            {okReview && <div className="mb-4"><Alert variant="success">Review submitted!</Alert></div>}
                                            {errReview && <div className="mb-4"><Alert variant="danger">{errReview}</Alert></div>}

                                            {userInfo ? (
                                                <form onSubmit={submitReview} className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-5">
                                                    <div>
                                                        <label className="block text-sm font-bold text-gray-700 mb-3">Your Rating</label>
                                                        <Stars
                                                            value={hoverRating || rating}
                                                            size={28}
                                                            interactive
                                                            onSet={setRating}
                                                            onHover={setHoverRating}
                                                            onLeave={() => setHoverRating(0)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-bold text-gray-700 mb-2">Your Review</label>
                                                        <textarea
                                                            rows="4"
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                            placeholder="Share your experience with this product..."
                                                            className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent resize-none"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        disabled={loadingReview || rating === 0 || !comment.trim()}
                                                        className="w-full py-3 bg-black text-white font-bold rounded-xl hover:bg-primary-orange transition-colors uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        {loadingReview ? 'Submitting...' : 'Submit Review'}
                                                    </button>
                                                </form>
                                            ) : (
                                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 text-center">
                                                    <p className="text-gray-500 mb-5">Sign in to leave a review</p>
                                                    <Link to="/login"
                                                        className="inline-block bg-black text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-orange transition-colors uppercase tracking-wide">
                                                        Sign In
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
