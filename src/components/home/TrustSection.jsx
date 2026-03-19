import React from 'react';
import { Check, ShieldCheck, Activity, Search, Shield, Lock, CreditCard } from 'lucide-react';

const TrustSection = () => {
    return (
        <section className="py-16 sm:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-stretch">

                    {/* ── Section A: FEATURES / BENEFITS ──────────────────── */}
                    <div className="flex flex-col justify-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#024ad8]">Features / Benefits</span>
                                <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tighter uppercase leading-tight">
                                    A Better Way to <br/> Shop for Printers
                                </h2>
                                <div className="w-16 h-1 bg-[#024ad8]"></div>
                                <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
                                    The platform is designed to reduce confusion and provide a more structured shopping experience.
                                </p>
                            </div>

                            <ul className="grid grid-cols-1 gap-3 sm:gap-4">
                                {[
                                    "Easy navigation and category-based browsing",
                                    "Simplified product comparison",
                                    "Clear specifications and product insights",
                                    "Consistent and reliable product listings",
                                    "Fast and secure checkout process"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#024ad8] group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-300">
                                            <Check size={14} />
                                        </div>
                                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-5 border-t border-gray-100 italic text-sm text-gray-400 font-medium">
                                The focus is on delivering a transparent and efficient shopping journey for every customer.
                            </div>
                        </div>
                    </div>

                    {/* ── Section B: TRUST SECTION ───────────────────────── */}
                    <div className="relative">
                        {/* Black Card */}
                        <div className="h-full bg-black p-7 sm:p-10 md:p-14 rounded-sm text-white shadow-2xl relative z-10 overflow-hidden flex flex-col justify-between">
                            {/* Brand Watermark Background */}
                            <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-40">
                                <img src="/logo/hp-partner.png" alt="" className="w-36 sm:w-56" />
                            </div>

                            <div className="space-y-6 sm:space-y-8 relative z-20">
                                <div className="space-y-3">
                                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                                        Built on Trust and <br/> Transparency
                                    </h3>
                                    <div className="w-10 h-1 bg-[#024ad8]"></div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Providing reliable printing solutions requires more than just listing products. It requires consistency, clarity, and a strong focus on customer experience.
                                </p>

                                <div className="bg-[#024ad8]/10 border border-[#024ad8]/20 p-4 sm:p-6 rounded-sm">
                                    <p className="text-xs sm:text-sm leading-relaxed text-blue-200">
                                        As part of the HP Amplify Partner Program, the platform maintains a professional approach to product sourcing and service standards.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Customers can expect:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            { icon: <Search size={15} />, text: "Honest Info" },
                                            { icon: <Activity size={15} />, text: "Clear Policies" },
                                            { icon: <CreditCard size={15} />, text: "Reliable Service" },
                                            { icon: <Lock size={15} />, text: "Secure Shopping" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-sm hover:bg-white/10 transition-colors">
                                                <div className="text-[#024ad8] flex-shrink-0">{item.icon}</div>
                                                <span className="text-xs font-semibold text-gray-300">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-12 pt-6 sm:pt-10 border-t border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <ShieldCheck className="text-[#024ad8]" size={20} />
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Verified Secure</span>
                                </div>
                                <img src="/logo/hp-partner.png" alt="HP Partner" className="h-6 sm:h-8 w-auto" />
                            </div>
                        </div>

                        {/* Background Decorative Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-1/2 bg-[#024ad8]/5 blur-[120px] -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustSection;
