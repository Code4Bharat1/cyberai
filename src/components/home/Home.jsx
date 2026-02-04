"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users, Brain, Code, Target, Zap, Database, UserCheck, Building2, Cpu, Globe, CheckCircle, ArrowRight, Menu, X, TrendingUp, Clock, DollarSign, Heart, Scale, BadgeCheck, FileText, Briefcase, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CyberAILandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden mt-20">
      {/* Hero Section - Updated positioning */}
      <section id="hero" className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white py-24 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Private AI Platform for Regulated Industries
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            Your AI Operating System for <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Secure Deployment</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
            Deploy industry-specific AI agents on your infrastructure. Private LLM and SLM solutions built for healthcare, banking, finance, and government sectors where compliance isn't optional.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-black text-orange-400 mb-2">90</div>
              <div className="text-sm text-blue-100 font-medium">Days to Value</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-black text-orange-400 mb-2">10x</div>
              <div className="text-sm text-blue-100 font-medium">Productivity Gain</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-black text-orange-400 mb-2">100%</div>
              <div className="text-sm text-blue-100 font-medium">Compliance Ready</div>
            </div>
          </div>

          {/* Compliance Badges - ISO 42001 & EU AI Act */}
          <div className="flex justify-center gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-semibold">ISO 42001 Aligned</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-semibold">EU AI Act Ready</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-semibold">GDPR Compliant</span>
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

      {/* Global AI Context - Why It Matters */}
      <section id="context" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">The AI Revolution</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mt-6 mb-6">
              Why Private AI Matters Now
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The global AI market is transforming industries at unprecedented speed. But for regulated sectors, public AI models pose unacceptable risks around data privacy, compliance, and control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-lg">
                <h3 className="font-bold text-red-700 text-xl mb-2">The Public AI Challenge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Sensitive data exposure to third-party cloud services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Regulatory compliance violations (GDPR, HIPAA, financial regulations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Limited control over model behavior and outputs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Generic models without industry-specific expertise</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-lg">
                <h3 className="font-bold text-green-700 text-xl mb-2">The CyberAI Solution</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Deploy on your infrastructure - complete data sovereignty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Built-in governance for regulatory compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom training on your industry norms and workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>AI operating system that scales with your needs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-2xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Global AI Network"
                className="rounded-2xl shadow-2xl w-full relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About CyberAI - Consolidated with Why CyberAI */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">About CyberAI</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
              Your AI Platform, Your Infrastructure
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              CyberAI is an AI operating system that deploys on your infrastructure, bringing industry-specific intelligence to your desktop and mobile devices. We're not a traditional SaaS platform - we're your AI layer, customized and deployed multiple times to meet your exact requirements.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              From concept to production value in 90 days, our platform delivers exceptional ROI for heavily regulated industries where compliance and data privacy are non-negotiable.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-l-4 border-blue-600 p-8 rounded-r-xl shadow-lg">
              <h3 className="font-bold text-blue-900 mb-3 text-xl">Why Choose CyberAI?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Complete Control:</strong> Your data never leaves your environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Industry Expertise:</strong> Fine-tuned on sector-specific knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Governance Layer:</strong> Built-in compliance for regulated industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Rapid Deployment:</strong> Production-ready in 90 days</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToSection('industries')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all"
            >
              See Industries We Serve
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-2xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop"
              alt="AI Infrastructure"
              className="rounded-2xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent rounded-2xl z-20"></div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Six Sector Showcase */}
      <section id="industries" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Regulated Industries</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mt-6 mb-6">
              Built for Compliance-Critical Sectors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Delivering private AI solutions where data sovereignty, regulatory compliance, and security governance are paramount.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Banking & Finance",
                desc: "Secure AI for trading analysis, risk assessment, and regulatory reporting with complete financial compliance.",
                features: ["Transaction monitoring", "Risk modeling", "Regulatory reporting", "Fraud detection"],
                gradient: "from-blue-500 to-blue-600",
                compliance: "FCA, PRA, MiFID II"
              },
              {
                icon: Heart,
                title: "Healthcare",
                desc: "HIPAA-compliant AI for diagnostics, patient care, and clinical decision support with full data privacy.",
                features: ["Clinical diagnostics", "Patient data analysis", "Treatment planning", "Medical research"],
                gradient: "from-orange-500 to-orange-600",
                compliance: "HIPAA, GDPR, NHS DSP Toolkit"
              },
              {
                icon: Scale,
                title: "Legal Services",
                desc: "Confidential AI for case research, contract analysis, and legal document processing with attorney-client privilege.",
                features: ["Document review", "Case law research", "Contract analysis", "Compliance checks"],
                gradient: "from-purple-500 to-purple-600",
                compliance: "SRA, Law Society Standards"
              },
              {
                icon: Globe,
                title: "Government & Public Sector",
                desc: "Air-gapped AI systems for secure document processing, policy analysis, and citizen services.",
                features: ["Policy analysis", "Document processing", "Public service automation", "Security clearance workflows"],
                gradient: "from-green-500 to-green-600",
                compliance: "Government Security Classification"
              },
              {
                icon: FileText,
                title: "Insurance",
                desc: "Compliant AI for underwriting, claims processing, and risk assessment with regulatory transparency.",
                features: ["Claims automation", "Underwriting support", "Risk assessment", "Fraud prevention"],
                gradient: "from-cyan-500 to-cyan-600",
                compliance: "FCA, Solvency II"
              },
              {
                icon: Briefcase,
                title: "Professional Services",
                desc: "Secure AI for client data analysis, advisory services, and compliance management across sectors.",
                features: ["Client analytics", "Advisory automation", "Audit support", "Compliance monitoring"],
                gradient: "from-indigo-500 to-indigo-600",
                compliance: "Sector-Specific Standards"
              }
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border border-gray-100 group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.desc}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-gray-900 mb-3 uppercase tracking-wide">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                    Compliance: {industry.compliance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section id="solutions" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 animate-fade-in">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Focus Areas</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
            How We Deploy Private AI
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto animate-fade-in">
            A comprehensive AI platform with governance built-in for regulated industries.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: Shield, 
                title: "Private LLMs & SLMs", 
                desc: "Enterprise-class secure AI for highly sensitive data deployed on your own infrastructure with complete control",
                color: "from-blue-500 to-blue-600",
                link: 'privatised-llms'
              },
              { 
                icon: Lock, 
                title: "AI Governance Layer", 
                desc: "Built-in compliance frameworks ensuring transparency, accountability, and regulatory adherence across all AI operations",
                color: "from-orange-500 to-orange-600",
                link: 'governance'
              },
              { 
                icon: Eye, 
                title: "Secure Development", 
                desc: "Complete IAM solution with streamlined development workflows and industrial-grade security measures",
                color: "from-purple-500 to-purple-600",
                link: 'development'
              }
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => scrollToSection(item.link)}
                className="cursor-pointer group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 mb-3 text-xl">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-orange-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private LLMs Deep Dive */}
      <section id="privatised-llms" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Core Platform</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 leading-tight">
              Private LLMs & SLMs
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Deploy secure, industry-specific AI models that operate entirely within your controlled environment. Your AI operating system, your infrastructure, your rules.
            </p>

            <div className="space-y-4">
              {[
                { title: "Complete Data Sovereignty", desc: "Your data never leaves your secure environment - full compliance with GDPR and sector regulations" },
                { title: "Industry-Specific Training", desc: "Models fine-tuned on your proprietary data, workflows, and sector-specific knowledge" },
                { title: "Flexible Deployment", desc: "Cloud, on-premise, or hybrid infrastructure - we deploy where you need us" },
                { title: "Continuous Improvement", desc: "AI agents that learn from your operations while maintaining security boundaries" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-2 mt-1 group-hover:scale-110 transition-transform shadow-md">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-2xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
              alt="Private AI Infrastructure"
              className="rounded-2xl shadow-2xl w-full relative z-10"
            />
          </div>
        </div>
      </section>

      {/* AI Governance Section */}
      <section id="governance" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 rounded-2xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
              alt="AI Governance"
              className="rounded-2xl shadow-2xl w-full relative z-10"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div>
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Compliance Built-In</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 leading-tight">
              AI Governance Layer
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Comprehensive governance frameworks that ensure your AI operations meet regulatory requirements and ethical standards across all jurisdictions.
            </p>

            <div className="space-y-4">
              {[
                { title: "Regulatory Compliance", desc: "EU AI Act, ISO 42001, GDPR, and sector-specific regulations built into the platform" },
                { title: "Audit Trails", desc: "Complete transparency with detailed logging of all AI decisions and operations" },
                { title: "Risk Management", desc: "Continuous monitoring and assessment of AI system behavior and outputs" },
                { title: "Ethical AI", desc: "Bias detection, fairness testing, and responsible AI practices embedded" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-colors group"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-2 mt-1 group-hover:scale-110 transition-transform shadow-md">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process - Timeline */}
      <section id="development" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Process</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-12">
            From Idea to Value in 90 Days
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: Database, title: "Foundation Selection", desc: "Choose optimal open-source models for your use case", step: "01" },
              { icon: Target, title: "Custom Training", desc: "Fine-tune on your industry norms and proprietary data", step: "02" },
              { icon: Lock, title: "Secure Deployment", desc: "Install and test within your infrastructure", step: "03" },
              { icon: Zap, title: "AI Agents", desc: "Deploy intelligent workflows for 10x productivity", step: "04" }
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white p-8 rounded-2xl text-left border-t-4 border-orange-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute -top-6 left-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {item.step}
                </div>
                <item.icon className="w-14 h-14 text-orange-500 mb-6 mt-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-blue-900 mb-3 text-xl">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Proven Results</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mt-6 mb-4">
              Real-World Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Measurable outcomes from private AI deployments across regulated industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "Banking & Finance",
                company: "Global Investment Bank",
                challenge: "Regulatory compliance for AI-driven trading analysis",
                solution: "Private LLM with real-time risk assessment and compliance monitoring",
                results: ["40% faster compliance reviews", "Zero data breaches", "15% operational cost reduction"],
                icon: Building2,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                industry: "Healthcare",
                company: "Regional Hospital Network",
                challenge: "Patient data privacy in diagnostic AI systems",
                solution: "HIPAA-compliant private AI deployment with clinical decision support",
                results: ["30% faster diagnostic workflows", "100% HIPAA compliance", "Improved patient outcomes"],
                icon: Heart,
                gradient: "from-orange-500 to-orange-600"
              },
              {
                industry: "Government",
                company: "Federal Agency",
                challenge: "Secure document processing at classification levels",
                solution: "Air-gapped AI system with custom security clearance training",
                results: ["60% efficiency improvement", "Enhanced security posture", "£2M annual savings"],
                icon: Globe,
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((study, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border border-gray-100 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`w-12 h-12 bg-gradient-to-br ${study.gradient} rounded-lg flex items-center justify-center mb-6`}>
                  <study.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">{study.industry}</span>
                  <h3 className="text-2xl font-bold text-blue-900 mt-2 mb-3">{study.company}</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900 mb-3">Results</h4>
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
        </div>
      </section>

      {/* Additional Services */}
      <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Additional Capabilities</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-12">
            Comprehensive AI Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "AI Strategy & Adoption", desc: "Complete AI roadmap and business case development", icon: Target },
              { title: "Data Engineering", desc: "Clean datasets and real-time AI pipelines", icon: Database },
              { title: "Custom Model Development", desc: "Industry-tailored models for your use cases", icon: Code },
              { title: "Agentic AI", desc: "Self-improving intelligent workflows", icon: Brain },
              { title: "Advanced Simulation", desc: "Stress testing in secure environments", icon: Cpu },
              { title: "Training & Change Management", desc: "AI-driven organizational transformation", icon: UserCheck }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl border-l-4 border-orange-500 text-left hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <item.icon className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-blue-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/services">
              <button className="group bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center gap-3 mx-auto">
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white p-16 rounded-3xl text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black mb-6">Ready to Deploy Private AI?</h3>
              <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation to discuss your AI requirements and compliance needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 flex items-center gap-3">
                    Schedule Consultation
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
                <a href="https://wa.me/447554898543" target="_blank" rel="noopener noreferrer">
                  <button className="border-2 border-white/50 backdrop-blur-sm hover:bg-white hover:text-blue-900 px-12 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105">
                    WhatsApp Us
                  </button>
                </a>
              </div>
              <p className="text-blue-300 text-sm mt-6">
                Or email us at <a href="mailto:inquiries@cyberaiact.com" className="underline hover:text-white">inquiries@cyberaiact.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

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