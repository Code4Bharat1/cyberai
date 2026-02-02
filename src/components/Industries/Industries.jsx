"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdAccountBalance, 
  MdLocalHospital, 
  MdBusiness, 
  MdSecurity,
  MdLocalShipping,
  MdFactory
} from 'react-icons/md';
import { FaShieldAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function IndustriesPage() {
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
      icon: MdAccountBalance,
      title: "Banking & Financial Services",
      desc: "Deploy private, compliant AI for financial institutions operating under strict regulatory, security and audit requirements, without exposing sensitive customer or transaction data.",
      tags: ["Data Sovereignty", "Regulatory Compliance", "Audit-Ready AI"],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: MdLocalHospital,
      title: "Healthcare & Life Sciences",
      desc: "Enable AI-driven clinical and operational workflows while protecting sensitive health data and aligning with global health data privacy regulations.",
      tags: ["Patient Data Protection", "Governed Access", "Privacy-First AI"],
      gradient: "from-emerald-500 to-emerald-700"
    },
    {
      icon: MdBusiness,
      title: "Government & Public Sector",
      desc: "Support public sector organizations with on-premise or private AI deployments that meet national security, data sovereignty and regulatory accountability requirements.",
      tags: ["National Data Sovereignty", "Policy-Aligned Governance", "Secure AI Deployment"],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: MdSecurity,
      title: "Insurance",
      desc: "Apply secure AI across underwriting, claims processing and compliance workflows while maintaining strict control over regulated personal and financial data.",
      tags: ["Compliance-Driven Workflows", "Risk Assessment", "Data Privacy Controls"],
      gradient: "from-orange-500 to-orange-700"
    },
    {
      icon: MdFactory,
      title: "Oil & Gas",
      desc: "Enable secure and private AI adoption across exploration, operations, asset management and risk analysis environments, where data sensitivity and operational resilience are critical.",
      tags: ["Secure AI for Critical Infrastructure", "Data Privacy & Control", "Risk & Compliance Governance"],
      gradient: "from-red-500 to-red-700"
    },
    {
      icon: MdLocalShipping,
      title: "Logistics & Supply Chain",
      desc: "Deploy privatised AI models to optimise supply chain operations, forecasting and automation while ensuring data security, integrity and compliance across distributed ecosystems.",
      tags: ["Secure Workflow Automation", "Data Governance", "Controlled AI Deployment"],
      gradient: "from-indigo-500 to-indigo-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-6 border border-orange-500/30 animate-fade-in-down">
            <FaShieldAlt className="w-5 h-5 text-orange-300" />
            <span className="text-orange-300 font-semibold">Regulated Industries</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            Industries <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">We Serve</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 animate-fade-in font-light leading-relaxed">
            Secure, private and compliant AI solutions for regulated and data-sensitive industries
          </p>

         
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <MdAccountBalance className="absolute w-12 h-12 text-blue-300/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <FaShieldAlt className="absolute w-10 h-10 text-orange-400/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <MdLocalHospital className="absolute w-14 h-14 text-cyan-300/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Trusted Expertise</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
            Built for Regulated Environments
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We understand the unique challenges faced by heavily regulated industries. Our platform is purpose-built to meet the stringent security, compliance, and data sovereignty requirements of sectors where data protection is paramount.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Industry Solutions</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Sector-Specific AI Solutions
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Tailored security and compliance frameworks for your industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                {/* Industry Header with Icon */}
                <div className="relative h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  
                  {/* Animated Particles */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-8 left-8 w-20 h-20 border border-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 right-8 w-24 h-24 border border-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-16 right-12 w-16 h-16 border border-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>

                  {/* Industry Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`bg-gradient-to-br ${industry.gradient} w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <industry.icon className="w-14 h-14 text-white" />
                    </div>
                  </div>
                </div>

                {/* Industry Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {industry.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Key Capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.tags.map((tag, j) => (
                        <span 
                          key={j}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 px-3 py-2 rounded-lg text-xs font-bold border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                        >
                          <FaCheckCircle className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Shared Challenges</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Common Industry Requirements
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Addressing the critical needs across all regulated sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Sovereignty & Privacy",
                desc: "Full control over where your data resides and how it's processed",
                icon: FaShieldAlt
              },
              {
                title: "Regulatory Compliance",
                desc: "Built-in compliance with GDPR, HIPAA, ISO standards, and sector-specific regulations",
                icon: MdSecurity
              },
              {
                title: "Audit & Accountability",
                desc: "Complete transparency and traceability for all AI operations and decisions",
                icon: MdBusiness
              },
              {
                title: "Risk Management",
                desc: "Comprehensive AI governance frameworks to identify and mitigate risks",
                icon: FaShieldAlt
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-start bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-8 border border-orange-500/30">
              <FaShieldAlt className="w-6 h-6 text-orange-300" />
              <span className="text-orange-300 font-semibold">Industry Expertise</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to Transform Your Industry with Secure AI?
            </h2>
            <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with CyberAI to deploy compliant, private AI solutions tailored to your industry's unique regulatory requirements.
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