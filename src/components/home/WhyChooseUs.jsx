import React from 'react';
import { Printer, Shield, Star, ShoppingBag, Info } from 'lucide-react';

const WhyChooseUs = () => {
    const advantages = [
        {
            icon: <Printer className="text-primary-orange" size={32} />,
            title: "100% Printing-Focused Retailer",
            description: "Our entire catalog is dedicated to printers, ink, toner, and accessories."
        },
        {
            icon: <Shield className="text-primary-orange" size={32} />,
            title: "Independent & Transparent",
            description: "We are not affiliated with any manufacturer; product information is unbiased and clear."
        },
        {
            icon: <Star className="text-primary-orange" size={32} />,
            title: "Curated Product Selection",
            description: "Only reliable, high-quality printing essentials sourced from reputable suppliers."
        },
        {
            icon: <ShoppingBag className="text-primary-orange" size={32} />,
            title: "Easy Shopping Experience",
            description: "Simple navigation, organized categories, and secure checkout."
        },
        {
            icon: <Info className="text-primary-orange" size={32} />,
            title: "Accurate Product Information",
            description: "Straightforward details to help you choose confidently."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Why Choose Us</h2>
                    <div className="w-20 h-1.5 bg-primary-orange mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover the printer-exclusive advantages of shopping with an independent specialist.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {advantages.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
