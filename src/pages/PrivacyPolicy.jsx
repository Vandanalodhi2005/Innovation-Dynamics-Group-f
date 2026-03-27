import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto text-left">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium whitespace-nowrap">
                        <p>Effective Date: March 25, 2026</p>
                        <p>Last Updated: March 25, 2026</p>
                    </div>
                </header>

                <div className="space-y-12 text-gray-700 leading-relaxed font-normal">
                    <section>
                        <p className="text-lg text-gray-600 mb-6 font-medium">
                            Innovation Dynamics Group LLC (“we,” “our,” or “us”) is committed to protecting your privacy and ensuring full transparency in how your personal information is collected, used, and managed.
                        </p>
                        <p className="text-gray-500 text-sm">
                            This Privacy Policy explains our data practices in accordance with applicable laws in the United States and Canada, including expectations under Microsoft Advertising and Google Ads policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">1. Data Controller Information</h2>
                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                            <p className="font-bold text-black mb-2 text-sm uppercase tracking-tight">Innovation Dynamics Group LLC</p>
                            <div className="space-y-1 text-sm text-gray-600 font-medium">
                                <p>📧 Email: support@innovationdynamicsgroup.com</p>
                                <p>📞 Phone: +1 (651) 815-4630</p>
                                <p>📍 Address: 11397 Quincy St NE, Blaine, MN 55434, United States</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">2. Information We Collect</h2>
                        <p className="mb-6">We collect only the information necessary to operate our eCommerce platform, process orders, and provide customer support.</p>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-bold text-black uppercase mb-3">2.1 Information You Provide</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Name</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Email address</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Phone number</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Billing and shipping address</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Order and transaction details</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Customer service communications</li>
                                </ul>
                                <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-sm text-xs text-[#024ad8] font-bold">
                                    Payment Information: Payments are processed securely via PCI DSS–compliant third-party providers. We do not store full credit/debit card details.
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-black uppercase mb-3">2.2 Information Collected Automatically</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> IP address</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Browser type and version</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Device type and OS</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Pages visited and session activity</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Cart and checkout session data</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">3. How We Use Your Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-bold text-black uppercase mb-3">3.1 Order Processing</h3>
                                <ul className="space-y-1 text-sm text-gray-600 font-medium">
                                    <li>Process and fulfill purchases</li>
                                    <li>Send confirmations and updates</li>
                                    <li>Coordinate shipping and delivery</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-black uppercase mb-3">3.2 Customer Support</h3>
                                <ul className="space-y-1 text-sm text-gray-600 font-medium">
                                    <li>Respond to inquiries</li>
                                    <li>Provide assistance with issues</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-black uppercase mb-3">3.3 Security & Compliance</h3>
                                <ul className="space-y-1 text-sm text-gray-600 font-medium">
                                    <li>Detect fraud or unauthorized activity</li>
                                    <li>Maintain website security</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-black uppercase mb-3">3.4 Website Functionality</h3>
                                <ul className="space-y-1 text-sm text-gray-600 font-medium">
                                    <li>Ensure site performance</li>
                                    <li>Improve checkout flow</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">4. Cookies & Tracking Technologies</h2>
                        <div className="space-y-6">
                            <p className="text-sm">We are committed to transparency regarding tracking and data usage.</p>
                            <div>
                                <h3 className="text-sm font-bold text-black uppercase mb-2">4.1 Types of Cookies We Use</h3>
                                <p className="text-sm">We use limited and essential cookies, including cart functionality, session, and security cookies.</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-black uppercase mb-2">4.2 Analytics & Tracking Disclosure</h3>
                                <p className="text-sm">We do not use behavioral advertising cookies or cross-site tracking technologies. We do not sell or share personal data for advertising purposes.</p>
                            </div>
                            <div className="p-4 bg-gray-50 border border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                Disabling essential cookies may impact website functionality (e.g., checkout process).
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">5. How We Share Information</h2>
                        <p className="text-sm mb-4">We do not sell or rent your personal data. We only share information with trusted service providers for payment processing, logistics, hosting, and security.</p>
                        <p className="text-sm">We may also disclose data if required by law enforcement, court orders, or during business transfers such as a merger.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">6. Your Privacy Rights</h2>
                        <p className="text-sm mb-4">You have the right to access, correct, delete, or restrict the processing of your data. To exercise these rights:</p>
                        <p className="font-bold text-[#024ad8] text-sm">📧 support@innovationdynamicsgroup.com</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">7. Opt-Out Options</h2>
                        <p className="text-sm mb-2">You can opt out of non-essential emails by clicking “Unsubscribe” or contacting us. You can also disable cookies via your browser or device settings.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">8. Data Retention</h2>
                        <p className="text-sm">We retain data only as long as necessary to complete transactions, provide support, meet legal obligations, or prevent fraud.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">9. Data Security</h2>
                        <p className="text-sm font-medium">We implement safeguards like HTTPS/TLS encryption, secure firewalls, and PCI DSS–compliant payment systems.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">10. Third-Party Links</h2>
                        <p className="text-sm">Our website may contain links to external sites. We are not responsible for their privacy practices.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">11. Children’s Privacy</h2>
                        <p className="text-sm">We do not knowingly collect data from children under 13. Any such data found will be removed promptly.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">12. Policy Updates</h2>
                        <p className="text-sm">Changes to this policy will be posted on this page with an updated date.</p>
                    </section>

                    <section id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-xl font-bold text-black mb-6">13. Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <p className="font-bold text-black text-sm uppercase tracking-tight">Innovation Dynamics Group LLC</p>
                                <div className="space-y-1 text-gray-500 text-sm font-medium text-left">
                                    <p>11397 Quincy St NE</p>
                                    <p>Blaine, MN 55434</p>
                                    <p>United States</p>
                                </div>
                            </div>
                            <div className="space-y-1 text-sm text-gray-500 font-medium flex flex-col justify-center text-left">
                                <p>📧 support@innovationdynamicsgroup.com</p>
                                <p>📞 +1 (651) 815-4630</p>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-300 font-bold uppercase tracking-widest">
                        Innovation Dynamics Group LLC © 2026
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
