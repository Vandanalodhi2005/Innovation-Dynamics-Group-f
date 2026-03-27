import React from 'react';

const Disclaimer = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4 uppercase tracking-tighter">Disclaimer</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
                        <span>Last Updated: March 25, 2026</span>
                    </div>
                </header>

                <div className="space-y-12 leading-relaxed text-gray-700 font-normal text-sm">
                    <section>
                        <p className="text-lg text-gray-600 mb-6 font-medium">
                            Innovation Dynamics Group LLC is committed to providing accurate, clear, and helpful information to support informed purchasing decisions.
                        </p>
                        <p className="text-gray-400 font-medium leading-relaxed italic">
                            This Disclaimer applies to all content, products, and services available on our website to ensure transparency and accountability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">1. Product Information & Accuracy</h2>
                        <p className="mb-4">We make reasonable efforts to ensure product details—including specifications, pricing, and images—are accurate. However:</p>
                        <ul className="space-y-2 text-gray-500 font-medium list-disc pl-5">
                            <li>Specifications and packaging may change without notice by manufacturers</li>
                            <li>Appearance may vary based on display settings and lighting</li>
                            <li>Print yields are manufacturer standards and may vary in actual use</li>
                        </ul>
                        <p className="mt-4 text-xs text-gray-400 italic font-bold">All product information is provided on an “as-is” basis for general reference only.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">2. Usage & Performance Disclaimer</h2>
                        <p className="mb-4">Product performance may vary based on factors outside our control, such as usage frequency, environmental conditions, and paper type.</p>
                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-loose">
                                Any references to cost savings or efficiency are general estimates and are not guaranteed. Innovation Dynamics Group LLC does not guarantee specific yields or performance outcomes.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">3. Independent Retailer & Trademark Disclaimer</h2>
                        <div className="space-y-4">
                            <p>All product names, logos, and trademarks (e.g., HP, Canon, Epson, Brother) are property of their respective owners and used strictly for identification purposes.</p>
                            <div className="p-8 bg-black text-white rounded-sm">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#024ad8]">Operational Identity</h3>
                                <ul className="space-y-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                    <li>Independent online retailer</li>
                                    <li>No official affiliation or endorsement by manufacturers</li>
                                    <li>No claim of official partnership or dealership status</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">4. Manufacturer Warranty Disclaimer</h2>
                        <p className="mb-4">Manufacturer warranties are provided solely by respective brands and are subject to their individual terms. Coverage may vary by region and usage.</p>
                        <p className="text-xs text-red-600 font-bold uppercase tracking-widest">Use of non-OEM consumables may affect warranty eligibility depending on manufacturer policies.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">5. No Professional or Technical Advice</h2>
                        <p>All information provided is for general informational purposes and should not be considered professional or technical advice. Customers are responsible for verifying compatibility and installation requirements.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">6. Limitation of Reliance</h2>
                        <p>Users agree that any reliance on website information is at their own discretion. Innovation Dynamics Group LLC shall not be held liable for decisions made based on website content or descriptions.</p>
                    </section>

                    <section id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-8 uppercase tracking-tighter">7. Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4 text-left">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-[0.2em]">Innovation Dynamics Group LLC</p>
                                <div className="space-y-1 text-gray-500 text-sm font-medium">
                                    <p className="font-bold text-black mb-1 uppercase tracking-tight">Support & Information</p>
                                    <p>11397 Quincy St NE</p>
                                    <p>Blaine, MN 55434</p>
                                    <p>United States</p>
                                </div>
                            </div>
                            <div className="space-y-4 text-left">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-[0.2em]">Communication Hub</p>
                                <div className="space-y-2 text-sm text-gray-500 font-medium">
                                    <p>📧 support@innovationdynamicsgroup.com</p>
                                    <p>📞 +1 (651) 815-4630</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.7em]">
                        Innovation Dynamics Group LLC © 2026
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Disclaimer;
