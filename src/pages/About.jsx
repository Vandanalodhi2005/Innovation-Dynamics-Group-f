import React from 'react';
import { Target, ShieldCheck, Printer, Users, ArrowRight, CheckCircle, Sparkles, Award, Eye, Lock, Zap } from 'lucide-react';
const About = () => {
    return (
        <div className="bg-white text-black">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-32 md:py-44 overflow-hidden border-b-4 border-[#024ad8]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/about/hero.jpg"
                        alt="About Us Background"
                        className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 mb-8">
                            <Users size={14} /> About Us
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight">
                            A Focused Approach <br/><span className="text-[#024ad8]">to Printing</span>
                        </h1>
                        <div className="w-16 h-1.5 bg-[#024ad8] mb-8"></div>
                        <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed max-w-xl">
                            Built specifically for printers and printing solutions — delivering clarity, reliability, and a streamlined shopping experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* About Section - Main Content */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Image Side */}
                        <div className="relative group">
                            <div className="rounded-sm overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/about/whoWeAre.jpg"
                                    alt="Our Approach"
                                    className="w-full h-[520px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-[#024ad8] text-white p-6 rounded-sm shadow-xl">
                                <Printer size={28} />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 text-[#024ad8] text-xs font-semibold uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-sm border border-blue-100">
                                <Target size={14} /> Our Focus
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight">
                                A Focused Approach to <br/>Printer Shopping
                            </h2>
                            <div className="space-y-5 text-gray-600 text-[15px] leading-relaxed font-medium">
                                <p>
                                    This platform is built specifically for printers and printing solutions, offering a streamlined experience for customers who want clarity and reliability when choosing a product.
                                </p>
                                <p>
                                    As a member of the <strong className="text-black">HP Amplify Partner Program</strong>, the store provides access to trusted printing products while maintaining professional standards in product selection and service.
                                </p>
                                <p>
                                    Instead of offering a wide mix of unrelated items, the focus remains entirely on printing technology. This allows for better organization, accurate product information, and a more efficient shopping experience.
                                </p>
                            </div>
                            <div className="flex items-center gap-6 pt-4">
                                <a href="/shop" className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#024ad8] text-white font-bold rounded-sm hover:bg-[#0133a1] transition-all text-sm tracking-wide shadow-lg hover:-translate-y-0.5">
                                    Shop Now <ArrowRight size={18} />
                                </a>
                                <a href="/contact" className="inline-flex items-center gap-3 px-8 py-3.5 border-2 border-black text-black font-bold rounded-sm hover:bg-black hover:text-white transition-all text-sm tracking-wide hover:-translate-y-0.5">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HP Partner Banner */}
            <section className="bg-[#F8F9FA] border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="flex-shrink-0">
                            <img src="/hero/hero-right.png" alt="HP Partner" className="h-24 md:h-32 w-auto object-contain" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-black mb-3">HP Amplify Partner Program</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-2xl">
                                As a certified member of the HP Amplify Partner Program, we maintain professional standards in product sourcing and service quality. This partnership ensures our customers receive genuine, reliable HP products backed by manufacturer support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-3 text-[#024ad8] text-xs font-semibold uppercase tracking-wider mb-6">
                            <Sparkles size={14} /> Why Choose Us
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
                            Designed for Simplicity, Built for Reliability
                        </h2>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            Choosing the right printer should not be complicated. Every part of the platform is designed to make the process clear, efficient, and dependable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: <Printer size={24} />,
                                title: "Specialized Product Focus",
                                text: "A dedicated focus on printers ensures better organization and more relevant product selection."
                            },
                            {
                                icon: <Eye size={24} />,
                                title: "Clear and Accurate Information",
                                text: "Product listings are structured to help customers understand features, specifications, and usability."
                            },
                            {
                                icon: <ShieldCheck size={24} />,
                                title: "Trusted Product Selection",
                                text: "Only reliable and widely recognized printer models are featured."
                            },
                            {
                                icon: <Lock size={24} />,
                                title: "Secure Checkout Process",
                                text: "A smooth and secure purchasing experience from start to finish."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-6 p-8 bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#024ad8]/30 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-sm bg-[#F8F9FA] border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#024ad8] group-hover:text-white group-hover:border-[#024ad8] transition-all duration-300 text-[#024ad8]">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black mb-2 group-hover:text-[#024ad8] transition-colors">{item.title}</h4>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features / Benefits */}
            <section className="py-20 md:py-28 bg-[#F8F9FA] border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 text-[#024ad8] text-xs font-semibold uppercase tracking-wider bg-white px-4 py-2 rounded-sm border border-gray-200">
                                <Zap size={14} /> Features
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight">
                                A Better Way to <br/>Shop for Printers
                            </h2>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                The platform is designed to reduce confusion and provide a more structured shopping experience.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Easy navigation and category-based browsing",
                                    "Simplified product comparison",
                                    "Clear specifications and product insights",
                                    "Consistent and reliable product listings",
                                    "Fast and secure checkout process"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-sm font-medium text-gray-600">
                                        <CheckCircle className="text-[#024ad8] flex-shrink-0" size={18} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed pt-2">
                                The focus is on delivering a transparent and efficient shopping journey for every customer.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="rounded-sm overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/about/WhatWeOffer.jpg"
                                    alt="What We Offer"
                                    className="w-full h-[480px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="relative group order-2 lg:order-1">
                            <div className="rounded-sm overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/about/whoWeAre.jpg"
                                    alt="Trust and Transparency"
                                    className="w-full h-[480px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-3 text-[#024ad8] text-xs font-semibold uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-sm border border-blue-100">
                                <Award size={14} /> Trust
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight">
                                Built on Trust and <br/>Transparency
                            </h2>
                            <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                Providing reliable printing solutions requires more than just listing products. It requires consistency, clarity, and a strong focus on customer experience.
                            </p>
                            <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                As part of the HP Amplify Partner Program, the platform maintains a professional approach to product sourcing and service standards.
                            </p>
                            <div className="space-y-4 pt-2">
                                <p className="text-sm font-semibold text-black">Customers can expect:</p>
                                {[
                                    "Honest and accurate product information",
                                    "Clear policies and straightforward processes",
                                    "Reliable service and support",
                                    "A secure and trustworthy shopping environment"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-sm font-medium text-gray-600">
                                        <CheckCircle className="text-[#024ad8] flex-shrink-0" size={18} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-28 md:py-36 bg-black text-white relative overflow-hidden border-t-4 border-[#024ad8]">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#024ad8]/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Printer className="text-[#024ad8] mx-auto mb-8" size={48} />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Ready to Find Your Printer?
                    </h2>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Explore a curated selection of trusted printers designed for home, office, and business use. Start shopping with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/shop" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#024ad8] text-white font-bold rounded-sm hover:bg-[#0133a1] transition-all text-sm tracking-wide shadow-xl shadow-[#024ad8]/20 hover:-translate-y-0.5">
                            Browse Products <ArrowRight size={18} />
                        </a>
                        <a href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white font-bold rounded-sm hover:bg-white hover:text-black transition-all text-sm tracking-wide hover:-translate-y-0.5">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
