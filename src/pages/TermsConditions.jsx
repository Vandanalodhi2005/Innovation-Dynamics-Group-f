import React from "react";
import { FileText } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      
      {/* Hero Section */}
      <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920"
            alt="Terms Background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="mx-auto mb-6 text-primary-orange" size={56} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website or placing an order.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700 leading-relaxed">

        <p className="text-sm text-gray-500">
          <strong>Effective Date:</strong> February 21, 2026
        </p>

        <p>
          These Terms & Conditions (“Terms”) govern your access to and use of the website operated by 
          <strong> Innovation Dynamics Group LLC </strong>
          (“we,” “our,” or “us”) and your purchase of printers, Ink & Toner, and printing accessories through our online store.
          By using our website or placing an order, you agree to these Terms.
          If you do not agree, please do not use the website.
        </p>

        {/* Sections */}
        {[
          {
            title: "1. General Information",
            content: `We operate as an independent retailer offering printers, Ink & Toner, and printing accessories. We are not affiliated with any manufacturer, and all trademarks belong to their respective owners. All product listings, descriptions, pricing, and availability are subject to change without notice.`
          },
          {
            title: "2. Eligibility",
            content: `You must be at least 18 years old to place an order. By completing a purchase, you confirm that you are legally capable of entering into a binding contract and have provided accurate and complete order information.`
          },
          {
            title: "3. Product Information",
            content: `We strive for accuracy in product details including specifications, features, compatibility, and pricing. However, product colors, packaging, labeling, and manufacturer updates may change without notice. Availability depends on stock and supplier conditions.`
          },
          {
            title: "4. Order Acceptance",
            content: `Order confirmation emails acknowledge receipt only and do not constitute acceptance. Orders are accepted once payment is processed and the item is packed or shipped. We may cancel orders due to pricing errors, stock limitations, payment issues, fraud suspicion, or shipping restrictions.`
          },
          {
            title: "5. Pricing & Payment",
            content: `Prices are displayed in USD and may change without notice. Taxes and shipping fees are calculated at checkout. Accepted payment methods are shown during checkout. We do not store full payment card information.`
          },
          {
            title: "6. Shipping & Delivery",
            content: `Delivery timelines are estimates and not guaranteed. Delays may occur due to carriers or suppliers. Customers are responsible for providing accurate shipping information. Tracking details are provided when available.`
          },
          {
            title: "7. Returns & Refunds",
            content: `Returns must comply with our Refund & Return Policy. Products must be unused, in original condition, and meet eligibility requirements. Customers are responsible for selecting correct Ink & Toner compatibility. Restocking fees may apply.`
          },
          {
            title: "8. Intellectual Property",
            content: `All website content including text, layout, graphics, and design is the property of Innovation Dynamics Group LLC unless otherwise stated. Brand names and logos belong to their respective owners.`
          },
          {
            title: "9. Prohibited Activities",
            content: `Users may not use the website unlawfully, copy or resell content, misuse product information, attempt unauthorized access, or engage in fraudulent activities.`
          },
          {
            title: "10. Third-Party Links",
            content: `We may provide links to external websites for convenience. We are not responsible for third-party content, privacy practices, or information accuracy.`
          },
          {
            title: "11. Limitation of Liability",
            content: `We are not responsible for indirect or consequential damages. Website performance is not guaranteed to be uninterrupted or error-free. Liability is limited to the value of the purchase.`
          },
          {
            title: "12. Indemnification",
            content: `You agree to indemnify and hold harmless Innovation Dynamics Group LLC from claims arising from misuse of the website or violation of these Terms.`
          },
          {
            title: "13. Changes to These Terms",
            content: `We may modify these Terms at any time. Changes become effective upon posting. Continued use of the website constitutes acceptance of updated Terms.`
          },
          {
            title: "14. Governing Law",
            content: `These Terms are governed by the laws of the State of Minnesota. Any disputes shall be resolved in Minnesota state or federal courts.`
          },
          {
            title: "15. Contact Information",
            content: `Innovation Dynamics Group LLC
11397 Quincy St NE, Blaine, MN 55434
support@innovationdynamicsgroup.com
+1 (651) 815-4630`
          }
        ].map((section, index) => (
          <div key={index} className="space-y-3">
            <h2 className="text-xl font-bold text-black">
              {section.title}
            </h2>
            <p className="text-gray-600 whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}

      </div>

      {/* Footer Notice */}
      <div className="bg-orange-50 py-10 border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            By continuing to use our website, you acknowledge that you have read,
            understood, and agree to be bound by these Terms & Conditions.
          </p>
        </div>
      </div>

    </div>
  );
};

export default TermsConditions;