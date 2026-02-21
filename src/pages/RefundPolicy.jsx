import React from "react";
import { RotateCcw } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        
        {/* New Professional Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
            alt="Refund Policy Legal Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <RotateCcw className="mx-auto mb-4 text-primary-orange" size={48} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Refund & Return Policy
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transparent return, exchange, and refund information to help you shop with confidence.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 space-y-8 sm:space-y-10 text-gray-700 leading-relaxed">

        <p className="text-xs sm:text-sm text-gray-500">
          <strong>Effective Date:</strong> February 21, 2026
        </p>

        <p className="text-sm sm:text-base">
          Thank you for shopping with <strong>Innovation Dynamics Group LLC</strong>. 
          This Refund & Return Policy explains how returns, exchanges, and refunds are handled 
          for purchases of printers, Ink & Toner, and printing accessories made through our online store.
        </p>

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
            title: "5. Damaged or Incorrect Items",
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
            title: "8. Lost or Stolen Packages",
            content: `Once marked Delivered, responsibility transfers to the customer.  
Claims must be filed with the carrier directly.`
          },
          {
            title: "9. Manufacturer Warranties",
            content: `Certain products may include manufacturer warranties.  
Refer to the manufacturer’s official website for coverage details.`
          },
          {
            title: "10. Contact Us",
            content: `Email: support@innovationdynamicsgroup.com  
Phone: +1 (651) 815-4630  
Address: 11397 Quincy St NE, Blaine, MN 55434`
          }
        ].map((section, index) => (
          <div key={index} className="space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-semibold text-black">
              {section.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}

      </div>

      {/* Footer Notice */}
      <div className="bg-orange-50 py-6 sm:py-8 border-t border-orange-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            By placing an order, you acknowledge and agree to this Refund & Return Policy.
          </p>
        </div>
      </div>

    </div>
  );
};

export default RefundPolicy;