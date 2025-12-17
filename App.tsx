/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { DataUnificationDiagram, AnalyticsPreview } from './components/Diagrams';
import { Menu, X, ArrowRight, Check, Database, Users, Zap, Shield, ChevronRight, Layout, BarChart, Phone, Mail, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-body text-slate-900 bg-white overflow-x-hidden selection:bg-brand-200 selection:text-brand-900">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-slate-200 py-3' : 'bg-transparent border-transparent py-5 text-white'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-sans font-bold text-lg ${scrolled ? 'bg-brand-600 text-white' : 'bg-white text-brand-900'}`}>H</div>
            <span className={`font-sans font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              HiLab <span className="font-normal opacity-80">CDP</span>
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>
            <a href="#features" onClick={scrollToSection('features')} className="hover:text-brand-500 transition-colors">Features</a>
            <a href="#solutions" onClick={scrollToSection('solutions')} className="hover:text-brand-500 transition-colors">Solutions</a>
            <a href="#benefits" onClick={scrollToSection('benefits')} className="hover:text-brand-500 transition-colors">Why HiLab</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-brand-500 transition-colors">Contact</a>
            <button className={`px-5 py-2.5 rounded-full font-semibold transition-all ${scrolled ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-white text-brand-900 hover:bg-slate-100'} shadow-sm`}>
              Get a Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 gap-6 text-lg font-medium animate-fade-in">
            <a href="#features" onClick={scrollToSection('features')} className="py-2 border-b border-slate-100">Features</a>
            <a href="#solutions" onClick={scrollToSection('solutions')} className="py-2 border-b border-slate-100">Solutions</a>
            <a href="#benefits" onClick={scrollToSection('benefits')} className="py-2 border-b border-slate-100">Why HiLab</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="py-2 border-b border-slate-100">Contact</a>
            <button className="w-full py-4 bg-brand-600 text-white rounded-xl mt-4">Request Demo</button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <HeroScene />
        
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-900/50 border border-brand-700 rounded-full text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                Next Gen Customer Intelligence
            </div>
            <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
              Turn Siloed Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-cyan">Loyal Customers</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The HiLab Customer Data Platform unifies your data sources into a single, actionable 360° view. Personalize every interaction at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <button className="px-8 py-4 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-500 transition-all shadow-lg shadow-brand-900/50 flex items-center justify-center gap-2 group">
                  Start Free Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center">
                  Watch Video
               </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm font-medium">
                <div className="flex items-center gap-2"><Check size={16} className="text-brand-400" /> Easy Integration</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-brand-400" /> GDPR Compliant</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-brand-400" /> Real-time</div>
            </div>
          </div>
          
          {/* Visual Placeholder for Hero Right (Optional additional graphics) */}
          <div className="hidden lg:block relative">
             {/* The 3D scene covers the background, this space allows interaction or focus */}
          </div>
        </div>
      </header>

      <main>
        {/* Pain Points Section */}
        <section className="py-24 bg-slate-50">
           <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-sans">Stop Guessing, Start Knowing</h2>
                  <p className="text-lg text-slate-600">
                      Modern businesses struggle with data fragmentation. HiLab CDP solves the chaos by creating a single source of truth.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      {
                          icon: <Database className="text-red-500" size={32} />,
                          title: "Data Silos",
                          desc: "Customer data is trapped in disconnected tools like CRM, Email, and Analytics, making it impossible to see the big picture."
                      },
                      {
                          icon: <Users className="text-orange-500" size={32} />,
                          title: "Fragmented Identity",
                          desc: "Without identity resolution, you treat the same customer as five different strangers across different channels."
                      },
                      {
                          icon: <Zap className="text-yellow-500" size={32} />,
                          title: "Slow Action",
                          desc: "By the time you analyze the data, the customer has moved on. You need real-time activation, not weekly reports."
                      }
                  ].map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                              {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
           </div>
        </section>

        {/* Feature: Identity Resolution */}
        <section id="features" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-bold uppercase tracking-wide mb-4">Core Technology</div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 font-sans">Identity Resolution Engine</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            HiLab automatically links data from cookies, device IDs, emails, and CRM records to create a persistent profile for every individual.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Deterministics & Probabilistic matching",
                                "Cross-device tracking",
                                "Golden Record creation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Check size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="text-brand-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                            Learn about Unification <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <DataUnificationDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* Feature: Analytics & Segments */}
        <section id="solutions" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="lg:w-1/2">
                         <div className="inline-block px-3 py-1 bg-brand-900 border border-brand-700 text-brand-300 rounded-full text-xs font-bold uppercase tracking-wide mb-4">Actionable Insights</div>
                        <h2 className="text-4xl font-bold mb-6 font-sans">Real-time Segmentation</h2>
                        <p className="text-lg text-slate-300 mb-6">
                            Build dynamic audiences based on behavior, attributes, and predicted lifetime value. Sync these segments instantly to Facebook, Google Ads, and Email tools.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                             <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                <Layout className="text-brand-400 mb-3" size={24} />
                                <h4 className="font-bold mb-1">Drag & Drop Builder</h4>
                                <p className="text-sm text-slate-400">Create complex segments without writing SQL.</p>
                             </div>
                             <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                <BarChart className="text-accent-cyan mb-3" size={24} />
                                <h4 className="font-bold mb-1">Predictive AI</h4>
                                <p className="text-sm text-slate-400">Identify churn risk before it happens.</p>
                             </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Decorative glow */}
                            <div className="absolute inset-0 bg-brand-500 blur-[100px] opacity-20"></div>
                            <div className="relative z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                <AnalyticsPreview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Security / Trust */}
        <section id="benefits" className="py-24 bg-white">
             <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Enterprise Grade Security</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { icon: <Shield size={32} />, label: "SOC2 Compliant" },
                        { icon: <Users size={32} />, label: "GDPR Ready" },
                        { icon: <Database size={32} />, label: "Data Encryption" },
                        { icon: <Zap size={32} />, label: "99.9% Uptime" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all hover:shadow-lg">
                            <div className="text-slate-400">{item.icon}</div>
                            <h3 className="font-bold text-slate-800">{item.label}</h3>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brand-600 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10">
                 <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] rounded-full bg-white blur-[150px]"></div>
             </div>
             <div className="container mx-auto px-6 relative z-10 text-center">
                 <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to unify your data?</h2>
                 <p className="text-brand-100 text-xl max-w-2xl mx-auto mb-10">
                     Join forward-thinking companies using HiLab to power their customer experience.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button className="bg-white text-brand-600 px-8 py-4 rounded-lg font-bold hover:bg-brand-50 shadow-lg transition-colors">
                         Request a Demo
                     </button>
                     <button className="bg-brand-700 text-white px-8 py-4 rounded-lg font-bold border border-brand-500 hover:bg-brand-800 transition-colors">
                         Contact Sales
                     </button>
                 </div>
             </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-sans font-bold text-white">H</div>
                        <span className="font-sans font-bold text-xl text-white">HiLab CDP</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        The complete customer data platform for the modern enterprise. Connect, analyze, and act on your data.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold mb-4">Product</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-brand-400 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-brand-400 transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-brand-400 transition-colors">Security</a></li>
                        <li><a href="#" className="hover:text-brand-400 transition-colors">Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact Info (Requested) */}
                <div>
                    <h4 className="text-white font-bold mb-4">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-brand-500 shrink-0 mt-0.5" />
                            <span>8th Floor, DIV Building, 122 Ly Thai Tong Street, Thanh Khe, Da Nang, Viet Nam</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-brand-500 shrink-0" />
                            <a href="mailto:info@hilab.asia" className="hover:text-white transition-colors">info@hilab.asia</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-brand-500 shrink-0" />
                            <a href="tel:+84932586532" className="hover:text-white transition-colors">+(84)932 586 532</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                <div>&copy; {new Date().getFullYear()} HiLab Asia. All rights reserved.</div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Terms</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Cookies</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
