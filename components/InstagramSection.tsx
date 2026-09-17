'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '@/lib/constants';

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-24 sm:py-32 bg-[#090909] text-[#F8F7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#111111] border border-white/10 p-10 sm:p-16 rounded-sm text-center relative overflow-hidden shadow-2xl space-y-8"
        >
          {/* Background Ambient Red Glow */}
          <div className="absolute inset-0 radial-glow-red pointer-events-none opacity-50" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#A51F24]/10 border border-[#A51F24]/40 text-[#A51F24] text-xs font-mono tracking-widest uppercase">
            <Instagram className="w-4 h-4" />
            <span>INSTAGRAM COMMUNITY</span>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F8F7F3]">
              FROM PROD, <span className="text-[#A51F24]">DAILY.</span>
            </h2>
            <p className="text-xl font-heading text-[#F1EBDD] tracking-wider">
              {STORE_INFO.instagram.handle}
            </p>
            <p className="text-sm text-[#D8D0C1]/80 font-normal">
              Günlük kavurma turları, taze demlemeler ve Bahçelievler atmosferinden anları Instagram&apos;da paylaşıyoruz.
            </p>
          </div>

          <div className="pt-4">
            <a
              href={STORE_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#A51F24] hover:bg-[#C3282D] text-[#F8F7F3] font-heading text-sm uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl border border-[#A51F24]"
            >
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM&apos;DA TAKİP ET</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
