import React from "react";
import { FileText, ShieldCheck, ShoppingBag, Truck, CreditCard, Info, Mail, Phone, MapPin, AlertCircle, Scale, HelpCircle, CheckCircle, Tag, Package, RotateCcw, PenTool, Landmark } from "lucide-react";

const TermsConditions = () => {
  const sections = [
    { id: 'agreement', label: '1. Agreement', icon: <Scale size={15} /> },
    { id: 'definitions', label: '2. Definitions', icon: <FileText size={15} /> },
    { id: 'use', label: '3. Use of Website', icon: <ShieldCheck size={15} /> },
    { id: 'product', label: '4. Product Info', icon: <Package size={15} /> },
    { id: 'orders', label: '5. Orders & Payments', icon: <CreditCard size={15} /> },
    { id: 'shipping', label: '6. Shipping', icon: <Truck size={15} /> },
    { id: 'returns', label: '7. Returns & Refunds', icon: <RotateCcw size={15} /> },
    { id: 'ip', label: '8. Intellectual Property', icon: <PenTool size={15} /> },
    { id: 'liability', label: '9. Liability', icon: <Scale size={15} /> },
    { id: 'compliance', label: '10. Compliance', icon: <CheckCircle size={15} /> },
    { id: 'law', label: '11. Governing Law', icon: <Landmark size={15} /> },
    { id: 'changes', label: '12. Changes', icon: <RotateCcw size={15} /> },
    { id: 'contact', label: '13. Contact', icon: <Mail size={15} /> }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none text-left">
          <Scale size={500} className="absolute -top-20 -left-20" />
        </div>

        <div className="absolute inset-0 z-0">
          <img
            src="/images/terms.jpg"
            alt="Terms & Conditions Background"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-left">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 text-left">
              <Scale size={14} /> Global Compliance
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic text-left">
              Terms & <br/><span className="text-[#024ad8]">Conditions</span>
            </h1>
            <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl text-left">
              Governing protocols for the use of the Innovation Dynamics Group LLC website and our procurement services.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] text-left">
              <p>Effective: March 25, 2026</p>
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
              <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">Navigation</h3>
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
          <div className="lg:col-span-3 space-y-20 text-gray-600 text-left text-left">
            
            {/* Introduction */}
            <section className="space-y-6 text-left">
                <div className="bg-gray-50/50 border-l-4 border-[#024ad8] p-8 space-y-4 rounded-r-sm text-left">
                    <p className="text-base font-medium leading-relaxed italic text-left text-left">
                        Please read these Terms & Conditions carefully before using our website or purchasing products.
                    </p>
                    <p className="text-xs text-[#024ad8] font-black uppercase tracking-widest text-left text-left">
                        These protocols establish the legal framework for all interactions with Innovation Dynamics Group LLC.
                    </p>
                </div>
            </section>

            {/* 1. Agreement to Terms */}
            <section id="agreement" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">01</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Agreement to Terms</h2>
              </div>
              <div className="space-y-6 text-left">
                <p className="text-[15px] leading-relaxed font-semibold italic text-left">
                  By accessing or using the Innovation Dynamics Group LLC website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must discontinue use of the website immediately.
                </p>
                <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 text-left">
                  <p className="text-sm text-gray-600 font-medium italic text-left">
                    Innovation Dynamics Group LLC functions as an independent online retailer offering printers and related products. We are not affiliated with or endorsed by any manufacturer unless explicitly stated.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Definitions */}
            <section id="definitions" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">02</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Definitions</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  { term: "Company", def: "Refers to Innovation Dynamics Group LLC" },
                  { term: "User/Customer", def: "Refers to any person using the website" },
                  { term: "Products", def: "Refers to printers, ink, toner, and accessories" },
                  { term: "Services", def: "Refers to website functionality and support" },
                  { term: "Content", def: "Refers to all materials on the website" }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 bg-white border border-gray-100 shadow-sm flex flex-col gap-1 text-left">
                    <span className="text-[#024ad8] text-[10px] font-black uppercase tracking-wider">{item.term}</span>
                    <span className="text-sm font-semibold italic text-gray-500">{item.def}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Use of Website */}
            <section id="use" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">03</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Use of Website</h2>
              </div>
              <p className="text-[15px] leading-relaxed font-semibold italic text-left">You agree to use the website only for lawful purposes. You agree that you will:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {[
                  "Provide accurate and complete information during checkout",
                  "Maintain the confidentiality of your account details",
                  "Use the website without disrupting its functionality or security",
                  "Comply with all applicable laws and regulations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-sm border border-gray-100 shadow-xl shadow-gray-50 text-sm text-gray-600 font-semibold group hover:border-[#024ad8]/40 transition-all text-left">
                    <CheckCircle className="text-[#024ad8] flex-shrink-0 mt-0.5" size={18} />
                    <span className="italic">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6 text-left mt-8">
                <h3 className="text-xl font-bold text-black italic uppercase text-left">Prohibited Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {[
                    "Engage in fraudulent, deceptive, or misleading practices",
                    "Attempt unauthorized access to systems or data",
                    "Upload malware or harmful code",
                    "Interfere with website performance or security",
                    "Misuse product information or content"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-sm border border-gray-100 text-sm text-gray-500 font-semibold text-left">
                      <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="italic">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Product Information & Disclaimer */}
            <section id="product" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">04</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Product Information</h2>
              </div>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 space-y-6 text-left">
                <p className="text-[15px] leading-relaxed text-gray-600 font-medium text-left italic">
                  We strive to ensure that all product information is accurate and up to date. However:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold uppercase tracking-tight text-gray-500 italic text-left">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Descriptions are for informational purposes only</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Minor inaccuracies or typos may occur</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Availability and pricing may change without notice</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#024ad8] rounded-full"></div> Manufacturers may update specifications</li>
                </ul>
                <div className="p-5 bg-white rounded-sm border border-blue-100/60 shadow-sm space-y-3 text-left">
                   <h4 className="text-black text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                     <Info size={14} className="text-[#024ad8]" /> Important Disclaimer
                   </h4>
                   <p className="text-xs text-gray-500 font-semibold italic leading-relaxed">
                     All product names, logos, and trademarks are the property of their respective owners and are used for identification purposes only. Innovation Dynamics Group LLC operates independently and does not claim official authorization unless explicitly stated.
                   </p>
                </div>
              </div>
            </section>

            {/* 5. Orders & Payment */}
            <section id="orders" className="space-y-8 text-left text-left">
              <div className="flex items-center gap-5 text-left text-left text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">05</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Orders & Payment</h2>
              </div>
              <p className="text-[15px] leading-relaxed font-semibold italic text-left">By placing an order, you agree that:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4 p-8 bg-white rounded-sm border border-gray-100 shadow-xl shadow-gray-50 group hover:border-[#024ad8]/40 transition-all text-left">
                  <h3 className="font-extrabold text-black flex items-center gap-3 text-lg uppercase italic text-left">
                    <CheckCircle className="text-[#024ad8]" size={20} /> Acceptance
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-500 font-medium italic text-left">
                    <li>All orders are subject to acceptance and availability</li>
                    <li>Payment must be completed before order processing</li>
                    <li>You are responsible for accurate billing details</li>
                    <li>Full refunds issued if we cancel after payment</li>
                  </ul>
                </div>
                <div className="space-y-4 p-8 bg-black text-white rounded-sm shadow-xl group hover:border-[#024ad8]/40 transition-all text-left">
                  <h3 className="font-extrabold text-white flex items-center gap-3 text-lg uppercase italic text-left">
                    <ShieldCheck className="text-[#024ad8]" size={20} /> Security
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium italic text-left">
                    Innovation Dynamics Group LLC reserves the right to cancel or refuse any order (e.g., fraud suspicion, incorrect pricing, or stock issues). Additional charges may include applicable taxes and shipping fees.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Shipping & Delivery */}
            <section id="shipping" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">06</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Shipping & Delivery</h2>
              </div>
              <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-lg text-left">
                 <ul className="space-y-5 text-[15px] text-gray-600 font-medium leading-relaxed italic text-left">
                   <li className="flex items-start gap-4">
                     <Truck className="text-[#024ad8] flex-shrink-0 mt-1" size={18} />
                     <span>Delivery timelines are estimates only and may vary based on location and carrier.</span>
                   </li>
                   <li className="flex items-start gap-4">
                     <ShieldCheck className="text-[#024ad8] flex-shrink-0 mt-1" size={18} />
                     <span>Risk of loss transfers once the order is handed to the shipping carrier.</span>
                   </li>
                   <li className="flex items-start gap-4">
                     <MapPin className="text-[#024ad8] flex-shrink-0 mt-1" size={18} />
                     <span>Customers must ensure accurate delivery details; extra fees apply for remote locations.</span>
                   </li>
                 </ul>
                 <div className="mt-8 p-6 bg-gray-50 border-l-4 border-[#024ad8] text-xs font-bold uppercase text-gray-500 italic text-left">
                    International orders may be subject to customs duties or taxes. Please refer to our Shipping Policy for complete details.
                 </div>
              </div>
            </section>

            {/* 7. Returns & Refunds */}
            <section id="returns" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">07</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Returns & Refunds</h2>
              </div>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <p className="text-[15px] text-gray-600 leading-relaxed font-semibold italic text-left uppercase">Requirements:</p>
                    <ul className="space-y-2 text-sm text-gray-500 font-medium italic">
                      <li>• Initiate within the specified return window</li>
                      <li>• Items must be unused and in original packaging</li>
                      <li>• Refunds processed after inspection</li>
                      <li>• Certain items may be ineligible for return</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 border border-gray-200 rounded-sm self-center">
                    <p className="text-xs text-[#024ad8] font-black uppercase tracking-widest text-center">Refer to our Refund Policy for full technical details.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Intellectual Property */}
            <section id="ip" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">08</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Intellectual Property</h2>
              </div>
              <div className="bg-black text-white p-12 rounded-sm shadow-xl relative overflow-hidden border-l-4 border-[#024ad8] text-left">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#024ad8]/10 rounded-full blur-2xl -mr-16 -mt-16 text-left"></div>
                 <p className="text-sm text-gray-400 font-bold leading-relaxed relative z-10 italic uppercase text-left mb-6">
                   All website content is protected by applicable intellectual property laws. You may not copy, reproduce, or distribute content without permission.
                 </p>
                 <div className="p-4 bg-white/5 border border-white/10 rounded-sm text-[10px] text-[#024ad8] font-black uppercase tracking-[0.2em] relative z-10">
                   All third-party trademarks remain the property of their respective owners.
                 </div>
              </div>
            </section>

            {/* 9. Limitation of Liability */}
            <section id="liability" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">09</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Limitation of Liability</h2>
              </div>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                <p className="text-[15px] text-gray-600 leading-relaxed font-semibold italic text-left text-left mb-8">
                  To the maximum extent permitted by law, Innovation Dynamics Group LLC is not liable for:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {[
                    "Indirect, incidental, or consequential damages",
                    "Losses due to misuse of products or 3rd-party services",
                    "Delays caused by carriers or external providers",
                    "Unauthorized system access by third parties"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase italic">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-8 pt-8 border-t border-gray-200 text-sm text-black font-black uppercase tracking-tight italic">
                  Our total liability is limited to the amount paid for the purchased product.
                </p>
              </div>
            </section>

            {/* 10. Compliance & Fair Use */}
            <section id="compliance" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">10</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Compliance & Fair Use</h2>
              </div>
              <div className="bg-white p-10 rounded-sm border border-[#024ad8]/20 shadow-xl text-left">
                <p className="text-[15px] text-gray-600 leading-relaxed font-semibold italic text-left text-left">
                  We are committed to transparent and fair business practices in accordance with applicable advertising and consumer protection standards. Users agree not to misuse the website for deceptive, abusive, or unlawful purposes.
                </p>
              </div>
            </section>

            {/* 11. Governing Law */}
            <section id="law" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">11</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Governing Law</h2>
              </div>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                  <div className="space-y-2">
                    <p className="text-[10px] text-[#024ad8] font-black uppercase tracking-widest">Canada Operations</p>
                    <p className="text-sm font-semibold italic text-gray-500">Governed by Canadian law for customers located in Canada.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] text-[#024ad8] font-black uppercase tracking-widest">USA Operations</p>
                    <p className="text-sm font-semibold italic text-gray-500">Governed by applicable U.S. laws for customers located in the United States.</p>
                  </div>
                </div>
                <p className="mt-8 text-xs text-gray-400 font-bold uppercase italic text-left">
                  Any disputes shall be resolved in the appropriate jurisdiction based on the customer's location.
                </p>
              </div>
            </section>

            {/* 12. Changes to Terms */}
            <section id="changes" className="space-y-8 text-left text-left text-left">
              <div className="flex items-center gap-5 text-left text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">12</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Changes to Terms</h2>
              </div>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left text-left">
                <p className="text-[15px] text-gray-600 leading-relaxed font-semibold italic text-left text-left">
                  We may update these Terms periodically. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the website constitutes acceptance of revised Terms.
                </p>
              </div>
            </section>

            {/* 13. Contact Information */}
            <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-lg relative overflow-hidden border-t-4 border-[#024ad8] text-left">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#024ad8]/5 rounded-full blur-3xl -mr-24 -mt-24 text-left"></div>
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-5 relative z-10 text-left italic uppercase text-left text-left text-left">
                <HelpCircle className="text-[#024ad8]" size={36} />
                Contact Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 text-left">
                <div className="space-y-10 text-left">
                  <div className="flex gap-6 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                      <Mail className="text-[#024ad8]" size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Legal Support</p>
                      <p className="text-sm text-white text-left font-medium">support@innovationdynamicsgroup.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                      <Phone className="text-[#024ad8]" size={24} />
                    </div>
                    <div className="text-left text-left">
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left text-left text-left">Direct Voice</p>
                      <p className="text-sm text-white text-left font-bold tracking-tight italic">+1 (651) 815-4630</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-start group text-left text-left text-left">
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                    <MapPin className="text-[#024ad8]" size={24} />
                  </div>
                  <div className="text-left text-left">
                    <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Operational HQ</p>
                    <p className="text-sm text-white leading-relaxed font-medium italic text-left text-left text-left">
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
      <div className="bg-gray-50 py-10 border-t border-gray-100 text-left text-left">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed italic text-left text-left text-left">
            Innovation Dynamics Group LLC © 2026 • Verified Legal Framework • Terminal Security Active
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
