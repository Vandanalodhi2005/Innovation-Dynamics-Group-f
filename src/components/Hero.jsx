import React from 'react';
import { ArrowRight, Printer, Briefcase, Zap, Palette, Droplet, Activity, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {


    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section: Clean & Authoritative Restoration */}
            <div className="relative overflow-hidden bg-[#F8F9FA] border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        
                        {/* ── Left Content: Refined Typography ────────────────── */}
                        <div className="space-y-8 max-w-2xl">
                            <div className="space-y-6">
                                <div className="inline-block">
                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#024ad8] border-b-2 border-[#024ad8] pb-1">
                                        Home & Office Printers
                                    </span>
                                </div>
                                
                                <div className="space-y-4">
                                    
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black tracking-tight">
                                        Professional Printing Hardware <br className="hidden md:block" />
                                        <span className="text-gray-400">for the Modern Workplace.</span>
                                    </h2>
                                </div>
                                
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-xl">
                                    Experience high-end precision engineered for elite durability and professional output mastery.
                                </p>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                                <Link 
                                    to="/shop" 
                                    className="w-full sm:w-auto px-10 py-5 bg-[#024ad8] text-white text-sm font-bold rounded-sm hover:bg-[#0133a1] transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-[#024ad8]/10"
                                >
                                    SHOP NOW
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                </Link>
                                
                                <div className="flex items-center gap-6">
                                    <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
                                    <a href="https://locator.hp.com/us/en" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                                        <img src="/logo/hp-partner.png" alt="HP Partner" className="h-14 lg:h-16 w-auto object-contain" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ── Right Content: Original Product Visual ────────────────── */}
                        <div className="relative">
                            <div className="relative z-10 bg-white p-6 md:p-12 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden group">
                                <div className="relative aspect-[4/3] overflow-hidden bg-[#FDFDFD]">
                                    <img
                                        src="/hero/hero-right.png"
                                        alt="Modern Printing Solutions"
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                                
                                {/* Floating Specs Label */}
                                <div className="absolute -bottom-2 -right-2 z-20 bg-white p-4 md:p-6 shadow-2xl border border-gray-100 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gray-50 text-black border border-gray-200">
                                            <Activity size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.1em] mb-0.5">Specifications</p>
                                            <p className="text-sm font-bold text-black uppercase tracking-tight">Precision Output</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Background Accents */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#024ad8]/5 rounded-full blur-[120px] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
