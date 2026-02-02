"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdAssessment, 
  MdMap, 
  MdAccountBalance, 
  MdStorage, 
  MdPsychology, 
  MdSmartToy, 
  MdBook, 
  MdPeople, 
  MdMonitor,
  MdSecurity,
  MdBugReport,
  MdGavel,
  MdSpeed,
  MdLock,
  MdAutoAwesome
} from 'react-icons/md';
import { FaShieldAlt, FaRobot, FaCloud, FaArrowRight } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      icon: MdAssessment,
      title: "AI Readiness Assessment",
      desc: "Evaluate your infrastructure, data, and skills to ensure successful AI adoption.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MdMap,
      title: "AI Strategy Roadmap",
      desc: "Develop a clear, actionable path to implementing AI aligned with business goals.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: MdAccountBalance,
      title: "AI Governance & Risk",
      desc: "Align with ISO 42001, GDPR, and sector-specific regulations to ensure compliance.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: MdStorage,
      title: "Data Strategy & Engineering",
      desc: "Prepare and optimize your data architecture for high-performance AI models.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MdPsychology,
      title: "Custom AI Development",
      desc: "Build bespoke LLMs, predictive analytics, and generative AI solutions.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: MdSmartToy,
      title: "Agentic AI & Automation",
      desc: "Implement autonomous agents to streamline complex enterprise workflows.",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: MdBook,
      title: "AI Ethics & Compliance",
      desc: "Advisory services to ensure responsible and ethical AI deployment.",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: MdPeople,
      title: "AI Training & Change",
      desc: "Empower your workforce with the skills to leverage new AI tools effectively.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: MdMonitor,
      title: "AI Monitoring",
      desc: "Continuous performance tracking and improvement of deployed AI models.",
      gradient: "from-cyan-500 to-cyan-600"
    }
  ];

  const redTeamingScope = [
    { icon: MdSecurity, text: "Adversarial attack simulation", color: "orange" },
    { icon: MdBugReport, text: "Prompt injection & jailbreak testing", color: "blue" },
    { icon: MdGavel, text: "Bias & fairness assessment", color: "purple" },
    { icon: MdSpeed, text: "Robustness & stress testing", color: "green" },
    { icon: MdLock, text: "Data privacy & model leakage testing", color: "red" },
    { icon: MdAutoAwesome, text: "Hallucination & reliability testing", color: "indigo" }
  ];

  const methodology = [
    {
      step: "01",
      title: "Assess",
      desc: "Baseline security posture and threat modeling"
    },
    {
      step: "02",
      title: "Attack",
      desc: "Adversarial attacks and model exploitation"
    },
    {
      step: "03",
      title: "Analyse",
      desc: "Vulnerabilities, bias, hallucinations, and robustness"
    },
    {
      step: "04",
      title: "Remediate",
      desc: "Mitigation, secure retraining and monitoring"
    }
  ];

  const capabilities = [
    "Cloud security configuration reviews",
    "Cloud architecture reviews",
    "Cloud pentesting for AI environments"
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Comprehensive Solutions
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
            Enterprise-grade AI, governance and security services for regulated industries
          </p>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <MdPsychology className="absolute w-12 h-12 text-blue-500/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <FaShieldAlt className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <FaRobot className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* AI Strategy & Adoption Section */}
      <section id="ai-strategy" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 animate-fade-in">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Core Services</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
              AI Strategy & Adoption
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in">
              Comprehensive support for your AI transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${i * 0.05}s`}}
              >
                <div className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <service.icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('red-teaming')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto text-lg"
            >
              Explore AI Red Teaming
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* AI Red Teaming Section */}
      <section id="red-teaming" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Security Testing</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              AI Red Teaming
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Rigorous testing to identify vulnerabilities before deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Service Scope */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                    <FaShieldAlt className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-blue-900">Service Scope</h3>
                </div>

                <div className="space-y-4">
                  {redTeamingScope.map((item, i) => (
                    <div 
                      key={i} 
                      className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-transparent animate-fade-in-up"
                      style={{animationDelay: `${i * 0.1}s`}}
                    >
                      <div className={`bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl p-3 group-hover:scale-110 transition-transform shadow-md`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Methodology */}
            <div className="animate-slide-in-right space-y-8">
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-8">Methodology</h3>
                
                <div className="space-y-6">
                  {methodology.map((item, i) => (
                    <div 
                      key={i} 
                      className="relative bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-all duration-500 group animate-fade-in-up"
                      style={{animationDelay: `${i * 0.1}s`}}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 shadow-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-500 p-3 rounded-xl shadow-lg">
                    <FaCloud className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900">Extended Capabilities</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {capabilities.map((cap, i) => (
                    <span 
                      key={i}
                      className="bg-white px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 border-2 border-blue-200 hover:border-blue-500 hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('cta')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto text-lg"
            >
              Get Started With Our Services
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-4 overflow-hidden scroll-mt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-8 border border-orange-500/30">
              <FaShieldAlt className="w-6 h-6 text-orange-300" />
              <span className="text-orange-300 font-semibold">Security First</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Secure Your AI Before Attackers Do
            </h2>
            <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with CyberAI for end-to-end security and governance. Protect your AI investments with comprehensive testing and compliance.
            </p>
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                Contact CyberAI
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

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
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
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