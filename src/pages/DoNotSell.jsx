import React from "react";
import { ShieldX, AlertCircle, Mail, Phone, MapPin, UserCheck, Lock, Info, Landmark, ShieldCheck, FileText, Send } from "lucide-react";

const DoNotSell = () => {
  const sections = [
    { id: 'rights', label: '1. Your Rights', icon: <Lock size={15} /> },
    { id: 'definitions', label: '2. Definitions', icon: <Info size={15} /> },
    { id: 'opt-out', label: '3. Opt-Out Request', icon: <Send size={15} /> },
    { id: 'verification', label: '4. Verification', icon: <UserCheck size={15} /> },
    { id: 'agents', label: '5. Authorized Agents', icon: <Landmark size={15} /> },
    { id: 'minors', label: '6. Minors Protection', icon: <ShieldCheck size={15} /> },
    { id: 'policy', label: '7. Full Privacy Policy', icon: <FileText size={15} /> },
    { id: 'contact', label: '8. Contact Support', icon: <Mail size={15} /> }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-28 md:py-40 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform rotate-12 pointer-events-none">
          <ShieldX size={500} className="absolute -top-20 -right-20" />
        </div>

        <div className="absolute inset-0 z-0">
          <img
            src="/images/doNotSell.jpg"
            alt="Data Privacy Background"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[#024ad8] text-[10px] font-bold mb-8 tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10">
              <Lock size={14} /> CCPA / CPRA Compliance
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight uppercase italic">
              Do Not Sell <br/><span className="text-[#024ad8]">My Information</span>
            </h1>
            <div className="w-16 h-1.5 bg-[#024ad8] mb-8 mx-auto md:mx-0"></div>
            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              California residents have the right to opt-out of the "sale" or "sharing" of their personal information.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em]">
              <p>Legal Framework: CCPA/CPRA</p>
              <p>Updated: March 26, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

          {/* Sidebar Navigation - Sticky */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <h3 className="text-[10px] font-bold text-[#024ad8] uppercase tracking-[0.3em] mb-8 text-left">Quick Actions</h3>
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
          <div className="lg:col-span-3 space-y-20 text-gray-600">
            
            {/* 1. Commitment */}
            <section id="rights" className="space-y-10">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">01</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic">Your Privacy Rights</h2>
              </div>
              <div className="bg-gray-50/50 border-l-4 border-[#024ad8] p-8 space-y-4 rounded-r-sm">
                <p className="text-base font-medium leading-relaxed italic text-left">
                  Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents have the right to request that a business not sell or share their personal information.
                </p>
              </div>
            </section>

            {/* 2. Definitions */}
            <section id="definitions" className="space-y-8 text-left">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">02</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">What “Sell” or “Share” Means</h2>
              </div>
              <div className="bg-black text-white p-10 rounded-sm shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#024ad8]/10 rounded-full blur-3xl group-hover:bg-[#024ad8]/20 transition-all duration-700"></div>
                <div className="space-y-4 relative z-10 text-left">
                  <p className="text-sm font-medium leading-relaxed italic text-gray-400">
                    Innovation Dynamics Group LLC does NOT sell personal information for monetary compensation. However, under California law, sharing data for cross-context behavioral advertising or transferring data through certain third-party cookies may be classified as "selling" or "sharing."
                  </p>
                  <p className="text-[#024ad8] font-bold text-sm uppercase tracking-widest">We do not sell customer data lists.</p>
                </div>
              </div>
            </section>

            {/* 3. Opt-Out Request */}
            <section id="opt-out" className="space-y-12 text-left">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">03</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">How to Opt-Out</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="p-8 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm space-y-6 hover:border-[#024ad8]/30 transition-all text-left">
                  <h3 className="font-extrabold text-black flex items-center gap-4 text-lg italic text-left">
                    <Mail className="text-[#024ad8]" size={22} /> Digital Submission
                  </h3>
                  <p className="text-[13px] font-medium leading-relaxed text-left">
                    Email our privacy team with the statement "Do Not Sell My Personal Information."
                  </p>
                  <p className="text-[#024ad8] font-black text-sm text-left">support@innovationdynamicsgroup.com</p>
                </div>

                <div className="p-8 bg-white border border-gray-100 shadow-xl shadow-gray-50 rounded-sm space-y-6 hover:border-[#024ad8]/30 transition-all text-left">
                  <h3 className="font-extrabold text-black flex items-center gap-4 text-lg italic text-left">
                    <Phone className="text-[#024ad8]" size={22} /> Voice Support
                  </h3>
                  <p className="text-[13px] font-medium leading-relaxed text-left">
                    Call our support terminal during business hours for assistance with your request.
                  </p>
                  <p className="text-black font-black text-sm text-left">+1 (651) 815-4630</p>
                </div>
              </div>
            </section>

            {/* 4. Verification */}
            <section id="verification" className="space-y-8 text-left">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">04</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Verification Process</h2>
              </div>
              <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm space-y-4 text-left">
                <p className="text-sm font-medium leading-relaxed text-left">
                  To protect your privacy, we must verify your identity before processing any opt-out request. This may include matching information you provide against our internal records (such as order email address).
                </p>
              </div>
            </section>

            {/* 5. Authorized Agents */}
            <section id="agents" className="space-y-8 text-left">
              <div className="flex items-center gap-5">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">05</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Authorized Agents</h2>
              </div>
              <p className="text-[15px] font-medium leading-relaxed text-left">
                You may designate an authorized agent to submit an opt-out request on your behalf. We require written proof of the agent's permission and direct verification of your identity.
              </p>
            </section>

            {/* 6. Minors Protection */}
            <section id="minors" className="space-y-8 text-left">
              <div className="flex items-center gap-5 text-left">
                <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">06</span>
                <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Protection for Minors</h2>
              </div>
              <div className="bg-red-50 p-10 rounded-sm border border-red-100 flex flex-col md:flex-row gap-10 items-center text-left">
                <AlertCircle className="text-red-500 shrink-0" size={48} />
                <p className="text-sm font-medium leading-relaxed text-left">
                  We do not knowingly sell or share the personal information of consumers who are under 16 years of age.
                </p>
              </div>
            </section>

            {/* 7. Full Policy */}
            <section id="policy" className="space-y-8 text-left">
                <div className="flex items-center gap-5 text-left">
                    <span className="bg-[#024ad8] text-white w-12 h-12 rounded-sm flex items-center justify-center text-lg font-bold shadow-md">07</span>
                    <h2 className="text-3xl font-bold text-black tracking-tight uppercase italic text-left">Full Privacy Disclosure</h2>
                </div>
                <div className="p-8 bg-gray-50 rounded-sm border border-gray-100 space-y-6 text-left">
                    <p className="text-sm font-medium leading-relaxed text-left italic">
                        For complete details on the types of information we collect and how it is used, please visit our comprehensive Privacy Policy.
                    </p>
                </div>
            </section>

            {/* 8. Contact Section */}
            <section id="contact" className="bg-black text-white p-10 md:p-14 rounded-sm shadow-lg relative overflow-hidden border-t-4 border-[#024ad8]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#024ad8]/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-5 relative z-10 text-left">
                <Landmark className="text-[#024ad8]" size={36} />
                Legal Inquiries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 text-left">
                <div className="space-y-8 text-left">
                  <div className="flex gap-5 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all">
                      <Mail className="text-[#024ad8]" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Privacy Comms</p>
                      <p className="text-sm text-white text-left">privacy@innovationdynamicsgroup.com</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all">
                      <MapPin className="text-[#024ad8]" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em] mb-2 text-left">Corporate HQ</p>
                      <p className="text-sm text-white text-left font-medium leading-relaxed italic">
                        11397 Quincy St NE<br />
                        Blaine, MN 55434
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-start group text-left">
                    <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:bg-[#024ad8]/20 transition-all shrink-0">
                        <UserCheck className="text-[#024ad8]" size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-4 text-left">Compliance Protocol</p>
                       <p className="text-xs text-gray-400 font-medium leading-relaxed text-left italic">
                         Your request will be processed within the statutory timeframe mandated by the CCPA/CPRA (typically 15 business days for opt-out requests).
                       </p>
                    </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="bg-gray-50 py-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed">
            Innovation Dynamics Group LLC © 2026 • Verified Privacy Operations
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoNotSell;

