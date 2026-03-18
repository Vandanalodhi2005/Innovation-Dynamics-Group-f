import React from "react";
import { ShieldAlert, Info, ExternalLink, Scale, Mail, Phone, MapPin, AlertCircle, FileText, Layout } from "lucide-react";
import disclaimerImage from '../../public/images/desclaimer.jpg';

const Disclaimer = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen font-serif italic">
      
      {/* Hero Section */}
      <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden italic">
        <div className="absolute inset-0 z-0">
          <img
            src={disclaimerImage}
            alt="Disclaimer Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#0096d6]/20 text-[#0096d6] px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase border border-[#0096d6]/30">
              <ShieldAlert size={16} /> Legal Disclaimer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white italic underline decoration-[#0096d6] decoration-4 underline-offset-8">Disclaimer</h1>
            <div className="w-24 h-1.5 bg-[#0096d6] mb-8 rounded-full mx-auto md:mx-0"></div>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-4">
              Important information regarding product representation, trademarks, and website usage.
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
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Policy Sections</h3>
              <nav className="space-y-2">
                {[
                  { id: 'business', label: 'Business Info', icon: <Layout size={18} /> },
                  { id: 'brand', label: 'Manufacturer & Brand', icon: <FileText size={18} /> },
                  { id: 'product', label: 'Product Info', icon: <Info size={18} /> },
                  { id: 'links', label: 'External Links', icon: <ExternalLink size={18} /> },
                  { id: 'liability', label: 'Limitation of Liability', icon: <Scale size={18} /> },
                  { id: 'contact', label: 'Contact Us', icon: <Mail size={18} /> }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-blue-50 hover:text-[#0096d6] text-gray-600 font-medium group"
                  >
                    <span className="text-gray-400 group-hover:text-[#0096d6] transition-colors">
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
            <section className="text-lg leading-relaxed space-y-4 border-l-4 border-[#0096d6] pl-8 py-2">
              <p>
                The information provided on the website operated by Innovation Dynamics Group LLC is for general informational and commercial purposes only. By using our website, you agree to the terms outlined in this disclaimer.
              </p>
            </section>

            {/* Business Information */}
            <section id="business" className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">1</span>
                Business Information
              </h2>
              <p className="leading-relaxed">
                Innovation Dynamics Group LLC is an online retailer specializing in printers and printing solutions for home users, professionals, and businesses. Our website is designed to help customers browse, compare, and purchase printing products through a convenient online platform.
              </p>
            </section>

            {/* Manufacturer and Brand Disclaimer */}
            <section id="brand" className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">2</span>
                Manufacturer and Brand Disclaimer
              </h2>
              <div className="bg-blue-50/30 p-8 rounded-3xl border border-blue-50 space-y-4">
                <p className="leading-relaxed font-bold">Innovation Dynamics Group LLC operates as an independent retailer.</p>
                <p className="leading-relaxed">
                  We are a member of the HP Amplify Partner Program and offer printing products from trusted manufacturers. All trademarks, brand names, logos, and product images displayed on this website belong to their respective owners and are used strictly for identification and informational purposes.
                </p>
                <div className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-blue-100 italic text-sm">
                    <AlertCircle className="text-[#0096d6] flex-shrink-0" size={20} />
                    <p>Unless otherwise stated, Innovation Dynamics Group LLC is not owned, operated, or directly affiliated with any manufacturer.</p>
                </div>
              </div>
            </section>

            {/* Product Information */}
            <section id="product" className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">3</span>
                Product Information
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We make reasonable efforts to ensure that product descriptions, specifications, images, and pricing information on our website are accurate.
                </p>
                <p className="p-6 bg-gray-50 rounded-2xl border border-gray-100 italic text-sm font-bold uppercase">
                  However, product details may occasionally change without notice, and Innovation Dynamics Group LLC does not guarantee that all information displayed on the website is always complete, current, or free from errors.
                </p>
              </div>
            </section>

            {/* External Links */}
            <section id="links" className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">4</span>
                External Links
              </h2>
              <div className="flex gap-4 items-start bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <ExternalLink className="text-[#0096d6] flex-shrink-0" size={24} />
                <div className="space-y-4">
                  <p className="leading-relaxed italic">
                    Our website may contain links to third-party websites for additional information or services. These websites operate independently and have their own policies.
                  </p>
                  <p className="font-bold text-sm text-gray-600 uppercase italic">
                    Innovation Dynamics Group LLC is not responsible for the content, accuracy, or practices of third-party websites.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="liability" className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                <span className="bg-[#0096d6] text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl italic shadow-md shadow-blue-500/20">5</span>
                Limitation of Liability
              </h2>
              <div className="bg-slate-900 text-white p-10 rounded-[3rem] relative overflow-hidden italic shadow-xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#0096d6] opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                 <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div className="p-6 bg-white/10 rounded-3xl border border-white/5 backdrop-blur-sm">
                        <Scale size={48} className="text-[#0096d6]" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed italic">
                          Innovation Dynamics Group LLC shall not be held responsible for any direct, indirect, incidental, or consequential damages resulting from the use of our website or the purchase or use of products available through our platform.
                        </p>
                        <p className="text-[#0096d6] font-bold uppercase text-sm border-t border-white/10 pt-4">
                          Customers are responsible for reviewing product specifications and ensuring that products meet their individual requirements before making a purchase.
                        </p>
                    </div>
                 </div>
              </div>
            </section>

            {/* Changes & Contact */}
            <section className="space-y-12">
                <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 text-center">
                   <h3 className="font-bold flex items-center justify-center gap-2 mb-4 italic">
                      <AlertCircle className="text-[#0096d6]" size={20} /> Changes to This Disclaimer
                   </h3>
                   <p className="text-sm text-gray-600 italic leading-relaxed">
                     Innovation Dynamics Group LLC reserves the right to update or modify this Disclaimer at any time. Any updates will be posted on this page with the revised date.
                   </p>
                </div>

                <div id="contact" className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 italic shadow-sm">
                  <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 underline decoration-[#0096d6] decoration-2">
                    <Mail className="text-[#0096d6]" size={32} />
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                       <div className="flex gap-4 items-start">
                         <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                            <Mail className="text-[#0096d6]" size={20} />
                         </div>
                         <div>
                            <p className="text-xs text-[#0096d6] font-bold uppercase tracking-widest mb-1">Email us</p>
                            <p className="font-bold">support@innovationdynamicsgroup.com</p>
                         </div>
                       </div>
                       <div className="flex gap-4 items-start">
                         <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                            <Phone className="text-[#0096d6]" size={20} />
                         </div>
                         <div>
                            <p className="text-xs text-[#0096d6] font-bold uppercase tracking-widest mb-1">Call us</p>
                            <p className="font-bold">+1 (651) 815-4630</p>
                         </div>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                          <MapPin className="text-[#0096d6]" size={20} />
                       </div>
                       <div>
                          <p className="text-xs text-[#0096d6] font-bold uppercase tracking-widest mb-1">Business location</p>
                          <address className="not-italic font-bold leading-relaxed">
                            Innovation Dynamics Group LLC<br />
                            11397 Quincy St NE<br />
                            Blaine, MN 55434<br />
                            United States
                          </address>
                       </div>
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

export default Disclaimer;
