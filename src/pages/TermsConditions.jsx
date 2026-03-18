import React from "react";
import { FileText, ShieldCheck, ShoppingBag, Truck, CreditCard, Info, Mail, Phone, MapPin, AlertCircle, Scale } from "lucide-react";
import terms from '../../public/images/terms.jpg';

const TermsConditions = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen font-serif italic">
      
      {/* Hero Section */}
      <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden italic">
        <div className="absolute inset-0 z-0">
          <img
            src={terms}
            alt="Terms Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#024ad8]/20 text-[#024ad8] px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase border border-[#024ad8]/30">
              <Scale size={16} /> Legal Agreement
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white italic underline decoration-[#024ad8] decoration-4 underline-offset-8">Terms & Conditions</h1>
            <div className="w-24 h-1.5 bg-[#024ad8] mb-8 rounded-full mx-auto md:mx-0"></div>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-4">
              These terms govern the use of the website operated by Innovation Dynamics Group LLC.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-400 font-medium text-sm">
              <p>Effective Date: March 17, 2026</p>
              <p>Last Updated: March 17, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 text-gray-800">

          {/* Sidebar Navigation - Sticky */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Quick Links</h3>
              <nav className="space-y-2">
                {[
                  { id: 'use', label: 'Use of Website', icon: <FileText size={18} /> },
                  { id: 'product', label: 'Product Info', icon: <Info size={18} /> },
                  { id: 'orders', label: 'Orders & Payments', icon: <ShoppingBag size={18} /> },
                  { id: 'shipping', label: 'Shipping Policy', icon: <Truck size={18} /> },
                  { id: 'legal', label: 'Liability & IP', icon: <ShieldCheck size={18} /> },
                  { id: 'contact', label: 'Contact Us', icon: <Mail size={18} /> }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-blue-50 hover:text-[#024ad8] text-gray-600 font-medium group"
                  >
                    <span className="text-gray-400 group-hover:text-[#024ad8] transition-colors">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Introduction */}
            <section className="text-lg leading-relaxed space-y-4 border-l-4 border-[#024ad8] pl-8 py-2">
              <p>
                By accessing or using our website, you agree to comply with these Terms and Conditions. 
                Innovation Dynamics Group LLC provides a specialized platform focused on printers and printing technology.
              </p>
              <p className="font-bold text-red-900">
                If you do not agree with any part of these terms, you should not use our website or services.
              </p>
            </section>

            {/* Use of the Website */}
            <section id="use" className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#024ad8] decoration-2">
                <span className="bg-[#024ad8] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">1</span>
                Use of the Website
              </h2>
              <p className="font-medium text-gray-600">By using our website, you agree to use it only for lawful purposes. You agree not to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Use the website for fraudulent activities",
                  "Gain unauthorized access to systems",
                  "Disrupt website functionality",
                  "Reproduce content without permission"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <AlertCircle className="text-[#024ad8] flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-bold text-sm uppercase italic">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Product Information */}
            <section id="product" className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#024ad8] decoration-2">
                <span className="bg-[#024ad8] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">2</span>
                Product Information
              </h2>
              <div className="bg-blue-50/30 p-8 rounded-3xl border border-blue-50 space-y-4">
                <p className="leading-relaxed">
                  Innovation Dynamics Group LLC specializes in printers and printing solutions. We strive for accuracy in descriptions, pricing, and specifications.
                </p>
                <p className="text-sm text-gray-500 italic">
                  * Product information may change without notice. Images are for reference; actual products may vary by manufacturer.
                </p>
              </div>
            </section>

            {/* Orders and Payments */}
            <section id="orders" className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#024ad8] decoration-2">
                <span className="bg-[#024ad8] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">3</span>
                Orders and Payments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h3 className="font-bold flex items-center gap-2 italic">
                    <CreditCard className="text-[#024ad8]" size={20} /> Payment Authorization
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed italic uppercase font-bold">
                    All information provided must be accurate, and payment methods must be valid and authorized.
                  </p>
                </div>
                <div className="space-y-4 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h3 className="font-bold flex items-center gap-2 italic">
                    <AlertCircle className="text-[#024ad8]" size={20} /> Order Verification
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed italic uppercase font-bold">
                    Orders may be subject to verification. We reserve the right to cancel suspicious or fraudulent orders.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-gray-900 text-white rounded-3xl mt-4">
                 <h4 className="font-bold mb-2">Pricing Policy</h4>
                 <p className="text-sm text-gray-400">
                   Prices are subject to change without notice. In case of pricing errors, we reserve the right to cancel orders and notify customers.
                 </p>
              </div>
            </section>

            {/* Shipping & Returns */}
            <section id="shipping" className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#024ad8] decoration-2">
                <span className="bg-[#024ad8] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">4</span>
                Shipping & Policies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <Truck className="text-[#024ad8] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold uppercase text-sm border-b border-gray-100 pb-2 mb-2">Shipping Policy</h4>
                      <p className="text-sm text-gray-600 leading-relaxed italic">
                        Not responsible for carrier delays, weather, or external factors. Delivery times vary by location.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <ShoppingBag className="text-[#024ad8] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold uppercase text-sm border-b border-gray-100 pb-2 mb-2">Returns & Refunds</h4>
                      <p className="text-sm text-gray-600 leading-relaxed italic">
                        Handled according to our specific Return & Refund Policy. Please review carefully before purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Intellectual Property & Brand */}
            <section id="legal" className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#024ad8] decoration-2">
                <span className="bg-[#024ad8] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">5</span>
                Ownership & Branding
              </h2>
              <div className="space-y-6">
                <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                  <h3 className="font-bold mb-4 italic">Intellectual Property</h3>
                  <p className="text-sm text-gray-700 leading-relaxed italic mb-4">
                    All content including text, graphics, logos, and design is the property of Innovation Dynamics Group LLC. Unauthorized reproduction is strictly prohibited.
                  </p>
                </div>
                <div className="p-8 bg-blue-50/50 rounded-[2.5rem] border border-blue-100">
                  <h3 className="font-bold mb-4 italic">Brand Information</h3>
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    Innovation Dynamics Group LLC is a member of the HP Amplify Partner Program. All trademarks and logos belong to their respective owners and are used for identification only.
                  </p>
                </div>
              </div>
            </section>

            {/* Liability & Changes */}
            <section className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-900 text-white p-10 rounded-[3rem]">
                    <div className="p-6 bg-white/10 rounded-3xl border border-white/5 backdrop-blur-sm">
                        <ShieldCheck size={48} className="text-[#024ad8]" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold italic underline decoration-[#024ad8] decoration-2 underline-offset-4">Limitation of Liability</h3>
                        <p className="text-sm text-gray-400 leading-relaxed italic">
                            We shall not be liable for incidental or consequential damages resulting from the use of our website or products. Customers must ensure products meet their requirements before purchase.
                        </p>
                    </div>
                </div>
                <p className="text-xs text-center text-gray-400 italic pt-4">
                   Innovation Dynamics Group LLC reserves the right to update or modify these terms at any time.
                </p>
            </section>

            {/* Contact Information */}
            <section id="contact" className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 italic shadow-sm">
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 underline decoration-[#024ad8] decoration-2">
                <Mail className="text-[#024ad8]" size={32} />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                   <div className="flex gap-4 items-start">
                     <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <Mail className="text-[#024ad8]" size={20} />
                     </div>
                     <div>
                        <p className="text-xs text-[#024ad8] font-bold uppercase tracking-widest mb-1">Email Support</p>
                        <p className="font-bold">support@innovationdynamicsgroup.com</p>
                     </div>
                   </div>
                   <div className="flex gap-4 items-start">
                     <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <Phone className="text-[#024ad8]" size={20} />
                     </div>
                     <div>
                        <p className="text-xs text-[#024ad8] font-bold uppercase tracking-widest mb-1">Phone Line</p>
                        <p className="font-bold">+1 (651) 815-4630</p>
                     </div>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                      <MapPin className="text-[#024ad8]" size={20} />
                   </div>
                   <div>
                      <p className="text-xs text-[#024ad8] font-bold uppercase tracking-widest mb-1">Office Location</p>
                      <address className="not-italic font-bold leading-relaxed">
                        Innovation Dynamics Group LLC<br />
                        11397 Quincy St NE<br />
                        Blaine, MN 55434<br />
                        United States
                      </address>
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
