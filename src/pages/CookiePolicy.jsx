import React from "react";
import { Cookie } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505253216365-6b51b7b43e74?auto=format&fit=crop&q=80&w=1920"
            alt="Cookie Policy Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <Cookie className="mx-auto mb-4 text-primary-orange" size={48} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Cookie Policy
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Learn how we use cookies and tracking technologies to improve your shopping experience.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 space-y-8 sm:space-y-10 text-gray-700 leading-relaxed">

        <p className="text-xs sm:text-sm text-gray-500">
          <strong>Effective Date:</strong> February 21, 2026
        </p>

        <p className="text-sm sm:text-base">
          This Cookie Policy explains how <strong>Innovation Dynamics Group LLC</strong> (“we,” “our,” or “us”) uses cookies and similar tracking technologies on our website. 
          By continuing to browse or use our website, you consent to the use of cookies as described in this policy.
        </p>

        {[
          {
            title: "1. What Are Cookies?",
            content: `Cookies are small text files stored on your device when you visit a website. They help websites remember:

• User preferences  
• Items added to cart  
• Browsing behavior  
• Navigation patterns  

Cookies enhance functionality and improve your overall shopping experience.`
          },
          {
            title: "2. Types of Cookies We Use",
            content: `We use different types of cookies to operate and improve our website.`
          },
          {
            title: "2.1 Essential Cookies",
            content: `Required for website functionality.

They allow you to:
• Navigate pages  
• Add items to cart  
• Access checkout  
• Maintain session preferences  

These cookies cannot be disabled through our website.`
          },
          {
            title: "2.2 Performance & Analytics Cookies",
            content: `Used to understand visitor interactions.

They help us:
• Measure performance  
• Improve navigation  
• Identify popular products  
• Enhance user experience  

These cookies collect aggregated, anonymous data.`
          },
          {
            title: "2.3 Preference Cookies",
            content: `Store user-selected settings such as:

• Language preferences  
• Display settings  
• Location preferences  

These personalize your shopping experience.`
          },
          {
            title: "2.4 Advertising & Marketing Cookies",
            content: `Used to show relevant advertisements based on browsing behavior.

They help:
• Display products you may like  
• Improve marketing performance  

These may be placed by trusted advertising partners.`
          },
          {
            title: "3. Third-Party Cookies",
            content: `Some cookies may be placed by third-party providers such as:

• Payment processors  
• Analytics services  
• Advertising platforms  
• Hosting providers  

These providers operate under their own privacy policies.  
We do not sell customer data.`
          },
          {
            title: "4. How You Can Control Cookies",
            content: `You can manage or disable cookies through your browser settings.

Options may include:
• Blocking all cookies  
• Allowing only essential cookies  
• Clearing cookies after sessions  

Disabling essential cookies may impact website functionality.`
          },
          {
            title: "5. Do Not Track Signals",
            content: `Some browsers offer a “Do Not Track” (DNT) feature.  
Our website currently does not alter behavior in response to DNT signals due to lack of industry standards.`
          },
          {
            title: "6. Data Collected Through Cookies",
            content: `Depending on cookie type, data may include:

• Device type & browser  
• Non-precise location  
• Pages visited  
• Cart activity  
• Time spent on pages  
• General traffic patterns  

This information does not personally identify users unless voluntarily provided during checkout.`
          },
          {
            title: "7. Updates to This Cookie Policy",
            content: `We may update this policy due to regulatory changes, technology updates, or business needs.  
The Effective Date will always reflect the latest version.`
          },
          {
            title: "8. Contact Us",
            content: `Innovation Dynamics Group LLC  
11397 Quincy St NE, Blaine, MN 55434  
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
            By continuing to use our website, you consent to the use of cookies as described in this policy.
          </p>
        </div>
      </div>

    </div>
  );
};

export default CookiePolicy;