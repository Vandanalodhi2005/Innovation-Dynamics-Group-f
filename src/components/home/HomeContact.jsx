import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const HomeContact = () => {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-sm shadow-2xl shadow-gray-100 overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Info Side */}
                        <div className="p-12 md:p-16 lg:p-24 bg-black text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#024ad8]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="relative z-10 space-y-8 mb-16">
                                <h2 className="text-5xl font-extrabold tracking-tight uppercase leading-tight">Professional <span className="text-[#024ad8]">Support</span> Gateway</h2>
                                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.15em] max-w-md leading-relaxed">
                                    Strategic printer solutions managed from our administrative center in Blaine, Minnesota.
                                </p>
                                <div className="w-20 h-1.5 bg-[#024ad8] rounded-sm"></div>
                            </div>

                            <div className="relative z-10 space-y-10">
                                <div className="flex items-center gap-8 group">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center group-hover:bg-[#024ad8] transition-all group-hover:border-[#024ad8] shadow-lg">
                                        <Mail size={22} className="text-[#024ad8] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em] mb-1.5">Communications</p>
                                        <p className="text-base font-bold uppercase tracking-wider text-[#024ad8]">support@innovationdynamicsgroup.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8 group">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center group-hover:bg-[#024ad8] transition-all group-hover:border-[#024ad8] shadow-lg">
                                        <Phone size={22} className="text-[#024ad8] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em] mb-1.5">Direct Line</p>
                                        <p className="text-base font-bold uppercase tracking-wider">+1 (651) 815-4630</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8 group">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center group-hover:bg-[#024ad8] transition-all group-hover:border-[#024ad8] shadow-lg">
                                        <Clock size={22} className="text-[#024ad8] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em] mb-1.5">Operational Window</p>
                                        <p className="text-base font-bold uppercase tracking-wider text-gray-300">Mon-Fri / 09:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address Side */}
                        <div className="p-12 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center bg-white relative">
                            <div className="w-24 h-24 bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center mb-10 shadow-xl group hover:border-[#024ad8] transition-all">
                                <MapPin className="text-[#024ad8]" size={40} />
                            </div>

                            <h3 className="text-2xl font-extrabold text-black mb-4 uppercase tracking-tight">Strategic Hub</h3>
                            <p className="text-[10px] font-bold text-gray-400 mb-10 uppercase tracking-[0.15em]">Innovation Dynamics Group LLC</p>

                            <div className="text-xl font-extrabold text-black space-y-1 mb-12 uppercase tracking-tight">
                                <p>11397 Quincy St NE</p>
                                <p className="text-[#024ad8]">Blaine, MN 55434</p>
                            </div>

                            <div className="pt-12 border-t border-gray-100 w-full max-w-sm">
                                <p className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.1em] leading-relaxed italic">
                                    "Bringing High-Performance Printing Solutions to North America's Professional Sector."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
