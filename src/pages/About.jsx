import React from 'react';
import { Target, ShieldCheck, Printer, Users, Rocket, Eye, Heart, Info, Box } from 'lucide-react';
import aboutImage from '../../public/about/hero.jpg';
import aboutImage2 from '../../public/hero/about.jpg'; 
import aboutImage3 from '../../public/hero/about.jpg'; 

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
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#024ad8] mb-4 block">Innovation Dynamics Group</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">Your Trusted Online <br/> <span className="text-[#024ad8]">Printer Store</span></h1>
                    <div className="w-24 h-1.5 bg-[#024ad8] mx-auto mb-8 rounded-full"></div>
                </div>
            </div>

            {/* Who We Are & What We Offer */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Image Side */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group order-2 lg:order-1">
                            <img
                                src={aboutImage2}
                                alt="Modern Office Printer"
                                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white p-6">
                                <p className="font-bold text-xl mb-2 italic">Exclusively Focused on Printing</p>
                                <p className="text-gray-200 text-sm">Specialized products, organized categories, and helpful guidance.</p>
                            </div>
                        </div>

                        {/* Who We Are Content */}
                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-3 bg-blue-50 text-[#024ad8] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                                <Users size={18} /> Our Identity
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Innovation Dynamics Group LLC is a specialized online store focused on printers and essential printing solutions for home users, professionals, and businesses. Our goal is to make printer shopping simple, transparent, and reliable so customers can choose the right printing products with confidence.
                                </p>
                                <p>
                                    Innovation Dynamics Group LLC operates as a registered business providing printer products and related solutions through a structured eCommerce platform designed for clarity and ease of use. We are also an HP Amplify Partner Program member, allowing us to provide trusted HP printing products as part of our product offerings.
                                </p>
                                <p>
                                    Unlike large general marketplaces, our platform focuses specifically on printers and printing technology. This specialized approach allows us to present clear product information, organized categories, and helpful guidance so customers can easily find printers that meet their needs.
                                </p>
                                <p>
                                    Our store features a range of printing solutions including inkjet printers, laser printers, multifunction printers, and wireless printing devices from trusted manufacturers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section className="py-24 bg-gray-50 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-3 bg-blue-100/50 text-[#024ad8] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            <ShieldCheck size={18} /> Our Standards
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment</h2>
                        <h3 className="text-2xl text-[#024ad8] font-medium italic mb-8">Quality, Transparency, and Customer Satisfaction</h3>
                        <div className="w-16 h-1 bg-[#024ad8] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                                <div className="relative space-y-6 text-gray-600 text-lg leading-relaxed">
                                    <p>
                                        At Innovation Dynamics Group LLC, we believe buying a printer should be straightforward and stress-free. That is why we focus on clear product information, transparent pricing, and reliable service.
                                    </p>
                                    <p>
                                        From browsing products to completing checkout, our platform is designed to provide a smooth and secure shopping experience. We aim to build long-term trust with our customers by offering dependable products and professional customer support.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={aboutImage3}
                                alt="Printer Supplies"
                                className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-[#024ad8] text-white p-10 rounded-3xl shadow-2xl max-w-xs">
                                <Info size={40} className="mb-4 opacity-50" />
                                <p className="font-bold text-lg leading-tight uppercase italic underline decoration-white/30 decoration-2 underline-offset-4">Straightforward & Stress-Free Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-3 bg-blue-50 text-[#024ad8] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            <Target size={18} /> Why Innovation Dynamics?
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif italic">Why Choose Us</h2>
                        <h3 className="text-2xl text-gray-500 font-light mb-8">A Store Built Around Printing Needs</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Printer size={32} className="text-[#024ad8]" />,
                                title: "Right Selection",
                                text: "Whether you need a compact printer for home use or a high-performance device for office environments, Innovation Dynamics Group LLC helps you choose the right printing solution."
                            },
                            {
                                icon: <Box size={32} className="text-[#024ad8]" />,
                                title: "Specialized Expertise",
                                text: "By focusing specifically on printers and printing technology, we are able to better understand customer needs and provide solutions that truly match everyday printing requirements."
                            },
                            {
                                icon: <ShieldCheck size={32} className="text-[#024ad8]" />,
                                title: "Our Simple Goal",
                                text: "Our goal is simple — to provide reliable printing solutions through a clear, trustworthy, and customer-focused platform."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="mb-6 bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center border border-blue-50">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif italic">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#024ad8] opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Rocket className="text-[#024ad8] mx-auto mb-8" size={48} />
                    <h2 className="text-3xl font-bold mb-6 italic underline decoration-[#024ad8] decoration-4 underline-offset-8">Dedicated to Better Printing</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Join thousands of customers who trust Innovation Dynamics Group for their printing technology needs.
                    </p>
                    <div className="mt-12">
                        <a href="/shop" className="inline-flex items-center gap-3 px-10 py-4 bg-[#024ad8] text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-blue-500/20">
                            Explore Our Catalog <Box size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
