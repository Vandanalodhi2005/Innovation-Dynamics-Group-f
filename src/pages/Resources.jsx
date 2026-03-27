import React from 'react';

const Resources = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4">Support Hub</h1>
                    <p className="text-gray-500 text-sm font-medium">Your go-to source for practical, easy-to-understand information about printers, supplies, and smart buying decisions.</p>
                </header>

                <div className="space-y-16 leading-relaxed text-gray-700 font-normal">
                    <section id="basics">
                        <h2 className="text-2xl font-bold text-black mb-8">1. Printer Basics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h4 className="font-bold text-black mb-3">Inkjet Printers</h4>
                                <p className="text-sm text-gray-500">Ideal for vibrant colors, photos, graphics, and everyday family use.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h4 className="font-bold text-black mb-3">Laser Printers</h4>
                                <p className="text-sm text-gray-500">Best for fast, high-volume, black-and-white or color office printing.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h4 className="font-bold text-black mb-3">Home Printers</h4>
                                <p className="text-sm text-gray-500">Compact, budget-friendly printers designed for low to moderate print needs.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h4 className="font-bold text-black mb-3">Office Printers</h4>
                                <p className="text-sm text-gray-500">Efficient, durable printers built for multiple users and frequent printing.</p>
                            </div>
                        </div>
                    </section>

                    <section id="ink-toner">
                        <h2 className="text-2xl font-bold text-black mb-8">2. Ink & Toner Explained</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-medium">
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                                <h4 className="font-bold text-black mb-2 text-sm uppercase tracking-wide">Ink Cartridges</h4>
                                <p className="text-xs text-gray-500">Liquid-based. Best for photo-quality output and color-rich prints.</p>
                            </div>
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                                <h4 className="font-bold text-black mb-2 text-sm uppercase tracking-wide">Toner Cartridges</h4>
                                <p className="text-xs text-gray-500">Powder-based. Higher page yield and extreme precision for text.</p>
                            </div>
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                                <h4 className="font-bold text-black mb-2 text-sm uppercase tracking-wide">High-Yield (XL)</h4>
                                <p className="text-xs text-gray-500">Max efficiency. Print significantly more pages and reduce cost per page.</p>
                            </div>
                        </div>
                    </section>

                    <section id="features">
                        <h2 className="text-2xl font-bold text-black mb-8">3. Key Features</h2>
                        <ul className="space-y-6 font-medium">
                            <li className="flex gap-6 items-start">
                                <span className="text-xs font-bold text-[#024ad8] uppercase tracking-widest pt-1">PPM</span>
                                <p className="text-sm text-gray-600">Print Speed (Pages Per Minute) affecting efficiency in busy environments.</p>
                            </li>
                            <li className="flex gap-6 items-start">
                                <span className="text-xs font-bold text-[#024ad8] uppercase tracking-widest pt-1">DPI</span>
                                <p className="text-sm text-gray-600">Print Resolution (Dots Per Inch) affecting sharpness and clarity.</p>
                            </li>
                            <li className="flex gap-6 items-start">
                                <span className="text-xs font-bold text-[#024ad8] uppercase tracking-widest pt-1">Sync</span>
                                <p className="text-sm text-gray-600">USB, Ethernet, Wi-Fi, and Mobile printing compatibility options.</p>
                            </li>
                            <li className="flex gap-6 items-start">
                                <span className="text-xs font-bold text-[#024ad8] uppercase tracking-widest pt-1">Cycle</span>
                                <p className="text-sm text-gray-600">Maximum monthly capacity a printer can handle without damage.</p>
                            </li>
                        </ul>
                    </section>

                    <section id="contact" className="mt-16 pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-10">Need More Help?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Direct Line</p>
                                    <p className="font-bold text-black text-sm">+1 (651) 815-4630</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-[#024ad8] uppercase tracking-wider">Email Support</p>
                                    <p className="font-bold text-black text-sm break-all">support@innovationdynamicsgroup.com</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Integrity in Every Print</p>
                                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                                    If you need help selecting printing products or understanding compatibility, our experts are here to assist. (Product and purchase-related guidance only.)
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-300 font-medium tracking-wide">
                        Innovation Dynamics Group LLC © 2026
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Resources;
