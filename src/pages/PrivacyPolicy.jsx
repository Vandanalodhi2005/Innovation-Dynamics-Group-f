import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Share2, Database, Bell, Mail, Phone, MapPin, Globe, ShieldCheck, HelpCircle, CheckCircle, Info, ShoppingCart, Clock, RotateCcw } from 'lucide-react';
import privacy from '../../public/images/buying1.jpg';

const PrivacyPolicy = () => {
    const sections = [
        { id: 'controller', label: '1. Data Controller', icon: <UserCheck size={15} /> },
        { id: 'collect', label: '2. Information We Collect', icon: <Database size={15} /> },
        { id: 'use', label: '3. How We Use Info', icon: <FileText size={15} /> },
        { id: 'share', label: '4. Information Sharing', icon: <Share2 size={15} /> },
        { id: 'cookies', label: '5. Cookies & Tracking', icon: <Globe size={15} /> },
        { id: 'rights', label: '6. Your Privacy Rights', icon: <ShieldCheck size={15} /> },
        { id: 'optout', label: '7. Opt-Out Options', icon: <Bell size={15} /> },
        { id: 'retention', label: '8. Data Retention', icon: <Clock size={15} /> },
        { id: 'security', label: '9. Data Security', icon: <Lock size={15} /> },
        { id: 'links', label: '10. Third-Party Links', icon: <Globe size={15} /> },
        { id: 'children', label: '11. Children\'s Privacy', icon: <HelpCircle size={15} /> },
        { id: 'changes', label: '12. Policy Updates', icon: <RotateCcw size={15} /> },
        { id: 'contact', label: '13. Contact Us', icon: <Mail size={15} /> }
    ];

    return (
        <div className="bg-white text-black min-h-screen font-sans text-left">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
                <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none text-left">
                    <ShieldCheck size={500} className="absolute -top-20 -left-20" />
                </div>

                <div className="absolute inset-0 z-0">
                    <img
                        src={privacy}
                        alt="Privacy & Data Protection Background"
                        className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-left">
                    <div className="max-w-3xl text-left">
                        <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 text-left">
                            <ShieldCheck size={14} /> Data Sovereignty
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic text-left">
                            Privacy <br/><span className="text-[#024ad8]">Policy</span>
                        </h1>
                        <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
                        <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl text-left">
                            Innovation Dynamics Group LLC is committed to protecting your privacy and ensuring full transparency in how your personal information is managed.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] text-left">
                            <p>Effective: March 25, 2026</p>
                            <p>Updated: March 25, 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 text-left">

                    {/* Sidebar Navigation - Sticky */}
                    <div className="hidden lg:block lg:col-span-1 text-left">
                        <div className="sticky top-28 space-y-6 text-left">
                            <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">Policy Navigation</h3>
                            <nav className="space-y-1 text-left">
                                {sections.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all hover:bg-[#024ad8] hover:text-white text-gray-500 font-semibold text-[13px] group border border-transparent hover:shadow-md text-left"
                                    >
                                        <span className="text-[#024ad8] group-hover:text-white transition-colors text-left text-left">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-20 text-gray-600 text-left">

                        {/* Introduction */}
                        <section className="space-y-4 border-l-4 border-[#024ad8] pl-8 py-4 bg-gray-50/50 rounded-r-sm text-left text-left text-left">
                            <p className="text-base leading-relaxed font-medium italic text-left text-left text-left">
                                Innovation Dynamics Group LLC ("we," "our," or "us") is committed to protecting your privacy in accordance with applicable laws in the United States and Canada, including expectations under Microsoft Advertising and Google Ads policies.
                            </p>
                            <p className="text-xs text-black font-black uppercase tracking-widest text-left">
                                Information Security Framework Enabled
                            </p>
                        </section>

                        {/* 1. Data Controller Information */}
                        <section id="controller" className="space-y-10 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">01</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Data Controller Information</h2>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 space-y-6 text-left">
                                <h3 className="text-xl font-bold text-black italic uppercase">Innovation Dynamics Group LLC</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex items-start gap-4">
                                        <Mail className="text-[#024ad8] shrink-0" size={20} />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Terminal</p>
                                            <p className="text-sm font-bold text-black">support@innovationdynamicsgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="text-[#024ad8] shrink-0" size={20} />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Direct Voice</p>
                                            <p className="text-sm font-bold text-black">+1 (651) 815-4630</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 md:col-span-2">
                                        <MapPin className="text-[#024ad8] shrink-0" size={20} />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Operational HQ</p>
                                            <p className="text-sm font-bold text-black">11397 Quincy St NE, Blaine, MN 55434, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. Information We Collect */}
                        <section id="collect" className="space-y-10 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">02</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Information We Collect</h2>
                            </div>
                            <p className="text-[15px] leading-relaxed font-semibold italic text-left text-left">We collect only the information necessary to operate our eCommerce platform, process orders, and provide customer support.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-xl shadow-gray-50 group hover:border-[#024ad8]/40 transition-all text-left">
                                    <h3 className="font-extrabold text-black mb-8 flex items-center gap-3 text-lg uppercase italic text-left">
                                        <UserCheck className="text-[#024ad8]" size={22} />
                                        Information You Provide
                                    </h3>
                                    <ul className="space-y-4 text-gray-500 text-sm font-semibold italic text-left text-left">
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[#024ad8]" /> Name & Contact Details</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[#024ad8]" /> Billing & Shipping address</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[#024ad8]" /> Order & Transaction history</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[#024ad8]" /> Account credentials</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-[#024ad8]" /> Support communications</li>
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">
                                            Payments are processed via PCI DSS–compliant providers. We do not store full card details.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 group hover:border-[#024ad8]/40 transition-all text-left">
                                    <h3 className="font-extrabold text-black mb-8 flex items-center gap-3 text-lg uppercase italic text-left">
                                        <Database className="text-[#024ad8]" size={22} />
                                        Collected Automatically
                                    </h3>
                                    <ul className="space-y-4 text-gray-500 text-sm font-semibold italic text-left">
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-black" /> IP address & Metrics</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-black" /> Browser type & Version</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-black" /> Device & OS type</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-black" /> Pages & Session activity</li>
                                        <li className="flex items-center gap-3"><CheckCircle size={14} className="text-black" /> Cart & Checkout session data</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. How We Use Information */}
                        <section id="use" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">03</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">How We Use Your Information</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                {[
                                    "Processing & Fulfilling Orders",
                                    "Sending Confirmations & Updates",
                                    "Coordinating Shipping & Logistics",
                                    "Providing Order Assistance",
                                    "Detecting Fraud & Unauthorized Activity",
                                    "Ensuring Site Performance & UX",
                                    "Legal Compliance & Security"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-sm border border-gray-100 shadow-xl shadow-gray-50 text-sm font-bold uppercase text-gray-600 group hover:border-[#024ad8]/40 transition-all text-left italic">
                                        <div className="w-2 h-2 bg-[#024ad8] group-hover:scale-150 transition-transform flex-shrink-0"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. Information Sharing */}
                        <section id="share" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">04</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Information Sharing</h2>
                            </div>
                            <div className="bg-black text-white p-12 rounded-sm border-l-4 border-[#024ad8] shadow-xl relative overflow-hidden text-left">
                                <p className="font-extrabold text-xl leading-relaxed relative z-10 italic uppercase text-left">
                                    Innovation Dynamics Group LLC does not sell or rent your personal data.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                {[
                                    { title: "Service Providers", desc: "Payment processors, logistics, hosting, and support systems." },
                                    { title: "Legal Requirements", desc: "Disclosure required by law enforcement, court orders, or authorities." },
                                    { title: "Business Transfers", desc: "Data may be transferred during mergers/acquisitions with user notice." },
                                    { title: "With Consent", desc: "Sharing only when explicitly authorized by you." }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 border border-gray-100 bg-gray-50 rounded-sm group hover:border-[#024ad8]/40 transition-all">
                                        <h4 className="text-[#024ad8] font-black text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-500 font-semibold italic">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 5. Cookies & Tracking */}
                        <section id="cookies" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">05</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Cookies & Tracking Technologies</h2>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-sm space-y-6">
                                <p className="text-[15px] text-gray-600 font-medium leading-relaxed italic">
                                    We use limited and essential cookies for cart functionality, security, and basic preferences.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-5 bg-white border border-gray-100 rounded-sm italic text-sm text-gray-500 font-semibold">
                                        We do not use behavioral advertising cookies or cross-site tracking.
                                    </div>
                                    <div className="p-5 bg-white border border-gray-100 rounded-sm italic text-sm text-gray-500 font-semibold">
                                        We do not sell or share personal data for advertising purposes.
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-tight italic">
                                    You can manage preferences via our cookie banner or browser settings. Disabling essential cookies may impact site functionality.
                                </p>
                            </div>
                        </section>

                        {/* 6. Your Privacy Rights */}
                        <section id="rights" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">06</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Your Privacy Rights</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                {[
                                    "Access your personal data",
                                    "Request correction of inaccuracies",
                                    "Request deletion of your data",
                                    "Restrict or object to processing",
                                    "Withdraw your consent",
                                    "Request data portability"
                                ].map((right, idx) => (
                                    <div key={idx} className="flex gap-4 items-center p-5 border border-gray-100 bg-gray-50 rounded-sm text-left">
                                        <CheckCircle className="text-[#024ad8]" size={18} />
                                        <p className="text-black font-bold text-xs uppercase italic text-left">{right}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 font-bold italic">Requests are responded to within 30 days via support terminal.</p>
                        </section>

                        {/* 7. Opt-Out Options */}
                        <section id="optout" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">07</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Opt-Out Options</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black uppercase text-black italic">Email Communications</h4>
                                    <p className="text-sm text-gray-500 font-medium italic leading-relaxed">
                                        Opt out of non-essential emails clicking "Unsubscribe" or contacting us. Transactional emails (updates/invoices) will still be sent.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black uppercase text-black italic">Tracking Control</h4>
                                    <p className="text-sm text-gray-500 font-medium italic leading-relaxed">
                                        Disable cookies via browser settings or reject non-essential cookies. Limit tracking through browser/device privacy controls.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 8. Data Retention */}
                        <section id="retention" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">08</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Data Retention</h2>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                                <p className="text-[15px] text-gray-600 leading-relaxed font-semibold italic text-left text-left">
                                    We retain data only as long as necessary to complete transactions, provide support, meet legal obligations, or prevent fraud. Data is securely deleted or anonymized when no longer required.
                                </p>
                            </div>
                        </section>

                        {/* 9. Data Security */}
                        <section id="security" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">09</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Data Security</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {["HTTPS/TLS Encryption", "Secure Firewalls", "Access Controls", "Regular Monitoring", "Audit Protocols", "PCI Compliance"].map((item, idx) => (
                                    <div key={idx} className="p-6 bg-white border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-3">
                                        <Shield className="text-[#024ad8]" size={20} />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 10. Third-Party Links */}
                        <section id="links" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">10</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Third-Party Links</h2>
                            </div>
                            <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-lg text-left">
                                <p className="text-[15px] text-gray-600 leading-relaxed font-semibold italic text-left text-left">
                                    Our terminal may link to external sites. We are not responsible for their privacy practices. Please review external policies independently.
                                </p>
                            </div>
                        </section>

                        {/* 11. Children's Privacy */}
                        <section id="children" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">11</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Children's Privacy</h2>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                                <p className="text-[15px] text-gray-600 leading-relaxed font-semibold italic text-left text-left">
                                    We do not knowingly collect data from children under 13. If such data is identified, it will be removed promptly from our framework.
                                </p>
                            </div>
                        </section>

                        {/* 12. Policy Updates */}
                        <section id="changes" className="space-y-8 text-left">
                            <div className="flex items-center gap-5 text-left text-left text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">12</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Policy Updates</h2>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left text-left">
                                <p className="text-[15px] text-gray-600 leading-relaxed font-semibold italic text-left text-left">
                                    We may update this Privacy Policy periodically. Changes will be posted with a revised "Last Updated" date. Continued use constitutes acceptance.
                                </p>
                            </div>
                        </section>

                        {/* 13. Contact Us */}
                        <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-lg relative overflow-hidden border-t-4 border-[#024ad8] text-left">
                             <div className="absolute top-0 right-0 w-48 h-48 bg-[#024ad8]/5 rounded-full blur-3xl -mr-24 -mt-24 text-left text-left"></div>
                             <h2 className="text-3xl font-bold mb-6 flex items-center gap-5 relative z-10 uppercase italic text-left text-left">
                                <Mail className="text-[#024ad8]" size={36} />
                                Contact Us
                            </h2>
                            <p className="text-gray-400 mb-12 leading-relaxed max-w-2xl text-sm font-semibold italic relative z-10 text-left text-left">
                                If you have questions about this Privacy Policy or how your information is handled, please contact our support terminal.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 text-left text-left">
                                <div className="space-y-10 text-left">
                                    <div className="flex gap-6 items-start group text-left">
                                        <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                                            <Mail className="text-[#024ad8]" size={24} />
                                        </div>
                                        <div className="text-left text-left">
                                            <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Email Intelligence</p>
                                            <p className="text-sm text-white font-medium text-left">support@innovationdynamicsgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start group text-left">
                                        <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                                            <Phone className="text-[#024ad8]" size={24} />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Direct Voice</p>
                                            <p className="text-sm text-white font-bold tracking-tight italic text-left">+1 (651) 815-4630</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group text-left text-left">
                                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                                        <MapPin className="text-[#024ad8]" size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Operational HQ</p>
                                        <p className="text-sm text-white leading-relaxed font-semibold italic text-left text-left">
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

            {/* Footer Notice */}
            <div className="bg-gray-50 py-10 border-t border-gray-100 text-left">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed italic">
                        Innovation Dynamics Group LLC © 2026 • Secure Data Framework Active • Privacy Verified
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;


