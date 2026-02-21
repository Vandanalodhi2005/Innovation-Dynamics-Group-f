import React from 'react';
import { Eye, ShieldCheck, HelpCircle, Mail, Phone, MapPin, Users, Settings, Smartphone } from 'lucide-react';

const Accessibility = () => {
    return (
        <div className="bg-white text-black font-sans min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 text-gray-100 opacity-20 transform -rotate-6 pointer-events-none">
                    <Users size={500} className="absolute -top-20 -left-20" />
                </div>

                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1920"
                        alt="Accessibility Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase border border-primary-orange/30">
                            <Eye size={16} /> Inclusive Design
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white italic">
                            Accessibility Statement
                        </h1>
                        <div className="w-24 h-1.5 bg-primary-orange mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed italic">
                            We are committed to ensuring our website is accessible and user-friendly for all, providing an inclusive shopping experience for everyone.
                        </p>
                        <p className="mt-6 text-gray-400 font-medium">Effective Date: February 21, 2026</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Intro Section */}
                    <div className="lg:col-span-2 space-y-16">
                        <section className="prose prose-lg text-gray-600">
                            <p className="text-lg leading-relaxed italic border-l-4 border-primary-orange pl-6 py-2">
                                At Innovation Dynamics Group LLC, we are committed to ensuring that our website is accessible and user-friendly for all individuals, including people with disabilities. We strive to provide an inclusive online experience so customers can browse and shop for printers, Ink & Toner, and printing accessories with ease.
                            </p>
                            <p className="mt-6 font-medium">
                                We aim to follow recognized accessibility guidelines, including the <span className="text-black font-bold">Web Content Accessibility Guidelines (WCAG) 2.1</span>.
                            </p>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-2">
                                <span className="bg-primary-orange text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">1</span>
                                Our Accessibility Commitment
                            </h2>
                            <p className="text-gray-600">We work to maintain an accessible website by:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Visual Clarity", desc: "Designing pages with readability and clarity in mind.", icon: <Eye className="text-primary-orange" /> },
                                    { title: "Navigation", desc: "Using clean layouts and consistent navigation.", icon: <Settings className="text-primary-orange" /> },
                                    { title: "Inclusion", desc: "Ensuring text alternatives for relevant content.", icon: <Users className="text-primary-orange" /> },
                                    { title: "Control", desc: "Supporting keyboard navigation where applicable.", icon: <Smartphone className="text-primary-orange" /> },
                                    { title: "Readability", desc: "Using high-contrast text and scalable fonts.", icon: <ShieldCheck className="text-primary-orange" /> },
                                    { title: "Simplicity", desc: "Making online shopping simple for everyone.", icon: <HelpCircle className="text-primary-orange" /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary-orange/30 transition-colors group">
                                        <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                        <h3 className="font-bold text-gray-900 mb-2 italic">{item.title}</h3>
                                        <p className="text-sm text-gray-600 italic font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-2">
                                <span className="bg-primary-orange text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">2</span>
                                Ongoing Improvements
                            </h2>
                            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex gap-6 items-start">
                                <Settings className="text-primary-orange flex-shrink-0 mt-1" size={32} />
                                <div className="space-y-4">
                                    <p className="text-gray-700 font-bold italic leading-relaxed">
                                        Accessibility is an ongoing effort. We regularly review our website to identify areas for improvement.
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 font-medium italic">
                                        <li>• Refining page structure</li>
                                        <li>• Updating design elements</li>
                                        <li>• Testing with accessibility tools</li>
                                        <li>• Following evolving standards</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-2">
                                <span className="bg-primary-orange text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">3</span>
                                Third-Party Content
                            </h2>
                            <p className="text-gray-600 leading-relaxed italic border-l-4 border-gray-200 pl-6 py-2">
                                Our website may include links or tools from third parties such as payment processors or shipping carriers. We cannot control the accessibility of these external platforms but encourage all users to contact us if they encounter difficulty.
                            </p>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold flex items-center gap-4 italic underline decoration-primary-orange decoration-2">
                                <span className="bg-primary-orange text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">4</span>
                                Feedback & Assistance
                            </h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                            <Mail className="text-primary-orange" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email</p>
                                            <p className="font-bold text-gray-900">support@innovationdynamicsgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                            <Phone className="text-primary-orange" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Phone</p>
                                            <p className="font-bold text-gray-900">+1 (651) 815-4630</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                        <MapPin className="text-primary-orange" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Address</p>
                                        <p className="font-bold text-gray-900 leading-relaxed text-sm">
                                            Innovation Dynamics Group LLC<br />
                                            11397 Quincy St NE<br />
                                            Blaine, MN 55434
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Extra Column */}
                    <div className="lg:col-span-1 space-y-12">
                        <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <h3 className="text-xl font-bold mb-6 italic underline decoration-primary-orange">Alternative Access</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
                                If you require information in an alternative format, we will make reasonable efforts to assist you in a way that accommodates your needs.
                            </p>
                            <div className="h-px bg-gray-800 my-8"></div>
                            <h3 className="text-xl font-bold mb-6 italic underline decoration-primary-orange">Equal Access</h3>
                            <p className="text-gray-400 text-sm leading-relaxed italic">
                                We believe all customers should have equal access to our products and information. Our focus is on continually improving inclusivity.
                            </p>
                        </div>

                        <div className="p-8 bg-orange-100/30 rounded-3xl border border-orange-100 text-center">
                            <ShieldCheck className="mx-auto mb-4 text-primary-orange" size={48} />
                            <h4 className="font-bold text-gray-900 mb-2 italic">Trusted Compliance</h4>
                            <p className="text-sm text-gray-600 font-medium italic">
                                We strive to meet the highest standards of digital accessibility for every visitor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessibility;
