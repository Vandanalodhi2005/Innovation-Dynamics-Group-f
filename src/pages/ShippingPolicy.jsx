import React from "react";
import { Truck } from "lucide-react";

const ShippingPolicy = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920"
            alt="Shipping and Delivery"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <Truck className="mx-auto mb-4 text-primary-orange" size={48} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Shipping & Delivery Policy
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Clear information about how your orders are processed and delivered.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 space-y-8 sm:space-y-10 text-gray-700 leading-relaxed">

        <p className="text-xs sm:text-sm text-gray-500">
          <strong>Effective Date:</strong> February 21, 2026
        </p>

        <p className="text-sm sm:text-base">
          This Shipping & Delivery Policy explains how orders placed with 
          <strong> Innovation Dynamics Group LLC </strong>
          are processed and delivered within the United States.
          By placing an order, you agree to the terms outlined below.
        </p>

        {[
          {
            title: "1. Shipping Locations",
            content: `We currently ship to all U.S. states and territories where carrier services are available.

At this time, international shipping is not offered.`
          },
          {
            title: "2. Processing Times",
            content: `Orders are typically processed within:

• 1–2 business days for most printers  
• 1 business day for Ink & Toner and accessories  

Processing times may vary during holidays, high-volume periods, supplier delays, or weather disruptions.

Orders placed on weekends or holidays begin processing the next business day.`
          },
          {
            title: "3. Shipping Methods & Delivery Estimates",
            content: `Delivery times depend on the selected shipping method:

• Standard Shipping: 3–7 business days  
• Expedited Shipping: 2–4 business days  
• Priority Shipping: 1–3 business days  

Delivery dates are estimates only and not guaranteed. Carrier delays may occur beyond our control.`
          },
          {
            title: "4. Shipping Fees",
            content: `Shipping fees are calculated based on:

• Product weight and dimensions  
• Destination address  
• Selected shipping method  

All applicable fees are displayed during checkout before payment is completed.`
          },
          {
            title: "5. Order Tracking",
            content: `Once shipped, you will receive:

• Shipping confirmation email  
• Tracking number (when available)  
• Link to monitor delivery  

Tracking updates are provided by the carrier and may take several hours to appear.`
          },
          {
            title: "6. Address Accuracy",
            content: `Customers are responsible for providing a complete and accurate shipping address.

Incorrect addresses may result in:

• Delivery delays  
• Returned packages  
• Additional shipping fees  

Contact us immediately if an address error is discovered.`
          },
          {
            title: "7. Delivery Issues",
            content: `7.1 Delays  
Delivery dates are estimates. Delays may occur due to weather, carrier volume, or transportation issues.

7.2 Lost Packages  
If lost before marked delivered, we will assist with investigation.  
If marked “Delivered,” customers must contact the carrier directly.

7.3 Damaged Packages  
Report within 5 business days with photos of product and packaging.`
          },
          {
            title: "8. Split Shipments",
            content: `Orders containing multiple items may ship separately depending on inventory and warehouse availability.

Multiple tracking numbers may be provided.`
          },
          {
            title: "9. Order Cancellations After Shipping",
            content: `Once shipped, orders cannot be canceled.

Customers may request a return after delivery.  
Return shipping costs are the customer's responsibility unless the error was ours.`
          },
          {
            title: "10. Shipping Restrictions",
            content: `Certain oversized or bulk items may have shipping limitations.

If an item cannot be shipped to your location, you will be notified before processing.`
          },
          {
            title: "11. Contact Information",
            content: `Innovation Dynamics Group LLC  
Email: support@innovationdynamicsgroup.com  
Phone: +1 (651) 815-4630  
Address: 11397 Quincy St NE, Blaine, MN 55434  

We typically respond within one business day.`
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
            By placing an order, you acknowledge and agree to this Shipping & Delivery Policy.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ShippingPolicy;