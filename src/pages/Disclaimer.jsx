import React from "react";
import { ShieldAlert, Info, ExternalLink, Scale, Mail, Phone, MapPin, AlertCircle, FileText, Layout } from "lucide-react";

const Disclaimer = () => {
  const sections = [
    { id: 'business',  label: 'Business Info',         icon: <Layout size={15} /> },
    { id: 'brand',     label: 'Manufacturer & Brand',  icon: <FileText size={15} /> },
    { id: 'product',   label: 'Product Information',   icon: <Info size={15} /> },
    { id: 'links',     label: 'External Links',        icon: <ExternalLink size={15} /> },
    { id: 'liability', label: 'Limitation of Liability', icon: <Scale size={15} /> },
    { id: 'contact',   label: 'Contact Us',            icon: <Mail size={15} /> },
  ];

  return (
    <div className="bg-white text-black min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 sm:py-28 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/desclaimer.jpg"
            alt="Disclaimer Background"
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="max-w-2xl mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 text-[#024ad8] text-xs font-semibold mb-5 tracking-wide">
              <ShieldAlert size={16} /> Legal Disclaimer
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white leading-tight">
              Disclaimer
            </h1>
            <div className="w-12 h-1 bg-[#024ad8] mb-6"></div>
            <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed mb-6">
              Important information regarding product representation, trademarks, and website usage.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-gray-500 font-medium text-xs">
              <p>Effective Date: March 17, 2026</p>
              <p>Last Updated: March 17, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Sidebar – desktop only */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-1">
              <h3 className="text-xs font-semibold text-[#024ad8] mb-5 tracking-wide uppercase">Sections</h3>
              <nav className="space-y-0.5">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-sm transition-all hover:bg-[#024ad8]/5 hover:text-[#024ad8] text-gray-500 font-medium text-sm group border-l-2 border-transparent hover:border-[#024ad8]"
                  >
                    <span className="text-gray-300 group-hover:text-[#024ad8] transition-colors flex-shrink-0">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Mobile section nav pills */}
          <div className="lg:hidden col-span-1 -mx-4 px-4 overflow-x-auto">
            <div className="flex gap-2 pb-2 min-w-max">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-sm bg-gray-50 border border-gray-100 text-gray-500 text-xs font-medium whitespace-nowrap hover:bg-[#024ad8]/5 hover:text-[#024ad8] hover:border-[#024ad8]/20 transition-all"
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 space-y-12 sm:space-y-16 text-gray-600">

            {/* Intro Quote */}
            <section className="text-sm sm:text-base leading-relaxed border-l-4 border-[#024ad8] pl-5 sm:pl-8 py-3 font-medium italic bg-gray-50/70">
              <p>
                The information provided on the website operated by Innovation Dynamics Group LLC is for general informational and commercial purposes only. By using our website, you agree to the terms outlined in this disclaimer.
              </p>
            </section>

            {/* Section helper */}
            {[
              {
                id: 'business',
                num: '01',
                title: 'Business Information',
                content: (
                  <p className="leading-relaxed font-medium text-sm sm:text-base">
                    Innovation Dynamics Group LLC is an online retailer specializing in printers and printing solutions for home users, professionals, and businesses. Our website is designed to help customers browse, compare, and purchase printing products through a convenient online platform.
                  </p>
                )
              },
              {
                id: 'brand',
                num: '02',
                title: 'Manufacturer & Brand',
                content: (
                  <div className="bg-[#F8F9FA] p-5 sm:p-8 rounded-sm border border-gray-100 space-y-4">
                    <p className="leading-relaxed font-semibold text-[#024ad8] text-sm sm:text-base">
                      Innovation Dynamics Group LLC operates as an independent retailer.
                    </p>
                    <p className="leading-relaxed font-medium text-sm text-gray-500">
                      We are a member of the HP Amplify Partner Program and offer printing products from trusted manufacturers. All trademarks, brand names, logos, and product images displayed on this website belong to their respective owners and are used strictly for identification and informational purposes.
                    </p>
                    <div className="flex gap-3 items-start bg-white p-4 rounded-sm border border-blue-100 text-gray-500 text-sm">
                      <AlertCircle className="text-[#024ad8] flex-shrink-0 mt-0.5" size={16} />
                      <p>Unless otherwise stated, Innovation Dynamics Group LLC is not owned, operated, or directly affiliated with any manufacturer.</p>
                    </div>
                  </div>
                )
              },
              {
                id: 'product',
                num: '03',
                title: 'Product Information',
                content: (
                  <div className="space-y-4">
                    <p className="leading-relaxed font-medium text-sm sm:text-base text-gray-500">
                      We make reasonable efforts to ensure that product descriptions, specifications, images, and pricing information on our website are accurate.
                    </p>
                    <div className="p-5 sm:p-7 bg-black text-white rounded-sm border-l-4 border-[#024ad8]">
                      <h4 className="font-bold mb-3 text-sm">Policy Notice</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Product details may occasionally change without notice, and Innovation Dynamics Group LLC does not guarantee that all information displayed on the website is always complete, current, or free from errors.
                      </p>
                    </div>
                  </div>
                )
              },
              {
                id: 'links',
                num: '04',
                title: 'External Links',
                content: (
                  <div className="flex gap-4 sm:gap-6 items-start bg-[#F8F9FA] p-5 sm:p-8 rounded-sm border border-gray-100">
                    <ExternalLink className="text-[#024ad8] flex-shrink-0 mt-1" size={22} />
                    <div className="space-y-3 min-w-0">
                      <p className="leading-relaxed font-medium text-sm sm:text-base">
                        Our website may contain links to third-party websites for additional information or services. These websites operate independently and have their own policies.
                      </p>
                      <p className="font-semibold text-sm text-red-600">
                        Innovation Dynamics Group LLC is not responsible for the content, accuracy, or practices of third-party websites.
                      </p>
                    </div>
                  </div>
                )
              },
              {
                id: 'liability',
                num: '05',
                title: 'Limitation of Liability',
                content: (
                  <div className="bg-white p-5 sm:p-8 rounded-sm border border-gray-100 shadow-sm">
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                      <div className="p-4 bg-[#F8F9FA] rounded-sm border border-blue-50 flex-shrink-0">
                        <Scale size={36} className="text-[#024ad8]" />
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-500 leading-relaxed font-medium text-sm sm:text-base">
                          Innovation Dynamics Group LLC shall not be held responsible for any direct, indirect, incidental, or consequential damages resulting from the use of our website or the purchase or use of products available through our platform.
                        </p>
                        <p className="text-[#024ad8] font-semibold text-sm border-t border-gray-100 pt-4">
                          Customers are responsible for reviewing product specifications and ensuring that products meet their individual requirements before making a purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                )
              }
            ].map(({ id, num, title, content }) => (
              <section key={id} id={id} className="space-y-5 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 text-black">
                  <span className="bg-[#024ad8] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {num}
                  </span>
                  {title}
                </h2>
                {content}
              </section>
            ))}

            {/* Contact Section */}
            <section id="contact" className="bg-black text-white p-6 sm:p-10 rounded-sm border-t-4 border-[#024ad8]">
              <h2 className="text-xl sm:text-2xl font-bold mb-7 flex items-center gap-3">
                <Mail className="text-[#024ad8] flex-shrink-0" size={24} />
                Contact & Support
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-white/5 rounded-sm border border-white/10 flex-shrink-0">
                      <Mail className="text-[#024ad8]" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#024ad8] font-semibold mb-1">Email</p>
                      <p className="text-sm font-semibold break-all">support@innovationdynamicsgroup.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-white/5 rounded-sm border border-white/10 flex-shrink-0">
                      <Phone className="text-[#024ad8]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#024ad8] font-semibold mb-1">Phone</p>
                      <p className="text-sm font-semibold">+1 (651) 815-4630</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/5 rounded-sm border border-white/10 flex-shrink-0">
                    <MapPin className="text-[#024ad8]" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[#024ad8] font-semibold mb-1">Our Location</p>
                    <p className="text-sm font-semibold leading-relaxed">
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
