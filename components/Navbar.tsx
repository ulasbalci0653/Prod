'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Navigation, Instagram } from 'lucide-react';
import { NAV_LINKS, STORE_INFO } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
          ? 'bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#E2DACB] py-3 shadow-sm'
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
            <div className="relative h-10 sm:h-12 w-32 sm:w-40 transition-transform group-hover:scale-105">
              <Image
                src="/images/prod-logo.png"
                alt="PROD Coffee & Roastery logosu"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm tracking-widest text-[#554C47] hover:text-[#A51F24] font-medium uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A51F24] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={STORE_INFO.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#A51F24] text-white font-heading text-xs uppercase tracking-widest hover:bg-[#80181C] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md border border-[#A51F24]"
            >
              <Navigation className="w-3.5 h-3.5 text-white" />
              <span>YOL TARİFİ</span>
            </a>

            <a
              href={STORE_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFFFFF] hover:bg-[#221C19] text-[#221C19] hover:text-white font-heading text-xs uppercase tracking-widest border border-[#E2DACB] hover:border-[#221C19] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm group"
            >
              <Instagram className="w-3.5 h-3.5 text-[#A51F24] group-hover:text-white transition-colors" />
              <span>INSTAGRAM</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
              className="md:hidden p-2 text-[#221C19] hover:text-[#A51F24] focus:outline-none focus:ring-2 focus:ring-[#A51F24] rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#F7F4EE]/98 backdrop-blur-xl border-b border-[#E2DACB] z-40 flex flex-col justify-between px-6 py-8 animate-fadeIn">
          <div className="flex flex-col space-y-6">
            <div className="text-[11px] font-mono tracking-widest text-[#A51F24] uppercase border-b border-[#E2DACB] pb-2">
              MENÜ & GEZİNTİ
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-2xl tracking-wider text-[#221C19] hover:text-[#A51F24] transition-colors py-1 flex items-center justify-between border-b border-[#E2DACB]/40"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#554C47] font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-3 pt-6 border-t border-[#E2DACB]">
            <a
              href={STORE_INFO.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 bg-[#A51F24] text-white font-heading tracking-widest text-sm uppercase flex items-center justify-center gap-2 shadow-md"
            >
              <Navigation className="w-4 h-4" />
              <span>YOL TARİFİ AL</span>
            </a>

            <a
              href={STORE_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 bg-[#FFFFFF] hover:bg-[#221C19] text-[#221C19] hover:text-white border border-[#E2DACB] font-heading tracking-widest text-sm uppercase flex items-center justify-center gap-2 shadow-sm"
            >
              <Instagram className="w-4 h-4 text-[#A51F24]" />
              <span>INSTAGRAM</span>
            </a>

            <div className="text-center text-xs text-[#554C47] font-mono pt-1">
              Bahçelievler 49. Sk. No:14 • Çankaya / Ankara
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
