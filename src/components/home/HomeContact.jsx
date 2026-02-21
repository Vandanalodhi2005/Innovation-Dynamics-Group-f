import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const HomeContact = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Info Side */}
                        <div className="p-12 md:p-16 lg:p-20 bg-slate-900 text-white flex flex-col justify-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold tracking-tight">Got Questions?</h2>
                                <p className="text-gray-400 text-lg">
                                    For inquiries about printers or printing supplies, our team in Blaine, Minnesota is here to help.
                                </p>
                                <div className="w-16 h-1.5 bg-primary-orange rounded-full"></div>
                            </div>

                            <div className="mt-12 space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary-orange transition-colors">
                                        <Mail className="text-primary-orange group-hover:text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-xl font-medium">support@innovationdynamicsgroup.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary-orange transition-colors">
                                        <Phone className="text-primary-orange group-hover:text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-xl font-medium">+1 (651) 815-4630</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary-orange transition-colors">
                                        <Clock className="text-primary-orange group-hover:text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Response Time</p>
                                        <p className="text-xl font-medium">Within one business day</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address/Brand Side */}
                        <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center items-center text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
                            <div className="w-24 h-24 bg-orange-100 rounded-3xl flex items-center justify-center mb-8">
                                <MapPin className="text-primary-orange" size={48} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h3>
                            <p className="text-gray-500 font-medium mb-6 uppercase tracking-widest text-sm">Innovation Dynamics Group LLC</p>

                            <div className="text-xl text-gray-700 space-y-1 mb-10">
                                <p>11397 Quincy St NE</p>
                                <p>Blaine, MN 55434</p>
                            </div>

                            <div className="pt-10 border-t border-gray-100 w-full max-w-xs">
                                <p className="text-gray-400 italic font-serif">
                                    "Bringing reliable printing solutions to the heart of Minnesota."
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
