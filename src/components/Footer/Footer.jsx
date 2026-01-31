'use client';

import React from 'react';
import Link from 'next/link';
import { MdSecurity, MdLocationOn, MdPhone, MdEmail, MdLanguage, MdArrowForward } from 'react-icons/md';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <Image
                  src="/logo.jpg"
                  alt="CyberAI Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 relative z-10 rounded-lg"
                />
              </div>
              <span className="text-xl font-black">CyberAI</span>
            </div>
            
            <h3 className="text-orange-400 font-bold text-lg mb-4 leading-tight">
              Making Cybersecurity & AI Simple and Affordable
            </h3>
            
            <p className="text-blue-200 leading-relaxed mb-6">
              Enterprise-grade AI and cybersecurity solutions for regulated industries.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaGithub, href: '#', label: 'GitHub' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-blue-800/50 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="font-black text-lg mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Privatised LLMs', href: '/privatised-llms' },
                { name: 'Services', href: '/services' },
                { name: 'Leadership', href: '/leadership' },
                { name: 'Contact', href: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center space-x-2 text-blue-200 hover:text-orange-400 transition-all duration-300"
                  >
                    <MdArrowForward className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="font-black text-lg mb-6 text-orange-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="group flex items-start space-x-3 hover:translate-x-1 transition-transform duration-300">
                <div className="bg-orange-500/20 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <MdLocationOn className="w-5 h-5 text-orange-400 group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <div className="text-blue-200">
                  <p className="font-medium">60 Tottenham Court Road,</p>
                  <p className="font-medium">London W1T 2EW</p>
                </div>
              </div>

              <a 
                href="tel:+447554898543" 
                className="group flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <MdPhone className="w-5 h-5 text-orange-400 group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <span className="text-blue-200 hover:text-orange-400 transition-colors font-medium">
                  +44 7554898543
                </span>
              </a>

              <a 
                href="mailto:ddattawala@cyberaitechs.com" 
                className="group flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <MdEmail className="w-5 h-5 text-orange-400 group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <span className="text-blue-200 hover:text-orange-400 transition-colors break-all font-medium">
                  ddattawala@cyberaitechs.com
                </span>
              </a>

              <a 
                href="https://www.cyberaitechs.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <MdLanguage className="w-5 h-5 text-orange-400 group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <span className="text-blue-200 hover:text-orange-400 transition-colors font-medium">
                  www.cyberaitechs.com
                </span>
              </a>
            </div>
          </div>

          {/* Column 4 - Newsletter & Legal */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h4 className="font-black text-lg mb-6 text-orange-400">Stay Updated</h4>
            
            <p className="text-blue-200 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest in AI security
            </p>

            <div className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-blue-800/50 border-2 border-blue-700 focus:border-orange-500 outline-none text-white placeholder-blue-300 transition-all"
                />
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 rounded-r-lg transition-all hover:scale-105 flex items-center justify-center">
                  <MdArrowForward className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-sm mb-3 text-blue-200">Legal</h5>
              <ul className="space-y-2">
                {[
                  { name: 'Privacy Policy', href: '/privacy-policy' },
                  { name: 'Terms of Use', href: '/terms-of-use' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href} 
                      className="text-blue-300 hover:text-orange-400 transition-colors text-sm font-medium inline-flex items-center group"
                    >
                      <span>{link.name}</span>
                      <MdArrowForward className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-300 text-sm font-medium">
              © {currentYear} CyberAI Technologies Ltd. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-blue-300 text-sm">
              <span className="flex items-center space-x-2">
                <MdSecurity className="w-4 h-4 text-orange-400" />
                <span className="font-medium">Secure by Design</span>
              </span>
              <span className="hidden md:block">•</span>
              <span className="font-medium">ISO 27001 Compliant</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </footer>
  );
}