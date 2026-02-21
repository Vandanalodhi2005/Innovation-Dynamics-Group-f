import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Share2, Database, Bell, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white text-black font-sans min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none">
                    <Shield size={500} className="absolute -top-20 -left-20" />
                </div>

                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
                        alt="Security Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center md:text-left">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase border border-primary-orange/30">
                            <Lock size={16} /> Privacy & Security
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white italic">Privacy Policy</h1>
                        <div className="w-24 h-1.5 bg-primary-orange mb-8 rounded-full mx-auto md:mx-0"></div>
                        <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                            Protecting your information is a top priority at Innovation Dynamics Group LLC. We are committed to transparency in how we handle your personal data.
                        </p>
                        <p className="mt-6 text-gray-400 font-medium">Effective Date: February 21, 2026</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Sidebar Navigation - Sticky */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 space-y-4">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Contents</h3>
                            <nav className="space-y-2">
                                {[
                                    { id: 'collect', label: '1. Information We Collect', icon: <Database size={18} /> },
                                    { id: 'use', label: '2. How We Use Information', icon: <FileText size={18} /> },
                                    { id: 'gdpr', label: '3. Legal Basis (GDPR)', icon: <UserCheck size={18} /> },
                                    { id: 'share', label: '4. Sharing Information', icon: <Share2 size={18} /> },
                                    { id: 'security', label: '5. Data Security', icon: <Lock size={18} /> },
                                    { id: 'retention', label: '6. Data Retention', icon: <Clock size={18} /> },
                                    { id: 'rights', label: '7. Your Rights', icon: <UserCheck size={18} /> },
                                    { id: 'contact', label: '11. Contact Us', icon: <Mail size={18} /> }
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-orange-50 hover:text-primary-orange text-gray-600 font-medium group"
                                    >
                                        <span className="text-gray-400 group-hover:text-primary-orange transition-colors">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Introduction */}
                        <section>
                            <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-primary-orange pl-6 py-2">
                                This Privacy Policy explains how Innovation Dynamics Group LLC (“we,” “our,” or “us”) collects, uses, and safeguards personal information from customers and visitors who access our website and purchase our printers, Ink & Toner, and printing accessories. By using our website, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </section>

                        {/* 1. Information We Collect */}
                        <section id="collect" className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4">
                                <span className="bg-primary-orange text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic">1</span>
                                Information We Collect
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We collect information to process orders, improve user experience, and operate our store efficiently.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 italic">
                                        <UserCheck className="text-primary-orange" size={20} />
                                        1.1 Information You Provide
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm font-medium">
                                        <li>• Name</li>
                                        <li>• Email address</li>
                                        <li>• Phone number</li>
                                        <li>• Billing and shipping address</li>
                                        <li>• Order details</li>
                                        <li>• Messages submitted through forms</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 italic">
                                        <Database className="text-primary-orange" size={20} />
                                        1.2 Automatically Collected Information
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm font-medium">
                                        <li>• IP address</li>
                                        <li>• Browser type and version</li>
                                        <li>• Device information</li>
                                        <li>• Visit duration and page interactions</li>
                                        <li>• General, non-precise location</li>
                                        <li>• Referring URLs</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 italic">
                                    <Eye className="text-primary-orange" size={20} />
                                    1.3 Cookies & Tracking Technologies
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 lowercase italic font-medium">WE USE COOKIES TO:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                                        <span>Maintain website functionality</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                                        <span>Remember your preferences</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                                        <span>Improve shopping performance</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                                        <span>Understand general site usage</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-xs text-gray-400 italic">You can control cookies directly through your browser settings.</p>
                            </div>
                        </section>

                        {/* 2. How We Use */}
                        <section id="use" className="space-y-8 pt-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4">
                                <span className="bg-primary-orange text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic">2</span>
                                How We Use Your Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We use personal information only for legitimate business purposes, including:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 font-medium">
                                {[
                                    "Processing and fulfilling orders",
                                    "Sending order confirmations and updates",
                                    "Responding to customer inquiries",
                                    "Improving website performance",
                                    "Enhancing browsing and shopping experience",
                                    "Fraud prevention and security purposes",
                                    "Compliance with legal obligations"
                                ].map((step, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-orange-100/50 rounded-xl border border-orange-200 flex gap-4">
                                <Lock className="text-primary-orange flex-shrink-0" size={20} />
                                <p className="text-sm text-gray-700 font-bold italic leading-relaxed">
                                    We do not use personal data for any technical-support, troubleshooting, or device-related service purposes.
                                </p>
                            </div>
                        </section>

                        {/* 3 & 4 Combined for brevity in view but distinct sections */}
                        <div className="space-y-16">
                            <section id="gdpr" className="space-y-4">
                                <h2 className="text-2xl font-bold italic">3. Legal Basis for Processing (GDPR)</h2>
                                <p className="text-gray-600 leading-relaxed underline decoration-primary-orange/30 decoration-2 underline-offset-4">
                                    For customers located in the European Union or regions following GDPR principles, we process data under:
                                </p>
                                <ul className="space-y-3 text-gray-600 font-medium">
                                    <li><span className="text-gray-900 font-bold">Contractual necessity:</span> Fulfilling and delivering your order</li>
                                    <li><span className="text-gray-900 font-bold">Legitimate interests:</span> Improving our website and shopping experience</li>
                                    <li><span className="text-gray-900 font-bold">Legal compliance:</span> Maintaining transaction records</li>
                                    <li><span className="text-gray-900 font-bold">Consent:</span> When optional features require approval</li>
                                </ul>
                            </section>

                            <section id="share" className="space-y-4">
                                <h2 className="text-2xl font-bold italic">4. How We Share Your Information</h2>
                                <p className="text-gray-600 mb-6 italic">We do not sell or share personal information with third parties for marketing.</p>
                                <div className="space-y-6">
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h4 className="font-bold mb-3 flex items-center gap-2">
                                            <Share2 size={18} className="text-primary-orange" />
                                            4.1 Service Providers
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-4 font-medium">Companies that help us operate our online store, such as Payment processors, Shipping carriers, Fraud-prevention tools, and Website hosting platforms. They receive only the information necessary to perform their services.</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h4 className="font-bold mb-3 flex items-center gap-2">
                                            <FileText size={18} className="text-primary-orange" />
                                            4.2 Legal Requirements
                                        </h4>
                                        <p className="text-sm text-gray-600 font-medium">We may disclose information if required to comply with law enforcement requests, regulatory obligations, fraud prevention, or legal proceedings.</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* 5, 6, 7, 8 */}
                        <div className="space-y-12">
                            <section id="security">
                                <h2 className="text-2xl font-bold mb-4 italic">5. Data Security</h2>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    We use standard security measures to protect personal information during transmission and storage. While no online platform is completely risk-free, we maintain appropriate safeguards to protect your data.
                                </p>
                            </section>

                            <section id="retention">
                                <h2 className="text-2xl font-bold mb-4 italic">6. Data Retention</h2>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    We retain personal information only as long as required for fulfilling your orders, legal and tax recordkeeping, and business operations. After retention periods end, information is securely deleted.
                                </p>
                            </section>

                            <section id="rights">
                                <h2 className="text-2xl font-bold mb-4 italic">7. Your Rights</h2>
                                <p className="text-gray-600 mb-4 font-bold lowercase">DEPENDING ON YOUR REGION, YOU MAY HAVE RIGHTS SUCH AS:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 font-medium italic">
                                    <span>• Access to your personal information</span>
                                    <span>• Correction of inaccurate data</span>
                                    <span>• Deletion of data, where applicable</span>
                                    <span>• Opt-out of certain data uses</span>
                                    <span>• Requesting a copy of stored information</span>
                                    <span>• Restricting or objecting to processing</span>
                                </div>
                            </section>

                            <section id="ccpa" className="p-8 bg-black text-white rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <h2 className="text-xl font-bold mb-4 italic underline decoration-primary-orange decoration-4 underline-offset-8">8. “Do Not Sell or Share My Personal Information” (CCPA/CPRA)</h2>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    We do not sell, trade, or share customer personal data with third parties for advertising or marketing.
                                </p>
                                <p className="text-sm font-medium italic text-primary-orange">
                                    California residents may request additional details or opt-out confirmations using our contact information below.
                                </p>
                            </section>

                            <section id="children">
                                <h2 className="text-2xl font-bold mb-4 italic">9. Children’s Privacy</h2>
                                <p className="text-gray-600 font-medium italic">
                                    Our website is intended for adults and general consumers. We do not knowingly collect information from children under 13.
                                </p>
                            </section>
                        </div>

                        {/* 11. Contact Us */}
                        <section id="contact" className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 italic underline decoration-primary-orange decoration-2">
                                <Mail className="text-primary-orange" size={32} />
                                11. Contact Us
                            </h2>
                            <p className="text-gray-600 mb-10 leading-relaxed">
                                For privacy-related questions or data requests, contact us through any of the following channels:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                            <Mail className="text-primary-orange" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email</p>
                                            <p className="font-bold text-gray-900">support@innovationdynamicsgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                            <Phone className="text-primary-orange" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Phone</p>
                                            <p className="font-bold text-gray-900">+1 (651) 815-4630</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                        <MapPin className="text-primary-orange" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Address</p>
                                        <p className="font-bold text-gray-900 leading-relaxed">
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

            {/* Bottom Footer Slogan */}
            <div className="py-20 bg-gray-50 border-t border-gray-100 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <Shield className="mx-auto mb-6 text-primary-orange opacity-20" size={64} />
                    <h2 className="text-3xl font-bold mb-4 italic">Commitment to Integrity</h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto italic font-medium">
                        At Innovation Dynamics Group LLC, we value your trust and are dedicated to protecting your privacy while providing you with the best printing experience possible.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Simple Clock for the content
const Clock = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
);

export default PrivacyPolicy;
