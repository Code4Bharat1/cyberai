"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdGavel, 
  MdWeb, 
  MdCopyright,
  MdWarning,
  MdShield,
  MdPublic,
  MdRefresh,
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdBusiness,
  MdDescription
} from 'react-icons/md';
import { FaArrowRight, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function TermsOfUsePage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: MdGavel },
    { id: 'use-website', title: 'Use of Website', icon: MdWeb },
    { id: 'intellectual', title: 'Intellectual Property', icon: MdCopyright },
    { id: 'disclaimer', title: 'Disclaimer of Warranties', icon: MdWarning },
    { id: 'limitation', title: 'Limitation of Liability', icon: MdShield },
    { id: 'governing', title: 'Governing Law', icon: MdPublic },
    { id: 'changes', title: 'Changes to Terms', icon: MdRefresh },
    { id: 'contact', title: 'Contact Information', icon: MdEmail }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-6 border border-orange-500/30 animate-fade-in-down">
            <MdDescription className="w-6 h-6 text-orange-300" />
            <span className="text-orange-300 font-semibold">Legal Agreement</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in-up">
            Terms of Use
          </h1>
          
          <p className="text-xl text-blue-100 mb-2 animate-fade-in">
            CyberAI Technologies Ltd
          </p>
          <p className="text-sm text-blue-200 animate-fade-in">
            Last Updated: October 2024
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="sticky top-8 space-y-2 animate-slide-in-left">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">
                Contents
              </h3>
              {sections.map((section, i) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                      : 'hover:bg-blue-50 text-gray-700 hover:text-blue-900'
                  }`}
                  style={{animationDelay: `${i * 0.05}s`}}
                >
                  <section.icon className={`w-5 h-5 ${activeSection === section.id ? 'text-white' : 'text-blue-500'}`} />
                  <span className="font-medium text-sm">{section.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-16 animate-slide-in-right">
            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <MdGavel className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">1. Acceptance of Terms</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to CyberAI Technologies Ltd. By accessing or using our website and services, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>
            </section>

            {/* 2. Use of Website */}
            <section id="use-website" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg">
                  <MdWeb className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">2. Use of Website</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-red-100/50 p-8 rounded-3xl border-l-4 border-red-500 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaExclamationTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-900 mb-3 text-lg">Prohibited Activities</h4>
                    <p className="text-gray-700 leading-relaxed">
                      You must not use our website to knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware, or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Intellectual Property */}
            <section id="intellectual" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <MdCopyright className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">3. Intellectual Property</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of CyberAI Technologies Ltd or its content suppliers and is protected by international copyright laws.
                </p>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 rounded-3xl border-2 border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-4 text-lg">Trademarks</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The CyberAI logo and other marks indicated on our site are trademarks of CyberAI Technologies Ltd. Our trademarks may not be used in connection with any product or service that is not ours, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits CyberAI Technologies Ltd.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Disclaimer of Warranties */}
            <section id="disclaimer" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-2xl shadow-lg">
                  <MdWarning className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">4. Disclaimer of Warranties</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  This website and the materials and services on this website are provided on an "as is" and "as available" basis. CyberAI Technologies Ltd makes no representations or warranties of any kind, express or implied, as to the operation of this website or the information, content, materials, or services included on or otherwise made available to you through this website.
                </p>

                <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-500">
                  <p className="text-gray-700 leading-relaxed">
                    To the full extent permissible by applicable law, we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Limitation of Liability */}
            <section id="limitation" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                  <MdShield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">5. Limitation of Liability</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  CyberAI Technologies Ltd will not be liable for any damages of any kind arising from the use of this website or from any information, content, materials, products, or services included on or otherwise made available to you through this website, including, but not limited to direct, indirect, incidental, punitive, and consequential damages, unless otherwise specified in writing.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-green-100/50 p-8 rounded-3xl border-2 border-green-200">
                  <div className="flex items-start gap-4">
                    <MdShield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-900 mb-3 text-lg">Important Notice</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Nothing in these terms excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Governing Law */}
            <section id="governing" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                  <MdPublic className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">6. Governing Law</h2>
              </div>
              
              <div className="bg-indigo-50 p-8 rounded-3xl border-l-4 border-indigo-500">
                <p className="text-gray-700 leading-relaxed mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any dispute you have which relates to these terms and conditions, or your use of our website (whether it be contractual or non-contractual), will be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>
            </section>

            {/* 7. Changes to Terms */}
            <section id="changes" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-2xl shadow-lg">
                  <MdRefresh className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">7. Changes to Terms</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms of Use at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>

                <div className="bg-teal-50 p-6 rounded-2xl border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Contact Information */}
            <section id="contact" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <MdEmail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">8. Contact Information</h2>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-10 rounded-3xl border-l-4 border-orange-500 shadow-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  If you have any questions about these Terms of Use, please contact us:
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-xl">
                      <MdBusiness className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Company Name:</p>
                      <p className="text-gray-700">CyberAI Technologies Ltd</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 p-3 rounded-xl">
                      <MdLocationOn className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Address:</p>
                      <p className="text-gray-700">60 Tottenham Court Road, London W1T 2EW</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-xl">
                      <MdEmail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Email:</p>
                      <a href="mailto:Enquiries@cyberaitechs.com" className="text-blue-600 hover:text-blue-700 font-medium">
                        Enquiries@cyberaitechs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-xl">
                      <MdPhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Phone:</p>
                      <a href="tel:+44 7399339964" className="text-gray-700 hover:text-blue-600">
                        +44 7399339964
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}