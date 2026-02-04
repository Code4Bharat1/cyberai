'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MdBusiness,
  MdLocationOn,
  MdWorkspacePremium,
  MdCloud,
  MdTrendingUp,
  MdLightbulb,
  MdSecurity,
  MdVerifiedUser
} from 'react-icons/md';
import { 
  FaArrowRight, 
  FaLinkedin, 
  FaGraduationCap,
  FaGlobe,
  FaShieldAlt,
  FaBrain,
  FaRocket,
  FaQuoteLeft
} from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function LeadershipPage() {
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

  const coreExpertise = [
    { skill: "AI Product Development", icon: FaBrain },
    { skill: "AI Governance & Risk", icon: MdLightbulb },
    { skill: "Cybersecurity Architecture", icon: FaShieldAlt },
    { skill: "Cloud Security", icon: MdCloud },
    { skill: "Data Protection & Privacy", icon: MdSecurity },
    { skill: "Regulatory Compliance", icon: MdVerifiedUser },
    { skill: "DevSecOps", icon: MdTrendingUp },
    { skill: "Enterprise Security Strategy", icon: MdBusiness }
  ];

  const globalImpact = [
    {
      metric: "20+",
      label: "Years Experience",
      icon: FaRocket
    },
    {
      metric: "6",
      label: "Global Regions",
      icon: FaGlobe
    },
    {
      metric: "100+",
      label: "Enterprise Projects",
      icon: MdBusiness
    },
    {
      metric: "140+",
      label: "Countries Served",
      icon: FaGlobe
    }
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
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Expert Leadership
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Leadership</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-10 animate-fade-in font-light leading-relaxed">
            Experienced AI and cybersecurity leadership with global regulatory expertise
          </p>

          <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
            {globalImpact.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-3xl font-black text-orange-400 mb-1">{item.metric}</div>
                <div className="text-xs text-blue-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <FaShieldAlt className="absolute w-12 h-12 text-blue-400/20 animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <FaBrain className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{ top: '60%', right: '15%', animationDelay: '1s' }} />
          <MdCloud className="absolute w-14 h-14 text-blue-300/20 animate-float" style={{ bottom: '20%', left: '20%', animationDelay: '2s' }} />
        </div>
      </section>

      {/* Vision & Mission Statement */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-12 border-2 border-blue-200 shadow-xl">
            <FaQuoteLeft className="w-12 h-12 text-blue-400 mb-6" />
            <blockquote className="text-2xl md:text-3xl font-bold text-blue-900 leading-relaxed mb-6">
              "Bridging the trust gap in enterprise AI by putting data sovereignty and governance at the core of innovation."
            </blockquote>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded on the principle that enterprises should not have to choose between AI innovation and data control, 
              cyberai was built to solve the fundamental challenge facing regulated industries: how to leverage cutting-edge 
              AI while maintaining complete sovereignty over sensitive data.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="profile" className="py-24 px-4 scroll-mt-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Left Column - Profile Card */}
            <div className="md:col-span-2 animate-slide-in-left">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden sticky top-8 border-2 border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="relative bg-gray-200 h-96 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10"></div>
                  <img
                    src="/dr.jpg"
                    alt="Dr. Davar Dattawala"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-black text-blue-900 mb-2">Dr. Davar Dattawala</h2>
                  <p className="text-orange-500 font-bold mb-4 text-lg">Founder & Chief Technology Officer</p>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MdLocationOn className="w-5 h-5 mr-2 text-orange-500" />
                    <span className="font-medium">London, United Kingdom</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaGraduationCap className="w-5 h-5 text-blue-500" />
                      <span className="font-medium">Doctorate in Cloud Security</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaGlobe className="w-5 h-5 text-green-500" />
                      <span className="font-medium">6 Global Regions</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaShieldAlt className="w-5 h-5 text-orange-500" />
                      <span className="font-medium">CISSP, CISM, CEH</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <Link
                      href="https://www.linkedin.com/company/cyberai-technologies-ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-700 cursor-pointer group"
                    >
                      <FaLinkedin className="w-6 h-6" />
                      <span className="font-semibold group-hover:underline">
                        Connect on LinkedIn
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:col-span-3 space-y-12 animate-slide-in-right">
              {/* About Section */}
              <div>
                <div className="inline-block mb-4">
                  <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Background</span>
                  <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 leading-tight">
                  About Dr. Dattawala
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Dr. Davar Dattawala brings over 20 years of global cybersecurity and AI leadership experience 
                    across the UK, Americas, Middle East, and Southeast Asia. His career has focused on securing 
                    complex enterprise environments in banking, telecommunications, and government sectors.
                  </p>
                  <p>
                    With a Doctorate in Cloud Security and certifications including CISSP, CISM, and CEH, he has 
                    led security transformations for organizations including KPMG, HSBC, JP Morgan Chase, and VFS 
                    Global, protecting critical infrastructure across 140+ countries.
                  </p>
                  <p>
                    Recognizing the fundamental trust gap in enterprise AI adoption, Dr. Dattawala founded cyberai 
                    to enable organizations to leverage AI capabilities while maintaining complete data sovereignty 
                    and regulatory compliance.
                  </p>
                </div>
              </div>

              {/* Core Expertise */}
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-6">Core Expertise</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {coreExpertise.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-5 py-4 rounded-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <item.icon className="w-5 h-5 text-blue-600" />
                      <span className="font-bold">{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why cyberai Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Mission</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Why cyberai Exists
            </h3>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Born from decades of experience securing the world's most regulated industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-10 border-2 border-blue-200">
              <MdLightbulb className="w-16 h-16 text-blue-600 mb-6" />
              <h4 className="text-2xl font-black text-blue-900 mb-4">The Challenge We Saw</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                After 20 years of securing enterprise environments, one pattern became clear: organizations were being 
                forced to choose between AI innovation and data sovereignty.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Existing AI solutions required sending sensitive data to external platforms, creating unacceptable risks 
                for regulated industries. This fundamental trust gap was preventing enterprises from leveraging AI's 
                transformative potential.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-10 border-2 border-orange-200">
              <FaRocket className="w-16 h-16 text-orange-600 mb-6" />
              <h4 className="text-2xl font-black text-blue-900 mb-4">Our Solution</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                cyberai was founded to solve this exact problem: enable enterprises to build and deploy AI models entirely 
                within their own infrastructure, maintaining complete data sovereignty while accessing cutting-edge capabilities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We don't just understand regulatory compliance—we architect it into the foundation. Every solution is built 
                with governance frameworks that meet the strictest global standards including GDPR, HIPAA, ISO 42001, and the EU AI Act.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect CTA Section */}
      <section id="cta" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white p-16 rounded-3xl text-center shadow-2xl relative overflow-hidden animate-fade-in-up">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-8 border border-orange-500/30">
                <MdWorkspacePremium className="w-6 h-6 text-orange-300" />
                <span className="text-orange-300 font-semibold">Expert Guidance</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Connect with Our Leadership
              </h2>
              <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Discuss your AI and data sovereignty needs directly with our experts. Get personalized guidance 
                backed by 20+ years of global experience.
              </p>
              <Link href="/contact">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                  Schedule Consultation
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