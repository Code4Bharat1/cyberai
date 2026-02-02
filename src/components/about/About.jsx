"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdSecurity, MdVisibility, MdDescription, MdShield, MdBusiness, MdAccountBalance, MdLayers, MdTrendingUp, MdSpeed } from 'react-icons/md';
import { FaCheck, FaTimes, FaArrowRight, FaGlobe, FaChartLine } from 'react-icons/fa';
import { BiBuildings } from 'react-icons/bi';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function AboutPage() {
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
              Enterprise AI & Cybersecurity
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            About <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">CyberAI</span> Technologies
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
            Built by cybersecurity leaders solving AI's biggest trust gap
          </p>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <MdShield className="absolute w-12 h-12 text-blue-500/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <MdSecurity className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <MdBusiness className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Company Overview Section */}
      <section id="overview" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block">
                <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Who We Are</span>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
                Company Overview
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                CyberAI Technologies Ltd delivers enterprise-grade AI and cybersecurity solutions designed specifically for today's digital landscape. We specialize in building secure environments for Privatised LLMs (Large Language Models), SLMs (Small Language Models), and GenAI technologies.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach is strictly industry-agnostic and vendor-agnostic, allowing us to provide unbiased, best-in-class infrastructure tailored to your specific needs. We pride ourselves on our ability to build robust AI solutions for heavily regulated industries where security and compliance are non-negotiable.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-orange-100/50 px-6 py-3 rounded-xl hover:shadow-lg transition-shadow group">
                  <div className="bg-orange-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <BiBuildings className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-blue-900 text-lg">Enterprise Grade</span>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100/50 px-6 py-3 rounded-xl hover:shadow-lg transition-shadow group">
                  <div className="bg-blue-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <MdSecurity className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-blue-900 text-lg">Security First</span>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('market')}
                className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mt-6"
              >
                Explore Market Opportunity
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                alt="Modern Office with Digital Security"
                className="rounded-3xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent rounded-3xl z-20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-8 hover:scale-110 transition-transform duration-500">
                  <MdShield className="w-20 h-20 text-white drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section - NEW */}
      <section id="market" className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Market Landscape</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              The Global AI Market
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Enterprise AI adoption is accelerating across regulated industries worldwide, creating unprecedented demand for secure, compliant solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Regulatory requirements span banking, healthcare, and government sectors across all major markets
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Proven Technology</h3>
              <p className="text-gray-600">
                Enterprise AI is no longer experimental—it's an established market with clear compliance needs
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MdTrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Growing Demand</h3>
              <p className="text-gray-600">
                Increasing recognition that public AI models cannot meet enterprise security and privacy requirements
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-l-4 border-blue-500 p-10 rounded-r-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Why This Matters</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Organizations investing in CyberAI solutions aren't gambling on emerging technology—they're adopting proven infrastructure that addresses real compliance gaps in an established market.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The total addressable market for secure, private AI in regulated industries represents a significant opportunity as enterprises recognize the limitations of public AI models for sensitive data.
            </p>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('risks')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
            >
              Learn About AI Risks We Mitigate
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* AI Risks Section - NEW */}
      <section id="risks" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Risk Management</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              AI Risks Beyond the Obvious
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              While hallucinations and bias dominate headlines, enterprise AI faces deeper challenges. Drawing from the MIT AI Risk Repository, we address the full spectrum of AI risks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Common Concerns */}
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-700 mb-6">Common AI Risks</h3>
              <div className="space-y-4">
                {[
                  "Hallucinations and factual inaccuracies",
                  "Bias in training data and outputs",
                  "Prompt injection attacks",
                  "Data leakage through APIs"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-white/70 p-4 rounded-xl">
                    <FaTimes className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deeper Risks */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-700 mb-6">Enterprise-Critical Risks</h3>
              <div className="space-y-4">
                {[
                  "Model weight theft and IP loss",
                  "Adversarial attacks on production systems",
                  "Regulatory non-compliance exposure",
                  "Supply chain vulnerabilities"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-white/70 p-4 rounded-xl">
                    <MdShield className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How We Mitigate */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-8 text-center">How CyberAI Private Models Mitigate These Risks</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-full p-3 mt-1 flex-shrink-0">
                    <FaCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Built Inside Your Environment</h4>
                    <p className="text-blue-200">
                      Models deployed on-premises or in your private cloud—never exposed to public APIs or third-party access
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-full p-3 mt-1 flex-shrink-0">
                    <FaCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Trained Only on Your Data</h4>
                    <p className="text-blue-200">
                      Limited parameter models (1B parameters) trained exclusively on your domain data—dramatically reducing hallucinations
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-full p-3 mt-1 flex-shrink-0">
                    <FaCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Faster, More Accurate Responses</h4>
                    <p className="text-blue-200">
                      Focused models deliver higher accuracy for your specific use cases versus broad-purpose public LLMs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-full p-3 mt-1 flex-shrink-0">
                    <FaCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Complete Auditability</h4>
                    <p className="text-blue-200">
                      Full transparency into model behavior, training data, and decision-making processes for compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white/10 rounded-xl border border-white/20">
              <p className="text-blue-100 text-center text-lg">
                <span className="font-bold text-white">Key Advantage:</span> Our 1-billion parameter models trained on your specific data vastly outperform ChatGPT's broader models for your use cases—with significantly reduced risk of hallucination and bias.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('journey')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
            >
              See Our Customer Journey
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Customer Journey Section - NEW */}
      <section id="journey" className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">How We Work</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Quick AI Model Development<br/>For Your Business
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From initial consultation to production deployment, our streamlined process delivers custom AI solutions in 4-12 weeks.
            </p>
          </div>

          {/* Visual Journey Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 z-0"></div>
            
            <div className="grid md:grid-cols-6 gap-6 relative z-10">
              {[
                {
                  phase: "Phase 1",
                  title: "Discovery",
                  desc: "Business case & requirements",
                  icon: MdDescription,
                  time: "Week 1"
                },
                {
                  phase: "Phase 2",
                  title: "Development",
                  desc: "Model training & fine-tuning",
                  icon: MdLayers,
                  time: "4-12 weeks"
                },
                {
                  phase: "Phase 3",
                  title: "Deployment",
                  desc: "Install in your environment",
                  icon: MdShield,
                  time: "Week 1"
                },
                {
                  phase: "Phase 4",
                  title: "Testing",
                  desc: "Validation within your infrastructure",
                  icon: MdVisibility,
                  time: "2-4 weeks"
                },
                {
                  phase: "Phase 5",
                  title: "Go-Live",
                  desc: "Production deployment",
                  icon: MdSpeed,
                  time: "Week 1"
                },
                {
                  phase: "Phase 6",
                  title: "Support",
                  desc: "Ongoing maintenance & updates",
                  icon: MdSecurity,
                  time: "Continuous"
                }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {i + 1}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="text-orange-500 font-bold text-xs uppercase mb-2">{item.phase}</div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                    <div className="text-orange-600 font-semibold text-xs">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-500 p-10 rounded-r-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <MdSpeed className="w-8 h-8 text-orange-500" />
              Speed & Customization Advantage
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Fast Time to Value</h4>
                <p className="text-gray-700">
                  Most projects move from concept to production in 4-12 weeks—dramatically faster than traditional enterprise software implementations.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Built for Your Business</h4>
                <p className="text-gray-700">
                  Every model is custom-trained on your data, workflows, and requirements—not a generic solution adapted to your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('approach')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
            >
              Learn About Our Approach
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 animate-fade-in">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Philosophy</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
            Our Approach
          </h2>
          
          <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto animate-fade-in">
            We combine cutting-edge agentic AI technologies with globally recognised standards and applicable regulatory landscapes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 *:shadow-sm">
            {[
              {
                icon: MdSecurity,
                title: "Security",
                desc: "Security is at the core of every architecture we build. We ensure your AI models are protected against adversarial attacks, prompt injection, and unauthorized access from day one.",
                gradient: "from-orange-500 to-orange-600"
              },
              {
                icon: MdVisibility,
                title: "Privacy",
                desc: "Data sovereignty is paramount. We design solutions where your data never leaves your environment, ensuring complete privacy for sensitive enterprise information.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: MdDescription,
                title: "Compliance",
                desc: "We navigate complex regulatory landscapes to ensure your AI deployments meet all industry standards, from GDPR to sector-specific financial and healthcare regulations.",
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left border border-gray-100 animate-fade-in-up"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <item.icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scrollToSection('problem-solution')}
            className="group mt-12 flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
          >
            See How We Solve Problems
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section id="problem-solution" className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">The Challenge</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Problem vs Solution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* The Problem */}
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-slide-in-left">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-500 rounded-full p-4 shadow-lg">
                  <FaTimes className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-red-700">The Problem</h3>
              </div>
              
              <p className="text-gray-800 mb-8 font-bold text-xl leading-relaxed">
                Public AI models are not secure or compliant for sensitive data.
              </p>
              
              <div className="space-y-5">
                {[
                  "High risk of data leakage via public APIs",
                  "Lack of control over model behavior",
                  "Regulatory non-compliance for confidential data"
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start space-x-4 bg-white/70 p-4 rounded-xl animate-fade-in-up"
                    style={{animationDelay: `${i * 0.1}s`}}
                  >
                    <div className="bg-red-100 rounded-full p-2 mt-0.5">
                      <FaTimes className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-slide-in-right">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-blue-500 rounded-full p-4 shadow-lg">
                  <FaCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-blue-700">Our Solution</h3>
              </div>
              
              <p className="text-gray-800 mb-8 font-bold text-xl leading-relaxed">
                Privatised LLMs and SLMs running safely inside your environment.
              </p>
              
              <div className="space-y-5">
                {[
                  "Deployed inside private cloud or on-prem",
                  "Full ownership of data and model weights",
                  "Bespoke development for specific use cases"
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start space-x-4 bg-white/70 p-4 rounded-xl animate-fade-in-up"
                    style={{animationDelay: `${i * 0.1}s`}}
                  >
                    <div className="bg-blue-100 rounded-full p-2 mt-0.5">
                      <FaCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('why-cyberai')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
            >
              Discover Why Choose CyberAI
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why CyberAI Technologies Section */}
      <section id="why-cyberai" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-4 overflow-hidden scroll-mt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-300 font-bold text-sm tracking-widest uppercase">Our Advantage</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in-up">
              Why CyberAI Technologies?
            </h2>
            <p className="text-blue-200 text-xl font-light animate-fade-in">
              We bridge the gap between innovation and security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: MdShield,
                title: "Security-First AI",
                desc: "Engineering that puts defense and resilience at the forefront of development.",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: MdBusiness,
                title: "Governance Experts",
                desc: "Deep expertise in AI governance, risk management, and ethical frameworks.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: MdAccountBalance,
                title: "Regulated Industries",
                desc: "Specialized in banking, healthcare, and sectors with strict compliance needs.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: MdLayers,
                title: "Vendor Agnostic",
                desc: "Flexible delivery model that adapts to your existing tech stack.",
                color: "from-green-500 to-green-600"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="text-center group animate-fade-in-up"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className={`bg-gradient-to-br ${item.color} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-2xl`}>
                  <item.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => scrollToSection('cta')}
              className="group flex items-center gap-2 text-orange-300 font-semibold hover:gap-4 transition-all mx-auto text-lg"
            >
              Get Started With Us
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white p-16 rounded-3xl text-center shadow-2xl relative overflow-hidden animate-fade-in-up">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Secure Your AI Future?
              </h2>
              <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Partner with CyberAI for safe, compliant, and powerful AI solutions tailored to your industry.
              </p>
              <Link href="/contact">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                  Get In Touch
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
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