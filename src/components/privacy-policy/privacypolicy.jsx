"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdSecurity, 
  MdShield, 
  MdPrivacyTip, 
  MdStorage, 
  MdCookie,
  MdPeople,
  MdAccessTime,
  MdGavel,
  MdRefresh,
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdBusiness
} from 'react-icons/md';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function PrivacyPolicyPage() {
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
    { id: 'introduction', title: 'Introduction', icon: MdPrivacyTip },
    { id: 'information', title: 'Information We Collect', icon: MdStorage },
    { id: 'usage', title: 'How We Use Information', icon: MdShield },
    { id: 'security', title: 'Data Protection & Security', icon: MdSecurity },
    { id: 'cookies', title: 'Use of Cookies', icon: MdCookie },
    { id: 'third-party', title: 'Third-Party Services', icon: MdPeople },
    { id: 'retention', title: 'Data Retention', icon: MdAccessTime },
    { id: 'rights', title: 'Your Rights', icon: MdGavel },
    { id: 'changes', title: 'Changes to This Policy', icon: MdRefresh },
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
            <MdPrivacyTip className="w-6 h-6 text-orange-300" />
            <span className="text-orange-300 font-semibold">Your Privacy Matters</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in-up">
            Privacy Policy
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
            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <MdPrivacyTip className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">1. Introduction</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  CyberAI Technologies Ltd ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our enterprise AI and cybersecurity services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We provide enterprise-grade AI solutions specifically designed for regulated industries. We are dedicated to maintaining the highest standards of data privacy and compliance with applicable laws, including GDPR and sector-specific regulations.
                </p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="information" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg">
                  <MdStorage className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">2. Information We Collect</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We may collect and process the following data about you:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Personal Identification Information",
                    desc: "Name, email address, phone number, job title, and company name when you request a consultation or contact us."
                  },
                  {
                    title: "Technical Data",
                    desc: "IP address, browser type and version, time zone setting, operating system, and platform."
                  },
                  {
                    title: "Usage Data",
                    desc: "Information about how you use our website and services."
                  },
                  {
                    title: "Client Data",
                    desc: "Data provided by clients for the purpose of developing or fine-tuning privatised AI models. This data is handled strictly according to specific client agreements and is typically processed within the client's own secure environment."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
                  >
                    <FaCheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. How We Use Information */}
            <section id="usage" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <MdShield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">3. How We Use Information</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We use the collected information for the following purposes:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "To provide and maintain our services, including privatised LLM deployment and AI governance consulting",
                  "To communicate with you regarding your inquiries, service updates, or technical support",
                  "To improve our website functionality and user experience",
                  "To comply with legal obligations and regulatory requirements applicable to our business operations",
                  "To ensure the security of our infrastructure and prevent fraud"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-500 transition-all hover:shadow-md"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-2 flex-shrink-0">
                      <FaCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Data Protection & Security */}
            <section id="security" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                  <MdSecurity className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">4. Data Protection & Security</h2>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-3xl border-2 border-green-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  We implement robust technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our security protocols align with enterprise-grade standards suitable for heavily regulated industries.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For our AI services, we specialise in Privatised LLMs where data processing typically occurs within the client's secure private cloud or on-premise environment, minimising external data exposure.
                </p>
              </div>
            </section>

            {/* 5. Use of Cookies */}
            <section id="cookies" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-2xl shadow-lg">
                  <MdCookie className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">5. Use of Cookies</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and allows us to improve our site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use strictly necessary cookies for website operation and analytical cookies to understand visitor usage patterns. You can set your browser to refuse all or some browser cookies, though this may impact the functionality of certain parts of the site.
              </p>
            </section>

            {/* 6. Third-Party Services */}
            <section id="third-party" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                  <MdPeople className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">6. Third-Party Services</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We are industry and vendor agnostic. While we may integrate with third-party cloud providers or technology partners (such as Azure, AWS, or specific AI model providers) at a client's request, we do not sell, trade, or otherwise transfer your personally identifiable information to outside parties for marketing purposes.
                </p>
                <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500">
                  <p className="text-gray-700 leading-relaxed">
                    Any data sharing with third-party processors is governed by strict data processing agreements ensuring compliance with applicable data protection laws.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Data Retention */}
            <section id="retention" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-4 rounded-2xl shadow-lg">
                  <MdAccessTime className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">7. Data Retention</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When personal data is no longer required, we securely delete or anonymise it in accordance with our data retention policies.
              </p>
            </section>

            {/* 8. Your Rights */}
            <section id="rights" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg">
                  <MdGavel className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">8. Your Rights</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Under applicable data protection laws, you have various rights, including:
              </p>

              <div className="space-y-3">
                {[
                  { title: "Right to Access", desc: "You can request copies of your personal data" },
                  { title: "Right to Rectification", desc: "You can request correction of inaccurate data" },
                  { title: "Right to Erasure", desc: "You can request deletion of your data under certain conditions" },
                  { title: "Right to Restrict Processing", desc: "You can ask us to limit how we use your data" },
                  { title: "Right to Object", desc: "You can object to our processing of your personal data" }
                ].map((right, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-red-500 transition-all hover:shadow-md"
                  >
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-2 flex-shrink-0">
                      <FaCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">{right.title}</h4>
                      <p className="text-gray-700 text-sm">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                To exercise any of these rights, please contact us using the details provided below.
              </p>
            </section>

            {/* 9. Changes to This Policy */}
            <section id="changes" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-2xl shadow-lg">
                  <MdRefresh className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">9. Changes to This Policy</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* 10. Contact Information */}
            <section id="contact" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <MdEmail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-blue-900">10. Contact Information</h2>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-10 rounded-3xl border-l-4 border-orange-500 shadow-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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