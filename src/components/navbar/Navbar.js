import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.jpg" 
              alt="CyberAI Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">CyberAI</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-400 transition">
              About
            </Link>
            <Link href="/privatised-llms" className="hover:text-orange-400 transition">
              Privatised LLMs
            </Link>
            <Link href="/services" className="hover:text-orange-400 transition">
              Services
            </Link>
            <Link href="/leadership" className="hover:text-orange-400 transition">
              Leadership
            </Link>
            <Link href="/contact" className="hover:text-orange-400 transition">
              Contact
            </Link>
          </div>
          
          <Link href="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md font-semibold transition">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}