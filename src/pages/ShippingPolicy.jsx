import React from "react";
import { Truck } from "lucide-react";
import shipping from '../../public/images/shipping.jpg';

const ShippingPolicy = () => {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-black text-white py-32 md:py-48 overflow-hidden border-b-8 border-[#024ad8]">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={shipping}
            alt="Shipping and Delivery"
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 text-[#024ad8] text-[10px] font-extrabold mb-10 tracking-[0.4em] uppercase bg-white/5 backdrop-blur-sm px-5 py-2 rounded-sm border border-white/10">
              <Truck size={18} /> LOGISTICS PROTOCOL
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-10 tracking-tighter text-white uppercase leading-[0.9]">SHIPPING & <br/> <span className="text-[#024ad8]">DELIVERY</span></h1>
            <div className="w-24 h-2 bg-[#024ad8] mb-12 mx-auto md:mx-0 shadow-xl shadow-[#024ad8]/20"></div>
            <p className="text-lg md:text-xl text-gray-400 font-bold leading-relaxed mb-12 uppercase tracking-[0.2em] max-w-2xl">
              CLEAR PARAMETERS GOVERNING THE TRANSIT AND DISTRIBUTION OF HARDWARE ASSETS.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-32">

        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-12 gap-8">
            <p className="text-[10px] text-[#024ad8] font-extrabold uppercase tracking-[0.5em] bg-[#F8F9FA] px-4 py-2 rounded-sm border border-gray-100">
                PROTOCOL ID: SHIP-2026-ALPHA
            </p>
            <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-[0.5em]">
                EFFECTIVE: MARCH 17, 2026
            </p>
        </div>

        <section className="text-xl leading-relaxed space-y-8 border-l-8 border-[#024ad8] pl-12 py-6 font-extrabold uppercase tracking-wide text-sm italic bg-[#F8F9FA] text-gray-600">
          <p>
            THIS SHIPPING & DELIVERY POLICY EXPLAINS HOW ORDERS PLACED WITH 
            <strong className="text-black not-italic"> INNOVATION DYNAMICS GROUP LLC </strong>
            ARE PROCESSED AND DELIVERED WITHIN THE UNITED STATES.
            BY PLACING AN ORDER, YOU ACKNOWLEDGE COMPLIANCE WITH THE TERMS OUTLINED BELOW.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-12">
            {[
              {
                title: "01 SHIPPING LOCATIONS",
                content: `WE CURRENTLY SHIP TO ALL U.S. STATES AND TERRITORIES WHERE CARRIER SERVICES ARE OPERATIONAL.
                
                AT THIS TIME, INTERNATIONAL DISTRIBUTION IS NOT SUPPORTED BY OUR LOGISTICS NETWORK.`
              },
              {
                title: "02 PROCESSING TIMES",
                content: `ORDERS ARE TYPICALLY PROCESSED WITHIN:

                • 1–2 BUSINESS DAYS FOR PRINTER HARDWARE
                • 1 BUSINESS DAY FOR CONSUMABLES (INK & TONER)

                PROCESSING TIMES MAY VARY DURING PEAK OPERATIONAL VOLUMES OR CARRIER DISRUPTIONS.`
              },
              {
                title: "03 DELIVERY ESTIMATES",
                content: `TRANSIT TIMES ARE DEPENDENT ON SELECTED LOGISTICS TIER:

                • STANDARD LOGISTICS: 3–7 BUSINESS DAYS
                • EXPEDITED LOGISTICS: 2–4 BUSINESS DAYS
                • PRIORITY LOGISTICS: 1–3 BUSINESS DAYS

                DATES ARE ESTIMATES AND NOT GUARANTEED BY THE COMPANY.`
              },
              {
                title: "04 LOGISTICS FEES",
                content: `FEES ARE CALCULATED BASED ON CORE METRICS:

                • PRODUCT DIMENSION AND MASS
                • DESTINATION GEOLOCATION
                • SELECTED TRANSIT PRIORITY

                TOTAL COST IS CALCULATED AND DISPLAYED PRIOR TO TRANSACTION FINALIZATION.`
              },
              {
                title: "05 TRACKING PROTOCOLS",
                content: `POST-DISPATCH, THE SYSTEM WILL TRANSMIT:

                • SHIPPING CONFIRMATION DATA
                • CARRIER TRACKING ID
                • DIRECT MONITORING LINKS

                TRACKING DATA MAY REQUIRE SEVERAL HOURS FOR CARRIER SYNCHRONIZATION.`
              },
              {
                title: "06 ADDRESS ACCURACY",
                content: `CUSTOMERS MAINTAIN RESPONSIBILITY FOR ADDRESS DATA INTEGRITY.

                INACCURATE DATA MAY RESULT IN:
                • TRANSIT DELAYS
                • TERMINATED SHIPMENTS
                • RE-ROUTING SURCHARGES

                NOTIFY THEHUB IMMEDIATELY UPON DISCOVERY OF DATA ERRORS.`
              }
            ].map((section, index) => (
              <div key={index} className="space-y-8 p-12 bg-white rounded-sm border border-gray-100 shadow-2xl group hover:border-[#024ad8] transition-all transform hover:-translate-y-1">
                <h2 className="text-2xl font-extrabold text-black uppercase tracking-tighter flex items-center gap-6">
                  <span className="text-[#024ad8] text-xs font-black tracking-widest">{section.title.split(' ')[0]}</span>
                  {section.title.split(' ').slice(1).join(' ')}
                </h2>
                <div className="w-12 h-1 bg-[#024ad8]/20 group-hover:w-full transition-all duration-500"></div>
                <p className="text-[12px] text-gray-500 font-extrabold whitespace-pre-line leading-relaxed uppercase tracking-widest">
                  {section.content}
                </p>
              </div>
            ))}
        </div>

      </div>

      {/* Footer Notice */}
      <div className="bg-black py-24 border-t border-[#024ad8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-[11px] text-[#024ad8] font-extrabold uppercase tracking-[0.5em] leading-relaxed italic">
            COMPLIANCE NOTICE: ORDER PLACEMENT CONSTITUTES ACCEPTANCE OF THESE LOGISTICS PROTOCOLS.
          </p>
          <p className="text-[10px] text-gray-600 font-extrabold uppercase tracking-[0.2em]">
            INNOVATION DYNAMICS GROUP LLC © 2026
          </p>
        </div>
      </div>

    </div>
  );
};

export default ShippingPolicy;
