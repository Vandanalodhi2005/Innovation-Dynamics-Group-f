import React, { useState } from 'react';

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
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Failed to submit request');
            }

            setSubmitted(true);
            window.scrollTo(0, 0);
        } catch (err) {
            console.error("Submission error:", err);
            setError(err.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (submitted) {
        return (
            <div className="bg-white min-h-screen pt-32 pb-16 px-6 font-sans text-center">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-black mb-6">Request Received</h1>
                    <p className="text-lg text-gray-600 mb-8 font-medium">
                        Thank you. We have logged your return request for order <strong>#{formData.orderNumber}</strong>. Our team will respond within 24 business hours.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-800 transition-colors"
                    >
                        Return to Form
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4 uppercase tracking-tighter">Return & Exchange Policy</h1>
                    <p className="text-gray-500 text-sm font-medium">Innovation Dynamics Group LLC provides a straightforward framework for managing product returns and hardware exchanges.</p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                        <span>Last Updated: March 25, 2026</span>
                    </div>
                </header>

                <div className="space-y-12 leading-relaxed text-gray-700 font-normal">
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm text-center">
                            <h3 className="font-bold text-black mb-3 text-sm uppercase tracking-wide">30-Day Window</h3>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed">Eligible items may be returned within 30 days of the delivery date, provided they meet the return conditions.</p>
                        </div>
                        <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm text-center">
                            <h3 className="font-bold text-black mb-3 text-sm uppercase tracking-wide">Prepaid Shipping</h3>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed">For approved returns, we provide prepaid return shipping labels. Authorization is required before sending.</p>
                        </div>
                        <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm text-center">
                            <h3 className="font-bold text-black mb-3 text-sm uppercase tracking-wide">Refund Processing</h3>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed">Processed within 3–5 business days after inspection to your original payment method.</p>
                        </div>
                    </section>

                    <section id="form" className="pt-8 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-2 uppercase tracking-tighter">Start a Return or Exchange</h2>
                        <p className="text-sm text-gray-500 mb-8 font-medium italic">Quick Return Request: Fill in the details below and we'll process your request within 24 business hours.</p>
                        
                        {error && (
                            <div className="mb-8 p-4 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider border-l-4 border-red-700">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order Number *</label>
                                    <input
                                        required
                                        name="orderNumber"
                                        value={formData.orderNumber}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 px-4 py-4 text-sm focus:outline-none focus:border-black transition-all rounded-sm font-medium"
                                        placeholder="e.g., ORD-2026-001234"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address *</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 px-4 py-4 text-sm focus:outline-none focus:border-black transition-all rounded-sm font-medium"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Reason for Return *</label>
                                    <select
                                        required
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 px-4 py-4 text-sm focus:outline-none focus:border-black transition-all rounded-sm font-medium bg-white"
                                    >
                                        <option value="">Select a reason</option>
                                        <option value="Incorrect Item">Received Wrong Item</option>
                                        <option value="Damaged/Defective">Item Arrived Damaged/Defective</option>
                                        <option value="Quality Issues">Quality Issues</option>
                                        <option value="Changed My Mind">Changed My Mind</option>
                                        <option value="Other">Other Issues</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Preferred Resolution *</label>
                                    <select
                                        required
                                        name="preferredResolution"
                                        value={formData.preferredResolution}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 px-4 py-4 text-sm focus:outline-none focus:border-black transition-all rounded-sm font-medium bg-white"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Full Refund">Full Refund to Original Payment</option>
                                        <option value="Exchange">Exchange for Same Model</option>
                                        <option value="Store Credit">Store Credit</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Additional Details</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full border border-gray-200 px-4 py-4 text-sm focus:outline-none focus:border-black transition-all resize-none rounded-sm font-medium"
                                    placeholder="Provide any helpful information such as packaging condition, issue details, or notes for our support team."
                                ></textarea>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm border border-gray-100">
                                <input type="checkbox" required className="accent-black" />
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">I agree that my data is collected according to the privacy policy.</p>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white font-bold py-5 rounded-sm transition-all text-xs uppercase tracking-[0.2em] hover:bg-gray-800 disabled:opacity-50"
                            >
                                {loading ? 'Submitting...' : 'Submit Return Request'}
                            </button>
                        </form>
                    </section>

                    <section id="eligibility">
                        <h2 className="text-xl font-bold text-black mb-8 uppercase tracking-widest">Return Eligibility</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-medium">
                            <div>
                                <h3 className="font-bold text-[#024ad8] text-[10px] uppercase tracking-widest mb-4">✔ Eligible Items</h3>
                                <p className="text-sm mb-4 font-bold">The following items are eligible for return if they are unused, unopened, and in original packaging:</p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-0.5 bg-gray-300"></div> Printers</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-0.5 bg-gray-300"></div> Ink cartridges</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-0.5 bg-gray-300"></div> Toner cartridges</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-0.5 bg-gray-300"></div> Paper products</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-0.5 bg-gray-300"></div> Printing accessories</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#024ad8] text-[10px] uppercase tracking-widest mb-4">⚙️ Special Conditions</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-bold text-black mb-1">Defective or Damaged Items:</p>
                                        <ul className="text-sm text-gray-500 space-y-1 font-medium italic">
                                            <li>Items received defective or damaged may be returned within 30 days</li>
                                            <li>Opened ink or toner cartridges are only eligible if defective</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-black mb-1">Incorrect Items:</p>
                                        <p className="text-sm text-gray-500 font-medium italic">If you receive the wrong product, please contact us for a replacement or refund</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="non-returnable">
                        <h2 className="text-xl font-bold text-black mb-8 uppercase tracking-widest">❌ Non-Returnable Items</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li className="flex items-center gap-3 font-bold"><div className="w-2 h-2 border border-red-500 rounded-full"></div> Used or partially used ink/toner cartridges (unless defective)</li>
                                <li className="flex items-center gap-3 font-bold"><div className="w-2 h-2 border border-red-500 rounded-full"></div> Opened or used products (unless defective)</li>
                                <li className="flex items-center gap-3 font-bold"><div className="w-2 h-2 border border-red-500 rounded-full"></div> Digital or downloadable products</li>
                                <li className="flex items-center gap-3 font-bold"><div className="w-2 h-2 border border-red-500 rounded-full"></div> Custom, special-order, or personalized items</li>
                                <li className="flex items-center gap-3 font-bold"><div className="w-2 h-2 border border-red-500 rounded-full"></div> Items returned without original packaging or missing components</li>
                            </ul>
                            <div className="p-8 border border-red-50 border-l-4 border-l-red-400 bg-red-50 rounded-sm">
                                <h3 className="font-bold text-red-800 text-[10px] uppercase tracking-widest mb-2">🔒 Final Sale Items</h3>
                                <p className="text-xs text-red-700 font-bold uppercase">Certain promotional or clearance items may be marked as Final Sale and are not eligible for return or exchange.</p>
                            </div>
                        </div>
                    </section>

                    <section id="packaging">
                        <h2 className="text-xl font-bold text-black mb-6 uppercase tracking-widest">Packaging Requirements</h2>
                        <div className="space-y-4 text-sm font-medium text-gray-600">
                            <p>To ensure safe return and successful processing:</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-0.5 bg-gray-300"></div> Items must include all original accessories, manuals, and packaging</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-0.5 bg-gray-300"></div> Products must be securely packed to prevent damage during transit</li>
                            </ul>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider italic">We reserve the right to deny returns or apply partial refunds if items are damaged due to improper packaging.</p>
                        </div>
                    </section>

                    <section id="exchange">
                        <h2 className="text-xl font-bold text-black mb-8 uppercase tracking-widest">Exchange Policy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-medium uppercase tracking-tighter">
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center text-center">
                                <p className="text-[10px] text-gray-500 font-bold leading-relaxed">Exchanges are available for defective or incorrect items only</p>
                            </div>
                            <div className="p-6 bg-gray-50 border border-gray-200 rounded-sm flex items-center justify-center text-center">
                                <p className="text-[10px] text-gray-500 font-bold leading-relaxed">Replacement is subject to product availability</p>
                            </div>
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center text-center">
                                <p className="text-[10px] text-gray-500 font-bold leading-relaxed">If a replacement is not available, a full refund will be issued</p>
                            </div>
                        </div>
                    </section>

                    <section id="how-to">
                        <h2 className="text-xl font-bold text-black mb-8 uppercase tracking-widest">How to Request a Return</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "Submit a return request with your order details",
                                "Wait for approval and receive a prepaid return label",
                                "Ship the item securely in original packaging",
                                "Once received and inspected, your refund or exchange will be processed"
                            ].map((step, idx) => (
                                <div key={idx} className="p-8 border border-gray-100 rounded-sm flex flex-col items-center text-center space-y-6">
                                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs">{idx + 1}</div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="notes" className="bg-black text-white p-12 rounded-sm">
                        <h2 className="text-xs font-bold mb-8 uppercase tracking-[0.3em] text-[#024ad8]">Important Notes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#024ad8]"></div> Returns without prior approval may not be accepted</li>
                                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#024ad8]"></div> Refund timelines may vary based on banks or providers</li>
                            </ul>
                            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#024ad8]"></div> We reserve the right to verify return eligibility</li>
                                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#024ad8]"></div> This does not affect your statutory consumer rights</li>
                            </ul>
                        </div>
                    </section>

                    <section id="contact" className="mt-16 pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-10 uppercase tracking-tighter">Need Help? Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-10 text-left">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.2em]">Customer Support</p>
                                    <p className="font-bold text-black text-sm">support@innovationdynamicsgroup.com</p>
                                    <p className="font-bold text-black text-sm">+1 (651) 815-4630</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.2em]">Corporate Identity</p>
                                    <div className="text-sm font-medium text-gray-500">
                                        <p className="font-bold text-black mb-1 uppercase tracking-tight">Innovation Dynamics Group LLC</p>
                                        <p>11397 Quincy St NE</p>
                                        <p>Blaine, MN 55434</p>
                                        <p>United States</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 flex flex-col justify-center">
                                <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.2em] mb-4">Direct Communication</p>
                                <p className="text-xs text-gray-400 font-bold uppercase leading-loose tracking-widest">
                                    We are committed to assisting you promptly. Live chat is available on our storefront during business hours for real-time support.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.4em]">
                        Innovation Dynamics Group LLC © 2026 
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default ReturnExchange;
