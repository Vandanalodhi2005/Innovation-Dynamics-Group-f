import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Info, CheckCircle2 } from 'lucide-react';

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
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you shortly!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white text-black font-sans">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none">
                    <Mail size={500} className="absolute -top-20 -left-20" />
                </div>

                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1920"
                        alt="Contact Support"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">Contact Us</h1>
                        <div className="w-24 h-1.5 bg-primary-orange mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                            At Innovation Dynamics Group LLC, we make it simple for customers to reach us with product inquiries, order-related questions, or general information about our printers and printing supplies.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left Side: Contact Form & Welcome Message */}
                    <div className="space-y-12">
                        <div className="prose prose-lg text-gray-600">
                            <p className="text-lg leading-relaxed">
                                Our goal is to provide clear, friendly communication and a smooth experience for every shopper. We welcome messages from home users, students, professionals, and businesses looking for reliable printers, Ink & Toner, and printing accessories.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Send className="text-primary-orange" size={24} />
                                Send Us a Message
                            </h2>
                            <p className="text-gray-600 mb-8">
                                If you prefer online communication, you can also reach us through the contact form below.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-orange outline-none transition-all bg-white"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-orange outline-none transition-all bg-white"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-orange outline-none transition-all bg-white"
                                        placeholder="Product Inquiry"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Your Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-orange outline-none transition-all bg-white resize-none"
                                        placeholder="How can we help you today?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary-orange hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Contact Info, Hours, Disclaimer */}
                    <div className="space-y-10">
                        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

                        <div className="space-y-8">
                            {/* Email */}
                            <div className="flex gap-6 items-start">
                                <div className="bg-orange-50 p-4 rounded-2xl">
                                    <Mail className="text-primary-orange" size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
                                    <p className="text-primary-orange font-bold text-lg mb-1">support@innovationdynamicsgroup.com</p>
                                    <p className="text-gray-500 text-sm italic">We typically respond within one business day.</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-6 items-start">
                                <div className="bg-orange-50 p-4 rounded-2xl">
                                    <Phone className="text-primary-orange" size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                    <p className="text-primary-orange font-bold text-lg mb-1">+1 (651) 815-4630</p>
                                    <p className="text-gray-500 text-sm">Clear product information and purchasing guidance.</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex gap-6 items-start">
                                <div className="bg-orange-50 p-4 rounded-2xl">
                                    <MapPin className="text-primary-orange" size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Business Address</h3>
                                    <p className="text-gray-600 font-medium">11397 Quincy St NE, Blaine, MN 55434</p>
                                    <p className="text-gray-500 text-sm mt-1">Our registered business location in Minnesota.</p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Clock className="text-primary-orange" size={24} />
                                Business Hours
                            </h3>
                            <div className="space-y-3 font-medium text-gray-300">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Mon – Fri</span>
                                    <span className="text-white">9:00 AM – 6:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Saturday</span>
                                    <span className="text-white">10:00 AM – 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="text-orange-400">Closed</span>
                                </div>
                            </div>
                            <p className="mt-4 text-xs text-gray-500 italic">All times CST</p>
                        </div>

                        {/* What You Can Contact Us For */}
                        <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                            <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">What You Can Contact Us For</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Questions about printers",
                                    "Questions about Ink & Toner",
                                    "Printing accessories",
                                    "Order-related inquiries",
                                    "Product availability",
                                    "General store information"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-primary-orange" />
                                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex gap-4 p-4 bg-orange-100/50 rounded-xl border border-orange-200">
                                <Info className="text-primary-orange flex-shrink-0" size={20} />
                                <p className="text-xs text-gray-600 font-medium leading-relaxed italic">
                                    We only provide product and purchase-related information, not any technical or operational assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Slogan */}
            <div className="py-16 text-center border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">We’re Here to Make Printing Shopping Easy</h3>
                    <p className="text-gray-600 italic text-lg leading-relaxed">
                        At Innovation Dynamics Group LLC, our focus is on delivering clear information, dependable products, and a smooth customer experience. We value your time and are always happy to assist with product-related questions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
