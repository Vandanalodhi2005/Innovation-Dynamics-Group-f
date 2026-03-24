import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import googleSafeBrowsing from '../../public/footer_google.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-primary-blue font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="flex flex-col leading-none">
                                <span className="font-extrabold text-4xl tracking-tighter lowercase text-white">idg</span>
                            </div>
                            <div className="flex flex-col leading-none text-[0.65rem] font-bold tracking-[0.15em] uppercase border-l-2 border-[#024ad8] pl-2 py-0.5 text-gray-500">
                                <span>Innovation</span>
                                <span>Dynamics</span>
                                <span>Group</span>
                            </div>
                        </Link>
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
                            <li><Link to="/shop/home-printers" className="hover:text-white transition-colors">Home Printers</Link></li>
                            <li><Link to="/shop/office-printers" className="hover:text-white transition-colors">Office Printers</Link></li>
                            <li><Link to="/shop/inkjet-printers" className="hover:text-white transition-colors">Inkjet Printers</Link></li>
                            <li><Link to="/shop/laser-printers" className="hover:text-white transition-colors">Laser Printers</Link></li>
                            <li><Link to="/shop/ink-cartridges" className="hover:text-white transition-colors">Ink & Toner</Link></li>
                            <li><Link to="/track-order" className="text-[#024ad8] hover:text-white transition-colors border-t border-gray-900 pt-4 block">Track Order</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[15px] font-extrabold mb-10 text-[#024ad8] uppercase tracking-[0.15em]">Corporate Rules</h3>
                        <ul className="space-y-5 text-[12px] text-gray-400 font-bold uppercase tracking-[0.1em]">
                            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/return-refund" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
                            <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                            <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
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

                {/* Bottom Bar: Trust, Payments & Legal */}
                <div className="mt-16 pt-12 border-t border-white/5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        
                        {/* Trust & Security */}
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
                            <div className="flex items-center bg-white px-2 py-1 rounded-sm border border-white/10 hover:border-white/20 transition-all shadow-sm">
                                 <span id="siteseal"></span>
                            </div>

                            <a 
                                href="https://transparencyreport.google.com/safe-browsing/search?url=http:%2F%2Finnovationdynamicsgroup.com&hl=en" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="h-12 flex items-center gap-3 bg-white/[0.03] px-5 border border-white/10 rounded-sm hover:bg-white/[0.05] hover:border-white/20 transition-all group"
                            >
                                <img src={googleSafeBrowsing} alt="Google" className="h-4 opacity-30 group-hover:opacity-100 transition-all" />
                                <div className="flex flex-col">
                                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#024ad8]">Certified</span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Safe Browsing</span>
                                </div>
                            </a>
                        </div>

                        {/* Financial Security & Payments */}
                        <div className="flex flex-col items-center lg:items-end gap-5">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="p-1.5 bg-[#024ad8]/10 rounded-full border border-[#024ad8]/20">
                                    <ShieldCheck size={12} className="text-[#024ad8]" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">SECURE PAYMENT PROTOCOL</span>
                            </div>
                            
                            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-x-8 gap-y-4 px-6 py-4 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/[0.04] transition-all duration-500 group">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-4 opacity-20 group-hover:opacity-60 transition-all duration-700" title="MasterCard" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-4 opacity-20 group-hover:opacity-60 transition-all duration-700" title="American Express" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" alt="Discover" className="h-6 opacity-20 group-hover:opacity-60 transition-all duration-700" title="Discover" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" className="h-4 opacity-20 group-hover:opacity-60 transition-all duration-700" title="PayPal" />
                                <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                    <span className="text-[8px] font-black uppercase tracking-[0.1em] text-gray-600">ENCRYPTED</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Legal Disclaimer & Copyright */}
                    <div className="space-y-10 border-t border-white/5 pt-12 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#024ad8]/20 to-transparent"></div>
                        
                        <div className="max-w-4xl mx-auto">
                            <p className="text-gray-600 text-[9px] leading-[1.8] font-medium uppercase tracking-[0.08em] text-center px-4">
                                <span className="text-white opacity-40">Disclaimer:</span> All product names, images, brand logos, and trademarks displayed on this website are the property of their respective owners and are used for identification purposes only. Innovation Dynamics Group LLC operates as an independent e-commerce retailer and is not affiliated with, endorsed by, or sponsored by any manufacturer unless explicitly stated. Product availability, specifications, and pricing are subject to change without prior notice. While we strive to provide accurate information, we do not guarantee that all content is free from errors.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <div className="w-8 h-1 bg-[#024ad8]"></div>
                            <p className="text-white text-[10px] font-black uppercase tracking-[0.4em]">
                                &copy; 2026 <span className="text-[#024ad8]">Innovation Dynamics Group LLC</span>
                            </p>
                            <div className="flex gap-8 text-[8px] font-black uppercase tracking-widest text-gray-700">
                                <a href="/terms-conditions" className="hover:text-[#024ad8] transition-colors">Engineering Trust &bull; Registered in MN, USA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
