import React from 'react';
import { Award, HeartHandshake, Compass } from 'lucide-react';

export const StoryAndHeritage: React.FC = () => {
  return (
    <section id="story" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Visual Column */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-lg overflow-hidden border border-[#C5A059]/30 p-2 bg-[#1A1110]">
            <img
              src="https://i.ibb.co/hRj3SFzR/Chat-GPT-Image-27-sept-2026-02-36-16-1.png"
              alt="Intimate and warm atmosphere of Taste of Egypt Cafe"
              className="w-full aspect-[4/3] object-cover rounded"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Gilded seal overlay */}
            <div className="absolute bottom-6 right-6 p-4 rounded bg-[#120B0A]/95 border border-[#C5A059]/50 backdrop-blur-md max-w-xs shadow-xl">
              <div className="flex items-center gap-2 text-[#DFBE7A] text-xs font-semibold uppercase tracking-wider mb-1">
                <Award className="w-4 h-4 text-[#C5A059]" />
                <span>Culinary Excellence</span>
              </div>
              <p className="text-[11px] text-[#A89F91] leading-relaxed">
                Time-honored recipes passed down through generations, reimagined with sophistication in San Diego.
              </p>
            </div>
          </div>
        </div>

        {/* Right Story Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs uppercase tracking-[0.25em] text-[#DFBE7A] font-medium">
            Heritage & Philosophy
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-normal text-[#F7F4EE] tracking-tight leading-[1.15]">
            The Soul of the Nile in the Heart of San Diego
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#A89F91] font-light leading-relaxed">
            <p>
              Born from a passionate devotion to legendary Egyptian hospitality, <strong className="text-[#ECE6DA] font-normal">Taste of Egypt Cafe</strong> celebrates authentic Middle Eastern culinary traditions paired with the precision of artisanal French viennoiserie.
            </p>
            <p>
              Every morning, our <strong className="text-[#ECE6DA] font-normal">Koshary</strong> is prepared with slowly simmered brown lentils, tender chickpeas, and golden crispy onions fried to order. The stone oven radiates with the warm, fragrant spices of our signature <strong className="text-[#ECE6DA] font-normal">Hawawshi</strong>.
            </p>
            <p>
              Whether stopping by at dawn for warm wild zaatar croissants and a creamy <strong className="text-[#ECE6DA] font-normal">Sailaai</strong>, or gathering with friends for evening dinner, our house welcomes you into a tranquil, elevated setting.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#C5A059]/15">
            <div className="flex items-start gap-3">
              <HeartHandshake className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F7F4EE]">
                  Karam (Hospitality)
                </h4>
                <p className="text-xs text-[#A89F91] mt-0.5">
                  Every guest is embraced with warmth like family.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Compass className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F7F4EE]">
                  Authentic Spices
                </h4>
                <p className="text-xs text-[#A89F91] mt-0.5">
                  Whole green cardamom, sumac, and wild thyme directly sourced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
