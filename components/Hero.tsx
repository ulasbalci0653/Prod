'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation, ArrowDownRight, Compass, Flame } from 'lucide-react';
import { STORE_INFO } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh w-full bg-[#F7F4EE] text-[#221C19] flex flex-col justify-between overflow-hidden pt-28 pb-10 border-b border-[#E2DACB]"
    >
      {/* Background Soft Warm Glow */}
      <div className="absolute top-1/3 right-10 -translate-y-1/2 w-[550px] h-[550px] rounded-full radial-glow-warm pointer-events-none opacity-90 z-0" />

      {/* Massive Subtle Editorial Text "PROD" */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-black text-[140px] sm:text-[220px] lg:text-[340px] text-[#221C19]/[0.03] select-none pointer-events-none tracking-tighter z-0 leading-none">
        PROD
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#A51F24]" />
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#554C47] uppercase">
              ANKARA • BAHÇELİEVLER | SPECIALTY ROASTERY
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.92] text-[#221C19]">
            COFFEE, <br />
            <span className="text-[#A51F24] inline-block">ROASTED</span> <br />
            WITH INTENT.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#554C47] max-w-xl font-normal leading-relaxed border-l-2 border-[#A51F24] pl-4">
            Bahçelievler&apos;de kahvenin en karakterli hali. Çekirdeğin kökeninden fincandaki son yuduma kadar el işçiliği ve kavurma tutkusu.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#methods"
              className="px-8 py-4 bg-[#A51F24] hover:bg-[#80181C] text-white font-heading text-sm uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 shadow-lg shadow-[#A51F24]/20 border border-[#A51F24]"
            >
              <span>KAHVEYİ KEŞFET</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href={STORE_INFO.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FFFFFF] hover:bg-[#221C19] text-[#221C19] hover:text-white font-heading text-sm uppercase tracking-widest border border-[#E2DACB] hover:border-[#221C19] transition-all duration-300 flex items-center gap-3 group shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#A51F24] group-hover:text-white transition-colors" />
              <span>YOL TARİFİ AL</span>
            </a>
          </div>

          {/* Editorial Micro Coordinates */}
          <div className="pt-6 border-t border-[#E2DACB] flex items-center gap-6 text-xs text-[#554C47] font-mono">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#A51F24]" />
              <span>{STORE_INFO.coordinates.label}</span>
            </div>
            <span>•</span>
            <span>ANKARA / TR</span>
          </div>
        </motion.div>

        {/* Right Column: High-Impact Brand Showcase Card with New Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center items-center py-6 lg:py-0"
        >
          <div className="w-full max-w-md bg-[#FFFFFF] border border-[#E2DACB] p-8 sm:p-10 shadow-xl rounded-sm relative flex flex-col items-center text-center space-y-6 group hover:border-[#A51F24] transition-all duration-500">
            {/* Top Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-[#F7F4EE] border border-[#E2DACB] text-[10px] font-mono text-[#A51F24] tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5 text-[#A51F24]" />
              <span>OFFICIAL BRAND LOGO</span>
            </div>

            {/* Logo Display */}
            <div className="relative w-full h-44 sm:h-52 my-2 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/prod-logo.png"
                alt="PROD Coffee & Roastery logosu"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="space-y-2 border-t border-[#E2DACB] pt-6 w-full">
              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-[#221C19]">
                PROD COFFEE & ROASTERY
              </h3>
              <p className="text-xs text-[#554C47] font-mono uppercase tracking-widest">
                BAHÇELİEVLER • ANKARA
              </p>
              <p className="text-xs text-[#554C47] font-normal leading-relaxed pt-1">
                Kahve çekirdeğinin özgün karakterini ve roastery kültürünü yansıtan özel kavurumlar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Micro Indicators */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-8 flex items-center justify-between border-t border-[#E2DACB]">
        <a
          href="#roastery"
          className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#554C47] hover:text-[#A51F24] transition-colors group"
        >
          <span className="w-12 h-[1px] bg-[#E2DACB] group-hover:bg-[#A51F24] transition-colors" />
          <span>SCROLL TO ROAST</span>
        </a>
        <div className="text-[11px] font-mono text-[#554C47] hidden sm:block">
          HER GÜN AÇIK • 10:00 – 00:00
        </div>
      </div>
    </section>
  );
}
