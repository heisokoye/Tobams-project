"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#5B1947] rounded-md p-1">
          <Image
            src="/logo.png"
            alt="Tobams Group Logo"
            width={160}
            height={46}
            priority
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </Link>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Account Dropdown Button */}
          <button
            type="button"
            className="flex items-center gap-2.5 bg-[#5B1947] hover:bg-[#471237] text-white font-medium px-4 py-2.5 rounded-md text-sm transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#5B1947]"
          >
            <span className="w-7 h-7 rounded-full border border-white/40 bg-white/10 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </span>
            <span>Account</span>
            <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Take Assessment Button */}
          <Link
            href="#assessment"
            className="bg-[#E84D58] hover:bg-[#d63d48] text-white font-medium px-5 py-2.5 rounded-md text-sm transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#E84D58]"
          >
            Take Assessment
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md bg-[#5B1947] text-white hover:bg-[#471237] focus:outline-none focus:ring-2 focus:ring-[#5B1947]"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Secondary Navigation Bar (Desktop) */}
      <div className="hidden md:block bg-white border-t border-pink-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <nav aria-label="Main Navigation" className="flex items-center justify-center gap-6 lg:gap-8 overflow-x-auto text-sm font-medium py-3">
            <Link
              href="#about"
              className="text-brand-purple font-bold border-b-2 border-brand-purple pb-1 flex items-center gap-1 shrink-0"
            >
              <span>About</span>
              <svg className="w-3.5 h-3.5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link
              href="#what-we-do"
              className="text-gray-700 hover:text-brnad-purple pb-1 flex items-center gap-1 transition-colors shrink-0"
            >
              <span>What We Do</span>
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link
              href="#jobs"
              className="text-gray-700 hover:text-brand-purple pb-1 flex items-center gap-1 transition-colors shrink-0"
            >
              <span>Jobs</span>
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link href="#projects" className="text-gray-700 hover:text-brand-purple pb-1 transition-colors shrink-0">
              Projects
            </Link>

            <Link href="#tg-academy" className="text-gray-700 hover:text-brand-purple pb-1 transition-colors shrink-0">
              TG Academy
            </Link>

            <Link href="#partnerships" className="text-gray-700 hover:text-brand-purple] pb-1 transition-colors shrink-0">
              Strategic Partnership
            </Link>

            <Link href="#pricing" className="text-gray-700 hover:text-brand-purple pb-1 transition-colors shrink-0">
              Pricing
            </Link>

            <Link href="#consultation" className="text-gray-700 hover:text-brand-purple pb-1 transition-colors shrink-0">
              Book a Consultation
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-lg">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3 font-medium text-gray-800">
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-[#5B1947] font-semibold py-1.5 border-b border-gray-100"
            >
              <span>About</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="#what-we-do"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-1.5 border-b border-gray-100"
            >
              <span>What We Do</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="#jobs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-1.5 border-b border-gray-100"
            >
              <span>Jobs</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="py-1.5 border-b border-gray-100">
              Projects
            </Link>
            <Link href="#tg-academy" onClick={() => setIsMobileMenuOpen(false)} className="py-1.5 border-b border-gray-100">
              TG Academy
            </Link>
            <Link href="#partnerships" onClick={() => setIsMobileMenuOpen(false)} className="py-1.5 border-b border-gray-100">
              Strategic Partnership
            </Link>
            <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="py-1.5 border-b border-gray-100">
              Pricing
            </Link>
            <Link href="#consultation" onClick={() => setIsMobileMenuOpen(false)} className="py-1.5 border-b border-gray-100">
              Book a Consultation
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#5B1947] text-white font-medium py-2.5 rounded-md text-sm"
            >
              <span className="w-6 h-6 rounded-full border border-white/40 bg-white/10 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </span>
              <span>Account</span>
            </button>
            <Link
              href="#assessment"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-[#E84D58] hover:bg-[#d63d48] text-white font-medium py-2.5 rounded-md text-sm shadow-xs"
            >
              Take Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
