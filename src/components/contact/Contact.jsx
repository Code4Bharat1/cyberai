"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MdBusiness, 
  MdLocationOn, 
  MdPhone, 
  MdEmail, 
  MdLanguage,
  MdLocationCity,
  MdSend,
  MdSchedule,
  MdChat,
  MdVideoCall,
  MdPerson,
  MdAssignment
} from 'react-icons/md';
import { 
  FaArrowRight, 
  FaCheckCircle, 
  FaWhatsapp, 
  FaLinkedin,
  FaCalendar,
  FaShieldAlt,
  FaClock,
  FaGlobe
} from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.fullName}
*Company:* ${formData.companyName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Industry:* ${formData.industry}
*Inquiry Type:* ${formData.inquiryType}

*Message:*
${formData.message}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number
    const whatsappNumber = '447554898543';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Show success message
    setIsSubmitted(true);
    
    // Redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      
      // Reset form after redirect
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          industry: '',
          inquiryType: '',
          message: ''
        });
      }, 1000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MdBusiness,
      title: "Company Name",
      details: "Cyberai Technologies Ltd",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MdLocationOn,
      title: "Headquarters",
      details: "60 Tottenham Court Road,\nLondon W1T 2EW",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: MdPhone,
      title: "Phone",
      details: "+44 7554 898543",
      gradient: "from-purple-500 to-purple-600",
      link: "tel:+447554898543"
    },
    {
      icon: MdEmail,
      title: "Email",
      details: "ddattawala@cyberaitechs.com",
      gradient: "from-green-500 to-green-600",
      link: "mailto:ddattawala@cyberaitechs.com"
    },
    {
      icon: MdLanguage,
      title: "Website",
      details: "www.cyberaitechs.com",
      gradient: "from-pink-500 to-pink-600",
      link: "https://www.cyberaitechs.com"
    }
  ];

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp Chat",
      description: "Get instant responses via WhatsApp",
      action: "Chat Now",
      link: "https://wa.me/447554898543",
      gradient: "from-green-500 to-green-600",
      featured: true
    },
    {
      icon: MdVideoCall,
      title: "Video Consultation",
      description: "Schedule a video call with our team",
      action: "Book Call",
      link: "#contact-form",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MdEmail,
      title: "Email Us",
      description: "Send us a detailed inquiry",
      action: "Send Email",
      link: "mailto:ddattawala@cyberaitechs.com",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      description: "Connect with us professionally",
      action: "Connect",
      link: "https://www.linkedin.com/company/cyberai-tech",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const industries = [
    "Banking & Financial Services",
    "Healthcare & Life Sciences",
    "Government & Public Sector",
    "Insurance",
    "Oil & Gas",
    "Logistics & Supply Chain",
    "Other"
  ];

  const inquiryTypes = [
    "AI Readiness Assessment",
    "Custom AI Development",
    "AI Security & Governance",
    "General Inquiry",
    "Partnership Opportunity"
  ];

  const responseTime = [
    {
      icon: FaClock,
      title: "Response Time",
      value: "< 24 Hours",
      description: "We respond to all inquiries within one business day"
    },
    {
      icon: FaGlobe,
      title: "Global Coverage",
      value: "6 Regions",
      description: "Supporting clients across UK, Europe, Americas, Middle East, and Asia"
    },
    {
      icon: FaShieldAlt,
      title: "Confidential",
      value: "100% Secure",
      description: "All communications are encrypted and confidential"
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-32 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-6 border border-orange-500/30 animate-fade-in-down">
              <MdEmail className="w-5 h-5 text-orange-300" />
              <span className="text-orange-300 font-semibold">Get In Touch</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
              Contact <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Cyberai</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 animate-fade-in font-light leading-relaxed">
              Let's work together to secure your enterprise AI future
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {responseTime.map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl font-black text-white mb-1">{item.value}</div>
                  <div className="text-sm text-blue-100 font-medium mb-2">{item.title}</div>
                  <div className="text-xs text-blue-200">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <MdEmail className="absolute w-12 h-12 text-blue-300/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <MdPhone className="absolute w-10 h-10 text-orange-400/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <MdBusiness className="absolute w-14 h-14 text-cyan-300/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">How to Reach Us</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
              Choose Your Preferred Method
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer multiple ways to connect with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                onClick={(e) => {
                  if (method.link === '#contact-form') {
                    e.preventDefault();
                    scrollToSection('contact-form');
                  }
                }}
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${method.featured ? 'border-green-200 bg-gradient-to-br from-green-50 to-white' : 'border-gray-100'} hover:border-transparent hover:-translate-y-2 animate-fade-in-up cursor-pointer`}
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className={`bg-gradient-to-br ${method.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 text-center group-hover:text-orange-500 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {method.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  {method.action}
                  <FaArrowRight className="w-3 h-3" />
                </div>
                {method.featured && (
                  <div className="mt-4 text-center">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-300">
                      Recommended
                    </span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-form" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Contact Details</span>
                  <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mt-2"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 leading-tight">
                  Get In Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Ready to transform your enterprise with secure AI? We're here to help you navigate your journey 
                  from assessment to deployment.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.link || '#'}
                    target={info.link && info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link && info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`group flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent animate-fade-in-up block ${info.link ? 'cursor-pointer' : 'cursor-default'}`}
                    style={{animationDelay: `${i * 0.1}s`}}
                  >
                    <div className={`bg-gradient-to-br ${info.gradient} rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2 text-lg">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line font-medium group-hover:text-blue-600 transition-colors">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 pt-4">
                <a
                  href="https://wa.me/447554898543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-green-500/50"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  Chat on WhatsApp
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:ddattawala@cyberaitechs.com"
                  className="group flex items-center justify-center gap-3 bg-white border-2 border-blue-200 hover:border-blue-500 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MdEmail className="w-6 h-6" />
                  Send Email
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-slide-in-right text-black">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                    <MdSend className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-blue-900">Send Message</h2>
                    <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                {isSubmitted ? (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 text-center animate-fade-in">
                    <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <FaCheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-green-800 mb-3">Message Received!</h3>
                    <p className="text-green-700 font-medium mb-4">Redirecting to WhatsApp...</p>
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <FaWhatsapp className="w-6 h-6 animate-pulse" />
                      <span className="font-semibold">Opening WhatsApp</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                      <label htmlFor="fullName" className="block text-sm font-bold text-blue-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium"
                        required
                      />
                    </div>

                    {/* Company Name */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.15s'}}>
                      <label htmlFor="companyName" className="block text-sm font-bold text-blue-900 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium"
                        required
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        <label htmlFor="email" className="block text-sm font-bold text-blue-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium"
                          required
                        />
                      </div>
                      <div className="animate-fade-in-up" style={{animationDelay: '0.25s'}}>
                        <label htmlFor="phone" className="block text-sm font-bold text-blue-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 7000 000000"
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium"
                          required
                        />
                      </div>
                    </div>

                    {/* Industry and Inquiry Type */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                        <label htmlFor="industry" className="block text-sm font-bold text-blue-900 mb-2">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium bg-white"
                          required
                        >
                          <option value="">Select Industry</option>
                          {industries.map((ind, i) => (
                            <option key={i} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>
                      <div className="animate-fade-in-up" style={{animationDelay: '0.35s'}}>
                        <label htmlFor="inquiryType" className="block text-sm font-bold text-blue-900 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium bg-white"
                          required
                        >
                          <option value="">Select Type</option>
                          {inquiryTypes.map((type, i) => (
                            <option key={i} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                      <label htmlFor="message" className="block text-sm font-bold text-blue-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your AI security needs and challenges..."
                        rows="4"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all resize-none font-medium"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-3 text-lg animate-fade-in-up"
                      style={{animationDelay: '0.45s'}}
                    >
                      Send via WhatsApp
                      <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>

                    <p className="text-center text-sm text-gray-500 italic">
                      Your message will be sent directly to our WhatsApp for immediate attention
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Our Process</span>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Here's what you can expect after reaching out
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Initial Response",
                desc: "We'll respond within 24 hours to acknowledge your inquiry",
                icon: MdChat,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Discovery Call",
                desc: "Schedule a consultation to discuss your needs and challenges",
                icon: MdVideoCall,
                gradient: "from-orange-500 to-orange-600"
              },
              {
                step: "03",
                title: "Solution Design",
                desc: "We'll create a tailored proposal for your organization",
                icon: MdAssignment,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                step: "04",
                title: "Partnership",
                desc: "Begin your secure AI journey with expert guidance",
                icon: FaShieldAlt,
                gradient: "from-green-500 to-green-600"
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2 animate-fade-in-up relative"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  {item.step}
                </div>
                <div className={`bg-gradient-to-br ${item.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md mx-auto mt-4`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Let's Build Secure and Compliant AI Together
          </h2>
          <p className="text-blue-200 text-xl mb-8 leading-relaxed">
            Ready to deploy enterprise-grade AI inside your secure environment?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/447554898543"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-green-500/50 inline-flex items-center justify-center gap-3"
            >
              <FaWhatsapp className="w-6 h-6" />
              Start WhatsApp Chat
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('contact-form')}
              className="group bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-white/20 inline-flex items-center justify-center gap-3"
            >
              <MdEmail className="w-6 h-6" />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 bg-gray-300">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop')",
            filter: "grayscale(100%)"
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Office Location Card */}
        <div className="relative h-full flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md mx-4 animate-fade-in-up hover:scale-105 transition-transform duration-500">
            <div className="flex items-start space-x-5">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 shadow-lg">
                <MdLocationCity className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-blue-900 mb-3">London Office</h3>
                <p className="text-gray-600 font-medium text-lg">60 Tottenham Court Road</p>
                <p className="text-gray-500 font-medium">London W1T 2EW</p>
                <p className="text-gray-500 font-medium">United Kingdom</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-blue-900">Business Hours:</span><br/>
                    Monday - Friday: 9:00 AM - 6:00 PM GMT
                  </p>
                </div>
              </div>
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