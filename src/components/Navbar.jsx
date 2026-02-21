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
        const baseClasses = "font-medium transition-all duration-300 hover:text-active-orange hover:underline decoration-active-orange underline-offset-4";
        const activeClasses = "text-active-orange underline decoration-active-orange underline-offset-4";
        const inactiveClasses = "text-black";

        return currentPath === path ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
    };

    // Helper for mobile active classes
    const getMobileLinkClasses = (path) => {
        const currentPath = window.location.pathname;
        const baseClasses = "block px-3 py-2 rounded-md text-base font-medium transition-colors";
        const activeClasses = "text-active-orange bg-orange-50";
        const inactiveClasses = "text-black hover:text-active-orange hover:bg-gray-50";

        return currentPath === path ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
    };

    return (
        <nav className="bg-white text-black shadow-md border-b-4 border-primary-orange sticky top-0 z-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="flex items-center gap-2 group">
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-3xl tracking-tighter lowercase">idg</span>
                            </div>
                            <div className="flex flex-col leading-none text-[0.6rem] font-bold tracking-widest uppercase border-l-2 border-black pl-2 py-0.5">
                                <span>Innovation</span>
                                <span>Dynamics</span>
                                <span>Group</span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="/" className={getLinkClasses('/')}>Home</a>
                        <a href="/about" className={getLinkClasses('/about')}>About Us</a>

                        {/* Dropdown Container */}
                        <div className="relative group">
                            <button className={`flex items-center gap-1 font-medium hover:text-active-orange hover:underline decoration-active-orange underline-offset-4 transition-all duration-300 focus:outline-none ${window.location.pathname.startsWith('/shop') ? 'text-active-orange underline decoration-active-orange underline-offset-4' : 'text-black'}`}>
                                Shop <ChevronDown size={16} />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                                <div className="py-2">
                                    <a href="/shop/home-printers" className="block px-4 py-2 hover:bg-orange-50 hover:text-active-orange transition-colors">Home Printers</a>
                                    <a href="/shop/office-printers" className="block px-4 py-2 hover:bg-orange-50 hover:text-active-orange transition-colors">Office Printers</a>
                                    <a href="/shop/inkjet-printers" className="block px-4 py-2 hover:bg-orange-50 hover:text-active-orange transition-colors">Inkjet Printers</a>
                                    <a href="/shop/laser-printers" className="block px-4 py-2 hover:bg-orange-50 hover:text-active-orange transition-colors">Laser Printers</a>
                                </div>
                            </div>
                        </div>

                        <a href="/faqs" className={getLinkClasses('/faqs')}>FAQs</a>
                        <a href="/contact" className={getLinkClasses('/contact')}>Contact Us</a>
                    </div>

                    {/* Icons Section */}
                    <div className="hidden md:flex items-center space-x-6">
                        {/* Search Bar - styled to match white theme */}
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyUp={handleSearch}
                                className="bg-gray-100 text-sm rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-active-orange text-black w-32 focus:w-48 transition-all duration-300 placeholder-gray-500"
                            />
                            <Search className="absolute left-3 top-1.5 text-gray-500 w-4 h-4" />
                        </div>

                        {/* User Icon / Dropdown */}
                        <div className="relative">
                            {isAuthenticated ? (
                                <button onClick={toggleUserDropdown} className="text-black hover:text-active-orange transition-colors duration-300 relative group flex items-center gap-2">
                                    <User size={22} />
                                    <span className="text-sm font-medium hidden lg:block">{user.name.split(' ')[0]}</span>
                                </button>
                            ) : (
                                <Link to="/login" className="text-black hover:text-active-orange transition-colors duration-300 relative group flex items-center gap-1">
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
                            className="text-black hover:text-active-orange transition-colors duration-300 relative group"
                        >
                            <Heart size={22} />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>
                            )}
                        </Link>
                        <Link to="/cart" className="text-black hover:text-active-orange transition-colors duration-300 relative group">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary-orange text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <Link to="/cart" className="text-black hover:text-active-orange transition-colors duration-300 relative">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary-orange text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
                            )}
                        </Link>
                        <button onClick={toggleMenu} className="text-black hover:text-active-orange focus:outline-none focus:text-active-orange transition-colors">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden transition-all duration-300 ease-in-out bg-white overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 border-t border-gray-100">
                    {/* Mobile Search */}
                    <div className="relative mb-4 mt-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyUp={handleSearch}
                            className="w-full bg-gray-100 text-black rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-active-orange"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                    </div>

                    <a href="/" className={getMobileLinkClasses('/')}>Home</a>
                    <a href="/about" className={getMobileLinkClasses('/about')}>About Us</a>

                    {/* Mobile Dropdown */}
                    <div>
                        <button
                            onClick={toggleShopDropdown}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none ${window.location.pathname.startsWith('/shop') ? 'text-active-orange bg-orange-50' : 'text-black hover:text-active-orange hover:bg-gray-50'}`}
                        >
                            Shop <ChevronDown size={16} className={`transform transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`pl-6 space-y-1 transition-all duration-300 overflow-hidden ${isShopDropdownOpen ? 'max-h-60' : 'max-h-0'}`}>
                            <a href="/shop/home-printers" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-active-orange hover:bg-gray-50 transition-colors">Home Printers</a>
                            <a href="/shop/office-printers" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-active-orange hover:bg-gray-50 transition-colors">Office Printers</a>
                            <a href="/shop/inkjet-printers" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-active-orange hover:bg-gray-50 transition-colors">Inkjet Printers</a>
                            <a href="/shop/laser-printers" className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-active-orange hover:bg-gray-50 transition-colors">Laser Printers</a>
                        </div>
                    </div>

                    <a href="/faqs" className={getMobileLinkClasses('/faqs')}>FAQs</a>
                    <a href="/contact" className={getMobileLinkClasses('/contact')}>Contact Us</a>

                    <div className="border-t border-gray-100 pt-4 mt-4 flex items-center gap-4 px-3 flex-wrap">
                        {isAuthenticated ? (
                            <>
                                <div className="w-full flex items-center justify-between">
                                    <Link to="/profile" onClick={toggleMenu} className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-primary-orange font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">{user.name}</p>
                                            <p className="text-xs text-gray-500">View Profile</p>
                                        </div>
                                    </Link>
                                    <button onClick={handleLogout} className="text-red-600 hover:bg-red-50 p-2 rounded-full">
                                        <LogOut size={20} />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <Link to="/login" className="flex items-center gap-2 text-black hover:text-active-orange transition-colors w-full">
                                <User size={20} />
                                <span>Login / Sign Up</span>
                            </Link>
                        )}

                        <Link
                            to="/track-order"
                            onClick={toggleMenu}
                            className="flex items-center gap-2 text-black hover:text-active-orange transition-colors w-full"
                        >
                            <Truck size={20} />
                            <span>Track Order</span>
                        </Link>
                        <Link
                            to="/wishlist"
                            onClick={handleWishlistClick}
                            className="flex items-center gap-2 text-black hover:text-active-orange transition-colors w-full"
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
