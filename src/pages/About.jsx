import React from 'react';
import { Target, ShieldCheck, Printer, Users, Rocket, Eye, Heart, Info, Box } from 'lucide-react';
import aboutImage from '../../public/about/hero.jpg';
import aboutImage2 from '../../public/hero/about.jpg'; 
import aboutImage3 from '../../public/hero/about.jpg'; 

const About = () => {
    return (
        <div className="bg-white text-black">
            {/* Hero Section */}
            <div className="relative bg-[#F8F9FA] text-black py-32 md:py-48 overflow-hidden border-b border-gray-100">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={aboutImage}
                        alt="Office Background"
                        className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-[#024ad8] mb-8 block">ESTABLISHED LOGISTICAL EXCELLENCE</span>
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-10 tracking-tighter text-black leading-[0.9] uppercase">
                        Precision <br/> <span className="text-[#024ad8]">Imaging Solutions</span>
                    </h1>
                    <div className="w-24 h-2 bg-[#024ad8] mx-auto mb-12 shadow-xl shadow-[#024ad8]/20"></div>
                </div>
            </div>

            {/* Who We Are & What We Offer */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        {/* Image Side */}
                        <div className="relative rounded-sm overflow-hidden shadow-2xl group order-2 lg:order-1 border border-gray-50 bg-white p-4">
                            <img
                                src={aboutImage2}
                                alt="Modern Office Printer"
                                className="w-full h-[700px] object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute bottom-12 left-12 right-12 text-white bg-black/80 backdrop-blur-md p-8 rounded-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                <p className="font-extrabold text-2xl mb-2 uppercase tracking-tight">SPECIALIZED ARCHITECTURE</p>
                                <p className="text-gray-400 text-[9px] uppercase tracking-[0.3em] font-extrabold">Professional categories. Verified technical accuracy.</p>
                            </div>
                        </div>

                        {/* Who We Are Content */}
                        <div className="space-y-12 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-4 text-[#024ad8] text-[10px] font-extrabold uppercase tracking-[0.4em] bg-blue-50 px-5 py-2 rounded-sm border border-blue-100">
                                <Users size={16} /> CORPORATE IDENTITY
                            </div>
                            <h2 className="text-5xl font-extrabold text-black uppercase tracking-tighter leading-tight">THE INFRASTRUCTURE <br/> BEHIND THE BRAND</h2>
                            <div className="space-y-8 text-gray-500 leading-relaxed text-[15px] font-bold uppercase tracking-wider">
                                <p>
                                    Innovation Dynamics Group LLC is a specialized enterprise hub focused on the procurement of precision printers and essential operational solutions. Our objective is to simplify the acquisition landscape, providing transparent and dependable assets for high-stakes environments.
                                </p>
                                <p>
                                    Operated as a registered entity, we leverage a structured eCommerce framework designed for clarity and professional efficiency. As an HP Amplify Partner, we facilitate access to trusted HP hardware integrated within our specialized catalog.
                                </p>
                                <p>
                                    We differentiate through focus. By isolating printer technology, we provide superior technical clarity, allowing organizations to identify and deploy hardware that meets specific performance metrics without the clutter of general marketplaces.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section className="py-32 bg-[#F8F9FA] border-y border-gray-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-4 text-[#024ad8] text-[10px] font-extrabold uppercase tracking-[0.4em] mb-8 bg-white px-5 py-2 rounded-sm border border-gray-200">
                            <ShieldCheck size={16} /> OPERATIONAL STANDARDS
                        </div>
                        <h2 className="text-5xl font-extrabold text-black mb-8 uppercase tracking-tighter">OUR COMMITMENT</h2>
                        <h3 className="text-sm text-gray-400 font-extrabold uppercase tracking-[0.4em]">SYSTEMIC QUALITY • TRANSPARENCY • PROFESSIONAL SATISFACTION</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="bg-white p-16 rounded-sm shadow-2xl border border-gray-50 relative group hover:-translate-y-2 transition-all duration-500">
                                <div className="absolute top-0 right-0 w-32 h-1.5 bg-[#024ad8]"></div>
                                <div className="relative space-y-8 text-gray-500 text-sm leading-[1.8] font-bold uppercase tracking-widest">
                                    <p>
                                        At Innovation Dynamics Group LLC, we believe buying a printer should be straightforward and stress-free. That is why we focus on clear product information, transparent pricing, and reliable service.
                                    </p>
                                    <p>
                                        From browsing products to completing checkout, our platform is designed to provide a smooth and secure shopping experience. We aim to build long-term trust with our customers by offering dependable products and professional customer support.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-4 bg-white rounded-sm shadow-2xl border border-gray-50">
                            <img
                                src={aboutImage3}
                                alt="Printer Supplies"
                                className="rounded-sm w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute -bottom-10 -left-10 bg-black text-white p-12 rounded-sm shadow-2xl max-w-xs border border-white/5">
                                <Info size={36} className="mb-8 text-[#024ad8]" />
                                <p className="font-extrabold text-xl leading-tight uppercase tracking-tighter">PROFESSIONAL <br/> ACQUISITION <br/> TERMINAL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-4 text-[#024ad8] text-[10px] font-extrabold uppercase tracking-[0.4em] mb-8">
                            <Target size={16} /> COMPETITIVE ADVANTAGE
                        </div>
                        <h2 className="text-5xl font-extrabold text-black mb-8 uppercase tracking-tighter">STRATEGIC DIFFERENTIATION</h2>
                        <h3 className="text-sm text-gray-300 font-extrabold uppercase tracking-[0.4em]">A FACILITY ENGINEERED FOR ENTERPRISE EFFICIENCY</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Printer size={32} />,
                                title: "ASSET SELECTION",
                                text: "Our catalog is curated for performance, ranging from compact home-office units to enterprise-grade multifunction systems."
                            },
                            {
                                icon: <Box size={32} />,
                                title: "TECHNICAL DEPTH",
                                text: "By isolating the printing sector, we provide granular technical specifications and deployment guidance for every hardware asset."
                            },
                            {
                                icon: <ShieldCheck size={32} />,
                                title: "SYSTEMIC CLARITY",
                                text: "Our objective is to provide absolute reliability through a transparent, high-fidelity, and corporate-aligned procurement engine."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#F8F9FA] p-12 rounded-sm border border-gray-100 hover:shadow-2xl hover:bg-white transition-all duration-700 group hover:-translate-y-2">
                                <div className="mb-10 bg-white w-20 h-20 rounded-sm shadow-sm flex items-center justify-center border border-gray-100 group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-extrabold text-black mb-6 uppercase tracking-tight group-hover:text-[#024ad8] transition-colors">{item.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-[11px] font-extrabold uppercase tracking-widest">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-48 bg-black text-white relative border-t-8 border-[#024ad8] overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#024ad8]/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Rocket className="text-[#024ad8] mx-auto mb-12 animate-pulse" size={64} />
                    <h2 className="text-6xl font-extrabold mb-10 uppercase tracking-tighter">POWERING PRODUCTIVITY</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-bold leading-relaxed uppercase tracking-[0.2em] mb-20">
                        Join an elite network of organizations optimizing their imaging infrastructure through Innovation Dynamics Group.
                    </p>
                    <div className="">
                        <a href="/shop" className="inline-flex items-center gap-6 px-16 py-7 bg-[#024ad8] text-white font-extrabold rounded-sm hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-[#024ad8]/20 uppercase tracking-[0.4em] text-xs group">
                            INITIATE PROCUREMENT <Box size={22} className="group-hover:rotate-12 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
