import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

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
        <div className="bg-white text-black font-sans min-h-screen">
            
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920"
                        alt="FAQs Background"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <HelpCircle className="mx-auto mb-6 text-primary-orange" size={56} />
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Clear and simple answers about our printers, ink, toner, and accessories.
                    </p>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
                                openIndex === index
                                    ? 'shadow-md border-primary-orange/50'
                                    : 'hover:border-gray-300'
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="text-primary-orange flex-shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0" size={20} />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Important Notice */}
            <div className="bg-orange-50 py-12 border-t border-orange-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-xl font-bold mb-4 text-primary-orange uppercase tracking-wide">
                        Important Notice
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Product availability, pricing, specifications, and delivery timelines are subject to change without prior notice. Please verify all current details before completing your purchase. Warranty coverage is provided directly by the manufacturer and may vary by product.
                    </p>
                    <p className="text-gray-500 text-xs max-w-3xl mx-auto">
                        Delivery timelines are estimates and may differ based on location, product availability, and selected shipping method. Express delivery options are available only in select service areas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQs;