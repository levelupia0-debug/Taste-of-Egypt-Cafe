import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Mail, ExternalLink } from 'lucide-react';
import { CartItem } from '../types';
import { SafeImage } from './SafeImage';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'dinein'>('dinein');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.0775; // San Diego sales tax
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    const num = `TOE-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(num);
    setOrderPlaced(true);
  };

  const handleResetAndClose = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1A1110] border-l border-[#C5A059]/30 text-[#F7F4EE] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#C5A059]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#F7F4EE]">
                Your Order Bag
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 rounded-full text-[#A89F91] hover:text-[#DFBE7A] hover:bg-[#231816] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 flex-1 overflow-y-auto">
            {orderPlaced ? (
              <div className="text-center py-6 space-y-5 animate-in fade-in duration-200">
                {/* Professional Demo Notice Box */}
                <div className="p-5 rounded-xl bg-gradient-to-b from-[#231816] to-[#120B0A] border border-[#C5A059]/50 shadow-xl space-y-3.5 text-left">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DFBE7A]">
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <span>Demonstration & Preview Mode</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#ECE6DA] leading-relaxed">
                    This is an interactive demonstration prototype for <strong className="text-[#DFBE7A]">Taste of Egypt Cafe</strong>. To finalize and launch your complete online ordering & table reservation system, please visit <strong className="text-[#DFBE7A]">LevelUp Ecosystem</strong>.
                  </p>

                  <div className="pt-2 border-t border-[#C5A059]/20 space-y-2 text-xs">
                    <div className="text-[#A89F91] text-[11px] uppercase tracking-wider">
                      Contact for Live Deployment:
                    </div>
                    <a
                      href="mailto:contact@levelup-ecosystem.com"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#DFBE7A] hover:text-[#F7F4EE] hover:underline"
                    >
                      <Mail className="w-4 h-4 text-[#C5A059]" />
                      <span>contact@levelup-ecosystem.com</span>
                    </a>
                  </div>

                  <a
                    href="https://levelup-ecosystem.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-3 py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider text-[#120B0A] bg-gradient-to-r from-[#DFBE7A] via-[#C5A059] to-[#A8813B] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Visit LevelUp Ecosystem</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Simulated Order Reference */}
                <div className="p-3.5 rounded bg-[#120B0A] border border-[#C5A059]/20 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-[#A89F91] block">
                    Demo Order Reference
                  </span>
                  <span className="text-lg font-bold font-mono text-[#DFBE7A]">
                    {orderNumber}
                  </span>
                </div>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 rounded text-xs font-medium text-[#ECE6DA] border border-[#C5A059]/30 hover:border-[#DFBE7A] hover:bg-[#C5A059]/10 transition-all cursor-pointer"
                >
                  Return to Menu
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-10 h-10 text-[#A89F91]/40 mx-auto" />
                <p className="text-sm text-[#ECE6DA]">Your order bag is empty</p>
                <p className="text-xs text-[#A89F91]">
                  Explore our signature Koshary, crispy Hawawshi, or fresh pastries.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 text-xs font-medium text-[#DFBE7A] border border-[#C5A059]/30 rounded hover:bg-[#C5A059]/10 transition-all cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Order Type Toggle */}
                <div className="grid grid-cols-2 p-1 bg-[#120B0A] rounded-lg border border-[#C5A059]/20 text-xs">
                  <button
                    onClick={() => setOrderType('dinein')}
                    className={`py-1.5 rounded text-center transition-all ${
                      orderType === 'dinein'
                        ? 'bg-[#C5A059] text-[#120B0A] font-semibold'
                        : 'text-[#A89F91] hover:text-[#ECE6DA]'
                    }`}
                  >
                    Dine-in
                  </button>
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={`py-1.5 rounded text-center transition-all ${
                      orderType === 'pickup'
                        ? 'bg-[#C5A059] text-[#120B0A] font-semibold'
                        : 'text-[#A89F91] hover:text-[#ECE6DA]'
                    }`}
                  >
                    Takeout (Pickup)
                  </button>
                </div>

                {/* Items List */}
                <div className="divide-y divide-[#C5A059]/10">
                  {items.map((item) => (
                    <div key={item.id} className="py-4 flex gap-3">
                      {item.image && (
                        <div className="w-14 h-14 shrink-0 rounded overflow-hidden border border-[#C5A059]/20 bg-[#231816]">
                          <SafeImage
                            src={item.image}
                            alt={item.name}
                            fallbackTitle={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-semibold text-[#F7F4EE] truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs font-semibold text-[#DFBE7A] tabular-nums shrink-0">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        {item.details && (
                          <p className="text-[11px] text-[#A89F91] mt-0.5 leading-snug line-clamp-2">
                            {item.details}
                          </p>
                        )}

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-1.5 border border-[#C5A059]/20 rounded bg-[#120B0A] px-1 py-0.5">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              aria-label="Decrease quantity"
                              className="p-1 text-[#A89F91] hover:text-[#DFBE7A]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono font-medium px-1 tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              aria-label="Increase quantity"
                              className="p-1 text-[#A89F91] hover:text-[#DFBE7A]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            aria-label="Remove item"
                            className="text-[#A89F91] hover:text-red-400 p-1 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details */}
                <div className="pt-4 border-t border-[#C5A059]/15 space-y-2.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#DFBE7A]">
                    Customer Details (Name & Phone)
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#120B0A] border border-[#C5A059]/20 rounded px-3 py-1.5 text-xs text-[#F7F4EE] placeholder-[#A89F91]/50 focus:outline-none focus:border-[#C5A059]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number (e.g., (619) 000-0000)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-[#120B0A] border border-[#C5A059]/20 rounded px-3 py-1.5 text-xs text-[#F7F4EE] placeholder-[#A89F91]/50 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Totals & CTA */}
          {!orderPlaced && items.length > 0 && (
            <div className="p-6 border-t border-[#C5A059]/20 bg-[#120B0A] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#A89F91]">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#A89F91]">
                  <span>Local Sales Tax (7.75%)</span>
                  <span className="tabular-nums font-mono">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#F7F4EE] pt-1 border-t border-[#C5A059]/15">
                  <span>Total Amount</span>
                  <span className="text-base text-[#DFBE7A] tabular-nums font-sans">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full py-3 rounded text-xs font-semibold uppercase tracking-wider text-[#120B0A] bg-gradient-to-r from-[#DFBE7A] via-[#C5A059] to-[#A8813B] hover:brightness-110 active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
