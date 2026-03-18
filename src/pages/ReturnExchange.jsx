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
            <div className="bg-white min-h-screen pt-48 pb-32 font-sans">
            <div className="max-w-xl mx-auto px-4 text-center">
                <div className="w-32 h-32 bg-[#024ad8]/10 rounded-sm flex items-center justify-center mx-auto mb-12 border border-[#024ad8]/20 shadow-2xl">
                    <CheckCircle className="text-[#024ad8]" size={56} />
                </div>
                <h1 className="text-5xl font-extrabold mb-8 tracking-tighter uppercase">TRANSMISSION RECEIVED</h1>
                <p className="text-gray-500 mb-16 leading-relaxed font-extrabold uppercase tracking-[0.2em] text-sm">
                    THANK YOU, {formData.fullName.toUpperCase()}. WE HAVE LOGGED YOUR REQUEST FOR ORDER <span className="text-[#024ad8]">#{formData.orderNumber}</span>. OUR PROCUREMENT TEAM WILL RESPOND WITHIN 24 BUSINESS HOURS.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="bg-black hover:bg-[#024ad8] text-white font-extrabold py-5 px-12 rounded-sm transition-all uppercase tracking-[0.3em] text-[10px] shadow-2xl"
                >
                    RETURN TO TERMINAL
                </button>
            </div>
        </div>
    );
}

return (
    <div className="bg-white text-black font-sans min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-black text-white py-32 md:py-48 overflow-hidden border-b-8 border-[#024ad8]">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
                    alt="Return Exchange Background"
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-4 text-[#024ad8] text-[10px] font-extrabold mb-10 tracking-[0.4em] uppercase bg-white/5 backdrop-blur-sm px-5 py-2 rounded-sm border border-white/10">
                        <RotateCcw size={18} /> LOGISTICS REVERSAL PROTOCOL
                    </div>
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-10 tracking-tighter text-white uppercase leading-[0.9]">RETURN & <br/> <span className="text-[#024ad8]">EXCHANGE</span></h1>
                    <div className="w-24 h-2 bg-[#024ad8] mb-12 mx-auto md:mx-0 shadow-xl shadow-[#024ad8]/20"></div>
                    <p className="text-lg md:text-xl text-gray-500 font-bold leading-relaxed mb-12 uppercase tracking-[0.2em] max-w-2xl">
                        A STRUCTURED FRAMEWORK FOR MANAGING PRODUCT RETURNS AND HARDWARE EXCHANGES.
                    </p>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">

                {/* Policy Details Column */}
                <div className="space-y-24">
                    <section className="space-y-12">
                        <h2 className="text-4xl font-extrabold flex items-center gap-8 text-black uppercase tracking-tighter">
                            <span className="bg-[#024ad8] text-white w-16 h-16 rounded-sm flex items-center justify-center text-2xl shadow-xl shadow-[#024ad8]/20">01</span>
                            ELIGIBILITY
                        </h2>
                        <div className="space-y-8">
                            <div className="p-10 bg-[#F8F9FA] rounded-sm border border-gray-100 shadow-inner">
                                <h4 className="font-extrabold text-black mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.3em]">
                                    <CheckCircle className="text-[#024ad8]" size={16} /> VALID RETURN CRITERIA
                                </h4>
                                <ul className="grid grid-cols-1 gap-4 text-[11px] text-gray-500 font-extrabold uppercase tracking-widest">
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#024ad8]"></div> UNUSED AND UNOPENED PRODUCTS</li>
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#024ad8]"></div> ORIGINAL PACKAGING INTACT</li>
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#024ad8]"></div> WRONG ITEMS RECEIVED</li>
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#024ad8]"></div> DAMAGE REPORTED WITHIN 5 DAYS</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-white rounded-sm border border-red-100 shadow-xl">
                                <h4 className="font-extrabold text-red-600 mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.3em]">
                                    <AlertCircle size={16} /> RESTRICTED ITEMS
                                </h4>
                                <ul className="space-y-4 text-[11px] text-gray-400 font-extrabold uppercase tracking-widest">
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-red-600"></div> OPENED INK & TONER CARTRIDGES</li>
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-red-600"></div> PRODUCTS WITH BROKEN SEALS</li>
                                    <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-red-600"></div> USED OR CUSTOM-ORDER ITEMS</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-12">
                        <h2 className="text-4xl font-extrabold flex items-center gap-8 text-black uppercase tracking-tighter">
                            <span className="bg-black text-white w-16 h-16 rounded-sm flex items-center justify-center text-2xl shadow-xl">02</span>
                            OPERATIONAL RULES
                        </h2>
                        <div className="space-y-12">
                            <div className="flex gap-10 group">
                                <div className="bg-[#F8F9FA] p-6 rounded-sm h-fit border border-gray-100 flex-shrink-0 group-hover:bg-[#024ad8]/5 group-hover:border-[#024ad8]/20 transition-all"><ShieldCheck className="text-[#024ad8]" size={32} /></div>
                                <div>
                                    <h4 className="font-extrabold text-xl mb-4 uppercase tracking-tighter">DAMAGED HARDWARE</h4>
                                    <p className="text-[11px] text-gray-500 font-extrabold uppercase tracking-widest leading-relaxed italic">REPORT WITHIN 5 BUSINESS DAYS WITH PHOTOGRAPHIC EVIDENCE. WE WILL INITIATE REPLACEMENT PROTOCOLS IMMEDIATELY.</p>
                                </div>
                            </div>
                            <div className="flex gap-10 group">
                                <div className="bg-[#F8F9FA] p-6 rounded-sm h-fit border border-gray-100 flex-shrink-0 group-hover:bg-[#024ad8]/5 group-hover:border-[#024ad8]/20 transition-all"><FileText className="text-[#024ad8]" size={32} /></div>
                                <div>
                                    <h4 className="font-extrabold text-xl mb-4 uppercase tracking-tighter">FISCAL RECONCILIATION</h4>
                                    <p className="text-[11px] text-gray-500 font-extrabold uppercase tracking-widest leading-relaxed italic">CUSTOMER IS RESPONSIBLE FOR LOGISTICS COSTS UNLESS OPERATIONAL ERROR OCCURRED. RESTOCKING FEES MAY BE APPLIED.</p>
                                </div>
                            </div>
                            <div className="flex gap-10 group">
                                <div className="bg-[#F8F9FA] p-6 rounded-sm h-fit border border-gray-100 flex-shrink-0 group-hover:bg-[#024ad8]/5 group-hover:border-[#024ad8]/20 transition-all"><MapPin className="text-[#024ad8]" size={32} /></div>
                                <div className="space-y-6">
                                    <h4 className="font-extrabold text-xl mb-4 uppercase tracking-tighter">LOGISTICS HUB</h4>
                                    <p className="text-[13px] text-black font-extrabold uppercase tracking-[0.1em] leading-tight">
                                        INNOVATION DYNAMICS GROUP LLC<br />
                                        11397 QUINCY ST NE, BLAINE, MN 55434
                                    </p>
                                    <div className="inline-block px-4 py-2 bg-[#024ad8] text-white text-[9px] font-extrabold uppercase tracking-[0.3em] rounded-sm animate-pulse">
                                        DO NOT SHIP WITHOUT DIRECT AUTHORIZATION
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Form Column */}
                <div id="form-section">
                    <div className="bg-white p-12 md:p-16 rounded-sm border border-gray-100 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#024ad8]/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                        <div className="relative z-10 mb-16">
                            <h2 className="text-4xl font-extrabold mb-6 uppercase tracking-tighter">INITIATE REQUEST</h2>
                            <p className="text-gray-400 font-extrabold uppercase tracking-[0.3em] text-[10px]">REVERSAL COMMAND TERMINAL</p>

                            {error && (
                                <div className="mt-8 p-6 bg-red-50 border-l-[6px] border-red-600 text-red-600 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-4">
                                    <AlertCircle size={20} />
                                    {error.toUpperCase()}
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">IDENTITY NAME</label>
                                    <input
                                        required
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-[#F8F9FA] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-extrabold uppercase tracking-widest placeholder:text-gray-300"
                                        placeholder="INPUT FULL NAME"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">COMMS CHANNEL</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#F8F9FA] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-extrabold uppercase tracking-widest placeholder:text-gray-300"
                                        placeholder="INPUT EMAIL ADDRESS"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">ORDER ID</label>
                                    <input
                                        required
                                        name="orderNumber"
                                        value={formData.orderNumber}
                                        onChange={handleChange}
                                        className="w-full bg-[#F8F9FA] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-extrabold uppercase tracking-widest placeholder:text-gray-300"
                                        placeholder="#IDG-XXXX"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">HARDWARE MODEL</label>
                                    <input
                                        required
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleChange}
                                        className="w-full bg-[#F8F9FA] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-extrabold uppercase tracking-widest placeholder:text-gray-300"
                                        placeholder="E.G. HP LASERJET M110WE"
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">PRIMARY REASON</label>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        "RECEIVED WRONG ITEM",
                                        "ITEM ARRIVED DAMAGED",
                                        "EXCHANGE REQUEST",
                                        "RETURN UNUSED PRODUCT",
                                        "MISSING COMPONENTS",
                                        "OTHER"
                                    ].map((reason, idx) => (
                                        <label key={idx} className="flex items-center gap-4 group cursor-pointer p-4 border border-gray-50 rounded-sm hover:border-[#024ad8] transition-all bg-[#F8F9FA]">
                                            <input
                                                type="radio"
                                                name="reason"
                                                value={reason}
                                                onChange={handleChange}
                                                className="w-4 h-4 accent-[#024ad8]"
                                            />
                                            <span className="text-[10px] font-extrabold text-gray-400 group-hover:text-black transition-colors uppercase tracking-[0.1em]">{reason}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">DESIRED RESOLUTION</label>
                                <select
                                    name="preferredResolution"
                                    value={formData.preferredResolution}
                                    onChange={handleChange}
                                    className="w-full bg-[#F8F9FA] border border-gray-100 rounded-sm px-6 py-5 text-[11px] focus:outline-none focus:border-[#024ad8] focus:bg-white transition-all font-extrabold uppercase tracking-widest"
                                >
                                    <option value="">SELECT OPTION</option>
                                    <option value="Return for Refund">RETURN FOR REFUND</option>
                                    <option value="Exchange for Same Item">EXCHANGE FOR SAME ITEM</option>
                                    <option value="Exchange for Different Item">EXCHANGE FOR DIFFERENT ITEM</option>
                                </select>
                            </div>

                            <div className="p-10 border-2 border-dashed border-gray-100 rounded-sm text-center group hover:border-[#024ad8] transition-all bg-[#F8F9FA]">
                                <Camera className="mx-auto mb-6 text-gray-300 group-hover:text-[#024ad8] transition-colors" size={40} />
                                <p className="text-[10px] font-extrabold text-gray-300 uppercase tracking-[0.3em] mb-4">SUPPORTING EVIDENCE</p>
                                <input type="file" className="hidden" id="file-upload" />
                                <label htmlFor="file-upload" className="inline-block bg-black text-white px-8 py-3 text-[9px] font-extrabold uppercase tracking-[0.3em] cursor-pointer hover:bg-[#024ad8] transition-all shadow-xl">UPLOAD PHOTOS</label>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black hover:bg-[#024ad8] text-white font-extrabold py-6 rounded-sm transition-all uppercase tracking-[0.4em] text-[11px] flex items-center justify-center gap-4 group shadow-2xl disabled:opacity-50"
                            >
                                {loading ? 'SENDING...' : 'TRANSMIT REQUEST'}
                                {!loading && <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Contact Section */}
        <div className="bg-[#F8F9FA] py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 text-center space-y-16">
                <h3 className="text-4xl font-extrabold uppercase tracking-tighter">PRE-SUBMISSION SUPPORT</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="space-y-6 group">
                        <div className="p-8 bg-white border border-gray-50 rounded-sm shadow-xl inline-block group-hover:border-[#024ad8] transition-all">
                            <Mail className="text-[#024ad8]" size={40} />
                        </div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-gray-300">ELECTRONIC</p>
                        <p className="font-extrabold text-black uppercase tracking-widest text-sm">support@innovationdynamicsgroup.com</p>
                    </div>
                    <div className="space-y-6 group">
                        <div className="p-8 bg-white border border-gray-50 rounded-sm shadow-xl inline-block group-hover:border-[#024ad8] transition-all">
                            <Phone className="text-[#024ad8]" size={40} />
                        </div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-gray-300">VOICE</p>
                        <p className="font-extrabold text-black uppercase tracking-widest text-sm">+1 (651) 815-4630</p>
                    </div>
                    <div className="space-y-6 group">
                        <div className="p-8 bg-white border border-gray-50 rounded-sm shadow-xl inline-block group-hover:border-[#024ad8] transition-all">
                            <MapPin className="text-[#024ad8]" size={40} />
                        </div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-gray-300">LOCATION</p>
                        <p className="font-extrabold text-black uppercase tracking-widest text-sm">BLAINE, MINNESOTA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ReturnExchange;
