import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you shortly!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white text-black font-sans">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1920"
                        alt="Contact Support"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">Contact Us</h1>
                    <div className="w-24 h-1.5 bg-primary-orange mx-auto mb-8 rounded-full"></div>
                    <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        We’re here for you. Reach out anytime — our team is ready to assist.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Form */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold mb-4">We’re here to help</h2>
                            <p className="text-gray-600 text-lg">
                                With product questions, order support, or general inquiries.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message (optional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Details about your inquiry..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto bg-primary-orange hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-10 lg:pl-10 lg:border-l lg:border-gray-100">

                        {/* Phone */}
                        <div className="flex items-start gap-6 group">
                            <div className="bg-orange-50 p-4 rounded-xl group-hover:bg-primary-orange transition-colors duration-300">
                                <Phone size={32} className="text-primary-orange group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                                <p className="text-primary-orange font-bold text-lg mb-2 cursor-pointer hover:underline">+1 (651) 815-4630</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Speak directly with our customer care team for product questions, troubleshooting help, or order updates during business hours.
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-6 group">
                            <div className="bg-orange-50 p-4 rounded-xl group-hover:bg-primary-orange transition-colors duration-300">
                                <Mail size={32} className="text-primary-orange group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                                <p className="text-primary-orange font-bold text-lg mb-2 cursor-pointer hover:underline">support@innovationdynamicsgroup.com</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our team responds quickly to all inquiries. You will receive a helpful and detailed reply as soon as possible.
                                </p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-6 group">
                            <div className="bg-orange-50 p-4 rounded-xl group-hover:bg-primary-orange transition-colors duration-300">
                                <MapPin size={32} className="text-primary-orange group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Mailing Address</h3>
                                <div className="text-gray-600 leading-relaxed font-medium">
                                    <p>Innovation Dynamics Group</p>
                                    <p>11397 Quincy St NE</p>
                                    <p>Blaine, Minnesota, 55434</p>
                                    <p>United States</p>
                                </div>
                            </div>
                        </div>

                    </div>
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

export default Contact;
