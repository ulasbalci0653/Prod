'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Instagram, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '@/lib/constants';

export default function LocationSection() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#111111] text-[#F8F7F3] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-white/10 space-y-3">
          <div className="text-xs font-mono tracking-widest text-[#A51F24] uppercase">
            ULAŞIM & İLETİŞİM
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#F8F7F3] leading-tight">
            COME FOR THE COFFEE. <br />
            <span className="text-[#A51F24]">STAY FOR A WHILE.</span>
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Info & Action Triggers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-[#171717] border border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-2xl space-y-8"
          >
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#A51F24] uppercase block">
                  SPECIALTY COFFEE ROASTERY
                </span>
                <h3 className="font-heading text-3xl font-bold tracking-wider text-[#F8F7F3] mt-1">
                  {STORE_INFO.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 text-sm">
                <MapPin className="w-5 h-5 text-[#A51F24] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#D8D0C1]/60 uppercase block">ADRES</span>
                  <p className="text-[#F8F7F3] font-normal leading-relaxed">
                    {STORE_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 text-sm">
                <Phone className="w-5 h-5 text-[#A51F24] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#D8D0C1]/60 uppercase block">TELEFON</span>
                  <a
                    href={STORE_INFO.phoneRaw}
                    className="text-[#F1EBDD] font-mono hover:text-[#A51F24] transition-colors"
                  >
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 text-sm">
                <Clock className="w-5 h-5 text-[#A51F24] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#D8D0C1]/60 uppercase block">ÇALIŞMA SAATLERİ</span>
                  <p className="text-[#F8F7F3] font-mono">
                    Her Gün: <span className="text-[#A51F24] font-bold">10:00 — 00:00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a
                href={STORE_INFO.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#A51F24] hover:bg-[#C3282D] text-[#F8F7F3] font-heading text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg border border-[#A51F24]"
              >
                <Navigation className="w-4 h-4" />
                <span>YOL TARİFİ AL (GOOGLE MAPS)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={STORE_INFO.phoneRaw}
                  className="py-3 bg-transparent hover:bg-[#F1EBDD] text-[#F8F7F3] hover:text-[#090909] border border-white/20 font-heading text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>ARA</span>
                </a>

                <a
                  href={STORE_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-transparent hover:bg-[#F1EBDD] text-[#F8F7F3] hover:text-[#090909] border border-white/20 font-heading text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>INSTAGRAM</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px] bg-[#171717] border border-white/10 rounded-sm overflow-hidden shadow-2xl"
          >
            <iframe
              src={STORE_INFO.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prod Coffee & Roastery Google Maps Konumu"
              className="absolute inset-0 w-full h-full opacity-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
