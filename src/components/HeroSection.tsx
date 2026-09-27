import React from 'react';
import { Calendar, UtensilsCrossed } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onOpenSandwichBuilder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onOpenSandwichBuilder,
}) => {
  return (
    <section className="relative w-full bg-[#120B0A]">
      {/* 1. Clear, Unobstructed Hero Visual (100% visible, fully responsive, SafeImage protected) */}
      <div className="relative w-full h-[60vh] sm:h-[72vh] md:h-[82vh] overflow-hidden flex items-center justify-center bg-[#120B0A]">
        <SafeImage
          src="https://i.ibb.co/hRj3SFzR/Chat-GPT-Image-27-sept-2026-02-36-16-1.png"
          alt="Taste of Egypt Cafe Luxury Dining Room & Atmosphere"
          fallbackTitle="Taste of Egypt Cafe"
          className="w-full h-full object-contain md:object-cover object-center"
        />

        {/* Soft elegant vignette on top for navbar blend */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#120B0A]/80 to-transparent pointer-events-none" />

        {/* Smooth natural fade at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#120B0A] via-[#120B0A]/60 to-transparent pointer-events-none" />
      </div>

      {/* 2. Clean Typography & Actions below the photo */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-16 text-center">
        {/* High-Contrast Crisp Heading */}
        <h1 className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl md:text-6xl font-normal text-[#F7F4EE] tracking-tight leading-[1.12] mb-4">
          Haute Egyptian Gastronomy & Artisanal Bakery
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#ECE6DA]/85 font-light leading-relaxed mb-8">
          Authentic stone-oven <span className="text-[#DFBE7A] font-medium">Hawawshi</span>, signature <span className="text-[#DFBE7A] font-medium">Alexandrian Koshary</span>, freshly baked European viennoiserie, and traditional spiced <span className="text-[#DFBE7A] font-medium">Karak Tea</span>.
        </p>

        {/* Actions Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#menu"
            className="w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-widest text-[#120B0A] bg-gradient-to-r from-[#DFBE7A] via-[#C5A059] to-[#A8813B] rounded hover:brightness-110 active:scale-98 transition-all shadow-md shadow-[#C5A059]/20"
          >
            Explore Menu & Dishes
          </a>

          <button
            onClick={onOpenSandwichBuilder}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#DFBE7A] border border-[#C5A059]/40 hover:border-[#DFBE7A] hover:bg-[#C5A059]/10 rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Custom Sandwich</span>
          </button>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#ECE6DA] hover:text-[#DFBE7A] border border-white/10 hover:border-[#C5A059]/30 rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#DFBE7A]" />
            <span>Reserve Table</span>
          </button>
        </div>
      </div>
    </section>
  );
};
