import React from "react";
import { Truck, MapPin, Clock, Package, Search, AlertCircle, ShieldCheck, Mail, Phone, CheckCircle, Globe, Zap, History, HelpCircle, Landmark, ShieldAlert, PackageX, Info } from "lucide-react";

const ShippingPolicy = () => {
  const sections = [
    { id: 'processing', label: '1. Processing Time', icon: <Clock size={15} /> },
    { id: 'regions', label: '2. Shipping Regions', icon: <Globe size={15} /> },
    { id: 'estimates', label: '3. Delivery Estimates', icon: <Zap size={15} /> },
    { id: 'costs', label: '4. Shipping Costs', icon: <Package size={15} /> },
    { id: 'tracking', label: '5. Order Tracking', icon: <Search size={15} /> },
    { id: 'responsibility', label: '6. Responsibility', icon: <ShieldCheck size={15} /> },
    { id: 'restricted', label: '7. Restrictions', icon: <MapPin size={15} /> },
    { id: 'damaged', label: '8. Damaged Items', icon: <AlertCircle size={15} /> },
    { id: 'customs', label: '9. Customs & Taxes', icon: <Landmark size={15} /> },
    { id: 'lost', label: '10. Lost Packages', icon: <ShieldAlert size={15} /> },
    { id: 'cancellation', label: '11. Cancellations', icon: <PackageX size={15} /> },
    { id: 'contact', label: '12. Contact Hub', icon: <Mail size={15} /> }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans text-left">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none">
          <Truck size={500} className="absolute -top-20 -left-20" />
        </div>

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1920"
            alt="Logistics & Global Transit Background"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10">
              <Truck size={14} /> Global Transit System
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic">
              Shipping <br/><span className="text-[#024ad8]">Protocol</span>
            </h1>
            <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl text-left">
              Innovation Dynamics Group LLC provides clear, reliable, and transparent shipping services across the United States and Canada.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] text-left">
              <p>System Ref: LOGS-2026</p>
              <p>Updated: March 25, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

          {/* Sidebar Navigation - Sticky */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">Logistics Sections</h3>
              <nav className="space-y-1">
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
          <div className="lg:col-span-3 space-y-24 text-gray-600">
            
            {/* 1. Processing Time */}
            <section id="processing" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">01</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Order Processing Time</h2>
              </div>
              <div className="bg-gray-50/50 border-l-4 border-[#024ad8] p-8 space-y-6 rounded-r-sm text-left">
                <p className="text-base font-semibold leading-relaxed italic text-left">
                  Orders are typically processed within 1–2 business days after payment confirmation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px] font-bold text-black uppercase tracking-widest leading-relaxed">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-sm shadow-sm border border-gray-100">
                        <Clock className="text-[#024ad8]" size={16} />
                        <span>Weekend orders processed next business day</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-sm shadow-sm border border-gray-100">
                        <AlertCircle className="text-[#024ad8]" size={16} />
                        <span>Times vary based on volume & availability</span>
                    </div>
                </div>
              </div>
            </section>

            {/* 2. Regions */}
            <section id="regions" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">02</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Shipping Regions</h2>
              </div>
              <div className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-black font-black uppercase italic text-sm">
                        🇺🇸 United States
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed italic">All states (excluding certain restricted areas with limited carrier access).</p>
                 </div>
                 <div className="space-y-4 border-l-0 md:border-l border-gray-100 md:pl-10">
                    <div className="flex items-center gap-3 text-black font-black uppercase italic text-sm">
                        🇨🇦 Canada
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed italic">All provinces and territories with standard logistics connectivity.</p>
                 </div>
              </div>
            </section>

            {/* 3. Estimates */}
            <section id="estimates" className="space-y-12 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">03</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Delivery Estimates</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white shadow-xl rounded-sm overflow-hidden">
                    <thead>
                        <tr className="bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] italic">
                            <th className="p-6 border-b border-white/10">Transit Location</th>
                            <th className="p-6 border-b border-white/10">Standard Shipping</th>
                            <th className="p-6 border-b border-white/10">Expedited Shipping</th>
                        </tr>
                    </thead>
                    <tbody className="text-[11px] font-bold text-gray-600 uppercase tracking-widest italic">
                        <tr className="border-b border-gray-50 group hover:bg-gray-50/50 transition-all">
                            <td className="p-6 text-black font-black">United States</td>
                            <td className="p-6">3–7 Business Days</td>
                            <td className="p-6">2–4 Business Days</td>
                        </tr>
                        <tr className="group hover:bg-gray-50/50 transition-all">
                            <td className="p-6 text-black font-black">Canada</td>
                            <td className="p-6">3–8 Business Days</td>
                            <td className="p-6">2–5 Business Days</td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <div className="p-8 bg-gray-50 border-l-4 border-black rounded-sm space-y-4">
                <p className="text-[10px] text-black font-black uppercase tracking-widest flex items-center gap-3 italic">
                    <Info size={14} className="text-[#024ad8]" /> Important Notice
                </p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed italic">
                    delivery timelines are estimates only and not guaranteed. Remote or rural locations may require additional time. Delays may occur due to weather, carrier capacity, or external factors beyond our control.
                </p>
              </div>
            </section>

            {/* 4. Costs */}
            <section id="costs" className="space-y-8 text-left">
                <div className="flex items-center gap-5 text-left">
                    <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">04</span>
                    <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Shipping Costs</h2>
                </div>
                <div className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm">
                    <p className="text-[15px] font-semibold leading-relaxed text-left text-gray-600 italic mb-8 border-b border-gray-50 pb-8">
                        Shipping charges are dynamically calculated at the checkout terminal based on location, package mass, and selected speed.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[10px] font-black uppercase tracking-[0.2em] italic">
                        <p className="flex items-center gap-4 text-gray-400"><div className="w-2 h-2 bg-[#024ad8] rounded-full"></div> Package weight & dimensions</p>
                        <p className="flex items-center gap-4 text-gray-400"><div className="w-2 h-2 bg-[#024ad8] rounded-full"></div> selected shipping method</p>
                        <p className="flex items-center gap-4 text-gray-400"><div className="w-2 h-2 bg-[#024ad8] rounded-full"></div> delivery location coordinates</p>
                        <p className="flex items-center gap-4 text-[#024ad8]"><div className="w-2 h-2 bg-black rounded-full"></div> Promotional free shipping offers</p>
                    </div>
                </div>
            </section>

            {/* 5. Tracking */}
            <section id="tracking" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">05</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Order Tracking</h2>
              </div>
              <div className="p-10 bg-black text-white rounded-sm flex flex-col md:flex-row gap-10 items-center text-left relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[#024ad8]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <Search className="text-[#024ad8] shrink-0" size={48} />
                 <p className="text-sm font-semibold leading-relaxed italic text-left text-gray-300 relative z-10">
                   Tracking details are transmitted via automated email upon dispatch. Please allow up to 24 hours for carrier baseline synchronization before metadata appears in the tracking portal.
                 </p>
              </div>
            </section>

            {/* 6. Responsibility */}
            <section id="responsibility" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">06</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Delivery Conditions</h2>
              </div>
              <div className="bg-white p-10 border border-red-100 rounded-sm shadow-xl shadow-red-50/30 flex flex-col md:flex-row gap-10 items-center text-left">
                <ShieldCheck className="text-red-600 shrink-0" size={48} />
                <div className="space-y-4">
                  <p className="text-sm font-bold leading-relaxed text-left italic text-gray-600">
                    Innovation Dynamics Group LLC is not responsible for delivery failures resulting from incorrect or incomplete addresses provided at the time of procurement.
                  </p>
                  <p className="text-[10px] text-red-600 font-black uppercase tracking-[0.2em] italic">
                    Additional shipping charges apply for redelivery of orders returned due to address errors.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Restrictions */}
            <section id="restricted" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">07</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Restricted Locations</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                 <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm space-y-4 group hover:bg-white hover:shadow-xl transition-all">
                    <p className="text-black font-black uppercase tracking-widest text-[10px] italic">Non-Shipping Endpoints:</p>
                    <ul className="space-y-3 text-[11px] text-gray-400 font-extrabold uppercase tracking-widest italic">
                        <li>• P.O. Boxes (carrier dependent)</li>
                        <li>• APO/FPO/DPO Military Addresses</li>
                        <li>• Limited Utility carrier Areas</li>
                    </ul>
                 </div>
                 <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm text-left">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic">
                        If an order cannot be authorized due to location restrictions, customers will be notified immediately and full fiscal reconciliation will occur.
                    </p>
                 </div>
              </div>
            </section>

            {/* 8. Damaged Items */}
            <section id="damaged" className="space-y-10 text-left">
                <div className="flex items-center gap-5 text-left">
                    <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">08</span>
                    <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Damaged or Incorrect</h2>
                </div>
                <div className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm space-y-8 text-left">
                    <p className="text-sm font-semibold italic text-gray-600 border-l-4 border-red-600 pl-6">
                        Discrepancies must be reported within 48 hours of delivery.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                        <div className="p-6 bg-gray-50 rounded-sm">
                            <p className="text-[10px] text-[#024ad8] font-black uppercase italic mb-2">Requirement 01</p>
                            <p className="text-[11px] font-black text-black italic">Valid Order Number</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-sm">
                            <p className="text-[10px] text-[#024ad8] font-black uppercase italic mb-2">Requirement 02</p>
                            <p className="text-[11px] font-black text-black italic">High-Res Photos</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-sm">
                            <p className="text-[10px] text-[#024ad8] font-black uppercase italic mb-2">Requirement 03</p>
                            <p className="text-[11px] font-black text-black italic">Detailed Discrepancy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Customs */}
            <section id="customs" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">09</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Customs, Duties & Taxes</h2>
              </div>
              <div className="p-10 bg-black text-white rounded-sm shadow-xl relative overflow-hidden group">
                 <Landmark className="absolute top-10 right-10 text-[#024ad8]/20 group-hover:rotate-12 transition-transform duration-700" size={120} />
                 <div className="space-y-6 relative z-10 max-w-xl text-left">
                    <p className="text-sm font-bold italic tracking-wide text-gray-300">
                        Canadian and cross-border shipments are subject to localized customs duties, taxes, and import fees. These liabilities are the responsibility of the customer.
                    </p>
                    <div className="flex gap-4 items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#024ad8]">
                        <div className="w-1.5 h-1.5 bg-[#024ad8]"></div> Customs processing may cause audit delays
                    </div>
                 </div>
              </div>
            </section>

            {/* 10. Lost Packages */}
            <section id="lost" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">10</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Lost or Stolen Packages</h2>
              </div>
              <div className="bg-gray-50 p-10 border border-gray-100 rounded-sm space-y-6 text-left">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed italic text-left">
                    If tracking shows "Delivered" but assets are missing, allow 24 hours for carrier updates. Verify delivery with household members or proximity checks. Resolutory actions are dependent on the carrier's final forensic investigation.
                </p>
              </div>
            </section>

            {/* 11. Cancellations */}
            <section id="cancellation" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">11</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Order Cancellations</h2>
              </div>
              <div className="p-8 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm">
                <p className="text-[15px] font-bold text-black leading-relaxed italic text-left uppercase tracking-tighter mb-4">
                    Orders may be canceled only prior to shipping dispatch.
                </p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed italic">
                    Once an order has entered the carrier terminal, standard return protocols must be initiated after delivery.
                </p>
              </div>
            </section>

            {/* 12. Contact Hub */}
            <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden border-t-4 border-[#024ad8] text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#024ad8]/5 rounded-full blur-3xl -mr-32 -mt-32 text-left"></div>
                <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-5 uppercase italic text-left">
                  <Mail className="text-[#024ad8]" size={36} />
                  Contact Info
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  <div className="space-y-10 text-left">
                    <div className="flex gap-6 items-start group text-left">
                      <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                        <Mail className="text-[#024ad8]" size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Communication Terminal</p>
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
                    <div className="text-left">
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Logistics HQ</p>
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
            Innovation Dynamics Group LLC © 2026 • high-integrity Global logistics • compliant and secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;

