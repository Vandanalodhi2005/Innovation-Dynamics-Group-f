import React from "react";
import { ShieldAlert } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
            alt="Disclaimer Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <ShieldAlert className="mx-auto mb-4 text-primary-orange" size={48} />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Disclaimer
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Important information regarding product representation, trademarks, and website usage.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 space-y-8 sm:space-y-10 text-gray-700 leading-relaxed">

        <p className="text-xs sm:text-sm text-gray-500">
          <strong>Effective Date:</strong> February 21, 2026
        </p>

        <p className="text-sm sm:text-base">
          This Disclaimer applies to the website operated by <strong>Innovation Dynamics Group LLC</strong> (“we,” “our,” or “us”).
          By accessing or using our website, you acknowledge and agree to the details outlined below.
        </p>

        {[
          {
            title: "1. Independent Retailer",
            content: `Innovation Dynamics Group LLC is an independent retailer offering printers, Ink & Toner, and printing accessories sourced from trusted suppliers.

We are not affiliated with, endorsed by, or sponsored by:

• HP Inc.  
• Canon Inc.  
• Epson America Inc.  
• Brother Industries Ltd.  
• Any other manufacturer  

All brand names, product names, trademarks, and images belong to their respective owners.`
          },
          {
            title: "2. Product Information",
            content: `All information on our website—including product descriptions, specifications, features, pricing, and compatibility—is provided for general informational purposes.

While we strive for accuracy:
• Product updates may occur without notice  
• Packaging and appearance may vary  
• Specifications may change due to manufacturer revisions  

Customers should verify critical details directly with the respective manufacturer when necessary.`
          },
          {
            title: "3. Images & Trademarks",
            content: `All product images, brand logos, and trademarks displayed:

• Are the property of their respective owners  
• Are used strictly for identification purposes  
• Do not indicate partnership or endorsement  

Images may differ slightly from actual products due to manufacturer updates or variations.`
          },
          {
            title: "4. No Manufacturer Association",
            content: `References to brands such as HP, Canon, Epson, Brother, or others are strictly for:

• Identifying compatible products  
• Describing printer categories  
• Explaining Ink & Toner compatibility  

We do not claim any official relationship with these brands.`
          },
          {
            title: "5. No Guarantees on External Information",
            content: `Our website may contain references or links to external manufacturer websites.

We do not guarantee the accuracy or completeness of third-party content.
Accessing external information is at your own discretion.`
          },
          {
            title: "6. Pricing & Availability",
            content: `All pricing and availability:

• Are subject to change without notice  
• May vary based on supplier availability  
• Are not guaranteed until order confirmation  

We reserve the right to correct errors or update product information at any time.`
          },
          {
            title: "7. Limitation of Liability",
            content: `To the fullest extent permitted by law:

• We are not liable for indirect or consequential damages  
• We are not responsible for supplier delays or inventory changes  
• We do not guarantee uninterrupted website access  
• Use of the website is at your own risk  

Our responsibility is limited to the value of the product purchased.`
          },
          {
            title: "8. Use of Website",
            content: `You agree not to misuse the website, including:

• Copying or reproducing product descriptions  
• Misrepresenting product information  
• Using content for unauthorized commercial purposes  

All content is provided solely to support customer purchasing decisions.`
          },
          {
            title: "9. Changes to This Disclaimer",
            content: `We may update or revise this Disclaimer at any time.
Changes become effective immediately upon posting.
Continued website use indicates acceptance of updated terms.`
          },
          {
            title: "10. Contact Information",
            content: `Innovation Dynamics Group LLC  
11397 Quincy St NE  
Blaine, MN 55434  

Email: support@innovationdynamicsgroup.com  
Phone: +1 (651) 815-4630`
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
            By using our website, you acknowledge and accept this Disclaimer.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Disclaimer;