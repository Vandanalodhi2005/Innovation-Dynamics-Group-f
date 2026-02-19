import React from 'react';
import { ArrowRight, Printer, Briefcase, Zap, Palette, Droplet } from 'lucide-react';

const Hero = () => {
    const printerTypes = [
        {
            title: "Home Printers",
            description: "Home printers designed for simple setup and reliable everyday printing.",
            icon: <Printer size={24} className="text-white" />,
            image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500",
            link: "/shop/home-printers"
        },
        {
            title: "Office Printers",
            description: "Office printers designed for speed, efficiency, and daily business use.",
            icon: <Briefcase size={24} className="text-white" />,
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500",
            link: "/shop/office-printers"
        },
        {
            title: "Laser Printers",
            description: "Laser printers deliver fast, sharp, and cost-efficient printing.",
            icon: <Zap size={24} className="text-white" />,
            image: "https://printerpoint.co.in/shop/printers/hp-colour-laser-150nw-wireless-color-laser-printer-built-in-ethernet-and-wifi-direct/",
            link: "/shop/laser-printers"
        },
        {
            title: "Inkjet Printers",
            description: "Inkjet printers built for colorful, everyday home printing.",
            icon: <Palette size={24} className="text-white" />,
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500",
            link: "/shop/inkjet-printers"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-[#df762b] text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text */}
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                                Find the Right Printer for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df762b] to-white">Home & Office</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                                Explore printers suitable for home and office use, including all-in-one and laser models designed for consistent performance and everyday reliability.
                            </p>
                            <div className="pt-4">
                                <a href="/shop" className="inline-flex items-center px-10 py-4 bg-[#df762b] text-white text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                                    Explore Printers <ArrowRight className="ml-2" size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Right Side - Image Placeholder */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5 backdrop-blur-sm aspect-[4/3] group transform hover:rotate-1 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1000"
                                    alt="Modern Printer"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <p className="font-bold text-2xl mb-1">High-Performance Series</p>
                                        <p className="text-sm text-gray-300">Professional Output, Every Time</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#df762b] rounded-full opacity-20 blur-3xl"></div>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section - "Choose Your Printer Type" */}
            <div className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Printer Type</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-orange-300 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {printerTypes.map((type, index) => (
                            <a key={index} href={type.link} className="block group h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 group-hover:-translate-y-2">
                                    {/* Card Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                                        <img
                                            src={type.image}
                                            alt={type.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-primary-orange p-2 rounded-full text-white shadow-md">
                                            {type.icon}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-orange transition-colors">
                                            {type.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                            {type.description}
                                        </p>
                                        <div className="flex items-center text-primary-orange font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                            View Models <ArrowRight size={16} className="ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
