import React from 'react';

const TermsConditions = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4 uppercase tracking-tighter">Terms & Conditions</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-12 leading-relaxed text-gray-700 font-normal">
                    <section>
                        <p className="text-lg text-gray-600 mb-6 font-medium">
                            Please read these Terms & Conditions carefully before using our website or purchasing products. By accessing or using our website, you agree to be bound by these Terms & Conditions.
                        </p>
                        <p className="text-sm text-gray-400">
                            Innovation Dynamics Group LLC operates as an independent online retailer offering printers and related products. We are not affiliated with or endorsed by any manufacturer unless explicitly stated.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">1. Agreement to Terms</h2>
                        <p className="text-sm mb-4">
                            By accessing or using the Innovation Dynamics Group LLC website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must discontinue use of the website immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">2. Definitions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 font-medium">
                            <p><span className="text-black font-bold uppercase tracking-tight text-[10px] mr-2">Company:</span> Innovation Dynamics Group LLC</p>
                            <p><span className="text-black font-bold uppercase tracking-tight text-[10px] mr-2">User:</span> Any person using the website or purchasing products</p>
                            <p><span className="text-black font-bold uppercase tracking-tight text-[10px] mr-2">Products:</span> Printers, ink, toner, and related accessories</p>
                            <p><span className="text-black font-bold uppercase tracking-tight text-[10px] mr-2">Services:</span> Website functionality, order processing, and support</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">3. Use of Website</h2>
                        <div className="space-y-6">
                            <p className="text-sm">You agree to use the website only for lawful purposes. You agree to provide accurate information during checkout, maintain account confidentiality, and comply with all applicable laws.</p>
                            <div className="p-6 bg-red-50 border border-red-100 rounded-sm">
                                <h3 className="text-xs font-bold text-red-600 uppercase mb-3 tracking-widest">Prohibited Activities</h3>
                                <ul className="space-y-1 text-xs text-red-500 font-bold uppercase">
                                    <li>Fraudulent, deceptive, or misleading practices</li>
                                    <li>Unauthorized access to systems or data</li>
                                    <li>Distribution of malware or harmful code</li>
                                    <li>Interference with website performance</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">4. Product Information & Disclaimer</h2>
                        <p className="text-sm mb-6">We strive for accuracy, but product descriptions, specifications, and images are for general informational purposes only. Minor inaccuracies may occur, and pricing or availability may change without notice.</p>
                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                            <h3 className="text-xs font-bold text-black uppercase mb-2 tracking-widest">Trademark Disclaimer</h3>
                            <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                All product names, logos, and trademarks are the property of their respective owners and are used for identification purposes only. Innovation Dynamics Group LLC operates independently and does not claim official authorization unless explicitly stated.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">5. Orders & Payment</h2>
                        <p className="text-sm mb-4">All orders are subject to acceptance and availability. We reserve the right to cancel or refuse any order due to fraud suspicion, incorrect pricing, or stock issues.</p>
                        <p className="text-sm mb-4">Payment must be completed before order processing. You are responsible for providing accurate billing and shipping details.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">6. Shipping & Delivery</h2>
                        <p className="text-sm mb-4">Delivery timelines are estimates only and may vary. Risk of loss transfers once the order is handed to the carrier. Customers must ensure accurate delivery details.</p>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Please refer to our Shipping Policy for complete details.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">7. Returns & Refunds</h2>
                        <p className="text-sm mb-2">Returns and refunds are subject to our Return & Refund Policy. Items must be unused and in original packaging unless defective. Refunds are processed after inspection.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">8. Intellectual Property</h2>
                        <p className="text-sm mb-2">All website content is protected by applicable intellectual property laws. You may not copy, reproduce, or distribute content without authorization.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">9. Limitation of Liability</h2>
                        <p className="text-sm mb-4">To the maximum extent permitted by law, Innovation Dynamics Group LLC is not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount paid for the purchased product.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">10. Compliance & Fair Use</h2>
                        <p className="text-sm">We are committed to transparent and fair business practices. Users agree not to misuse the website for deceptive, abusive, or unlawful purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">11. Governing Law</h2>
                        <p className="text-sm">These Terms are governed by applicable U.S. laws for customers located in the United States and Canadian law for customers located in Canada.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">12. Changes to Terms</h2>
                        <p className="text-sm">We may update these Terms periodically. Continued use of the website constitutes acceptance of revised Terms.</p>
                    </section>

                    <section id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-8 uppercase tracking-tighter">13. Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4 text-left">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-[0.2em]">Innovation Dynamics Group LLC</p>
                                <div className="space-y-1 text-gray-500 text-sm font-medium">
                                    <p>11397 Quincy St NE</p>
                                    <p>Blaine, MN 55434</p>
                                    <p>United States</p>
                                </div>
                            </div>
                            <div className="space-y-4 text-left">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-[0.2em]">Support Channels</p>
                                <div className="space-y-2 text-sm text-gray-500 font-medium">
                                    <p>📧 support@innovationdynamicsgroup.com</p>
                                    <p>📞 +1 (651) 815-4630</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-300 font-black uppercase tracking-[0.3em]">
                        Innovation Dynamics Group LLC © 2026
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default TermsConditions;
