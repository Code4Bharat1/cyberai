"use client";
import React from 'react';
import Link from 'next/link';
import { 
  MdVerifiedUser, 
  MdGavel, 
  MdSecurity,
  MdCheckCircle,
  MdWarning,
  MdEmail,
  MdLocationOn,
  MdLanguage
} from 'react-icons/md';
import { FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function EULAPage() {
  const sections = [
    {
      number: "1.",
      title: "License Grant",
      icon: MdVerifiedUser,
      content: "Subject to your compliance with this Agreement and payment of any applicable fees, CyberAi Technologies Ltd grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Software solely for your internal business purposes within the scope of your subscription or service order."
    },
    {
      number: "2.",
      title: "Permitted Use",
      icon: MdCheckCircle,
      content: "You may use the Software to:",
      list: [
        "Deploy and run privatised Large Language Models (LLMs) and Small Language Models (SLMs) within your designated environment.",
        "Process data for internal business operations, analytics, and automation workflows.",
        "Develop and test AI-driven applications strictly for your organisation's use.",
        "Integrate the Software with your internal systems in accordance with the provided documentation."
      ]
    },
    {
      number: "3.",
      title: "Restrictions",
      icon: MdWarning,
      content: "You shall not, and shall not permit any third party to:",
      list: [
        "Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Software.",
        "Use the Software to develop a competing product or service.",
        "Use the Software for any illegal purpose, including the generation of malicious code, hate speech, or content that violates third-party rights.",
        "Bypass or disable any security features or license enforcement mechanisms within the Software.",
        "Sublicense, rent, lease, or distribute the Software to any third party without prior written consent."
      ]
    },
    {
      number: "4.",
      title: "Ownership & Intellectual Property",
      icon: FaShieldAlt,
      content: "CyberAi Technologies Ltd retains all right, title, and interest in and to the Software, including all intellectual property rights therein. This Agreement does not grant you any rights to trademarks or service marks of CyberAi Technologies Ltd. Any data provided by you (\"Customer Data\") for use with the Software remains your property. We claim no ownership over your private models or datasets processed within your isolated environment."
    },
    {
      number: "5.",
      title: "Termination",
      icon: MdGavel,
      content: "This Agreement is effective until terminated. We may terminate this Agreement immediately if you breach any of its terms. Upon termination, you must cease all use of the Software and destroy all copies in your possession. You may terminate this Agreement by discontinuing use of the Software and notifying us in writing, subject to the terms of your service contract."
    },
    {
      number: "6.",
      title: "Disclaimer of Warranties",
      icon: MdWarning,
      content: "THE SOFTWARE IS PROVIDED \"AS IS\" WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, CYBERAI TECHNOLOGIES LTD DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE OR UNINTERRUPTED.",
      isWarning: true
    },
    {
      number: "7.",
      title: "Limitation of Liability",
      icon: MdSecurity,
      content: "IN NO EVENT SHALL CYBERAI TECHNOLOGIES LTD BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SOFTWARE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.",
      isWarning: true
    },
    {
      number: "8.",
      title: "Governing Law",
      icon: MdGavel,
      content: "This Agreement shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of London, United Kingdom."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1848A0] via-[#1848A0]/90 to-[#1848A0]/80 text-white py-20 px-4 overflow-hidden mt-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute w-96 h-96 bg-[#EB7100]/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#1848A0]/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-[#EB7100]/20 px-6 py-3 rounded-full mb-6 border border-[#EB7100]/30">
            <MdGavel className="w-5 h-5 text-[#EB7100]/90" />
            <span className="text-[#EB7100]/90 font-semibold">Legal Agreement</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            End User License Agreement (EULA)
          </h1>
          
          <p className="text-lg text-blue-100 mb-6">
            CyberAi Technologies Ltd • Last Updated: October 2023
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-3xl mx-auto">
            <p className="text-white/90 leading-relaxed">
              This End User License Agreement ("Agreement") is a legal agreement between you ("Licensee" or "You") and CyberAi Technologies Ltd ("Licensor", "We", or "Us") for the use of CyberAi's software platforms, AI models, and related services (collectively, the "Software"). By installing, accessing, or using the Software, you agree to be bound by the terms of this Agreement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-[#1848A0] hover:text-[#EB7100] font-semibold mb-8 transition-colors">
            <FaArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-2 ${
                  section.isWarning 
                    ? 'border-[#EB7100]/20 bg-gradient-to-br from-orange-50/50 to-white' 
                    : 'border-gray-100'
                } p-8 hover:shadow-xl transition-all duration-300`}
              >
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    section.isWarning
                      ? 'bg-gradient-to-br from-[#EB7100] to-[#EB7100]/80'
                      : 'bg-gradient-to-br from-[#1848A0] to-[#1848A0]/80'
                  } shadow-lg`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-2xl font-black mb-2 ${
                      section.isWarning ? 'text-[#EB7100]' : 'text-[#1848A0]'
                    }`}>
                      {section.number} {section.title}
                    </h2>
                  </div>
                </div>

                {/* Section Content */}
                <div className={`${section.isWarning ? 'font-semibold' : ''}`}>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {section.content}
                  </p>

                  {section.list && (
                    <ul className="space-y-3 ml-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <MdCheckCircle className="w-5 h-5 text-[#EB7100] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border-2 border-[#1848A0]/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#EB7100] to-[#EB7100]/80 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <MdEmail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#1848A0] mb-2">
                  Questions or Concerns?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions regarding this Agreement, please contact us.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <MdLocationOn className="w-5 h-5 text-[#1848A0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Address</p>
                  <p className="text-gray-600 text-sm">
                    60 Tottenham Court Road<br />
                    London W1T 2EW
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MdEmail className="w-5 h-5 text-[#1848A0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Email</p>
                  <a 
                    href="mailto:Enquiries@cyberaitechs.com" 
                    className="text-[#EB7100] hover:text-[#1848A0] text-sm transition-colors"
                  >
                    Enquiries@cyberaitechs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MdLanguage className="w-5 h-5 text-[#1848A0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Website</p>
                  <a 
                    href="https://www.cyberaitechs.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EB7100] hover:text-[#1848A0] text-sm transition-colors"
                  >
                    www.cyberaitechs.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Acceptance Notice */}
          <div className="mt-8 bg-gradient-to-r from-[#1848A0]/10 to-[#EB7100]/10 rounded-2xl p-6 border-2 border-[#1848A0]/20">
            <div className="flex items-start gap-4">
              <FaShieldAlt className="w-6 h-6 text-[#1848A0] flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#1848A0]">By using our Software, you acknowledge that you have read, understood, and agree to be bound by this End User License Agreement.</span> If you do not agree to these terms, you must not install, access, or use the Software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}