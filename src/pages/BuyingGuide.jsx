import React from 'react';
import { Printer, Droplet, Zap, Target, BookOpen, CheckCircle, ArrowRight, Info, ShieldCheck, ShoppingCart, Search, FileText, Layout, Award } from 'lucide-react';

const BuyingGuide = () => {
    const sections = [
        { id: 'home', label: '1. Home Solutions', icon: <Printer size={15} /> },
        { id: 'office', label: '2. Office Efficiency', icon: <Target size={15} /> },
        { id: 'inkjet', label: '3. Inkjet Precision', icon: <Droplet size={15} /> },
        { id: 'laser', label: '4. Laser Performance', icon: <Zap size={15} /> },
        { id: 'yield', label: '5. Yield Optimization', icon: <Award size={15} /> },
        { id: 'checklist', label: '6. Procurement Steps', icon: <ShoppingCart size={15} /> }
    ];

    return (
        <div className="bg-white text-black min-h-screen font-sans text-left">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
                <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none text-left">
                    <BookOpen size={500} className="absolute -top-20 -left-20" />
                </div>

                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/buying1.jpg"
                        alt="Procurement Intelligence Background"
                        className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-left">
                    <div className="max-w-3xl text-left">
                        <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 text-left">
                            <BookOpen size={14} /> Intelligence Report
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic text-left">
                            Buying <br/><span className="text-[#024ad8]">Intelligence</span>
                        </h1>
                        <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
                        <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl text-left">
                            Strategic procurement framework designed to streamline your equipment selection and optimize printing infrastructure.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] text-left text-left">
                            <p>Guide Revision: BG-2026.04</p>
                            <p>Release: April 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 text-left">

                    {/* Sidebar Navigation - Sticky */}
                    <div className="hidden lg:block lg:col-span-1 text-left">
                        <div className="sticky top-28 space-y-6 text-left">
                            <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">Guide Sections</h3>
                            <nav className="space-y-1 text-left">
                                {sections.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all hover:bg-[#024ad8] hover:text-white text-gray-500 font-semibold text-[13px] group border border-transparent hover:shadow-md text-left"
                                    >
                                        <span className="text-[#024ad8] group-hover:text-white transition-colors text-left">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-20 text-gray-600 text-left">

                        {/* Introduction */}
                        <section className="space-y-4 border-l-4 border-[#024ad8] pl-8 py-4 bg-gray-50/50 rounded-r-sm text-left">
                            <p className="text-base leading-relaxed font-medium italic text-left">
                                Choosing the correct hardware profile and replenishment matrix is fundamental to operational success. This guide provides the tactical knowledge required to navigate high-performance printing ecosystems.
                            </p>
                            <p className="text-xs text-black font-black uppercase tracking-widest text-left">
                                Precision Selection Protocol Enabled
                            </p>
                        </section>

                        {/* Home & Office Categories */}
                        <div id="home" className="space-y-16 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">01</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Solution Architecture</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                                <section id="home-section" className="bg-white p-10 rounded-sm border border-gray-100 shadow-xl shadow-gray-50 group hover:border-[#024ad8]/40 transition-all text-left">
                                    <h3 className="font-extrabold text-black mb-8 flex items-center gap-3 text-lg uppercase italic text-left">
                                        <Printer className="text-[#024ad8]" size={22} />
                                        Home Infrastructure
                                    </h3>
                                    <p className="text-sm font-semibold italic text-gray-500 mb-8 text-left">
                                        Compact, high-fidelity systems optimized for remote professionals, academic workflows, and creative output.
                                    </p>
                                    <ul className="space-y-4 text-gray-500 text-xs font-bold uppercase tracking-widest text-left">
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[#024ad8]" /> Zero-Footprint Design</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[#024ad8]" /> Wireless Handshake Protocols</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[#024ad8]" /> Versatile Media Handling</li>
                                    </ul>
                                </section>

                                <section id="office" className="bg-gray-50 p-10 rounded-sm border border-gray-100 group hover:border-[#024ad8]/40 transition-all text-left">
                                    <h3 className="font-extrabold text-black mb-8 flex items-center gap-3 text-lg uppercase italic text-left">
                                        <Target className="text-[#024ad8]" size={22} />
                                        Office Performance
                                    </h3>
                                    <p className="text-sm font-semibold italic text-gray-500 mb-8 text-left text-left">
                                        High-velocity deployment units engineered for enterprise reliability, multi-tenant access, and heavy volume.
                                    </p>
                                    <ul className="space-y-4 text-gray-500 text-xs font-bold uppercase tracking-widest text-left">
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-black" /> Rapid Output Tiers</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-black" /> Modular Paper Reservoirs</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-black" /> Duplex Automation Engine</li>
                                    </ul>
                                </section> section
                            </div>
                        </div>

                        {/* Technology Tiers */}
                        <div id="inkjet" className="space-y-16 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">02</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Technology Matrix</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                                <section id="inkjet-section" className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm text-left">
                                    <h3 className="font-extrabold text-black mb-8 flex items-center gap-3 text-lg uppercase italic text-left">
                                        <Droplet className="text-[#024ad8]" size={22} />
                                        Inkjet Precision
                                    </h3>
                                    <p className="text-sm font-semibold italic text-gray-600 leading-relaxed mb-6 text-left">
                                        Recommended for luxury color reproduction, vibrant marketing collateral, and precision-grade photographic assets.
                                    </p>
                                    <div className="w-10 h-1 bg-[#024ad8] mb-6 text-left"></div>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest text-left italic">
                                        Ideal for: High-Contrast Marketing Assets
                                    </p>
                                </section>

                                <section id="laser" className="p-10 bg-gray-50 border border-gray-100 rounded-sm text-left">
                                    <h3 className="font-extrabold text-black mb-8 flex items-center gap-3 text-lg uppercase italic text-left">
                                        <Zap className="text-[#024ad8]" size={22} />
                                        Laser Efficiency
                                    </h3>
                                    <p className="text-sm font-semibold italic text-gray-600 leading-relaxed mb-6 text-left">
                                        Selected for sharp text clarity, accelerated document throughput, and superior cost-per-page performance.
                                    </p>
                                    <div className="w-10 h-1 bg-black mb-6 text-left"></div>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest text-left italic">
                                        Ideal for: Enterprise Documentation
                                    </p>
                                </section>
                            </div>
                        </div>

                        {/* Yield Optimization */}
                        <section id="yield" className="space-y-10 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">03</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Yield Optimization</h2>
                            </div>

                            <div className="relative rounded-sm overflow-hidden shadow-2xl h-[450px] border-l-4 border-[#024ad8] text-left text-left">
                                <img
                                    src="/images/buying2.jpg"
                                    alt="Technical Yield Background"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center p-14 text-left">
                                    <div className="text-white max-w-lg text-left">
                                        <p className="text-[#024ad8] text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-left">Operational Intelligence</p>
                                        <h3 className="text-4xl font-extrabold mb-8 italic uppercase text-left leading-tight">Mastering Your <br />Consumption Matrix</h3>
                                        <p className="text-base font-semibold italic text-gray-300 mb-10 text-left">
                                            Assess estimated page yield for Ink & Toner units to finalize long-term terminal operating costs and procurement cycles.
                                        </p>
                                        <div className="flex gap-4 text-left">
                                            <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Checklist */}
                        <section id="checklist" className="bg-black text-white p-12 md:p-16 rounded-sm shadow-xl relative overflow-hidden border-t-4 border-[#024ad8] text-left">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#024ad8]/5 rounded-full blur-3xl -mr-32 -mt-32 text-left"></div>
                            
                            <h2 className="text-3xl font-extrabold mb-12 italic uppercase text-center md:text-left text-left">Procurement Workflow</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                                {[
                                    { title: "Define Requirements", desc: "Audit whether application requires home-tier, enterprise, or specialized hardware.", step: "S-1" },
                                    { title: "Spec Comparison", desc: "Evaluate page yield metadata, transmission speeds, and encryption protocols.", step: "S-2" },
                                    { title: "Asset Selection", desc: "Finalize hardware platform and verify compatible replenishment supplies.", step: "S-3" },
                                    { title: "Deployment", desc: "Execute procurement and await expedited executive logistics delivery.", step: "S-4" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 group text-left">
                                        <div className="text-4xl font-black text-[#024ad8]/40 italic group-hover:text-[#024ad8] transition-colors shrink-0 text-left">{item.step}</div>
                                        <div className="text-left">
                                            <h4 className="font-extrabold text-lg mb-3 italic uppercase text-left">{item.title}</h4>
                                            <p className="text-sm text-gray-400 font-semibold italic leading-relaxed text-left">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
                                <p className="text-xs font-black uppercase tracking-[0.2em] italic text-gray-500 text-left">Authorized Reseller Precision Systems Active</p>
                                <a href="/shop" className="inline-flex items-center gap-3 bg-[#024ad8] hover:bg-white text-white hover:text-black font-black px-12 py-5 rounded-sm transition-all uppercase tracking-widest text-xs italic shadow-lg shadow-[#024ad8]/20">
                                    Access Inventory Terminal <ArrowRight size={18} />
                                </a>
                            </div>
                        </section>

                        {/* Bottom Tagline */}
                        <section className="text-center py-10 text-left">
                            <ShieldCheck className="mx-auto mb-8 text-[#024ad8] opacity-60" size={60} />
                            <h3 className="text-3xl font-extrabold text-black mb-6 italic uppercase tracking-tight text-left">Elite Curation Guaranteed</h3>
                            <p className="text-gray-600 text-[15px] leading-relaxed italic font-semibold max-w-3xl mx-auto text-left">
                                Innovation Dynamics Group LLC only manages authorized assets that meet our rigorous standards. This framework empowers your infrastructure with verified printing excellence.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer Status */}
            <div className="bg-gray-50 py-10 border-t border-gray-100 text-left text-left">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed italic text-left">
                        Innovation Dynamics Group LLC © 2026 • Intelligent Asset Procurement Terminal • System Status: Secure
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BuyingGuide;

