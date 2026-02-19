import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: "1. What is Innovation Dynamics Group LLC?",
            answer: "Innovation Dynamics Group LLC is an independent e-commerce retailer specializing in printers, ink, toner, and printing accessories. We provide a curated selection of products sourced from trusted suppliers to meet home and business printing needs."
        },
        {
            question: "2. Are you affiliated with any printer brands?",
            answer: "No, we operate as a third-party online retailer and are not affiliated with, endorsed by, or sponsored by any printer manufacturer or brand unless explicitly stated. All product names and logos used are for identification purposes only."
        },
        {
            question: "3. How are product warranties handled?",
            answer: "Warranty coverage is provided directly by the manufacturer and may vary by product to product. We do not provide or alter manufacturer warranties but can assist you with product information to help you make informed decisions."
        },
        {
            question: "4. Are the product images and descriptions accurate?",
            answer: "Products displayed on our website are for representation purposes only. While we strive for accuracy, specifications and details are subject to change without prior notice. Please verify currently available details before purchase."
        },
        {
            question: "5. Where do your products come from?",
            answer: "All items offered are sourced from trusted and verified dealers or suppliers to ensure authenticity and quality."
        },
        {
            question: "6. Can I track my order?",
            answer: "Yes, once your order is shipped, you will receive a tracking number via email. You can also visit our 'Order Tracking' page for real-time updates."
        },
        {
            question: "7. What payment methods do you accept?",
            answer: "We accept major credit cards (Visa, MasterCard, American Express, Discover) and secure online payment methods to ensure a safe checkout experience."
        },
        {
            question: "8. What is your return and refund policy?",
            answer: "Please refer to our 'Return & Refund Policy' page for detailed information on eligible returns, timelines, and processing steps."
        },
        {
            question: "9. Do you offer international shipping?",
            answer: "Delivery timelines and options vary by location. Express delivery is available in select service areas. Please check our shipping policy during checkout for availability in your region."
        },
        {
            question: "10. How can I contact customer support?",
            answer: "You can reach us via email at support@innovationdynamicsgroup.com or by phone at +1 (651) 815-4630. We are here to assist you with any inquiries."
        },
        {
            question: "11. Are prices on the website final?",
            answer: "Prices are subject to change without prior notice based on market conditions and availability. Promotional discounts are subject to verification and terms."
        },
        {
            question: "12. Can I cancel or modify my order after placing it?",
            answer: "Orders are processed quickly. If you need to make changes, please contact our support team immediately. Once an order has shipped, it cannot be modified."
        },
        {
            question: "13. Do you price-match with competitors?",
            answer: "Price matching and promotional discounts are subject to verification and applicable terms and conditions. Contact support for specific inquiries."
        },
        {
            question: "14. How do I know if a product is in stock?",
            answer: "Product availability is updated regularly on our website. However, stock levels can change without notice. If an item becomes unavailable after you order, we will notify you promptly."
        }
    ];

    return (
        <div className="bg-white text-black font-sans min-h-screen">
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                {/* Background Image Overlay */}
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Answers to your common questions about our products and services.
                    </p>
                </div>
            </div>

            {/* FAQs Accordion */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-primary-orange/50' : 'hover:border-gray-300'}`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-gray-900 pr-4">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-primary-orange flex-shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0" size={20} />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
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
                    <h3 className="text-xl font-bold mb-4 text-primary-orange uppercase tracking-wide">Important Notice</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Product availability, pricing, specifications, and delivery timelines are subject to change without prior notice. Please verify all current details before completing your purchase. Warranty coverage is provided directly by the manufacturer and may vary by product.
                    </p>
                    <p className="text-gray-500 text-xs max-w-3xl mx-auto">
                        Delivery timelines are estimates and may differ based on location, product availability, and selected shipping method. Express delivery options are available only in select service areas. Price matching and promotional discounts are subject to verification and applicable terms and conditions.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default FAQs;
