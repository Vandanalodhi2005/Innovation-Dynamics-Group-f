import React from "react";

const Accessibility = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Accessibility</h1>
                    <p className="text-gray-500 text-sm font-medium">Innovation Dynamics Group LLC protocol for providing an inclusive digital environment accessible to the widest possible audience.</p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                        <span>Updated: March 25, 2026</span>
                    </div>
                </header>

                <div className="space-y-12 leading-relaxed text-gray-700 font-normal">
                    <section id="commitment">
                        <h2 className="text-2xl font-bold text-black mb-6">Our Commitment</h2>
                        <p className="text-lg text-gray-600 mb-6 font-medium">
                            Innovation Dynamics Group LLC strives to ensure that its services are accessible to people with disabilities. We hold that every user has the right to navigate the digital world with dignity, equality, and independence.
                        </p>
                    </section>

                    <section id="standards">
                        <h2 className="text-2xl font-bold text-black mb-6">Standards & Guidelines</h2>
                        <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm">
                            <p className="font-semibold text-gray-600 mb-6 font-medium">
                                We utilize the <strong>Web Content Accessibility Guidelines (WCAG 2.1)</strong> as our primary framework. These protocols ensure our digital touchpoints are Perceivable, Operable, Understandable, and Robust.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                <p className="text-xs font-bold text-black uppercase tracking-wider">
                                    Target Compliance: WCAG 2.1 Level AA
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="features">
                        <h2 className="text-2xl font-bold text-black mb-8">Technical Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-sm uppercase tracking-wide">Keyboard Control</h3>
                                <p className="text-sm text-gray-500">All interactive elements on our storefront can be triggered via keyboard commands, supporting users who operate without traditional pointer devices.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-sm uppercase tracking-wide">Contrast Fidelity</h3>
                                <p className="text-sm text-gray-500">We maintain rigorous color contrast ratios across all textual and UI elements to optimize visibility for users with visual impairments.</p>
                            </div>
                        </div>
                    </section>

                    <section id="ongoing">
                        <h2 className="text-2xl font-bold text-black mb-6">Continuous Evolution</h2>
                        <p className="text-gray-600 font-medium">
                            Digital accessibility is an ongoing journey. We perform quarterly audits of our checkout flow and product pages to identify and dismantle barriers to access, ensuring a first-class experience for every user.
                        </p>
                    </section>

                    <section id="contact" className="mt-16 pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-10">Support Center</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Direct Message</p>
                                    <p className="font-bold text-black text-sm break-all">support@innovationdynamicsgroup.com</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Operational Voice</p>
                                    <p className="font-bold text-black text-sm">+1 (651) 815-4630</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Operational HQ</p>
                                <div className="text-sm font-medium text-gray-500">
                                    <p>Innovation Dynamics Group LLC</p>
                                    <p>11397 Quincy St NE</p>
                                    <p>Blaine, MN 55434</p>
                                </div>
                            </div>
                        </div>
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

export default Accessibility;
