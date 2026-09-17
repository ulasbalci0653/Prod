'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Sparkles } from 'lucide-react';

export default function NitroSection() {
  return (
    <section id="nitro" className="py-28 sm:py-36 bg-gradient-to-b from-[#090909] via-[#791519]/40 to-[#090909] text-[#F8F7F3] relative overflow-hidden border-y border-[#A51F24]/30">
      {/* Floating Background Nitrogen CSS Particles (12 subtle elements) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#F1EBDD] opacity-20 blur-[1px] animate-pulse"
            style={{
              top: `${(i * 17) % 90}%`,
              left: `${(i * 23) % 95}%`,
              width: `${(i % 3) * 4 + 4}px`,
              height: `${(i % 3) * 4 + 4}px`,
              animationDuration: `${3 + (i % 4)}s`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#A51F24] text-[#F8F7F3] text-xs font-mono tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>IMZA ÜRÜN // SIGNATURE BOTTLING</span>
            </div>

            <h2 className="font-heading text-6xl sm:text-8xl font-black uppercase tracking-tight text-[#F8F7F3] leading-[0.9]">
              NITRO <br />
              <span className="text-[#A51F24] inline-block">BREW.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-[#F1EBDD] font-light leading-snug border-l-2 border-[#A51F24] pl-4">
              &ldquo;Cold brew&apos;ün daha yumuşak, daha ipeksi ve daha karakterli hali.&rdquo;
            </p>

            <p className="text-base text-[#D8D0C1]/80 leading-relaxed max-w-xl font-normal">
              Saatler süren soğuk ekstraksiyonun ardından saf azot gazı ile infüze edilen PROD Nitro Brew; yapay şeker veya katkı maddesi olmadan kendiliğinden tatlımsı bir gövde ve kadifemsi ipeksi bir köpük sunar.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10 max-w-lg">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#A51F24] uppercase block">DOKU</span>
                <span className="font-heading text-lg font-bold text-[#F8F7F3]">İPEKSİ & KADİFE</span>
                <p className="text-xs text-[#D8D0C1]/70">Azot infüzyonu ile oluşan Mikro köpük</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-[#A51F24] uppercase block">KARAKTER</span>
                <span className="font-heading text-lg font-bold text-[#F8F7F3]">DÜŞÜK ASİDİTE</span>
                <p className="text-xs text-[#D8D0C1]/70">Yavaş soğuk ekstraksiyon</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bottle Presentation Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient Background Glow */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[#A51F24]/20 blur-3xl pointer-events-none" />

            <div className="relative w-72 sm:w-80 lg:w-96 h-[420px] sm:h-[500px] hover:rotate-1 transition-transform duration-700">
              <Image
                src="/images/prod-nitro-brew.png"
                alt="Prod Nitro Brew amber şişesi"
                fill
                className="object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Floating Tag */}
            <div className="absolute top-6 left-2 sm:left-6 bg-[#090909]/90 border border-white/15 p-3 text-xs font-mono text-[#D8D0C1] shadow-2xl flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A51F24]" />
              <span>COLD BOTTLED • READY TO SERVE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
