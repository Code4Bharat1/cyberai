'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MdBusiness,
  MdLocationOn,
  MdWorkspacePremium,
  MdEmojiEvents,
  MdMenuBook,
  MdMic
} from 'react-icons/md';
import { FaTrophy, FaMedal, FaAward, FaArrowRight, FaLinkedin } from 'react-icons/fa';
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
    "AI Product Development",
    "Cybersecurity Governance",
    "Cloud Architecture",
    "Data Protection",
    "DevSecOps",
    "VAPT",
    "BCP/DR",
    "AI Governance & Risk"
  ];

  const achievements = [
    {
      icon: FaTrophy,
      title: "Top Cybersecurity Voice",
      subtitle: "LinkedIn, 2024",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: MdWorkspacePremium,
      title: "Cyber Security Excellence",
      subtitle: "CyberX Global Awards, 2022-24",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FaMedal,
      title: "Cyber Security Excellence",
      subtitle: "Global CISO Forum, 2024",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const companies = [
    { name: "KPMG", icon: MdBusiness },
    { name: "HSBC", icon: MdBusiness },
    { name: "JP Morgan Chase", icon: MdBusiness },
    { name: "HDFC Bank", icon: MdBusiness },
    { name: "VFS Global", icon: MdBusiness },
    { name: "Ooredoo", icon: MdBusiness }
  ];

  return (
    <div className="min-h-screen bg-white mt-10 ">
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

          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed">
            Experience-led AI and cybersecurity leadership with global expertise
          </p>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <FaTrophy className="absolute w-12 h-12 text-yellow-500/20 animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <FaMedal className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{ top: '60%', right: '15%', animationDelay: '1s' }} />
          <MdWorkspacePremium className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{ bottom: '20%', left: '20%', animationDelay: '2s' }} />
        </div>

        {/* Scroll Down Indicator */}

      </section>

      {/* Main Content Section */}
      <section id="profile" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Left Column - Profile Card */}
            <div className="md:col-span-2 animate-slide-in-left">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden sticky top-8 border-2 border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="relative bg-gray-200 h-96 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
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

                  <div className="pt-6 border-t border-gray-200">
                    <Link
                      href="https://www.linkedin.com/in/your-profile"
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
                <p className="text-gray-600 text-lg leading-relaxed">
                  A seasoned cybersecurity professional with over 20 years of global experience working across the UK, USA (Americas as Regional Cyber Expert), Middle East, and Southeast Asia. Dr. Dattawala brings deep expertise in securing enterprise environments and driving AI innovation.
                </p>
              </div>

              {/* Core Expertise */}
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-6">Core Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {coreExpertise.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-5 py-3 rounded-xl text-sm font-bold border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recognition & Achievements */}
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-6">Recognition & Achievements</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="group bg-white border-2 border-gray-100 rounded-3xl p-6 text-center hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className={`bg-gradient-to-br ${achievement.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-blue-900 mb-2 text-lg">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm font-medium">{achievement.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research & Thought Leadership */}
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-6">Research & Thought Leadership</h3>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-l-4 border-blue-500 rounded-r-3xl p-8 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-500 group animate-fade-in-up">
                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-500 rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <MdMenuBook className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3 text-xl leading-tight">
                        A Comparative Analysis of Cloud-Based Information Security Solutions
                      </h4>
                      <p className="text-gray-700 font-semibold mb-2">
                        Published in International Journal of Engineering Applied Science and Management
                      </p>
                      <p className="text-gray-500 text-sm mb-4 font-medium">June 27, 2024</p>
                      <p className="text-gray-600 leading-relaxed">
                        Evaluating Risks and Benefits in modern cloud architectures.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-500 rounded-r-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500 rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <MdMic className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-900 mb-2 text-xl">Speaking Engagements</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Regular keynote and panel speaker on AI and cybersecurity topics at international conferences and industry events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('experience')}
                className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all"
              >
                View Global Experience
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Global Leadership Experience */}
          <div id="experience" className="mt-24 scroll-mt-20">
            <div className="text-center mb-12">
              <div className="mb-4">
                <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Career Highlights</span>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
                Global Leadership Experience
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Trusted by world-leading organizations across multiple continents
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 *:shadow-sm">
              {companies.map((company, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 flex items-center space-x-5 hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-500 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 group-hover:scale-110 transition-transform shadow-lg">
                    <company.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-bold text-blue-900 text-lg">{company.name}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => scrollToSection('cta')}
                className="group flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all mx-auto text-lg"
              >
                Connect With Our Team
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Connect CTA Section */}
      <section id="cta" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
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
                Discuss your enterprise security and AI needs directly with our experts. Get personalized guidance for your organization.
              </p>
              <Link href="/contact">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                  Contact Us
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