import React from 'react';
import { Home, Briefcase, Building2, User } from 'lucide-react';

const WhoWeServe = () => {
    const sectors = [
        {
            icon: <Home className="text-[#024ad8]" size={32} />,
            title: "Home Users",
            description: "Individuals and families looking for reliable printers for daily tasks such as documents, schoolwork, and personal printing."
        },
        {
            icon: <Briefcase className="text-[#024ad8]" size={32} />,
            title: "Small Businesses",
            description: "Business owners who need dependable printing solutions for invoices, reports, and regular office operations."
        },
        {
            icon: <Building2 className="text-[#024ad8]" size={32} />,
            title: "Office & Corporate Teams",
            description: "Work environments that require efficient, high-performance printers for consistent and high-volume printing."
        },
        {
            icon: <User className="text-[#024ad8]" size={32} />,
            title: "Professionals & Remote Workers",
            description: "Individuals working from home or in professional roles who need reliable and easy-to-use printing solutions."
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#024ad8] mb-3 block text-center">Who We Serve</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-4 leading-tight">
                        Printing Solutions for Every Environment
                    </h2>
                    <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-5"></div>
                    <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed">
                        Our platform is designed to support a wide range of customers with different printing needs, from everyday use to professional environments.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {sectors.map((item, index) => (
                        <div key={index} className="group relative p-8 bg-gray-50 rounded-sm border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            {/* Hover Accent */}
                            <div className="absolute top-0 left-0 w-1 h-0 bg-[#024ad8] group-hover:h-full transition-all duration-500"></div>
                            
                            <div className="mb-6 w-14 h-14 bg-white rounded-sm flex items-center justify-center border border-gray-100 shadow-sm group-hover:bg-[#024ad8]/5 transition-colors duration-500">
                                {item.icon}
                            </div>
                            
                            <h3 className="text-lg font-extrabold text-black mb-3 leading-tight group-hover:text-[#024ad8] transition-colors duration-500">
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

export default WhoWeServe;
