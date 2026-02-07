"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdAssessment, 
  MdMap, 
  MdAccountBalance, 
  MdStorage, 
  MdPsychology, 
  MdSmartToy, 
  MdBook, 
  MdPeople, 
  MdMonitor,
  MdSecurity,
  MdBugReport,
  MdGavel,
  MdSpeed,
  MdLock,
  MdAutoAwesome,
  MdArchitecture,
  MdIntegrationInstructions,
  MdVerifiedUser,
  MdTrendingUp,
  MdCloud,
  MdDeviceHub,
  MdAutorenew,
  MdCheckCircle,
  MdWarning,
  MdShield
} from 'react-icons/md';
import { 
  FaShieldAlt, 
  FaRobot, 
  FaCloud as FaCloudIcon, 
  FaArrowRight, 
  FaCheck, 
  FaChartLine, 
  FaNetworkWired,
  FaExclamationTriangle,
  FaDatabase,
  FaLock as FaLockIcon,
  FaBrain,
  FaRocket
} from 'react-icons/fa';
import { Scale, BadgeCheck } from 'lucide-react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function ServicesPage() {
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

  const coreServices = [
    {
      icon: MdAssessment,
      title: "AI Readiness Assessment",
      desc: "Comprehensive evaluation of infrastructure, data maturity, and organizational readiness for AI adoption.",
      gradient: "from-blue-500 to-blue-600",
      link: "readiness"
    },
    {
      icon: MdMap,
      title: "AI Strategy & Roadmap",
      desc: "Develop actionable implementation plans aligned with business goals and regulatory requirements.",
      gradient: "from-orange-500 to-orange-600",
      link: "strategy"
    },
    {
      icon: MdCloud,
      title: "AI Platform Deployment",
      desc: "Deploy complete AI operating system in your environment that grows with your business.",
      gradient: "from-purple-500 to-purple-600",
      link: "ai-os",
      featured: true
    },
    {
      icon: MdPsychology,
      title: "Custom AI Model Configuration",
      desc: "Configure LLMs and SLMs trained exclusively on your data within your environment.",
      gradient: "from-green-500 to-green-600",
      link: "development"
    },
    {
      icon: MdLock,
      title: "Data Sovereignty & Control",
      desc: "End-to-end data control with complete auditability and transparency.",
      gradient: "from-pink-500 to-pink-600",
      link: "data-sovereignty",
      featured: true
    },
    {
      icon: MdAutorenew,
      title: "Continuous AI Improvement",
      desc: "Free baseline updates ensuring your models remain competitive over 3+ years.",
      gradient: "from-indigo-500 to-indigo-600",
      link: "continuous-improvement",
      featured: true
    },
    {
      icon: MdDeviceHub,
      title: "MCP Servers & A2A Framework",
      desc: "Agent-to-Agent coordination for unified outputs from multiple AI systems.",
      gradient: "from-amber-500 to-amber-600",
      link: "integration",
      featured: true
    },
    {
      icon: MdSmartToy,
      title: "Agentic AI & Automation",
      desc: "Deploy intelligent agents for compliance, fraud detection, and complex workflow automation.",
      gradient: "from-teal-500 to-teal-600",
      link: "agents"
    },
    {
      icon: MdAccountBalance,
      title: "AI Governance & Compliance",
      desc: "Frameworks aligned with ISO 42001, EU AI Act, GDPR, and sector-specific regulations.",
      gradient: "from-red-500 to-red-600",
      link: "governance"
    },
    {
      icon: MdSecurity,
      title: "AI Red Teaming",
      desc: "Rigorous security testing to identify vulnerabilities before deployment.",
      gradient: "from-orange-600 to-red-600",
      link: "red-teaming"
    },
    {
      icon: MdStorage,
      title: "Data Engineering & Architecture",
      desc: "Optimize data pipelines and architecture for high-performance AI deployment.",
      gradient: "from-blue-600 to-indigo-600",
      link: "data"
    },
    {
      icon: MdPeople,
      title: "AI Training & Change Management",
      desc: "Empower your workforce with skills to leverage AI tools effectively.",
      gradient: "from-green-600 to-teal-600",
      link: "training"
    }
  ];

  const redTeamingScope = [
    { icon: MdSecurity, text: "Adversarial attack simulation", color: "orange" },
    { icon: MdBugReport, text: "Prompt injection & jailbreak testing", color: "blue" },
    { icon: MdGavel, text: "Bias & fairness assessment", color: "purple" },
    { icon: MdSpeed, text: "Robustness & stress testing", color: "green" },
    { icon: MdLock, text: "Data privacy & model leakage testing", color: "red" },
    { icon: MdAutoAwesome, text: "Hallucination & reliability testing", color: "indigo" }
  ];

  const methodology = [
    {
      step: "01",
      title: "Assess",
      desc: "Baseline security posture and threat modeling"
    },
    {
      step: "02",
      title: "Attack",
      desc: "Adversarial attacks and model exploitation"
    },
    {
      step: "03",
      title: "Analyse",
      desc: "Vulnerabilities, bias, hallucinations, and robustness"
    },
    {
      step: "04",
      title: "Remediate",
      desc: "Mitigation, secure retraining and monitoring"
    }
  ];

  const capabilities = [
    "Cloud security configuration reviews",
    "Cloud architecture reviews",
    "Complete IAM solution pentesting"
  ];

  const aiRisks = [
    {
      icon: MdWarning,
      title: "Hallucination & Inaccuracy",
      desc: "Models generate plausible but false information",
      mitigation: "Private models with limited parameters trained only on verified customer data"
    },
    {
      icon: MdBugReport,
      title: "Bias & Discrimination",
      desc: "Inherited biases from training data leading to unfair outcomes",
      mitigation: "Controlled training datasets with bias testing and fairness assessment"
    },
    {
      icon: MdSecurity,
      title: "Security Vulnerabilities",
      desc: "Prompt injection, data leakage, adversarial attacks",
      mitigation: "Red team testing and secure deployment within customer infrastructure"
    },
    {
      icon: MdLock,
      title: "Privacy & Data Exposure",
      desc: "Unintended disclosure of sensitive training data",
      mitigation: "Data sovereignty—models never leave your environment"
    },
    {
      icon: FaExclamationTriangle,
      title: "Model Drift & Degradation",
      desc: "Performance decline over time as real-world data changes",
      mitigation: "Continuous monitoring and free baseline updates over 3+ years"
    },
    {
      icon: MdShield,
      title: "Compliance & Governance",
      desc: "Regulatory violations and lack of auditability",
      mitigation: "Built-in governance frameworks aligned with ISO 42001, EU AI Act, GDPR"
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Updated positioning */}
      <section id="hero" className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white py-32 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Comprehensive AI Platform Services
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8 animate-fade-in font-light leading-relaxed">
            From strategy to deployment—complete AI platform lifecycle support for regulated industries
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-orange-400 mb-1">90</div>
              <div className="text-xs text-blue-100">Days to Deploy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-orange-400 mb-1">100%</div>
              <div className="text-xs text-blue-100">Custom Solutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-orange-400 mb-1">24/7</div>
              <div className="text-xs text-blue-100">Support Available</div>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-semibold">ISO 42001</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
              <Scale className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-semibold">EU AI Act</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
              <MdShield className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-semibold">GDPR</span>
            </div>
          </div>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <MdPsychology className="absolute w-12 h-12 text-blue-500/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <FaShieldAlt className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <FaRobot className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Market Context</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Enterprise AI: Proven Technology,<br/>Growing Global Demand
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Enterprise AI is no longer experimental—it's an established market with regulatory frameworks emerging worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 text-center">
              <FaChartLine className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-blue-900 mb-3">Massive Addressable Market</h3>
              <p className="text-gray-600">
                Global enterprise AI market experiencing exponential growth across all regulated sectors
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 text-center">
              <MdAccountBalance className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-blue-900 mb-3">Regulatory Maturity</h3>
              <p className="text-gray-600">
                ISO 42001, EU AI Act, and sector-specific frameworks establishing industry standards
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 text-center">
              <FaShieldAlt className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-blue-900 mb-3">Security Imperative</h3>
              <p className="text-gray-600">
                Enterprises demanding private, auditable AI solutions to protect sensitive data
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 text-center border-l-4 border-blue-500">
            <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold text-blue-900">Why this matters:</span> You're not investing in experimental technology. 
              Enterprise AI is a proven, regulated space with established best practices. Our approach combines cutting-edge 
              capabilities with the governance and compliance requirements that regulated industries demand.
            </p>
          </div>
        </div>
      </section>

      {/* Service Journey - Customer Onboarding - Updated timeline */}
      

      {/* Core Services Grid */}
      <section id="services" className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 animate-fade-in">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">What We Offer</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 animate-fade-in-up">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in">
              Expert support across every dimension of enterprise AI platform implementation
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coreServices.map((service, i) => (
              <div 
                key={i}
                onClick={() => scrollToSection(service.link)}
                className={`group bg-white border-2 ${service.featured ? 'border-orange-400 shadow-lg' : 'border-gray-100'} rounded-3xl p-6 hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 animate-fade-in-up cursor-pointer relative`}
                style={{animationDelay: `${i * 0.05}s`}}
              >
                {service.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </div>
                )}
                <div className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-3">{service.desc}</p>
                <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <FaArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Platform Deployment - DETAILED SECTION */}
      <section id="ai-os" className="py-10 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Core Capability</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Deploy Your AI Platform
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Complete control—no dependency on OpenAI, Meta, or external platforms
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-12 border-2 border-blue-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4 hover:shadow-2xl transition-shadow">
                  <MdCloud className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 text-lg">Base AI Platform</h4>
                  <p className="text-gray-600 text-sm mt-2">Deployed in your environment</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4 hover:shadow-2xl transition-shadow">
                  <MdAutorenew className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 text-lg">Organic Growth</h4>
                  <p className="text-gray-600 text-sm mt-2">Learns from your data</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4 hover:shadow-2xl transition-shadow">
                  <MdDeviceHub className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 text-lg">Agent Workflows</h4>
                  <p className="text-gray-600 text-sm mt-2">Automation on top</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-blue-900 text-xl mb-6 text-center">Key Advantages</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Complete Ownership", desc: "Full control—no vendor lock-in" },
                  { title: "Scalable Architecture", desc: "Grows with your business" },
                  { title: "Custom Workflows", desc: "Agents tailored to your processes" },
                  { title: "Independent Evolution", desc: "Not dependent on external updates" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 block">{item.title}</span>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4 text-center">Why This Matters</h4>
            <p className="text-blue-100 text-lg text-center max-w-3xl mx-auto">
              Most enterprises depend on external AI platforms. With your own AI operating system, you control the entire stack—from data 
              to deployment. Build agent workflows on top that automate your specific business processes without relying on 
              third-party providers.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sovereignty - DETAILED SECTION */}
      <section id="data-sovereignty" className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Data Control</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Data Under Your Control
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Industry's #1 concern: complete sovereignty with end-to-end auditability
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-12 border-2 border-orange-200">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: MdStorage, title: "Your Data", desc: "Stays in your infrastructure" },
                { icon: MdLock, title: "Your Models", desc: "Trained only on your data" },
                { icon: MdVerifiedUser, title: "Your Control", desc: "Full audit trails" },
                { icon: FaShieldAlt, title: "Your Compliance", desc: "Meet all regulations" }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-shadow">
                  <item.icon className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-blue-900 text-xl mb-6 text-center">What This Means</h4>
              <div className="space-y-4">
                {[
                  { title: "Never Leaves Your Environment", desc: "Models trained and deployed entirely within your infrastructure" },
                  { title: "Complete Transparency", desc: "Every data point and decision fully auditable for compliance" },
                  { title: "Regulatory Compliance Built-In", desc: "GDPR, HIPAA, ISO 42001, EU AI Act enforced at infrastructure level" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                    <MdCheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-900 to-orange-800 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <FaDatabase className="w-12 h-12 text-orange-300 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-bold mb-3">The Trust Gap in AI</h4>
                <p className="text-orange-100 text-lg leading-relaxed">
                  Most AI solutions require sending your data to external platforms. This creates risk, compliance challenges, 
                  and lack of control. Our approach keeps everything in your environment—giving you complete sovereignty while 
                  maintaining cutting-edge AI capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement - DETAILED SECTION */}
      <section id="continuous-improvement" className="py-10 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Long-Term Value</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Continuous AI Improvement
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Free baseline updates keep your models competitive over 3+ years
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl p-12 border-2 border-purple-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                { icon: MdArchitecture, title: "Initial Deployment", desc: "Custom platform for your business", period: "Month 1" },
                { icon: MdAutorenew, title: "Baseline Updates", desc: "Free as AI tech advances", period: "Ongoing", highlighted: true },
                { icon: MdTrendingUp, title: "Competitive Edge", desc: "State-of-the-art over 3+ years", period: "Year 3+" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`${item.highlighted ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-2xl' : 'bg-white shadow-lg'} rounded-2xl p-6 hover:shadow-2xl transition-shadow`}>
                    <div className={`w-16 h-16 ${item.highlighted ? 'bg-white/20' : 'bg-purple-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`w-8 h-8 ${item.highlighted ? 'text-white' : 'text-purple-600'}`} />
                    </div>
                    <h4 className={`font-bold text-lg mb-2 ${item.highlighted ? 'text-white' : 'text-blue-900'}`}>{item.title}</h4>
                    <p className={`text-sm mb-3 ${item.highlighted ? 'text-white/90' : 'text-gray-600'}`}>{item.desc}</p>
                    <div className={`text-xs font-semibold ${item.highlighted ? 'text-white/80' : 'text-purple-600'}`}>{item.period}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-blue-900 text-xl mb-6">What's Included</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Platform architecture updates",
                  "Security patches",
                  "Performance optimization",
                  "Regulatory compliance updates"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-900 to-purple-800 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <FaRocket className="w-12 h-12 text-purple-300 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-bold mb-3">AI Technology Evolves Rapidly</h4>
                <p className="text-purple-100 text-lg leading-relaxed">
                  AI platforms require baseline updates as the technology matures. Without continuous improvement, your platform 
                  becomes outdated. Our maintenance includes free upgrades that keep your AI competitive throughout your 3+ year 
                  contract—ensuring long-term ROI without additional investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Servers & A2A Framework - DETAILED SECTION */}
      <section id="integration" className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Secured Integration</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              MCP Servers & A2A Framework
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Coordinate multiple AI systems—unified output from diverse tools
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-12 border-2 border-green-200">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Multiple AI Tools */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="font-bold text-blue-900 text-lg mb-4 text-center">Your AI Ecosystem</h4>
                <div className="space-y-3">
                  {["Document AI", "Compliance AI", "Risk AI", "Analytics AI", "Customer AI", "Operations AI"].map((tool, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <MdDeviceHub className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* A2A Framework */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center">
                <FaNetworkWired className="w-20 h-20 mb-6" />
                <h4 className="font-bold text-2xl mb-4 text-center">A2A Framework</h4>
                <p className="text-green-100 text-center text-sm">Agent-to-Agent Communication</p>
              </div>

              {/* Unified Output */}
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
                <MdIntegrationInstructions className="w-16 h-16 text-blue-600 mb-4" />
                <h4 className="font-bold text-blue-900 text-lg mb-3 text-center">Unified Output</h4>
                <p className="text-gray-600 text-center">Single coherent response from all systems</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-blue-900 text-xl mb-6 text-center">Why This Matters</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-xl">
                  <h5 className="font-bold text-gray-900 mb-2">The Challenge</h5>
                  <p className="text-gray-700 text-sm">
                    Companies with 5-6 AI tools get conflicting answers and integration chaos without coordination.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <h5 className="font-bold text-gray-900 mb-2">Our Solution</h5>
                  <p className="text-gray-700 text-sm">
                    A2A framework enables agents to communicate and deliver unified responses—eliminating conflicts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: MdCheckCircle, title: "MCP Server Integration", desc: "Secure coordination across your AI ecosystem" },
              { icon: MdDeviceHub, title: "Cross-Agent Orchestration", desc: "Intelligent routing for complex workflows" },
              { icon: FaShieldAlt, title: "Secure by Design", desc: "All communication within your infrastructure" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
                <item.icon className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Risk Management - SECTION with updated compliance */}
      <section id="ai-risks" className="py-10 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Risk Management</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Understanding AI Risks
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-4">
              Beyond hallucination and bias—comprehensive risk mitigation
            </p>
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-xl border-2 border-blue-200">
              <FaBrain className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">Reference: MIT AI Risk Repository</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiRisks.map((risk, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <risk.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-2">{risk.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{risk.desc}</p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-900 text-xs mb-2 uppercase">Our Mitigation</h5>
                  <p className="text-gray-700 text-sm">{risk.mitigation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-10 border-2 border-blue-200">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                <FaShieldAlt className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-4">How CyberAI's Private Models Reduce Risk</h3>
                <div className="space-y-3 text-gray-700 text-lg">
                  <div className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p><span className="font-bold">Limited Parameters:</span> ~1 billion parameters vs. ChatGPT's broader scope reduces complexity and attack surface</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p><span className="font-bold">Trained Only on Your Data:</span> Eliminates external bias and hallucinations from irrelevant training data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p><span className="font-bold">Environment Isolation:</span> Models deployed in your infrastructure never exposed to external threats</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p><span className="font-bold">Faster & More Accurate:</span> Focused scope delivers superior performance for your specific use cases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Readiness Assessment */}
      <section id="readiness" className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Service Deep Dive</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              AI Readiness Assessment
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Understand where you stand before committing to AI platform implementation
            </p>
          </div>

          {/* Assessment Framework Diagram */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-12 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Our Assessment Framework</h3>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: MdStorage, title: "Data Maturity", items: ["Quality", "Volume", "Accessibility"] },
                { icon: MdArchitecture, title: "Infrastructure", items: ["Cloud readiness", "Security posture", "Scalability"] },
                { icon: MdPeople, title: "Skills & Culture", items: ["Technical expertise", "AI literacy", "Change readiness"] },
                { icon: MdAccountBalance, title: "Governance", items: ["Policies", "Compliance", "Risk management"] }
              ].map((area, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-shadow">
                  <area.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-900 mb-3">{area.title}</h4>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <FaCheck className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-blue-900 text-xl mb-4 text-center">Deliverables</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <FaChartLine className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Maturity Scorecard</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <MdMap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Gap Analysis</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <FaArrowRight className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Action Roadmap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Red Teaming Section */}
      <section id="red-teaming" className="py-10 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Security Testing</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              AI Red Teaming
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Rigorous testing to identify vulnerabilities before deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Service Scope */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                    <FaShieldAlt className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-blue-900">Service Scope</h3>
                </div>

                <div className="space-y-4">
                  {redTeamingScope.map((item, i) => (
                    <div 
                      key={i} 
                      className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-transparent animate-fade-in-up"
                      style={{animationDelay: `${i * 0.1}s`}}
                    >
                      <div className={`bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl p-3 group-hover:scale-110 transition-transform shadow-md`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Methodology */}
            <div className="animate-slide-in-right space-y-8">
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-8">Methodology</h3>
                
                <div className="space-y-6">
                  {methodology.map((item, i) => (
                    <div 
                      key={i} 
                      className="relative bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-all duration-500 group animate-fade-in-up"
                      style={{animationDelay: `${i * 0.1}s`}}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 shadow-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-500 p-3 rounded-xl shadow-lg">
                    <FaCloudIcon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900">Extended Capabilities</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {capabilities.map((cap, i) => (
                    <span 
                      key={i}
                      className="bg-white px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 border-2 border-blue-200 hover:border-blue-500 hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Orchestrate Enterprise AI - VISUAL SECTION */}
      <section className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Framework</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              How We Orchestrate Enterprise AI
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Our proprietary 7-step framework for safely deploying AI within your security requirements
            </p>
          </div>

          {/* Visual Framework Diagram */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-gray-100">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {/* Row 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    01
                  </div>
                  <MdAccountBalance className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">System Prompts & Policy</h4>
                <p className="text-gray-600 text-sm">
                  Defining base guidelines and acceptable use policies to establish governance framework.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    02
                  </div>
                  <MdPsychology className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Private LLM & SLM Execution</h4>
                <p className="text-gray-600 text-sm">
                  Running secure models entirely inside your on-premises or private cloud environment.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    03
                  </div>
                  <MdIntegrationInstructions className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Secure Tools & RAG Integration</h4>
                <p className="text-gray-600 text-sm">
                  Connecting AI to enterprise tools with secure API integrations and document retrieval.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    04
                  </div>
                  <FaLockIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Secure Memory Layers</h4>
                <p className="text-gray-600 text-sm">
                  Vector databases for context retention, versioning control and encryption.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Row 2 */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border-2 border-indigo-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    05
                  </div>
                  <MdAutorenew className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Orchestration & Automation</h4>
                <p className="text-gray-600 text-sm">
                  Multi-agent workflows and processes safely orchestrated and governed.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border-2 border-pink-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    06
                  </div>
                  <MdVerifiedUser className="w-8 h-8 text-pink-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Identity-Aware Interfaces</h4>
                <p className="text-gray-600 text-sm">
                  Context-aware AI tools respecting user permissions and roles.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border-2 border-teal-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    07
                  </div>
                  <MdMonitor className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Evaluation, Audit & Observability</h4>
                <p className="text-gray-600 text-sm">
                  End-to-end logging metrics and AI assurance for behavioral explainability.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-3">Built for Regulated Industries</h4>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              This framework was designed from the ground up with governance, security, and regulatory 
              compliance at its core—not bolted on as an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Advantage</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">
              Why Choose CyberAI Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: "Governance-First Approach",
                desc: "Every service incorporates governance and security best practices from day one—not as an afterthought.",
                gradient: "from-orange-500 to-orange-600"
              },
              {
                icon: MdVerifiedUser,
                title: "Regulatory Expertise",
                desc: "Deep knowledge of GDPR, HIPAA, ISO 42001, EU AI Act, and industry-specific compliance requirements.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: MdIntegrationInstructions,
                title: "Industry & Vendor Agnostic",
                desc: "We work with any technology stack—recommending what's best for you, not what benefits us.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: MdTrendingUp,
                title: "End-to-End Support",
                desc: "From initial assessment through deployment and ongoing optimization—we're with you every step.",
                gradient: "from-green-500 to-green-600"
              }
            ].map((item, i) => (
              <div key={i} className="group flex gap-6 items-start bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated contact info */}
      <section id="cta" className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white py-24 px-4 overflow-hidden scroll-mt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-8 border border-orange-500/30">
              <FaShieldAlt className="w-6 h-6 text-orange-300" />
              <span className="text-orange-300 font-semibold">Let's Build Your AI Platform</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation to discuss how our services can help you achieve secure, compliant, and effective AI platform implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                  Schedule Consultation
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              <a href="https://wa.me/447554898543" target="_blank" rel="noopener noreferrer">
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