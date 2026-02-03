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
  MdMic,
  MdSchool,
  MdVerifiedUser,
  MdSecurity,
  MdCloud,
  MdTrendingUp,
  MdLightbulb,
  MdGroups
} from 'react-icons/md';
import { 
  FaTrophy, 
  FaMedal, 
  FaAward, 
  FaArrowRight, 
  FaLinkedin, 
  FaGraduationCap,
  FaGlobe,
  FaShieldAlt,
  FaBrain,
  FaRocket,
  FaCheckCircle,
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
    { skill: "Cybersecurity Governance", icon: FaShieldAlt },
    { skill: "Cloud Architecture", icon: MdCloud },
    { skill: "Data Protection", icon: MdSecurity },
    { skill: "DevSecOps", icon: MdTrendingUp },
    { skill: "VAPT", icon: MdVerifiedUser },
    { skill: "BCP/DR", icon: MdBusiness },
    { skill: "AI Governance & Risk", icon: MdLightbulb }
  ];

  const achievements = [
    {
      icon: FaTrophy,
      title: "Top Cybersecurity Voice",
      subtitle: "LinkedIn, 2024",
      description: "Recognized as a leading voice in cybersecurity thought leadership",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: MdWorkspacePremium,
      title: "Cyber Security Excellence",
      subtitle: "CyberX Global Awards, 2022-24",
      description: "Three consecutive years of excellence recognition",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FaMedal,
      title: "Cyber Security Excellence",
      subtitle: "Global CISO Forum, 2024",
      description: "Recognition for outstanding contributions to the field",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const professionalJourney = [
    {
      company: "KPMG",
      role: "Senior Cybersecurity Consultant",
      region: "Global",
      description: "Led enterprise security transformations for Fortune 500 clients",
      icon: MdBusiness,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      company: "HSBC",
      role: "Information Security Lead",
      region: "Europe & Middle East",
      description: "Managed security architecture for global banking operations",
      icon: MdBusiness,
      gradient: "from-red-500 to-red-600"
    },
    {
      company: "JP Morgan Chase",
      role: "Regional Cyber Expert",
      region: "Americas",
      description: "Drove cybersecurity strategy across North and South American operations",
      icon: MdBusiness,
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      company: "HDFC Bank",
      role: "Chief Security Architect",
      region: "Asia Pacific",
      description: "Architected security frameworks for one of India's largest banks",
      icon: MdBusiness,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      company: "VFS Global",
      role: "Global CISO",
      region: "Worldwide",
      description: "Established global security operations across 140+ countries",
      icon: MdBusiness,
      gradient: "from-green-500 to-green-600"
    },
    {
      company: "Ooredoo",
      role: "Cybersecurity Director",
      region: "Middle East",
      description: "Led security transformation for telecommunications infrastructure",
      icon: MdBusiness,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const education = [
    {
      degree: "Doctor of Philosophy (PhD)",
      field: "Cloud Security & Information Systems",
      institution: "Leading International University",
      year: "2023",
      icon: FaGraduationCap
    },
    {
      degree: "Master of Science (MSc)",
      field: "Cybersecurity",
      institution: "Prestigious European Institution",
      year: "2018",
      icon: FaGraduationCap
    },
    {
      degree: "Bachelor of Engineering (BE)",
      field: "Computer Science",
      institution: "Top Engineering College",
      year: "2004",
      icon: FaGraduationCap
    }
  ];

  const certifications = [
    "CISSP - Certified Information Systems Security Professional",
    "CISM - Certified Information Security Manager",
    "CEH - Certified Ethical Hacker",
    "AWS Certified Solutions Architect",
    "Azure Security Engineer",
    "ISO 27001 Lead Auditor",
    "GDPR Practitioner",
    "CRISC - Risk & Information Systems Control"
  ];

  const globalImpact = [
    {
      metric: "20+",
      label: "Years Experience",
      icon: FaRocket,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      metric: "6",
      label: "Global Regions",
      icon: FaGlobe,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      metric: "100+",
      label: "Enterprise Projects",
      icon: MdBusiness,
      gradient: "from-green-500 to-green-600"
    },
    {
      metric: "50+",
      label: "Speaking Engagements",
      icon: MdMic,
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
            Experience-led AI and cybersecurity leadership with global expertise
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
          <FaTrophy className="absolute w-12 h-12 text-yellow-500/20 animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <FaMedal className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{ top: '60%', right: '15%', animationDelay: '1s' }} />
          <MdWorkspacePremium className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{ bottom: '20%', left: '20%', animationDelay: '2s' }} />
        </div>
      </section>

      {/* Vision & Mission Statement */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-12 border-2 border-blue-200 shadow-xl">
            <FaQuoteLeft className="w-12 h-12 text-blue-400 mb-6" />
            <blockquote className="text-2xl md:text-3xl font-bold text-blue-900 leading-relaxed mb-6">
              "Bridging the trust gap in enterprise AI by putting security and data sovereignty at the core of innovation."
            </blockquote>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded on the principle that enterprises should not have to choose between AI innovation and data control, 
              Cyberai was built to solve the fundamental challenge facing regulated industries: how to leverage cutting-edge 
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
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden sticky top-8 border-2 border-gray-100 hover:shadow-3xl transition-shadow duration-500">
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
                      <span className="font-medium">PhD in Cloud Security</span>
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
                      href="https://www.linkedin.com/in/davar-dattawala-ai-specialist/"
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
                    Dr. Davar Dattawala is a distinguished cybersecurity and AI leader with over 20 years of global 
                    experience spanning the UK, Americas, Middle East, and Southeast Asia. His career has been defined 
                    by securing some of the world's most complex enterprise environments across banking, telecommunications, 
                    and government sectors.
                  </p>
                  <p>
                    As a certified CISSP, CISM, and CEH professional with a PhD in Cloud Security, Dr. Dattawala combines 
                    deep technical expertise with strategic vision. He has led security transformations for organizations 
                    including KPMG, HSBC, JP Morgan Chase, and VFS Global, protecting critical infrastructure across 
                    140+ countries.
                  </p>
                  <p>
                    Recognizing the fundamental trust gap in enterprise AI adoption, Dr. Dattawala founded Cyberai to enable 
                    organizations to leverage cutting-edge AI capabilities while maintaining complete data sovereignty and 
                    regulatory compliance. His vision: AI that serves enterprises without compromising their control over 
                    sensitive data.
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

              {/* Education */}
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-6">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div 
                      key={i} 
                      className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <edu.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 text-lg mb-1">{edu.degree}</h4>
                        <p className="text-gray-700 font-medium mb-1">{edu.field}</p>
                        <p className="text-gray-500 text-sm">{edu.institution} • {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Certifications */}
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-6">Professional Certifications</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {certifications.map((cert, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <FaCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recognition & Achievements */}
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-6">Recognition & Achievements</h3>
                <div className="space-y-6">
                  {achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="group bg-white border-2 border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="flex items-start gap-6">
                        <div className={`bg-gradient-to-br ${achievement.gradient} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          <achievement.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-900 mb-2 text-xl">{achievement.title}</h4>
                          <p className="text-orange-600 text-sm font-bold mb-2">{achievement.subtitle}</p>
                          <p className="text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
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
                        Comprehensive evaluation of risks and benefits in modern cloud architectures, providing frameworks 
                        for secure cloud adoption in enterprise environments.
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
                      <h4 className="font-bold text-orange-900 mb-3 text-xl">Speaking Engagements</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Regular keynote and panel speaker on AI and cybersecurity topics at international conferences 
                        and industry events, including:
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                          <span>Global CISO Forum - AI Security Panel</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                          <span>CyberX Global Conference - Keynote Speaker</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FaCheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                          <span>Industry Round Tables - Secure AI Deployment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Leadership Experience */}
      <section id="experience" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Career Highlights</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Global Leadership Experience
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by world-leading organizations across multiple continents to secure their most critical operations
            </p>
          </div>

          <div className="space-y-6">
            {professionalJourney.map((experience, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`bg-gradient-to-br ${experience.gradient} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <experience.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="font-black text-blue-900 text-2xl mb-2 md:mb-0">{experience.company}</h4>
                      <span className="text-orange-600 font-bold text-sm bg-orange-50 px-4 py-2 rounded-lg border border-orange-200 w-fit">
                        {experience.region}
                      </span>
                    </div>
                    <p className="text-gray-700 font-bold mb-3 text-lg">{experience.role}</p>
                    <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cyberai Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Mission</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Why Cyberai Exists
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
                Cyberai was founded to solve this exact problem: enable enterprises to build and deploy AI models entirely 
                within their own infrastructure, maintaining complete data sovereignty while accessing cutting-edge capabilities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We don't just understand regulatory compliance—we architect it into the foundation. Every solution is built 
                security-first, with governance frameworks that meet the strictest global standards.
              </p>
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
                Discuss your enterprise security and AI needs directly with our experts. Get personalized guidance 
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