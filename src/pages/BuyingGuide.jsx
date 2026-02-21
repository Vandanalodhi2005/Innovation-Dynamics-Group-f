import React from 'react';
import { Printer, Droplet, Zap, Target, BookOpen, CheckCircle, ArrowRight, Info, ShieldCheck } from 'lucide-react';

const BuyingGuide = () => {
    return (
        <div className="bg-white text-black font-sans min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform rotate-45 pointer-events-none">
                    <BookOpen size={600} className="absolute -top-20 -right-20" />
                </div>

                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&q=80&w=1920"
                        alt="Printer Buying Guide"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase border border-primary-orange/30">
                        <BookOpen size={16} /> Shopping Guide
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white italic">
                        Choose the Right Printer
                    </h1>
                    <div className="w-48 h-1.5 bg-primary-orange mb-8 rounded-full mx-auto"></div>
                    <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto italic">
                        Finding the right printer and printing essentials can feel overwhelming. This guide makes it simple by breaking everything down into clear categories and practical considerations.
                    </p>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 italic underline decoration-primary-orange decoration-4 underline-offset-8">
                        Confident Shopping Starts Here
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
                        Whether you're printing at home, in a small office, or for high-volume business needs, our goal is to help you select the exact device and supplies that match your specific requirements.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {[
                        {
                            title: "Home Printers",
                            icon: <Printer className="text-primary-orange" size={32} />,
                            desc: "Compact, easy-to-use devices for photos, school assignments, and general home use.",
                            features: ["Wireless Connectivity", "Compact Design", "Standard Yield"]
                        },
                        {
                            title: "Office Printers",
                            icon: <Target className="text-primary-orange" size={32} />,
                            desc: "Fast, reliable machines built for efficiency, multi-user access, and heavy workloads.",
                            features: ["High Speed", "Large Paper Trays", "Auto-Duplex"]
                        },
                        {
                            title: "Inkjet Technology",
                            icon: <Droplet className="text-primary-orange" size={32} />,
                            desc: "Best for high-quality photos and color-rich documents with vibrant results.",
                            features: ["Vibrant Colors", "Photo Printing", "Lower Initial Cost"]
                        },
                        {
                            title: "Laser Technology",
                            icon: <Zap className="text-primary-orange" size={32} />,
                            desc: "Optimized for sharp text and high-volume black-and-white or color documents.",
                            features: ["Sharp Text", "Fast Output", "Cost-Per-Page Efficiency"]
                        }
                    ].map((card, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow group">
                            <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-6 group-hover:bg-primary-orange group-hover:text-white transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 italic">{card.title}</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed font-medium italic">{card.desc}</p>
                            <ul className="space-y-2">
                                {card.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                        <CheckCircle size={14} className="text-primary-orange" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Practical Considerations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                            alt="Printer Technology"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end p-10">
                            <div className="text-white max-w-sm">
                                <h3 className="text-3xl font-bold mb-4 italic">Consider Your Yield</h3>
                                <p className="text-sm font-medium italic opacity-90">Always check the estimated page yield for Ink & Toner to understand your long-term operating costs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <h2 className="text-4xl font-bold italic underline decoration-primary-orange decoration-2">Key Considerations</h2>

                        <div className="space-y-8">
                            {[
                                {
                                    title: "1. Print Volume",
                                    desc: "Do you print daily or once a week? High-volume users should look at Laser printers and XL cartridges for better long-term value."
                                },
                                {
                                    title: "2. Color vs. Monochrome",
                                    desc: "If you only print text documents, a monochrome laser printer offers incredible efficiency. For photos and marketing materials, go Inkjet."
                                },
                                {
                                    title: "3. All-in-One Capabilities",
                                    desc: "Need to scan, copy, or fax? Look for 'AIO' models that combine multiple functions into a single workspace-saving device."
                                },
                                {
                                    title: "4. Compatibility",
                                    desc: "Always verify that your brand and model number match the Ink & Toner cartridges you are purchasing. Check our detailed descriptions on every product page."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="text-4xl font-black text-primary-orange/20 italic">{idx + 1}</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 italic text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600 font-medium italic leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Easy Shopping Steps */}
                <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-12 italic text-center underline decoration-primary-orange decoration-2 underline-offset-8">
                            4 Steps to the Perfect Purchase
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {[
                                { step: "Define", desc: "Identify if you need a home, office, or specialized printer." },
                                { step: "Compare", desc: "Compare specs like page yield, speed, and wireless range." },
                                { step: "Select", desc: "Choose your device and ensure you have the right starter supplies." },
                                { step: "Order", desc: "Complete your checkout and wait for our fast, secure shipping." }
                            ].map((step, idx) => (
                                <div key={idx} className="text-center group">
                                    <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        {idx + 1}
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 italic">{step.step}</h4>
                                    <p className="text-sm text-gray-400 font-medium italic">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <a href="/shop" className="inline-flex items-center gap-3 bg-primary-orange hover:bg-white hover:text-primary-orange text-black font-bold px-10 py-4 rounded-xl transition-all uppercase tracking-widest text-sm">
                                Explore All Products <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <ShieldCheck className="mx-auto mb-6 text-primary-orange opacity-40" size={64} />
                    <h3 className="text-3xl font-bold mb-4 italic">Expert Selection, Guaranteed</h3>
                    <p className="text-gray-600 text-lg leading-relaxed italic font-medium">
                        At Innovation Dynamics Group LLC, we only stock devices and supplies we trust. Our buying guide is designed to empower you with the knowledge to make the best choice for your printing needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BuyingGuide;
