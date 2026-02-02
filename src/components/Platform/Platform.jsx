"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdSecurity, 
  MdCloud, 
  MdLock,
  MdAutorenew,
  MdCheckCircle,
  MdSettings,
  MdShield,
  MdStorage,
  MdArrowForward,
  MdBusiness,
  MdHealthAndSafety,
  MdAccountBalance,
  MdLocalShipping,
  MdOilBarrel,
  MdFactory
} from 'react-icons/md';
import { FaArrowRight, FaShieldAlt, FaChevronRight } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function PlatformPage() {
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

  const coreCapabilities = [
    {
      icon: MdLock,
      title: "Privatised LLMs",
      desc: "Company-specific AI models deployed securely in your private cloud or on-premise environment.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MdAutorenew,
      title: "Agentic AI Automation",
      desc: "Intelligent AI agents for compliance checks, fraud detection, and complex workflow automation.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: MdShield,
      title: "AI Governance & Risk",
      desc: "Comprehensive governance frameworks aligned with ISO 42001, GDPR, and sector-specific regulations.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: MdSecurity,
      title: "Security by Design",
      desc: "Built-in cybersecurity controls embedded across the entire AI lifecycle, from data to deployment.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MdStorage,
      title: "Data Privacy & Control",
      desc: "Maintain full sovereignty and control over your data, models, and AI outputs at all times.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: MdCloud,
      title: "Flexible Deployment",
      desc: "Deploy seamlessly across on-premise, private cloud, or secure hybrid infrastructure environments.",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const architectureSteps = [
    {
      icon: MdSettings,
      title: "Foundation Model",
      subtitle: "Base AI Model Selection",
      desc: "Choose from leading foundation models tailored to your industry and use case.",
      step: "01"
    },
    {
      icon: MdAutorenew,
      title: "Fine-Tuning",
      subtitle: "Industry-Specific Data",
      desc: "Customize models with your proprietary data while maintaining security and compliance.",
      step: "02"
    },
    {
      icon: MdShield,
      title: "Secure Deployment",
      subtitle: "Inside Client Environment",
      desc: "Deploy within your infrastructure with end-to-end encryption and access controls.",
      highlighted: true,
      step: "03"
    },
    {
      icon: MdCloud,
      title: "AI Agents Layer",
      subtitle: "Automation & Orchestration",
      desc: "Deploy intelligent agents that automate workflows and decision-making processes.",
      step: "04"
    }
  ];

  const industries = [
    {
      name: "Banking & Financial Services",
      icon: MdAccountBalance,
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Healthcare & Life Sciences",
      icon: MdHealthAndSafety,
      color: "from-emerald-500 to-emerald-700"
    },
    {
      name: "Government & Public Sector",
      icon: MdBusiness,
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "Insurance",
      icon: MdShield,
      color: "from-cyan-500 to-cyan-700"
    },
    {
      name: "Oil & Gas",
      icon: MdOilBarrel,
      color: "from-amber-600 to-amber-800"
    },
    {
      name: "Logistics & Supply Chain",
      icon: MdLocalShipping,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const whyPlatform = [
    {
      icon: MdSecurity,
      title: "Security-first AI Engineering",
      desc: "Every model is built with security as a foundational layer, not an afterthought."
    },
    {
      icon: MdSettings,
      title: "Industry & Vendor Agnostic",
      desc: "We work with any underlying technology stack that fits your specific needs."
    },
    {
      icon: MdLock,
      title: "Designed for Regulated Data",
      desc: "AI solutions specifically tackle PII, PHI, and sensitive financial data."
    },
    {
      icon: MdAutorenew,
      title: "End-to-End AI Lifecycle",
      desc: "From initial strategy and training to deployment, monitoring, and fine tuning."
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-6 border border-orange-500/30 animate-fade-in-down">
            <MdSecurity className="w-6 h-6 text-orange-300" />
            <span className="text-orange-300 font-semibold">Enterprise AI Platform</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">CyberAI</span> Platform
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-10 animate-fade-in font-light leading-relaxed">
            A secure, private, and compliant AI platform for regulated industries
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                Start Secure AI Journey
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button
              onClick={() => scrollToSection('capabilities')}
              className="group border-2 border-white/50 hover:border-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/10 inline-flex items-center gap-2"
            >
              Explore Capabilities
              <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <MdShield className="absolute w-12 h-12 text-blue-300/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <MdLock className="absolute w-10 h-10 text-orange-400/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <MdCloud className="absolute w-14 h-14 text-cyan-300/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Platform</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Enterprise-Grade AI Engineering
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              CyberAI delivers enterprise-grade AI engineering focused on <span className="font-bold text-blue-700">security by design</span>. We specialise in building privatised LLMs, SLMs, and secure GenAI solutions that solve the critical challenges of AI governance and risk. Our platform is industry-agnostic, vendor-agnostic, and purpose-built for heavily regulated sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Core Platform Capabilities */}
      <section id="capabilities" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Platform Features</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
              Core Platform Capabilities
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto animate-fade-in">
              Everything you need to build safe, compliant AI systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, i) => (
              <div 
                key={i}
                className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className={`bg-gradient-to-br ${capability.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <capability.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {capability.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">How It Works</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
              Platform Architecture
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto animate-fade-in">
              A secure end-to-end pipeline deployed in your environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureSteps.map((step, i) => (
              <div 
                key={i}
                className={`relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${
                  step.highlighted 
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-500/30' 
                    : 'bg-white shadow-xl hover:shadow-2xl border-2 border-gray-100'
                }`}
                style={{animationDelay: `${i * 0.15}s`}}
              >
                <div className="absolute -top-6 left-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-black text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {step.step}
                </div>

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4 ${
                  step.highlighted 
                    ? 'bg-white/20' 
                    : 'bg-gradient-to-br from-blue-100 to-blue-50'
                }`}>
                  <step.icon className={`w-8 h-8 ${
                    step.highlighted ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>

                <h3 className={`text-xl font-bold mb-2 ${
                  step.highlighted ? 'text-white' : 'text-blue-900'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-sm font-semibold mb-3 ${
                  step.highlighted ? 'text-white/90' : 'text-gray-500'
                }`}>
                  {step.subtitle}
                </p>
                <p className={`text-sm leading-relaxed ${
                  step.highlighted ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Regulated Industries */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Trusted by Industries</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
              Built for Regulated Industries
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto animate-fade-in">
              Proven solutions for sectors where data security is non-negotiable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${i * 0.05}s`}}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Secure AI solutions compliant with industry-specific regulations and data privacy requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CyberAI Platform */}
      <section className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Why Choose Us</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
              Why CyberAI Platform?
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto animate-fade-in">
              Differentiators that set us apart in enterprise AI security
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyPlatform.map((item, i) => (
              <div 
                key={i}
                className="group flex gap-6 items-start bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-8 border border-orange-500/30">
            <MdShield className="w-6 h-6 text-orange-300" />
            <span className="text-orange-300 font-semibold">Secure Your AI Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Build Secure AI Inside Your Environment
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Contact us to discuss your secure AI implementation strategy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                Schedule a Security Briefing
                <MdArrowForward className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
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