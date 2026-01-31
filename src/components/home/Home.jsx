"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users, Brain, Code, Target, Zap, Database, UserCheck, Building2, Cpu, Globe, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
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
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
     

      {/* Hero Section with Parallax */}
      <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-32 px-4 overflow-hidden pt-40">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Enterprise AI & Cybersecurity
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            Making <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Cybersecurity</span> & <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">AI</span>
            <br />Simple and Affordable
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
            Enterprise-grade AI and cybersecurity solutions designed specifically for heavily regulated industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-300/50 backdrop-blur-sm hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <Shield className="absolute w-12 h-12 text-blue-500/20 animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <Lock className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{ top: '60%', right: '15%', animationDelay: '1s' }} />
          <Brain className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{ bottom: '20%', left: '20%', animationDelay: '2s' }} />
        </div>

        {/* Scroll Down Indicator */}
        
      </section>

      {/* Enterprise AI Section */}
      <section id="about" className="py-24 px-4 relative scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">About CyberAI</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
              Enterprise-Grade AI, Built for Security
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              CyberAI Technologies positions itself as an enterprise SaaS platform that puts Industry AI on your desktop and mobile. From idea to value in 90 days with exceptional ROI.
            </p>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-500 p-8 rounded-r-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-3 text-xl">The Challenge with Public AI</h3>
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
              alt="AI Circuit Board"
              className="rounded-2xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent rounded-2xl z-20"></div>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section id="solutions" className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 animate-fade-in">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Focus</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
            Strategic Focus Areas
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto animate-fade-in">
            Bridging the gap between cutting-edge AI capabilities and the skills needed across all target markets.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Privatised LLMs", desc: "Enterprise-class secure AI for highly sensitive data on your own infrastructure", color: "from-blue-500 to-blue-600", link: 'privatised-llms' },
              { icon: Lock, title: "Secure DevAI", desc: "Streamlined development with best-in-class industrial-grade security measures", color: "from-orange-500 to-orange-600", link: 'process' },
              { icon: Eye, title: "AI Governance", desc: "Clear accountability frameworks ensuring transparency and regulatory compliance", color: "from-purple-500 to-purple-600", link: 'services' },
              { icon: Users, title: "AI Red Teaming", desc: "Expert-led testing, vulnerability analysis, and comprehensive threat modeling", color: "from-green-500 to-green-600", link: 'services' }
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

      {/* Why Privatised LLMs */}
      <section id="privatised-llms" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Solution</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 leading-tight">
              Why Privatised LLMs?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Deploy secure, industry-specific AI agents that operate entirely within your controlled environment, ensuring maximum privacy and compliance.
            </p>

            <div className="space-y-4">
              {[
                { title: "Data Privacy", desc: "Your data never leaves your secure environment" },
                { title: "Regulatory Compliance", desc: "Meets GDPR, HIPAA, and sector-specific requirements" },
                { title: "Industry Accuracy", desc: "Fine-tuned on your proprietary data and workflows" },
                { title: "Full Control", desc: "Complete ownership, hosting, and customization" }
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

            <button
              onClick={() => scrollToSection('process')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all"
            >
              See Our Process
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-10 rounded-3xl animate-slide-in-right shadow-xl">
            <h3 className="text-3xl font-black text-blue-900 mb-8">Public vs Privatised</h3>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  <h4 className="font-bold text-red-700 text-xl">Public LLMs</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Limited control over data security with significant compliance risks around sensitive information handling.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  <h4 className="font-bold text-green-700 text-xl">Privatised LLMs</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Secure deployment with complete data control and industry-specific domain expertise built in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developing Private AI - Timeline Style */}
      <section id="process" className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Process</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-20">
            Developing Your Private AI
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Database, title: "Foundation Model", desc: "Choose the best pre-built open-source model", step: "01" },
              { icon: Target, title: "Fine-Tuning", desc: "Trained on your security and industry norms", step: "02" },
              { icon: Lock, title: "Deployment", desc: "Secure testing within your environment", step: "03" },
              { icon: Zap, title: "AI Agents", desc: "Targeted workflows scaling 10x productivity", step: "04" }
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

          <button
            onClick={() => scrollToSection('services')}
            className="group mt-12 flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Services Grid - Masonry Style */}
      <section id="services" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Services</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-20">
            End-to-End Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "AI Strategy & Adoption", desc: "Complete AI roadmap and business case development", icon: Target },
              { title: "AI Governance", desc: "Ethics frameworks and regulatory compliance", icon: Shield },
              { title: "Data Engineering", desc: "Clean datasets and real-time AI pipelines", icon: Database },
              { title: "Custom Model Development", desc: "Industry-tailored LLMs for your use cases", icon: Code },
              { title: "Agentic AI", desc: "Self-improving intelligent workflows", icon: Brain },
              { title: "AI Red Teaming", desc: "Proactive testing and bias threat identification", icon: Users },
              { title: "Advanced Simulation", desc: "Stress testing in reserved environments", icon: Cpu },
              { title: "Privacy Testing", desc: "Adversarial testing for model security", icon: Lock },
              { title: "Training & Change", desc: "AI-driven organizational transformation", icon: UserCheck }
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

          <button
            onClick={() => scrollToSection('team')}
            className="group mt-12 flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
          >
            Meet Our Team
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Team</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 animate-fade-in-up hover:shadow-3xl transition-shadow duration-500">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Dr. Devar Dattawala"
                    className="rounded-2xl w-full shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-4xl font-black text-blue-900 mb-2">Dr. Devar Dattawala</h3>
                <p className="text-orange-500 font-bold mb-6 text-lg">CEO, CyberAI Technologies</p>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Dr. Devar brings 25+ years of global cybersecurity leadership, with extensive experience across the UK, USA, Australia, and the Middle East.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  His expertise spans AI, Threat Intelligence, Cybersecurity Governance, Digital Security, and CISO leadership. A recognized thought leader with global impact.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('industries')}
            className="group mt-12 flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
          >
            See Industries We Serve
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 text-center">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-lg mb-16 text-center max-w-3xl mx-auto">
            Delivering transformative AI solutions for heavily regulated industries where privacy and compliance are paramount.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Building2, title: "Banking & Finance", gradient: "from-blue-500 to-blue-600" },
              { icon: Cpu, title: "Healthcare", gradient: "from-orange-500 to-orange-600" },
              { icon: Globe, title: "Government & Justice", gradient: "from-purple-500 to-purple-600" }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl text-center border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${item.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 text-2xl">{item.title}</h3>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div id="contact" className="scroll-mt-20 relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white p-16 rounded-3xl text-center overflow-hidden shadow-2xl animate-fade-in-up">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black mb-6">Ready to Secure Your AI?</h3>
              <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Get started with a comprehensive AI Readiness Assessment tailored to your industry.
              </p>
              <Link href="/contact">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 flex items-center gap-3 mx-auto">
                  Schedule a Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}


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