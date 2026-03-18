import React from 'react';
import { Target, FileText, CheckCircle, Lock } from 'lucide-react';

const WhyChooseUs = () => {
    const advantages = [
        {
            icon: <Target className="text-[#024ad8]" size={36} />,
            title: "Specialized Product Focus",
            description: "A dedicated focus on printers ensures better organization and more relevant product selection."
        },
        {
            icon: <FileText className="text-[#024ad8]" size={36} />,
            title: "Clear and Accurate Information",
            description: "Product listings are structured to help customers understand features, specifications, and usability."
        },
        {
            icon: <CheckCircle className="text-[#024ad8]" size={36} />,
            title: "Trusted Product Selection",
            description: "Only reliable and widely recognized printer models are featured."
        },
        {
            icon: <Lock className="text-[#024ad8]" size={36} />,
            title: "Secure Checkout Process",
            description: "A smooth and secure purchasing experience from start to finish."
        }
    ];

    return (
        <section className="py-24 bg-[#F8F9FA] border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: HP-Inspired Minimalist Style */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#024ad8] mb-4 block">Why Choose US</span>
                    <h2 className="text-4xl font-extrabold text-black tracking-tight mb-6 uppercase leading-tight">
                        Designed for Simplicity, <br/> Built for Reliability
                    </h2>
                    <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-8"></div>
                    <p className="text-gray-500 font-medium text-lg leading-relaxed">
                        Choosing the right printer should not be complicated. Every part of the platform is designed to make the process clear, efficient, and dependable.
                    </p>
                </div>

                {/* Grid: Sharp & Professional Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {advantages.map((item, index) => (
                        <div key={index} className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                            <div className="mb-8 w-16 h-16 bg-[#F8F9FA] rounded-sm flex items-center justify-center border border-gray-100 group-hover:bg-[#024ad8]/5 transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-extrabold text-black uppercase tracking-tight mb-4 group-hover:text-[#024ad8] transition-colors duration-500">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
