import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X, Cookie, ArrowRight } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consentChoice = localStorage.getItem('idg-cookie-consent');
        if (!consentChoice) {
            // Delay showing for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('idg-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('idg-cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-700 ease-out">
            <div className="max-w-7xl mx-auto">
                <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] p-0.5 relative overflow-hidden group">
                    {/* Animated gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#024ad8]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[3000ms] ease-in-out"></div>
                    
                    <div className="bg-[#050505] p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-8 relative z-10">
                        {/* Icon & Heading Section */}
                        <div className="flex items-center gap-6 flex-shrink-0">
                            <div className="w-16 h-16 bg-[#024ad8]/10 rounded-full flex items-center justify-center border border-[#024ad8]/20 group-hover:scale-110 transition-transform duration-500">
                                <Cookie className="text-[#024ad8]" size={32} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#024ad8] mb-1">Security & Privacy</span>
                                <h3 className="text-xl font-bold text-white tracking-tight">Consent Settings</h3>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-grow">
                            <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-2xl">
                                We use cookies and similar technologies to enhance your experience, analyze our traffic, and for security purposes. By clicking <span className="text-white">"Accept All"</span>, you agree to our use of these tools as described in our <Link to="/privacy-policy" className="text-[#024ad8] hover:underline hover:text-white transition-colors">Privacy Policy</Link> and <Link to="/cookies-policy" className="text-[#024ad8] hover:underline hover:text-white transition-colors">Cookie Policy</Link>.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                            <button 
                                onClick={handleDecline}
                                className="w-full sm:w-auto px-8 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors border border-white/5 hover:border-white/20 rounded-sm"
                            >
                                Decline All
                            </button>
                            <button 
                                onClick={handleAccept}
                                className="w-full sm:w-auto px-10 py-3.5 bg-[#024ad8] hover:bg-[#0355f5] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-sm shadow-lg shadow-[#024ad8]/20 transition-all flex items-center justify-center gap-3 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Accept All <ArrowRight size={14} />
                            </button>
                        </div>

                        {/* Optional Close Icon */}
                        <button 
                            onClick={handleDecline}
                            className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors p-2"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
