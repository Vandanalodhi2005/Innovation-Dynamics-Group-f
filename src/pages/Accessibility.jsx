import React from "react";
import { Accessibility as AccessibilityIcon, ShieldCheck, Mail, Phone, MapPin, Eye, Info, CheckCircle, Smartphone, Keyboard, MessageSquare } from "lucide-react";

const Accessibility = () => {
  const sections = [
    { id: 'commitment', label: '1. Our Commitment', icon: <AccessibilityIcon size={15} /> },
    { id: 'standards', label: '2. Standards & Guidelines', icon: <ShieldCheck size={15} /> },
    { id: 'features', label: '3. Website Features', icon: <Smartphone size={15} /> },
    { id: 'keyboard', label: '3.1 Keyboard Navigation', icon: <Keyboard size={15} /> },
    { id: 'visual', label: '3.2 Visual Contrast', icon: <Eye size={15} /> },
    { id: 'assistive', label: '4. Assistive Tech', icon: <Info size={15} /> },
    { id: 'ongoing', label: '5. Ongoing Efforts', icon: <CheckCircle size={15} /> },
    { id: 'feedback', label: '6. User Feedback', icon: <MessageSquare size={15} /> },
    { id: 'contact', label: '7. Support Contact', icon: <Mail size={15} /> }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans text-left">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-12 pointer-events-none text-left">
          <AccessibilityIcon size={500} className="absolute -top-20 -left-20" />
        </div>

        <div className="absolute inset-0 z-0 text-left">
          <img
            src="/images/access.jpg"
            alt="Accessibility Background"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-left">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10 text-left text-left">
              <AccessibilityIcon size={14} /> Global Standard
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic text-left text-left">
              Accessi<span className="text-[#024ad8]">bility</span>
            </h1>
            <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl text-left text-left">
              Innovation Dynamics Group LLC protocol for providing an inclusive digital environment accessible to the widest possible audience.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] text-left text-left">
              <p>Policy Version: 2.1-A</p>
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
              <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">System Navigation</h3>
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
          <div className="lg:col-span-3 space-y-20 text-gray-600">
            
            {/* 1. Commitment */}
            <section id="commitment" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">01</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Our Commitment</h2>
              </div>
              <div className="bg-gray-50/50 border-l-4 border-[#024ad8] p-8 space-y-4 rounded-r-sm text-left">
                <p className="text-base font-semibold leading-relaxed italic text-left">
                  Innovation Dynamics Group LLC strives to ensure that its services are accessible to people with disabilities. We hold that every user has the right to navigate the digital world with dignity, equality, and independence.
                </p>
              </div>
            </section>

            {/* 2. Standards */}
            <section id="standards" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">02</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Standards & Guidelines</h2>
              </div>
              <div className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm space-y-8 text-left">
                <p className="text-sm font-semibold italic text-gray-500 leading-relaxed text-left text-left">
                  We utilize the <strong>Web Content Accessibility Guidelines (WCAG 2.1)</strong> as our primary framework. These protocols ensure our digital touchpoints are Perceivable, Operable, Understandable, and Robust.
                </p>
                <div className="flex items-center gap-4 p-5 bg-blue-50/50 border border-blue-100/50 rounded-sm text-[#024ad8] text-[11px] font-black uppercase tracking-[0.2em] italic text-left">
                  <ShieldCheck size={18} /> TARGET COMPLIANCE: WCAG 2.1 LEVEL AA
                </div>
              </div>
            </section>

            {/* 3. Features */}
            <section id="features" className="space-y-12 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">03</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Technical features</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                {/* 3.1 Keyboard */}
                <div id="keyboard" className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm space-y-6 hover:border-[#024ad8]/40 transition-all text-left">
                  <h3 className="font-extrabold text-black flex items-center gap-4 text-lg uppercase italic text-left">
                    <Keyboard className="text-[#024ad8]" size={22} /> Keyboard control
                  </h3>
                  <p className="text-[13px] font-bold text-gray-500 italic leading-relaxed text-left">
                    All interactive elements on our storefront can be triggered via keyboard commands, supporting users who operate without traditional pointer devices.
                  </p>
                </div>

                {/* 3.2 Visual */}
                <div id="visual" className="p-10 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm space-y-6 hover:border-[#024ad8]/40 transition-all text-left">
                  <h3 className="font-extrabold text-black flex items-center gap-4 text-lg uppercase italic text-left">
                    <Eye className="text-[#024ad8]" size={22} /> Contrast fidelity
                  </h3>
                  <p className="text-[13px] font-bold text-gray-500 italic leading-relaxed text-left">
                    We maintain rigorous color contrast ratios across all textual and UI elements to optimize visibility for users with visual impairments.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Assistive Tech */}
            <section id="assistive" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">04</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left text-left">Assistive Technology</h2>
              </div>
              <div className="bg-black text-white p-12 rounded-sm shadow-xl relative overflow-hidden group text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#024ad8]/10 rounded-full blur-3xl group-hover:bg-[#024ad8]/20 transition-all duration-[1500ms] text-left"></div>
                <p className="text-sm font-bold leading-relaxed relative z-10 italic text-left text-left">
                  Our platform is regularly AUDITED with common screen reading hardware (NVDA, JAWS, VoiceOver) to ensure structural integrity and product metadata reach all users correctly.
                </p>
              </div>
            </section>

            {/* 5. Ongoing Efforts */}
            <section id="ongoing" className="space-y-10 text-left text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">05</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Continuous Evolution</h2>
              </div>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 text-left">
                <p className="text-[15px] font-semibold italic text-gray-600 leading-relaxed text-left text-left">
                  Digital accessibility is an ongoing journey. We perform quarterly audits of our checkout flow and product pages to identify and dismantle barriers to access, ensuring a first-class experience for every user.
                </p>
              </div>
            </section>

            {/* 6. Feedback */}
            <section id="feedback" className="space-y-10 text-left">
              <div className="flex items-center gap-5 text-left text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md text-left">06</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">User assistance</h2>
              </div>
              
              <div className="bg-white p-10 border border-red-100 rounded-sm shadow-xl shadow-red-50/20 flex flex-col md:flex-row gap-10 items-center text-left">
                <MessageSquare className="text-red-600 shrink-0" size={48} />
                <p className="text-sm font-bold text-gray-500 italic leading-relaxed text-left">
                  If you encounter any obstacles while navigating Innovation Dynamics Group LLC, our specialized support terminal is available to assist you in completing your procurement.
                </p>
              </div>
            </section>

            {/* 7. Contact Section */}
            <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-2xl relative overflow-hidden border-t-4 border-[#024ad8] text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#024ad8]/5 rounded-full blur-3xl -mr-32 -mt-32 text-left"></div>
              <h2 className="text-3xl font-extrabold mb-12 flex items-center gap-6 relative z-10 uppercase italic text-left">
                <Mail className="text-[#024ad8]" size={36} />
                Support Center
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 text-left">
                <div className="space-y-10 text-left">
                  <div className="flex gap-6 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                      <Mail className="text-[#024ad8]" size={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Direct Message</p>
                      <p className="text-sm text-white font-medium text-left">support@innovationdynamicsgroup.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                      <Phone className="text-[#024ad8]" size={24} />
                    </div>
                    <div className="text-left text-left">
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Operational Voice</p>
                      <p className="text-sm text-white font-bold tracking-tight italic text-left">+1 (651) 815-4630</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-start group text-left text-left">
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all text-left">
                    <MapPin className="text-[#024ad8]" size={24} />
                  </div>
                  <div className="text-left text-left">
                    <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Operational HQ</p>
                    <p className="text-sm text-white leading-relaxed font-bold italic text-left text-left">
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
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed italic text-center">
            Innovation Dynamics Group LLC © 2026 • Inclusive Design Verified • terminal active
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
