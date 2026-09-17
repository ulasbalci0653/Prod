'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COFFEE_METHODS } from '@/lib/constants';

export default function CoffeeMethods() {
  return (
    <section id="methods" className="py-24 sm:py-32 bg-[#F7F4EE] text-[#221C19] relative overflow-hidden border-b border-[#E2DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono tracking-widest text-[#A51F24] uppercase">
            DEMLEME METOTLARI & FINCAN DENGESİ
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#221C19] leading-tight">
            YOUR COFFEE. <br />
            <span className="text-[#A51F24]">YOUR METHOD.</span>
          </h2>
          <p className="text-lg text-[#554C47] font-light border-l-2 border-[#A51F24] pl-4">
            Nasıl içersen iç, kahvenin özgün karakteri ve aromatik gövdesi korunsun.
          </p>
        </div>

        {/* 4 Method Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COFFEE_METHODS.map((method, idx) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#FFFFFF] border border-[#E2DACB] p-8 sm:p-10 rounded-sm relative flex flex-col justify-between hover:border-[#A51F24] transition-all duration-300 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-[#A51F24]/10 text-[#A51F24] border border-[#A51F24]/30 text-[10px] font-mono tracking-widest uppercase font-semibold">
                    {method.badge}
                  </span>
                  <span className="text-xs font-mono text-[#554C47]">
                    METHOD // 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-3xl sm:text-4xl font-black tracking-wider text-[#221C19] group-hover:text-[#A51F24] transition-colors mb-3">
                  {method.title}
                </h3>

                <p className="text-sm font-semibold text-[#221C19] mb-4">
                  {method.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#554C47] leading-relaxed font-normal">
                  {method.desc}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#E2DACB] flex items-center justify-between">
                <span className="text-xs font-mono text-[#554C47]">
                  PROD SPECIALTY ROAST
                </span>
                <span className="text-xs font-mono text-[#A51F24] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  BAHÇELİEVLER →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
