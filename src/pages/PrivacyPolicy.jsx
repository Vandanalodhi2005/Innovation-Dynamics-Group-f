import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Share2, Database, Bell, Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';
import privacy from '../../public/images/buying1.jpg';
const PrivacyPolicy = () => {
    return (
        <div className="bg-white text-black font-sans min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden italic">
                <div className="absolute inset-0 z-0">
                    <img
                        src={privacy}
                        alt="Security Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center md:text-left">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-[#0096d6]/20 text-[#0096d6] px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase border border-[#0096d6]/30">
                            <ShieldCheck size={16} /> Privacy Commitment
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white italic underline decoration-[#0096d6] decoration-4 underline-offset-8">Privacy Policy</h1>
                        <div className="w-24 h-1.5 bg-[#0096d6] mb-8 rounded-full mx-auto md:mx-0"></div>
                        <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-4">
                            Innovation Dynamics Group LLC respects your privacy and is committed to protecting the personal information you share.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-400 font-medium text-sm">
                            <p>Effective Date: March 17, 2026</p>
                            <p>Last Updated: March 17, 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-serif italic">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Sidebar Navigation - Sticky */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 space-y-4">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Policy Sections</h3>
                            <nav className="space-y-2">
                                {[
                                    { id: 'collect', label: '1. Information We Collect', icon: <Database size={18} /> },
                                    { id: 'use', label: '2. How We Use Information', icon: <FileText size={18} /> },
                                    { id: 'share', label: '3. Sharing of Information', icon: <Share2 size={18} /> },
                                    { id: 'cookies', label: '4. Cookies & Tracking', icon: <Globe size={18} /> },
                                    { id: 'security', label: '5. Data Security', icon: <Lock size={18} /> },
                                    { id: 'rights', label: '6. Your Rights', icon: <UserCheck size={18} /> },
                                    { id: 'links', label: '7. Third-Party Links', icon: <Globe size={18} /> },
                                    { id: 'brand', label: '8. Brand Info', icon: <Shield size={18} /> },
                                    { id: 'changes', label: '9. Future Changes', icon: <Bell size={18} /> },
                                    { id: 'contact', label: '10. Contact Us', icon: <Mail size={18} /> }
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-blue-50 hover:text-[#0096d6] text-gray-600 font-medium group"
                                    >
                                        <span className="text-gray-400 group-hover:text-[#0096d6] transition-colors">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16 text-gray-800">
                        {/* Introduction */}
                        <section className="text-lg leading-relaxed space-y-4 border-l-4 border-[#0096d6] pl-8 py-2">
                            <p>
                                Innovation Dynamics Group LLC ("Company", "we", "our", or "us") respects your privacy and is committed to protecting the personal information you share when visiting our website or purchasing products from our online store.
                            </p>
                            <p>
                                This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website and services.
                            </p>
                        </section>

                        {/* 1. Information We Collect */}
                        <section id="collect" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">1</span>
                                Information We Collect
                            </h2>
                            <p className="font-medium text-gray-600 italic">We may collect different types of information when you use our website.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 italic">
                                        <UserCheck className="text-[#0096d6]" size={24} />
                                        Personal Information
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 font-serif italic">When you place an order, contact us, or interact with our services, we may collect:</p>
                                    <ul className="space-y-3 text-gray-700 text-sm font-bold uppercase underline decoration-blue-100 decoration-2">
                                        <li>Full name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Billing & Shipping address</li>
                                        <li>Order details & purchase history</li>
                                        <li>Payment information (processed securely)</li>
                                    </ul>
                                    <p className="mt-6 text-xs text-gray-500 italic leading-relaxed pt-4 border-t border-gray-200">
                                        Payment information is handled by secure third-party payment processors and is not stored on our servers.
                                    </p>
                                </div>
                                <div className="bg-blue-50/30 p-8 rounded-3xl border border-blue-50 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 italic">
                                        <Database className="text-[#0096d6]" size={24} />
                                        Automatically Collected Information
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 font-serif italic">Certain information may be collected automatically to help improve the site:</p>
                                    <ul className="space-y-3 text-gray-700 text-sm font-bold uppercase underline decoration-blue-200 decoration-2">
                                        <li>IP address</li>
                                        <li>Browser type and version</li>
                                        <li>Device information</li>
                                        <li>Pages visited on the website</li>
                                        <li>Time spent on pages</li>
                                        <li>Referring websites</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 2. How We Use Your Information */}
                        <section id="use" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">2</span>
                                How We Use Your Information
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Processing and fulfilling orders",
                                    "Sending order confirmations and updates",
                                    "Providing customer service and support",
                                    "Improving website functionality",
                                    "Preventing fraudulent activity",
                                    "Maintaining website security",
                                    "Complying with legal requirements"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="w-2 h-2 bg-[#0096d6] rounded-full"></div>
                                        <span className="text-gray-700 font-bold text-sm uppercase italic">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-600 italic font-medium leading-relaxed border-t border-gray-100 pt-4">
                                We only collect and use information necessary to operate our business and provide services.
                            </p>
                        </section>

                        {/* 3. Sharing of Information */}
                        <section id="share" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">3</span>
                                Sharing of Information
                            </h2>
                            <div className="bg-red-50/50 border border-red-100 p-6 rounded-3xl mb-8">
                                <p className="text-red-900 font-bold italic text-lg leading-relaxed">
                                    Innovation Dynamics Group LLC does not sell, trade, or rent personal information to third parties.
                                </p>
                            </div>
                            <p className="italic text-gray-600 font-medium">However, we may share information with trusted service providers when necessary to operate our business, including:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Payment processing providers",
                                    "Shipping and delivery partners",
                                    "Website hosting providers",
                                    "Security and fraud prevention services"
                                ].map((service, idx) => (
                                    <div key={idx} className="flex gap-4 items-start p-2">
                                        <ShieldCheck className="text-[#0096d6] flex-shrink-0" size={24} />
                                        <p className="text-gray-700 font-bold uppercase text-sm border-b border-gray-100 pb-2">{service}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 italic mt-6 leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                These service providers are only permitted to use information required to perform their services.
                            </p>
                        </section>

                        {/* 4. Cookies & Tracking Technologies */}
                        <section id="cookies" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">4</span>
                                Cookies & Tracking Technologies
                            </h2>
                            <p className="italic text-gray-600 font-medium">Our website may use cookies and similar technologies to improve functionality and enhance the browsing experience. Cookies help us:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {["Remember preferences", "Understand usage", "Improve performance", "Better experience"].map((v, i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-gray-50 text-center font-bold text-xs uppercase italic border border-gray-100 shadow-sm">{v}</div>
                                ))}
                            </div>
                        </section>

                        {/* 5. Data Security */}
                        <section id="security" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">5</span>
                                Data Security
                            </h2>
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                                <div className="p-6 bg-white rounded-3xl shadow-xl border border-blue-50">
                                    <Lock size={48} className="text-[#0096d6]" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-gray-800 leading-relaxed font-bold italic">
                                        We implement appropriate security measures to protect personal information from unauthorized access, loss, misuse, or disclosure.
                                    </p>
                                    <p className="text-sm text-gray-600 font-medium leading-relaxed italic border-l-2 border-[#0096d6] pl-4">
                                        Secure technologies and industry-standard practices are used to protect sensitive information during transactions.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 6. Your Privacy Rights */}
                        <section id="rights" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">6</span>
                                Your Privacy Rights
                            </h2>
                            <p className="italic text-gray-600 font-medium">Depending on your location, you may have certain rights regarding your personal information, including:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 bg-blue-50/20 rounded-3xl border border-blue-100 italic font-bold text-sm uppercase">
                                <span>• Request access to personal data</span>
                                <span>• Request correction of inaccurate information</span>
                                <span>• Request deletion of information</span>
                                <span>• Opt out of marketing communications</span>
                            </div>
                        </section>

                        {/* Third-Party Links */}
                        <section id="links" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">7</span>
                                Third-Party Links
                            </h2>
                            <p className="italic text-gray-600 font-medium leading-relaxed">
                                Our website may contain links to external websites operated by third parties. We are not responsible for the privacy practices or content of those websites. Users are encouraged to review the privacy policies of external websites before providing personal information.
                            </p>
                        </section>

                        {/* Brand and Manufacturer Information */}
                        <section id="brand" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">8</span>
                                Brand and Manufacturer Information
                            </h2>
                            <p className="italic text-gray-600 font-medium leading-relaxed">
                                Innovation Dynamics Group LLC is a specialized online retailer focused on printers and printing solutions. We are also a member of the HP Amplify Partner Program.
                            </p>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                All trademarks, product names, and logos belong to their respective owners and are used for identification purposes only.
                            </p>
                        </section>

                        {/* Changes to This Privacy Policy */}
                        <section id="changes" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">9</span>
                                Changes to This Privacy Policy
                            </h2>
                            <p className="italic text-gray-600 font-medium leading-relaxed">
                                Innovation Dynamics Group LLC may update this Privacy Policy from time to time to reflect changes in legal requirements or business practices. Updated versions will be posted on this page with the revised date.
                            </p>
                        </section>

                        {/* 10. Contact Us */}
                        <section id="contact" className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden italic">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0096d6] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                             <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 underline decoration-[#0096d6] decoration-4 underline-offset-8">
                                <Mail className="text-[#0096d6]" size={32} />
                                10. Contact Us
                            </h2>
                            <p className="text-gray-400 mb-12 leading-relaxed max-w-2xl">
                                If you have questions about this Privacy Policy or how your information is handled, please contact us:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start">
                                        <div className="p-4 bg-white/10 rounded-2xl border border-white/5 backdrop-blur-sm">
                                            <Mail className="text-[#0096d6]" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#0096d6] font-bold uppercase tracking-widest mb-1">Email us</p>
                                            <p className="text-lg font-bold underline decoration-white/20">support@innovationdynamicsgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="p-4 bg-white/10 rounded-2xl border border-white/5 backdrop-blur-sm">
                                            <Phone className="text-[#0096d6]" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#0096d6] font-bold uppercase tracking-widest mb-1">Call us</p>
                                            <p className="text-lg font-bold">+1 (651) 815-4630</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="p-4 bg-white/10 rounded-2xl border border-white/5 backdrop-blur-sm">
                                        <MapPin className="text-[#0096d6]" size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs text-[#0096d6] font-bold uppercase tracking-widest mb-1">Business Address</p>
                                        <p className="font-bold text-lg leading-relaxed">
                                            Innovation Dynamics Group LLC<br />
                                            11397 Quincy St NE<br />
                                            Blaine, MN 55434<br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
