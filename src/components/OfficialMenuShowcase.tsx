import React, { useState } from 'react';
import { ZoomIn, X, Download } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const OFFICIAL_MENUS = [
  {
    id: 'food',
    title: 'Signature Food Menu',
    subtitle: 'Koshary, Hawawshi, Alexandrian Specialties & Hot Plates',
    image: 'https://i.ibb.co/3mfBt6GX/taste-of-egypt-food-menu.jpg',
    badge: 'Main Dishes & Specialties'
  },
  {
    id: 'lunch',
    title: 'Lunch & Sandwich Menu',
    subtitle: 'Shawermas, Artisanal Bread Paninis, Ciabatta & Wraps',
    image: 'https://i.ibb.co/d06W2Nps/taste-of-egypt-lunch-menu.jpg',
    badge: 'Lunch & Fresh Sandwiches'
  },
  {
    id: 'bakery',
    title: 'Artisanal Bakery & Cafe Menu',
    subtitle: 'Pure Butter Viennoiseries, Danishes, Karak Tea & Sailaai',
    image: 'https://i.ibb.co/NnJR2scx/taste-of-egypt-bakery-menu.jpg',
    badge: 'Bakery & Beverages'
  }
];

export const OfficialMenuShowcase: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<{
    title: string;
    image: string;
    subtitle: string;
  } | null>(null);

  return (
    <section className="py-20 bg-[#170E0D] border-y border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#DFBE7A] font-medium mb-3">
            In-House Dining Cards
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-normal text-[#F7F4EE] tracking-tight">
            Official Restaurant Menus
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto my-3" />
          <p className="text-sm text-[#A89F91]">
            View our authentic printed menu cards directly from our San Diego location. Click on any card to view in full resolution.
          </p>
        </div>

        {/* 3 Prominent Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFICIAL_MENUS.map((menu) => (
            <div
              key={menu.id}
              onClick={() => setSelectedMenu(menu)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-[#120B0A] border border-[#C5A059]/30 hover:border-[#DFBE7A] transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Preview Container with SafeImage fallback */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#231816]">
                <SafeImage
                  src={menu.image}
                  alt={menu.title}
                  fallbackTitle={menu.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-[#120B0A]/90 border border-[#C5A059] text-xs font-semibold uppercase tracking-wider text-[#DFBE7A] flex items-center gap-2 shadow-lg backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-[#C5A059]" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase text-[#DFBE7A] bg-[#120B0A]/85 backdrop-blur-sm px-2.5 py-1 rounded border border-[#C5A059]/40">
                  {menu.badge}
                </div>
              </div>

              {/* Information Foot */}
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-[#C5A059]/20 bg-[#1A1110]">
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#F7F4EE] group-hover:text-[#DFBE7A] transition-colors mb-1">
                    {menu.title}
                  </h3>
                  <p className="text-xs text-[#A89F91] leading-relaxed">
                    {menu.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#C5A059]/10 flex items-center justify-between text-xs text-[#DFBE7A] font-medium">
                  <span>Open Full Menu</span>
                  <ZoomIn className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal View */}
      {selectedMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl max-h-[92vh] flex flex-col items-center">
            {/* Top Bar Actions */}
            <div className="w-full flex items-center justify-between pb-3 text-[#ECE6DA]">
              <div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#F7F4EE]">
                  {selectedMenu.title}
                </h3>
                <p className="text-xs text-[#A89F91]">{selectedMenu.subtitle}</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedMenu.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center gap-1.5 text-xs px-3"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Original Size</span>
                </a>

                <button
                  onClick={() => setSelectedMenu(null)}
                  aria-label="Close"
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menu Image with fallback */}
            <div className="overflow-y-auto max-h-[80vh] rounded-lg border border-[#C5A059]/40 shadow-2xl bg-[#120B0A]">
              <SafeImage
                src={selectedMenu.image}
                alt={selectedMenu.title}
                fallbackTitle={selectedMenu.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
