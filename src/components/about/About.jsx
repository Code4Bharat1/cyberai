"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdSecurity, 
  MdLightbulb, 
  MdShield,
  MdLock,
  MdVerifiedUser,
  MdSpeed
} from 'react-icons/md';
import { 
  FaArrowRight, 
  FaLinkedin, 
  FaShieldAlt,
  FaBrain,
  FaRocket,
  FaQuoteLeft,
  FaUserShield,
  FaLock,
  FaEye,
  FaBug
} from 'react-icons/fa';
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

  const culturalValues = [
    {
      number: "1",
      title: "Customer-Centric Autonomy",
      description: "We don't believe in one-size-fits-all AI. We empower clients with solutions they can control, adapt and trust.",
      icon: FaUserShield,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "2",
      title: "Security by Default",
      description: "We bake cybersecurity, privacy and risk mitigation into every AI pipeline — because without trust, there's no adoption.",
      icon: FaShieldAlt,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "3",
      title: "Transparency & Accountability",
      description: "We value explainable AI, clear communication, and ethical practices in everything we build and deploy.",
      icon: FaEye,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "4",
      title: "Innovation with Purpose",
      description: "We build what solves real-world problems — not what's trendy. Every model, bot, or system has measurable impact.",
      icon: FaRocket,
      color: "from-green-500 to-green-600"
    },
    {
      number: "5",
      title: "Collaboration over Control",
      description: "We co-create with clients, partners and our team — believing that true intelligence thrives through diverse perspectives.",
      icon: FaBrain,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      number: "6",
      title: "Continuous Learning",
      description: "Just like our AI agents, we evolve. We stay curious, challenge assumptions and learn from every deployment.",
      icon: MdLightbulb,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const aiExploits = [
    { text: "Leak confidential prompts and data", icon: FaLock },
    { text: "Reveal system instructions", icon: FaEye },
    { text: "Generate restricted or misleading outputs", icon: MdShield },
    { text: "Bypass safeguards through crafted injections", icon: FaBug }
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white py-32 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Your AI. Your data. Your rules.
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            About <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">CyberAi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
            Built by security experts who understand what's at stake when AI meets enterprise data
          </p>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <MdShield className="absolute w-12 h-12 text-blue-500/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <MdSecurity className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <FaShieldAlt className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Our Story Section - NEW */}
      <section id="story" className="py-24 px-4 scroll-mt-20 bg-gradient-to-b from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">The Beginning</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Our Story
            </h2>
          </div>

          {/* Story Content */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Our founder understood the unique pressures regulated industries face — he had spent two decades defending them. From ISO 27001 implementations to red-teaming cloud platforms and guiding compliance under PCI DSS, HIPAA, and GDPR — he saw the growing AI wave as both a breakthrough and a risk multiplier.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed font-semibold">
                His vision wasn't just to use AI, but to rebuild it from the ground up — for security, compliance, and enterprise-grade control.
              </p>
            </div>

            {/* The Realization */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <div className="flex items-start gap-4 mb-6">
                <FaBug className="w-12 h-12 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-orange-300 mb-4">The Ethical Hacker's Perspective</h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-6">
                    As an ethical hacker, our founder experienced how seemingly harmless AI tools could be exploited to:
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {aiExploits.map((exploit, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-3 bg-black/20 p-4 rounded-xl backdrop-blur-sm"
                  >
                    <exploit.icon className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-100 leading-relaxed">{exploit.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-blue-100 text-lg leading-relaxed italic">
                It wasn't the intelligence of the models that concerned him — it was their exploitability, opacity, and the loss of data control for businesses in finance, healthcare, defense and other regulated industries.
              </p>
            </div>

            {/* The Birth */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/30 text-center">
              <FaRocket className="w-16 h-16 text-orange-400 mx-auto mb-6" />
              <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
                That's when the idea for CyberAi Technologies Ltd was born.
              </p>
            </div>
          </div>

          {/* Tagline Section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-3xl p-12 border-2 border-orange-500/40">
              <div className="text-center mb-8">
                <h3 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Your AI. Your Data. Your Rules.
                </h3>
                <p className="text-blue-100 text-xl leading-relaxed">
                  CyberAi's tagline isn't marketing fluff — it's a philosophy born from ethical hacking, real-world risk, and deep industry knowledge.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-2">Unleashable</div>
                  <div className="text-sm text-blue-200">but not uncontrollable</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-2">Intelligent</div>
                  <div className="text-sm text-blue-200">but also interpretable</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-2">Powerful</div>
                  <div className="text-sm text-blue-200">but provably safe</div>
                </div>
              </div>

              <p className="text-blue-100 text-center italic text-lg">
                From security to strategy, from exploit to innovation — CyberAi exists to make enterprise AI truly yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-10 border-2 border-blue-200 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4">
                  <FaRocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-black text-blue-900">Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To democratize intelligent automation by building secure, autonomous AI solutions that empower every organization to own their AI journey — on their terms, with their data and under their control.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-10 border-2 border-orange-200 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4">
                  <MdShield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-black text-blue-900">Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At CyberAi Technologies Ltd, our mission is to make AI:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full p-1 mt-1">
                    <MdVerifiedUser className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    <span className="font-bold text-blue-900">Accessible</span> to businesses of all sizes through agentic, scalable solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full p-1 mt-1">
                    <MdLock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    <span className="font-bold text-blue-900">Secure by design,</span> with strong data privacy and ethical safeguards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full p-1 mt-1">
                    <MdSpeed className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    <span className="font-bold text-blue-900">Customizable and compliant</span> for real-world workflows, across industries
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* How We Achieve This */}
          <div className="mt-12 bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">We achieve this by delivering AI that:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <MdVerifiedUser className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700">Works across platforms and vendors</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <MdVerifiedUser className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700">Embeds into existing business operations</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <MdVerifiedUser className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700">Respects data sovereignty and industry-specific regulations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Values Section - NEW */}
      <section id="values" className="py-10 px-4 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">What Drives Us</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Cultural Values
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The principles that guide everything we build and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalValues.map((value, i) => (
              <div 
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${value.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-600">
                    {value.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Dattawala Section - SIMPLIFIED */}
      <section id="founder" className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Leadership</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              About Dr. Dattawala
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left Column - Photo */}
                <div className="md:col-span-2 relative bg-gray-200 h-96 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10"></div>
                  <img
                    src="/dr.jpg"
                    alt="Dr. Davar Dattawala"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Column - Info */}
                <div className="md:col-span-3 p-10">
                  <h3 className="text-3xl font-black text-blue-900 mb-2">
                    Dr. Davar Dattawala
                  </h3>
                  <p className="text-orange-500 font-bold mb-6 text-lg">
                    Founder & Chief Technology Officer
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MdSecurity className="w-5 h-5 text-blue-500" />
                      <span>London, United Kingdom</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Dr. Davar Dattawala is a curious AI practitioner and Cybersecurity leader with over 21 years of global experience spanning the UK, Americas, Middle East and Southeast Asia. His career has been defined by securing some of the world's most complex enterprise environments across banking, telecommunications and government sectors. He is an award winning professional with a published thesis in international magazine.
                  </p>

                  <div className="pt-6 border-t border-gray-200">
                    <Link
                      href="https://www.linkedin.com/company/cyberai-technologies-ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 group"
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-10 px-4 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white p-16 rounded-3xl text-center shadow-2xl relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Own Your AI Journey?
              </h2>
              <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation to discuss how CyberAi can help you build secure, compliant AI solutions on your terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                    Schedule Consultation
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
                <a href="https://wa.me/447399339964" target="_blank" rel="noopener noreferrer">
                  <button className="border-2 border-white/50 backdrop-blur-sm hover:bg-white hover:text-blue-900 px-12 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105">
                    WhatsApp Us
                  </button>
                </a>
              </div>
              <p className="text-blue-300 text-sm mt-6">
                Or email us at <a href="mailto:Enquiries@cyberaitechs.com" className="underline hover:text-white">Enquiries@cyberaitechs.com</a>
              </p>
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