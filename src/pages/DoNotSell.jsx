import React from 'react';
import { ShieldX, AlertCircle, Mail, Phone, MapPin, UserCheck, Lock, Info } from 'lucide-react';

const DoNotSell = () => {
    return (
        <div className="bg-white text-black font-sans min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform rotate-12 pointer-events-none">
                    <ShieldX size={500} className="absolute -top-20 -right-20" />
                </div>

                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=1920"
                        alt="Data Protection"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase border border-primary-orange/30">
                            <Lock size={16} /> California Privacy Rights
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white italic">
                            Do Not Sell or Share My Personal Information
                        </h1>
                        <div className="w-24 h-1.5 bg-primary-orange mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-200 font-light leading-relaxed italic">
                            Innovation Dynamics Group LLC does not sell personal information. We respect your choice and provide clear methods to manage your data preferences.
                        </p>
                        <p className="mt-6 text-gray-400 font-medium">Effective Date: February 21, 2026</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left Column: Information & Requests */}
                    <div className="space-y-12">
                        <section className="prose prose-lg text-gray-600">
                            <p className="text-lg leading-relaxed italic border-l-4 border-primary-orange pl-6 py-2">
                                This page provides California residents with the right to opt out of the “sale” or “sharing” of personal information under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
                            </p>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-2">
                                <span className="bg-primary-orange text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">1</span>
                                Your Right to Opt Out
                            </h2>
                            <p className="text-gray-600 font-medium">If you are a California resident, you have the right to request that we:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Do not sell your information",
                                    "Do not share for behavioral ads",
                                    "Limit the use of certain data",
                                    "Clarify how information is used"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <UserCheck className="text-primary-orange" size={20} />
                                        <span className="text-sm font-bold text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-2">
                                <span className="bg-primary-orange text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">2</span>
                                Submit a Request
                            </h2>
                            <div className="space-y-6">
                                <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                                    <div className="flex gap-4 items-start mb-6">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-orange-100">
                                            <Mail className="text-primary-orange" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">Email Submission</h3>
                                            <p className="text-primary-orange font-bold">support@innovationdynamicsgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/50 p-4 rounded-xl text-sm text-gray-600 italic font-medium">
                                        <p className="font-bold underline mb-2">Include:</p>
                                        <p>• Your name</p>
                                        <p>• Your email address</p>
                                        <p>• Statement: “I request to opt out under CCPA.”</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h3 className="font-bold flex items-center gap-3 mb-2 italic">
                                            <Phone className="text-primary-orange" size={20} />
                                            Phone
                                        </h3>
                                        <p className="text-gray-900 font-bold">+1 (651) 815-4630</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <h3 className="font-bold flex items-center gap-3 mb-2 italic">
                                            <MapPin className="text-primary-orange" size={20} />
                                            Mail
                                        </h3>
                                        <p className="text-xs text-gray-600 font-medium">
                                            11397 Quincy St NE,<br />Blaine, MN 55434
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Definitions and Protections */}
                    <div className="space-y-10">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-3 italic underline decoration-primary-orange">
                                <Info className="text-primary-orange" size={24} />
                                What “Sell” or “Share” Means
                            </h2>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                                Under CCPA, “sell” or “share” may include practices we do NOT engage in, such as:
                            </p>
                            <ul className="space-y-4 text-sm font-medium text-gray-400">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-primary-orange rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>Allowing third-party tools to collect browsing data for profit.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-primary-orange rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>Using retargeting or behavioral advertising cookies.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-primary-orange rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>Providing access to data in exchange for analytics services.</span>
                                </li>
                            </ul>
                            <p className="mt-8 p-4 bg-white/5 rounded-xl text-xs text-primary-orange font-bold uppercase tracking-wider text-center border border-white/10">
                                We do not use your information in these ways.
                            </p>
                        </div>

                        <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 space-y-6">
                            <h3 className="font-bold text-gray-900 flex items-center gap-3 italic">
                                <UserCheck className="text-primary-orange" size={20} />
                                Authorized Agents
                            </h3>
                            <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                You may appoint an authorized agent to submit a request on your behalf. They must provide written permission from you and proper verification to protect your privacy.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 italic">What Happens After You Opt Out</h3>
                            <div className="space-y-4 text-sm text-gray-600 font-medium italic">
                                <p>• We stop any data practices classified as selling/sharing.</p>
                                <p>• We confirm your request within the required timeframe.</p>
                                <p>• Your preference remains in effect unless requested otherwise.</p>
                                <p className="pt-4 text-gray-900 font-bold not-italic font-sans">
                                    Opting out does not affect your ability to make purchases or use our website.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex gap-4">
                            <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Minors Under 16</h4>
                                <p className="text-sm text-gray-600 italic font-medium">
                                    We do not knowingly collect or share personal information of minors. Contact us immediately if you believe such data has been collected.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="py-16 text-center border-t border-gray-100 bg-gray-50/30">
                <div className="max-w-3xl mx-auto px-4">
                    <h3 className="text-2xl font-bold mb-4 italic">Commitment to Privacy</h3>
                    <p className="text-gray-600 italic text-lg leading-relaxed font-medium">
                        At Innovation Dynamics Group LLC, your privacy is not just a policy—it's a promise. We value your trust and strive to be transparent in every way we handle your data.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DoNotSell;
