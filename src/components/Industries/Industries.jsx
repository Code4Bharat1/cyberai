"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdAccountBalance, 
  MdLocalHospital, 
  MdBusiness, 
  MdSecurity,
  MdLocalShipping,
  MdFactory,
  MdVerifiedUser,
  MdSpeed,
  MdStorage,
  MdPsychology,
  MdAssessment,
  MdLock,
  MdCloud,
  MdAutorenew,
  MdCheckCircle,
  MdMonitor,
  MdDeviceHub
} from 'react-icons/md';
import { 
  FaShieldAlt, 
  FaArrowRight, 
  FaCheckCircle as FaCheck, 
  FaChartLine,
  FaUserShield,
  FaDatabase,
  FaRobot,
  FaCog,
  FaExclamationTriangle,
  FaMoneyBillWave,
  FaGavel
} from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function IndustriesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(null);

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
      id: "banking",
      icon: MdAccountBalance,
      title: "Banking & Financial Services",
      shortDesc: "Deploy private, compliant AI for financial institutions operating under strict regulatory, security and audit requirements.",
      desc: "Financial institutions face unprecedented regulatory scrutiny while needing AI to remain competitive. Our AI platform enables banks and financial services firms to leverage cutting-edge AI capabilities while maintaining complete data sovereignty and regulatory compliance.",
      tags: ["Data Sovereignty", "Regulatory Compliance", "Audit-Ready AI"],
      gradient: "from-blue-500 to-blue-700",
      challenges: [
        { title: "Regulatory Complexity", desc: "Navigate GDPR, Basel III, MiFID II, and jurisdiction-specific regulations", icon: FaGavel },
        { title: "Data Sensitivity", desc: "Protect customer financial data and transaction records", icon: FaDatabase },
        { title: "Real-time Compliance", desc: "Ensure AI decisions meet regulatory requirements in real-time", icon: MdSpeed },
        { title: "Audit Requirements", desc: "Maintain complete audit trails for all AI operations", icon: MdAssessment }
      ],
      useCases: [
        { title: "Fraud Detection & Prevention", desc: "Real-time transaction monitoring with explainable AI", icon: FaShieldAlt },
        { title: "Credit Risk Assessment", desc: "Compliant credit scoring and risk evaluation", icon: FaChartLine },
        { title: "Customer Service Automation", desc: "Secure conversational AI for banking queries", icon: FaRobot },
        { title: "Regulatory Compliance", desc: "Automated compliance monitoring and reporting", icon: MdVerifiedUser },
        { title: "Anti-Money Laundering (AML)", desc: "Pattern detection in financial transactions", icon: MdSecurity },
        { title: "Document Processing", desc: "Secure extraction and analysis of financial documents", icon: MdStorage }
      ],
      benefits: [
        "Complete data sovereignty within your infrastructure",
        "Real-time compliance with evolving regulations",
        "Full audit trails for regulatory reporting",
        "Reduced operational risk through controlled AI deployment"
      ]
    },
    {
      id: "healthcare",
      icon: MdLocalHospital,
      title: "Healthcare & Life Sciences",
      shortDesc: "Enable AI-driven clinical and operational workflows while protecting sensitive health data.",
      desc: "Healthcare organizations must balance innovation with patient privacy and regulatory compliance. Our AI platform enables AI-powered healthcare solutions that meet HIPAA, GDPR, and other health data regulations while keeping sensitive patient information secure.",
      tags: ["Patient Data Protection", "HIPAA Compliance", "Privacy-First AI"],
      gradient: "from-emerald-500 to-emerald-700",
      challenges: [
        { title: "Patient Privacy", desc: "Protect PHI and comply with HIPAA/GDPR requirements", icon: FaUserShield },
        { title: "Clinical Accuracy", desc: "Ensure AI recommendations meet medical standards", icon: MdVerifiedUser },
        { title: "Data Interoperability", desc: "Integrate with existing EMR/EHR systems securely", icon: MdCloud },
        { title: "Liability & Trust", desc: "Maintain accountability for AI-assisted decisions", icon: FaExclamationTriangle }
      ],
      useCases: [
        { title: "Clinical Decision Support", desc: "AI-powered diagnostic assistance within secure environments", icon: MdPsychology },
        { title: "Medical Image Analysis", desc: "Private radiology and pathology image processing", icon: MdAssessment },
        { title: "Patient Risk Stratification", desc: "Identify high-risk patients while protecting privacy", icon: FaChartLine },
        { title: "Drug Discovery & Research", desc: "Secure AI for pharmaceutical research", icon: MdFactory },
        { title: "Administrative Automation", desc: "Streamline claims, billing, and scheduling", icon: FaCog },
        { title: "Remote Patient Monitoring", desc: "Secure analysis of continuous health data", icon: MdMonitor }
      ],
      benefits: [
        "HIPAA-compliant AI deployment in your infrastructure",
        "Patient data never leaves your control",
        "Explainable AI for clinical decision support",
        "Integration with existing healthcare IT systems"
      ]
    },
    {
      id: "government",
      icon: MdBusiness,
      title: "Government & Public Sector",
      shortDesc: "Support public sector organizations with on-premise or private AI deployments.",
      desc: "Government agencies require AI solutions that meet national security requirements, data sovereignty mandates, and public accountability standards. Our AI platform enables secure AI deployment that keeps citizen data within national borders and maintains full transparency.",
      tags: ["National Data Sovereignty", "Policy-Aligned Governance", "Secure AI Deployment"],
      gradient: "from-purple-500 to-purple-700",
      challenges: [
        { title: "National Security", desc: "Protect classified and sensitive government data", icon: FaShieldAlt },
        { title: "Data Sovereignty", desc: "Ensure data remains within national boundaries", icon: MdCloud },
        { title: "Public Accountability", desc: "Maintain transparency in AI-driven decisions", icon: MdVerifiedUser },
        { title: "Legacy System Integration", desc: "Work with existing government IT infrastructure", icon: FaCog }
      ],
      useCases: [
        { title: "Citizen Services Automation", desc: "Secure chatbots and service request processing", icon: FaRobot },
        { title: "Document Classification", desc: "Automated classification of government documents", icon: MdStorage },
        { title: "Fraud & Waste Detection", desc: "Identify anomalies in public spending", icon: FaChartLine },
        { title: "Policy Analysis", desc: "AI-assisted policy research and impact assessment", icon: MdAssessment },
        { title: "Emergency Response", desc: "AI-powered crisis management and resource allocation", icon: MdSpeed },
        { title: "Border & Immigration", desc: "Secure identity verification and risk assessment", icon: MdSecurity }
      ],
      benefits: [
        "On-premise deployment meeting national security requirements",
        "Data sovereignty with complete government control",
        "Transparent, auditable AI for public accountability",
        "Compliance with sector-specific regulations"
      ]
    },
    {
      id: "insurance",
      icon: MdSecurity,
      title: "Insurance",
      shortDesc: "Apply secure AI across underwriting, claims processing and compliance workflows.",
      desc: "Insurance companies need AI to modernize operations while navigating complex regulatory requirements and protecting customer data. Our AI platform enables AI-powered insurance processes that maintain compliance and protect sensitive personal information.",
      tags: ["Compliance-Driven Workflows", "Risk Assessment", "Data Privacy Controls"],
      gradient: "from-orange-500 to-orange-700",
      challenges: [
        { title: "Regulatory Compliance", desc: "Navigate insurance-specific regulations across jurisdictions", icon: FaGavel },
        { title: "Bias & Fairness", desc: "Ensure AI models don't discriminate in underwriting", icon: MdVerifiedUser },
        { title: "Claims Fraud", desc: "Detect fraudulent claims without invading privacy", icon: FaShieldAlt },
        { title: "Customer Trust", desc: "Maintain transparency in AI-driven decisions", icon: FaUserShield }
      ],
      useCases: [
        { title: "Underwriting Automation", desc: "AI-powered risk assessment and policy pricing", icon: FaChartLine },
        { title: "Claims Processing", desc: "Automated claims validation and fraud detection", icon: MdAssessment },
        { title: "Customer Service", desc: "Secure conversational AI for policy queries", icon: FaRobot },
        { title: "Risk Modeling", desc: "Advanced predictive models for risk assessment", icon: MdPsychology },
        { title: "Document Analysis", desc: "Automated extraction from insurance documents", icon: MdStorage },
        { title: "Compliance Monitoring", desc: "Real-time regulatory compliance checking", icon: MdSecurity }
      ],
      benefits: [
        "Fair and explainable underwriting decisions",
        "Reduced fraud through advanced pattern detection",
        "Faster claims processing with maintained accuracy",
        "Complete audit trails for regulatory compliance"
      ]
    },
    {
      id: "oil-gas",
      icon: MdFactory,
      title: "Oil & Gas",
      shortDesc: "Enable secure AI adoption across exploration, operations, and asset management.",
      desc: "Energy companies operate critical infrastructure requiring the highest levels of security while needing AI for operational efficiency. Our AI platform enables AI deployment that protects operational data and intellectual property while optimizing complex industrial processes.",
      tags: ["Critical Infrastructure Security", "Data Privacy & Control", "Risk & Compliance Governance"],
      gradient: "from-red-500 to-red-700",
      challenges: [
        { title: "Operational Security", desc: "Protect critical infrastructure from cyber threats", icon: FaShieldAlt },
        { title: "IP Protection", desc: "Secure proprietary exploration and production data", icon: FaDatabase },
        { title: "Safety & Compliance", desc: "Meet industry safety and environmental regulations", icon: MdVerifiedUser },
        { title: "Data Integration", desc: "Combine data from diverse operational systems", icon: MdCloud }
      ],
      useCases: [
        { title: "Predictive Maintenance", desc: "AI-powered equipment failure prediction", icon: FaCog },
        { title: "Exploration Optimization", desc: "Seismic data analysis and reservoir modeling", icon: MdAssessment },
        { title: "Production Optimization", desc: "Real-time optimization of extraction processes", icon: MdSpeed },
        { title: "Safety Monitoring", desc: "AI-powered safety and environmental compliance", icon: FaShieldAlt },
        { title: "Supply Chain Management", desc: "Optimize logistics and inventory management", icon: MdLocalShipping },
        { title: "Risk Assessment", desc: "Operational and financial risk modeling", icon: FaChartLine }
      ],
      benefits: [
        "Secure AI for critical infrastructure protection",
        "Improved operational efficiency and safety",
        "Protection of proprietary exploration data",
        "Compliance with environmental regulations"
      ]
    },
    {
      id: "logistics",
      icon: MdLocalShipping,
      title: "Logistics & Supply Chain",
      shortDesc: "Deploy privatised AI models to optimise supply chain operations and forecasting.",
      desc: "Logistics companies need AI to optimize complex supply chains while protecting sensitive customer and operational data. Our AI platform enables secure AI deployment that improves efficiency without exposing competitive intelligence or customer information.",
      tags: ["Secure Workflow Automation", "Data Governance", "Controlled AI Deployment"],
      gradient: "from-indigo-500 to-indigo-700",
      challenges: [
        { title: "Data Privacy", desc: "Protect customer shipping data and business intelligence", icon: FaUserShield },
        { title: "Supply Chain Complexity", desc: "Manage AI across distributed global networks", icon: MdCloud },
        { title: "Real-time Operations", desc: "Make AI-driven decisions at operational speed", icon: MdSpeed },
        { title: "Partner Integration", desc: "Securely share AI insights across supply chain partners", icon: MdDeviceHub }
      ],
      useCases: [
        { title: "Route Optimization", desc: "AI-powered delivery route planning", icon: MdLocalShipping },
        { title: "Demand Forecasting", desc: "Predict demand patterns and optimize inventory", icon: FaChartLine },
        { title: "Warehouse Automation", desc: "AI-driven warehouse operations and robotics", icon: FaRobot },
        { title: "Shipment Tracking", desc: "Intelligent tracking and exception management", icon: MdMonitor },
        { title: "Capacity Planning", desc: "Optimize fleet and warehouse capacity", icon: MdAssessment },
        { title: "Risk Management", desc: "Identify and mitigate supply chain risks", icon: FaShieldAlt }
      ],
      benefits: [
        "Optimized operations without exposing competitive data",
        "Secure collaboration across supply chain partners",
        "Real-time decision-making with controlled data sharing",
        "Improved efficiency while maintaining data governance"
      ]
    }
  ];

  const commonChallenges = [
    {
      title: "Data Sovereignty & Privacy",
      desc: "Full control over where your data resides and how it's processed, with models deployed entirely within your infrastructure",
      icon: FaShieldAlt,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Regulatory Compliance",
      desc: "Built-in compliance with GDPR, HIPAA, ISO 42001, EU AI Act, and sector-specific regulations through governance frameworks",
      icon: MdSecurity,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Audit & Accountability",
      desc: "Complete transparency and traceability for all AI operations and decisions with comprehensive audit trails",
      icon: MdAssessment,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Risk Management",
      desc: "Comprehensive AI governance frameworks to identify and mitigate risks before deployment",
      icon: FaExclamationTriangle,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Explainability & Trust",
      desc: "Transparent AI models that provide clear explanations for decisions in regulated contexts",
      icon: MdVerifiedUser,
      gradient: "from-pink-500 to-pink-600"
    },
    {
      title: "Continuous Improvement",
      desc: "Free baseline updates ensuring your models remain compliant and competitive over 3+ years",
      icon: MdAutorenew,
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-32 px-4 overflow-hidden">
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
            Private AI platform for regulated and data-sensitive industries
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-orange-400 mb-1">6+</div>
              <div className="text-xs text-blue-100">Industries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-orange-400 mb-1">100%</div>
              <div className="text-xs text-blue-100">Data Sovereignty</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-black text-orange-400 mb-1">Full</div>
              <div className="text-xs text-blue-100">Compliance</div>
            </div>
          </div>
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
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">AI Platform for Regulated Industries</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
            Built for Regulated Environments
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We understand the unique challenges faced by heavily regulated industries. Our AI platform is purpose-built to meet the stringent security, compliance, and data sovereignty requirements of sectors where data protection is paramount. Deploy private LLM and SLM solutions entirely within your infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border-2 border-blue-200">
              <MdLock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Private by Design</h3>
              <p className="text-gray-600 text-sm">Models trained and deployed entirely within your infrastructure</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6 border-2 border-orange-200">
              <MdVerifiedUser className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Compliance First</h3>
              <p className="text-gray-600 text-sm">Built-in governance aligned with industry regulations</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border-2 border-green-200">
              <MdAssessment className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Fully Auditable</h3>
              <p className="text-gray-600 text-sm">Complete transparency for all AI operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview Grid */}
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
              Tailored AI governance frameworks for your industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div 
                key={i} 
                onClick={() => scrollToSection(industry.id)}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
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
                    {industry.shortDesc}
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
                          <FaCheck className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-orange-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Details
                    <FaArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, idx) => (
        <section 
          key={idx} 
          id={industry.id} 
          className={`py-24 px-4 scroll-mt-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-gray-50 to-white'}`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Industry Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-br ${industry.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl`}>
                  <industry.icon className="w-9 h-9 text-white" />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-blue-900">
                  {industry.title}
                </h2>
              </div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                {industry.desc}
              </p>
            </div>

            {/* Challenges */}
            <div className="mb-16">
              <h3 className="text-3xl font-black text-blue-900 mb-8 text-center">Industry Challenges We Address</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {industry.challenges.map((challenge, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className={`bg-gradient-to-br ${industry.gradient} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <challenge.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">{challenge.title}</h4>
                      <p className="text-gray-600 text-sm">{challenge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h3 className="text-3xl font-black text-blue-900 mb-8 text-center">AI Use Cases</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {industry.useCases.map((useCase, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <useCase.icon className={`w-10 h-10 text-transparent bg-gradient-to-br ${industry.gradient} bg-clip-text mb-4`} />
                    <h4 className="font-bold text-blue-900 mb-2">{useCase.title}</h4>
                    <p className="text-gray-600 text-sm">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className={`bg-gradient-to-br ${industry.gradient} rounded-3xl p-10 text-white`}>
              <h3 className="text-3xl font-black mb-6 text-center">Key Benefits for {industry.title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {industry.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <MdCheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p className="text-white/90">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Common Challenges Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Cross-Industry</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Common Industry Requirements
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Addressing the critical needs across all regulated sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonChallenges.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why cyberai for Regulated Industries */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Advantage</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Why Regulated Industries Choose cyberai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: "Private AI Platform",
                desc: "Every component designed with privacy at its core—models never leave your infrastructure, ensuring complete data sovereignty. Deploy our AI operating system entirely on your infrastructure.",
                gradient: "from-orange-500 to-orange-600"
              },
              {
                icon: MdVerifiedUser,
                title: "Regulatory Expertise",
                desc: "Deep knowledge of GDPR, HIPAA, ISO 42001, EU AI Act, Basel III, and sector-specific compliance requirements built into every solution.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: MdAssessment,
                title: "Complete Auditability",
                desc: "Comprehensive audit trails for all AI operations—from data inputs to model decisions—ensuring regulatory accountability.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: MdAutorenew,
                title: "Long-Term Partnership",
                desc: "Free baseline updates over 3+ years keep your models compliant with evolving regulations and competitive with AI advances.",
                gradient: "from-green-500 to-green-600"
              }
            ].map((item, i) => (
              <div key={i} className="group flex gap-6 items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2">
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
              Ready to Transform Your Industry with Private AI?
            </h2>
            <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with cyberai to deploy compliant, private AI solutions tailored to your industry's unique regulatory requirements.
            </p>
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-3">
                Schedule Consultation
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