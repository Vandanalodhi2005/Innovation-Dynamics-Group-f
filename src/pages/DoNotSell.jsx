import React from "react";

const DoNotSell = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-2">Do Not Sell or Share My Personal Information</h1>
                    <h2 className="text-xl font-medium text-gray-500 mb-4">CCPA/CPRA Notice</h2>
                    <div className="mt-6 flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                        <span>Last Updated: March 25, 2026</span>
                    </div>
                </header>

                <div className="space-y-12 leading-relaxed text-gray-700 font-normal">
                    <section className="border-l-4 border-gray-100 pl-6 py-2 text-gray-600 font-medium italic">
                        <p>This page is provided in accordance with the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). These laws provide California residents with specific rights regarding their personal information.</p>
                    </section>

                    <section id="commitment">
                        <h2 className="text-2xl font-bold text-black mb-6">1. Our Commitment to Your Privacy</h2>
                        <p className="font-medium mb-6">Innovation Dynamics Group LLC respects your privacy and is committed to transparent data practices.</p>
                        <ul className="space-y-4 font-medium">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                <p>We do NOT sell personal information</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                <p>We do NOT share personal information for cross-context behavioral advertising</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                <p>We do NOT use advertising cookies, tracking pixels, or profiling technologies</p>
                            </li>
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 italic">Even though we do not sell or share data, California residents have the right to submit requests under applicable laws.</p>
                    </section>

                    <section id="rights">
                        <h2 className="text-2xl font-bold text-black mb-6">2. Your Rights Under CCPA/CPRA</h2>
                        <p className="font-medium mb-8 text-gray-600">California residents have the following specific rights:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-xs uppercase tracking-wider">Right to Know</h3>
                                <p className="text-sm text-gray-500">Request and receive information about the personal information we collect, use, or share.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-xs uppercase tracking-wider">Right to Delete</h3>
                                <p className="text-sm text-gray-500">Request deletion of your personal information (subject to legal exceptions).</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-xs uppercase tracking-wider">Right to Correct</h3>
                                <p className="text-sm text-gray-500">Request correction of inaccurate personal information.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-xs uppercase tracking-wider">Right to Opt-Out</h3>
                                <p className="text-sm text-gray-500">Opt out of the "sale" or "sharing" of personal information (though we don't engage in these practices).</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-xs uppercase tracking-wider">Right to Limit Use</h3>
                                <p className="text-sm text-gray-500">Limit use of sensitive personal information to necessary business purposes (we do not use sensitive data).</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-3 text-xs uppercase tracking-wider">Right to Non-Discrimination</h3>
                                <p className="text-sm text-gray-500">Exercise these rights without experiencing discrimination, including denial of service or different pricing.</p>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-gray-500 italic">You may submit requests at any time, and we will respond within the timeframes mandated by law (typically 45 days).</p>
                    </section>

                    <section id="practices">
                        <h2 className="text-2xl font-bold text-black mb-6">3. Our Data Practices</h2>
                        <ul className="space-y-4 font-medium">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                <p>We do NOT sell personal information to third parties.</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                <p>We do NOT share personal information for advertising purposes.</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                <p>We only disclose information to trusted service providers under strict contractual obligations.</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div>
                                <p>We maintain industry-standard security measures to protect your data at all times.</p>
                            </li>
                        </ul>
                    </section>

                    <section id="categories">
                        <h2 className="text-2xl font-bold text-black mb-6">4. Categories of Personal Information We Collect</h2>
                        <p className="font-medium mb-6">We collect only limited information required for our eCommerce operations, including:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium bg-gray-50 p-8 border border-gray-100 rounded-sm">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div><p className="text-sm">Contact information (Name, Email, Phone)</p></li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div><p className="text-sm">Billing and shipping address</p></li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div><p className="text-sm">Order details and transaction history</p></li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div><p className="text-sm">Customer support communications</p></li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div><p className="text-sm">Essential technical/session data (Cookies)</p></li>
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 font-medium">We do not use or disclose sensitive personal information for advertising purposes.</p>
                    </section>

                    <section id="no-sale">
                        <h2 className="text-2xl font-bold text-black mb-6">5. No Sale or Sharing of Personal Information</h2>
                        <p className="font-medium mb-6">In the preceding 12 months, Innovation Dynamics Group LLC has:</p>
                        <ul className="space-y-4 font-medium">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div><p>Not sold personal information</p></li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div><p>Not shared personal information for cross-context behavioral advertising</p></li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div><p>Only disclosed information to trusted service providers strictly for business operations</p></li>
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 font-medium italic">All service providers are contractually required to use data only for authorized purposes.</p>
                    </section>

                    <section id="cookies">
                        <h2 className="text-2xl font-bold text-black mb-6">6. Cookies & Tracking Technologies</h2>
                        <p className="font-medium mb-6">Innovation Dynamics Group LLC does not use:</p>
                        <ul className="space-y-3 font-medium mb-8">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div><p>Advertising or tracking cookies</p></li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div><p>Analytics tools or behavioral profiling technologies</p></li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div><p>Third-party marketing or retargeting pixels</p></li>
                        </ul>
                        <p className="font-medium mb-6">We only use strictly necessary cookies required for:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm"><div className="w-1 h-1 bg-black rounded-full"></div><p className="text-sm">Cart functionality</p></div>
                            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-sm"><div className="w-1 h-1 bg-black rounded-full"></div><p className="text-sm">Secure checkout</p></div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm"><div className="w-1 h-1 bg-black rounded-full"></div><p className="text-sm">Account login</p></div>
                            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-sm"><div className="w-1 h-1 bg-black rounded-full"></div><p className="text-sm">Website security and performance</p></div>
                        </div>
                    </section>

                    <section id="submit">
                        <h2 className="text-2xl font-bold text-black mb-6">7. How to Submit a Request</h2>
                        <p className="font-medium mb-8">You may submit a request to exercise your rights using the method below:</p>
                        <div className="p-8 border border-gray-100 rounded-sm bg-gray-50">
                            <h3 className="font-bold text-[#024ad8] text-xs uppercase tracking-widest mb-4">Email Request</h3>
                            <p className="font-bold text-black mb-1">support@innovationdynamicsgroup.com</p>
                            <p className="text-sm text-gray-500 mb-6 font-medium">Subject Line: "CCPA Request"</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Please include:</p>
                            <ul className="text-sm space-y-2 font-medium">
                                <li>• Full name</li>
                                <li>• Email address</li>
                                <li>• Order number (if applicable)</li>
                                <li>• Type of request (Access, Delete, Correct, or Opt-Out)</li>
                            </ul>
                        </div>
                    </section>

                    <section id="verification">
                        <h2 className="text-2xl font-bold text-black mb-6">8. Verification Process</h2>
                        <p className="font-medium mb-6">To protect your personal information, we may verify your identity by requesting:</p>
                        <ul className="space-y-4 font-medium text-sm text-gray-600">
                            <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gray-400 rounded-full"></div><p>Email confirmation</p></li>
                            <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gray-400 rounded-full"></div><p>Order details or transaction history</p></li>
                            <li className="flex items-center gap-3"><div className="w-1 h-1 bg-gray-400 rounded-full"></div><p>Basic account information</p></li>
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 font-medium font-bold">We will respond to verified requests within 45 days, as required by law.</p>
                    </section>

                    <section id="agents">
                        <h2 className="text-2xl font-bold text-black mb-6">9. Authorized Agents</h2>
                        <p className="font-medium text-gray-600">
                            You may designate an authorized agent to submit a request on your behalf. We may require proof of authorization and identity verification before processing such requests.
                        </p>
                    </section>

                    <section id="non-discrimination">
                        <h2 className="text-2xl font-bold text-black mb-6">10. Non-Discrimination Statement</h2>
                        <p className="font-medium text-gray-600 mb-6">Innovation Dynamics Group LLC will not:</p>
                        <ul className="space-y-3 font-medium text-sm text-gray-500">
                            <li>• Deny goods or services</li>
                            <li>• Charge different prices</li>
                            <li>• Provide a lower level of service</li>
                            <li>• Discriminate against you in any way</li>
                        </ul>
                        <p className="mt-6 font-bold text-black text-sm italic">...for exercising your privacy rights under applicable laws.</p>
                    </section>

                    <section id="contact" className="mt-16 pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-10">11. Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-10">
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Direct Access</p>
                                    <p className="font-bold text-black text-sm">support@innovationdynamicsgroup.com</p>
                                    <p className="font-bold text-black text-sm">+1 (651) 815-4630</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Registered Address</p>
                                    <div className="text-sm font-medium text-gray-500">
                                        <p>Innovation Dynamics Group LLC</p>
                                        <p>11397 Quincy St NE</p>
                                        <p>Blaine, MN 55434</p>
                                        <p>United States</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-sm">
                                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                                    We are committed to handling all privacy-related requests promptly and in accordance with applicable California data protection laws.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-300 font-medium tracking-wide">
                        Innovation Dynamics Group LLC © 2026 • Verified Privacy Operations
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default DoNotSell;
