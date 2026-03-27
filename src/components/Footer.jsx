import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../public/logo/start_inno.jpeg";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Shield,
  Award,
} from "lucide-react";

const Footer = () => {
  useEffect(() => {
    // Re-inject script on mount to ensure it targets the correct element
    const container = document.getElementById("siteseal");
    if (container) {
      container.innerHTML = "";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://seal.godaddy.com/getSealBasic?sealID=fA5q8U4ngWQoJeQEXnOBnpptwPqM7bmoMSuTzJZg8anUXt6Iwh86nBMt5ys1";
      script.async = true;
      container.appendChild(script);
    }
  }, []);


  return (
    <footer className="bg-black text-white relative border-t border-white/10 overflow-hidden font-sans">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#024ad8]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          <div className="lg:col-span-3 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <span className="font-bold text-4xl tracking-tighter text-white lowercase">
                idg
              </span>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="flex flex-col text-[10px] uppercase font-bold tracking-[0.15em]">
                <span className="text-[#024ad8]">Innovation Dynamics</span>
                <span className="text-neutral-500">Global Logistics</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
            Innovation Dynamics Group LLC is an independent U.S.-based retailer providing printers and related products with verified sourcing, reliable fulfillment, and a seamless shopping experience across the U.S. and Canada.
            </p>
            {/* <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 bg-white/5 rounded hover:bg-[#024ad8] transition-colors text-white/50 hover:text-white"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded hover:bg-[#024ad8] transition-colors text-white/50 hover:text-white"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded hover:bg-[#024ad8] transition-colors text-white/50 hover:text-white"
              >
                <Facebook size={18} />
              </a>
            </div> */}
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/40">
                Our Inventory
              </h4>
              <ul className="space-y-3">
                {[
                  "Home Printers",
                  "Office Printers",
                  "Inkjet Printers",
                  "Laser Printers",
                  "Ink & Toner",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/shop/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm font-semibold text-neutral-500 hover:text-[#024ad8] transition-colors block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/40">
                Support
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Track Order", link: "/track-order" },
                  { name: "Shipping & Delivery", link: "/shipping-policy" },
                  { name: "Return & Exchange", link: "/return-exchange" },
                  { name: "Refund Policy", link: "/return-refund" },
                  { name: "Buying Guide", link: "/buying-guide" },
                  { name: "Support Hub", link: "/resources" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className="text-sm font-semibold text-neutral-500 hover:text-[#024ad8] transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/40">
                Policy Center
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Privacy Policy", link: "/privacy-policy" },
                  { name: "Terms & Conditions", link: "/terms-conditions" },
                  { name: "Cookie Policy", link: "/cookies-policy" },
                  { name: "Accessibility", link: "/accessibility" },
                  { name: "Disclaimer", link: "/disclaimer" },
                  { name: "Do Not Sell My Info", link: "/do-not-sell" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className="text-sm font-semibold text-neutral-500 hover:text-[#024ad8] transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/40">
                Direct Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <MapPin
                    size={16}
                    className="text-[#024ad8] mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-bold text-neutral-400 group-hover:text-white transition-colors">
                    11397 Quincy St NE,
                    <br />
                    Blaine, MN 55434
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail size={16} className="text-[#024ad8] shrink-0" />
                  <span className="text-sm font-bold text-neutral-400 group-hover:text-white transition-colors truncate">
                    support@innovationdynamicsgroup.com
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone size={16} className="text-[#024ad8] shrink-0" />
                  <span className="text-sm font-bold text-neutral-400 group-hover:text-white transition-colors">
                    +1 (651) 815-4630
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 border-b border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
            {/* GoDaddy Verified & Secured */}
            <div className="min-h-[64px] w-44 bg-white rounded flex items-center justify-center p-2 shadow-sm border border-white/10 shrink-0">
              <span id="siteseal" className="flex items-center justify-center w-full h-full">
                <img 
                  src="https://img1.wsimg.com/shared/img/seal_godaddy.png" 
                  alt="GoDaddy Verified & Secured" 
                  className="h-10 opacity-40 grayscale hover:grayscale-0 transition-opacity"
                />
              </span>
            </div>

            {/* Google Safe Browsing */}
            <a
              href="https://transparencyreport.google.com/safe-browsing/search?url=http:%2F%2Finnovationdynamicsgroup.com&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[64px] w-44 bg-white rounded flex items-center justify-center p-2 shadow-sm border border-white/10 shrink-0 group"
            >
              <img
                src="/footer_google.png"
                alt="Google Safe Browsing"
                className="h-full w-full object-contain transition-all duration-500"
              />
            </a>

            {/* Trustpilot Excellence */}
            <a
              href="https://www.trustpilot.com/review/innovationdynamicsgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[64px] w-44 bg-white rounded flex items-center justify-center p-2 shadow-sm border border-white/10 shrink-0 group"
            >
              <img
                src={image}
                alt="Trustpilot Reviews"
                className="h-full w-full object-contain transition-all duration-500"
              />
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6">
            <div className="flex items-center gap-5 px-6 py-3 bg-neutral-900/50 border border-white/5 rounded-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                alt="MasterCard"
                className="h-4 opacity-30 hover:opacity-100 transition-all"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                alt="Amex"
                className="h-4 opacity-30 hover:opacity-100 transition-all"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg"
                alt="Discover"
                className="h-3 opacity-30 hover:opacity-100 transition-all"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg"
                alt="PayPal"
                className="h-4 opacity-30 hover:opacity-100 transition-all"
              />
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <span className="text-[10px] font-black text-[#024ad8] tracking-[0.2em] uppercase">
                Secure Payments Powered by Clover
              </span>
              <span className="text-[10px] font-bold text-neutral-600">
                256-bit SSL Data Encryption
              </span>
            </div>
          </div>
        </div>

        <div className="pt-10 pb-4 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-neutral-700 uppercase tracking-[0.3em]">
              &copy; 2026{" "}
              <span className="text-neutral-300">
                Innovation Dynamics Group LLC
              </span>{" "}
              • Minnesota, USA
            </p>
            <div className="flex items-center gap-3 text-neutral-800">
              <Award size={14} />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                Industry Partner Since 1997
              </span>
            </div>
          </div>

          <p className="text-center text-[9px] text-neutral-300 font-medium leading-relaxed uppercase tracking-wider max-w-4xl mx-auto px-4">
            <span className="text-neutral-500 font-bold">
              Trademark Notice:
            </span>{" "}
           
All product names, images, brand logos, and trademarks displayed on this website are the property of their respective owners and are used for identification purposes only. Innovation Dynamics Group LLC operates as an independent e-commerce retailer and is not affiliated with, endorsed by, or sponsored by any manufacturer unless explicitly stated. Product availability, specifications, and pricing are subject to change without prior notice. While we strive to provide accurate and up-to-date information, Innovation Dynamics Group LLC does not guarantee that all content on this site is complete, current, or free from errors.

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
