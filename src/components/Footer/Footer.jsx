'use client';

import React from 'react';
import Link from 'next/link';
import { MdSecurity, MdLocationOn, MdPhone, MdEmail, MdLanguage } from 'react-icons/md';
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0a1628] via-[#152a4a] to-[#0a1628] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 pb-8 border-b border-white/10">

          {/* Column 1 - Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image
                    src="/12.png"
                    alt="cyberai Logo"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">
                    CyberAI
                  </span>
                  <span className="text-xs text-gray-400">
                    Technologies Ltd
                  </span>
                </div>
              </div>
            </Link>

            <h3 className="text-orange-400 font-semibold text-sm mb-3 leading-snug">
              Your AI. Your data<br />. Your rules
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Deploy enterprise-grade AI entirely within your secure infrastructure.
            </p>

            {/* Social Links */}
            <div className="flex space-x-2">
              {[
                  { icon: FaYoutube, href: "https://www.youtube.com/@cyberaitechs", label: "YouTube" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/company/cyberai-technologies-ltd/", label: "LinkedIn" },
                  { icon: FaGithub, href: "https://github.com/cyberaitechs", label: "GitHub" },
                ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-orange-500 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Industries', href: '/industries' },
                { name: 'Services', href: '/services' },
                { name: 'Leadership', href: '/leadership' },
                { name: 'Contact', href: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-orange-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-500/20 p-2 rounded-md mt-0.5">
                  <MdLocationOn className="w-4 h-4 text-orange-400 flex-shrink-0" />
                </div>
                <div className="text-gray-400 text-sm">
                  <p>60 Tottenham Court Road,</p>
                  <p>London W1T 2EW</p>
                </div>
              </div>

              <a
                href="tel:+44 7399339964"
                className="flex items-center space-x-3 group"
              >
                <div className="bg-orange-500/20 p-2 rounded-md group-hover:bg-orange-500 transition-colors">
                  <MdPhone className="w-4 h-4 text-orange-400 group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <span className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  +44 7399339964
                </span>
              </a>

              <a
                href="mailto:Enquiries@cyberaitechs.com"
                className="flex items-center space-x-3 group"
              >
                <div className="bg-orange-500/20 p-2 rounded-md group-hover:bg-orange-500 transition-colors">
                  <MdEmail className="w-4 h-4 text-orange-400 group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <span className="text-gray-400 hover:text-orange-400 transition-colors break-all text-sm">
                  Enquiries@cyberaitechs.com
                </span>
              </a>

              <a
                href="https://www.cyberaitechs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group"
              >
                <div className="bg-orange-500/20 p-2 rounded-md group-hover:bg-orange-500 transition-colors">
                  <MdLanguage className="w-4 h-4 text-orange-400 group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
                <span className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  www.cyberaitechs.com
                </span>
              </a>
            </div>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-orange-400">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Terms & Conditions', href: '/terms-of-use' },
                { name: 'EULA', href: '/eula' },
                { name: 'Privacy Notice', href: '/privacy-policy' },
                { name: 'Cookie Notice', href: '/cookie-notice' },
                { name: 'Cookie Preferences', href: '/cookie-preferences' }
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="py-6 border-b border-white/10">
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-400">* Disclaimer:</span> The content on this website is for informational purposes only and does not constitute professional advice. cyberai Technologies Ltd makes no guarantees regarding the accuracy or completeness of any information provided. AI outcomes may vary depending on use case and context. We are not liable for any losses resulting from the use of our services or website. Use of this site implies acceptance of our terms and privacy policy.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <div className="text-gray-400 text-xs text-center md:text-left">
              © {currentYear} CyberAI Technologies Ltd. All Rights Reserved.
            </div>

            {/* Developed By */}
            <div className="text-gray-400 text-xs text-center">
              Developed by{" "}
              <a
                href="https://www.nexcorealliance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition font-medium"
              >
                Nexcore Alliance
              </a>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center gap-6">

              {/* Security Badge */}
              <div className="flex items-center gap-2">
                <div className="bg-orange-500/20 p-1.5 rounded">
                  <MdSecurity className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <span className="text-xs text-gray-400">Secure by Design</span>
              </div>

              {/* Certification Badges */}
              <div className="flex items-center gap-3">

                {/* GDPR */}
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-blue-400">
                  <span className="text-[9px] font-bold text-white text-center leading-tight">
                    GDPR<br />READY
                  </span>
                </div>

                {/* ISO 27001 */}
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-blue-400">
                  <span className="text-[8px] font-bold text-white text-center leading-tight">
                    ISO<br />27001
                  </span>
                </div>

                {/* ISO 42001 */}
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center border-2 border-purple-400">
                  <span className="text-[8px] font-bold text-white text-center leading-tight">
                    ISO<br />42001
                  </span>
                </div>

                {/* EU AI Act */}
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center border-2 border-indigo-400">
                  <span className="text-[8px] font-bold text-white text-center leading-tight">
                    EU<br />AI ACT
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </footer>
  );
}