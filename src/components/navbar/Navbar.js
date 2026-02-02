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
    { name: 'About', href: '/about' },
    { name: 'Platform', href: '/platform' },
    { name: 'Privatised LLMs', href: '/privatised-llms' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Leadership', href: '/leadership' }
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl' 
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <Image 
                  src="/logo.jpg" 
                  alt="CyberAI Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8 relative z-10 rounded-lg"
                />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
              CyberAI
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl transition-all duration-300 ${
                  isActive(link.href) 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                }`}></div>
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
          
          {/* CTA Button - Desktop */}
          <Link href="/contact" className="hidden lg:block">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 flex items-center gap-2">
              Get In Touch
              <MdArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-orange-50 transition-all duration-300 relative group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white border-t border-gray-100 shadow-2xl">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-4 rounded-xl font-semibold transition-all duration-300 animate-fade-in-down ${
                isActive(link.href)
                  ? 'bg-gradient-to-r from-orange-50 to-orange-100/50 text-orange-500 shadow-md'
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/50 hover:text-orange-500'
              }`}
              style={{animationDelay: `${i * 0.05}s`}}
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {isActive(link.href) && (
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse"></div>
                )}
              </div>
            </Link>
          ))}
          
          {/* CTA Button - Mobile */}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 mt-4 shadow-lg hover:shadow-xl hover:shadow-orange-500/40 flex items-center justify-center gap-2 hover:scale-[1.02] animate-fade-in-down" style={{animationDelay: '0.35s'}}>
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