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
  MdSend
} from 'react-icons/md';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
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
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MdBusiness,
      title: "Company Name",
      details: "CyberAI Technologies Ltd",
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
      details: "+44 7554898543",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: MdEmail,
      title: "Email",
      details: "ddattawala@cyberaitechs.com",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MdLanguage,
      title: "Website",
      details: "www.cyberaitechs.com",
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block mb-6 animate-fade-in-down">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
              Get In Touch
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            Contact <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">CyberAI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl animate-fade-in font-light leading-relaxed">
            Let's work together to secure your enterprise AI future
          </p>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <MdEmail className="absolute w-12 h-12 text-blue-500/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <MdPhone className="absolute w-10 h-10 text-orange-500/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <MdBusiness className="absolute w-14 h-14 text-blue-400/20 animate-float" style={{bottom: '20%', left: '20%', animationDelay: '2s'}} />
        </div>

        {/* Scroll Down Indicator */}
        
      </section>

      {/* Main Contact Section */}
      <section id="contact-info" className="py-24 px-4 bg-white scroll-mt-20">
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
                  Ready to transform your enterprise with secure AI? We're here to help you navigate your journey.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div 
                    key={i} 
                    className="group flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent animate-fade-in-up"
                    style={{animationDelay: `${i * 0.1}s`}}
                  >
                    <div className={`bg-gradient-to-br ${info.gradient} rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2 text-lg">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line font-medium">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                    <MdSend className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-blue-900">Send us a message</h2>
                </div>
                
                {isSubmitted ? (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 text-center animate-fade-in">
                    <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <FaCheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-green-800 mb-3">Message Sent!</h3>
                    <p className="text-green-700 font-medium">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                    <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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
                      <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
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
                      <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
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

                    {/* Message */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                      <label htmlFor="message" className="block text-sm font-bold text-blue-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your AI security needs..."
                        rows="5"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all resize-none font-medium"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-3 text-lg animate-fade-in-up"
                      style={{animationDelay: '0.6s'}}
                    >
                      Send Message
                      <MdSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Let's Build Secure and Compliant AI Together
          </h2>
          <p className="text-blue-200 text-xl leading-relaxed">
            Ready to deploy enterprise-grade AI inside your secure environment?
          </p>
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