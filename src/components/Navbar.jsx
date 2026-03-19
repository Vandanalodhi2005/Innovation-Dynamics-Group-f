import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, Search, Heart, ShoppingCart, LogOut, Truck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import { useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../redux/constants/userConstants';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { cartCount, wishlistCount } = useShop();
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm(''); // Clear after search
            if (isMenuOpen) setIsMenuOpen(false); // Close mobile menu if searching from there
        }
    };

    // Toggle Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle Shop Dropdown (Mobile)
    const toggleShopDropdown = () => {
        setIsShopDropdownOpen(!isShopDropdownOpen);
    };

    // Toggle User Dropdown (Desktop)
    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const handleLogout = () => {
        logout(); // AuthContext logout
        dispatch({ type: USER_LOGOUT }); // Redux logout
        setIsUserDropdownOpen(false);
        navigate('/');
    };

    const handleWishlistClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault();
            navigate('/login');
        }
    };

    // Helper to determine active class
    const getLinkClasses = (path) => {
        const currentPath = window.location.pathname;
        const baseClasses = "text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:text-white/70 relative py-1";
        const activeClasses = "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white";
        const inactiveClasses = "text-white";

        return currentPath === path ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
    };

    // Helper for mobile active classes
    const getMobileLinkClasses = (path) => {
        const currentPath = window.location.pathname;
        const baseClasses = "block px-3 py-2 rounded-md text-base font-medium transition-colors";
        const activeClasses = "text-white bg-white/20";
        const inactiveClasses = "text-white hover:text-white/80 hover:bg-white/10";

        return currentPath === path ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
    };

    return (
        <nav className="bg-[#024ad8] text-white shadow-lg border-b border-white/10 sticky top-0 z-50 font-sans backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-2xl sm:text-3xl tracking-tighter lowercase">idg</span>
                            </div>
                            <div className="flex flex-col leading-tight text-[0.6rem] sm:text-[0.7rem] font-bold tracking-widest uppercase border-l-2 border-white/70 pl-3 py-0.5 group-hover:border-white transition-colors">
                                <span>Innovation</span>
                                <span>Dynamics</span>
                                <span>Group</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        <Link to="/" className={getLinkClasses('/')}>Home</Link>
                        <Link to="/about" className={getLinkClasses('/about')}>About Us</Link>

                        {/* Dropdown Container */}
                        <div className="relative group">
                            <button className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.12em] hover:text-white/70 transition-all duration-300 focus:outline-none relative py-1 ${window.location.pathname.startsWith('/shop') ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" : 'text-white'}`}>
                                Shop Now <ChevronDown size={14} />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-4 w-30 bg-white text-black rounded-sm shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform origin-top-left z-50">
                                <div className="py-4">
                                    <Link to="/shop/home-printers" className="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-gray-50 hover:text-[#024ad8] transition-all">Home Printers</Link>
                                    <Link to="/shop/office-printers" className="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-gray-50 hover:text-[#024ad8] transition-all">Office Printers</Link>
                                    <Link to="/shop/inkjet-printers" className="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-gray-50 hover:text-[#024ad8] transition-all">Inkjet Printers</Link>
                                    <Link to="/shop/laser-printers" className="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-gray-50 hover:text-[#024ad8] transition-all">Laser Printers</Link>
                                    <Link to="/shop/ink-toner" className="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-gray-50 hover:text-[#024ad8] transition-all border-t border-gray-50 mt-2">Supplies: Ink & Toner</Link>
                                </div>
                            </div>
                        </div>

                        <Link to="/faqs" className={getLinkClasses('/faqs')}>FAQs</Link>
                        <Link to="/contact" className={getLinkClasses('/contact')}>Contact Us</Link>
                    </div>

                    {/* Icons Section */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Search Bar - styled to match white theme */}
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyUp={handleSearch}
                                className="bg-white/20 text-sm rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-white/40 text-white w-32 focus:w-48 transition-all duration-300 placeholder-white/70"
                            />
                            <Search className="absolute left-3 top-1.5 text-white/70 w-4 h-4" />
                        </div>

                        {/* User Icon / Dropdown */}
                        <div className="relative">
                            {isAuthenticated ? (
                                <button onClick={toggleUserDropdown} className="text-white hover:text-white/80 transition-colors duration-300 relative group flex items-center gap-2">
                                    <User size={22} />
                                    <span className="text-sm font-medium hidden lg:block">{user.name.split(' ')[0]}</span>
                                </button>
                            ) : (
                                <Link to="/login" className="text-white hover:text-white/80 transition-colors duration-300 relative group flex items-center gap-1">
                                    <User size={22} />
                                    <span className="text-sm font-medium hidden lg:block">Login</span>
                                </Link>
                            )}

                            {/* User Dropdown */}
                            {isAuthenticated && isUserDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                                    <Link to="/profile" onClick={() => setIsUserDropdownOpen(false)} className="block px-4 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <p className="text-sm font-bold truncate">{user.name}</p>
                                        <p className="text-xs text-gray-500 truncate">View Profile</p>
                                    </Link>
                                    <Link to="/track-order" onClick={() => setIsUserDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-50 transition-colors text-sm">
                                        Track Order
                                    </Link>
                                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                                        <LogOut size={16} /> Logout
                                    </button>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/wishlist"
                            onClick={handleWishlistClick}
                            className="text-white hover:text-white/80 transition-colors duration-300 relative group"
                        >
                            <Heart size={22} />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>
                            )}
                        </Link>
                        <Link to="/cart" className="text-white hover:text-white/80 transition-colors duration-300 relative group">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-white text-[#024ad8] text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <Link to="/cart" className="text-white hover:text-white/80 transition-colors duration-300 relative">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-white text-[#024ad8] text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg transform scale-110">{cartCount}</span>
                            )}
                        </Link>
                        <button onClick={toggleMenu} className="text-white hover:text-white/80 focus:outline-none focus:text-white/80 transition-colors">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out bg-[#024ad8] overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 border-t border-white/10">
                    {/* Mobile Search */}
                    <div className="relative mb-4 mt-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyUp={handleSearch}
                            className="w-full bg-white/10 text-white placeholder-white/60 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/30"
                        />
                        <Search className="absolute left-3 top-2.5 text-white/60 w-5 h-5" />
                    </div>

                    <Link to="/" onClick={toggleMenu} className={getMobileLinkClasses('/')}>Home</Link>
                    <Link to="/about" onClick={toggleMenu} className={getMobileLinkClasses('/about')}>About Us</Link>

                    {/* Mobile Dropdown */}
                    <div>
                        <button
                            onClick={toggleShopDropdown}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none ${window.location.pathname.startsWith('/shop') ? 'text-white bg-white/20' : 'text-white hover:text-white/80 hover:bg-white/10'}`}
                        >
                            Shop <ChevronDown size={16} className={`transform transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`pl-6 space-y-1 transition-all duration-300 overflow-hidden ${isShopDropdownOpen ? 'max-h-60' : 'max-h-0'}`}>
                            <Link to="/shop/home-printers" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">Home Printers</Link>
                            <Link to="/shop/office-printers" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">Office Printers</Link>
                            <Link to="/shop/inkjet-printers" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">Inkjet Printers</Link>
                            <Link to="/shop/laser-printers" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">Laser Printers</Link>
                            <Link to="/shop/ink-toner" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">Ink & Toner</Link>
                        </div>
                    </div>

                    <Link to="/faqs" onClick={toggleMenu} className={getMobileLinkClasses('/faqs')}>FAQs</Link>
                    <Link to="/contact" onClick={toggleMenu} className={getMobileLinkClasses('/contact')}>Contact Us</Link>

                    <div className="border-t border-white/10 pt-4 mt-4 flex items-center gap-4 px-3 flex-wrap">
                        {isAuthenticated ? (
                            <>
                                <div className="w-full flex items-center justify-between">
                                    <Link to="/profile" onClick={toggleMenu} className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{user.name}</p>
                                            <p className="text-xs text-white/60">View Profile</p>
                                        </div>
                                    </Link>
                                    <button onClick={handleLogout} className="text-red-300 hover:bg-red-500/20 p-2 rounded-full">
                                        <LogOut size={20} />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <Link to="/login" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors w-full">
                                <User size={20} />
                                <span>Login / Sign Up</span>
                            </Link>
                        )}

                        <Link
                            to="/track-order"
                            onClick={toggleMenu}
                            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors w-full"
                        >
                            <Truck size={20} />
                            <span>Track Order</span>
                        </Link>
                        <Link
                            to="/wishlist"
                            onClick={handleWishlistClick}
                            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors w-full"
                        >
                            <Heart size={20} />
                            <span>Wishlist</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
