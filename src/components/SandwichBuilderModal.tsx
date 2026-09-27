import React, { useState } from 'react';
import { X, Check, ChefHat, Sparkles } from 'lucide-react';
import { SANDWICH_BUILDER_OPTIONS } from '../data/menuData';

interface SandwichBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomSandwich: (item: {
    id: string;
    name: string;
    price: number;
    details: string;
    image?: string;
  }) => void;
}

export const SandwichBuilderModal: React.FC<SandwichBuilderModalProps> = ({
  isOpen,
  onClose,
  onAddCustomSandwich,
}) => {
  const [selectedBread, setSelectedBread] = useState(SANDWICH_BUILDER_OPTIONS.breads[1]); // Default Panini
  const [selectedProtein, setSelectedProtein] = useState<string | null>(SANDWICH_BUILDER_OPTIONS.proteins[2].name); // Grilled Chicken
  const [selectedToppings, setSelectedToppings] = useState<string[]>([
    SANDWICH_BUILDER_OPTIONS.toppings[0].name,
    SANDWICH_BUILDER_OPTIONS.toppings[1].name,
  ]);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([
    SANDWICH_BUILDER_OPTIONS.sauces[0].name,
  ]);
  const [specialNotes, setSpecialNotes] = useState('');

  if (!isOpen) return null;

  // Calculate dynamic price
  const proteinPrice = selectedProtein ? 2.0 : 0;
  const toppingsPrice = selectedToppings.length * 1.0;
  const totalPrice = selectedBread.price + proteinPrice + toppingsPrice;

  const toggleTopping = (toppingName: string) => {
    setSelectedToppings((prev) =>
      prev.includes(toppingName)
        ? prev.filter((t) => t !== toppingName)
        : [...prev, toppingName]
    );
  };

  const toggleSauce = (sauceName: string) => {
    setSelectedSauces((prev) =>
      prev.includes(sauceName)
        ? prev.filter((s) => s !== sauceName)
        : [...prev, sauceName]
    );
  };

  const handleConfirm = () => {
    const details = [
      `Bread: ${selectedBread.name}`,
      selectedProtein ? `Protein: ${selectedProtein}` : 'No protein',
      selectedToppings.length > 0 ? `Toppings: ${selectedToppings.join(', ')}` : '',
      selectedSauces.length > 0 ? `Sauces: ${selectedSauces.join(', ')}` : '',
      specialNotes ? `Note: ${specialNotes}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

    onAddCustomSandwich({
      id: `custom-sandwich-${Date.now()}`,
      name: `Custom Sandwich (${selectedBread.name.split(' ')[0]})`,
      price: totalPrice,
      details,
      image: '/src/assets/images/gourmet_bagel_sandwich_1790505229633.jpg',
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-xl bg-[#1A1110] border border-[#C5A059]/40 shadow-2xl p-6 sm:p-8 my-8 text-[#F7F4EE] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full border border-[#C5A059]/20 text-[#A89F91] hover:text-[#DFBE7A] hover:border-[#C5A059] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded bg-[#C5A059]/15 text-[#DFBE7A] border border-[#C5A059]/30">
            <ChefHat className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-[#DFBE7A]">
              Taste of Egypt Workshop
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-medium text-[#F7F4EE]">
              Make Your Own Sandwich
            </h2>
          </div>
        </div>

        <p className="text-xs text-[#A89F91] mb-6">
          Tailor each ingredient to your liking: freshly baked artisanal bread, slow-roasted meats, crisp toppings, and house-made sauces.
        </p>

        {/* Step 1: BREAD */}
        <div className="mb-6 pb-6 border-b border-[#C5A059]/15">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
              1. Choose Your Artisanal Bread
            </h3>
            <span className="text-[11px] text-[#A89F91]">
              Included from ${selectedBread.price.toFixed(2)}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {SANDWICH_BUILDER_OPTIONS.breads.map((bread) => {
              const isSelected = selectedBread.name === bread.name;
              return (
                <button
                  key={bread.name}
                  onClick={() => setSelectedBread(bread)}
                  className={`p-3 rounded text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#F7F4EE]'
                      : 'bg-[#231816]/70 border-[#C5A059]/15 text-[#ECE6DA] hover:border-[#C5A059]/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-medium">{bread.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </div>
                  <span className="text-[11px] text-[#DFBE7A] font-semibold mt-1">
                    ${bread.price.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: PROTEIN */}
        <div className="mb-6 pb-6 border-b border-[#C5A059]/15">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
              2. Add Premium Protein (+$2.00)
            </h3>
            <span className="text-[11px] text-[#A89F91]">Optional</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {SANDWICH_BUILDER_OPTIONS.proteins.map((prot) => {
              const isSelected = selectedProtein === prot.name;
              return (
                <button
                  key={prot.name}
                  onClick={() =>
                    setSelectedProtein(isSelected ? null : prot.name)
                  }
                  className={`p-3 rounded text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#F7F4EE]'
                      : 'bg-[#231816]/70 border-[#C5A059]/15 text-[#ECE6DA] hover:border-[#C5A059]/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-medium">{prot.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </div>
                  <span className="text-[11px] text-[#DFBE7A] font-semibold mt-1">
                    +${prot.price.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: EXTRA TOPPINGS */}
        <div className="mb-6 pb-6 border-b border-[#C5A059]/15">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
              3. Extra Toppings (+$1.00 each)
            </h3>
            <span className="text-[11px] text-[#A89F91]">Select multiple</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {SANDWICH_BUILDER_OPTIONS.toppings.map((top) => {
              const isSelected = selectedToppings.includes(top.name);
              return (
                <button
                  key={top.name}
                  onClick={() => toggleTopping(top.name)}
                  className={`p-3 rounded text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#F7F4EE]'
                      : 'bg-[#231816]/70 border-[#C5A059]/15 text-[#ECE6DA] hover:border-[#C5A059]/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-medium">{top.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </div>
                  <span className="text-[11px] text-[#DFBE7A] font-semibold mt-1">
                    +${top.price.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: SAUCES */}
        <div className="mb-6 pb-6 border-b border-[#C5A059]/15">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
              4. Complimentary House Sauces
            </h3>
            <span className="text-[11px] text-[#A89F91]">Included</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {SANDWICH_BUILDER_OPTIONS.sauces.map((sauce) => {
              const isSelected = selectedSauces.includes(sauce.name);
              return (
                <button
                  key={sauce.name}
                  onClick={() => toggleSauce(sauce.name)}
                  className={`p-3 rounded text-left border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#F7F4EE]'
                      : 'bg-[#231816]/70 border-[#C5A059]/15 text-[#ECE6DA] hover:border-[#C5A059]/40'
                  }`}
                >
                  <span className="text-xs font-medium">{sauce.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Optional Notes */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-[#A89F91] mb-2 uppercase tracking-wider">
            Special Preparation Notes (e.g., extra toasted, sauce on the side...)
          </label>
          <input
            type="text"
            value={specialNotes}
            onChange={(e) => setSpecialNotes(e.target.value)}
            placeholder="e.g., Well toasted, extra napkins..."
            className="w-full bg-[#231816] border border-[#C5A059]/20 rounded px-3 py-2 text-xs text-[#F7F4EE] placeholder-[#A89F91]/50 focus:outline-none focus:border-[#C5A059]"
          />
        </div>

        {/* Summary Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#C5A059]/30">
          <div>
            <div className="text-[11px] text-[#A89F91]">Total Price:</div>
            <div className="text-2xl font-bold font-sans text-[#DFBE7A] tabular-nums">
              ${totalPrice.toFixed(2)}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-medium text-[#A89F91] hover:text-[#F7F4EE] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="w-1/2 sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#120B0A] bg-gradient-to-r from-[#DFBE7A] via-[#C5A059] to-[#A8813B] rounded hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#120B0A]" />
              <span>Add Custom Sandwich</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
