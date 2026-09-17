'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_VALUES } from '@/lib/constants';

export default function AboutProd() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F4EE] text-[#221C19] relative overflow-hidden border-b border-[#E2DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-[#E2DACB]">
          {/* Left Column: Big Headline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="text-xs font-mono tracking-widest text-[#A51F24] uppercase">
              MARKA KİMLİĞİ • ANKARA
            </div>
            <h2 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#221C19] leading-none">
              THIS IS <br />
              <span className="text-[#A51F24]">PROD.</span>
            </h2>
          </motion.div>

          {/* Right Column: Editorial Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            <p className="text-xl sm:text-2xl text-[#221C19] font-light leading-snug">
              PROD, Bahçelievler&apos;in içinde kahveyi yalnızca servis etmeyen; çekirdeği, kavurmayı ve demlemeyi bir bütün olarak ele alan bir coffee roastery.
            </p>
            <p className="text-base text-[#554C47] font-normal leading-relaxed">
              Her çekirdeğin kendi yetiştiği rakım, toprak ve iklim karakterini fincana yansıtmaya inanıyoruz. Endüstriyel şablonların ötesinde, el işçiliği ve teknik uzmanlığı şehirli ve samimi bir atmosferde birleştiriyoruz.
            </p>
          </motion.div>
        </div>

        {/* 3 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-20">
          {BRAND_VALUES.map((val, idx) => (
            <motion.div
              key={val.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#FFFFFF] border border-[#E2DACB] p-8 rounded-sm space-y-4 shadow-sm hover:border-[#A51F24] transition-all duration-300 group"
            >
              <div className="flex items-baseline justify-between border-b border-[#E2DACB] pb-4">
                <span className="font-mono text-3xl font-bold text-[#A51F24]">
                  {val.num}
                </span>
                <span className="text-xs font-mono tracking-widest text-[#554C47] uppercase">
                  {val.subtitle}
                </span>
              </div>
              <h3 className="font-heading text-3xl font-bold tracking-wider text-[#221C19] group-hover:text-[#A51F24] transition-colors">
                {val.title}
              </h3>
              <p className="text-sm text-[#554C47] leading-relaxed font-normal">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
