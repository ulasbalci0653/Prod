'use client';

import React from 'react';

const MARQUEE_ITEMS = [
  'SPECIALTY COFFEE',
  'ROASTED IN ANKARA',
  'NITRO BREW',
  'POUR OVER',
  'ESPRESSO',
  'COLD BREW',
  'BAHÇELİEVLER',
  'CRAFT ROASTERY',
];

export default function BrandMarquee() {
  return (
    <div className="w-full bg-[#A51F24] text-[#F8F7F3] py-3.5 overflow-hidden border-y border-[#C3282D] select-none relative z-20">
      <div className="animate-marquee whitespace-nowrap">
        {/* Double the list for seamless continuous infinite marquee loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-6">
            <span className="font-heading text-sm sm:text-base font-bold tracking-widest uppercase">
              {item}
            </span>
            <span className="ml-12 text-[#F1EBDD]/60 text-xs font-mono">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
