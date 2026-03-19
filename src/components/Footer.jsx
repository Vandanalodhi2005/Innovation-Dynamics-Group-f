import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-primary-blue font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-8">
                        <a href="/" className="flex items-center gap-2 group">
                            <div className="flex flex-col leading-none">
                                <span className="font-extrabold text-4xl tracking-tighter lowercase text-white">idg</span>
                            </div>
                            <div className="flex flex-col leading-none text-[0.65rem] font-bold tracking-[0.15em] uppercase border-l-2 border-[#024ad8] pl-2 py-0.5 text-gray-500">
                                <span>Innovation</span>
                                <span>Dynamics</span>
                                <span>Group</span>
                            </div>
                        </a>
                        <p className="text-gray-500 text-[11px] leading-relaxed font-bold uppercase tracking-[0.05em]">
                            <span className="text-[#024ad8] block mb-2 tracking-[0.1em]">Printing Essentials Only.</span> 
This website operates as an independent retailer of printers and printing solutions.
We are a member of the HP Amplify Partner Program. All trademarks, brand names, and logos belong to their respective owners and are used for identification purposes only.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[15px] font-extrabold mb-10 text-[#024ad8] uppercase tracking-[0.15em]">Shop Catalog</h3>
                        <ul className="space-y-5 text-[12px] text-gray-400 font-bold uppercase tracking-[0.1em]">
                            <li><a href="/shop/home-printers" className="hover:text-white transition-colors">Home Printers</a></li>
                            <li><a href="/shop/office-printers" className="hover:text-white transition-colors">Office Printers</a></li>
                            <li><a href="/shop/inkjet-printers" className="hover:text-white transition-colors">Inkjet Printers</a></li>
                            <li><a href="/shop/laser-printers" className="hover:text-white transition-colors">Laser Printers</a></li>
                            <li><a href="/shop/ink-cartridges" className="hover:text-white transition-colors">Ink & Toner</a></li>
                            <li><a href="/track-order" className="text-[#024ad8] hover:text-white transition-colors border-t border-gray-900 pt-4 block">Track Order</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[15px] font-extrabold mb-10 text-[#024ad8] uppercase tracking-[0.15em]">Corporate Rules</h3>
                        <ul className="space-y-5 text-[12px] text-gray-400 font-bold uppercase tracking-[0.1em]">
                            <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="/return-refund" className="hover:text-white transition-colors">Returns & Refunds</a></li>
                            <li><a href="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</a></li>
                            <li><a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[15px] font-extrabold mb-10 text-[#024ad8] uppercase tracking-[0.15em]">Support Center</h3>
                        <ul className="space-y-6 text-[12px] text-gray-400 font-bold leading-relaxed uppercase tracking-wider">
                            <li className="flex items-start gap-4">
                                <MapPin size={16} className="text-[#024ad8] mt-1 flex-shrink-0" />
                                <span>11397 Quincy St NE,<br />Blaine, MN 55434</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={16} className="text-[#024ad8] flex-shrink-0" />
                                <span className="lowercase break-all">support@innovationdynamicsgroup.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={16} className="text-[#024ad8] flex-shrink-0" />
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
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" alt="Visa" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" /> */}
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
