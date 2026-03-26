import React from "react";
import { Cookie, ShieldCheck, Info, FileText, Settings, Globe, Mail, Phone, MapPin, Shield, RefreshCcw } from "lucide-react";

const CookiePolicy = () => {
  const sections = [
    { id: 'definition', label: '1. What Are Cookies?', icon: <Cookie size={15} /> },
    { id: 'types', label: '2. Types We Use', icon: <Settings size={15} /> },
    { id: 'essential', label: '2.1 Essential', icon: <Shield size={15} /> },
    { id: 'performance', label: '2.2 Performance', icon: <Info size={15} /> },
    { id: 'preference', label: '2.3 Preference', icon: <Settings size={15} /> },
    { id: 'marketing', label: '2.4 Marketing', icon: <Globe size={15} /> },
    { id: 'third-party', label: '3. Third-Parties', icon: <Globe size={15} /> },
    { id: 'control', label: '4. User Control', icon: <Settings size={15} /> },
    { id: 'dnt', label: '5. Do Not Track', icon: <Shield size={15} /> },
    { id: 'data', label: '6. Collected Data', icon: <FileText size={15} /> },
    { id: 'updates', label: '7. Policy Updates', icon: <RefreshCcw size={15} /> },
    { id: 'contact', label: '8. Contact Us', icon: <Mail size={15} /> }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans text-left">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none text-left">
          <Cookie size={500} className="absolute -top-20 -left-20" />
        </div>

        <div className="absolute inset-0 z-0 text-left">
          <img
            src="/images/cookies.jpg"
            alt="Cookie Background"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-left">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 text-left text-left">
              <Cookie size={14} /> Technology Consent
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic text-left text-left">
              Cookie <br/><span className="text-[#024ad8]">Policy</span>
            </h1>
            <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl text-left text-left">
              Innovation Dynamics Group LLC protocol for the utilization of cookies and tracking technologies to optimize digital interaction.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] text-left text-left">
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
              <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">Navigation hub</h3>
              <nav className="space-y-1 text-left">
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

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-20 text-gray-600 text-left">

            {/* Introduction */}
            <section className="space-y-4 border-l-4 border-[#024ad8] pl-8 py-4 bg-gray-50/50 rounded-r-sm font-medium text-left">
              <p className="text-base leading-relaxed italic text-left">
                This Cookie Policy establishes the legal and technical framework for how <strong>Innovation Dynamics Group LLC</strong> (“Company”, “we”, “our”, or “us”) uses tracking technologies.
              </p>
              <p className="text-xs text-black font-black uppercase tracking-widest text-left">
                Digital Consent Framework Active
              </p>
            </section>

            {/* 1. What Are Cookies? */}
            <section id="definition" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">01</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">What Are Cookies?</h2>
              </div>
              <div className="p-8 bg-gray-50 rounded-sm border border-gray-100 italic font-semibold leading-relaxed text-left text-left text-left">
                <p>Cookies are small text files stored on your device when you visit a website. They help websites remember preferences, shopping cart contents, and browsing patterns to provide a more personalized and efficient experience.</p>
              </div>
            </section>

            {/* 2. Types We Use */}
            <section id="types" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">02</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Types of Cookies We Use</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {/* 2.1 Essential */}
                <div id="essential" className="space-y-6 p-8 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm group hover:border-[#024ad8]/40 transition-all text-left">
                  <h3 className="font-extrabold text-black flex items-center gap-4 text-lg uppercase italic text-left">
                    <Shield className="text-[#024ad8]" size={22} /> Essential
                  </h3>
                  <div className="space-y-3 text-sm font-semibold text-gray-500 italic text-left text-left">
                    <p>Required for basic functionality such as navigation, shopping cart persistence, and secure checkout. These protocols cannot be disabled.</p>
                  </div>
                </div>

                {/* 2.2 Performance */}
                <div id="performance" className="space-y-6 p-8 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm group hover:border-[#024ad8]/40 transition-all text-left">
                  <h3 className="font-extrabold text-black flex items-center gap-4 text-lg uppercase italic text-left">
                    <Info className="text-[#024ad8]" size={22} /> Performance
                  </h3>
                  <div className="space-y-3 text-sm font-semibold text-gray-500 italic text-left">
                    <p>Help us understand visitor interactions, identify popular products, and identify technical issues using aggregated, anonymous data.</p>
                  </div>
                </div>

                {/* 2.3 Preference */}
                <div id="preference" className="space-y-6 p-8 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm group hover:border-[#024ad8]/40 transition-all text-left">
                  <h3 className="font-extrabold text-black flex items-center gap-4 text-lg uppercase italic text-left">
                    <Settings className="text-[#024ad8]" size={22} /> Preference
                  </h3>
                  <div className="space-y-3 text-sm font-semibold text-gray-500 italic text-left">
                    <p>Remember your settings, such as language preferences and location, to personalize your shopping experience across visits.</p>
                  </div>
                </div>

                {/* 2.4 Marketing */}
                <div id="marketing" className="space-y-6 p-8 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm group hover:border-[#024ad8]/40 transition-all text-left">
                  <h3 className="font-extrabold text-black flex items-center gap-4 text-lg uppercase italic text-left">
                    <Globe className="text-[#024ad8]" size={22} /> Marketing
                  </h3>
                  <div className="space-y-3 text-sm font-semibold text-gray-500 italic text-left">
                    <p>Used to show relevant advertisements based on your browsing behavior. These may be placed by our trusted advertising partners.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Third-Party */}
            <section id="third-party" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">03</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Third-Party Cookies</h2>
              </div>
              <p className="text-base font-semibold italic text-left">Trusted service providers that may place cookies include:</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {["Payment Processors", "Analytics Services", "Advertising Platforms", "Hosting Providers"].map((v, i) => (
                  <div key={i} className="p-4 rounded-sm bg-gray-50 border border-gray-100 text-center font-black text-[10px] text-gray-500 uppercase tracking-widest text-center">{v}</div>
                ))}
              </div>
              <div className="bg-black text-white p-12 rounded-sm border-l-4 border-[#024ad8] shadow-xl text-left">
                <p className="font-extrabold text-lg italic uppercase text-left">Innovation Dynamics Group LLC does not sell customer data to third parties.</p>
              </div>
            </section>

            {/* 4. User Control */}
            <section id="control" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">04</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">User Control</h2>
              </div>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 flex flex-col md:flex-row gap-10 items-center text-left">
                <Settings className="text-[#024ad8] flex-shrink-0" size={48} />
                <div className="space-y-4 text-left">
                  <p className="text-gray-700 font-black uppercase italic leading-relaxed text-sm text-left">
                    Most browsers allow you to block or delete cookies through their settings.
                  </p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest italic text-left text-left">Please note that disabling essential cookies may impact the performance and functionality of our storefront.</p>
                </div>
              </div>
            </section>

            {/* 5. DNT */}
            <section id="dnt" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">05</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Do Not Track Signals</h2>
              </div>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                <p className="text-sm font-semibold italic leading-relaxed text-left text-left">Our website currently does not alter its behavior in response to automated "Do Not Track" signals due to the lack of industry-standard protocols.</p>
              </div>
            </section>

            {/* 6. Collected Data */}
            <section id="data" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left text-left">06</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Data Matrix</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {["Device Type & Browser", "Non-Precise Location", "Navigation Activity", "Cart & Session History"].map((v, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-sm shadow-xl shadow-gray-50 font-black text-[10px] uppercase tracking-widest text-gray-500 group hover:border-[#024ad8]/40 transition-colors italic text-left">
                    <div className="w-2 h-2 bg-[#024ad8] group-hover:scale-150 transition-transform flex-shrink-0"></div>
                    {v}
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Updates */}
            <section id="updates" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">07</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Policy Updates</h2>
              </div>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left text-left">
                <p className="leading-relaxed font-semibold italic text-gray-600 text-left">We may update this policy periodically to reflect changes in technology or data protection regulations. We encourage you to review this page regularly for the latest information.</p>
              </div>
            </section>

            {/* 8. Contact Us */}
            <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden border-t-4 border-[#024ad8] text-left">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#024ad8]/5 rounded-full blur-3xl -mr-32 -mt-32 text-left"></div>
               <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-5 relative z-10 uppercase italic text-left">
                <Mail className="text-[#024ad8]" size={36} />
                Contact Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 text-left">
                <div className="space-y-10 text-left">
                  <div className="flex gap-6 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                      <Mail className="text-[#024ad8]" size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Email terminal</p>
                      <p className="text-sm text-white font-medium text-left">support@innovationdynamicsgroup.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                      <Phone className="text-[#024ad8]" size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Direct Voice</p>
                      <p className="text-sm text-white font-bold tracking-tight italic text-left">+1 (651) 815-4630</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-start group text-left">
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                    <MapPin className="text-[#024ad8]" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Operational HQ</p>
                    <p className="text-sm text-white text-left italic font-semibold leading-relaxed text-left">
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
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed italic text-left text-left text-left">
            Innovation Dynamics Group LLC © 2026 • Dedicated to Secure Digital Solutions • System Verified
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
