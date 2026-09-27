import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-[#1A1110] via-[#120B0A] to-[#0D0706] border border-[#C5A059]/30 flex flex-col items-center justify-center p-4 text-center select-none overflow-hidden relative ${className}`}
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-radial from-[#9333EA]/10 via-transparent to-transparent pointer-events-none" />

        {/* LevelUp Ecosystem Official Logo Fallback */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-[85%]">
          <img
            src="/levelup-logo.svg"
            alt="LevelUp Ecosystem"
            className="w-auto h-8 sm:h-10 object-contain drop-shadow-md mb-2.5 opacity-90 transition-opacity hover:opacity-100"
          />

          {fallbackTitle ? (
            <span className="font-['Cormorant_Garamond'] text-sm sm:text-base text-[#F7F4EE]/90 font-medium truncate max-w-full">
              {fallbackTitle}
            </span>
          ) : alt ? (
            <span className="font-['Cormorant_Garamond'] text-xs sm:text-sm text-[#DFBE7A]/80 font-medium truncate max-w-full">
              {alt}
            </span>
          ) : null}

          <span className="text-[9px] uppercase tracking-[0.2em] text-[#C084FC]/80 mt-1 font-sans">
            Powered by LevelUp Ecosystem
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      loading="lazy"
      {...props}
    />
  );
};
