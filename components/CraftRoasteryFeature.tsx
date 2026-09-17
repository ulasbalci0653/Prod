'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';
import { STORE_INFO } from '@/lib/constants';

export default function CraftRoasteryFeature() {
  return (
    <section className="py-24 sm:py-32 bg-[#EFEAE0] text-[#221C19] relative overflow-hidden border-b border-[#E2DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Showcase Card with New Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="w-full bg-[#FFFFFF] border border-[#E2DACB] p-8 sm:p-10 rounded-sm shadow-md space-y-6 text-center group hover:border-[#A51F24] transition-colors">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F4EE] border border-[#E2DACB] text-[10px] font-mono text-[#A51F24] tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PROD CRAFT & ROASTERY</span>
              </div>

              <div className="relative w-full h-44 sm:h-52 my-2 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/prod-logo.png"
                  alt="PROD Coffee & Roastery logosu"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="border-t border-[#E2DACB] pt-4 text-xs font-mono text-[#554C47] space-y-1">
                <p className="font-bold text-[#221C19]">{STORE_INFO.name}</p>
                <p>{STORE_INFO.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#A51F24] text-white text-xs font-mono tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>SINGLE ORIGIN & SPECIALTY ROASTS</span>
            </div>

            <h2 className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#221C19] leading-[0.92]">
              CRAFTED WITH <br />
              <span className="text-[#A51F24] inline-block">PASSION.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-[#221C19] font-light leading-snug border-l-2 border-[#A51F24] pl-4">
              &ldquo;Çekirdeğin coğrafyasından fincandaki son damlaya kadar berrak, karakterli ve tutkulu ekstraksiyon.&rdquo;
            </p>

            <p className="text-base text-[#554C47] leading-relaxed max-w-xl font-normal">
              PROD Coffee & Roastery; Kolombiya, Etiyopya, Brezilya ve Kenya gibi seçkin coğrafyalardan tedarik ettiği tek kökenli çekirdekleri haftalık kavurum profilleriyle hazırlar.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E2DACB] max-w-lg">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#A51F24] uppercase block">TAZELİK</span>
                <span className="font-heading text-lg font-bold text-[#221C19]">HAFTALIK KAVURUM</span>
                <p className="text-xs text-[#554C47]">Taze çekirdek profil kontrolü</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-[#A51F24] uppercase block">EKSTRAKSİYON</span>
                <span className="font-heading text-lg font-bold text-[#221C19]">V60 & ESPRESSO</span>
                <p className="text-xs text-[#554C47]">Hassas gramaj & su mineralleri</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
