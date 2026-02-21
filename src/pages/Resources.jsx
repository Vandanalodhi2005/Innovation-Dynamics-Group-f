import React from 'react';
import { BookOpen, Printer, Droplet, Zap, Target, CheckCircle, HelpCircle, Info, DollarSign, Settings, ArrowRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Resources = () => {
    return (
        <div className="bg-white text-black font-sans min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none">
                    <BookOpen size={500} className="absolute -bottom-20 -right-20" />
                </div>

                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&q=80&w=1920"
                        alt="Resource Center Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase border border-primary-orange/30">
                            <Info size={16} /> Knowledge Center
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white italic">
                            Printing Resources
                        </h1>
                        <div className="w-24 h-1.5 bg-primary-orange mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed italic">
                            Your go-to source for practical, easy-to-understand information about printers, supplies, and smart buying decisions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Sidebar Nav - Desktop Only */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 space-y-4">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Explore Topics</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'basics', label: '1. Printer Basics', icon: <Printer size={16} /> },
                                    { id: 'ink-toner', label: '2. Ink & Toner 101', icon: <Droplet size={16} /> },
                                    { id: 'choose', label: '3. Choosing the Right Model', icon: <Target size={16} /> },
                                    { id: 'features', label: '4. Key Features', icon: <Settings size={16} /> },
                                    { id: 'paper', label: '5. Paper & Accessories', icon: <ShieldCheck size={16} /> },
                                    { id: 'cost', label: '6. Cost Planning', icon: <DollarSign size={16} /> },
                                    { id: 'compat', label: '7. Compatibility Guide', icon: <CheckCircle size={16} /> },
                                    { id: 'faq', label: '8. Common Questions', icon: <HelpCircle size={16} /> }
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-orange-50 hover:text-primary-orange text-gray-600 font-medium group"
                                    >
                                        <span className="text-gray-400 group-hover:text-primary-orange transition-colors">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Areas */}
                    <div className="lg:col-span-3 space-y-24">

                        {/* 1. Printer Basics */}
                        <section id="basics" className="scroll-mt-24 space-y-10">
                            <h2 className="text-4xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-4">
                                <span className="bg-primary-orange text-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl not-italic font-black shadow-lg">1</span>
                                Printer Basics
                            </h2>
                            <p className="text-lg text-gray-600 italic font-medium">Choosing the right printer starts with understanding the core categories:</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { type: "Inkjet Printers", desc: "Ideal for vibrant colors, photos, graphics, and everyday family use.", icon: <Droplet className="text-primary-orange" /> },
                                    { type: "Laser Printers", desc: "Best for fast, high-volume, black-and-white or color office printing.", icon: <Zap className="text-primary-orange" /> },
                                    { type: "Home Printers", desc: "Compact, budget-friendly printers designed for low to moderate print needs.", icon: <Printer className="text-primary-orange" /> },
                                    { type: "Office Printers", desc: "Efficient, durable printers built for multiple users and frequent printing.", icon: <Target className="text-primary-orange" /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 transition-transform hover:-translate-y-1 hover:shadow-md">
                                        <div className="bg-white p-3 rounded-xl shadow-sm h-fit">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1 italic">✓ {item.type}</h4>
                                            <p className="text-sm text-gray-600 font-medium italic leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 2. Ink & Toner */}
                        <section id="ink-toner" className="scroll-mt-24 space-y-10">
                            <h2 className="text-4xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-4">
                                <span className="bg-black text-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl not-italic font-black shadow-lg">2</span>
                                Ink & Toner Explained
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 space-y-4">
                                    <h4 className="font-bold text-xl flex items-center gap-2 italic"><Droplet className="text-blue-500" /> Ink Cartridges</h4>
                                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Liquid-Based</p>
                                    <ul className="space-y-2 text-sm text-gray-600 font-medium italic">
                                        <li>• Best for photo-quality output</li>
                                        <li>• Available in standard and XL</li>
                                        <li>• Ideal for color-rich prints</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 space-y-4">
                                    <h4 className="font-bold text-xl flex items-center gap-2 italic"><Zap className="text-gray-900" /> Toner Cartridges</h4>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Powder-Based</p>
                                    <ul className="space-y-2 text-sm text-gray-600 font-medium italic">
                                        <li>• Higher page yield</li>
                                        <li>• Extreme precision for text</li>
                                        <li>• Cost-efficient for volume</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 space-y-4">
                                    <h4 className="font-bold text-xl flex items-center gap-2 italic"><ShieldCheck className="text-primary-orange" /> High-Yield (XL)</h4>
                                    <p className="text-xs font-bold text-primary-orange uppercase tracking-widest">Max Efficiency</p>
                                    <ul className="space-y-2 text-sm text-gray-600 font-medium italic">
                                        <li>• Print significantly more pages</li>
                                        <li>• Reduce cost per page</li>
                                        <li>• Excellent for frequent use</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. Choose Right Printer */}
                        <section id="choose" className="scroll-mt-24 space-y-10">
                            <h2 className="text-4xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-4">
                                <span className="bg-primary-orange text-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl not-italic font-black shadow-lg">3</span>
                                Choose by Your Needs
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="bg-black text-white p-8 rounded-3xl space-y-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-orange/10 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                                    <h3 className="text-2xl font-bold italic underline decoration-primary-orange decoration-4">Home Users</h3>
                                    <ul className="space-y-3 text-gray-400 font-medium italic">
                                        <li className="flex gap-2"><span>•</span> Color quality importance</li>
                                        <li className="flex gap-2"><span>•</span> Occasional print needs</li>
                                        <li className="flex gap-2"><span>•</span> Affordable cartridges</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-3xl space-y-6 border border-gray-100">
                                    <h3 className="text-2xl font-bold italic underline decoration-primary-orange decoration-4 text-gray-900">Office Users</h3>
                                    <ul className="space-y-3 text-gray-600 font-medium italic">
                                        <li className="flex gap-2"><span>•</span> Page-per-minute (PPM) speed</li>
                                        <li className="flex gap-2"><span>•</span> Duty cycle capacity</li>
                                        <li className="flex gap-2"><span>•</span> Toner efficiency</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-3xl space-y-6 border border-gray-100">
                                    <h3 className="text-2xl font-bold italic underline decoration-primary-orange decoration-4 text-gray-900">Students</h3>
                                    <ul className="space-y-3 text-gray-600 font-medium italic">
                                        <li className="flex gap-2"><span>•</span> Reliable color output</li>
                                        <li className="flex gap-2"><span>•</span> Low operating cost</li>
                                        <li className="flex gap-2"><span>•</span> Wireless convenience</li>
                                    </ul>
                                </div>
                                <div className="bg-black text-white p-8 rounded-3xl space-y-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-orange/10 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                                    <h3 className="text-2xl font-bold italic underline decoration-primary-orange decoration-4">Small Businesses</h3>
                                    <ul className="space-y-3 text-gray-400 font-medium italic">
                                        <li className="flex gap-2"><span>•</span> High-volume compatibility</li>
                                        <li className="flex gap-2"><span>•</span> Multi-user workflow</li>
                                        <li className="flex gap-2"><span>•</span> Long-term affordability</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 4. Key Features */}
                        <section id="features" className="scroll-mt-24 space-y-10">
                            <h2 className="text-4xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-4">
                                <span className="bg-black text-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl not-italic font-black shadow-lg">4</span>
                                Key Features to Look For
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                {[
                                    { title: "Print Speed (PPM)", desc: "Higher speed is essential for busy offices and large print jobs.", icon: <Zap /> },
                                    { title: "Print Resolution (DPI)", desc: "Measured in DPI (dots per inch), affecting sharpness and clarity.", icon: <Target /> },
                                    { title: "Connectivity", desc: "USB, Ethernet, Wi-Fi, and Mobile printing compatibility options.", icon: <Settings /> },
                                    { title: "Duty Cycle", desc: "How many pages a printer can safely print each month without damage.", icon: <ShieldCheck /> }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex gap-6 items-start">
                                        <div className="text-primary-orange mt-1">{feature.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 italic">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm font-medium italic leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 5 & 6 Cost & Paper */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <section id="paper" className="scroll-mt-24 space-y-6 bg-orange-50/50 p-8 rounded-3xl border border-orange-100">
                                <h2 className="text-2xl font-black italic">5. Paper & Accessories</h2>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quality Matters</p>
                                <ul className="space-y-4 text-sm font-medium italic text-gray-700">
                                    <li><span className="text-primary-orange font-bold">Photo Paper:</span> Glossy, matte, and professional-grade.</li>
                                    <li><span className="text-primary-orange font-bold">Everyday documents:</span> Multipurpose office paper.</li>
                                    <li><span className="text-primary-orange font-bold">Specialty Media:</span> Label sheets and cards.</li>
                                    <li><span className="text-primary-orange font-bold">Essential Gear:</span> USB cables, maintenance kits, roller kits.</li>
                                </ul>
                            </section>

                            <section id="cost" className="scroll-mt-24 space-y-6 bg-gray-900 text-white p-8 rounded-3xl">
                                <h2 className="text-2xl font-black italic">6. Cost Planning</h2>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Smart Budgeting</p>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <h4 className="font-bold mb-1 italic">Operating Cost Tip</h4>
                                        <p className="text-xs text-gray-400 italic font-medium leading-relaxed">Ink and toner make up the majority of long-term costs. Choose high-yield to save more.</p>
                                    </div>
                                    <ul className="space-y-2 text-sm text-primary-orange font-bold">
                                        <li className="flex items-center gap-2 italic">✓ Choose high-yield cartridges</li>
                                        <li className="flex items-center gap-2 italic">✓ Compare cost per page</li>
                                        <li className="flex items-center gap-2 italic">✓ Buy multi-packs</li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        {/* 7. Compatibility */}
                        <section id="compat" className="scroll-mt-24 bg-gray-50 p-10 rounded-3xl border border-gray-100">
                            <h2 className="text-3xl font-bold mb-8 italic flex items-center gap-4">
                                <CheckCircle className="text-primary-orange" size={32} />
                                7. Compatibility Guidance
                            </h2>
                            <p className="text-gray-600 mb-8 italic font-medium">Each printer requires its own specific supplies. Always verify before purchase:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {["Printer model number", "Cartridge family", "Packaging labels"].map((check, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100 font-bold italic text-sm">
                                        {check}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-center text-primary-orange font-bold italic text-lg leading-relaxed">
                                All product pages on our website clearly list compatible models for easy selection.
                            </p>
                        </section>

                        {/* 8. Questions */}
                        <section id="faq" className="scroll-mt-24 space-y-10">
                            <h2 className="text-3xl font-bold italic underline decoration-primary-orange decoration-4">8. Common Printing Questions</h2>
                            <div className="space-y-6">
                                {[
                                    { q: "What printer is best for home use?", a: "Inkjet printers offer great value and excellent color for home environments." },
                                    { q: "What’s best for a small business?", a: "Laser printers deliver speed and low cost per page." },
                                    { q: "Standard or high-yield cartridges?", a: "High-yield is recommended for frequent printing to save on long-term cost." },
                                    { q: "What paper should I use?", a: "Use photo paper for images and heavier paper for brochures or marketing prints." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border-l-4 border-primary-orange p-6 shadow-sm rounded-r-2xl">
                                        <p className="font-bold text-gray-900 mb-2 italic">Q: {item.q}</p>
                                        <p className="text-gray-600 font-medium italic text-sm leading-relaxed">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 9. Quick Links */}
                        <section id="links" className="scroll-mt-24 pt-12 border-t border-gray-100">
                            <h3 className="text-xl font-bold mb-8 italic">9. Useful Resources & Quick Links</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { label: 'Home Printers', url: '/shop/home-printers' },
                                    { label: 'Office Printers', url: '/shop/office-printers' },
                                    { label: 'Inkjet Printers', url: '/shop/inkjet-printers' },
                                    { label: 'Laser Printers', url: '/shop/laser-printers' },
                                    { label: 'Ink & Toner', url: '/shop/ink-cartridges' },
                                    { label: 'Buying Guide', url: '/buying-guide' },
                                    { label: 'FAQ Page', url: '/faqs' }
                                ].map((link, idx) => (
                                    <a key={idx} href={link.url} className="px-5 py-2.5 bg-gray-50 hover:bg-primary-orange hover:text-white rounded-full text-xs font-bold uppercase transition-all border border-gray-200">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </section>

                        {/* 10. Contact */}
                        <section id="contact" className="bg-black text-white p-12 rounded-[3rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="relative z-10 text-center max-w-2xl mx-auto">
                                <Mail className="mx-auto mb-6 text-primary-orange" size={48} />
                                <h2 className="text-3xl font-bold mb-6 italic underline decoration-primary-orange decoration-4">10. Need More Help?</h2>
                                <p className="text-gray-400 mb-10 italic font-medium leading-relaxed">
                                    If you need help selecting printing products or understanding compatibility, our experts are here to assist. (Product and purchase-related guidance only.)
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-xl mx-auto">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/10 p-3 rounded-xl border border-white/10"><Phone className="text-primary-orange" size={20} /></div>
                                        <p className="font-bold">+1 (651) 815-4630</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/10 p-3 rounded-xl border border-white/10"><Mail className="text-primary-orange" size={20} /></div>
                                        <p className="font-bold text-xs truncate">support@innovationdynamicsgroup.com</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Bottom Slogan */}
            <div className="py-20 bg-gray-50 text-center border-t border-gray-100">
                <ShieldCheck className="mx-auto mb-6 text-primary-orange opacity-40" size={64} />
                <p className="text-2xl font-bold italic mb-2 tracking-tight">Integrity in Every Print.</p>
                <p className="text-gray-400 italic font-medium">Empowering your choices with honest information.</p>
            </div>
        </div>
    );
};

export default Resources;
