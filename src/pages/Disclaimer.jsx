import React from "react";
import { ShieldAlert, Info, ExternalLink, Scale, Mail, Phone, MapPin, AlertCircle, FileText, Layout, ShieldCheck, CheckCircle, Bell, Landmark } from "lucide-react";

const Disclaimer = () => {
  const sections = [
    { id: 'business',  label: '1. Business Info',    icon: <Layout size={15} /> },
    { id: 'brand',     label: '2. Brand Disclaimer',  icon: <Landmark size={15} /> },
    { id: 'product',   label: '3. Product Info',      icon: <Info size={15} /> },
    { id: 'links',     label: '4. External Links',    icon: <ExternalLink size={15} /> },
    { id: 'liability', label: '5. Liability Matrix',  icon: <Scale size={15} /> },
    { id: 'changes',   label: '6. Future Changes',    icon: <Bell size={15} /> },
    { id: 'contact',   label: '7. Contact Info',       icon: <Mail size={15} /> },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans text-left">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none text-left">
          <ShieldAlert size={500} className="absolute -top-20 -left-20" />
        </div>

        <div className="absolute inset-0 z-0 text-left">
          <img
            src="/images/desclaimer.jpg"
            alt="Legal Disclosure Background"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-left">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 text-left">
              <ShieldAlert size={14} /> Legal Disclosure
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic text-left">
               <br/><span className="text-[#024ad8]">Disclaimer</span>
            </h1>
            <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl text-left">
              The information provided on the website operated by Innovation Dynamics Group LLC is for general informational and commercial purposes only.
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
              <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">Disclosure Sections</h3>
              <nav className="space-y-1 text-left text-left">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all hover:bg-[#024ad8] hover:text-white text-gray-500 font-semibold text-[13px] group border border-transparent hover:shadow-md text-left"
                  >
                    <span className="text-[#024ad8] group-hover:text-white transition-colors text-left">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-20 text-gray-600 text-left text-left">

            {/* Introduction */}
            <section className="space-y-4 border-l-4 border-[#024ad8] pl-8 py-4 bg-gray-50/50 rounded-r-sm text-left">
              <p className="text-base leading-relaxed font-semibold italic text-left text-left">
                By using our website, you agree to the terms outlined in this disclaimer. Innovation Dynamics Group LLC provides this info to help customers browse and acquire printing products through a convenient online platform.
              </p>
            </section>

            {/* Content Sections */}
            <div className="space-y-20 text-left">
              <section id="business" className="space-y-8 text-left">
                <div className="flex items-center gap-5 text-left">
                  <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">01</span>
                  <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Business Information</h2>
                </div>
                <div className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm text-left">
                  <p className="text-[15px] leading-relaxed font-semibold italic text-left">
                    Innovation Dynamics Group LLC is an online retailer specializing in printers and printing solutions for home users, professionals, and businesses. Our platform is designed for professional product comparison and procurement.
                  </p>
                </div>
              </section>

              <section id="brand" className="space-y-8 text-left text-left">
                <div className="flex items-center gap-5 text-left">
                  <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">02</span>
                  <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Brand Disclaimer</h2>
                </div>
                <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 space-y-8 text-left">
                  <p className="leading-relaxed font-bold text-[#024ad8] text-lg uppercase italic text-left">
                    Innovation Dynamics Group LLC operates as an independent executive retailer.
                  </p>
                  <p className="leading-relaxed font-semibold text-gray-500 italic text-left">
                    We are a member of the <span className="font-black">HP Amplify Partner Program</span> and offer printing products from trusted manufacturers. All trademarks, brand names, logos, and product images displayed belong to their respective owners and are used strictly for identification purposes.
                  </p>
                  <div className="flex gap-4 items-start bg-white p-6 rounded-sm border-l-4 border-[#024ad8] text-gray-500 text-xs font-bold uppercase tracking-widest text-left">
                    <AlertCircle className="text-[#024ad8] flex-shrink-0" size={18} />
                    <p className="text-left">Unless otherwise stated, Innovation Dynamics Group LLC is not owned, operated, or directly affiliated with any manufacturer.</p>
                  </div>
                </div>
              </section>

              <section id="product" className="space-y-8 text-left text-left">
                <div className="flex items-center gap-5 text-left">
                  <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">03</span>
                  <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Product Information</h2>
                </div>
                <div className="space-y-8 text-left">
                  <p className="leading-relaxed font-semibold italic text-gray-500 text-left">
                    We make reasonable efforts to ensure that product descriptions, specifications, images, and pricing information on our website are accurate.
                  </p>
                  <div className="p-10 bg-black text-white rounded-sm border-l-4 border-[#024ad8] shadow-xl text-left">
                    <h4 className="font-extrabold mb-4 text-sm uppercase italic text-left">Data Accuracy Notice</h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-semibold italic text-left text-left">
                      Product details may occasionally change without notice, and Innovation Dynamics Group LLC does not guarantee that all information displayed is always complete, current, or free from errors.
                    </p>
                  </div>
                </div>
              </section>

              <section id="links" className="space-y-8 text-left">
                <div className="flex items-center gap-5 text-left">
                  <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">04</span>
                  <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">External Links</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-center bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                  <ExternalLink className="text-[#024ad8] shrink-0" size={48} />
                  <div className="space-y-4 text-left">
                    <p className="leading-relaxed font-semibold italic text-gray-600 text-left">
                      Our website may contain links to third-party websites for additional information or services. These websites operate independently and have their own distinct policies.
                    </p>
                    <p className="font-black text-xs text-[#024ad8] uppercase tracking-widest italic text-left">
                      Innovation Dynamics Group LLC is not responsible for the content, accuracy, or practices of third-party websites.
                    </p>
                  </div>
                </div>
              </section>

              <section id="liability" className="space-y-8 text-left">
                <div className="flex items-center gap-5 text-left">
                  <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">05</span>
                  <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Limitation of Liability</h2>
                </div>
                <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-xl shadow-gray-50 text-left">
                  <div className="flex flex-col md:flex-row gap-10 items-center text-left">
                    <div className="p-6 bg-gray-50 rounded-sm border border-[#024ad8]/10 text-left">
                      <Scale size={48} className="text-[#024ad8]" />
                    </div>
                    <div className="space-y-6 text-left">
                      <p className="text-gray-500 leading-relaxed font-semibold italic text-left text-left">
                        Innovation Dynamics Group LLC shall not be held responsible for any direct, indirect, incidental, or consequential damages resulting from the use of our website or the purchase or use of products available through our platform.
                      </p>
                      <p className="text-[#024ad8] font-black text-xs uppercase tracking-[0.2em] italic border-t border-gray-100 pt-6 text-left text-left">
                         Customers are responsible for reviewing product specifications and ensuring products meet individual requirements before purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="changes" className="space-y-8 text-left">
                <div className="flex items-center gap-5 text-left">
                  <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left text-left">06</span>
                  <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Future Changes</h2>
                </div>
                <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                  <p className="text-[15px] text-gray-600 leading-relaxed font-semibold italic text-left text-left">
                    Innovation Dynamics Group LLC reserves the right to update or modify this Disclaimer at any time. Any updates will be posted on this page with the revised date.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden border-t-4 border-[#024ad8] text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#024ad8]/5 rounded-full blur-3xl -mr-32 -mt-32 text-left"></div>
                <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-5 uppercase italic text-left text-left">
                  <Mail className="text-[#024ad8]" size={36} />
                  Contact Info
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  <div className="space-y-10 text-left">
                    <div className="flex gap-6 items-start group text-left">
                      <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                        <Mail className="text-[#024ad8]" size={24} />
                      </div>
                      <div className="text-left text-left">
                        <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Direct Communication</p>
                        <p className="text-sm text-white font-medium text-left">support@innovationdynamicsgroup.com</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start group text-left">
                      <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left text-left">
                        <Phone className="text-[#024ad8]" size={24} />
                      </div>
                      <div className="text-left text-left">
                        <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Terminal Support</p>
                        <p className="text-sm text-white font-bold tracking-tight italic text-left">+1 (651) 815-4630</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start group text-left text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                      <MapPin className="text-[#024ad8]" size={24} />
                    </div>
                    <div className="text-left text-left text-left">
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Operational HQ</p>
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
      </div>

      {/* Footer Status */}
      <div className="bg-gray-50 py-10 border-t border-gray-100 text-left text-left text-left text-left">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed italic text-left text-left text-left">
            Innovation Dynamics Group LLC © 2026 • Legal Framework Active • System Secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
