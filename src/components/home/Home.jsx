"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users, Brain, Code, Target, Zap, Database, UserCheck, Building2, Cpu, Globe, CheckCircle, ArrowRight, TrendingUp, Clock, X, BadgeCheck, Scale, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import { MdAccountBalance, MdArchitecture, MdAssessment, MdAutorenew, MdBusiness, MdCheck, MdCheckCircle, MdClose, MdCloud, MdDeviceHub, MdHealthAndSafety, MdLock, MdMonitor, MdSecurity, MdShield, MdStorage, MdTrendingUp, MdTune, MdVerifiedUser } from 'react-icons/md';
import { FaArrowRight, FaLock, FaRobot, FaServer } from 'react-icons/fa';


export default function CyberAILandingPage() {
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
    const developmentProcess = [
      {
        icon: FaServer,
        title: "Foundation Model",
        desc: "Select optimal Ai LLM or SLM foundation model suited to your requirements and infrastructure.",
        step: "01"
      },
      {
        icon: MdTune,
        title: "Custom Training",
        desc: "Fine-tune the model on your specific industry datasets to ensure relevance and accuracy.",
        step: "02"
      },
      {
        icon: FaLock,
        title: "Secure Deployment",
        desc: "Deploy within your cloud environment or on-premises, ensuring total data isolation.",
        step: "03"
      },
      {
        icon: FaRobot,
        title: "AI Agents",
        desc: "Integrate intelligent agents for automation, compliance checks, and domain-specific workflows.",
        step: "04"
      }
    ];
  
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
  const publicLLMIssues = [
    "Data sent to public cloud APIs",
    "Generic training—not industry-specific",
    "Limited compliance capabilities",
    "Significant data sovereignty risks"
  ];

  const privatisedLLMBenefits = [
    "Deployed on your private infrastructure",
    "Trained on your company & industry data",
    "Built-in compliance (GDPR, HIPAA, ISO 42001)",
    "Complete data control & ownership"
  ];
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section with Parallax */}
      <section id="hero" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-32 px-4 overflow-hidden mt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Enterprise AI & Cybersecurity
            </span>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            Resolving AI's Biggest <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Trust Gap</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
            Enterprise-grade AI  solutions designed specifically for heavily regulated industries. From idea to value in 90 days with exceptional ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-2"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-white/50 backdrop-blur-sm hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Learn More
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-orange-400" />
                <div className="text-3xl font-black text-orange-400">90</div>
              </div>
              <div className="text-sm text-blue-100 font-medium">Days to Value</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-orange-400" />
                <div className="text-3xl font-black text-orange-400">10x</div>
              </div>
              <div className="text-sm text-blue-100 font-medium">Productivity Gain</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-6 h-6 text-orange-400" />
                <div className="text-3xl font-black text-orange-400">100%</div>
              </div>
              <div className="text-sm text-blue-100 font-medium">Compliance</div>
            </div>
          </div>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <Shield className="absolute w-12 h-12 text-blue-300/20 animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <Lock className="absolute w-10 h-10 text-orange-400/20 animate-float" style={{ top: '60%', right: '15%', animationDelay: '1s' }} />
          <Brain className="absolute w-14 h-14 text-cyan-300/20 animate-float" style={{ bottom: '20%', left: '20%', animationDelay: '2s' }} />
        </div>
      </section>

      {/* Trust Badges Section */}
      {/* <section className="py-12 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 font-semibold mb-8 text-sm uppercase tracking-wide">
            Trusted by Leading Organizations in Regulated Industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-gray-700">ISO 27001</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-gray-700">SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-gray-700">HIPAA</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-gray-700">GDPR</span>
            </div>
          </div>
        </div>
      </section> */}
      <section id="data-sovereignty" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
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
      {/* Enterprise AI Section */}
      <section id="about" className="py-20 px-4 relative scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-in-left">
            {/* <div className="inline-block">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">About CyberAI</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
            </div> */}

            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
              Enterprise Grade Ai, Built for Data Sovereignty
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              CyberAI Technologies positions itself as an enterprise product platform that puts Industry AI on your desktop and mobile. From idea to value in 90 days with exceptional ROI.
            </p>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2 text-lg">The Challenge with Public AI</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While public AI models are powerful and rapidly evolving, they pose significant risks around data privacy and compliance for regulated industries.
                  </p>
                </div>
              </div>
            </div>

            {/* <button
              onClick={() => scrollToSection('solutions')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all"
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </button> */}
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-2xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
              alt="AI Circuit Board representing advanced technology"
              className="rounded-2xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent rounded-2xl z-20"></div>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      {/* <section id="solutions" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 animate-fade-in">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Focus</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 animate-fade-in-up">
            Strategic Focus Areas
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto animate-fade-in">
            Bridging the gap between cutting-edge AI capabilities and the security needs across all target markets.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Privatised LLMs", desc: "Enterprise-class secure AI for highly sensitive data on your own infrastructure", color: "from-blue-500 to-blue-600", link: 'privatised-llms' },
              { icon: Lock, title: "Secure DevAI", desc: "Streamlined development with best-in-class industrial-grade security measures", color: "from-orange-500 to-orange-600", link: 'process' },
              { icon: Eye, title: "AI Governance", desc: "Clear accountability frameworks ensuring transparency and regulatory compliance", color: "from-purple-500 to-purple-600", link: 'services' },
              { icon: Users, title: "AI Red Teaming", desc: "Expert-led testing, vulnerability analysis, and comprehensive threat modeling", color: "from-green-500 to-green-600", link: 'services' }
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => scrollToSection(item.link)}
                className="cursor-pointer group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-orange-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">How We Work</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Quick AI Model Development<br />For Your Business
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From initial consultation to production deployment, our streamlined process delivers custom AI solutions in 4-12 weeks.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative mb-16">
            {/* Horizontal Orange Line */}
            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500 z-0"></div>

            <div className="grid md:grid-cols-6 gap-6 relative z-10">
              {[
                {
                  icon: MdAssessment,
                  number: "1",
                  phase: "PHASE 1",
                  title: "Discovery",
                  desc: "Business case & requirements",
                  time: "Week 1"
                },
                {
                  icon: MdArchitecture,
                  number: "2",
                  phase: "PHASE 2",
                  title: "Development",
                  desc: "Model training & fine-tuning",
                  time: "4-12 weeks"
                },
                {
                  icon: MdCloud,
                  number: "3",
                  phase: "PHASE 3",
                  title: "Deployment",
                  desc: "Install in your environment",
                  time: "Week 1"
                },
                {
                  icon: MdVerifiedUser,
                  number: "4",
                  phase: "PHASE 4",
                  title: "Testing",
                  desc: "Validation within your infrastructure",
                  time: "2-4 weeks"
                },
                {
                  icon: MdTrendingUp,
                  number: "5",
                  phase: "PHASE 5",
                  title: "Go-Live",
                  desc: "Production deployment",
                  time: "Week 1"
                },
                {
                  icon: MdMonitor,
                  number: "6",
                  phase: "PHASE 6",
                  title: "Support",
                  desc: "Ongoing maintenance & updates",
                  time: "Continuous"
                }
              ].map((stage, i) => (
                <div key={i} className="text-center group">
                  <div className="relative mb-6">
                    {/* Circle with Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <stage.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-blue-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md z-20">
                      {stage.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 group-hover:shadow-xl transition-all hover:-translate-y-1 min-h-[160px] flex flex-col">
                    <div className="text-xs text-orange-600 font-bold mb-2 uppercase tracking-wide">{stage.phase}</div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">{stage.title}</h4>
                    <p className="text-sm text-gray-600 mb-3 flex-grow">{stage.desc}</p>
                    <div className="text-orange-600 font-bold text-sm">{stage.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speed & Customization Advantage */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border-l-4 border-orange-500 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-blue-900">Speed & Customization Advantage</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Fast Time to Value</h4>
                <p className="text-gray-700 leading-relaxed">
                  Most projects move from concept to production in <span className="font-bold text-orange-600">4-12 weeks</span>—dramatically faster than traditional enterprise software implementations.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-3">Built for Your Business</h4>
                <p className="text-gray-700 leading-relaxed">
                  Every model is custom-trained on your data, workflows, and requirements—not a generic solution adapted to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hero" className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white py-32 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Private AI Platform Core
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Private</span> LLMs & SLMs
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8 animate-fade-in font-light leading-relaxed">
            Secure, compliant AI models deployed entirely within your infrastructure
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-orange-400 mb-1">1B</div>
              <div className="text-xs text-blue-100">Parameters</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-orange-400 mb-1">100%</div>
              <div className="text-xs text-blue-100">Data Control</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-orange-400 mb-1">90</div>
              <div className="text-xs text-blue-100">Days Deploy</div>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-semibold">ISO 42001</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
              <Scale className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-semibold">EU AI Act</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
              <MdShield className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-semibold">GDPR</span>
            </div>
          </div>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <MdShield className="absolute w-12 h-12 text-blue-500/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <FaLock className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <FaServer className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Why Privatised LLMs */}
      <section id="privatised-llms" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">THE SOLUTION </span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">
              Why Privatised LLMs?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Deploy secure, industry-specific AI agents that operate entirely within your controlled environment, ensuring maximum privacy and compliance.
            </p>

            <div className="space-y-4">
              {[
                { title: "Data Privacy", desc: "Your data never leaves your secure environment", icon: Lock },
                { title: "Regulatory Compliance", desc: "Meets GDPR, HIPAA, and sector-specific requirements", icon: CheckCircle },
                { title: "Industry Accuracy", desc: "Fine-tuned on your proprietary data and workflows", icon: Target },
                { title: "Full Control", desc: "Complete ownership, hosting, and customization", icon: Shield }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-5 rounded-xl hover:bg-blue-50 transition-colors group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-2.5 mt-1 group-hover:scale-110 transition-transform shadow-md flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('process')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mt-6"
            >
              See Our Process
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="p-10 rounded-3xl animate-slide-in-right">
            <h3 className="text-3xl font-black text-blue-900 mb-8">Public vs Privatised</h3>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  <h4 className="font-bold text-red-700 text-lg">Public LLMs</h4>
                </div>
                <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Limited control over data security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Significant compliance risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Potential data exposure concerns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  <h4 className="font-bold text-green-700 text-lg">Privatised LLMs</h4>
                </div>
                <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Complete data control and security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Industry-specific domain expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Full regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Public vs Private LLM Comparison */}
            <section id="comparison" className="py-24 px-4 bg-white scroll-mt-20">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <div className="mb-4 animate-fade-in">
                    <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">The Difference</span>
                    <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
                  </div>
      
                  <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
                    Public vs Private LLM
                  </h2>
                  <p className="text-gray-600 text-lg animate-fade-in">
                    Why regulated enterprises need private infrastructure
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 gap-10 *:shadow-sm">
                  {/* Public LLM */}
                  <div className="bg-white rounded-3xl p-10 border-2 border-gray-200 hover:shadow-xl transition-all duration-500 animate-slide-in-left">
                    <div className="text-center mb-8">
                      <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <MdClose className="w-8 h-8 text-gray-500" />
                      </div>
                      <h3 className="text-3xl font-black text-gray-700 mb-2">Public LLM</h3>
                      <p className="text-sm text-gray-500 font-medium">Shared Infrastructure (e.g., ChatGPT, Claude)</p>
                    </div>
                    
                    <div className="space-y-4">
                      {publicLLMIssues.map((issue, i) => (
                        <div 
                          key={i} 
                          className="flex items-start space-x-4 p-4 rounded-xl bg-red-50 animate-fade-in-up"
                          style={{animationDelay: `${i * 0.1}s`}}
                        >
                          <div className="bg-red-100 rounded-full p-2 mt-0.5">
                            <MdClose className="w-5 h-5 text-red-600" />
                          </div>
                          <span className="text-gray-700 font-medium leading-relaxed">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  {/* Private LLM */}
                  <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-10 text-white overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-in-right">
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute w-64 h-64 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
                    </div>
      
                    <div className="absolute top-6 right-6 z-20">
                      <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        RECOMMENDED
                      </span>
                    </div>
                    
                    <div className="text-center mb-8 relative z-10">
                      <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MdCheck className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-black mb-2">Private LLM/SLM</h3>
                      <p className="text-sm text-blue-200 font-medium">Dedicated to Your Organization</p>
                    </div>
                    
                    <div className="space-y-4 relative z-10">
                      {privatisedLLMBenefits.map((benefit, i) => (
                        <div 
                          key={i} 
                          className="flex items-start space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all animate-fade-in-up"
                          style={{animationDelay: `${i * 0.1}s`}}
                        >
                          <div className="bg-green-500 rounded-full p-2 mt-0.5 shadow-md">
                            <MdCheck className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-medium leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
      
                {/* <div className="text-center mt-12">
                  <button 
                    onClick={() => scrollToSection('benefits')}
                    className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
                  >
                    Explore Key Benefits
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div> */}
              </div>
            </section>

 {/* How We Deploy Section - Updated timeline */}
      <section id="process" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Process</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              How We Deploy Private LLMs
            </h2>
            <p className="text-gray-600 text-lg">
              Our proven process for delivering secure AI solutions in 90 days
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10 *:shadow-sm">
            {developmentProcess.map((step, i) => (
              <div 
                key={i} 
                className="relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up border-t-4 border-orange-500"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="absolute -top-6 left-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {step.step}
                </div>
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-500 p-10 rounded-r-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <MdTrendingUp className="w-8 h-8 text-orange-500" />
              Fast Time to Value
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-900 mb-2">90-Day Deployment</h4>
                <p className="text-gray-700">
                  From initial consultation to production deployment—dramatically faster than traditional enterprise AI implementations. Your platform is operational in three months.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Custom-Configured for You</h4>
                <p className="text-gray-700">
                  Every deployment is configured with your specific data, workflows, and compliance requirements—a true AI operating system for your organization.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </section>

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
      {/* Case Studies Section */}
      {/* <section id="case-studies" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Proven Results</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-6 mb-4">
              Real-World Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Industry-specific case studies demonstrating measurable results for enterprise leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "Banking & Finance",
                company: "Global Investment Bank",
                challenge: "Regulatory compliance for AI-driven trading analysis",
                solution: "Private LLM with real-time risk assessment",
                results: ["40% faster compliance reviews", "Zero data breaches", "15% cost reduction"],
                icon: Building2,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                industry: "Healthcare",
                company: "Regional Hospital Network",
                challenge: "Patient data privacy in diagnostic AI",
                solution: "HIPAA-compliant private AI deployment",
                results: ["30% faster diagnoses", "100% HIPAA compliance", "Improved patient outcomes"],
                icon: Cpu,
                gradient: "from-orange-500 to-orange-600"
              },
              {
                industry: "Government",
                company: "Federal Agency",
                challenge: "Secure document processing at scale",
                solution: "Air-gapped AI system with custom training",
                results: ["60% efficiency gain", "Enhanced security", "Cost savings of $2M/year"],
                icon: Globe,
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((study, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border border-gray-100 animate-fade-in-up group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`w-12 h-12 bg-gradient-to-br ${study.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <study.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">{study.industry}</span>
                  <h3 className="text-xl font-bold text-blue-900 mt-2 mb-3">{study.company}</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all text-lg"
            >
              See how we can help your organization
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section> */}

      {/* Developing Private AI - Timeline Style */}
     

      {/* Services Grid - Reorganized */}
    


    

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 scroll-mt-20">
       

          {/* CTA Section */}
          <div id="contact" className="scroll-mt-20 relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white p-12 md:p-16 rounded-3xl text-center overflow-hidden shadow-2xl animate-fade-in-up">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-4">Build Secure AI Inside Your Environment</h3>
              <p className="text-blue-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
               Contact us to discuss your secure AI implementation strategy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 flex items-center gap-3 mx-auto">
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="border-2 border-white/50 backdrop-blur-sm hover:bg-white hover:text-blue-900 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                >
                  Learn More
                </button>
              </div>

              <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <p className="text-sm text-blue-100 font-medium">
                  <CheckCircle className="w-4 h-4 inline mr-2 text-orange-400" />
                  Risk-Free Initial Assessment • No Commitment Required
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* Footer Component */}

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