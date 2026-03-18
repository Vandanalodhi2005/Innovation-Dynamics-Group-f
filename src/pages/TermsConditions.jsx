import React from "react";
import { FileText, ShieldCheck, ShoppingBag, Truck, CreditCard, Info, Mail, Phone, MapPin, AlertCircle, Scale } from "lucide-react";
import terms from '../../public/images/terms.jpg';

const TermsConditions = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* Hero Section */}
      <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0">
          <img
            src={terms}
            alt="Terms Background"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10">
              <Scale size={14} /> Legal Framework
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight">
              Terms & <br/><span className="text-[#024ad8]">Conditions</span>
            </h1>
            <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              These terms govern the use of the website operated by Innovation Dynamics Group LLC.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em]">
              <p>Effective Date: March 17, 2026</p>
              <p>Last Updated: March 17, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

          {/* Sidebar Navigation - Sticky */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8">Quick Navigation</h3>
              <nav className="space-y-1">
                {[
                  { id: 'use', label: 'Use of Website', icon: <FileText size={15} /> },
                  { id: 'product', label: 'Product Info', icon: <Info size={15} /> },
                  { id: 'orders', label: 'Orders & Payments', icon: <ShoppingBag size={15} /> },
                  { id: 'shipping', label: 'Shipping Policy', icon: <Truck size={15} /> },
                  { id: 'legal', label: 'Liability & IP', icon: <ShieldCheck size={15} /> },
                  { id: 'contact', label: 'Contact Us', icon: <Mail size={15} /> }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-4 px-4 py-3 rounded-sm transition-all hover:bg-[#024ad8] hover:text-white text-gray-500 font-semibold text-sm group border border-transparent hover:shadow-md"
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

          {/* Content Area */}
          <div className="lg:col-span-3 space-y-20">
            
            {/* Introduction */}
            <section className="space-y-4 border-l-4 border-[#024ad8] pl-8 py-4 bg-gray-50/50 rounded-r-sm">
              <p className="text-base text-gray-600 leading-relaxed font-medium">
                By accessing or using our website, you agree to comply with these Terms and Conditions. 
                Innovation Dynamics Group LLC provides a specialized platform focused on printers and printing technology.
              </p>
              <p className="text-sm text-red-600 font-semibold">
                If you do not agree with any part of these terms, you should not use our website or services.
              </p>
            </section>

            {/* Use of the Website */}
            <section id="use" className="space-y-8">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">01</span>
                <h2 className="text-3xl font-bold text-black tracking-tight">Use of the Website</h2>
              </div>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">You agree not to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Use the website for fraudulent activities",
                  "Gain unauthorized access to systems",
                  "Disrupt website functionality",
                  "Reproduce content without permission"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-sm border border-gray-100 shadow-sm text-sm text-gray-600 font-medium group hover:border-[#024ad8]/40 transition-colors">
                    <AlertCircle className="text-[#024ad8] flex-shrink-0 mt-0.5" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Product Information */}
            <section id="product" className="space-y-8">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">02</span>
                <h2 className="text-3xl font-bold text-black tracking-tight">Product Information</h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 space-y-5">
                <p className="text-[15px] leading-relaxed text-gray-600 font-medium">
                  Innovation Dynamics Group LLC specializes in printers and printing solutions. We strive for accuracy in descriptions, pricing, and specifications.
                </p>
                <div className="p-4 bg-white rounded-sm border border-blue-100/60 shadow-sm flex items-start gap-3 text-[#024ad8] text-sm font-medium">
                   <Info size={18} className="flex-shrink-0 mt-0.5" />
                   Product information may change without notice. Images are for reference; actual products may vary by manufacturer.
                </div>
              </div>
            </section>

            {/* Orders and Payments */}
            <section id="orders" className="space-y-8">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">03</span>
                <h2 className="text-3xl font-bold text-black tracking-tight">Orders & Payments</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-5 p-8 bg-white rounded-sm border border-gray-100 shadow-md group hover:border-[#024ad8]/40 transition-all hover:-translate-y-0.5">
                  <h3 className="font-bold text-black flex items-center gap-3 text-xl">
                    <CreditCard className="text-[#024ad8]" size={24} /> Authorization
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    All information provided must be accurate, and payment methods must be valid and authorized.
                  </p>
                </div>
                <div className="space-y-5 p-8 bg-white rounded-sm border border-gray-100 shadow-md group hover:border-[#024ad8]/40 transition-all hover:-translate-y-0.5">
                  <h3 className="font-bold text-black flex items-center gap-3 text-xl">
                    <AlertCircle className="text-[#024ad8]" size={24} /> Verification
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Orders may be subject to verification. We reserve the right to cancel suspicious or fraudulent orders.
                  </p>
                </div>
              </div>
              <div className="p-10 bg-black text-white rounded-sm shadow-lg relative overflow-hidden border-l-4 border-[#024ad8]">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-[#024ad8]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                 <h4 className="font-bold mb-4 text-xl relative z-10">Pricing Policy</h4>
                 <p className="text-sm text-gray-400 font-medium leading-relaxed relative z-10">
                   Prices are subject to change without notice. In case of pricing errors, we reserve the right to cancel orders and notify customers.
                 </p>
              </div>
            </section>

            {/* Shipping */}
            <section id="shipping" className="space-y-8">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">04</span>
                <h2 className="text-3xl font-bold text-black tracking-tight">Shipping & Returns</h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 space-y-4">
                <div className="flex items-start gap-4">
                  <Truck className="text-[#024ad8] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-black mb-2">Delivery Policy</h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      Orders are processed and shipped within 1–3 business days. Delivery times vary based on location and shipping method selected. Tracking information is provided upon dispatch.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                  <ShieldCheck className="text-[#024ad8] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-black mb-2">Return Policy</h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      Items may be returned within 30 days if unused and in original packaging. Refer to our full Return & Exchange page for eligibility and process details.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Liability */}
            <section id="legal" className="space-y-8">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">05</span>
                <h2 className="text-3xl font-bold text-black tracking-tight">Limitation of Liability</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-10 rounded-sm border border-gray-100">
                  <div className="p-6 bg-white rounded-sm shadow-md border border-gray-50 flex-shrink-0">
                      <ShieldCheck size={48} className="text-[#024ad8]" />
                  </div>
                  <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                      We shall not be liable for incidental or consequential damages resulting from the use of our website or products. Customers must ensure products meet their requirements before purchase.
                  </p>
              </div>
            </section>
              
            {/* Contact Section */}
            <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-lg relative overflow-hidden border-t-4 border-[#024ad8]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#024ad8]/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-5 relative z-10">
                <Mail className="text-[#024ad8]" size={36} />
                Contact Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                <div className="space-y-8">
                  <div className="flex gap-5 items-start group">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all">
                      <Mail className="text-[#024ad8]" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Email</p>
                      <p className="text-sm text-white">support@innovationdynamicsgroup.com</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start group">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all">
                      <Phone className="text-[#024ad8]" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Phone</p>
                      <p className="text-sm text-white">+1 (651) 815-4630</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-start group">
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all">
                    <MapPin className="text-[#024ad8]" size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Headquarters</p>
                    <p className="text-sm text-white">
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
    </div>
  );
};

export default TermsConditions;
