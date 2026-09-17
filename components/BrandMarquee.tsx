'use client';

import React from 'react';

const MARQUEE_ITEMS = [
  'SPECIALTY COFFEE',
  'ROASTED IN ANKARA',
  'POUR OVER',
  'ESPRESSO',
  'SINGLE ORIGIN',
  'FILTER COFFEE',
  'BAHÇELİEVLER',
  'CRAFT ROASTERY',
];

export default function BrandMarquee() {
  return (
    <div className="w-full bg-[#A51F24] text-white py-3.5 overflow-hidden border-y border-[#80181C] select-none relative z-20 shadow-sm">
      <div className="animate-marquee whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-6">
            <span className="font-heading text-sm sm:text-base font-bold tracking-widest uppercase">
              {item}
            </span>
            <span className="ml-12 text-[#F7F4EE]/60 text-xs font-mono">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
