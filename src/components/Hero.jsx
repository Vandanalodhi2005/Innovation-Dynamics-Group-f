import React from 'react';
import { ArrowRight, Printer, Briefcase, Zap, Palette, Droplet } from 'lucide-react';
import homeImage from "../../public/homeImage/img1.jpg";
import officeImage from "../../public/homeImage/img2.jpg";
import inkjetImage from "../../public/homeImage/img3.jpg";
import laserImage from "../../public/homeImage/img4.jpg";
import inkImage from "../../public/homeImage/img5.jpg";
// import largeFormatImage from "../../public/homeImage/img6.jpg";

const Hero = () => {
    const categories = [
        {
            title: "Home Printers",
            description: "Perfect for families, students, and everyday household printing needs. Compact, efficient, and designed for regular home use.",
            icon: <Printer size={24} className="text-white" />,
            image: homeImage,
            link: "/shop/home-printers"
        },
        {
            title: "Office Printers",
            description: "Ideal for small businesses and workspaces needing consistent, high-volume output. Reliable, durable, and built for productivity.",
            icon: <Briefcase size={24} className="text-white" />,
            image: officeImage,
            link: "/shop/office-printers"
        },
        {
            title: "Inkjet Printers",
            description: "Best for color documents, photos, and creative printing. Smooth color output and versatile media compatibility.",
            icon: <Palette size={24} className="text-white" />,
            image: inkjetImage,
            link: "/shop/inkjet-printers"
        },
        {
            title: "Laser Printers",
            description: "Great for fast, high-volume black & white or color printing. Cost-efficient and optimized for busy work environments.",
            icon: <Zap size={24} className="text-white" />,
            image: laserImage,
            link: "/shop/laser-printers"
        },
        {
            title: "Ink Cartridges",
            description: "A wide selection of genuine and compatible ink cartridges and high-quality toner options, including standard and high-yield versions.",
            icon: <Droplet size={24} className="text-white" />,
            image: inkImage,
            link: "/shop/ink-cartridges"
        }
        //  {
        //     title: "Large format printers",
        //     description: "A wide selection of genuine and compatible ink cartridges and high-quality toner options, including standard and high-yield versions.",
        //     icon: <Droplet size={24} className="text-white" />,
        //     image: largeFormatImage,
        //     link: "/shop/ink-cartridges"
        // }
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
                            <div className="space-y-4">
                                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#df762b]">Printers & Printing Essentials</span>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                                    Quality Printers & Printing Supplies for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df762b] to-white">Every Need</span>
                                </h1>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                                    Discover a curated collection of printers, ink, toner, and printing accessories designed for homes, offices, and small businesses.
                                </p>
                                <p className="text-sm text-gray-400 max-w-xl leading-relaxed italic border-l-2 border-[#df762b] pl-4">
                                    As an independent retailer based in Blaine, Minnesota, we bring you clear product information, trusted sourcing, and a smooth online shopping experience.
                                </p>
                            </div>
                            <div className="pt-4">
                                <a href="/shop" className="inline-flex items-center px-10 py-4 bg-[#df762b] text-white text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                                    Shop Now <ArrowRight className="ml-2" size={20} />
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
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Printing Categories</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-orange-300 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600">
                            We make it easy to find the right printer or printing supply by organizing our catalog into clear, user-friendly categories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((type, index) => (
                            <a key={index} href={type.link} className={`block group h-full ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
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
