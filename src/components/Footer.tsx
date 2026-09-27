import React, { useState } from 'react';
import { ChevronDown, MapPin, Clock, Phone, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenSandwichBuilder: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenReservation,
  onOpenSandwichBuilder,
}) => {
  const [openSection, setOpenSection] = useState<'info' | 'hours' | 'contact' | 'nav' | null>(null);

  const toggleSection = (section: 'info' | 'hours' | 'contact' | 'nav') => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${CAFE_INFO.address}, ${CAFE_INFO.cityStateZip}`
  )}`;

  return (
    <footer className="bg-[#0D0706] text-[#A89F91] border-t border-[#C5A059]/20 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Compact Brand Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-[#C5A059]/15 gap-4">
          <div className="flex items-center gap-3">
            {/* Cloche logo without border box */}
            <div className="w-8 h-8 flex items-center justify-center text-[#C5A059]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="w-full h-full"
              >
                <path d="M12 3v2" />
                <path d="M4 14a8 8 0 0 1 16 0H4z" />
                <path d="M2 17h20" />
                <path d="M5 20h14" />
              </svg>
            </div>
            <div>
              <span className="font-['Cinzel'] text-base sm:text-lg font-bold tracking-widest text-[#F7F4EE]">
                TASTE OF EGYPT CAFE
              </span>
              <p className="text-[11px] text-[#A89F91]">
                Haute Egyptian Gastronomy & Artisanal Bakery
              </p>
            </div>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#120B0A] bg-[#C5A059] rounded hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            Reserve Table
          </button>
        </div>

        {/* Clean Interactive Accordions (Click to reveal details) */}
        <div className="divide-y divide-[#C5A059]/10 my-4 text-xs">
          {/* Item 1: Address & Location */}
          <div className="py-3">
            <button
              onClick={() => toggleSection('info')}
              className="w-full flex items-center justify-between text-left text-xs font-medium uppercase tracking-wider text-[#DFBE7A] hover:text-[#F7F4EE] transition-colors py-1 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Address & Location</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSection === 'info' ? 'rotate-180 text-[#C5A059]' : 'text-[#A89F91]'
                }`}
              />
            </button>
            {openSection === 'info' && (
              <div className="pt-3 pb-2 pl-6 text-[#ECE6DA] space-y-2 animate-in fade-in duration-200">
                <p>
                  {CAFE_INFO.address}, {CAFE_INFO.cityStateZip}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#DFBE7A] hover:underline pt-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* Item 2: Opening Hours */}
          <div className="py-3">
            <button
              onClick={() => toggleSection('hours')}
              className="w-full flex items-center justify-between text-left text-xs font-medium uppercase tracking-wider text-[#DFBE7A] hover:text-[#F7F4EE] transition-colors py-1 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Opening Hours</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSection === 'hours' ? 'rotate-180 text-[#C5A059]' : 'text-[#A89F91]'
                }`}
              />
            </button>
            {openSection === 'hours' && (
              <div className="pt-3 pb-2 pl-6 text-[#ECE6DA] space-y-1.5 animate-in fade-in duration-200">
                <div className="flex gap-4">
                  <span className="text-[#A89F91]">Monday – Friday:</span>
                  <span>{CAFE_INFO.hours.weekdays}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#A89F91]">Saturday – Sunday:</span>
                  <span>{CAFE_INFO.hours.weekends}</span>
                </div>
              </div>
            )}
          </div>

          {/* Item 3: Contact & Direct Inquiries */}
          <div className="py-3">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between text-left text-xs font-medium uppercase tracking-wider text-[#DFBE7A] hover:text-[#F7F4EE] transition-colors py-1 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Contact & Phone</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSection === 'contact' ? 'rotate-180 text-[#C5A059]' : 'text-[#A89F91]'
                }`}
              />
            </button>
            {openSection === 'contact' && (
              <div className="pt-3 pb-2 pl-6 text-[#ECE6DA] space-y-2 animate-in fade-in duration-200">
                <p className="text-xs text-[#A89F91]">
                  Direct inquiries and takeout orders:
                </p>
                <div>
                  <a
                    href={`tel:${CAFE_INFO.phoneRaw}`}
                    className="text-[#DFBE7A] font-medium hover:underline text-sm"
                  >
                    {CAFE_INFO.phone}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Item 4: Site Shortcuts */}
          <div className="py-3">
            <button
              onClick={() => toggleSection('nav')}
              className="w-full flex items-center justify-between text-left text-xs font-medium uppercase tracking-wider text-[#DFBE7A] hover:text-[#F7F4EE] transition-colors py-1 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Site Shortcuts</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSection === 'nav' ? 'rotate-180 text-[#C5A059]' : 'text-[#A89F91]'
                }`}
              />
            </button>
            {openSection === 'nav' && (
              <div className="pt-3 pb-2 pl-6 grid grid-cols-2 gap-2 text-xs text-[#ECE6DA] animate-in fade-in duration-200">
                <a href="#menu" className="hover:text-[#DFBE7A]">
                  • Menu & Specialties
                </a>
                <button
                  onClick={onOpenSandwichBuilder}
                  className="text-left hover:text-[#DFBE7A] cursor-pointer"
                >
                  • Custom Sandwich Workshop
                </button>
                <a href="#portfolio" className="hover:text-[#DFBE7A]">
                  • Photo Gallery
                </a>
                <a href="#story" className="hover:text-[#DFBE7A]">
                  • Our Heritage
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Minimal Copyright & Built by LevelUp Ecosystem */}
        <div className="pt-6 mt-6 border-t border-[#C5A059]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#A89F91]">
          <span>© {new Date().getFullYear()} {CAFE_INFO.name}. San Diego, CA.</span>
          <div className="flex items-center gap-1.5">
            <span>Built by</span>
            <a
              href="https://levelup-ecosystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DFBE7A] hover:underline font-medium hover:text-[#F7F4EE] transition-colors"
            >
              LevelUp Ecosystem
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
