import React from 'react';
import { MapPin, Navigation, Calendar } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

interface AccessAndVisitProps {
  onOpenReservation: () => void;
}

export const AccessAndVisit: React.FC<AccessAndVisitProps> = ({ onOpenReservation }) => {
  const encodedAddress = encodeURIComponent(`${CAFE_INFO.address}, ${CAFE_INFO.cityStateZip}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const embedMapsUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-24 bg-[#120B0A] border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#DFBE7A] font-medium mb-2">
            Visit & Experience
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-normal text-[#F7F4EE] tracking-tight">
            Find Us in San Diego
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059]/40 mx-auto my-3" />
          <p className="text-xs sm:text-sm text-[#A89F91]">
            Conveniently located on Twain Avenue with dedicated customer parking and easy access.
          </p>
        </div>

        {/* Real Embedded Google Maps & Clean Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Real Google Maps in Custom Dark Tone Aesthetic */}
          <div className="lg:col-span-8 rounded-xl overflow-hidden border border-[#C5A059]/30 bg-[#1A1110] relative shadow-2xl min-h-[380px] sm:min-h-[460px]">
            {/* Embedded Real Google Maps iframe */}
            <iframe
              title="Taste of Egypt Cafe Google Maps Location"
              src={embedMapsUrl}
              className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0 filter invert-[90%] hue-rotate-180 contrast-[110%] brightness-[85%] opacity-90 transition-opacity hover:opacity-100"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Quick Action Button on Top-Right of Map */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in Google Maps"
              className="absolute top-4 right-4 z-10 px-3.5 py-2 rounded-lg bg-[#120B0A]/90 border border-[#C5A059]/40 text-[#DFBE7A] hover:text-[#F7F4EE] hover:border-[#DFBE7A] backdrop-blur-md text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Right: Clean, Curated Location Card with Location Pin */}
          <div className="lg:col-span-4 rounded-xl bg-[#1A1110] border border-[#C5A059]/30 p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              {/* Location Pin Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBE7A] shrink-0">
                  <MapPin className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#F7F4EE]">
                    Our Location
                  </h3>
                  <span className="text-[11px] text-[#A89F91]">
                    San Diego, California
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="space-y-1 text-sm text-[#ECE6DA] pt-2">
                <div className="text-xs uppercase tracking-wider text-[#A89F91]">
                  Address
                </div>
                <p className="font-medium">
                  {CAFE_INFO.address}
                  <br />
                  {CAFE_INFO.cityStateZip}
                </p>
                <p className="text-xs text-[#A89F91] pt-1">
                  Dedicated customer parking lot on-site.
                </p>
              </div>

              {/* Opening Hours */}
              <div className="space-y-2 pt-2 border-t border-[#C5A059]/15 text-xs text-[#ECE6DA]">
                <div className="text-xs uppercase tracking-wider text-[#A89F91]">
                  Hours
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89F91]">Mon – Fri:</span>
                  <span className="font-medium">{CAFE_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89F91]">Sat – Sun:</span>
                  <span className="font-medium">{CAFE_INFO.hours.weekends}</span>
                </div>
              </div>
            </div>

            {/* Direct Action Trigger */}
            <div className="pt-6 border-t border-[#C5A059]/20 space-y-3">
              <button
                onClick={onOpenReservation}
                className="w-full py-3 rounded text-xs font-semibold uppercase tracking-wider text-[#120B0A] bg-gradient-to-r from-[#DFBE7A] via-[#C5A059] to-[#A8813B] hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#120B0A]" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded text-xs font-medium text-center text-[#DFBE7A] border border-[#C5A059]/30 hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Locate on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
