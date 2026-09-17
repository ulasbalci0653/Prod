'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Sliders, Coffee } from 'lucide-react';

const PROCESS_STEPS = [
  {
    tag: 'BEAN',
    num: '01',
    icon: Coffee,
    title: 'ÇEKİRDEK SEÇİMİ',
    desc: 'Dünyanın önde gelen specialty coffee çiftliklerinden doğrudan tedarik edilen single-origin çekirdekler.',
  },
  {
    tag: 'ROAST',
    num: '02',
    icon: Flame,
    title: 'KAVURMA HASSASİYETİ',
    desc: 'Çekirdeğin asidite, tatlılık ve aromatik profillerini en dengeli noktaya getiren özel profil kavurma.',
  },
  {
    tag: 'GRIND',
    num: '03',
    icon: Sliders,
    title: 'ÖĞÜTME DENGESİ',
    desc: 'Her demleme tekniği için ideal parçacık büyüklüğünde, homojen ve taze öğütüm.',
  },
  {
    tag: 'BREW',
    num: '04',
    icon: Sparkles,
    title: 'HASSAS EKSTRAKSİYON',
    desc: 'Ideal su mineralizasyonu ve ısı derecesinde servis edilen mükemmel fincan dengesi.',
  },
];

export default function RoasterySection() {
  return (
    <section id="roastery" className="py-24 sm:py-32 bg-[#111111] text-[#F8F7F3] relative overflow-hidden border-t border-white/5">
      {/* Background Accent Grid Texture */}
      <div className="absolute inset-0 grain-texture opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#A51F24] uppercase mb-2">
              KAVURMA & DÖNÜŞÜM
            </div>
            <h2 className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#F8F7F3]">
              THE ROASTERY
            </h2>
          </div>
          <p className="text-lg text-[#F1EBDD] font-light max-w-md border-l-2 border-[#A51F24] pl-4">
            &ldquo;Her fincan çekirdekle başlar. Çekirdeğin doğal karakterine saygı duyarak kavuruyoruz.&rdquo;
          </p>
        </div>

        {/* Roastery Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#171717]/80 border border-white/10 p-8 flex flex-col justify-between hover:border-[#A51F24]/60 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-4xl font-black text-[#A51F24]/30 group-hover:text-[#A51F24] transition-colors">
                      {step.tag}
                    </span>
                    <IconComponent className="w-6 h-6 text-[#F1EBDD]/60 group-hover:text-[#A51F24] transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-wider text-[#F8F7F3] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8D0C1]/80 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D8D0C1]/50">
                  <span>PHASE {step.num}</span>
                  <span className="text-[#A51F24]">PROD CRAFT</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
