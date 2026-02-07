'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdArrowForward } from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our approach', href: '/platform' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl'
          : 'bg-white shadow-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
         <Link
  href="/"
  className="flex items-center space-x-4 group"
>
  {/* PART 1: LOGO */}
  <div className="relative flex items-center justify-center">
    <div className="absolute inset-0 rounded-xl blur-md group-hover:blur-lg transition-all"></div>

    <Image
      src="/11.png"
      alt="CyberAI Logo"
      width={100}
      height={80}
      className="relative z-10 rounded-xl"
    />
  </div>

  {/* PART 2: TAGLINE */}
  <div className="flex flex-col justify-center leading-tight">
    <span className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-[#EB7100] transition-colors duration-300">
      Your AI. Your Data.
    </span>
    <span className="text-xs md:text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
      Your Rules
    </span>
  </div>
</Link>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 relative group ${isActive(link.href)
                    ? 'text-[#EB7100]'
                    : 'text-gray-700 hover:text-[#EB7100]'
                  }`}
              >
                <span className="relative z-10">{link.name}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-[#EB7100]/10 to-[#EB7100]/5 rounded-xl transition-all duration-300 ${isActive(link.href)
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                  }`}></div>
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#EB7100] to-[#EB7100]/80 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link href="/contact" className="hidden lg:block">
            <button className="group bg-gradient-to-r from-[#EB7100] to-[#EB7100]/90 hover:from-[#EB7100]/90 hover:to-[#EB7100] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#EB7100]/40 flex items-center gap-2">
              Get In Touch
              <MdArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-[#EB7100]/10 transition-all duration-300 relative group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#EB7100]/10 to-[#EB7100]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {isOpen ? (
              <HiX className="w-7 h-7 text-gray-700 relative z-10 transform rotate-0 transition-transform duration-300" />
            ) : (
              <HiMenu className="w-7 h-7 text-gray-700 relative z-10" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white border-t border-gray-100 shadow-2xl">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-4 rounded-xl font-semibold transition-all duration-300 animate-fade-in-down ${isActive(link.href)
                  ? 'bg-gradient-to-r from-[#EB7100]/10 to-[#EB7100]/5 text-[#EB7100] shadow-md'
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#EB7100]/10 hover:to-[#EB7100]/5 hover:text-[#EB7100]'
                }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {isActive(link.href) && (
                  <div className="w-2 h-2 bg-gradient-to-r from-[#EB7100] to-[#EB7100]/80 rounded-full animate-pulse"></div>
                )}
              </div>
            </Link>
          ))}

          {/* CTA Button - Mobile */}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-gradient-to-r from-[#EB7100] to-[#EB7100]/90 hover:from-[#EB7100]/90 hover:to-[#EB7100] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 mt-4 shadow-lg hover:shadow-xl hover:shadow-[#EB7100]/40 flex items-center justify-center gap-2 hover:scale-[1.02] animate-fade-in-down" style={{ animationDelay: '0.35s' }}>
              Get In Touch
              <MdArrowForward className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.4s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}