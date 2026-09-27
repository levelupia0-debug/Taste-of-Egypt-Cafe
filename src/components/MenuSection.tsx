import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { MENU_ITEMS, FLAVOR_OPTIONS } from '../data/menuData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: {
    id: string;
    name: string;
    price: number;
    details?: string;
    image?: string;
  }) => void;
  onOpenSandwichBuilder: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenSandwichBuilder,
}) => {
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});
  const [selectedVariants, setSelectedVariants] = useState<Record<string, { size: string; price: number }>>({});
  const [selectedFlavors, setSelectedFlavors] = useState<Record<string, string>>({});

  const handleAdd = (item: MenuItem) => {
    const variant = selectedVariants[item.id];
    const flavor = selectedFlavors[item.id];
    let price = variant ? variant.price : item.price;
    const detailsArr: string[] = [];

    if (variant) {
      detailsArr.push(`Size: ${variant.size}`);
    }
    if (flavor) {
      price += 1.0;
      detailsArr.push(`Flavor: ${flavor} (+$1.00)`);
    }

    onAddToCart({
      id: `${item.id}-${variant?.size || 'std'}-${flavor || 'none'}`,
      name: item.name,
      price,
      details: detailsArr.length > 0 ? detailsArr.join(' · ') : undefined,
      image: item.image,
    });

    // Provide visual feedback for 1.2s
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs uppercase tracking-[0.25em] text-[#DFBE7A] font-medium mb-3">
          Curated Dining & Artisanal Delicacies
        </div>
        <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-normal text-[#F7F4EE] tracking-tight">
          The Culinary Menu & Eastern Sweets
        </h2>
        <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto my-4" />
        <p className="text-sm sm:text-base text-[#A89F91] font-light leading-relaxed">
          Crafted with genuine spices imported from Egypt, slow-cooked meats, and handcrafted pure butter pastries baked every morning.
        </p>
      </div>

      {/* Product Cards Grid (3 Columns Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {MENU_ITEMS.map((item) => {
          const isAdded = addedItemIds[item.id];
          const currentVariant = selectedVariants[item.id];
          const currentFlavor = selectedFlavors[item.id];
          const displayPrice = (currentVariant ? currentVariant.price : item.price) + (currentFlavor ? 1.0 : 0);

          return (
            <div
              key={item.id}
              className="group rounded-lg bg-[#1A1110] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col overflow-hidden shadow-md hover:-translate-y-1"
            >
              {/* Product Imagery */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#231816]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#231816] to-[#120B0A] text-[#C5A059]/40">
                    <span className="font-['Cinzel'] text-sm tracking-widest uppercase">Taste of Egypt</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1110] via-transparent to-transparent opacity-60" />

                {item.tags && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase text-[#DFBE7A] bg-[#120B0A]/85 backdrop-blur-sm px-2.5 py-1 rounded border border-[#C5A059]/30">
                    {item.tags.join(' · ')}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-medium text-[#F7F4EE] leading-snug group-hover:text-[#DFBE7A] transition-colors">
                      {item.name}
                    </h3>
                    <div className="font-sans text-base font-semibold text-[#DFBE7A] tabular-nums shrink-0">
                      ${displayPrice.toFixed(2)}
                    </div>
                  </div>

                  {item.originalName && item.originalName !== item.name && (
                    <div className="text-[11px] text-[#C5A059]/80 uppercase tracking-widest mb-2 font-medium">
                      {item.originalName}
                    </div>
                  )}

                  <p className="text-xs text-[#A89F91] font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Variant Options for Coffee (Sizes) */}
                <div className="space-y-3 pt-3 border-t border-[#C5A059]/10">
                  {item.priceVariants && (
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#A89F91]">Size:</span>
                      <div className="flex items-center gap-1">
                        {item.priceVariants.map((variant) => (
                          <button
                            key={variant.size}
                            onClick={() =>
                              setSelectedVariants((prev) => ({
                                ...prev,
                                [item.id]: variant,
                              }))
                            }
                            className={`px-2 py-0.5 text-[11px] rounded transition-all cursor-pointer ${
                              (currentVariant?.size || item.priceVariants?.[0].size) === variant.size
                                ? 'bg-[#C5A059]/20 text-[#DFBE7A] border border-[#C5A059]/40 font-semibold'
                                : 'text-[#A89F91] hover:text-[#ECE6DA]'
                            }`}
                          >
                            {variant.size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Flavor Addon for Beverages */}
                  {item.category === 'beverages' && (
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#A89F91]">Flavor (+$1):</span>
                      <select
                        aria-label={`Choose flavor for ${item.name}`}
                        value={currentFlavor || ''}
                        onChange={(e) =>
                          setSelectedFlavors((prev) => ({
                            ...prev,
                            [item.id]: e.target.value,
                          }))
                        }
                        className="bg-[#231816] text-[#ECE6DA] border border-[#C5A059]/20 rounded text-[11px] px-2 py-1 focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="">No flavor</option>
                        {FLAVOR_OPTIONS.map((f) => (
                          <option key={f.name} value={f.name}>
                            {f.name} (+${f.price.toFixed(2)})
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAdd(item)}
                    className={`w-full py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#C5A059]/15 text-[#DFBE7A] border border-[#C5A059]/30 hover:bg-[#C5A059] hover:text-[#120B0A]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Order</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
