'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FindYourCorner() {
  return (
    <section className="py-20 sm:py-28 bg-[#111111] text-[#F8F7F3] border-y border-white/5 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-xs font-mono tracking-widest text-[#A51F24] uppercase">
            FIND YOUR CORNER
          </span>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#F8F7F3] leading-none">
            A CUP. A TABLE. <br />
            <span className="text-[#A51F24]">A LITTLE TIME.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-[#F1EBDD] font-light max-w-2xl mx-auto pt-2">
            &ldquo;İster tek başına bir çalışma molası, ister kalabalığınla uzun bir sohbet. Masan Bahçelievler&apos;de hazır.&rdquo;
          </p>

          <div className="pt-6 flex justify-center items-center gap-3 text-xs font-mono text-[#D8D0C1]/60">
            <span className="w-8 h-[1px] bg-[#A51F24]" />
            <span>SPECIALTY COFFEE ATMOSPHERE</span>
            <span className="w-8 h-[1px] bg-[#A51F24]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
