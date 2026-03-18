import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Info, CheckCircle2 } from 'lucide-react';
import contactImage from '../../public/images/contact.jpg';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you shortly!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-32 md:py-48 overflow-hidden border-b-8 border-[#024ad8]">
        <div className="absolute inset-0 z-0">
          <img
            src={contactImage}
            alt="Contact Support"
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 text-[#024ad8] text-[10px] font-extrabold mb-10 tracking-[0.4em] uppercase bg-white/5 backdrop-blur-sm px-5 py-2 rounded-sm border border-white/10">
              <Mail size={16} /> CONNECTIVITY HUB
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-10 tracking-tighter text-white uppercase leading-[0.9]">SUPPORT <br/> <span className="text-[#024ad8]">CHANNELS</span></h1>
            <div className="w-24 h-2 bg-[#024ad8] mb-12 shadow-xl shadow-[#024ad8]/20"></div>
            <p className="text-lg md:text-xl text-gray-500 font-bold leading-relaxed mb-12 uppercase tracking-[0.2em] max-w-2xl">
              INNOVATION DYNAMICS GROUP LLC PROVIDES DIRECT CHANNELS FOR PRODUCT INQUIRIES, LOGISTICAL ASSISTANCE, AND CORPORATE COMMUNICATIONS.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">

          {/* Left Side: Contact Form & Welcome Message */}
          <div className="space-y-24">
            <div className="prose prose-lg text-gray-500 border-l-8 border-[#024ad8] pl-12 font-extrabold uppercase tracking-wide text-sm italic leading-relaxed">
              <p>
                OUR OBJECTIVE IS TO MAINTAIN HIGH-FIDELITY COMMUNICATION WITH HOME USERS, EDUCATIONAL INSTITUTIONS, AND CORPORATE ENTITIES SEEKING PRECISION PRINTING INFRASTRUCTURE.
              </p>
            </div>

            <div className="bg-white p-12 md:p-20 rounded-sm border border-gray-50 shadow-2xl relative group">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#024ad8]"></div>
              <h2 className="text-3xl font-extrabold mb-12 flex items-center gap-6 text-black uppercase tracking-tighter">
                <Send className="text-[#024ad8]" size={32} />
                MESSAGE TRANSMISSION
              </h2>
              <p className="text-gray-300 mb-12 font-extrabold uppercase tracking-[0.3em] text-[10px]">
                SUBMIT YOUR INQUIRY THROUGH OUR ENCRYPTED CORPORATE CHANNEL.
              </p>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">IDENTITY NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-sm border border-gray-100 focus:border-[#024ad8] outline-none transition-all bg-[#F8F9FA] font-extrabold uppercase tracking-widest text-[11px] placeholder:text-gray-200"
                      placeholder="FULL REGISTERED NAME"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">ELECTRONIC MAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-sm border border-gray-100 focus:border-[#024ad8] outline-none transition-all bg-[#F8F9FA] font-extrabold uppercase tracking-widest text-[11px] placeholder:text-gray-200"
                      placeholder="EMAIL@DOMAIN.COM"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">SUBJECT MATTER</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-sm border border-gray-100 focus:border-[#024ad8] outline-none transition-all bg-[#F8F9FA] font-extrabold uppercase tracking-widest text-[11px] placeholder:text-gray-200"
                    placeholder="INQUIRY CATEGORY / ASSET CODE"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.4em]">INQUIRY DETAILS</label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-8 py-6 rounded-sm border border-gray-100 focus:border-[#024ad8] outline-none transition-all bg-[#F8F9FA] font-extrabold uppercase tracking-widest text-[11px] placeholder:text-gray-200 resize-none min-h-[180px]"
                    placeholder="PROVIDE DETAILED REQUIREMENTS AND SYSTEM METRICS..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-[#024ad8] text-white font-extrabold py-6 rounded-sm shadow-2xl shadow-black/10 transition-all uppercase tracking-[0.5em] text-[11px] transform hover:-translate-y-1 active:translate-y-0"
                >
                  CONFIRM TRANSMISSION
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Contact Info, Hours, Disclaimer */}
          <div className="space-y-24">
            <h2 className="text-5xl font-extrabold mb-16 text-black uppercase tracking-tighter">COMMAND CENTER</h2>

            <div className="space-y-16">
              {/* Email */}
              <div className="flex gap-10 items-start group">
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-xl group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-700 transform group-hover:-rotate-6">
                  <Mail className="text-[#024ad8] group-hover:text-white" size={36} />
                </div>
                <div>
                  <h3 className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.5em] mb-4">ELECTRONIC FILING</h3>
                  <p className="text-black font-extrabold text-2xl uppercase tracking-tighter mb-2">support@innovationdynamicsgroup.com</p>
                  <p className="text-gray-300 text-[9px] font-extrabold uppercase tracking-[0.3em] italic">MTBF: 24 CORPORATE HOURS</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-10 items-start group">
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-xl group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-700 transform group-hover:rotate-12">
                  <Phone className="text-[#024ad8] group-hover:text-white" size={36} />
                </div>
                <div>
                  <h3 className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.5em] mb-4">LOGISTICAL VOICE TERMINAL</h3>
                  <p className="text-black font-extrabold text-2xl uppercase tracking-tighter mb-2">+1 (651) 815-4630</p>
                  <p className="text-gray-300 text-[9px] font-extrabold uppercase tracking-[0.3em]">SECURE VOICE ENCRYPTION ACTIVE</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-10 items-start group">
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-xl group-hover:bg-[#024ad8] group-hover:text-white transition-all duration-700 transform group-hover:-translate-y-2">
                  <MapPin className="text-[#024ad8] group-hover:text-white" size={36} />
                </div>
                <div>
                  <h3 className="text-[10px] font-extrabold text-[#024ad8] uppercase tracking-[0.5em] mb-4">CORPORATE HEADQUARTERS</h3>
                  <p className="text-black font-extrabold text-2xl uppercase tracking-tighter leading-[1.1]">11397 QUINCY ST NE,<br />BLAINE, MN 55434</p>
                  <p className="text-gray-300 text-[9px] font-extrabold uppercase tracking-[0.3em] mt-4">OFFICIAL USA OPERATIONS FACILITY</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-black text-white p-16 rounded-sm shadow-2xl relative overflow-hidden border-l-[12px] border-[#024ad8] transform hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#024ad8]/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-extrabold mb-12 flex items-center gap-6 uppercase tracking-tighter">
                <Clock className="text-[#024ad8]" size={36} />
                OPERATIONAL WINDOW
              </h3>
              <div className="space-y-8 font-extrabold uppercase tracking-[0.2em] text-[11px]">
                <div className="flex justify-between border-b border-white/5 pb-6 items-center">
                  <span className="text-gray-500">MON – FRI</span>
                  <span className="text-white text-base tracking-tighter">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-6 items-center">
                  <span className="text-gray-500">SATURDAY</span>
                  <span className="text-white text-base tracking-tighter">10:00 – 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">SUNDAY</span>
                  <span className="text-[#024ad8] text-base tracking-tighter">OFFLINE</span>
                </div>
              </div>
              <p className="mt-12 text-[9px] text-gray-700 font-extrabold uppercase tracking-[0.4em] italic">REFERENCE: CENTRAL STANDARD TIME (CST)</p>
            </div>

            {/* Capability Disclaimer */}
            <div className="bg-[#F8F9FA] p-12 rounded-sm border border-gray-100 shadow-inner">
              <h3 className="text-[10px] font-extrabold text-[#024ad8] mb-10 uppercase tracking-[0.5em]">OPERATIONAL CAPABILITIES</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  "ASSET PROCUREMENT",
                  "INFORMATICS",
                  "AVAILABILITY DATA",
                  "LOGISTICS REVIEWS",
                  "SUPPLY METADATA",
                  "INVENTORY SYNC"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <CheckCircle2 size={16} className="text-[#024ad8] group-hover:scale-125 transition-transform" />
                    <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex gap-8 p-8 bg-white rounded-sm border border-blue-100/50 shadow-sm transform hover:-translate-y-1 transition-all">
                <Info className="text-[#024ad8] flex-shrink-0" size={28} />
                <p className="text-[9px] text-gray-400 font-extrabold uppercase tracking-[0.3em] leading-relaxed italic">
                  NOTICE: COMMUNICATIONS ARE STRICTLY LIMITED TO PRODUCT ACQUISITION METADATA. TECHNICAL SUPPORT TERMINALS ARE NOT ACCESSIBLE VIA THIS LINK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slogan */}
      <div className="py-32 text-center bg-[#F8F9FA] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-4xl font-extrabold mb-10 text-black uppercase tracking-tighter leading-[1.1]">OPTIMIZING PRINTING INFRASTRUCTURE ACQUISITION</h3>
          <p className="text-gray-400 font-extrabold italic text-sm leading-relaxed uppercase tracking-[0.2em] max-w-3xl mx-auto">
            INNOVATION DYNAMICS GROUP LLC IS ENGINEERED TO PROVIDE PRECISE INFORMATION, DEPENDABLE HARDWARE, AND A HIGH-FIDELITY ENGAGEMENT MODEL.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Contact;
