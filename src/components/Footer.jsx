import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
    const sealContainer = document.getElementById("siteseal");
    if (!sealContainer) return;

    const loadGodaddy = () => {
      if (!sealContainer.getAttribute("data-loaded")) {
        sealContainer.setAttribute("data-loaded", "true");
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://seal.godaddy.com/getSealBasic?sealID=fA5q8U4ngWQoJeQEXnOBnpptwPqM7bmoMSuTzJZg8anUXt6Iwh86nBMt5ys1";
        sealContainer.appendChild(script);
      }
    };

    const events = ['mousemove', 'touchmove', 'wheel', 'keydown'];
    const initGodaddy = () => {
      loadGodaddy();
      events.forEach(e => window.removeEventListener(e, initGodaddy));
    };
    
    events.forEach(e => window.addEventListener(e, initGodaddy, { once: true, passive: true }));

    return () => {
      events.forEach(e => window.removeEventListener(e, initGodaddy));
    };
  }, []);

  return (
    <footer className="bg-black text-white relative border-t border-white/10 overflow-hidden font-sans">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#024ad8]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          <div className="lg:col-span-3 space-y-6">
            <Link to="/" className="flex items-center gap-3 min-h-[40px] select-none h-10 overflow-hidden">
              <span className="font-bold text-4xl tracking-tighter text-white lowercase leading-[0.8] py-1">
                idg
              </span>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="flex flex-col text-[10px] uppercase font-bold tracking-[0.15em]">
                <span className="text-blue-400">Innovation Dynamics</span>
                <span className="text-neutral-300">Group LLC</span>
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
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Our Inventory
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home Printers", link: "/shop?filter=home-printers" },
                  { name: "Office Printers", link: "/shop?filter=office-printers" },
                  { name: "Inkjet Printers", link: "/shop?filter=inkjet-printers" },
                  { name: "Laser Printers", link: "/shop?filter=laser-printers" },
                  { name: "Ink & Toner", link: "/shop?filter=ink-toner" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className="text-sm font-semibold text-neutral-400 hover:text-[#024ad8] transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Support
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Track Order", link: "/track-order" },
                  { name: "Shipping Policy", link: "/shipping-policy" },
                  { name: "Return & Exchange", link: "/return-exchange" },
                  { name: "Refund & Return Policy", link: "/return-refund" },
                  { name: "Buying Guide", link: "/buying-guide" },
                  { name: "Support Hub", link: "/resources" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className="text-sm font-semibold text-neutral-400 hover:text-[#024ad8] transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
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
                      className="text-sm font-semibold text-neutral-400 hover:text-[#024ad8] transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
                Direct Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <MapPin
                    size={16}
                    className="text-[#3b82f6] mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-bold text-neutral-300 group-hover:text-white transition-colors">
                    11397 Quincy St NE,
                    <br />
                    Blaine, MN 55434
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail size={16} className="text-[#3b82f6] shrink-0" />
                  <span className="text-sm font-bold text-neutral-300 group-hover:text-white transition-colors truncate">
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

        <div className="py-12 border-b grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-wrap border-radius-2xl md:flex-nowrap items-center gap-4 justify-center  lg:justify-start">
            {/* GoDaddy Verified & Secured — official seal embed */}
            <div className="h-[100px] w-[150px] rounded-sm flex items-center justify-center p-2 shadow-sm shrink-0 bg-white">
              <span id="siteseal" className="flex items-center justify-center h-full w-full overflow-hidden" />
            </div>

            {/* Google Safe Browsing */}
            <a
              href="https://transparencyreport.google.com/safe-browsing/search?url=http:%2F%2Finnovationdynamicsgroup.com&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[100px] w-[150px] rounded-sm flex items-center justify-center shadow-sm shrink-0 group overflow-hidden"
              >
              <img
                src="/footer_google.webp"
                alt="Google Safe Browsing"
                // width="150"
                // height="100"
                className="w-full h-full object-contain p-1 transition-all duration-500"
              />
            </a>

            <a
              href="https://www.trustpilot.com/review/innovationdynamicsgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[100px] w-[150px] rounded-sm flex items-center justify-center shadow-sm shrink-0 group overflow-hidden"
            >
              <img
                src="/logo/start_inno.webp"
                alt="Trustpilot Reviews"
                // width="250"
                // height="100"
                className="w-full h-full object-contain p-1 transition-all duration-500"
              />
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6">
            <div className="flex items-center gap-6 px-7 py-3.5 bg-neutral-900/50 border border-white/10 rounded-full">
              <img
                src="/payment/mastercard.svg"
                alt="MasterCard"
                width="26"
                height="16"
                className="h-6 w-auto opacity-100 hover:scale-110 transition-all aspect-[26/16]"
              />
              <img
                src="/payment/amex.svg"
                alt="Amex"
                width="26"
                height="16"
                className="h-6 w-auto opacity-100 hover:scale-110 transition-all aspect-[26/16]"
              />
              <img
                src="/payment/discover.svg"
                alt="Discover"
                width="26"
                height="12"
                className="h-6 w-16 bg-white opacity-100 hover:scale-110 transition-all aspect-[26/12]"
              />
              <img
                src="/payment/paypal.svg"
                alt="PayPal"
                width="50"
                height="16"
                className="h-6 w-auto  opacity-100 hover:scale-110 transition-all aspect-[50/16]"
              />
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <span className="text-[10px] font-black text-blue-400 tracking-[0.2em] uppercase">
                Secure Payments Powered by Clover
              </span>
              <span className="text-[10px] font-bold text-neutral-400">
                256-bit SSL Data Encryption
              </span>
            </div>
          </div>
        </div>

        <div className="pt-10 pb-4 flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">
              &copy; 2026{" "}
              <span className="text-neutral-200">
                Innovation Dynamics Group LLC
              </span>{" "}
              • Minnesota, USA
            </p>
            
          </div>

          <p className="text-center text-[9px] text-neutral-300 font-medium leading-relaxed uppercase tracking-wider max-w-4xl mx-auto px-4">
            <span className="text-neutral-400 font-bold">
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
