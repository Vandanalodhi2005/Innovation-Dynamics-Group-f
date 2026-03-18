import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Share2, Database, Bell, Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';
import privacy from '../../public/images/buying1.jpg';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white text-black min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
                <div className="absolute inset-0 z-0">
                    <img
                        src={privacy}
                        alt="Security Background"
                        className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10">
                            <ShieldCheck size={14} /> Data Protection
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight">
                            Privacy <br/><span className="text-[#024ad8]">Policy</span>
                        </h1>
                        <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
                        <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
                            Innovation Dynamics Group LLC respects your privacy and is committed to protecting the personal information you share.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em]">
                            <p>Effective Date: March 17, 2026</p>
                            <p>Last Updated: March 17, 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

                    {/* Sidebar Navigation - Sticky */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8">Policy Sections</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'collect', label: '1. Information We Collect', icon: <Database size={15} /> },
                                    { id: 'use', label: '2. How We Use Info', icon: <FileText size={15} /> },
                                    { id: 'share', label: '3. Information Sharing', icon: <Share2 size={15} /> },
                                    { id: 'cookies', label: '4. Cookies & Tracking', icon: <Globe size={15} /> },
                                    { id: 'security', label: '5. Data Security', icon: <Lock size={15} /> },
                                    { id: 'rights', label: '6. Your Rights', icon: <UserCheck size={15} /> },
                                    { id: 'links', label: '7. Third-Party Links', icon: <Globe size={15} /> },
                                    { id: 'brand', label: '8. Brand Info', icon: <Shield size={15} /> },
                                    { id: 'changes', label: '9. Future Changes', icon: <Bell size={15} /> },
                                    { id: 'contact', label: '10. Contact Us', icon: <Mail size={15} /> }
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all hover:bg-[#024ad8] hover:text-white text-gray-500 font-semibold text-[13px] group border border-transparent hover:shadow-md"
                                    >
                                        <span className="text-[#024ad8] group-hover:text-white transition-colors">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-20 text-gray-600">

                        {/* Introduction */}
                        <section className="space-y-4 border-l-4 border-[#024ad8] pl-8 py-4 bg-gray-50/50 rounded-r-sm">
                            <p className="text-base leading-relaxed font-medium">
                                Innovation Dynamics Group LLC ("Company", "we", "our", or "us") respects your privacy and is committed to protecting the personal information you share when visiting our website or purchasing products from our online store.
                            </p>
                            <p className="text-base leading-relaxed font-medium">
                                This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website and services.
                            </p>
                        </section>

                        {/* 1. Information We Collect */}
                        <section id="collect" className="space-y-8">
                            <div className="flex items-center gap-5">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">01</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight">Information We Collect</h2>
                            </div>
                            <p className="text-sm text-gray-400 font-medium">We collect the following types of information to provide and improve our services.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-md group hover:border-[#024ad8]/40 transition-all hover:-translate-y-0.5">
                                    <h3 className="font-bold text-black mb-6 flex items-center gap-3 text-lg">
                                        <UserCheck className="text-[#024ad8]" size={24} />
                                        Personal Data
                                    </h3>
                                    <ul className="space-y-3 text-gray-500 text-sm font-medium">
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Full Name</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Email Address</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Phone Number</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Billing & Shipping Address</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Order History</li>
                                    </ul>
                                    <div className="mt-6 pt-4 border-t border-gray-100">
                                        <p className="text-xs text-gray-400 font-medium italic">
                                            Payment information is handled by secure third-party processors.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 group hover:border-[#024ad8]/40 transition-all">
                                    <h3 className="font-bold text-black mb-6 flex items-center gap-3 text-lg">
                                        <Database className="text-[#024ad8]" size={24} />
                                        System Data
                                    </h3>
                                    <ul className="space-y-3 text-gray-500 text-sm font-medium">
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> IP Address</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Browser Type</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Device Info</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Pages Visited</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Time on Site</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 2. How We Use Information */}
                        <section id="use" className="space-y-8">
                            <div className="flex items-center gap-5">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">02</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight">How We Use Your Information</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Processing and fulfilling orders",
                                    "Sending order confirmations",
                                    "Customer service and support",
                                    "Improving website functionality",
                                    "Preventing fraudulent activity",
                                    "Maintaining website security",
                                    "Legal compliance"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-sm border border-gray-100 shadow-sm text-sm font-medium text-gray-600 group hover:border-[#024ad8]/40 transition-colors">
                                        <div className="w-2.5 h-2.5 bg-[#024ad8] group-hover:scale-125 transition-transform flex-shrink-0"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 3. Sharing of Information */}
                        <section id="share" className="space-y-8">
                            <div className="flex items-center gap-5">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">03</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight">Information Sharing</h2>
                            </div>
                            <div className="bg-black text-white p-10 rounded-sm border-l-4 border-[#024ad8] shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#024ad8]/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                <p className="font-bold text-xl leading-relaxed relative z-10">
                                    Innovation Dynamics Group LLC does not sell, trade, or rent personal information to third parties.
                                </p>
                            </div>
                            <p className="text-[15px] text-gray-600 font-medium leading-relaxed">
                                We may share limited information with trusted service providers who help us operate the business:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Payment processing providers",
                                    "Shipping and delivery partners",
                                    "Website hosting providers",
                                    "Security and fraud prevention services"
                                ].map((service, idx) => (
                                    <div key={idx} className="flex gap-4 items-center p-5 border border-gray-100 bg-gray-50 rounded-sm group hover:border-[#024ad8]/40 transition-all">
                                        <ShieldCheck className="text-[#024ad8] group-hover:scale-110 transition-transform flex-shrink-0" size={22} />
                                        <p className="text-black font-semibold text-sm">{service}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. Cookies */}
                        <section id="cookies" className="space-y-8">
                            <div className="flex items-center gap-5">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">04</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight">Cookies & Tracking</h2>
                            </div>
                            <p className="text-[15px] text-gray-600 font-medium leading-relaxed">
                                We use cookies and similar tracking technologies to enhance your browsing experience:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {["Preferences", "Usage Analytics", "Performance", "User Experience"].map((v, i) => (
                                    <div key={i} className="p-6 rounded-sm bg-white border border-gray-100 text-center font-semibold text-sm text-gray-500 shadow-sm group hover:border-[#024ad8]/40 hover:text-[#024ad8] transition-all">{v}</div>
                                ))}
                            </div>
                        </section>

                        {/* 5. Data Security */}
                        <section id="security" className="space-y-8">
                            <div className="flex items-center gap-5">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">05</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight">Data Security</h2>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 space-y-4">
                                <div className="flex items-start gap-4">
                                    <Lock className="text-[#024ad8] flex-shrink-0 mt-1" size={22} />
                                    <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                                        We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 6. Your Rights */}
                        <section id="rights" className="space-y-8">
                            <div className="flex items-center gap-5">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">06</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight">Your Rights</h2>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 space-y-4">
                                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                                    Depending on your location, you may have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time by contacting us.
                                </p>
                            </div>
                        </section>

                        {/* 7. Third-Party Links */}
                        <section id="links" className="space-y-8">
                            <div className="flex items-center gap-5">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">07</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight">Third-Party Links</h2>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                                    Our website may contain links to external sites. We are not responsible for the privacy practices or content of third-party websites. We encourage you to review their individual privacy policies.
                                </p>
                            </div>
                        </section>

                        {/* 8. Brand Info */}
                        <section id="brand" className="space-y-8">
                            <div className="flex items-center gap-5">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">08</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight">Brand Information</h2>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                                    All brand names, logos, and trademarks mentioned on this website are the property of their respective owners. Innovation Dynamics Group LLC is an authorized reseller and is not directly affiliated with the manufacturers unless otherwise stated.
                                </p>
                            </div>
                        </section>

                        {/* 9. Future Changes */}
                        <section id="changes" className="space-y-8">
                            <div className="flex items-center gap-5">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">09</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight">Policy Updates</h2>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                                    We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of the website after changes constitutes acceptance of the revised policy.
                                </p>
                            </div>
                        </section>

                        {/* 10. Contact Us */}
                        <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-lg relative overflow-hidden border-t-4 border-[#024ad8]">
                             <div className="absolute top-0 right-0 w-48 h-48 bg-[#024ad8]/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
                             <h2 className="text-3xl font-bold mb-4 flex items-center gap-5 relative z-10">
                                <Mail className="text-[#024ad8]" size={36} />
                                Contact Us
                            </h2>
                            <p className="text-gray-400 mb-10 leading-relaxed max-w-2xl text-sm font-medium relative z-10">
                                If you have questions about this Privacy Policy or how your information is handled, please contact us.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                                <div className="space-y-8">
                                    <div className="flex gap-5 items-start group">
                                        <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all">
                                            <Mail className="text-[#024ad8]" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Email</p>
                                            <p className="text-sm text-white">support@innovationdynamicsgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-start group">
                                        <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all">
                                            <Phone className="text-[#024ad8]" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Phone</p>
                                            <p className="text-sm text-white">+1 (651) 815-4630</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start group">
                                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all">
                                        <MapPin className="text-[#024ad8]" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Headquarters</p>
                                        <p className="text-sm text-white">
                                            Innovation Dynamics Group LLC<br />
                                            11397 Quincy St NE<br />
                                            Blaine, MN 55434
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
