import React from "react";
import { Truck, MapPin, Clock, Package, Search, AlertCircle } from "lucide-react";
import shipping from '../../public/images/shipping.jpg';

const sections = [
  {
    num: "01",
    icon: <MapPin size={20} />,
    title: "Shipping Locations",
    content: [
      "We currently ship to all U.S. states and territories where carrier services are available.",
      "At this time, we do not offer international shipping."
    ]
  },
  {
    num: "02",
    icon: <Clock size={20} />,
    title: "Processing Times",
    content: [
      "Orders are typically processed within:",
      "• 1–2 business days for printers and hardware",
      "• 1 business day for consumables (ink & toner)",
      "Processing times may vary during high-volume periods or carrier disruptions."
    ]
  },
  {
    num: "03",
    icon: <Truck size={20} />,
    title: "Delivery Estimates",
    content: [
      "Delivery times depend on the shipping option selected at checkout:",
      "• Standard Shipping: 3–7 business days",
      "• Expedited Shipping: 2–4 business days",
      "• Priority Shipping: 1–3 business days",
      "These are estimates and are not guaranteed delivery dates."
    ]
  },
  {
    num: "04",
    icon: <Package size={20} />,
    title: "Shipping Fees",
    content: [
      "Shipping fees are calculated based on:",
      "• Product size and weight",
      "• Delivery destination",
      "• Selected shipping speed",
      "The total shipping cost is displayed clearly before you complete your purchase."
    ]
  },
  {
    num: "05",
    icon: <Search size={20} />,
    title: "Order Tracking",
    content: [
      "Once your order ships, you will receive:",
      "• A shipping confirmation email",
      "• Your carrier tracking number",
      "• A link to track your package in real time",
      "Please allow a few hours for tracking information to become active after dispatch."
    ]
  },
  {
    num: "06",
    icon: <AlertCircle size={20} />,
    title: "Address Accuracy",
    content: [
      "Please make sure your shipping address is correct before placing your order.",
      "An incorrect address may result in:",
      "• Delivery delays",
      "• Returned packages",
      "• Additional re-shipping charges",
      "If you notice an error after ordering, please contact us immediately."
    ]
  }
];

const ShippingPolicy = () => {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 sm:py-28 overflow-hidden border-b-4 border-[#024ad8]">
        <div className="absolute inset-0 z-0">
          <img
            src={shipping}
            alt="Shipping and Delivery"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#024ad8] text-xs font-semibold mb-5">
              <Truck size={16} /> Shipping & Delivery Policy
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white leading-tight">
              Shipping &amp; <span className="text-[#024ad8]">Delivery</span>
            </h1>
            <div className="w-12 h-1 bg-[#024ad8] mb-5"></div>
            <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-xl">
              Everything you need to know about how we process, ship, and deliver your orders across the United States.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">

        {/* Meta row */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-100 pb-6 gap-3">
          <p className="text-xs text-[#024ad8] font-semibold bg-blue-50 px-3 py-1.5 rounded-sm border border-blue-100">
            Policy Ref: SHIP-2026
          </p>
          <p className="text-xs text-gray-400 font-medium">
            Effective: March 17, 2026
          </p>
        </div>

        {/* Intro */}
        <section className="text-sm sm:text-base leading-relaxed border-l-4 border-[#024ad8] pl-5 sm:pl-8 py-3 font-medium italic bg-gray-50 text-gray-600">
          <p>
            This Shipping &amp; Delivery Policy explains how orders placed with{" "}
            <strong className="text-black not-italic">Innovation Dynamics Group LLC</strong>{" "}
            are processed and delivered within the United States. By placing an order, you agree to the terms outlined below.
          </p>
        </section>

        {/* Section cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6">
          {sections.map((section) => (
            <div
              key={section.num}
              className="p-5 sm:p-7 bg-white rounded-sm border border-gray-100 shadow-sm hover:border-[#024ad8]/40 hover:shadow-md transition-all group"
            >
              <h2 className="text-base sm:text-lg font-bold text-black flex items-center gap-3 mb-4">
                <span className="bg-[#024ad8] text-white w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {section.num}
                </span>
                <span className="text-[#024ad8] flex-shrink-0">{section.icon}</span>
                {section.title}
              </h2>
              <div className="w-10 h-0.5 bg-[#024ad8]/20 group-hover:w-full transition-all duration-500 mb-4"></div>
              <ul className="space-y-2">
                {section.content.map((line, i) => (
                  <p key={i} className={`text-sm leading-relaxed ${line.startsWith('•') ? 'text-gray-500 pl-2' : 'text-gray-600 font-medium'}`}>
                    {line}
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Notice */}
      <div className="bg-black py-10 sm:py-12 border-t border-[#024ad8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-xs text-[#024ad8] font-medium leading-relaxed">
            By placing an order, you confirm that you have read and agreed to this Shipping &amp; Delivery Policy.
          </p>
          <p className="text-xs text-gray-500">
            Innovation Dynamics Group LLC © 2026
          </p>
        </div>
      </div>

    </div>
  );
};

export default ShippingPolicy;
