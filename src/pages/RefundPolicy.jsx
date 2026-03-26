import React from "react";
import { RotateCcw, ShieldCheck, Mail, Phone, MapPin, Truck, CreditCard, PackageX, History, HelpCircle, Package, CheckCircle, ExternalLink, Clock, Send, AlertCircle, Globe, Layout } from "lucide-react";

const RefundPolicy = () => {
  const sections = [
    { id: 'window', label: '1. Return Window', icon: <Clock size={15} /> },
    { id: 'condition', label: '2. Item Condition', icon: <ShieldCheck size={15} /> },
    { id: 'processing', label: '3. Refund Processing', icon: <History size={15} /> },
    { id: 'eligibility', label: '4. Return Eligibility', icon: <Package size={15} /> },
    { id: 'steps', label: '5. Request Process', icon: <Send size={15} /> },
    { id: 'timeframes', label: '6. Refund Timeframes', icon: <CreditCard size={15} /> },
    { id: 'responsibility', label: '7. Shipping Responsibility', icon: <Truck size={15} /> },
    { id: 'exchanges', label: '8. Exchanges', icon: <RotateCcw size={15} /> },
    { id: 'damaged', label: '9. Damaged Assets', icon: <AlertCircle size={15} /> },
    { id: 'warranty', label: '10. Manufacturer Warranty', icon: <ShieldCheck size={15} /> },
    { id: 'cancellation', label: '11. Cancellations', icon: <PackageX size={15} /> },
    { id: 'international', label: '12. International Returns', icon: <Globe size={15} /> },
    { id: 'contact', label: '13. Support Hub', icon: <Mail size={15} /> }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans text-left">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none">
          <RotateCcw size={500} className="absolute -top-20 -left-20" />
        </div>

        <div className="absolute inset-0 z-0 text-left">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
            alt="Refund & Reconciliation Background"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms] text-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 text-left"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10">
              <RotateCcw size={14} /> Fiscal Reconciliation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic">
              Refund <br/><span className="text-[#024ad8]">Protocol</span>
            </h1>
            <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl text-left">
              Innovation Dynamics Group LLC is committed to providing a fair, transparent, and customer-friendly refund process for all procurement transactions.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] text-left">
              <p>Policy Ref: REFD-2026</p>
              <p>Updated: March 25, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 text-left">

          {/* Sidebar Navigation - Sticky */}
          <div className="hidden lg:block lg:col-span-1 text-left">
            <div className="sticky top-28 space-y-6 text-left">
              <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">Policy Hub</h3>
              <nav className="space-y-1 text-left">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all hover:bg-[#024ad8] hover:text-white text-gray-500 font-semibold text-[13px] group border border-transparent hover:shadow-md text-left"
                  >
                    <span className="text-[#024ad8] group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-24 text-gray-600 text-left">
            
            {/* 1. Return Window */}
            <section id="window" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">01</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">30-Day Return Window</h2>
              </div>
              <div className="bg-gray-50/50 border-l-4 border-[#024ad8] p-8 space-y-4 rounded-r-sm text-left">
                <p className="text-base font-semibold leading-relaxed italic text-left text-black">
                  Eligible items may be returned within 30 days of delivery.
                </p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed italic">
                  Returns outside this timeframe may not be accepted unless required under applicable localized consumer protection laws.
                </p>
              </div>
            </section>

            {/* 2. Condition */}
            <section id="condition" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">02</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Condition of Returned Items</h2>
              </div>
              <div className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm text-left">
                <p className="text-sm font-bold text-black mb-8 italic uppercase tracking-tight text-left">To qualify for a refund, assets must meet these audit requirements:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="p-6 bg-gray-50 rounded-sm border-t-2 border-[#024ad8] text-left">
                        <CheckCircle size={18} className="text-[#024ad8] mb-4" />
                        <p className="text-[10px] font-black uppercase tracking-widest italic text-left">Unused & In Original Condition</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-sm border-t-2 border-black text-left">
                        <Package size={18} className="text-black mb-4" />
                        <p className="text-[10px] font-black uppercase tracking-widest italic text-left">In Original Packaging</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-sm border-t-2 border-[#024ad8] text-left">
                        <Layout size={18} className="text-[#024ad8] mb-4" />
                        <p className="text-[10px] font-black uppercase tracking-widest italic text-left">Complete with All Accessories</p>
                    </div>
                </div>
                <div className="mt-8 p-6 bg-red-50/50 border border-red-100 rounded-sm flex items-center gap-4 text-left">
                    <AlertCircle size={16} className="text-red-600" />
                    <p className="text-[11px] font-bold text-red-900/70 italic uppercase tracking-wider text-left">
                        Defective or damaged items may be returned even if opened, subject to logistics inspection.
                    </p>
                </div>
              </div>
            </section>

            {/* 3. Refund Processing */}
            <section id="processing" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">03</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Refund Processing</h2>
              </div>
              
              <div className="p-10 bg-black text-white rounded-sm shadow-xl relative overflow-hidden group text-left">
                 <div className="absolute inset-0 bg-[#024ad8]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="space-y-6 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row gap-10 text-left">
                        <div className="flex-1 space-y-4 text-left">
                            <p className="text-sm font-bold italic tracking-wide text-gray-300 text-left">
                                Refunds are issued after the returned item is successfully audited at our logistics hub.
                            </p>
                            <p className="text-2xl font-black text-[#024ad8] italic uppercase">3–5 Business Days</p>
                        </div>
                        <div className="flex-1 flex flex-col justify-end text-left">
                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-4 text-left">Notice</p>
                            <p className="text-xs text-gray-400 font-medium leading-relaxed italic text-left">
                                Refunds are processed to the original payment terminal. Processing times may vary depending on your bank or payment provider.
                            </p>
                        </div>
                    </div>
                 </div>
              </div>
            </section>

            {/* 4. Return Eligibility */}
            <section id="eligibility" className="space-y-8 text-left text-left">
                <div className="flex items-center gap-5 text-left">
                    <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">04</span>
                    <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Return Eligibility</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                    <div className="space-y-6 text-left">
                        <h4 className="flex items-center gap-3 text-black font-black uppercase italic text-sm text-left">
                            <CheckCircle className="text-green-600" size={18} /> Returnable Items
                        </h4>
                        <ul className="space-y-4 text-[11px] text-gray-400 font-extrabold uppercase tracking-widest italic text-left">
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-green-600 mt-1 shrink-0"></div> Unused and unopened printers</li>
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-green-600 mt-1 shrink-0"></div> Sealed ink and toner cartridges</li>
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-green-600 mt-1 shrink-0"></div> Accessories in original condition</li>
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-green-600 mt-1 shrink-0"></div> Defective or malfunctioning products</li>
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-green-600 mt-1 shrink-0"></div> Incorrect items received during transit</li>
                        </ul>
                    </div>
                    <div className="space-y-6 text-left">
                        <h4 className="flex items-center gap-3 text-black font-black uppercase italic text-sm text-left">
                            <AlertCircle className="text-red-600" size={18} /> Non-Returnable Items
                        </h4>
                        <ul className="space-y-4 text-[11px] text-gray-400 font-extrabold uppercase tracking-widest italic text-left">
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-red-600 mt-1 shrink-0"></div> Opened or used ink/toner cartridges</li>
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-red-600 mt-1 shrink-0"></div> Items damaged due to misuse</li>
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-red-600 mt-1 shrink-0"></div> Products missing original components</li>
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-red-600 mt-1 shrink-0"></div> Customized or special-order items</li>
                            <li className="flex gap-4 items-start"><div className="w-1.5 h-1.5 bg-red-600 mt-1 shrink-0"></div> Items outside the 30-day window</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Request Process */}
            <section id="steps" className="space-y-8 text-left text-left text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">05</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Request Process</h2>
              </div>
              <div className="relative text-left">
                 <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100 text-left"></div>
                 <div className="space-y-12 relative z-10 text-left">
                    {[
                        { title: "Submit a Request", desc: "Email support@innovationdynamicsgroup.com with your order # and reason." },
                        { title: "Receive Authorization", desc: "Get your Return Merchandise Authorization (RMA) and prepaid label." },
                        { title: "Ship the Item", desc: "Pack securely and include all original contents with the RMA number." },
                        { title: "Inspection & Refund", desc: "Assets are audited within 2 days; approved refunds process in 3–5 days." }
                    ].map((step, idx) => (
                        <div key={idx} className="flex gap-10 items-start text-left">
                            <div className="w-12 h-12 bg-black text-white shrink-0 flex items-center justify-center font-black italic rounded-full border-4 border-white shadow-lg text-left">
                                {idx + 1}
                            </div>
                            <div className="pt-2 text-left">
                                <h4 className="text-black font-black uppercase italic tracking-tighter text-sm mb-2 text-left">{step.title}</h4>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic text-left">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                 </div>
              </div>
            </section>

            {/* 6. Timeframes */}
            <section id="timeframes" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">06</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Refund Timeframes</h2>
              </div>
              <div className="overflow-x-auto text-left">
                <table className="w-full text-left border-collapse bg-white shadow-xl rounded-sm overflow-hidden text-left">
                    <thead>
                        <tr className="bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] italic text-left">
                            <th className="p-6 border-b border-white/10 text-left">Payment Method</th>
                            <th className="p-6 border-b border-white/10 text-left">Estimated Time</th>
                            <th className="p-6 border-b border-white/10 text-left">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="text-[11px] font-bold text-gray-600 uppercase tracking-widest italic text-left">
                        <tr className="border-b border-gray-50 text-left">
                            <td className="p-6 text-black font-black text-left">Credit Card</td>
                            <td className="p-6 text-left">3–5 Business Days</td>
                            <td className="p-6 text-left italic">May take additional billing cycle</td>
                        </tr>
                        <tr className="border-b border-gray-50 text-left">
                            <td className="p-6 text-black font-black text-left">Debit Card</td>
                            <td className="p-6 text-left">3–5 Business Days</td>
                            <td className="p-6 text-left italic text-left">Reflected in bank account</td>
                        </tr>
                        <tr className="text-left">
                            <td className="p-6 text-black font-black text-left">PayPal</td>
                            <td className="p-6 text-left text-left">1–3 Business Days</td>
                            <td className="p-6 text-left italic text-left">Typically faster processing</td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </section>

            {/* 7. Responsibility */}
            <section id="responsibility" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left text-left text-left">07</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Return Shipping</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-gray-50 border-l-4 border-green-600 p-8 rounded-sm text-left">
                    <p className="text-black font-black uppercase tracking-widest text-[10px] italic mb-4">Covered by IDG:</p>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic">
                        Defective, damaged, or incorrect items. Prepaid labels are provided for these logistics errors.
                    </p>
                </div>
                <div className="bg-gray-50 border-l-4 border-red-600 p-8 rounded-sm text-left text-left">
                    <p className="text-black font-black uppercase tracking-widest text-[10px] italic mb-4 text-left">Customer Responsibility:</p>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic text-left">
                        Change-of-mind or non-defective returns. Shipping costs are communicated during authorization.
                    </p>
                </div>
              </div>
            </section>

            {/* 8. Exchanges */}
            <section id="exchanges" className="space-y-10 text-left text-left">
                <div className="flex items-center gap-5 text-left text-left text-left">
                    <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left text-left text-left">08</span>
                    <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Exchanges</h2>
                </div>
                <div className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm space-y-6 text-left">
                    <p className="text-sm font-semibold italic text-gray-600 text-left">
                        We primarily process refunds instead of direct exchanges to ensure faster resolution.
                    </p>
                    <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest italic leading-relaxed text-left">
                        To exchange: Return the original item per this policy and place a new order for the desired hardware or assets.
                    </p>
                </div>
            </section>

            {/* 9. Damaged Assets */}
            <section id="damaged" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">09</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Damaged or Defective</h2>
              </div>
              <div className="p-10 bg-red-900 text-white rounded-sm shadow-xl flex flex-col md:flex-row gap-10 items-center text-left">
                <AlertCircle className="text-[#024ad8] shrink-0" size={48} />
                <div className="space-y-4 text-left">
                  <p className="text-sm font-bold leading-relaxed text-left italic text-gray-100">
                    Contact us within 48 hours with photos of item and packaging. No restocking fees apply for terminal errors or defective hardware.
                  </p>
                </div>
              </div>
            </section>

            {/* 10. Warranty */}
            <section id="warranty" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">10</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Manufacturer Warranty</h2>
              </div>
              <div className="p-10 bg-white border border-gray-100 rounded-sm shadow-xl text-left">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic text-left">
                    Certain products are covered under manufacturer-specific warranties. We can assist you in initiating a warranty claim with the respective OEM where applicable.
                </p>
              </div>
            </section>

            {/* 11. Cancellations */}
            <section id="cancellation" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">11</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Order Cancellations</h2>
              </div>
              <p className="text-sm font-semibold italic text-gray-600 border-l-4 border-black pl-6 text-left">
                Orders may be canceled before shipment dispatch only. Once dispatched, standard return protocols apply after physical delivery.
              </p>
            </section>

            {/* 12. International */}
            <section id="international" className="space-y-10 text-left">
                <div className="flex items-center gap-5 text-left">
                    <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">12</span>
                    <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">International Returns</h2>
                </div>
                <div className="p-10 bg-gray-50 border border-gray-100 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="space-y-2 text-left">
                        <p className="text-[10px] text-black font-black uppercase italic text-left tracking-widest">Responsibility:</p>
                        <p className="text-[11px] text-gray-400 font-bold uppercase italic text-left">Customer is liable for return shipping + non-refundable duties/fees.</p>
                    </div>
                    <div className="space-y-2 text-left">
                        <p className="text-[10px] text-black font-black uppercase italic text-left tracking-widest text-left text-left">Currency:</p>
                        <p className="text-[11px] text-gray-400 font-bold uppercase italic text-left">Refunds are issued in the original transaction currency.</p>
                    </div>
                </div>
            </section>

            {/* 13. Support Hub */}
            <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden border-t-4 border-[#024ad8] text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#024ad8]/5 rounded-full blur-3xl -mr-32 -mt-32 text-left"></div>
                <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-5 uppercase italic text-left">
                  <Mail className="text-[#024ad8]" size={36} />
                  Support Hub
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  <div className="space-y-10 text-left">
                    <div className="flex gap-6 items-start group text-left">
                      <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left border border-white/10">
                        <Mail className="text-[#024ad8]" size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Reconciliation Comms</p>
                        <p className="text-sm text-white font-medium text-left">support@innovationdynamicsgroup.com</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start group text-left">
                      <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left border border-white/10">
                        <Phone className="text-[#024ad8]" size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Support Voice</p>
                        <p className="text-sm text-white font-bold tracking-tight italic text-left">+1 (651) 815-4630</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                      <MapPin className="text-[#024ad8]" size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Corporate HQ</p>
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

      {/* Footer Notice */}
      <div className="bg-gray-50 py-10 border-t border-gray-100 text-left">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed italic text-center">
            Innovation Dynamics Group LLC © 2026 • High-Integrity Fiscal Systems • verified and secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
