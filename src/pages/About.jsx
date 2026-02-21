import React from 'react';
import { Target, ShieldCheck, Printer, Users, Rocket, Eye, Heart, Info, Box } from 'lucide-react';
import aboutImage from '../../public/about/hero.jpg';

const About = () => {
    return (
        <div className="bg-white text-black font-sans">
            {/* Hero Section */}
            <div className="relative bg-gray-50 text-black py-24 md:py-32 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={aboutImage}
                        alt="Office Background"
                        className="w-full h-full object-cover opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/90"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#df762b] mb-4 block">Innovation Dynamics Group</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">Who We Are</h1>
                    <div className="w-24 h-1.5 bg-primary-orange mx-auto mb-8 rounded-full"></div>
                    <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        An independent <span className="text-primary-orange font-medium">printer-exclusive</span> retailer you can trust.
                    </p>
                </div>
            </div>

            {/* Who We Are & What We Offer */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Image Side - Now on the left */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group order-2 lg:order-1">
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
                                            <Printer className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">Quality Guaranteed</p>
                                            <p className="text-gray-200 text-sm">Printers & Supplies You Can Rely On</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Who We Are - Now on the right */}
                        <div className="space-y-8 order-1 lg:order-2">
                            <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
                                <Users className="text-primary-orange" size={32} />
                                Who We Are
                            </h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Innovation Dynamics Group LLC is an independent retailer based in <span className="font-bold text-gray-900">Blaine, Minnesota</span>, specializing exclusively in printers, Ink & Toner, and essential printing accessories.
                                </p>
                                <p>
                                    Our goal is simple: to make it easy for customers to find reliable printing products through clear information, trusted sourcing, and a smooth online shopping experience.
                                </p>
                                <p>
                                    We focus on delivering a product catalog that supports everyday printing needs—whether you're a home user, a remote worker, a student, or a small business owner looking for dependable printing essentials.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                                <Box className="text-primary-orange" size={32} />
                                What We Offer
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg italic">We provide a curated selection of printing products, including:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Home Printers", desc: "for everyday household use" },
                                    { title: "Office Printers", desc: "built for high volume" },
                                    { title: "Inkjet Printers", desc: "for vibrant color" },
                                    { title: "Laser Printers", desc: "for fast output" },
                                    { title: "Ink & Toner", desc: "for various models" },
                                    { title: "Printer Accessories", desc: "paper, cables, and more" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-2 h-2 bg-primary-orange rounded-full flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm">
                                            <span className="font-bold">{item.title}</span><br />{item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-sm text-gray-500 border-t border-gray-200 pt-6">
                                Each listing includes key features and easy-to-understand information to help customers choose the right product with confidence.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1585336139118-132f7f21503e?auto=format&fit=crop&q=80&w=800"
                                alt="Printer Supplies"
                                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Purpose & Vision Grid */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-orange opacity-5 rounded-full blur-3xl -ml-48 -mb-48"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Purpose</h2>
                        <p className="text-gray-400 text-xl">Technology shopping should be clear—not confusing.</p>
                        <div className="w-16 h-1 bg-primary-orange mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Target className="text-primary-orange" />, title: "Easy Comparison", text: "Products are easy to compare and browse." },
                            { icon: <Eye className="text-primary-orange" />, title: "Clear Information", text: "Information is clearly presented without fluff." },
                            { icon: <Heart className="text-primary-orange" />, title: "No Pressure", text: "Shop without pressure or unnecessary complexity." },
                            { icon: <ShieldCheck className="text-primary-orange" />, title: "Unbiased Listings", text: "Independent from any specific manufacturer." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center max-w-3xl mx-auto">
                        <div className="bg-primary-orange/10 p-10 rounded-3xl border border-primary-orange/20">
                            <Rocket className="text-primary-orange mx-auto mb-6" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-300 text-lg italic leading-relaxed">
                                "To become a trusted destination for individuals and businesses looking for reliable printers, Ink & Toner, and printing accessories—supported by clarity, simplicity, and honest retail practices."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Independence & Commitment */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full opacity-50 blur-2xl"></div>
                            <h2 className="text-4xl font-bold mb-8 relative">Independence & <span className="text-primary-orange">Transparency</span></h2>
                            <div className="space-y-6 text-gray-600 text-lg">
                                <p>
                                    Innovation Dynamics Group LLC is <span className="font-bold text-gray-900">not affiliated with, endorsed by, or sponsored by</span> HP, Canon, Epson, Brother, or any other brand.
                                </p>
                                <p className="text-sm">
                                    All product names, images, and trademarks belong to their respective owners and are used only for identification.
                                </p>
                                <p>
                                    We maintain this independence to ensure customers receive accurate, unbiased product details without manufacturer influence.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                                <ShieldCheck className="text-primary-orange" size={28} />
                                Our Commitment
                            </h3>
                            <div className="space-y-6">
                                {[
                                    "Reliable products sourced from trusted suppliers",
                                    "Clear information without unnecessary complexity",
                                    "A smooth shopping experience from browsing to checkout",
                                    "Responsive communication for order-related inquiries"
                                ].map((text, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <Info className="text-primary-orange flex-shrink-0" size={20} />
                                        <p className="text-gray-700 font-medium">{text}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-10 text-gray-500 italic text-sm border-t border-gray-200 pt-6">
                                Everything we do is centered around creating a dependable and straightforward online printing store.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
