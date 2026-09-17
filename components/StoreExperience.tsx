'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { STORE_INFO } from '@/lib/constants';

export default function StoreExperience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F7F4EE] text-[#221C19] relative overflow-hidden border-b border-[#E2DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#E2DACB] gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#A51F24] uppercase mb-2">
              MEKÂN & ATMOSFER
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#221C19]">
              BAHÇELİEVLER&apos;DE <br />
              <span className="text-[#A51F24]">BİR KAHVE MOLASI.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#554C47] font-light max-w-md border-l-2 border-[#A51F24] pl-4">
            Kırmızı tenteleri, siyah doğramaları ve sokak kültürünü iç mekân sıcaklığıyla harmanlayan özgün mimarimiz.
          </p>
        </div>

        {/* Storefront Main Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[380px] sm:h-[500px] lg:h-[620px] rounded-sm overflow-hidden border border-[#E2DACB] group shadow-md"
        >
          <Image
            src="/images/prod-storefront.jpg"
            alt="Prod Coffee & Roastery dış cephesi Bahçelievler Ankara"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            priority
          />

          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#221C19]/80 via-transparent to-transparent" />

          {/* Store Info Card Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-auto bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E2DACB] p-6 sm:p-8 max-w-md shadow-xl space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-[#A51F24] uppercase font-semibold">
              PROD COFFEE & ROASTERY • ANKARA
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#A51F24] shrink-0 mt-0.5" />
              <div>
                <span className="font-heading text-lg font-bold text-[#221C19] uppercase block">
                  ADRES
                </span>
                <p className="text-xs sm:text-sm text-[#554C47]">
                  {STORE_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-[#E2DACB] text-xs font-mono text-[#554C47]">
              <Clock className="w-4 h-4 text-[#A51F24]" />
              <span>10:00 — 00:00 (HER GÜN)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
