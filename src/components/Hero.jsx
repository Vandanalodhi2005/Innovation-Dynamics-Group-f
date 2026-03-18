import React from 'react';
import { ArrowRight, Printer, Briefcase, Zap, Palette, Droplet } from 'lucide-react';
import homeImage from "../../public/homeImage/img1.jpg";
import officeImage from "../../public/homeImage/img2.jpg";
import inkjetImage from "../../public/homeImage/img3.jpg";
import laserImage from "../../public/homeImage/img4.jpg";
import inkImage from "../../public/homeImage/img5.jpg";
import heroRightImage from "../../public/hero/hero-right.png";
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
            <div className="relative overflow-hidden bg-white text-gray-900 border-b border-gray-100">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#024ad8]">Printers & Printing Essentials</span>
                                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 max-w-lg">
                                    Quality Printers & <br />Printing Supplies for <br />
                                    <span className="text-[#024ad8] text-6xl md:text-7xl">Every Need</span>
                                </h1>
                            </div>
                            <div className="space-y-6">
                                <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                                    Discover a curated collection of printers, ink, toner, and printing accessories designed for homes, offices, and small businesses.
                                </p>
                                <div className="border-l-2 border-[#024ad8] pl-4 py-1">
                                    <p className="text-xs text-gray-500 max-w-sm leading-relaxed italic">
                                        As an independent retailer based in Blaine, Minnesota, we bring you clear product information, trusted sourcing, and a smooth online shopping experience.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 pt-2">
                                <a href="/shop" className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#024ad8] to-[#0133a1] text-white text-lg font-bold rounded-full hover:shadow-xl hover:shadow-[#024ad8]/40 transition-all duration-300 transform hover:-translate-y-0.5">
                                    Shop Now <ArrowRight className="ml-2" size={20} />
                                </a>
                                <a 
                                    href="https://locator.hp.com/us/en/?ml___lang=en-US%20(1)&ml___region=us&ml___cont=US&ml___task=search_zip&ml___id=569440&ml___ml_skip_interstitial=1&ml___url_share_action=1&ml___redirect_commercial_destination_Itemid=1" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 hover:opacity-80 transition-opacity"
                                >
                                    <div className="h-10 w-px bg-gray-200"></div>
                                    <img src="/logo/hp-partner.png" alt="HP Business Partner" className="h-17 w-auto object-contain" />
                                </a>
                            </div>
                        </div>

                         <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-white bg-gray-50 aspect-[4/3] group transform hover:-translate-y-1 transition-all duration-500">
                                <img
                                    src={heroRightImage}
                                    alt="Modern Silver Printer"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8">
                                    <div className="text-white">
                                        <p className="font-bold text-2xl mb-1">High-Performance Series</p>
                                        <p className="text-sm text-gray-200">Professional Output, Every Time</p>
                                    </div>
                                </div>
                            </div>

                             {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#024ad8] rounded-full opacity-5 blur-3xl"></div>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section - "Choose Your Printer Type" */}
            <div className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Printing Categories</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#024ad8] to-blue-200 mx-auto rounded-full mb-6"></div>
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
                                        <div className="absolute top-4 right-4 bg-primary-blue p-2 rounded-full text-white shadow-md">
                                            {type.icon}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                                            {type.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                            {type.description}
                                        </p>
                                        <div className="flex items-center text-primary-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
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
