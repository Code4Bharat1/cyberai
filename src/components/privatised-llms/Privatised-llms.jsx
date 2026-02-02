"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdStorage,
  MdSecurity,
  MdShield,
  MdVerifiedUser,
  MdSpeed,
  MdSettingsSuggest,
  MdClose,
  MdCheck,
  MdBusiness,
  MdHealthAndSafety,
  MdGavel,
  MdTune
} from 'react-icons/md';
import { FaLock, FaServer, FaRobot, FaArrowRight } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function PrivatisedLLMsPage() {
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

  const publicLLMIssues = [
    "Data sent to public cloud",
    "Not industry-specific",
    "Limited compliance capabilities",
    "Significant data privacy risks"
  ];

  const privatisedLLMBenefits = [
    "Runs in secure private cloud or on-prem",
    "Trained on company & industry data",
    "Meets regulations (ISO, GDPR, HIPAA)",
    "Full data control & ownership"
  ];

  const keyBenefits = [
    {
      icon: MdShield,
      title: "Data Privacy",
      desc: "Zero data leakage risk. Your intellectual property never leaves your controlled environment.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: MdVerifiedUser,
      title: "Compliance",
      desc: "Adhere to strict industry standards like HIPAA, GDPR, and ISO without compromise.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MdSpeed,
      title: "Accuracy",
      desc: "Higher performance on specialized tasks due to industry-specific fine-tuning.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: MdSettingsSuggest,
      title: "Full Control",
      desc: "Flexibility across architecture and deployment, optimizing for model lifecycle.",
      gradient: "from-green-500 to-green-600"
    }
  ];

  const developmentProcess = [
    {
      icon: FaServer,
      title: "Foundation AI Model",
      desc: "We select the optimal open-source foundation model suited to your architectural needs.",
      step: "01"
    },
    {
      icon: MdTune,
      title: "Fine-Tuning",
      desc: "The model is trained on your specific industry datasets to ensure relevance and accuracy.",
      step: "02"
    },
    {
      icon: FaLock,
      title: "Secure Deployment",
      desc: "We deploy the solution within your cloud environment, ensuring total data isolation.",
      step: "03"
    },
    {
      icon: FaRobot,
      title: "AI Agents",
      desc: "Integration of agents for automation, compliance checks, fraud detection, and processing.",
      step: "04"
    }
  ];

  const targetAudience = [
    {
      icon: MdBusiness,
      text: "Heavily regulated industries",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MdHealthAndSafety,
      text: "Enterprises handling sensitive data",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: MdGavel,
      text: "Organisations requiring secure and compliant AI",
      gradient: "from-purple-500 to-purple-600"
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
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Secure AI Infrastructure
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Privatised</span> LLMs
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
            Private, secure and compliant AI built inside your environment
          </p>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <MdShield className="absolute w-12 h-12 text-blue-500/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <FaLock className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <FaServer className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>

        {/* Scroll Down Indicator */}
        
      </section>

      {/* What is a Privatised LLM Section */}
      <section id="what-is" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block">
                <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">The Solution</span>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight">
                What is a Privatised LLM?
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                A privatised Large Language Model (LLM) is a company's own AI model, trained exclusively on its own data and deployed securely within a private cloud or on-premise infrastructure. Unlike public models, it is designed specifically for regulated industries where data sovereignty is critical.
              </p>
              
              <div className="space-y-5 pt-4">
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100/50 hover:shadow-lg transition-shadow group">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-3 mt-1 group-hover:scale-110 transition-transform shadow-md">
                    <MdStorage className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1 text-lg">Your Data Only</h3>
                    <p className="text-gray-600">Trained on proprietary information</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 hover:shadow-lg transition-shadow group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 mt-1 group-hover:scale-110 transition-transform shadow-md">
                    <MdSecurity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1 text-lg">Secure Deployment</h3>
                    <p className="text-gray-600">Private cloud or on-premise</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('comparison')}
                className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mt-6"
              >
                Compare with Public LLMs
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop" 
                alt="Digital AI Infrastructure"
                className="rounded-3xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent rounded-3xl z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Public vs Privatised LLM Comparison */}
      <section id="comparison" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 animate-fade-in">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">The Difference</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
              Public vs Privatised LLM
            </h2>
            <p className="text-gray-600 text-lg animate-fade-in">
              Why regulated enterprises choose private infrastructure
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
                <p className="text-sm text-gray-500 font-medium">Shared (e.g., ChatGPT, Claude)</p>
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

            {/* Privatised LLM */}
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
                <h3 className="text-3xl font-black mb-2">Privatised LLM</h3>
                <p className="text-sm text-blue-200 font-medium">Dedicated to one organisation</p>
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

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
            >
              Explore Key Benefits
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Advantages</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Strategic advantages of owning your AI infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10 *:shadow-sm">
            {keyBenefits.map((benefit, i) => (
              <div 
                key={i} 
                className="group text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className={`bg-gradient-to-br ${benefit.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('process')}
              className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto"
            >
              See Development Process
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* How We Develop Section */}
      <section id="process" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden scroll-mt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-300 font-bold text-sm tracking-widest uppercase">Our Method</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              How We Develop Privatised LLMs
            </h2>
            <p className="text-blue-200 text-lg font-light">
              Our proven process for delivering secure AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10 *:shadow-sm">
            {developmentProcess.map((step, i) => (
              <div 
                key={i} 
                className="relative bg-white text-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up border-t-4 border-orange-500"
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

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('target')}
              className="group flex items-center gap-2 text-orange-300 font-semibold hover:gap-4 transition-all mx-auto text-lg"
            >
              See Who This Is For
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section id="target" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Business Meeting - Regulated Industries"
                className="rounded-3xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-3xl z-20"></div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <div className="inline-block">
                <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Target Audience</span>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-blue-900 leading-tight">
                Who This Is For
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Our solutions are engineered for organizations that cannot compromise on security or compliance.
              </p>
              
              <div className="space-y-4 pt-4">
                {targetAudience.map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-500 border border-gray-100 hover:-translate-y-1 animate-fade-in-up"
                    style={{animationDelay: `${i * 0.1}s`}}
                  >
                    <div className={`bg-gradient-to-br ${item.gradient} rounded-xl p-4 group-hover:scale-110 transition-transform shadow-md`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-gray-800 font-bold text-lg">{item.text}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('cta')}
                className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mt-6"
              >
                Get Started Today
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white p-16 rounded-3xl text-center shadow-2xl relative overflow-hidden animate-fade-in-up">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Build Your Own Secure AI
              </h2>
              <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Take control of your data and infrastructure today. Deploy enterprise-grade AI that meets your compliance requirements.
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