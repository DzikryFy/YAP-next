import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div 
      className={`w-full py-4 sm:py-6 overflow-hidden flex items-center justify-center relative select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Background Repeating Islamic Geometric Watermark Pattern */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(15, 122, 96, 0.08) 0%, transparent 80%), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(197, 155, 76, 0.06) 60px, rgba(197, 155, 76, 0.06) 120px)`,
        }}
      >
        <svg className="w-full h-full text-[#c59b4c]/20" preserveAspectRatio="none">
          <pattern id="islamic-band-pattern" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
            {/* 8-pointed geometric stars repeated */}
            <path 
              d="M40 4 L44 14 L55 14 L46 21 L50 31 L40 25 L30 31 L34 21 L25 14 L36 14 Z" 
              fill="none" 
              stroke="#c59b4c" 
              strokeWidth="0.75" 
              opacity="0.35" 
            />
            <path 
              d="M0 4 L4 14 L15 14 L6 21 L10 31 L0 25 L-10 31 L-6 21 L-15 14 L-4 14 Z" 
              fill="none" 
              stroke="#c59b4c" 
              strokeWidth="0.75" 
              opacity="0.35" 
            />
            <path 
              d="M80 4 L84 14 L95 14 L86 21 L90 31 L80 25 L70 31 L74 21 L65 14 L76 14 Z" 
              fill="none" 
              stroke="#c59b4c" 
              strokeWidth="0.75" 
              opacity="0.35" 
            />
            <line x1="0" y1="20" x2="80" y2="20" stroke="#0F7A60" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-band-pattern)" />
        </svg>
      </div>

      {/* Main Divider Structure */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8 flex items-center justify-center">
        
        {/* Left Fading Gradient Line */}
        <div className="flex-1 flex items-center justify-end">
          <div className="w-full max-w-md h-[1.5px] bg-gradient-to-r from-transparent via-[#0F7A60]/50 to-[#c59b4c]" />
          {/* Small Hollow Diamond on the Left */}
          <div className="w-2.5 h-2.5 border border-[#c59b4c] rotate-45 ml-2 mr-2.5 bg-[#f7faf9] shrink-0" />
          {/* Small Gold Dot Left */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#c59b4c] shrink-0 mr-3" />
        </div>

        {/* Centerpiece: Islamic Octagram / Rub el Hizb Ornament */}
        <div className="relative flex items-center justify-center w-8 h-8 shrink-0 mx-1">
          {/* Outer Gold Rotated Square */}
          <div className="absolute inset-1 border-[1.5px] border-[#c59b4c] rotate-45 rounded-[2px]" />
          
          {/* Inner Teal Square */}
          <div className="absolute inset-1.5 border-[1.5px] border-[#0F7A60] rotate-0 rounded-[1px] bg-white/60 backdrop-blur-xs" />
          
          {/* Center Green/Teal Dot */}
          <div className="w-2 h-2 rounded-full bg-[#0F7A60] border border-white shadow-xs z-10" />
        </div>

        {/* Right Fading Gradient Line */}
        <div className="flex-1 flex items-center justify-start">
          {/* Small Gold Dot Right */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#c59b4c] shrink-0 ml-3" />
          {/* Small Hollow Diamond on the Right */}
          <div className="w-2.5 h-2.5 border border-[#c59b4c] rotate-45 ml-2.5 mr-2 bg-[#f7faf9] shrink-0" />
          <div className="w-full max-w-md h-[1.5px] bg-gradient-to-r from-[#c59b4c] via-[#0F7A60]/50 to-transparent" />
        </div>

      </div>

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-1 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#c59b4c]/20 to-transparent pointer-events-none" />
    </div>
  );
};
