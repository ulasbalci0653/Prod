'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Navigation } from 'lucide-react';
import { NAV_LINKS, STORE_INFO } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#A51F24] rounded-md p-1"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full border border-white/20 group-hover:border-[#A51F24] transition-colors">
              <Image
                src="/images/prod-logo.png"
                alt="Prod Coffee & Roastery logosu"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-[#F8F7F3] group-hover:text-[#A51F24] transition-colors">
                PROD
              </span>
              <span className="text-[10px] tracking-widest text-[#D8D0C1]/80 uppercase -mt-1 font-mono">
                ROASTERY • ANKARA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm tracking-widest text-[#D8D0C1] hover:text-[#F8F7F3] uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A51F24] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={STORE_INFO.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#A51F24] text-[#F8F7F3] font-heading text-xs uppercase tracking-widest hover:bg-[#C3282D] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#A51F24]/20 border border-[#A51F24]"
            >
              <Navigation className="w-3.5 h-3.5 text-[#F8F7F3]" />
              <span>YOL TARİFİ</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
              className="md:hidden p-2 text-[#F8F7F3] hover:text-[#A51F24] focus:outline-none focus:ring-2 focus:ring-[#A51F24] rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#090909]/98 backdrop-blur-xl border-b border-white/10 z-40 flex flex-col justify-between px-6 py-8 animate-fadeIn">
          <div className="flex flex-col space-y-6">
            <div className="text-[11px] font-mono tracking-widest text-[#A51F24] uppercase border-b border-white/10 pb-2">
              MENÜ & GEZİNTİ
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-2xl tracking-wider text-[#F8F7F3] hover:text-[#A51F24] transition-colors py-1 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D8D0C1]/40 font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4 pt-6 border-t border-white/10">
            <a
              href={STORE_INFO.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#A51F24] text-[#F8F7F3] font-heading tracking-widest text-sm uppercase flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>YOL TARİFİ AL</span>
            </a>
            <div className="text-center text-xs text-[#D8D0C1]/60 font-mono">
              Bahçelievler 49. Sk. No:14 • Çankaya / Ankara
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
