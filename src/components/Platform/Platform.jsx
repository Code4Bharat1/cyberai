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
  MdFactory,
  MdVerifiedUser,
  MdTrendingUp,
  MdDeviceHub,
  MdIntegrationInstructions
} from 'react-icons/md';
import { FaArrowRight, FaShieldAlt, FaChevronRight, FaCheck, FaNetworkWired } from 'react-icons/fa';
import { Scale, FileText, Briefcase, Heart } from 'lucide-react';
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
      icon: MdCloud,
      title: "Build Your Own AI Operating System",
      desc: "Deploy a complete AI platform in your environment that grows organically—enabling agent workflows and automation on top of your base system.",
      gradient: "from-blue-500 to-blue-600",
      link: "ai-os"
    },
    {
      icon: MdLock,
      title: "Data Under Your Control",
      desc: "End-to-end data sovereignty with complete auditability and transparency—your data never leaves your infrastructure.",
      gradient: "from-orange-500 to-orange-600",
      link: "data-sovereignty"
    },
    {
      icon: MdAutorenew,
      title: "Continuous AI Improvement",
      desc: "Baseline updates included as AI technology matures—ensuring your models remain competitive over 3+ year timeframes.",
      gradient: "from-purple-500 to-purple-600",
      link: "continuous-improvement"
    },
    {
      icon: MdDeviceHub,
      title: "MCP Servers & A2A Framework",
      desc: "Agent-to-Agent communication framework for coordinating multiple AI systems—single unified output from diverse tools.",
      gradient: "from-green-500 to-green-600",
      link: "integration"
    },
    {
      icon: MdShield,
      title: "AI Governance Built-In",
      desc: "Comprehensive governance frameworks aligned with ISO 42001, EU AI Act, GDPR, and sector-specific regulations.",
      gradient: "from-pink-500 to-pink-600",
      link: "governance"
    },
    {
      icon: MdSecurity,
      title: "Security by Design",
      desc: "Governance controls embedded across the entire AI lifecycle, from data ingestion to deployment.",
      gradient: "from-indigo-500 to-indigo-600",
      link: "security"
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
      subtitle: "Inside Your Environment",
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
      color: "from-blue-500 to-blue-700",
      compliance: "FCA, PRA, MiFID II"
    },
    {
      name: "Healthcare & Life Sciences",
      icon: MdHealthAndSafety,
      color: "from-emerald-500 to-emerald-700",
      compliance: "HIPAA, NHS DSP Toolkit"
    },
    {
      name: "Government & Public Sector",
      icon: MdBusiness,
      color: "from-purple-500 to-purple-700",
      compliance: "Government Security Classification"
    },
    {
      name: "Legal Services",
      icon: Scale,
      color: "from-indigo-500 to-indigo-700",
      compliance: "SRA, Law Society Standards"
    },
    {
      name: "Insurance",
      icon: MdShield,
      color: "from-cyan-500 to-cyan-700",
      compliance: "FCA, Solvency II"
    },
    {
      name: "Professional Services",
      icon: Briefcase,
      color: "from-orange-500 to-orange-700",
      compliance: "Sector-Specific Standards"
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Updated positioning */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-6 border border-orange-500/30 animate-fade-in-down">
            <MdCloud className="w-6 h-6 text-orange-300" />
            <span className="text-orange-300 font-semibold">Private AI Platform</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">CyberAI</span> Platform
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-10 animate-fade-in font-light leading-relaxed">
            Your AI operating system deployed on your infrastructure—private, secure, and compliant for regulated industries
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                Schedule Consultation
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

      {/* Introduction Section - Updated */}
      <section className="py-10 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Platform</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Private AI Platform Engineering
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              CyberAI delivers an AI platform with <span className="font-bold text-blue-700">governance built-in</span>. We specialize in deploying private LLMs, SLMs, and secure GenAI solutions that address the critical challenges of data sovereignty and regulatory compliance. Our platform is industry-agnostic, vendor-agnostic, and purpose-built for heavily regulated sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Core Platform Capabilities */}
      <section id="capabilities" className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
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
              Everything you need to deploy compliant AI systems in your environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, i) => (
              <div 
                key={i}
                onClick={() => scrollToSection(capability.link)}
                className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className={`bg-gradient-to-br ${capability.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <capability.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  {capability.desc}
                </p>
                <div className="flex items-center gap-2 text-orange-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <FaArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own AI OS */}
      <section id="ai-os" className="py-10 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Core Capability</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Build Your Own AI Operating System
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Take control of your AI infrastructure—no dependency on OpenAI, Anthropic, or other external platforms
            </p>
          </div>

          {/* Visual Diagram */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-12 mb-12 border-2 border-blue-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                  <MdCloud className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 text-lg">Base AI Platform</h4>
                  <p className="text-gray-600 text-sm mt-2">Deployed in your environment</p>
                </div>
                <div className="text-blue-600 font-semibold">↓</div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                  <MdAutorenew className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 text-lg">Organic Growth</h4>
                  <p className="text-gray-600 text-sm mt-2">Learns from your data</p>
                </div>
                <div className="text-orange-600 font-semibold">↓</div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                  <MdDeviceHub className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 text-lg">Agent Workflows</h4>
                  <p className="text-gray-600 text-sm mt-2">Automation on top</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-blue-900 text-xl mb-4">Key Advantages</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Complete Ownership</span>
                    <p className="text-gray-600 text-sm">Full control over your AI infrastructure—no vendor lock-in</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Scalable Architecture</span>
                    <p className="text-gray-600 text-sm">Grows with your business needs and data volume</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Custom Workflows</span>
                    <p className="text-gray-600 text-sm">Build agents tailored to your specific processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Independent Evolution</span>
                    <p className="text-gray-600 text-sm">Not dependent on external model updates or API changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Data Sovereignty */}
      <section id="data-sovereignty" className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Data Control</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Data Under Your Control
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Addressing the industry's #1 concern: complete data sovereignty with end-to-end auditability
            </p>
          </div>

          {/* Visual Flow Diagram */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-12 mb-12 border-2 border-orange-200">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: MdStorage, title: "Your Data", desc: "Stays in your infrastructure" },
                { icon: MdLock, title: "Your Models", desc: "Trained exclusively on your data" },
                { icon: MdVerifiedUser, title: "Your Control", desc: "Full audit trails & transparency" },
                { icon: MdShield, title: "Your Compliance", desc: "Meet all regulatory requirements" }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <item.icon className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-blue-900 text-xl mb-6 text-center">What This Means For You</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <MdCheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Never Leaves Your Environment</h5>
                    <p className="text-gray-700">Your sensitive data is never transmitted to external APIs or third-party servers. Models are trained and deployed entirely within your infrastructure—on-premises or in your private cloud.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <MdCheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Complete Transparency</h5>
                    <p className="text-gray-700">Every data point, every training decision, every model output is fully auditable. You can trace exactly how your AI arrived at any conclusion—critical for compliance and regulatory requirements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <MdCheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Regulatory Compliance Built-In</h5>
                    <p className="text-gray-700">Meet GDPR, EU AI Act, ISO 42001, and industry-specific requirements by design. Your data governance policies are enforced at the infrastructure level—not as an afterthought.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="text-center">
            <button 
              onClick={() => scrollToSection('continuous-improvement')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
            >
              Discover Continuous Improvement
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div> */}
        </div>
      </section>

      {/* Continuous Improvement */}
      <section id="continuous-improvement" className="py-10 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Long-Term Value</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Continuous AI Improvement
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              AI technology evolves rapidly—your models should too. Baseline updates included to keep you competitive over 3+ years.
            </p>
          </div>

          {/* Timeline Diagram */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl p-12 mb-12 border-2 border-purple-200">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-purple-300 z-0"></div>
              
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {[
                  {
                    icon: MdSettings,
                    title: "Initial Deployment",
                    desc: "Custom platform configured for your business",
                    period: "Month 1"
                  },
                  {
                    icon: MdAutorenew,
                    title: "Baseline Updates",
                    desc: "Included updates as AI technology advances",
                    period: "Ongoing",
                    highlighted: true
                  },
                  {
                    icon: MdTrendingUp,
                    title: "Competitive Edge",
                    desc: "Platform remains state-of-the-art over 3+ years",
                    period: "Year 3+"
                  }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className={`${item.highlighted ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white' : 'bg-white'} rounded-2xl p-6 shadow-xl mb-4`}>
                      <div className={`w-16 h-16 ${item.highlighted ? 'bg-white/20' : 'bg-purple-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <item.icon className={`w-8 h-8 ${item.highlighted ? 'text-white' : 'text-purple-600'}`} />
                      </div>
                      <h4 className={`font-bold text-lg mb-2 ${item.highlighted ? 'text-white' : 'text-blue-900'}`}>{item.title}</h4>
                      <p className={`text-sm mb-3 ${item.highlighted ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                      <div className={`text-xs font-semibold ${item.highlighted ? 'text-white/80' : 'text-purple-600'}`}>{item.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-blue-900 text-xl mb-6">What's Included in Support Contracts</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Platform Architecture Updates</span>
                    <p className="text-gray-600 text-sm">As foundation model technology improves, we upgrade your base architecture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Security Patches</span>
                    <p className="text-gray-600 text-sm">Proactive updates to address emerging AI security vulnerabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Performance Optimization</span>
                    <p className="text-gray-600 text-sm">Ongoing improvements to speed, accuracy, and resource efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Regulatory Updates</span>
                    <p className="text-gray-600 text-sm">Ensure compliance as regulations evolve (EU AI Act, GDPR, etc.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-2xl text-center">
            <h4 className="text-2xl font-bold mb-3">Long-Term Investment Protection</h4>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Your AI platform remains competitive and secure for 3+ years—protecting your investment as the technology landscape evolves.
            </p>
          </div>

          {/* <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('integration')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
            >
              Learn About Integration & A2A
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div> */}
        </div>
      </section>

      {/* MCP Servers & A2A Framework */}
      <section id="integration" className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Secure Integration</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              MCP Servers & A2A Framework
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Coordinate multiple AI systems—single unified output from diverse tools through Agent-to-Agent communication
            </p>
          </div>

          {/* Integration Diagram */}
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-12 mb-12 border-2 border-green-200">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Multiple AI Tools */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="font-bold text-blue-900 text-lg mb-4 text-center">Your AI Ecosystem</h4>
                <div className="space-y-3">
                  {["Document AI", "Compliance AI", "Risk AI", "Analytics AI", "Customer AI", "Operations AI"].map((tool, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <MdDeviceHub className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* A2A Framework */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center">
                <FaNetworkWired className="w-20 h-20 mb-6" />
                <h4 className="font-bold text-2xl mb-4 text-center">A2A Framework</h4>
                <p className="text-green-100 text-center text-sm">Agent-to-Agent Communication Layer</p>
              </div>

              {/* Unified Output */}
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
                <MdIntegrationInstructions className="w-16 h-16 text-blue-600 mb-4" />
                <h4 className="font-bold text-blue-900 text-lg mb-3 text-center">Unified Output</h4>
                <p className="text-gray-600 text-center">Single coherent response synthesized from all AI systems</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-blue-900 text-xl mb-6 text-center">Why This Matters</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-xl">
                  <h5 className="font-bold text-gray-900 mb-2">The Challenge</h5>
                  <p className="text-gray-700 text-sm">
                    Most enterprises deploy 5-6 specialized AI tools. Without coordination, you get conflicting answers, duplicated work, and integration chaos.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <h5 className="font-bold text-gray-900 mb-2">Our Solution</h5>
                  <p className="text-gray-700 text-sm">
                    A2A framework enables your AI agents to communicate, coordinate, and deliver a single unified response—eliminating conflicts and maximizing value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MdCheckCircle,
                title: "MCP Server Integration",
                desc: "Secure Model Context Protocol servers for tool coordination and data sharing across your AI ecosystem"
              },
              {
                icon: MdDeviceHub,
                title: "Cross-Agent Orchestration",
                desc: "Intelligent routing and coordination between specialized AI agents for complex workflows"
              },
              {
                icon: MdShield,
                title: "Secure by Design",
                desc: "All agent communication happens within your infrastructure with full encryption and audit trails"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <item.icon className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="py-10 px-4 bg-white scroll-mt-20">
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
              A secure end-to-end deployment in your environment
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
              Proven solutions for sectors where data sovereignty is non-negotiable
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  Private AI platform compliant with industry-specific regulations and data privacy requirements.
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                    {industry.compliance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-8 border border-orange-500/30">
            <MdShield className="w-6 h-6 text-orange-300" />
            <span className="text-orange-300 font-semibold">Deploy Private AI</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Build Your AI Platform Inside Your Environment
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a consultation to discuss your private AI deployment strategy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                Schedule Consultation
                <MdArrowForward className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
            <a href="https://wa.me/447554898543" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-white/50 backdrop-blur-sm hover:bg-white hover:text-blue-900 px-12 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105">
                WhatsApp Us
              </button>
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            Or email us at <a href="mailto:Enquiries@cyberaitechs.com" className="underline hover:text-white">Enquiries@cyberaitechs.com</a>
          </p>
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