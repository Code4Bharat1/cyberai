"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users, Brain, Code, Target, Zap, Database, UserCheck, Building2, Cpu, Globe, CheckCircle, ArrowRight, TrendingUp, Clock, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';


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
            Enterprise-grade AI and cybersecurity solutions designed specifically for heavily regulated industries. From idea to value in 90 days with exceptional ROI.
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
      <section className="py-12 px-4 bg-gray-50 border-y border-gray-200">
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
      </section>

      {/* Enterprise AI Section */}
      <section id="about" className="py-20 px-4 relative scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">About CyberAI</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
              Enterprise-Grade AI, Built for Security
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              CyberAI Technologies positions itself as an enterprise  platform that puts Industry AI on your desktop and mobile. From idea to value in 90 days with exceptional ROI.
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

            <button
              onClick={() => scrollToSection('solutions')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all"
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </button>
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
      <section id="solutions" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 scroll-mt-20">
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
      </section>

      {/* Why Privatised LLMs */}
      <section id="privatised-llms" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Solution</span>
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

      {/* Case Studies Section */}
      <section id="case-studies" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 scroll-mt-20">
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
      </section>

      {/* Developing Private AI - Timeline Style */}
      <section id="process" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Process</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
            Developing Your Private AI
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            A proven 4-step process to deploy enterprise-grade AI in 90 days
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Database, title: "Foundation Model", desc: "Choose the best pre-built open-source model tailored to your needs", step: "01" },
              { icon: Target, title: "Fine-Tuning", desc: "Trained on your security protocols and industry-specific norms", step: "02" },
              { icon: Lock, title: "Deployment", desc: "Secure testing and validation within your controlled environment", step: "03" },
              { icon: Zap, title: "AI Agents", desc: "Targeted workflows automating tasks with 10x productivity gains", step: "04" }
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white p-8 rounded-2xl text-left border-t-4 border-orange-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up shadow-lg"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute -top-6 left-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {item.step}
                </div>
                <item.icon className="w-12 h-12 text-orange-500 mb-6 mt-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-blue-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('services')}
            className="group mt-12 flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto text-lg"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Services Grid - Reorganized */}
      <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Services</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
            End-to-End Solutions
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Comprehensive services covering strategy, implementation, and security
          </p>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-500/20 hover:border-blue-500 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-blue-900 text-xl mb-4">Strategy & Planning</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">AI Strategy & Adoption Roadmap</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">AI Governance Frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Training & Change Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-orange-500/20 hover:border-orange-500 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-blue-900 text-xl mb-4">Development</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom Model Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Data Engineering & Pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Agentic AI Workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-purple-500/20 hover:border-purple-500 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-blue-900 text-xl mb-4">Security & Testing</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">AI Red Teaming</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Advanced Simulation & Testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Privacy & Adversarial Testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Who We Serve</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 text-center">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
            Delivering transformative AI solutions for heavily regulated industries where privacy and compliance are paramount.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: Building2, 
                title: "Banking & Finance", 
                gradient: "from-blue-500 to-blue-600",
                features: ["Trading analysis", "Risk assessment", "Fraud detection", "Regulatory compliance"]
              },
              { 
                icon: Cpu, 
                title: "Healthcare", 
                gradient: "from-orange-500 to-orange-600",
                features: ["Diagnostic support", "Patient data privacy", "Clinical workflows", "HIPAA compliance"]
              },
              { 
                icon: Globe, 
                title: "Government & Justice", 
                gradient: "from-purple-500 to-purple-600",
                features: ["Document processing", "Security clearance", "Air-gapped systems", "Classified data handling"]
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl text-center border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 text-2xl mb-4">{item.title}</h3>
                <ul className="text-left space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div id="contact" className="scroll-mt-20 relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white p-12 md:p-16 rounded-3xl text-center overflow-hidden shadow-2xl animate-fade-in-up">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-4">Ready to Secure Your AI?</h3>
              <p className="text-blue-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Get started with a comprehensive AI Readiness Assessment tailored to your industry.
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
        </div>
      </section>

      {/* Footer Component */}
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