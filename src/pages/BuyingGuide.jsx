import React from 'react';

const BuyingGuide = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Buying Guide</h1>
                    <p className="text-gray-500 text-sm font-medium">Strategic procurement framework designed to streamline your equipment selection and optimize printing infrastructure.</p>
                </header>

                <div className="space-y-16 leading-relaxed text-gray-700 font-normal">
                    <section>
                        <p className="text-lg text-gray-600 mb-6 font-medium">
                            Choosing the correct hardware profile and replenishment matrix is fundamental to operational success. This guide provides the knowledge required to navigate high-performance printing ecosystems.
                        </p>
                    </section>

                    <section id="solutions">
                        <h2 className="text-2xl font-bold text-black mb-8">1. Solution Architecture</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                            <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-4 text-xs uppercase tracking-wider">Home Infrastructure</h3>
                                <p className="text-sm text-gray-600 mb-6">Compact, high-fidelity systems optimized for remote professionals, academic workflows, and creative output.</p>
                                <ul className="space-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                                    <li className="flex items-center gap-2 font-bold"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Zero-Footprint Design</li>
                                    <li className="flex items-center gap-2 font-bold"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Wireless Handshake</li>
                                    <li className="flex items-center gap-2 font-bold"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Versatile Media</li>
                                </ul>
                            </div>
                            <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-4 text-xs uppercase tracking-wider">Office Performance</h3>
                                <p className="text-sm text-gray-600 mb-6">High-velocity deployment units engineered for enterprise reliability, multi-tenant access, and heavy volume.</p>
                                <ul className="space-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                                    <li className="flex items-center gap-2 font-bold"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Rapid Output Tiers</li>
                                    <li className="flex items-center gap-2 font-bold"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Modular Reservoirs</li>
                                    <li className="flex items-center gap-2 font-bold"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Duplex Engine</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="technology">
                        <h2 className="text-2xl font-bold text-black mb-8">2. Technology Matrix</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-sm uppercase tracking-wide">Inkjet Precision</h3>
                                <p className="text-sm text-gray-600">Recommended for luxury color reproduction, vibrant marketing collateral, and precision-grade photographic assets.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-sm uppercase tracking-wide">Laser Efficiency</h3>
                                <p className="text-sm text-gray-600">Selected for sharp text clarity, accelerated document throughput, and superior cost-per-page performance.</p>
                            </div>
                        </div>
                    </section>

                    <section id="workflow" className="pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-10">Procurement Workflow</h2>
                        <div className="space-y-8 font-medium">
                            {[
                                { title: "Define Requirements", desc: "Audit whether your application requires home-tier, enterprise, or specialized hardware." },
                                { title: "Spec Comparison", desc: "Evaluate page yield metadata, transmission speeds, and encryption protocols." },
                                { title: "Asset Selection", desc: "Finalize hardware platform and verify compatible replenishment supplies." },
                                { title: "Deployment", desc: "Execute procurement and await expedited executive logistics delivery." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0">{idx + 1}</span>
                                    <div>
                                        <h4 className="font-bold text-black text-sm mb-1 uppercase tracking-wide">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-center">
                        <h3 className="text-2xl font-bold text-black mb-6">Quality Curation Guaranteed</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                            Innovation Dynamics Group LLC only manages authorized assets that meet our rigorous standards. This framework empowers your infrastructure with verified printing excellence.
                        </p>
                    </section>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-300 font-medium tracking-wide">
                        Innovation Dynamics Group LLC © 2026
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default BuyingGuide;

