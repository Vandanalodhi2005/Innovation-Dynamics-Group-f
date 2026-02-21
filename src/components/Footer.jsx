import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-primary-orange font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <a href="/" className="flex items-center gap-2 group">
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-3xl tracking-tighter lowercase text-white">idg</span>
                            </div>
                            <div className="flex flex-col leading-none text-[0.6rem] font-bold tracking-widest uppercase border-l-2 border-primary-orange pl-2 py-0.5 text-gray-300">
                                <span>Innovation</span>
                                <span>Dynamics</span>
                                <span>Group</span>
                            </div>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            <span className="text-primary-orange font-bold">Printing Essentials Only.</span> Shop high-quality printers, ink, and toner designed for sharp results and dependable performance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary-orange uppercase tracking-wider">Shop Categories</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="/shop/home-printers" className="hover:text-primary-orange transition-colors">Home Printers</a></li>
                            <li><a href="/shop/office-printers" className="hover:text-primary-orange transition-colors">Office Printers</a></li>
                            <li><a href="/shop/inkjet-printers" className="hover:text-primary-orange transition-colors">Inkjet Printers</a></li>
                            <li><a href="/shop/laser-printers" className="hover:text-primary-orange transition-colors">Laser Printers</a></li>
                            <li><a href="/shop/ink-cartridges" className="hover:text-primary-orange transition-colors">Ink & Toner</a></li>
                            <li><a href="/buying-guide" className="hover:text-primary-orange transition-colors font-bold italic">Buying Guide</a></li>
                            <li><a href="/resources" className="hover:text-primary-orange transition-colors font-bold italic">Resources Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary-orange uppercase tracking-wider">Policies</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="/privacy-policy" className="hover:text-primary-orange transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-conditions" className="hover:text-primary-orange transition-colors">Terms & Conditions</a></li>
                            <li><a href="/return-refund" className="hover:text-primary-orange transition-colors">Return & Refund Policy</a></li>
                            <li><a href="/return-exchange" className="hover:text-primary-orange transition-colors font-bold italic">Return & Exchange Request</a></li>
                            <li><a href="/shipping-policy" className="hover:text-primary-orange transition-colors">Shipping Policy</a></li>
                            <li><a href="/cookies-policy" className="hover:text-primary-orange transition-colors">Cookies Policy</a></li>
                            <li><a href="/disclaimer" className="hover:text-primary-orange transition-colors">Disclaimer</a></li>
                            <li><a href="/do-not-sell" className="hover:text-primary-orange transition-colors">Do Not Sell My Info</a></li>
                            <li><a href="/accessibility" className="hover:text-primary-orange transition-colors">Accessibility Statement</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary-orange uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary-orange mt-1 flex-shrink-0" />
                                <span>11397 Quincy St NE,<br />Blaine, MN 55434</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary-orange flex-shrink-0" />
                                <span>support@innovationdynamicsgroup.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary-orange flex-shrink-0" />
                                <span>+1 (651) 815-4630</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div className="space-y-2">
                        <p className="text-gray-500 text-sm">&copy; 2026 Innovation Dynamics Group LLC. All Rights Reserved.</p>
                        <p className="text-gray-600 text-[10px] leading-tight max-w-xl">
                            All trademarks and product names are the property of their respective owners. Innovation Dynamics Group LLC is an independent retailer and is not affiliated with any printer manufacturer.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" alt="Visa" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" alt="Discover" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
