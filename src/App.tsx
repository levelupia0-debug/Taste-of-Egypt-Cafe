import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OfficialMenuShowcase } from './components/OfficialMenuShowcase';
import { MenuSection } from './components/MenuSection';
import { SandwichBuilderModal } from './components/SandwichBuilderModal';
import { PhotoPortfolioSection } from './components/PhotoPortfolioSection';
import { StoryAndHeritage } from './components/StoryAndHeritage';
import { AccessAndVisit } from './components/AccessAndVisit';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('toe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isSandwichBuilderOpen, setIsSandwichBuilderOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('toe_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (item: {
    id: string;
    name: string;
    price: number;
    details?: string;
    image?: string;
  }) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.details === item.details
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.details === item.details
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast(`"${item.name}" added to your order.`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#120B0A] text-[#F7F4EE] flex flex-col font-sans selection:bg-[#C5A059]/30 selection:text-[#DFBE7A]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A1110] border border-[#C5A059] text-[#F7F4EE] text-xs px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#DFBE7A] animate-pulse" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-[11px] font-semibold uppercase tracking-wider text-[#DFBE7A] underline ml-2 cursor-pointer"
          >
            View
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenSandwichBuilder={() => setIsSandwichBuilderOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenSandwichBuilder={() => setIsSandwichBuilderOpen(true)}
        />

        {/* Authentic Restaurant Printed Menus (Food, Lunch & Bakery) */}
        <OfficialMenuShowcase />

        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenSandwichBuilder={() => setIsSandwichBuilderOpen(true)}
        />

        <PhotoPortfolioSection />

        <StoryAndHeritage />

        <AccessAndVisit onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenSandwichBuilder={() => setIsSandwichBuilderOpen(true)}
      />

      {/* Interactive Modals & Slide-out Drawers */}
      <SandwichBuilderModal
        isOpen={isSandwichBuilderOpen}
        onClose={() => setIsSandwichBuilderOpen(false)}
        onAddCustomSandwich={handleAddToCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
