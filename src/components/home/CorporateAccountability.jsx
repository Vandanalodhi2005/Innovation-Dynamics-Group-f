import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, Globe, Award, ArrowRight } from 'lucide-react';

const CorporateAccountability = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    
                    {/* ── Left Side: Pure Studio Product Visual ─────────── */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[340px] aspect-square rounded-full bg-gray-50 flex items-center justify-center p-12 overflow-hidden shadow-inner group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#024ad8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <img 
                                src="/images/corporate_accountability_product.png" 
                                alt="Innovation Dynamics Direct Distribution" 
                                className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-1000 drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* ── Right Side: Clean Modern Narrative ────────────────── */}
                    <div className="space-y-10 group">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter leading-tight">
                                An Independent <br />
                                <span className="text-[#024ad8]">eCommerce Retailer</span>
                            </h2>
                            
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-normal max-w-xl">
                                <p>
                                    Innovation Dynamics Group LLC, based in Blaine, Minnesota, USA, operates as an independent online retailer focused exclusively on printers and related equipment for home, office, and professional use.
                                </p>
                                <p className="text-black font-semibold border-l-4 border-[#024ad8] pl-6 leading-relaxed py-2">
                                    "We are not a marketplace or a multi-seller platform. Every product is sourced through verified distribution and managed directly under our operational responsibility."
                                </p>
                            </div>
                        </div>

                        {/* Simplified Benefit Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                            {[
                                { icon: <Truck size={22} className="text-[#024ad8]" />, title: "USA & Canada Shipping" },
                                { icon: <Shield size={22} className="text-[#024ad8]" />, title: "Manufacturer Warranty" },
                                { icon: <Globe size={22} className="text-[#024ad8]" />, title: "Business & Home Support" },
                                { icon: <Award size={22} className="text-[#024ad8]" />, title: "Verified Distribution" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 transition-transform hover:translate-x-1 duration-300">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Link 
                                to="/about" 
                                className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.3em] text-[#024ad8] hover:translate-x-2 transition-transform duration-300"
                            >
                                Our Operations Integrity <ArrowRight size={16} className="ml-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateAccountability;
