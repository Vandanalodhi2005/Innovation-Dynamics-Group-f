import React, { useState } from 'react';
import { RotateCcw, ArrowRight, ShieldCheck, Mail, Phone, MapPin, CheckCircle, AlertCircle, FileText, Camera, Send } from 'lucide-react';

const ReturnExchange = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        orderNumber: '',
        productName: '',
        reason: '',
        otherReason: '',
        preferredResolution: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5003/api';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_URL}/returns`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    orderNumber: formData.orderNumber,
                    productName: formData.productName,
                    reason: formData.reason,
                    preferredResolution: formData.preferredResolution,
                    details: formData.details || formData.otherReason // Map to details field in backend
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Failed to submit request');
            }

            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            console.error("Submission error:", err);
            setError(err.message || 'An error occurred while submitting your request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (checked ? [...(prev[name] || []), value] : prev[name].filter(v => v !== value)) : value
        }));
    };

    if (submitted) {
        return (
            <div className="bg-white min-h-screen pt-32 pb-20 font-sans">
                <div className="max-w-xl mx-auto px-4 text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl">
                        <CheckCircle className="text-green-600" size={48} />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 italic">Request Received!</h1>
                    <p className="text-gray-600 mb-10 leading-relaxed font-medium italic">
                        Thank you, {formData.fullName}. We've received your return/exchange request for order #{formData.orderNumber}. Our team will review the details and get back to you at {formData.email} within one business day.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="bg-primary-orange hover:bg-black text-white font-bold py-4 px-10 rounded-xl transition-all uppercase tracking-widest text-sm"
                    >
                        Back to Form
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-black font-sans min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
                        alt="Return Exchange Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <RotateCcw className="mx-auto mb-6 text-primary-orange" size={56} />
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white italic lowercase">
                        return & exchange
                    </h1>
                    <div className="w-32 h-1.5 bg-primary-orange mb-8 rounded-full mx-auto"></div>
                    <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto italic">
                        Our goal is to keep your experience simple, transparent, and hassle-free.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Policy Details Column */}
                    <div className="space-y-16">
                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold italic underline decoration-primary-orange decoration-4 flex items-center gap-4">
                                <span className="bg-primary-orange text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl not-italic font-black">1</span>
                                Eligibility
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 italic">✓ Eligible Items (within 30 days)</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 font-medium italic">
                                        <li>• Unused and unopened products</li>
                                        <li>• Original packaging intact</li>
                                        <li>• Wrong items received (unused)</li>
                                        <li>• Shipping damage (Report in 5 days)</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 italic">✕ Non-Returnable</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 font-medium italic">
                                        <li>• Opened Ink & Toner cartridges</li>
                                        <li>• Products with broken seals</li>
                                        <li>• Used items or custom-order items</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold italic underline decoration-primary-orange decoration-4 flex items-center gap-4">
                                <span className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl not-italic font-black">2</span>
                                Process & Details
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="bg-gray-50 p-4 rounded-xl h-fit border border-gray-100 flex-shrink-0"><ShieldCheck className="text-primary-orange" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 italic">Damaged Items</h4>
                                        <p className="text-sm text-gray-600 font-medium italic leading-relaxed">Report within 5 business days with photos. We will guide you with a replacement or resolution.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="bg-gray-50 p-4 rounded-xl h-fit border border-gray-100 flex-shrink-0"><FileText className="text-primary-orange" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 italic">Refunds & Costs</h4>
                                        <p className="text-sm text-gray-600 font-medium italic leading-relaxed">Customer pays return shipping unless error was ours. Shipping fees are non-refundable. Restocking fees may apply.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="bg-gray-50 p-4 rounded-xl h-fit border border-gray-100 flex-shrink-0"><MapPin className="text-primary-orange" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 italic">Return Address</h4>
                                        <p className="text-sm text-gray-700 font-bold italic leading-relaxed">
                                            Innovation Dynamics Group LLC<br />
                                            11397 Quincy St NE, Blaine, MN 55434
                                        </p>
                                        <p className="text-xs text-primary-orange font-bold mt-2 uppercase tracking-widest italic animate-pulse">DO NOT SHIP WITHOUT APPROVAL</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Form Column */}
                    <div id="form-section">
                        <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <div className="relative z-10 mb-10 text-center md:text-left">
                                <h2 className="text-3xl font-bold mb-4 italic">Start Your Request</h2>
                                <p className="text-gray-500 font-medium italic text-sm">Please complete the form below to begin the process.</p>

                                {error && (
                                    <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm italic font-medium flex items-center gap-2">
                                        <AlertCircle size={18} />
                                        {error}
                                    </div>
                                )}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            required
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-all font-medium italic"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-all font-medium italic"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Order Number</label>
                                        <input
                                            required
                                            name="orderNumber"
                                            value={formData.orderNumber}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-all font-medium italic placeholder:not-italic"
                                            placeholder="#IDG-XXXX"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Product Model</label>
                                        <input
                                            required
                                            name="productName"
                                            value={formData.productName}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-all font-medium italic"
                                            placeholder="e.g. HP LaserJet M110we"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Reason for Request</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 px-1">
                                        {[
                                            "Received wrong item",
                                            "Item arrived damaged",
                                            "Want to exchange",
                                            "Want to return unused",
                                            "Missing items",
                                            "Other"
                                        ].map((reason, idx) => (
                                            <label key={idx} className="flex items-center gap-3 group cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="reason"
                                                    value={reason}
                                                    onChange={handleChange}
                                                    className="w-4 h-4 accent-primary-orange border-gray-300 rounded focus:ring-primary-orange"
                                                />
                                                <span className="text-sm font-medium text-gray-600 italic group-hover:text-primary-orange transition-colors">{reason}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Preferred Resolution</label>
                                    <select
                                        name="preferredResolution"
                                        value={formData.preferredResolution}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-all font-medium italic appearance-none"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Return for Refund">Return for Refund</option>
                                        <option value="Exchange for Same Item">Exchange for Same Item</option>
                                        <option value="Exchange for Different Item">Exchange for Different Item</option>
                                    </select>
                                </div>

                                <div className="p-6 bg-white border border-dashed border-gray-300 rounded-2xl text-center group hover:border-primary-orange transition-colors">
                                    <Camera className="mx-auto mb-3 text-gray-400 group-hover:text-primary-orange transition-colors" size={32} />
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Upload Photos</p>
                                    <p className="text-[10px] text-gray-400 italic font-medium italic">Recommended for damaged or incorrect items</p>
                                    <input type="file" className="hidden" id="file-upload" />
                                    <label htmlFor="file-upload" className="mt-4 inline-block text-xs font-bold text-primary-orange cursor-pointer hover:underline uppercase">Choose File</label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-black hover:bg-primary-orange text-white font-bold py-5 rounded-xl transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2 group shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Submitting...' : 'Submit Request'}
                                    {!loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Contact Section */}
            <div className="bg-gray-50 py-24 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h3 className="text-3xl font-bold italic underline decoration-primary-orange decoration-4">Need Help Before Submitting?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <Mail className="mx-auto text-primary-orange mb-4" size={32} />
                            <p className="text-sm font-bold lowercase italic text-gray-400">Email us</p>
                            <p className="font-bold text-gray-900">support@innovationdynamicsgroup.com</p>
                        </div>
                        <div className="space-y-2">
                            <Phone className="mx-auto text-primary-orange mb-4" size={32} />
                            <p className="text-sm font-bold lowercase italic text-gray-400">Call us</p>
                            <p className="font-bold text-gray-900">+1 (651) 815-4630</p>
                        </div>
                        <div className="space-y-2">
                            <MapPin className="mx-auto text-primary-orange mb-4" size={32} />
                            <p className="text-sm font-bold lowercase italic text-gray-400">Visit / Mail</p>
                            <p className="font-bold text-gray-900">Blaine, Minnesota</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnExchange;
