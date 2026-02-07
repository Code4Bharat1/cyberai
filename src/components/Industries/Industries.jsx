"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
  MdDeviceHub,
  MdElectricBolt,
  MdWater,
  MdSignalCellularAlt,
  MdTrain,
  MdFlight,
  MdDirectionsCar,
  MdGavel,
  MdGames,
  MdWarning,
  MdRestaurant,
  MdLocalPharmacy
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
  FaBroadcastTower,
  FaNewspaper,
  FaGavel
} from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function IndustriesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Track active section for navigation highlighting
      const sections = industries.map(ind => ind.id);
      const currentSection = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  const industries = useMemo(() => [
    {
      id: "financial-services",
      icon: MdAccountBalance,
      title: "Financial Services & Markets",
      shortDesc: "Highly regulated to prevent fraud, ensure stability, and protect consumers.",
      examples: "Banking, insurance, investment firms, fintech, and mortgage lenders",
      desc: "Financial institutions face unprecedented regulatory scrutiny while needing AI to remain competitive. Our AI platform enables banks and financial services firms to leverage cutting-edge AI capabilities while maintaining complete data sovereignty and regulatory compliance.",
      tags: ["Data Sovereignty", "Regulatory Compliance", "Audit-Ready AI"],
      gradient: "from-[#1848A0] to-[#1848A0]/80",
      accentColor: "#1848A0",
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
      id: "utilities",
      icon: MdElectricBolt,
      title: "Utilities (Energy & Water)",
      shortDesc: "Economic regulation to manage pricing, infrastructure, and service quality.",
      examples: "Electricity, gas, and water companies",
      desc: "Utility companies must balance operational efficiency with stringent regulatory requirements around pricing, service quality, and infrastructure management. Our AI platform enables secure deployment of AI solutions that optimize operations while maintaining compliance.",
      tags: ["Infrastructure Security", "Regulatory Pricing", "Service Quality"],
      gradient: "from-[#EB7100] to-[#EB7100]/80",
      accentColor: "#EB7100",
      challenges: [
        { title: "Critical Infrastructure Protection", desc: "Secure essential services from cyber threats", icon: FaShieldAlt },
        { title: "Regulatory Pricing", desc: "Comply with economic regulation on pricing structures", icon: FaMoneyBillWave },
        { title: "Grid Management", desc: "Optimize complex distribution networks", icon: MdDeviceHub },
        { title: "Environmental Compliance", desc: "Meet sustainability and environmental standards", icon: MdVerifiedUser }
      ],
      useCases: [
        { title: "Predictive Maintenance", desc: "AI-powered infrastructure monitoring and maintenance", icon: FaCog },
        { title: "Demand Forecasting", desc: "Predict energy and water consumption patterns", icon: FaChartLine },
        { title: "Grid Optimization", desc: "Real-time optimization of distribution networks", icon: MdSpeed },
        { title: "Outage Detection", desc: "Rapid identification and response to service disruptions", icon: MdMonitor },
        { title: "Customer Service", desc: "Automated billing inquiries and service requests", icon: FaRobot },
        { title: "Compliance Reporting", desc: "Automated regulatory compliance documentation", icon: MdAssessment }
      ],
      benefits: [
        "Secure AI for critical infrastructure protection",
        "Improved operational efficiency and reliability",
        "Compliance with economic and environmental regulations",
        "Enhanced customer service and satisfaction"
      ]
    },
    {
      id: "communications-media",
      icon: FaBroadcastTower,
      title: "Communications & Media",
      shortDesc: "Oversight of broadcasting, internet, and phone services.",
      examples: "Telecom operators, broadcasters, postal services",
      desc: "Communications and media companies operate under strict regulations governing content, data privacy, and service quality. Our AI platform enables innovation while ensuring compliance with broadcasting standards and telecommunications regulations.",
      tags: ["Content Compliance", "Data Privacy", "Service Quality"],
      gradient: "from-[#1848A0] to-[#1848A0]/80",
      accentColor: "#1848A0",
      challenges: [
        { title: "Content Regulation", desc: "Comply with broadcasting and content standards", icon: FaNewspaper },
        { title: "Data Privacy", desc: "Protect user communications and personal data", icon: FaUserShield },
        { title: "Network Security", desc: "Secure telecommunications infrastructure", icon: FaShieldAlt },
        { title: "Service Quality", desc: "Maintain regulatory service level requirements", icon: MdSpeed }
      ],
      useCases: [
        { title: "Content Moderation", desc: "AI-powered content review and compliance", icon: MdVerifiedUser },
        { title: "Network Optimization", desc: "Optimize telecommunications infrastructure", icon: MdSignalCellularAlt },
        { title: "Customer Analytics", desc: "Secure analysis of customer behavior and preferences", icon: FaChartLine },
        { title: "Fraud Prevention", desc: "Detect and prevent telecommunications fraud", icon: FaShieldAlt },
        { title: "Service Automation", desc: "Automated customer support and service provisioning", icon: FaRobot },
        { title: "Quality Monitoring", desc: "Real-time service quality assessment", icon: MdMonitor }
      ],
      benefits: [
        "Compliant content management and moderation",
        "Protected customer communications and data",
        "Improved network efficiency and reliability",
        "Enhanced customer experience with AI automation"
      ]
    },
    {
      id: "healthcare",
      icon: MdLocalHospital,
      title: "Healthcare & Social Care",
      shortDesc: "Strict standards for quality of care, safety, and professional conduct.",
      examples: "NHS trusts, private hospitals, care homes, dental services",
      desc: "Healthcare organizations must balance innovation with patient privacy and regulatory compliance. Our AI platform enables AI-powered healthcare solutions that meet HIPAA, GDPR, and other health data regulations while keeping sensitive patient information secure.",
      tags: ["Patient Data Protection", "HIPAA Compliance", "Privacy-First AI"],
      gradient: "from-emerald-500 to-emerald-700",
      accentColor: "#10b981",
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
      id: "transportation",
      icon: MdTrain,
      title: "Transportation",
      shortDesc: "Safety standards, licensing, and infrastructure management.",
      examples: "Rail, road transport, aviation",
      desc: "Transportation companies operate under strict safety regulations while needing AI to optimize operations and improve passenger experience. Our AI platform enables secure AI deployment that enhances safety, efficiency, and compliance.",
      tags: ["Safety Compliance", "Infrastructure Management", "Operational Efficiency"],
      gradient: "from-[#EB7100] to-[#EB7100]/80",
      accentColor: "#EB7100",
      challenges: [
        { title: "Safety Standards", desc: "Meet rigorous transportation safety requirements", icon: FaShieldAlt },
        { title: "Regulatory Licensing", desc: "Comply with licensing and certification standards", icon: MdVerifiedUser },
        { title: "Infrastructure Security", desc: "Protect critical transportation infrastructure", icon: FaDatabase },
        { title: "Real-time Operations", desc: "Manage AI-driven decisions at operational speed", icon: MdSpeed }
      ],
      useCases: [
        { title: "Predictive Maintenance", desc: "AI-powered vehicle and infrastructure maintenance", icon: FaCog },
        { title: "Route Optimization", desc: "Optimize schedules and routes for efficiency", icon: MdLocalShipping },
        { title: "Safety Monitoring", desc: "Real-time safety and compliance monitoring", icon: MdMonitor },
        { title: "Passenger Analytics", desc: "Improve passenger experience and service planning", icon: FaChartLine },
        { title: "Incident Response", desc: "AI-assisted incident detection and response", icon: FaExclamationTriangle },
        { title: "Capacity Planning", desc: "Optimize fleet and infrastructure capacity", icon: MdAssessment }
      ],
      benefits: [
        "Enhanced safety through predictive AI",
        "Improved operational efficiency and on-time performance",
        "Compliance with transportation safety regulations",
        "Better passenger experience and satisfaction"
      ]
    },
    {
      id: "legal-professional",
      icon: MdGavel,
      title: "Legal and Professional Services",
      shortDesc: "Regulated professions requiring certifications and ethical standards.",
      examples: "Solicitors, barristers, accountants",
      desc: "Professional services firms must maintain strict client confidentiality and regulatory compliance. Our AI platform enables AI adoption that protects client data and maintains professional standards while improving service delivery.",
      tags: ["Client Confidentiality", "Professional Standards", "Ethical AI"],
      gradient: "from-[#1848A0] to-[#1848A0]/80",
      accentColor: "#1848A0",
      challenges: [
        { title: "Client Confidentiality", desc: "Protect privileged client information and data", icon: FaUserShield },
        { title: "Professional Ethics", desc: "Maintain ethical standards in AI deployment", icon: MdVerifiedUser },
        { title: "Regulatory Compliance", desc: "Meet profession-specific regulatory requirements", icon: FaGavel },
        { title: "Liability Management", desc: "Ensure accountability for AI-assisted work", icon: FaExclamationTriangle }
      ],
      useCases: [
        { title: "Document Analysis", desc: "AI-powered contract and document review", icon: MdStorage },
        { title: "Legal Research", desc: "Secure AI-assisted legal research and precedent analysis", icon: MdAssessment },
        { title: "Compliance Monitoring", desc: "Automated regulatory compliance checking", icon: MdSecurity },
        { title: "Client Communication", desc: "Secure client portals and automated updates", icon: FaRobot },
        { title: "Risk Assessment", desc: "AI-powered legal and financial risk analysis", icon: FaChartLine },
        { title: "Workflow Automation", desc: "Streamline administrative and billing processes", icon: FaCog }
      ],
      benefits: [
        "Complete client confidentiality and data protection",
        "Maintained professional standards and ethics",
        "Improved efficiency in research and document review",
        "Enhanced client service and communication"
      ]
    },
    {
      id: "gaming-gambling",
      icon: MdGames,
      title: "Gaming/Gambling",
      shortDesc: "Licensing for betting and gaming operations.",
      examples: "Casinos, betting operators, online gaming platforms",
      desc: "Gaming and gambling operators must comply with strict licensing requirements and responsible gaming regulations. Our AI platform enables secure AI deployment for fraud detection, responsible gaming, and regulatory compliance.",
      tags: ["Licensing Compliance", "Fraud Prevention", "Responsible Gaming"],
      gradient: "from-purple-500 to-purple-700",
      accentColor: "#a855f7",
      challenges: [
        { title: "Licensing Requirements", desc: "Comply with gaming authority licensing standards", icon: MdVerifiedUser },
        { title: "Fraud Detection", desc: "Identify fraudulent activities and money laundering", icon: FaShieldAlt },
        { title: "Responsible Gaming", desc: "Implement AI for problem gambling detection", icon: FaUserShield },
        { title: "Data Protection", desc: "Secure customer data and financial transactions", icon: FaDatabase }
      ],
      useCases: [
        { title: "Fraud Detection", desc: "Real-time detection of suspicious betting patterns", icon: FaShieldAlt },
        { title: "Player Protection", desc: "AI-powered responsible gaming monitoring", icon: MdVerifiedUser },
        { title: "Risk Management", desc: "Optimize odds and manage operational risk", icon: FaChartLine },
        { title: "Customer Analytics", desc: "Personalized gaming experience within compliance", icon: MdPsychology },
        { title: "Compliance Reporting", desc: "Automated regulatory reporting and audit trails", icon: MdAssessment },
        { title: "AML Monitoring", desc: "Anti-money laundering transaction monitoring", icon: MdSecurity }
      ],
      benefits: [
        "Comprehensive fraud detection and prevention",
        "Responsible gaming AI within regulatory frameworks",
        "Complete audit trails for licensing compliance",
        "Protected customer data and transactions"
      ]
    },
    {
      id: "nuclear",
      icon: MdWarning,
      title: "Nuclear Industry",
      shortDesc: "Safety and environmental regulations.",
      examples: "Nuclear power plants, nuclear waste management, decommissioning",
      desc: "The nuclear industry operates under the strictest safety and environmental regulations. Our AI platform enables secure AI deployment for operational optimization while maintaining the highest safety and security standards.",
      tags: ["Safety Critical", "Environmental Compliance", "Maximum Security"],
      gradient: "from-red-500 to-red-700",
      accentColor: "#ef4444",
      challenges: [
        { title: "Safety Regulations", desc: "Meet nuclear safety authority requirements", icon: FaShieldAlt },
        { title: "Environmental Protection", desc: "Comply with environmental and waste management standards", icon: MdVerifiedUser },
        { title: "Security Requirements", desc: "Protect critical nuclear infrastructure and data", icon: FaDatabase },
        { title: "Incident Prevention", desc: "Ensure highest levels of operational safety", icon: FaExclamationTriangle }
      ],
      useCases: [
        { title: "Safety Monitoring", desc: "Real-time AI-powered safety system monitoring", icon: MdMonitor },
        { title: "Predictive Maintenance", desc: "Critical equipment failure prediction and prevention", icon: FaCog },
        { title: "Environmental Monitoring", desc: "Continuous environmental impact assessment", icon: MdAssessment },
        { title: "Operational Optimization", desc: "Safe optimization of plant operations", icon: MdSpeed },
        { title: "Incident Analysis", desc: "AI-assisted incident prediction and analysis", icon: FaExclamationTriangle },
        { title: "Compliance Documentation", desc: "Automated safety and regulatory reporting", icon: MdStorage }
      ],
      benefits: [
        "Enhanced safety through predictive AI monitoring",
        "Compliance with nuclear safety regulations",
        "Complete data sovereignty for critical systems",
        "Improved operational efficiency with maintained safety"
      ]
    },
    {
      id: "manufacturing-food-pharma",
      icon: MdRestaurant,
      title: "Manufacturing (Food & Pharma)",
      shortDesc: "Product safety and hygiene laws.",
      examples: "Food processing, pharmaceutical manufacturing, medical devices",
      desc: "Food and pharmaceutical manufacturers must comply with strict product safety, quality, and hygiene regulations. Our AI platform enables AI-powered quality control and compliance while protecting proprietary formulations and processes.",
      tags: ["Quality Assurance", "Safety Compliance", "IP Protection"],
      gradient: "from-[#EB7100] to-[#EB7100]/80",
      accentColor: "#EB7100",
      challenges: [
        { title: "Product Safety", desc: "Meet FDA, FSA, and other safety authority requirements", icon: MdVerifiedUser },
        { title: "Quality Control", desc: "Maintain strict quality and hygiene standards", icon: FaShieldAlt },
        { title: "IP Protection", desc: "Protect proprietary formulations and processes", icon: FaDatabase },
        { title: "Traceability", desc: "Complete product traceability and recall management", icon: MdAssessment }
      ],
      useCases: [
        { title: "Quality Inspection", desc: "AI-powered visual quality control and defect detection", icon: MdMonitor },
        { title: "Process Optimization", desc: "Optimize manufacturing processes within compliance", icon: FaCog },
        { title: "Contamination Detection", desc: "Early detection of contamination and quality issues", icon: FaShieldAlt },
        { title: "Supply Chain Management", desc: "Track and trace ingredients and products", icon: MdLocalShipping },
        { title: "Compliance Documentation", desc: "Automated regulatory compliance reporting", icon: MdStorage },
        { title: "Predictive Maintenance", desc: "Equipment maintenance to prevent contamination", icon: MdSpeed }
      ],
      benefits: [
        "Enhanced product safety and quality assurance",
        "Compliance with food and pharmaceutical regulations",
        "Protection of proprietary formulations and IP",
        "Complete traceability for regulatory requirements"
      ]
    }
  ], []);

  const commonChallenges = useMemo(() => [
    {
      title: "Data Sovereignty & Privacy",
      desc: "Full control over where your data resides and how it's processed, with models deployed entirely within your infrastructure",
      icon: FaShieldAlt,
      gradient: "from-[#1848A0] to-[#1848A0]/80"
    },
    {
      title: "Regulatory Compliance",
      desc: "Built-in compliance with GDPR, HIPAA, ISO 42001, EU AI Act, and sector-specific regulations through governance frameworks",
      icon: MdSecurity,
      gradient: "from-[#EB7100] to-[#EB7100]/80"
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
  ], []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1848A0] via-[#1848A0]/90 to-[#1848A0]/80 text-white py-32 px-4 overflow-hidden mt-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute w-96 h-96 bg-[#EB7100]/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#1848A0]/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-[#EB7100]/20 px-6 py-3 rounded-full mb-6 border border-[#EB7100]/30 animate-fade-in-down">
            <FaShieldAlt className="w-5 h-5 text-[#EB7100]/80" aria-hidden="true" />
            <span className="text-[#EB7100]/90 font-semibold">Regulated Industries</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            Industries <span className="bg-gradient-to-r from-[#EB7100] to-[#EB7100]/80 bg-clip-text text-transparent">We Serve</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 animate-fade-in font-light leading-relaxed">
            Private AI platform for regulated and data-sensitive industries
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            {[
              { value: "9+", label: "Industries Served" },
              { value: "100%", label: "Data Sovereignty" },
              { value: "Full", label: "Compliance" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-black text-[#EB7100] mb-1">{stat.value}</div>
                <div className="text-xs text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <MdAccountBalance className="absolute w-12 h-12 text-blue-300/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <FaShieldAlt className="absolute w-10 h-10 text-[#EB7100]/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <MdLocalHospital className="absolute w-14 h-14 text-cyan-300/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-[#EB7100] font-bold text-sm tracking-widest uppercase">AI Platform for Regulated Industries</span>
            <div className="h-1 w-20 bg-gradient-to-r from-[#EB7100] to-transparent mx-auto mt-2"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#1848A0] mb-6">
            Built for Regulated Environments
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We understand the unique challenges faced by heavily regulated industries. Our AI platform is purpose-built to meet the stringent security, compliance, and data sovereignty requirements of sectors where data protection is paramount. Deploy private LLM and SLM solutions entirely within your infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: MdLock,
                title: "Private by Design",
                desc: "Models trained and deployed entirely within your infrastructure",
                color: "[#1848A0]"
              },
              {
                icon: MdVerifiedUser,
                title: "Compliance First",
                desc: "Built-in governance aligned with industry regulations",
                color: "[#EB7100]"
              },
              {
                icon: MdAssessment,
                title: "Fully Auditable",
                desc: "Complete transparency for all AI operations",
                color: "green-600"
              }
            ].map((feature, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-${feature.color === '[#1848A0]' ? '[#1848A0]' : feature.color === '[#EB7100]' ? '[#EB7100]' : 'green'}/5 to-${feature.color === '[#1848A0]' ? '[#1848A0]' : feature.color === '[#EB7100]' ? '[#EB7100]' : 'green'}/10 rounded-2xl p-6 border-2 border-${feature.color === '[#1848A0]' ? '[#1848A0]' : feature.color === '[#EB7100]' ? '[#EB7100]' : 'green'}/20 hover:shadow-lg transition-shadow`}>
                <feature.icon className={`w-12 h-12 text-${feature.color} mx-auto mb-3`} />
                <h3 className="font-bold text-[#1848A0] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Overview Grid */}
      <section id="industries" className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#EB7100] font-bold text-sm tracking-widest uppercase">Industry Solutions</span>
              <div className="h-1 w-20 bg-gradient-to-r from-[#EB7100] to-transparent mx-auto mt-2"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-[#1848A0] mb-6">
              Sector-Specific AI Solutions
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Tailored AI governance frameworks for your industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <article 
                key={industry.id} 
                onClick={() => scrollToSection(industry.id)}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both`}}
              >
                {/* Industry Header with Icon */}
                <div className="relative h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1848A0]/20 to-[#EB7100]/20"></div>
                  
                  {/* Animated Particles */}
                  <div className="absolute inset-0 opacity-30" aria-hidden="true">
                    <div className="absolute top-8 left-8 w-20 h-20 border border-[#1848A0]/50 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 right-8 w-24 h-24 border border-[#EB7100]/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-16 right-12 w-16 h-16 border border-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>

                  {/* Industry Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`bg-gradient-to-br ${industry.gradient} w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <industry.icon className="w-14 h-14 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Industry Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-[#1848A0] mb-4 group-hover:text-[#EB7100] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {industry.shortDesc}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    <span className="font-semibold">Examples:</span> {industry.examples}
                  </p>
                  
                  {/* Tags */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Key Capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.tags.map((tag, j) => (
                        <span 
                          key={j}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1848A0]/10 to-[#1848A0]/5 text-[#1848A0] px-3 py-2 rounded-lg text-xs font-bold border border-[#1848A0]/20 hover:border-[#1848A0]/40 hover:shadow-md transition-all duration-300"
                        >
                          <FaCheck className="w-3 h-3" aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-[#EB7100] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Details
                    <FaArrowRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, idx) => (
        <section 
          key={industry.id} 
          id={industry.id} 
          className={`py-10 px-4 scroll-mt-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-gray-50 to-white'}`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Industry Header */}
            <header className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-br ${industry.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl`}>
                  <industry.icon className="w-9 h-9 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-[#1848A0]">
                  {industry.title}
                </h2>
              </div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                {industry.desc}
              </p>
            </header>

            {/* Challenges */}
            <div className="mb-16">
              <h3 className="text-3xl font-black text-[#1848A0] mb-8 text-center">Industry Challenges We Address</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {industry.challenges.map((challenge, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className={`bg-gradient-to-br ${industry.gradient} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <challenge.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1848A0] mb-2">{challenge.title}</h4>
                      <p className="text-gray-600 text-sm">{challenge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h3 className="text-3xl font-black text-[#1848A0] mb-8 text-center">AI Use Cases</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {industry.useCases.map((useCase, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${industry.gradient} rounded-xl mb-4 shadow-md`}>
                      <useCase.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h4 className="font-bold text-[#1848A0] mb-2">{useCase.title}</h4>
                    <p className="text-gray-600 text-sm">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className={`bg-gradient-to-br ${industry.gradient} rounded-3xl p-10 text-white shadow-2xl`}>
              <h3 className="text-3xl font-black mb-6 text-center">Key Benefits for {industry.title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {industry.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <MdCheckCircle className="w-6 h-6 flex-shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-white/90">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Common Challenges Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#EB7100] font-bold text-sm tracking-widest uppercase">Cross-Industry</span>
              <div className="h-1 w-20 bg-gradient-to-r from-[#EB7100] to-transparent mx-auto mt-2"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#1848A0] mb-6">
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
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both`}}
              >
                <div className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#1848A0] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CyberAi for Regulated Industries */}
      <section className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#EB7100] font-bold text-sm tracking-widest uppercase">Our Advantage</span>
              <div className="h-1 w-20 bg-gradient-to-r from-[#EB7100] to-transparent mx-auto mt-2"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#1848A0] mb-6">
              Why Regulated Industries Choose CyberAi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: "Private AI Platform",
                desc: "Every component designed with privacy at its core—models never leave your infrastructure, ensuring complete data sovereignty. Deploy our AI operating system entirely on your infrastructure.",
                gradient: "from-[#EB7100] to-[#EB7100]/80"
              },
              {
                icon: MdVerifiedUser,
                title: "Regulatory Expertise",
                desc: "Deep knowledge of GDPR, HIPAA, ISO 42001, EU AI Act, Basel III, and sector-specific compliance requirements built into every solution.",
                gradient: "from-[#1848A0] to-[#1848A0]/80"
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
                  <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1848A0] mb-3 group-hover:text-[#EB7100] transition-colors">
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
      <section className="relative bg-gradient-to-br from-[#1848A0] via-[#1848A0]/90 to-slate-900 text-white py-10 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute w-96 h-96 bg-[#EB7100]/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#1848A0]/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-[#EB7100]/20 px-6 py-3 rounded-full mb-8 border border-[#EB7100]/30">
              <FaShieldAlt className="w-6 h-6 text-[#EB7100]/80" aria-hidden="true" />
              <span className="text-[#EB7100]/90 font-semibold">Industry Expertise</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to Transform Your Industry with Private AI?
            </h2>
            <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with CyberAi to deploy compliant, private AI solutions tailored to your industry's unique regulatory requirements.
            </p>
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-[#EB7100] to-[#EB7100]/90 hover:from-[#EB7100]/90 hover:to-[#EB7100] px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-[#EB7100]/50 inline-flex items-center gap-3">
                Schedule Consultation
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
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
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
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

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </div>
  );
}