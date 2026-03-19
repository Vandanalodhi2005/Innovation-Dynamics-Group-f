import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Info } from 'lucide-react';
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
            answer: "You can check the model number on your printer or look at your existing cartridge's label. Each product listing clearly mentions compatible printer models, making it easy to choose the right item."
        },
        {
            question: "5. Do you offer both standard and high-yield cartridges?",
            answer: "Yes. We offer standard, high-yield, and XL cartridge options, depending on availability for each brand and model."
        },
        {
            question: "6. Do your products come with manufacturer warranties?",
            answer: "Yes. All applicable warranties are provided directly by the respective manufacturer. Please refer to the manufacturer's official warranty terms for specific details."
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
            <div className="relative bg-black text-white py-32 md:py-44 overflow-hidden border-b-4 border-[#024ad8]">
                <div className="absolute inset-0 z-0">
                    <img
                        src={faq}
                        alt="FAQs Background"
                        className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 mb-8">
                            <HelpCircle size={14} /> FAQs
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight">
                            Frequently Asked <br /><span className="text-[#024ad8]">Questions</span>
                        </h1>
                        <div className="w-16 h-1.5 bg-[#024ad8] mb-8"></div>
                        <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed max-w-xl">
                            Find answers to common questions about our products, shipping, orders, and more.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-sm overflow-hidden transition-all duration-500 bg-white ${openIndex === index
                                    ? 'shadow-lg shadow-black/[0.04] border-[#024ad8]/40'
                                    : 'border-gray-100 hover:border-gray-200'
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50/50 transition-colors group"
                            >
                                <span className={`font-bold text-base transition-all duration-300 pr-4 ${openIndex === index ? 'text-[#024ad8]' : 'text-black'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2.5 rounded-sm transition-all duration-300 flex-shrink-0 ${openIndex === index ? 'bg-[#024ad8] text-white' : 'bg-gray-50 text-gray-400'}`}>
                                    {openIndex === index ? (
                                        <Minus size={16} strokeWidth={2.5} />
                                    ) : (
                                        <Plus size={16} strokeWidth={2.5} />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${openIndex === index
                                        ? 'max-h-[500px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <div className="p-5 bg-[#F8F9FA] rounded-sm border border-gray-100 text-sm text-gray-600 font-medium leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Notice Section */}
            <div className="bg-black py-16 border-t-4 border-[#024ad8] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#024ad8]/5 rounded-full blur-[100px] -ml-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex gap-5 items-start">
                        <Info className="text-[#024ad8] flex-shrink-0 mt-1" size={22} />
                        <div>
                            <h3 className="text-sm font-bold mb-3 text-white">Important Notice</h3>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                Product availability, pricing, and delivery timelines are subject to change without prior notice. Please verify all details before placing an order. Manufacturer warranties are handled directly by the respective brand and may vary by product.
                            </p>
                            <p className="text-xs text-gray-500 font-medium mt-4">
                                Delivery estimates are approximate and may vary based on your location.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
