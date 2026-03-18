import React from "react";
import { RotateCcw } from "lucide-react";
import refund from '../../public/images/return.jpg';

const RefundPolicy = () => {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden border-b-4 border-[#024ad8]">
        
        {/* New Professional Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={refund}
            alt="Refund Policy Legal Background"
            className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RotateCcw className="mx-auto mb-10 text-[#024ad8]" size={64} />
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight uppercase leading-tight">
            Refund & Return <span className="text-[#024ad8]">Protocol</span>
          </h1>
          <div className="w-16 h-1 bg-[#024ad8] mx-auto mb-10"></div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-widest">
            Transparent return, exchange, and refund information to help you shop with confidence.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-20">

        <div className="flex justify-between items-center border-b border-gray-100 pb-8">
            <p className="text-[10px] text-[#024ad8] font-bold uppercase tracking-[0.3em]">
                System Standard: 4022-X
            </p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">
                Effective: February 21, 2026
            </p>
        </div>

        <section className="text-lg leading-relaxed space-y-6 border-l-4 border-[#024ad8] pl-10 py-4 font-medium italic bg-gray-50/50 text-gray-600">
          <p>
            Thank you for shopping with <strong>Innovation Dynamics Group LLC</strong>. 
            This Refund & Return Policy explains how returns, exchanges, and refunds are handled 
            for purchases of printers, Ink & Toner, and printing accessories made through our online store.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "1. Eligibility for Returns",
                content: `We accept returns within 30 days of delivery for most unused and unopened items.

    • Item must be new and unused  
    • Original packaging intact  
    • All accessories included  
    • Valid proof of purchase required  

    Non-returnable items include opened Ink & Toner, broken seals, clearance items, or products not in original condition.`
              },
              {
                title: "2. Return Process",
                content: `To start a return:

    • Email support@innovationdynamicsgroup.com  
    • Provide order number and reason  
    • Wait for approval instructions  
    • Ship item to approved address  

    Return shipping costs are the customer’s responsibility unless the error was ours.`
              },
              {
                title: "3. Refunds",
                content: `After inspection:

    • Refund issued to original payment method  
    • Processing time: 3–7 business days  
    • Shipping fees are non-refundable  
    • Restocking fees may apply  

    You will receive email confirmation once processed.`
              },
              {
                title: "4. Exchanges",
                content: `Available for incorrect or damaged items.  
    Contact support with photos if applicable.`
              },
              {
                title: "5. Damaged Items",
                content: `Report within 5 business days of delivery with photos of the product and packaging.`
              },
              {
                title: "6. Order Cancellations",
                content: `Orders may be canceled before shipment.  
    Once shipped, cancellation is not possible and return policy applies.`
              },
              {
                title: "7. Return Address",
                content: `Innovation Dynamics Group LLC  
    11397 Quincy St NE  
    Blaine, MN 55434  
    United States  

    Do not send items without approval.`
              },
              {
                title: "8. Lost Packages",
                content: `Once marked Delivered, responsibility transfers to the customer.  
    Claims must be filed with the carrier directly.`
              }
            ].map((section, index) => (
              <div key={index} className="space-y-6 p-10 bg-white rounded-sm border border-gray-100 shadow-xl shadow-gray-50 group hover:border-[#024ad8]/30 transition-all duration-500">
                <h2 className="text-xl font-extrabold text-black uppercase tracking-tight flex items-center gap-4">
                  <span className="text-[#024ad8] text-sm">0{index + 1}</span>
                  {section.title}
                </h2>
                <p className="text-sm text-gray-500 font-medium whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
        </div>

      </div>

      {/* Footer Notice */}
      <div className="bg-[#F8F9FA] py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed">
            By placing an order, you acknowledge and agree to this Refund & Return Policy. <br/>
            Innovation Dynamics Group LLC © 2026
          </p>
        </div>
      </div>

    </div>
  );
};

export default RefundPolicy;
