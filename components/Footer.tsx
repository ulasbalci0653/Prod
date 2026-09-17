'use client';

import React from 'react';
import Image from 'next/image';
import { NAV_LINKS, STORE_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1715] text-[#F7F4EE] pt-20 pb-10 border-t border-[#332A26] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header with New Logo */}
        <div className="border-b border-[#332A26] pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-14 sm:h-16 w-44 sm:w-56">
                <Image
                  src="/images/prod-logo.png"
                  alt="PROD Coffee & Roastery logosu"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <div className="text-right hidden md:block">
              <span className="text-xs font-mono text-[#D8D0C1]/50 block">
                COORDINATES
              </span>
              <span className="text-sm font-mono text-[#F7F4EE] font-bold">
                {STORE_INFO.coordinates.label}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 py-16 border-b border-[#332A26]">
          {/* Col 1: About */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-[#A51F24] uppercase tracking-widest block font-semibold">
              HAKKIMIZDA
            </span>
            <p className="text-sm text-[#D8D0C1]/80 leading-relaxed font-normal max-w-sm">
              Ankara Bahçelievler&apos;de el işçiliği specialty kahve kavuran, demleyen ve şehirli atmosferinde sunan bağımsız coffee roastery.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono text-[#A51F24] uppercase tracking-widest block font-semibold">
              GEZİNTİ
            </span>
            <ul className="space-y-2 text-xs font-mono">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#D8D0C1] hover:text-[#A51F24] transition-colors uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono text-[#A51F24] uppercase tracking-widest block font-semibold">
              BİLGİ & İLETİŞİM
            </span>
            <div className="space-y-2 text-xs text-[#D8D0C1]/90 font-mono">
              <p>{STORE_INFO.address}</p>
              <p>
                Tel:{' '}
                <a
                  href={STORE_INFO.phoneRaw}
                  className="hover:text-[#A51F24] transition-colors"
                >
                  {STORE_INFO.phone}
                </a>
              </p>
              <p>
                Instagram:{' '}
                <a
                  href={STORE_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A51F24] transition-colors text-[#F7F4EE]"
                >
                  {STORE_INFO.instagram.handle}
                </a>
              </p>
              <p className="text-[#A51F24] font-bold pt-1">
                Çalışma Saatleri: 10:00 — 00:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#D8D0C1]/50 gap-4">
          <div>
            © {currentYear} PROD Coffee & Roastery. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>ANKARA</span>
            <span>•</span>
            <span>SPECIALTY ROASTERY</span>
            <span>•</span>
            <span className="text-[#A51F24] font-mono">{STORE_INFO.coordinates.label}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
