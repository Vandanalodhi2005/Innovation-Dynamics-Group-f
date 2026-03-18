import React from "react";
import { ShieldAlert, Info, ExternalLink, Scale, Mail, Phone, MapPin, AlertCircle, FileText, Layout } from "lucide-react";
import disclaimerImage from '../../public/images/desclaimer.jpg';

const Disclaimer = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* Hero Section */}
      <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0">
          <img
            src={disclaimerImage}
            alt="Disclaimer Background"
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[#024ad8] text-[11px] font-bold mb-8 tracking-[0.2em] uppercase">
              <ShieldAlert size={18} /> Legal Disclaimer
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight text-white uppercase leading-tight">Disclaimer</h1>
            <div className="w-16 h-1 bg-[#024ad8] mb-10 mx-auto md:mx-0"></div>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-10 uppercase tracking-wider">
              Important information regarding product representation, trademarks, and website usage.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-gray-500 font-bold text-[10px] uppercase tracking-widest">
              <p>Effective Date: March 17, 2026</p>
              <p>Last Updated: March 17, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 text-gray-600">

          {/* Sidebar Navigation - Sticky */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <h3 className="text-[11px] font-bold text-[#024ad8] uppercase tracking-[0.2em] mb-8">Policy Sections</h3>
              <nav className="space-y-1">
                {[
                  { id: 'business', label: 'Business Info', icon: <Layout size={16} /> },
                  { id: 'brand', label: 'Manufacturer & Brand', icon: <FileText size={16} /> },
                  { id: 'product', label: 'Product Info', icon: <Info size={16} /> },
                  { id: 'links', label: 'External Links', icon: <ExternalLink size={16} /> },
                  { id: 'liability', label: 'Limitation of Liability', icon: <Scale size={16} /> },
                  { id: 'contact', label: 'Contact Us', icon: <Mail size={16} /> }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-4 px-4 py-4 rounded-sm transition-all hover:bg-[#024ad8]/5 hover:text-[#024ad8] text-gray-500 font-bold text-[11px] uppercase tracking-wider group border-l-2 border-transparent hover:border-[#024ad8]"
                  >
                    <span className="text-gray-300 group-hover:text-[#024ad8] transition-colors">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-24">
            
            {/* Introduction */}
            <section className="text-lg leading-relaxed space-y-6 border-l-4 border-[#024ad8] pl-10 py-4 font-medium italic bg-gray-50/50">
              <p>
                The information provided on the website operated by Innovation Dynamics Group LLC is for general informational and commercial purposes only. By using our website, you agree to the terms outlined in this disclaimer.
              </p>
            </section>

            {/* Business Information */}
            <section id="business" className="space-y-10">
              <h2 className="text-3xl font-extrabold flex items-center gap-6 text-black uppercase tracking-tight">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-xl shadow-lg shadow-[#024ad8]/10">01</span>
                Business Information
              </h2>
              <p className="leading-relaxed font-medium">
                Innovation Dynamics Group LLC is an online retailer specializing in printers and printing solutions for home users, professionals, and businesses. Our website is designed to help customers browse, compare, and purchase printing products through a convenient online platform.
              </p>
            </section>

            {/* Manufacturer and Brand Disclaimer */}
            <section id="brand" className="space-y-10">
              <h2 className="text-3xl font-extrabold flex items-center gap-6 text-black uppercase tracking-tight">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-xl shadow-lg shadow-[#024ad8]/10">02</span>
                Manufacturer & Brand
              </h2>
              <div className="bg-[#F8F9FA] p-10 rounded-sm border border-gray-100 space-y-6">
                <p className="leading-relaxed font-extrabold text-[#024ad8] uppercase tracking-tight">Innovation Dynamics Group LLC operates as an independent retailer.</p>
                <p className="leading-relaxed font-medium">
                  We are a member of the HP Amplify Partner Program and offer printing products from trusted manufacturers. All trademarks, brand names, logos, and product images displayed on this website belong to their respective owners and are used strictly for identification and informational purposes.
                </p>
                <div className="flex gap-4 items-start bg-white p-6 rounded-sm border border-blue-100 font-bold text-[11px] uppercase tracking-widest text-gray-400">
                    <AlertCircle className="text-[#024ad8] flex-shrink-0" size={18} />
                    <p>Unless otherwise stated, Innovation Dynamics Group LLC is not owned, operated, or directly affiliated with any manufacturer.</p>
                </div>
              </div>
            </section>

            {/* Product Information */}
            <section id="product" className="space-y-10">
              <h2 className="text-3xl font-extrabold flex items-center gap-6 text-black uppercase tracking-tight">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-xl shadow-lg shadow-[#024ad8]/10">03</span>
                Product Information
              </h2>
              <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
                <p>
                  We make reasonable efforts to ensure that product descriptions, specifications, images, and pricing information on our website are accurate.
                </p>
                <div className="p-8 bg-black text-white rounded-sm shadow-2xl border-l-8 border-[#024ad8]">
                   <h4 className="font-extrabold mb-4 uppercase tracking-widest text-sm">Policy Notice</h4>
                   <p className="text-xs text-gray-400 leading-relaxed font-bold uppercase tracking-widest">
                     Product details may occasionally change without notice, and Innovation Dynamics Group LLC does not guarantee that all information displayed on the website is always complete, current, or free from errors.
                   </p>
                </div>
              </div>
            </section>

            {/* External Links */}
            <section id="links" className="space-y-10">
              <h2 className="text-3xl font-extrabold flex items-center gap-6 text-black uppercase tracking-tight">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-xl shadow-lg shadow-[#024ad8]/10">04</span>
                External Links
              </h2>
              <div className="flex gap-8 items-start bg-[#F8F9FA] p-10 rounded-sm border border-gray-100">
                <ExternalLink className="text-[#024ad8] flex-shrink-0" size={32} />
                <div className="space-y-4">
                  <p className="leading-relaxed font-medium">
                    Our website may contain links to third-party websites for additional information or services. These websites operate independently and have their own policies.
                  </p>
                  <p className="font-extrabold text-[10px] text-red-600 uppercase tracking-[0.3em]">
                    Innovation Dynamics Group LLC is not responsible for the content, accuracy, or practices of third-party websites.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="liability" className="space-y-10">
              <h2 className="text-3xl font-extrabold flex items-center gap-6 text-black uppercase tracking-tight">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-xl shadow-lg shadow-[#024ad8]/10">05</span>
                Liability Limitation
              </h2>
              <div className="bg-white p-12 rounded-sm border border-gray-100 shadow-2xl relative overflow-hidden group hover:border-[#024ad8]/30 transition-all duration-500">
                 <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                    <div className="p-6 bg-[#F8F9FA] rounded-sm shadow-xl border border-blue-50">
                        <Scale size={48} className="text-[#024ad8]" />
                    </div>
                    <div className="space-y-6">
                        <p className="text-gray-500 leading-relaxed font-medium">
                          Innovation Dynamics Group LLC shall not be held responsible for any direct, indirect, incidental, or consequential damages resulting from the use of our website or the purchase or use of products available through our platform.
                        </p>
                        <p className="text-[#024ad8] font-extrabold uppercase text-[11px] tracking-widest border-t border-gray-100 pt-6">
                          Customers are responsible for reviewing product specifications and ensuring that products meet their individual requirements before making a purchase.
                        </p>
                    </div>
                 </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-black text-white p-16 rounded-sm shadow-2xl relative overflow-hidden border-t-8 border-[#024ad8]">
              <h2 className="text-4xl font-extrabold mb-12 flex items-center gap-6 uppercase tracking-tight text-white">
                <Mail className="text-[#024ad8]" size={48} />
                Support Infrastructure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-12">
                  <div className="flex gap-8 items-start">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                      <Mail className="text-[#024ad8]" size={32} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Electronic Access</p>
                      <p className="text-lg font-extrabold uppercase tracking-tight">support@innovationdynamicsgroup.com</p>
                    </div>
                  </div>
                  <div className="flex gap-8 items-start">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                      <Phone className="text-[#024ad8]" size={32} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Telephone Protocol</p>
                      <p className="text-lg font-extrabold uppercase tracking-tight">+1 (651) 815-4630</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                    <MapPin className="text-[#024ad8]" size={32} />
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2">Central HQ</p>
                    <p className="font-extrabold text-xl leading-tight uppercase tracking-tight">
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

export default Disclaimer;
