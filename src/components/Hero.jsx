import React from 'react';
import { ArrowRight, Printer, Briefcase, Zap, Palette, Droplet, Activity, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeImage from "../../public/homeImage/img1.jpg";
import officeImage from "../../public/homeImage/img2.jpg";
import inkjetImage from "../../public/homeImage/img3.jpg";
import laserImage from "../../public/homeImage/img4.jpg";
import inkImage from "../../public/homeImage/img5.jpg";
import heroRightImage from "../../public/hero/hero-right.png";

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
            title: "Ink & Toner",
            description: "A wide selection of genuine and compatible ink cartridges and high-quality toner options, including standard and high-yield versions.",
            icon: <Droplet size={24} className="text-white" />,
            image: inkImage,
            link: "/shop/ink-toner"
        }
    ];

    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section: Clean HP-Store Aesthetic */}
            <div className="relative overflow-hidden bg-[#F8F9FA] border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* ── Left Content: Clean & Authoritative ────────────────── */}
                        <div className="space-y-8 max-w-xl">
                            <div className="space-y-6">
                                <div className="inline-block">
                                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#024ad8] border-b-2 border-[#024ad8] pb-1">
                                        Premium Printing Solutions
                                    </span>
                                </div>
                                
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-black tracking-tight">
                                    Smart Printing Solutions <br/>
                                    for Every Need
                                </h1>
                                
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                                    Reliable Printers for Home, Office, and Business Use
                                </h2>
                                
                                <p className="text-lg text-gray-600 leading-relaxed font-normal">
                                    Explore a carefully selected range of printers designed to deliver performance, reliability, and ease of use. Whether you need a compact device for everyday tasks or high-efficiency for business, finding the right solution is straightforward.
                                </p>
                            </div>

                            {/* HP-Style Minimalist Bullets */}
                            <div className="space-y-4 pt-4 border-t border-gray-200">
                                {[
                                    "Wide range of trusted printer models",
                                    "Clear product details for informed decisions",
                                    "Secure and user-friendly shopping experience"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#024ad8]"></div>
                                        <span className="text-sm font-bold text-gray-700 uppercase tracking-widest">{text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Clean CTA Section */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                                <Link to="/shop" className="w-full sm:w-auto px-12 py-4 bg-[#024ad8] text-white text-sm font-bold rounded-sm hover:bg-[#0133a1] transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-[#024ad8]/10">
                                    SHOP NOW
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                </Link>
                                
                                <div className="flex items-center py-0 px-0 bg-white shadow-sm cursor-default">
                                    <a href="https://locator.hp.com/us/en?ml___task=search_zip&ml___id=416103&ml___ml_skip_interstitial=1&ml___url_share_action=1&ml___lang=en-US%20(1)&ml___redirect_commercial_destination_Itemid=1" target="_blank">
                                        <img src="/logo/hp-partner.png" alt="HP Authorized Partner" className="h-16 w-auto object-contain" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ── Right Content: Sharp & Professional ────────────────── */}
                        <div className="relative animate-in fade-in duration-1000">
                            {/* Product Image on Clean Presentation Layer */}
                            <div className="relative z-10 bg-white p-6 md:p-10 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group">
                                <div className="relative aspect-[4/3] overflow-hidden bg-[#FDFDFD]">
                                    <img
                                        src={heroRightImage}
                                        alt="Modern Printing Solutions"
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                            </div>

                            {/* Minimalist Floating Specs Label */}
                            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 shadow-2xl border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gray-50 text-black border border-gray-200">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.1em] mb-0.5">Performance</p>
                                        <p className="text-sm font-bold text-black uppercase tracking-tight">Optimized Output</p>
                                    </div>
                                </div>
                            </div>

                            {/* Background Accents (Subtle) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#024ad8]/5 rounded-full blur-[100px] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Grid: Keeping the structured approach */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-black uppercase tracking-tight mb-4">Explore Printing Categories</h2>
                        <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-6"></div>
                        <p className="text-gray-500 font-medium">
                            We make it easy to find the right printer by organizing our catalog into clear, professional categories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {categories.map((type, index) => (
                            <Link key={index} to={type.link} className={`block group h-full ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-100 group-hover:-translate-y-1">
                                    {/* Card Image */}
                                    <div className="relative h-56 overflow-hidden bg-gray-50 p-4">
                                        <img
                                            src={type.image}
                                            alt={type.title}
                                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-4 right-4 bg-black p-2.5 rounded-sm text-white shadow-lg">
                                            {type.icon}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-lg font-extrabold text-black uppercase tracking-tight mb-3 group-hover:text-[#024ad8] transition-colors">
                                            {type.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
                                            {type.description}
                                        </p>
                                        <div className="flex items-center text-[#024ad8] font-bold text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                            VIEW ALL MODELS <ArrowRight size={14} className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
