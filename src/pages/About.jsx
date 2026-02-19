import React from 'react';
import { Target, ShieldCheck, Truck, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white text-black font-sans">
            {/* Hero Section */}
            <div className="relative bg-gray-50 text-black py-24 md:py-32 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920"
                        alt="Office Background"
                        className="w-full h-full object-cover opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/90"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">About Us</h1>
                    <div className="w-24 h-1.5 bg-primary-orange mx-auto mb-8 rounded-full"></div>
                    <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Your trusted partner for <span className="text-primary-orange font-medium">high-quality</span> printing solutions.
                    </p>
                </div>
            </div>

            {/* Who We Are Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold mb-6 relative inline-block">
                                    Who We Are?
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-orange"></span>
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg text-justify">
                                    Innovation Dynamics Group LLC is an independent e-commerce platform specializing in printers, ink, toner, and related printing accessories. We serve individuals, professionals, and businesses by offering a curated selection of printing solutions designed to meet everyday home and office needs.
                                </p>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify border-l-4 border-gray-100 pl-6 italic">
                                We operate as a third-party online retailer and are not affiliated with, endorsed by, or sponsored by any printer manufacturer or brand unless explicitly stated. All product names, logos, and trademarks displayed on our website are the property of their respective owners.
                            </p>
                        </div>

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                                    alt="Modern Office Printer"
                                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-primary-orange p-3 rounded-full">
                                                <Users className="text-white" size={24} />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-lg">Customer Focused</p>
                                                <p className="text-gray-200 text-sm">Dedicated to your printing success</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Commitment Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Transparency */}
                        <div className="bg-white p-8 rounded shadow-sm border-t-2 border-primary-orange hover:shadow-lg transition-shadow">
                            <ShieldCheck size={48} className="text-primary-orange mb-6" />
                            <h3 className="text-xl font-bold mb-4">Transparency & Trust</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We are committed to conducting business transparently, responsibly, and in compliance with applicable consumer protection laws and advertising policies. Our focus is to provide clear product information and reliable order fulfillment.
                            </p>
                        </div>

                        {/* Card 2: Authentic Products */}
                        <div className="bg-white p-8 rounded shadow-sm border-t-2 border-primary-orange hover:shadow-lg transition-shadow">
                            <Target size={48} className="text-primary-orange mb-6" />
                            <h3 className="text-xl font-bold mb-4">Authentic Products</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Products displayed on our website are presented for representation purposes only. All items offered are sourced from trusted and verified dealers or suppliers to ensure authenticity and quality.
                            </p>
                        </div>

                        {/* Card 3: Operational Control */}
                        <div className="bg-white p-8 rounded shadow-sm border-t-2 border-primary-orange hover:shadow-lg transition-shadow">
                            <Truck size={48} className="text-primary-orange mb-6" />
                            <h3 className="text-xl font-bold mb-4">Reliable Fulfillment</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Innovation Dynamics Group LLC maintains full operational control over its website and digital platforms and is responsible for customer service, order processing, and fulfillment as outlined in our published policies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policies/Disclaimers Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

                    <div>
                        <h4 className="text-lg font-bold mb-2 uppercase tracking-wide text-gray-900">Manufacturer Warranties</h4>
                        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                            Manufacturer warranties, where applicable, are provided directly by the respective manufacturers and may vary by product and brand. Innovation Dynamics Group LLC does not provide or alter manufacturer warranties but assists customers with accurate product information to support informed purchasing decisions.
                        </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded border border-orange-100">
                        <h4 className="text-lg font-bold mb-3 text-primary-orange">Important Notice</h4>
                        <p className="text-gray-600 text-sm">
                            Product availability, pricing, specifications, and delivery timelines are subject to change without prior notice. Please verify all current details before completing your purchase. Warranty coverage is provided directly by the manufacturer and may vary by product. Delivery timelines are estimates and may differ based on location, product availability, and selected shipping method.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default About;
