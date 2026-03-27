import React from 'react';

const ShippingPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-28 pb-16 px-6 font-sans text-left text-gray-800">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-4xl font-bold text-black mb-4 uppercase tracking-tighter">Shipping Policy</h1>
                    <div className="flex flex-col sm:flex-row gap-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
                        <span>Last Updated: March 25, 2026</span>
                    </div>
                </header>

                <div className="space-y-12 leading-relaxed text-gray-700 font-normal">
                    <section>
                        <p className="text-lg text-gray-600 mb-6 font-medium">
                            At Innovation Dynamics Group LLC, we are committed to providing clear, reliable, and transparent shipping services across the United States and Canada.
                        </p>
                        <p className="text-sm text-gray-400">
                            This Shipping Policy outlines how orders are processed, shipped, and delivered to ensure a consistent experience for all our customers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">1. Order Processing Time</h2>
                        <ul className="space-y-2 text-sm text-gray-600 font-medium">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Orders are typically processed within 1–2 business days after payment confirmation</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Orders placed on weekends or holidays are processed on the next business day</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> You will receive confirmation emails for both order placement and shipment dispatch</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">2. Shipping Regions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold uppercase tracking-tight">
                            <div className="p-4 bg-gray-50 border border-gray-100 flex items-center gap-3">
                                <span className="text-lg">🇺🇸</span> United States
                            </div>
                            <div className="p-4 bg-gray-50 border border-gray-100 flex items-center gap-3">
                                <span className="text-lg">🇨🇦</span> Canada
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">3. Shipping Methods & Delivery Estimates</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-gray-100 rounded-sm overflow-hidden text-sm font-medium">
                                <thead>
                                    <tr className="bg-gray-50 text-[10px] font-bold uppercase text-gray-400 tracking-widest">
                                        <th className="p-4 border border-gray-100">Location</th>
                                        <th className="p-4 border border-gray-100">Standard Shipping</th>
                                        <th className="p-4 border border-gray-100">Expedited Shipping</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr>
                                        <td className="p-4 border border-gray-100 font-bold text-black">United States</td>
                                        <td className="p-4 border border-gray-100">3–7 business days</td>
                                        <td className="p-4 border border-gray-100">2–4 business days</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-gray-100 font-bold text-black">Canada</td>
                                        <td className="p-4 border border-gray-100">3–8 business days</td>
                                        <td className="p-4 border border-gray-100">2–5 business days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-xs text-gray-400 italic">Important: Delivery timelines are estimates only and not guaranteed. Remote locations may require additional time.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">4. Shipping Costs</h2>
                        <p className="text-sm">Shipping charges are calculated at checkout based on delivery location, package dimensions, and selected method. Promotional free shipping may apply during specific campaigns.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">5. Order Tracking</h2>
                        <p className="text-sm">Tracking details are provided via email once dispatched. Updates may take up to 24 hours to appear in the carrier system. Customers can track shipments directly via the carrier’s website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">6. Delivery Conditions & Responsibility</h2>
                        <p className="text-sm mb-4">Customers must provide accurate shipping information. Innovation Dynamics Group LLC is not responsible for delivery failures due to incorrect addresses or carrier-side issues.</p>
                        <p className="text-xs font-bold text-red-600 uppercase tracking-widest">Additional charges may apply for re-delivery if an order is returned due to address issues.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">7. Restricted Shipping Locations</h2>
                        <p className="text-sm">We currently do not ship to P.O. Boxes (carrier dependent), APO/FPO/DPO military addresses, or areas with restricted carrier access.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">8. Damaged, Missing, or Incorrect Items</h2>
                        <p className="text-sm mb-4">Report issues within 48 hours of delivery. Please provide your order number and clear photos of the item and packaging for review.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">9. Customs, Duties & Taxes</h2>
                        <p className="text-sm">For Canadian shipments, orders may be subject to customs duties, taxes, or import fees, which are the customer’s responsibility. Customs processing may cause additional delays.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">10. Lost or Stolen Packages</h2>
                        <p className="text-sm">If tracking shows “Delivered” but you have not received it, check with household members and allow 24 hours. Resolutions depend on the carrier’s investigation confirmation.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">11. Order Cancellations</h2>
                        <p className="text-sm">Orders may be canceled only before shipment. Once dispatched, standard return protocols must be followed after delivery.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black mb-4">12. Compliance & Transparency</h2>
                        <p className="text-sm">We are committed to fair business practices. Shipping timelines and costs are clearly disclosed to ensure compliance with consumer protection standards.</p>
                    </section>

                    <section id="contact" className="pt-12 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-black mb-8 uppercase tracking-tighter">13. Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4 text-left">
                                <p className="text-xs font-bold text-[#024ad8] uppercase tracking-[0.2em]">Innovation Dynamics Group LLC</p>
                                <div className="space-y-1 text-gray-500 text-sm font-medium">
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
                    <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.4em]">
                        Innovation Dynamics Group LLC © 2026
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default ShippingPolicy;
