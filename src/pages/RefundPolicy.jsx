import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4 uppercase tracking-tighter">Refund Policy</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
                        <span>Last Updated: March 25, 2026</span>
                    </div>
                </header>

                <div className="space-y-12 leading-relaxed text-gray-700 font-normal text-sm">
                    <section>
                        <p className="text-lg text-gray-600 mb-6 font-medium">
                            At Innovation Dynamics Group LLC, we are committed to providing a fair, transparent, and customer-friendly refund process.
                        </p>
                        <p className="text-gray-400 font-medium leading-relaxed italic">
                            This policy outlines the conditions under which refunds are issued and how returns are handled for our hardware and consumables.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">1. 30-Day Return Window</h2>
                        <p className="mb-4">Eligible items may be returned within 30 days of delivery. Returns outside this timeframe may not be accepted unless required under applicable consumer protection laws.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">2. Condition of Returned Items</h2>
                        <ul className="space-y-2 mb-6 font-medium">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Unused and in original condition</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> In original packaging</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Complete with all accessories and manuals</li>
                        </ul>
                        <p className="text-xs text-gray-400 italic">Exception: Defective or damaged items may be returned even if opened, subject to inspection.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">3. Refund Processing</h2>
                        <p className="mb-4">Refunds are issued after the returned item is received and inspected. Approved refunds are processed within 3–5 business days to the original payment method.</p>
                        <div className="p-4 bg-gray-50 border border-gray-100 rounded-sm">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">⚠️ Processing times may vary depending on your bank or payment provider.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-8 uppercase tracking-widest text-[#024ad8]">4. Return Eligibility</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                            <div className="p-6 bg-green-50 border border-green-100 rounded-sm">
                                <h3 className="font-bold text-green-800 mb-4 text-[10px] uppercase tracking-wider">✔ Returnable Items</h3>
                                <ul className="space-y-1 text-sm text-green-700">
                                    <li>Unused and unopened printers</li>
                                    <li>Sealed ink and toner cartridges</li>
                                    <li>Accessories in original condition</li>
                                    <li>Defective or malfunctioning products</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-red-50 border border-red-100 rounded-sm">
                                <h3 className="font-bold text-red-800 mb-4 text-[10px] uppercase tracking-wider">❌ Non-Returnable Items</h3>
                                <ul className="space-y-1 text-sm text-red-700">
                                    <li>Opened or used ink/toner (unless defective)</li>
                                    <li>Items damaged due to misuse</li>
                                    <li>Products missing original packaging</li>
                                    <li>Customized or special-order items</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">5. How to Request a Return</h2>
                        <div className="space-y-8">
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-2 text-xs uppercase tracking-widest">Step 1: Submit a Request</h3>
                                <p className="text-xs text-gray-500">Email us at support@innovationdynamicsgroup.com with your order number, product condition, and reason for return.</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-2 text-xs uppercase tracking-widest">Step 2: Receive Authorization</h3>
                                <p className="text-xs text-gray-500">If approved, you will receive an RMA number, instructions, and a prepaid return label (if applicable).</p>
                            </div>
                            <div className="p-6 border border-gray-100 rounded-sm">
                                <h3 className="font-bold text-black mb-2 text-xs uppercase tracking-widest">Step 3: Inspection & Refund</h3>
                                <p className="text-xs text-gray-500">Items are inspected within 2 business days of receipt. Approved refunds are processed within 3–5 business days.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">6. Refund Timeframes</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-gray-100 rounded-sm overflow-hidden text-sm font-medium">
                                <thead>
                                    <tr className="bg-gray-50 text-[10px] font-bold uppercase text-gray-400 tracking-widest">
                                        <th className="p-4 border border-gray-100 font-bold">Payment Method</th>
                                        <th className="p-4 border border-gray-100 font-bold">Estimated Time</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr>
                                        <td className="p-4 border border-gray-100 font-bold text-black text-[10px] uppercase tracking-wider">Credit/Debit Card</td>
                                        <td className="p-4 border border-gray-100 font-bold">3–5 business days</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-gray-100 font-bold text-black text-[10px] uppercase tracking-wider">PayPal</td>
                                        <td className="p-4 border border-gray-100 font-bold">1–3 business days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">7. Return Shipping Responsibility</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                                <p className="font-bold text-black mb-2 text-[10px] uppercase tracking-wider">✔ Covered by IDG LLC</p>
                                <p className="text-xs text-gray-400 font-medium italic">Defective or damaged items, incorrect items shipped.</p>
                            </div>
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                                <p className="font-bold text-black mb-2 text-[10px] uppercase tracking-wider">⚠ Customer Responsibility</p>
                                <p className="text-xs text-gray-400 font-medium italic">Change-of-mind returns, non-defective items.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">8. Exchanges</h2>
                        <p className="text-sm">We primarily process refunds instead of direct exchanges to ensure faster resolution. To exchange a product, return the original per this policy and place a new order.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">9. Damaged or Defective Items</h2>
                        <p className="text-sm">Contact us within 48 hours of delivery with photos of the item and packaging. We will provide a prompt resolution, including replacement or refund. No restocking fees apply.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">10. Manufacturer Warranty</h2>
                        <p className="text-sm">Some products may be covered under the manufacturer’s warranty. We can assist you in initiating a warranty claim where applicable.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">11. Order Cancellations</h2>
                        <p className="text-sm">Orders may be canceled before shipment only. Once shipped, cancellations are not possible, and standard return protocols must be followed after delivery.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">12. International Returns</h2>
                        <p className="text-sm">A 30-day return window applies. Customers are responsible for return shipping costs. Customs duties and import fees are non-refundable.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-widest text-[#024ad8]">13. Compliance & Transparency</h2>
                        <p className="text-sm">We are committed to fair and transparent refund practices. This policy outlines eligibility and timelines to ensure clear expectations in accordance with consumer standards.</p>
                    </section>

                    <section id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-8 uppercase tracking-tighter">14. Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4 text-left">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-[0.2em]">Innovation Dynamics Group LLC</p>
                                <div className="space-y-1 text-gray-500 text-sm font-medium">
                                    <p className="font-bold text-black mb-1 uppercase tracking-tight">Financial Support</p>
                                    <p>11397 Quincy St NE</p>
                                    <p>Blaine, MN 55434</p>
                                    <p>United States</p>
                                </div>
                            </div>
                            <div className="space-y-4 text-left">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-[0.2em]">Support Channels</p>
                                <div className="space-y-2 text-sm text-gray-500 font-medium">
                                    <p>📧 support@innovationdynamicsgroup.com</p>
                                    <p>📞 +1 (651) 815-4630</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="mt-24 pt-10 border-t border-gray-100 text-center">
                    <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.6em]">
                        Innovation Dynamics Group LLC © 2026
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default RefundPolicy;
