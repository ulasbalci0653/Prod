'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation, ArrowDownRight, Compass } from 'lucide-react';
import { STORE_INFO } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh w-full bg-[#090909] text-[#F8F7F3] flex flex-col justify-between overflow-hidden pt-28 pb-10"
    >
      {/* Background Soft Red Radial Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] rounded-full radial-glow-red pointer-events-none opacity-80 z-0" />

      {/* Massive Editorial Background Typography "NITRO" */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-black text-[140px] sm:text-[220px] lg:text-[320px] text-white/[0.04] select-none pointer-events-none tracking-tighter z-0 leading-none">
        NITRO
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
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#D8D0C1] uppercase">
              ANKARA • BAHÇELİEVLER | SPECIALTY ROASTERY
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.92] text-[#F8F7F3]">
            COFFEE, <br />
            <span className="text-[#A51F24] inline-block">ROASTED</span> <br />
            WITH INTENT.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#D8D0C1]/90 max-w-xl font-normal leading-relaxed border-l-2 border-[#A51F24]/60 pl-4">
            Bahçelievler&apos;de kahvenin en karakterli hali. Çekirdeğin yetiştiği coğrafyadan demleme metoduna kadar her adımda ustalık ve tutku var.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#methods"
              className="px-7 py-4 bg-[#A51F24] hover:bg-[#C3282D] text-[#F8F7F3] font-heading text-sm uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 shadow-xl shadow-[#A51F24]/25 border border-[#A51F24]"
            >
              <span>KAHVEYİ KEŞFET</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href={STORE_INFO.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-transparent hover:bg-[#F1EBDD] text-[#F8F7F3] hover:text-[#090909] font-heading text-sm uppercase tracking-widest border border-white/20 hover:border-[#F1EBDD] transition-all duration-300 flex items-center gap-3 group"
            >
              <Navigation className="w-4 h-4 text-[#A51F24] group-hover:text-[#090909] transition-colors" />
              <span>YOL TARİFİ AL</span>
            </a>
          </div>

          {/* Editorial Micro Coordinates */}
          <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-[#D8D0C1]/60 font-mono">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#A51F24]" />
              <span>{STORE_INFO.coordinates.label}</span>
            </div>
            <span>•</span>
            <span>ANKARA / TR</span>
          </div>
        </motion.div>

        {/* Right Column: Nitro Brew Bottle Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center items-center py-6 lg:py-0"
        >
          {/* Subtle Ambient Bottle Glow */}
          <div className="absolute inset-0 rounded-full radial-glow-bottle pointer-events-none scale-125" />

          {/* Nitro Bottle Visual Box */}
          <div className="relative w-64 sm:w-80 lg:w-96 h-[400px] sm:h-[480px] lg:h-[540px] transition-transform duration-700 hover:scale-105">
            <Image
              src="/images/prod-nitro-brew.png"
              alt="Prod Nitro Brew şişesi"
              fill
              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter brightness-105 contrast-105"
              priority
            />
          </div>

          {/* Floating Editorial Badge */}
          <div className="absolute -bottom-2 right-4 sm:right-8 bg-[#111111]/90 backdrop-blur-md border border-white/10 p-3 sm:p-4 text-right shadow-2xl max-w-[180px]">
            <span className="text-[10px] font-mono tracking-widest text-[#A51F24] uppercase block">
              SIGNATURE BOTTLING
            </span>
            <span className="font-heading text-sm sm:text-base text-[#F8F7F3] font-bold tracking-wider uppercase block">
              PROD NITRO BREW
            </span>
            <span className="text-[11px] text-[#D8D0C1]/70 block mt-0.5">
              İpeksi Köpük & Soğuk Demleme
            </span>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Micro Indicators */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-8 flex items-center justify-between border-t border-white/10">
        <a
          href="#roastery"
          className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D8D0C1]/70 hover:text-[#A51F24] transition-colors group"
        >
          <span className="w-12 h-[1px] bg-white/20 group-hover:bg-[#A51F24] transition-colors" />
          <span>SCROLL TO ROAST</span>
        </a>
        <div className="text-[11px] font-mono text-[#D8D0C1]/50 hidden sm:block">
          OPEN DAILY • 10:00 – 00:00
        </div>
      </div>
    </section>
  );
}
