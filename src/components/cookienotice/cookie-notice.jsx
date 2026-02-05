"use client";
import React, { useState } from 'react';
import { MapPin, Globe, Mail, Cookie, Shield, BarChart3, Settings, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function CookieNoticePage() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      desc: "These are strictly necessary for the website to function properly. Without these cookies, certain services (like secure login areas) cannot be provided.",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100/50"
    },
    {
      icon: BarChart3,
      title: "Performance & Analytics Cookies",
      desc: "These allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.",
      gradient: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100/50"
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      desc: "These enable the website to provide enhanced functionality and personalisation, such as remembering your language choice or region.",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100/50"
    }
  ];

  const purposes = [
    "To ensure the security and integrity of our website",
    "To remember your preferences and settings during your visit",
    "To analyse how our website is used and improve our content and services",
    "To provide a consistent and reliable user experience across different devices"
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-6 border border-orange-500/30 animate-fade-in-down">
            <Cookie className="w-5 h-5 text-orange-300" />
            <span className="text-orange-300 font-semibold text-sm">Privacy & Transparency</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 animate-fade-in-up">
            Cookie Notice
          </h1>
          <p className="text-blue-200 text-lg animate-fade-in">
            CyberAI Technologies Ltd • Last Updated: October 2023
          </p>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Cookie className="absolute w-10 h-10 text-blue-300/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <Shield className="absolute w-12 h-12 text-orange-400/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <Settings className="absolute w-8 h-8 text-blue-400/20 animate-float" style={{bottom: '25%', left: '15%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Introduction Card */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 mb-12 animate-fade-in-up">
          <p className="text-gray-700 text-lg leading-relaxed">
            This Cookie Notice explains how CyberAI Technologies Ltd <span className="font-semibold text-blue-900">("we", "us", or "our")</span> uses cookies and similar 
            tracking technologies when you visit our website. This policy provides clear information about what cookies are, 
            why we use them, and how you can manage your preferences.
          </p>
        </div>

        {/* Section 1: What Are Cookies? */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="group bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div 
              className="flex items-center justify-between p-8 cursor-pointer bg-gradient-to-r from-blue-50 to-transparent"
              onClick={() => toggleSection(1)}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-xl">1</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-900 group-hover:text-orange-500 transition-colors">What Are Cookies?</h2>
              </div>
              {expandedSection === 1 ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </div>
            
            <div className={`px-8 overflow-hidden transition-all duration-500 ${expandedSection === 1 ? 'max-h-96 pb-8' : 'max-h-0'}`}>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They 
                  are widely used by website owners to make their websites work, or to work more efficiently, as well as to 
                  provide reporting information. Cookies help us remember your preferences and improve your browsing experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Types of Cookies We Use */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">2</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-900">Types of Cookies We Use</h2>
            </div>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              We use the following types of cookies on our website:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {cookieTypes.map((type, i) => (
                <div 
                  key={i}
                  className="group bg-gradient-to-br ${type.bgColor} p-6 rounded-2xl border-2 border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{animationDelay: `${i * 0.1}s`}}
                >
                  <div className={`bg-gradient-to-br ${type.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg mb-3">{type.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Why We Use Cookies */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">3</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-900">Why We Use Cookies</h2>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We use cookies for the following purposes:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {purposes.map((purpose, i) => (
                <div 
                  key={i}
                  className="group flex items-start gap-3 p-5 bg-gradient-to-r from-purple-50 to-transparent rounded-xl hover:shadow-md transition-all duration-300 border border-purple-100"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-1.5 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{purpose}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Managing Your Cookie Preferences */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="group bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div 
              className="flex items-center justify-between p-8 cursor-pointer bg-gradient-to-r from-green-50 to-transparent"
              onClick={() => toggleSection(4)}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-xl">4</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-900 group-hover:text-orange-500 transition-colors">Managing Your Cookie Preferences</h2>
              </div>
              {expandedSection === 4 ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </div>
            
            <div className={`px-8 overflow-hidden transition-all duration-500 ${expandedSection === 4 ? 'max-h-[500px] pb-8' : 'max-h-0'}`}>
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  You have the right to decide whether to accept or reject cookies. You can set or amend your web browser 
                  controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your 
                  access to some functionality and areas of our website may be restricted.
                </p>
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-green-900">💡 Tip:</span> Most web browsers allow you to control cookies through their settings preferences. To find out more about how 
                    to manage cookies on popular browsers, please visit your browser developer's website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Changes to This Notice */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <div className="group bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div 
              className="flex items-center justify-between p-8 cursor-pointer bg-gradient-to-r from-indigo-50 to-transparent"
              onClick={() => toggleSection(5)}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-xl">5</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-900 group-hover:text-orange-500 transition-colors">Changes to This Notice</h2>
              </div>
              {expandedSection === 5 ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </div>
            
            <div className={`px-8 overflow-hidden transition-all duration-500 ${expandedSection === 5 ? 'max-h-96 pb-8' : 'max-h-0'}`}>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We may update this Cookie Notice from time to time in order to reflect, for example, changes to the cookies we 
                  use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Notice regularly to stay 
                  informed about our use of cookies and related technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section - Enhanced */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-10 shadow-2xl overflow-hidden animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-64 h-64 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
            <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500 p-3 rounded-xl shadow-lg">
                <Cookie className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white">
                Questions about our Cookies?
              </h3>
            </div>
            
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              If you have any questions about our use of cookies or other technologies, please contact us.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
                <MapPin className="w-8 h-8 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">Address</h4>
                <div className="text-blue-200 text-sm leading-relaxed">
                  <div>60 Tottenham Court Road</div>
                  <div>London W1T 2EW</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
                <Mail className="w-8 h-8 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">Email</h4>
                <a href="mailto:Enquiries@cyberaitechs.com" className="text-blue-200 hover:text-orange-400 transition-colors text-sm break-all">
                  Enquiries@cyberaitechs.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
                <Globe className="w-8 h-8 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">Website</h4>
                <a href="https://www.cyberaitechs.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-orange-400 transition-colors text-sm">
                  www.cyberaitechs.com
                </a>
              </div>
            </div>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}