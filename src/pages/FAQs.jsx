import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import faq from '../../public/images/faq-hero.jpg';
const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: "1. What types of printers do you offer?",
            answer: "We offer a curated selection of Home Printers, Office Printers, Inkjet Printers, and Laser Printers from trusted global brands such as HP, Canon, Epson, and Brother. All listings are clearly organized so customers can find the right match for their printing needs."
        },
        {
            question: "2. Do you sell Ink & Toner for multiple brands?",
            answer: "Yes. We carry Ink & Toner compatible with multiple printer models, including options for HP, Canon, Epson, and Brother printers. All items include accurate descriptions to help you select the correct cartridge or toner for your device."
        },
        {
            question: "3. Are you affiliated with any printer manufacturers?",
            answer: "No. Innovation Dynamics Group LLC is an independent retailer and is not affiliated with, endorsed by, or sponsored by any printer manufacturer. All trademarks and brand names belong to their respective owners and are shown only for identification purposes."
        },
        {
            question: "4. How do I know which Ink or Toner fits my printer?",
            answer: "You can check the model number on your printer or look at your existing cartridge’s label. Each product listing clearly mentions compatible printer models, making it easy to choose the right item."
        },
        {
            question: "5. Do you offer both standard and high-yield cartridges?",
            answer: "Yes. We offer standard, high-yield, and XL cartridge options, depending on availability for each brand and model."
        },
        {
            question: "6. Do your products come with manufacturer warranties?",
            answer: "Yes. All applicable warranties are provided directly by the respective manufacturer. Please refer to the manufacturer’s official warranty terms for specific details."
        },
        {
            question: "7. Do you provide information on product specifications?",
            answer: "Yes. Every listing includes essential product details such as page yield (where applicable), printer compatibility, color options, key features, packaging type, and item specifications. We make product details easy to understand so customers can shop confidently."
        },
        {
            question: "8. Do you offer shipping across the United States?",
            answer: "Yes. We ship to all U.S. states. Shipping rates, estimated delivery times, and carrier details are displayed during checkout."
        },
        {
            question: "9. How can I contact your team?",
            answer: "You can reach Innovation Dynamics Group LLC at support@innovationdynamicsgroup.com or call +1 (651) 815-4630. Our address is 11397 Quincy St NE, Blaine, MN 55434. We respond to inquiries promptly during business hours."
        },
        {
            question: "10. What can I contact you about?",
            answer: "You may contact us for product inquiries, order-related questions, availability details, information about printers or printing supplies, and general store information. We provide only product and purchase-related assistance."
        },
        {
            question: "11. Do you sell refurbished printers or used Ink & Toner?",
            answer: "No. We only offer brand-new retail products sourced from reputable suppliers."
        },
        {
            question: "12. Are product images accurate?",
            answer: "All images shown are for identification and informational purposes. Product colors, packaging, or labeling may vary slightly depending on manufacturer updates."
        }
    ];

    return (
        <div className="bg-white text-black min-h-screen">
            
            {/* Hero Section */}
            <div className="relative bg-black text-white py-32 md:py-48 overflow-hidden border-b-8 border-[#024ad8]">
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={faq}
                        alt="FAQs Background"
                        className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
                    <HelpCircle className="mx-auto mb-12 text-[#024ad8] animate-bounce" size={64} />
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-10 tracking-tighter uppercase leading-[0.9]">
                        KNOWLEDGE <br/> <span className="text-[#024ad8]">TERMINAL</span>
                    </h1>
                    <div className="w-24 h-2 bg-[#024ad8] mx-auto mb-12 shadow-2xl shadow-[#024ad8]/30"></div>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-extrabold uppercase tracking-[0.4em]">
                        TECHNICAL CLARITY • PROCEDURAL DATA • LOGISTICAL INSIGHTS
                    </p>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-sm overflow-hidden transition-all duration-700 bg-white ${
                                openIndex === index
                                    ? 'shadow-2xl shadow-black/[0.05] border-[#024ad8] -translate-y-1'
                                    : 'border-gray-100 hover:border-gray-200'
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-10 text-left hover:bg-gray-50/50 transition-colors group"
                            >
                                <span className={`font-extrabold text-xl uppercase tracking-tighter transition-all duration-500 ${openIndex === index ? 'text-[#024ad8] pl-4 border-l-4 border-[#024ad8]' : 'text-black'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-4 rounded-sm transition-all duration-500 ${openIndex === index ? 'bg-[#024ad8] text-white rotate-180' : 'bg-gray-50 text-gray-300'}`}>
                                    {openIndex === index ? (
                                        <Minus size={20} strokeWidth={3} />
                                    ) : (
                                        <Plus size={20} strokeWidth={3} />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                                    openIndex === index
                                        ? 'max-h-[1000px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-10 pt-4 text-gray-500 leading-relaxed border-t border-gray-50 bg-[#F8F9FA] text-[15px] font-bold uppercase tracking-wider">
                                    <div className="p-8 bg-white rounded-sm border border-gray-100 shadow-sm leading-[1.8]">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Important Notice */}
            <div className="bg-black py-24 border-t-8 border-[#024ad8] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#024ad8]/5 rounded-full blur-[100px] -ml-48 -mt-48"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h3 className="text-[10px] font-extrabold mb-8 text-[#024ad8] uppercase tracking-[0.5em]">
                        OPERATIONAL PROTOCOL NOTICE
                    </h3>
                    <p className="text-gray-500 text-sm leading-[2] mb-12 font-extrabold uppercase tracking-[0.15em] max-w-4xl mx-auto italic">
                        PRODUCT AVAILABILITY, PRICING, SYSTEM METRICS, AND LOGISTICAL TIMELINES ARE SUBJECT TO MODIFICATION WITHOUT PRIOR AUTHORIZATION. PLEASE VALIDATE ALL LIVE DATA BEFORE COMMITING TO PROCUREMENT. WARRANTY RECOVERY IS FACILITATED DIRECTLY BY OEM ENTITIES AND VARY BY ARCHITECTURE.
                    </p>
                    <div className="w-12 h-1 bg-[#024ad8] mx-auto mb-10"></div>
                    <p className="text-gray-700 text-[9px] max-w-3xl mx-auto uppercase tracking-[0.4em] font-extrabold">
                        DELIVERY SEQUENCES ARE PROJECTIONS AND MAY DEVIATE BASED ON GEOSPATIAL PARAMETERS.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
