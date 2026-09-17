'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS, STORE_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] text-[#F8F7F3] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Editorial Header */}
        <div className="border-b border-white/10 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 overflow-hidden rounded-full border border-white/20">
                <Image
                  src="/images/prod-logo.png"
                  alt="Prod Coffee & Roastery logosu"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-6xl sm:text-8xl font-black tracking-tighter text-[#F8F7F3] leading-none">
                  PROD.
                </h2>
                <p className="text-xs font-mono tracking-widest text-[#A51F24] uppercase mt-1">
                  COFFEE & ROASTERY • ANKARA / BAHÇELİEVLER
                </p>
              </div>
            </div>

            <div className="text-right hidden md:block">
              <span className="text-xs font-mono text-[#D8D0C1]/50 block">
                COORDINATES
              </span>
              <span className="text-sm font-mono text-[#F1EBDD] font-bold">
                {STORE_INFO.coordinates.label}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 py-16 border-b border-white/10">
          {/* Col 1: About */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-[#A51F24] uppercase tracking-widest block">
              HAKKIMIZDA
            </span>
            <p className="text-sm text-[#D8D0C1]/80 leading-relaxed font-normal max-w-sm">
              Ankara Bahçelievler&apos;de el işçiliği specialty kahve kavuran, demleyen ve şehirli atmosferinde sunan bağımsız coffee roastery.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono text-[#A51F24] uppercase tracking-widest block">
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
            <span className="text-xs font-mono text-[#A51F24] uppercase tracking-widest block">
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
                  className="hover:text-[#A51F24] transition-colors text-[#F1EBDD]"
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
