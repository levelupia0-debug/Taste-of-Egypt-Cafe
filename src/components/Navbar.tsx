import React, { useState } from 'react';
import { ShoppingBag, Calendar, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onOpenSandwichBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  onOpenSandwichBuilder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#120B0A]/95 backdrop-blur-md border-b border-[#C5A059]/20 transition-all duration-300">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single Brand Lockup without surrounding border box */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
        >
          {/* Stylized Cloche emblem clean without box/frame */}
          <div className="w-9 h-9 flex items-center justify-center text-[#C5A059] group-hover:text-[#DFBE7A] transition-colors">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M12 3v2" />
              <path d="M10 2.5c.5.8 1.5 1.5 2 1.5s1.5-.7 2-1.5" />
              <path d="M4 14a8 8 0 0 1 16 0H4z" />
              <path d="M2 17h20" />
              <path d="M5 20h14" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-['Cinzel'] text-lg sm:text-xl font-bold tracking-widest text-[#F7F4EE] group-hover:text-[#DFBE7A] transition-colors">
              TASTE OF EGYPT
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase -mt-0.5">
              Cafe & Bakery
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#ECE6DA]">
          <a
            href="#menu"
            className="hover:text-[#DFBE7A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Menu
          </a>
          <button
            onClick={onOpenSandwichBuilder}
            className="hover:text-[#DFBE7A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform cursor-pointer"
          >
            Custom Sandwich
          </button>
          <a
            href="#portfolio"
            className="hover:text-[#DFBE7A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Gallery
          </a>
          <a
            href="#story"
            className="hover:text-[#DFBE7A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Our Story
          </a>
          <a
            href="#location"
            className="hover:text-[#DFBE7A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Location
          </a>
        </nav>

        {/* Zone 3: Actions (Clean Shopping Cart without outer frame box) */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#120B0A] bg-gradient-to-r from-[#DFBE7A] via-[#C5A059] to-[#A8813B] rounded hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#C5A059]/10"
          >
            <Calendar className="w-3.5 h-3.5 text-[#120B0A]" />
            <span className="whitespace-nowrap">Reserve Table</span>
          </button>

          {/* Clean shopping bag icon button without border box */}
          <button
            onClick={onOpenCart}
            aria-label="View order bag"
            className="relative p-2 text-[#ECE6DA] hover:text-[#DFBE7A] transition-colors flex items-center justify-center cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C5A059] text-[#120B0A] font-bold text-[10px] flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="md:hidden p-2 text-[#ECE6DA] hover:text-[#DFBE7A]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#C5A059]/20 bg-[#1A1110] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#ECE6DA]">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DFBE7A]"
            >
              Menu & Specialties
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSandwichBuilder();
              }}
              className="py-1 text-left hover:text-[#DFBE7A]"
            >
              Custom Sandwich Builder
            </button>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DFBE7A]"
            >
              Photo Gallery
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DFBE7A]"
            >
              Our Story
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DFBE7A]"
            >
              Hours & Location
            </a>
          </nav>

          <div className="pt-4 border-t border-[#C5A059]/15 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#120B0A] bg-[#C5A059] rounded"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
