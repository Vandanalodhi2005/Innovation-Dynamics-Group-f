import React, { useState } from 'react';
import { RotateCcw, ArrowRight, ShieldCheck, Mail, Phone, MapPin, CheckCircle, AlertCircle, FileText, Camera, Send, Layout, Info, ShoppingCart, Clock, Truck, Package } from 'lucide-react';

const ReturnExchange = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        orderNumber: '',
        reason: '',
        preferredResolution: '',
        details: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const sections = [
        { id: 'highlights', label: '1. Service Matrix', icon: <ShieldCheck size={15} /> },
        { id: 'eligibility', label: '2. Return Eligibility', icon: <CheckCircle size={15} /> },
        { id: 'restricted', label: '3. Restricted Items', icon: <AlertCircle size={15} /> },
        { id: 'process', label: '4. Return Protocol', icon: <RotateCcw size={15} /> },
        { id: 'form', label: '5. Initiate Request', icon: <Send size={15} /> },
        { id: 'support', label: '6. Support Hub', icon: <Phone size={15} /> }
    ];

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
                    orderNumber: formData.orderNumber,
                    reason: formData.reason,
                    preferredResolution: formData.preferredResolution,
                    details: formData.details
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
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (submitted) {
        return (
            <div className="bg-white min-h-screen pt-48 pb-32 font-sans text-left">
                <div className="max-w-xl mx-auto px-4 text-center">
                    <div className="w-32 h-32 bg-[#024ad8]/10 rounded-sm flex items-center justify-center mx-auto mb-12 border border-[#024ad8]/20 shadow-2xl">
                        <CheckCircle className="text-[#024ad8]" size={56} />
                    </div>
                    <h1 className="text-5xl font-extrabold mb-8 tracking-tighter uppercase italic text-left">TRANSMISSION RECEIVED</h1>
                    <p className="text-gray-500 mb-16 leading-relaxed font-extrabold uppercase tracking-[0.2em] text-sm text-center">
                        THANK YOU. WE HAVE LOGGED YOUR RETURN REQUEST FOR ORDER <span className="text-[#024ad8]">#{formData.orderNumber}</span>. OUR LOGISTICS TEAM WILL RESPOND WITHIN 24 BUSINESS HOURS.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="bg-black hover:bg-[#024ad8] text-white font-extrabold py-5 px-12 rounded-sm transition-all uppercase tracking-[0.3em] text-[10px] shadow-2xl italic"
                    >
                        RETURN TO TERMINAL
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-black min-h-screen font-sans text-left">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
                <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none text-left">
                    <RotateCcw size={500} className="absolute -top-20 -left-20" />
                </div>

                <div className="absolute inset-0 z-0 text-left">
                    <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
                        alt="Logistics Reversal Background"
                        className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-left">
                    <div className="max-w-3xl text-left">
                        <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 text-left">
                            <RotateCcw size={14} /> Logistics Reversal
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic text-left">
                            Return & <br/><span className="text-[#024ad8]">Exchange</span>
                        </h1>
                        <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
                        <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl text-left">
                            Innovation Dynamics Group LLC provides a transparent framework for managing product returns and hardware exchanges.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] text-left">
                            {/* <p>Last Updated: March 25, 2026</p>
                            <p>Status: operational</p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 text-left">

                    {/* Sidebar Navigation - Sticky */}
                    <div className="hidden lg:block lg:col-span-1 text-left">
                        <div className="sticky top-28 space-y-6 text-left">
                            <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">Module Navigation</h3>
                            <nav className="space-y-1 text-left">
                                {sections.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all hover:bg-[#024ad8] hover:text-white text-gray-500 font-semibold text-[13px] group border border-transparent hover:shadow-md text-left"
                                    >
                                        <span className="text-[#024ad8] group-hover:text-white transition-colors text-left">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-20 text-gray-600 text-left">

                        {/* Top Highlights Matched to Icons */}
                        <section id="highlights" className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                             {[
                                { title: "30-Day Window", desc: "Eligible items may be returned within 30 days of delivery.", icon: <Clock size={28} /> },
                                { title: "Prepaid Labels", desc: "Innovation Dynamics Group LLC provides prepaid shipping for approved returns.", icon: <Truck size={28} /> },
                                { title: "Fast Refunds", desc: "Processed within 3–5 business days after inspection.", icon: <RotateCcw size={28} /> }
                             ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 p-8 rounded-sm border border-gray-100 group hover:border-[#024ad8] transition-all text-left">
                                    <div className="text-[#024ad8] mb-6 group-hover:scale-110 transition-transform text-left">{item.icon}</div>
                                    <h4 className="text-black font-black uppercase italic mb-3 text-lg">{item.title}</h4>
                                    <p className="text-xs text-gray-400 font-bold leading-relaxed italic uppercase">{item.desc}</p>
                                </div>
                             ))}
                        </section>

                        {/* Eligibility Matrix */}
                        <section id="eligibility" className="space-y-10 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">01</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Return Eligibility</h2>
                            </div>

                            <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-xl shadow-gray-50 text-left">
                                <p className="text-[15px] font-semibold italic text-gray-600 mb-8 border-l-4 border-[#024ad8] pl-6">
                                    Items are eligible for return if they are unused, unopened, and in original packaging. This includes printers, ink/toner cartridges, paper products, and accessories.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-8">
                                        <h4 className="font-extrabold text-black flex items-center gap-4 text-xs uppercase tracking-[0.3em] italic">
                                            <ShieldCheck className="text-[#024ad8]" size={16} /> Special Conditions
                                        </h4>
                                        <ul className="space-y-4 text-[11px] text-gray-500 font-extrabold uppercase tracking-widest text-left">
                                            <li className="flex items-start gap-4">
                                                <CheckCircle className="text-[#024ad8] shrink-0" size={14} />
                                                <span>Defective or damaged items must be reported within 30 days.</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <CheckCircle className="text-[#024ad8] shrink-0" size={14} />
                                                <span>Opened ink/toner cartridges are only eligible if defective.</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <CheckCircle className="text-[#024ad8] shrink-0" size={14} />
                                                <span>Wrong products received are eligible for full exchange or refund.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-black text-white p-8 rounded-sm shadow-xl text-left">
                                        <h4 className="font-extrabold text-[#024ad8] mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.3em] italic">
                                            <ShoppingCart size={16} /> Final Sale Matrix
                                        </h4>
                                        <p className="text-[11px] text-gray-400 font-extrabold uppercase tracking-widest leading-relaxed italic">
                                            Certain promotional or clearance items marked as "Final Sale" are not eligible for reversal or adjustment protocols.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Restricted Items */}
                        <section id="restricted" className="space-y-10 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">02</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Restricted Items</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                {[
                                    "Used or partially opened ink/toner",
                                    "Products missing original packaging",
                                    "Custom, special-order, or personalized items",
                                    "Digital or downloadable products",
                                    "Items missing components or accessories"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center p-6 border border-red-50 bg-red-50/20 rounded-sm text-left">
                                        <AlertCircle className="text-red-600 shrink-0" size={20} />
                                        <p className="text-black font-black text-[10px] uppercase tracking-widest italic">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Exchange Policy */}
                        <section id="exchange" className="space-y-10 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">03</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Exchange Framework</h2>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 space-y-6 text-left">
                                <p className="text-[11px] text-gray-500 font-extrabold uppercase tracking-widest leading-relaxed italic">
                                    • Exchanges are available for defective or incorrect items only.
                                </p>
                                <p className="text-[11px] text-gray-500 font-extrabold uppercase tracking-widest leading-relaxed italic">
                                    • Replacement is subject to individual hardware availability.
                                </p>
                                <p className="text-[11px] text-gray-500 font-extrabold uppercase tracking-widest leading-relaxed italic">
                                    • If a replacement is not available in our logistics hub, a full refund will be issued to the original payment terminal.
                                </p>
                            </div>
                        </section>

                        {/* Rules & Process */}
                        <section id="process" className="space-y-10 text-left">
                            <div className="flex items-center gap-5 text-left text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">04</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Return Protocol</h2>
                            </div>

                            <div className="space-y-8 text-left">
                                <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                                    <h4 className="text-black font-black uppercase italic mb-8 text-sm">Four-Step Logistics Reversal:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                                        {[
                                            "Submit digital request",
                                            "Receive prepaid label",
                                            "Securely pack & ship",
                                            "Audit & refund process"
                                        ].map((step, idx) => (
                                            <div key={idx} className="relative p-6 bg-white border border-gray-100 rounded-sm text-left">
                                                <span className="absolute -top-3 -left-3 w-8 h-8 bg-black text-white flex items-center justify-center font-black italic rounded-sm text-xs">{idx + 1}</span>
                                                <p className="text-[10px] font-black uppercase text-gray-500 italic mt-2">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="bg-white p-10 rounded-sm border border-[#024ad8]/20 shadow-xl text-left">
                                    <h4 className="text-black font-black uppercase italic mb-6 text-sm flex items-center gap-3">
                                        <Package size={18} className="text-[#024ad8]" /> Packaging Requirements
                                    </h4>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed italic text-left">
                                        Items must include all original accessories and manuals. Products must be securely packed to prevent transit damage. Innovation Dynamics Group LLC reserves the right to deny returns damaged due to improper packaging.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Form */}
                        <section id="form" className="space-y-10 text-left">
                            <div className="flex items-center gap-5 text-left">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">05</span>
                                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Initiate Request</h2>
                            </div>

                            <div className="bg-white p-10 md:p-14 rounded-sm border border-gray-100 shadow-2xl relative overflow-hidden text-left">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#024ad8]/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                
                                <div className="relative z-10 mb-12 text-left">
                                    <p className="text-gray-400 font-extrabold uppercase tracking-[0.3em] text-[10px] mb-2 text-left">Operational Interface</p>
                                    <h3 className="text-2xl font-black uppercase italic text-black">Return Request Terminal</h3>
                                    
                                    {error && (
                                        <div className="mt-8 p-6 bg-red-50 border-l-[6px] border-red-600 text-red-600 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-4 text-left">
                                            <AlertCircle size={20} />
                                            {error.toUpperCase()}
                                        </div>
                                    )}
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-10 relative z-10 text-left text-left">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                                        <div className="space-y-4 text-left">
                                            <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em] text-left">Full Name *</label>
                                            <input
                                                required
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-bold uppercase tracking-widest placeholder:text-gray-300 text-left"
                                                placeholder="Legal Identity"
                                            />
                                        </div>
                                        <div className="space-y-4 text-left">
                                            <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em] text-left">Email Address *</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-bold uppercase tracking-widest placeholder:text-gray-300 text-left"
                                                placeholder="Communication Endpoint"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                                        <div className="space-y-4 text-left">
                                            <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em] text-left">Order Number *</label>
                                            <input
                                                required
                                                name="orderNumber"
                                                value={formData.orderNumber}
                                                onChange={handleChange}
                                                className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-bold uppercase tracking-widest placeholder:text-gray-300 text-left"
                                                placeholder="ORD-2026-XXXX"
                                            />
                                        </div>
                                        <div className="space-y-4 text-left">
                                            <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em] text-left">Return Reason *</label>
                                            <select
                                                required
                                                name="reason"
                                                value={formData.reason}
                                                onChange={handleChange}
                                                className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-bold uppercase tracking-widest text-left"
                                            >
                                                <option value="">Select Reason</option>
                                                <option value="Incorrect Item">Received Wrong Item</option>
                                                <option value="Damaged/Defective">Item Arrived Damaged/Defective</option>
                                                <option value="Exchange">Exchange Request</option>
                                                <option value="Unused Return">Return Unused Product</option>
                                                <option value="Incomplete">Missing Components</option>
                                                <option value="Other">Other Issues</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-left">
                                        <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em] text-left">Preferred Resolution *</label>
                                        <select
                                            required
                                            name="preferredResolution"
                                            value={formData.preferredResolution}
                                            onChange={handleChange}
                                            className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-bold uppercase tracking-widest text-left"
                                        >
                                            <option value="">Select Resolution</option>
                                            <option value="Full Refund">Full Refund to Original Payment</option>
                                            <option value="Exchange">Exchange for Same Model</option>
                                            <option value="Store Credit">Operational Store Credit</option>
                                        </select>
                                    </div>

                                    <div className="space-y-4 text-left">
                                        <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em] text-left">Additional Details</label>
                                        <textarea
                                            name="details"
                                            value={formData.details}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-bold uppercase tracking-widest placeholder:text-gray-300 resize-none text-left"
                                            placeholder="Notes for logistics auditing team..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-sm text-left">
                                        <input type="checkbox" required className="mt-1 accent-[#024ad8]" />
                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest italic leading-relaxed text-left">
                                            I agree that my data is collected and stored according to the privacy policy for processing this return request terminal.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#024ad8] hover:bg-black text-white font-extrabold py-6 rounded-sm transition-all uppercase tracking-[0.4em] text-[11px] flex items-center justify-center gap-4 group shadow-2xl shadow-[#024ad8]/20 disabled:opacity-50 italic"
                                    >
                                        {loading ? 'Transmitting...' : 'Submit Return Command'}
                                        {!loading && <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />}
                                    </button>
                                </form>
                            </div>
                        </section>

                        {/* Support Hub */}
                        <section id="support" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden border-t-4 border-[#024ad8] text-left">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#024ad8]/5 rounded-full blur-3xl -mr-32 -mt-32 text-left"></div>
                            <div className="flex items-center gap-5 text-left mb-10">
                                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">06</span>
                                <h2 className="text-3xl font-bold text-white tracking-tight uppercase italic text-left">Support Hub</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                                <div className="space-y-10 text-left">
                                    <div className="flex gap-6 items-start group text-left">
                                        <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                                            <Mail className="text-[#024ad8]" size={24} />
                                        </div>
                                        <div className="text-left text-left">
                                            <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Support Terminal</p>
                                            <p className="text-sm text-white font-medium text-left">support@innovationdynamicsgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start group text-left">
                                        <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                                            <Phone className="text-[#024ad8]" size={24} />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Operational Voice</p>
                                            <p className="text-sm text-white font-bold tracking-tight italic text-left">+1 (651) 815-4630</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group text-left">
                                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                                        <MapPin className="text-[#024ad8]" size={24} />
                                    </div>
                                    <div className="text-left text-left">
                                        <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Headquarters</p>
                                        <p className="text-sm text-white leading-relaxed font-semibold italic text-left text-left">
                                            Innovation Dynamics Group LLC<br />
                                            11397 Quincy St NE<br />
                                            Blaine, MN 55434
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer Status */}
            <div className="bg-gray-50 py-10 border-t border-gray-100 text-left text-left">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed italic text-left text-left">
                        Innovation Dynamics Group LLC © 2026 • Logistics Interface Active • System Secure
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReturnExchange;
