import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const GALLERY_ITEMS = [
  {
    title: 'Signature Food Menu',
    caption: 'Traditional Egyptian dishes, Koshary, and stone-baked Hawawshi',
    image: 'https://i.ibb.co/3mfBt6GX/taste-of-egypt-food-menu.jpg',
    category: 'Food Menu'
  },
  {
    title: 'Lunch & Sandwich Menu',
    caption: 'Custom made-to-order panini, ciabatta, and fresh wraps',
    image: 'https://i.ibb.co/d06W2Nps/taste-of-egypt-lunch-menu.jpg',
    category: 'Lunch Menu'
  },
  {
    title: 'Bakery, Sweets & Cafe Menu',
    caption: 'European butter viennoiseries, Danishes, Karak tea, and Sailaai',
    image: 'https://i.ibb.co/NnJR2scx/taste-of-egypt-bakery-menu.jpg',
    category: 'Bakery & Cafe'
  },
  {
    title: 'The Intimate Dining Atmosphere',
    caption: 'Warm ambient lighting, velvet seating, and dark walnut tables in San Diego',
    image: 'https://i.ibb.co/hRj3SFzR/Chat-GPT-Image-27-sept-2026-02-36-16-1.png',
    category: 'The Venue'
  },
  {
    title: 'Royal Alexandrian Koshary',
    caption: 'Layered brown lentils, chickpeas, and golden crispy onions',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    category: 'Specialties'
  },
  {
    title: 'Stone Oven Charred Hawawshi',
    caption: 'Spiced minced beef baked inside fresh baladi pita bread',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    category: 'Specialties'
  }
];

export const PhotoPortfolioSection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_ITEMS.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0D0706] border-y border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#DFBE7A] font-medium mb-2">
            Visual Gallery & Atmosphere
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-normal text-[#F7F4EE] tracking-tight">
            Culinary Art in Photography
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto my-3" />
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => {
            return (
              <div
                key={item.title}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-lg bg-[#1A1110] border border-[#C5A059]/20 hover:border-[#DFBE7A]/60 transition-all duration-500 cursor-pointer shadow-lg hover:-translate-y-1 aspect-[4/3]"
              >
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#120B0A]/95 via-[#120B0A]/35 to-transparent opacity-85 group-hover:opacity-90 transition-opacity pointer-events-none" />

                <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-widest uppercase text-[#DFBE7A] bg-[#120B0A]/80 px-2.5 py-1 rounded border border-[#C5A059]/30 backdrop-blur-sm">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#120B0A]/80 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBE7A] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-medium text-[#F7F4EE] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#ECE6DA]/80 font-light max-w-lg line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {selectedPhotoIndex !== null && GALLERY_ITEMS[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            aria-label="Close enlarged view"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[88vh] flex flex-col items-center">
            <SafeImage
              src={GALLERY_ITEMS[selectedPhotoIndex].image}
              alt={GALLERY_ITEMS[selectedPhotoIndex].title}
              fallbackTitle={GALLERY_ITEMS[selectedPhotoIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded shadow-2xl border border-[#C5A059]/30"
            />
            <div className="text-center mt-4 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#DFBE7A]">
                {GALLERY_ITEMS[selectedPhotoIndex].category}
              </span>
              <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#F7F4EE] mt-1">
                {GALLERY_ITEMS[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs text-[#A89F91] mt-1">
                {GALLERY_ITEMS[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
