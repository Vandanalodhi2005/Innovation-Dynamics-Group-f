import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4 uppercase tracking-tighter">Cookie Policy</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
                        <span>Last Updated: March 25, 2026</span>
                    </div>
                </header>

                <div className="space-y-12 leading-relaxed text-gray-700 font-normal text-sm">
                    <section>
                        <p className="text-lg text-gray-600 mb-6 font-medium">
                            This Cookie Policy explains how Innovation Dynamics Group LLC (“we,” “our,” or “us”) uses cookies and similar technologies to operate, secure, and improve our website.
                        </p>
                        <p className="text-gray-400 font-medium leading-relaxed">
                            By continuing to use our website, you acknowledge the use of cookies as described in this policy. Where applicable, you will be provided with options to manage your cookie preferences.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">1. What Are Cookies?</h2>
                        <p className="mb-4">Cookies are small text files stored on your device when you visit a website. They help websites function properly, maintain secure sessions, and remember basic preferences.</p>
                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider italic">
                                Important: Cookies used on our website do not store sensitive personal information such as your full payment details.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-8 uppercase tracking-widest text-[#024ad8]">2. Types of Cookies We Use</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-gray-100 rounded-sm overflow-hidden font-medium">
                                <thead>
                                    <tr className="bg-gray-50 text-[10px] font-bold uppercase text-gray-400 tracking-[0.2em]">
                                        <th className="p-4 border border-gray-100">Cookie Type</th>
                                        <th className="p-4 border border-gray-100">Purpose</th>
                                        <th className="p-4 border border-gray-100">Consent</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr>
                                        <td className="p-4 border border-gray-100 font-bold text-black">Strictly Necessary</td>
                                        <td className="p-4 border border-gray-100">Enable core website functionality, security, cart sessions, and authentication</td>
                                        <td className="p-4 border border-gray-100 uppercase text-[10px] font-bold">Required</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-gray-100 font-bold text-black">Functional</td>
                                        <td className="p-4 border border-gray-100">Store basic preferences for usability (language or region settings)</td>
                                        <td className="p-4 border border-gray-100 uppercase text-[10px] font-bold text-gray-400">Implied</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-8 border border-red-50 bg-red-50 rounded-sm">
                                <h3 className="text-[10px] font-black text-red-600 uppercase mb-4 tracking-widest">We Do Not Use</h3>
                                <ul className="space-y-2 text-[10px] text-red-500 font-bold uppercase tracking-wider">
                                    <li>Advertising or behavioral tracking</li>
                                    <li>Third-party retargeting cookies</li>
                                    <li>Social media tracking pixels</li>
                                    <li>Analytics or profiling tools</li>
                                </ul>
                            </div>
                            <div className="p-8 border border-gray-100 bg-gray-50 rounded-sm flex items-center">
                                <p className="text-[11px] text-gray-400 font-bold uppercase leading-relaxed tracking-widest text-center italic">
                                    Our platform prioritizes privacy by limiting data persistence to functional essentials only.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">3. Purpose of Cookies</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold uppercase tracking-tight text-gray-500">
                            <li className="p-4 border border-gray-100 flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8]"></div> Shopping cart and checkout session</li>
                            <li className="p-4 border border-gray-100 flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8]"></div> Securing login and account data</li>
                            <li className="p-4 border border-gray-100 flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8]"></div> Processing secure connections</li>
                            <li className="p-4 border border-gray-100 flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8]"></div> Performance and reliability</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">4. Cookie Consent & User Control</h2>
                        <p className="mb-4">You can manage, delete, or block cookies through your browser settings. However, since we currently only use essential cookies, full blocking may disrupt core features like account login and checkout.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">5. Managing Cookies in Your Browser</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-bold uppercase tracking-widest">
                            {['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge'].map(browser => (
                                <div key={browser} className="p-4 border border-gray-100 text-center text-gray-400">{browser}</div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">6. Third-Party Cookies</h2>
                        <p>We do not use third-party cookies for advertising or analytics. If payment processors (e.g., Stripe, PayPal) or live support tools require functional cookies, their usage will be limited to fulfilling your specific request.</p>
                    </section>

                    <section id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-8 uppercase tracking-tighter">7. Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4 text-left">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-[0.2em]">Innovation Dynamics Group LLC</p>
                                <div className="space-y-1 text-gray-500 text-sm font-medium">
                                    <p className="font-bold text-black mb-1 uppercase tracking-tight">Corporate Headquarters</p>
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
                    <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.5em]">
                        Innovation Dynamics Group LLC © 2026
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default CookiePolicy;
