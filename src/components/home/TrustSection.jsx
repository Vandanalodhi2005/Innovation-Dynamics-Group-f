import React from 'react';
import { CheckCircle2, ShieldCheck, Search, Lock, MessageCircle } from 'lucide-react';

const TrustSection = () => {
    const confidenceItems = [
        { icon: <ShieldCheck size={20} className="text-primary-orange" />, text: "Independent printing retailer" },
        { icon: <Search size={20} className="text-primary-orange" />, text: "Transparent product listings" },
        { icon: <CheckCircle2 size={20} className="text-primary-orange" />, text: "Accurate and easy-to-read descriptions" },
        { icon: <Lock size={20} className="text-primary-orange" />, text: "Secure shopping environment" },
        { icon: <MessageCircle size={20} className="text-primary-orange" />, text: "Clear communication for order-related inquiries" }
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Commitment Section */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Our Commitment to <span className="text-primary-orange">Honesty & Independence</span>
                            </h2>
                            <div className="w-16 h-1.5 bg-primary-orange rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Innovation Dynamics Group LLC operates independently and is not affiliated with HP, Canon, Epson, Brother, or any other manufacturer.
                            </p>
                            <p className="text-sm">
                                All trademarks, names, and product images belong to their rightful owners and are used only for identification.
                            </p>
                            <p className="bg-orange-50 p-6 rounded-xl border-l-4 border-primary-orange font-medium italic">
                                "We strive to provide accurate product descriptions, clear features, and up-to-date information. Your printing needs, made simple."
                            </p>
                        </div>
                    </div>

                    {/* Confidence Section */}
                    <div className="bg-slate-900 p-8 md:p-12 rounded-[2rem] text-white shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <h3 className="text-2xl font-bold mb-8">Customer Confidence</h3>
                        <p className="text-gray-400 mb-10">Shop Printing Essentials With Peace of Mind</p>

                        <ul className="space-y-6">
                            {confidenceItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 group">
                                    <span className="mt-1 transition-transform group-hover:scale-110">{item.icon}</span>
                                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-primary-orange" size={24} />
                            </div>
                            <p className="text-sm font-bold tracking-widest uppercase text-gray-400">
                                Trusted Selection
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
