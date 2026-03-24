import React from 'react';
import { Target, FileText, CheckCircle, Lock, Truck, ShieldCheck, ShoppingBag, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
    const advantages = [
        {
            icon: <Target className="text-[#024ad8]" size={32} />,
            title: "Curated Product Selection",
            description: "Relevant printers for home and business use."
        },
        {
            icon: <FileText className="text-[#024ad8]" size={32} />,
            title: "Clear Product Information",
            description: "Accurate details for informed decisions."
        },
        {
            icon: <DollarSign className="text-[#024ad8]" size={32} />,
            title: "Transparent Pricing",
            description: "No hidden fees or misleading offers."
        },
        {
            icon: <ShoppingBag className="text-[#024ad8]" size={32} />,
            title: "Easy Shopping Experience",
            description: "Smooth browsing and checkout process."
        },
        {
            icon: <Truck className="text-[#024ad8]" size={32} />,
            title: "Reliable Delivery",
            description: "Serving customers across the United States and Canada."
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-[#F8F9FA] border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#024ad8] mb-3 block text-center">Why Choose Us</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-4 leading-tight">
                        Clear, Reliable, and Focused
                    </h2>
                    <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-5"></div>
                    <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
                        We provide a carefully selected range of printers and related products through a simple and structured shopping experience. Every detail &mdash; from product information to checkout &mdash; is designed to help customers make confident decisions without confusion.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
                    {advantages.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                            <div className="mb-5 w-14 h-14 bg-[#F8F9FA] rounded-sm flex items-center justify-center border border-gray-100 group-hover:bg-[#024ad8]/5 transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-sm font-bold text-black mb-3 group-hover:text-[#024ad8] transition-colors duration-500 leading-tight uppercase tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
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
