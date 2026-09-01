import React, { useState } from 'react';
import { CoreValueItem } from '../data/content';
import { Heart, HandHeart, Sparkles, Lightbulb, Flower2, Send } from 'lucide-react';

interface CoreValuesProps {
  onSelectValue?: (value: CoreValueItem) => void;
}

interface ValueCardData {
  id: string;
  name: string;
  iconType: 'heart' | 'handHeart' | 'star' | 'lightbulb' | 'flower';
  badgeBg: string;
  description: string;
}

const VALUE_ITEMS: ValueCardData[] = [
  {
    id: 'cageur',
    name: 'Cageur',
    iconType: 'heart',
    badgeBg: 'bg-[#7cb342]', // Lime green
    description: 'Sehat jasmani, rohani, dan sosial.',
  },
  {
    id: 'bageur',
    name: 'Bageur',
    iconType: 'handHeart',
    badgeBg: 'bg-[#0288d1]', // Cerulean sky blue
    description: 'Berakhlak mulia, peduli, dan berempati.',
  },
  {
    id: 'bener',
    name: 'Bener',
    iconType: 'star',
    badgeBg: 'bg-[#f59e0b]', // Golden amber
    description: 'Jujur, amanah, dan bertanggung jawab.',
  },
  {
    id: 'pinter',
    name: 'Pinter',
    iconType: 'lightbulb',
    badgeBg: 'bg-[#f43f5e]', // Coral rose/pink
    description: 'Cerdas, kritis, kreatif, dan berwawasan luas.',
  },
  {
    id: 'singer',
    name: 'Singer',
    iconType: 'flower',
    badgeBg: 'bg-[#8e24aa]', // Deep purple
    description: 'Mandiri, percaya diri, dan siap bersaing global.',
  },
];

export const CoreValues: React.FC<CoreValuesProps> = ({ onSelectValue }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const renderIcon = (type: ValueCardData['iconType']) => {
    switch (type) {
      case 'heart':
        return (
          <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center">
            <Heart className="w-3.5 h-3.5 text-white fill-white stroke-[2]" />
          </div>
        );
      case 'handHeart':
        return (
          <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-none stroke-current stroke-[2]">
              <circle cx="12" cy="7" r="3" />
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              <path d="M12 11l1 1 2-2" />
            </svg>
          </div>
        );
      case 'star':
        return (
          <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-none stroke-current stroke-[2]">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1" />
            </svg>
          </div>
        );
      case 'lightbulb':
        return (
          <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center">
            <Lightbulb className="w-3.5 h-3.5 text-white stroke-[2]" />
          </div>
        );
      case 'flower':
        return (
          <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center">
            <Flower2 className="w-3.5 h-3.5 text-white stroke-[2]" />
          </div>
        );
      default:
        return <Sparkles className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="core-values-section" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* SURROUNDING PLAYFUL ILLUSTRATIONS (LEFT & RIGHT) */}
      <div className="max-w-7xl mx-auto relative">
        
        {/* Top-Left Red Dotted Path */}
        <div className="absolute -left-6 -top-4 w-28 h-20 pointer-events-none select-none hidden lg:block opacity-70">
          <svg viewBox="0 0 100 70" fill="none" className="w-full h-full">
            <path 
              d="M10 60 C 20 20, 60 10, 90 40" 
              stroke="#fb7185" 
              strokeWidth="2.5" 
              strokeDasharray="4 4" 
            />
            <circle cx="85" cy="42" r="2" fill="#fb7185" />
            <circle cx="65" cy="18" r="1.5" fill="#f43f5e" />
          </svg>
        </div>

        {/* Bottom-Left Peach/Coral Waves, Yellow Dotted Semicircle & Paper Airplane */}
        <div className="absolute -left-10 -bottom-6 w-48 sm:w-64 h-36 sm:h-44 pointer-events-none select-none z-10 hidden md:block">
          {/* Coral Waves */}
          <div className="absolute bottom-0 left-0 w-36 h-20 bg-[#fca5a5]/70 rounded-tr-[50px] -z-10" />
          <div className="absolute bottom-0 left-6 w-28 h-28 bg-[#fed7aa]/80 rounded-t-full -z-20" />
          
          {/* Yellow Dotted Pattern */}
          <div className="absolute bottom-6 left-12 grid grid-cols-4 gap-1.5 opacity-60">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            ))}
          </div>

          {/* White Origami Paper Airplane */}
          <div className="absolute bottom-6 left-4 animate-float">
            <Send className="w-8 h-8 -rotate-12 text-white fill-white drop-shadow-md" />
          </div>
        </div>

        {/* Bottom-Right Green Leaves & Warm Yellow/Orange Waves */}
        <div className="absolute -right-8 -bottom-6 w-48 sm:w-60 h-36 sm:h-44 pointer-events-none select-none z-10 hidden md:block">
          {/* Yellow/Orange Waves */}
          <div className="absolute bottom-0 right-0 w-32 h-20 bg-[#fcd34d]/80 rounded-tl-[40px] -z-10" />
          <div className="absolute bottom-0 right-8 w-28 h-24 bg-[#fb923c]/70 rounded-tl-[60px] -z-20" />
          
          {/* Green Plant/Leaves SVG */}
          <svg className="absolute bottom-8 right-12 w-12 h-16 text-[#16a34a] fill-current drop-shadow-sm" viewBox="0 0 50 70">
            <path d="M25 70 C25 45 40 40 45 25 C35 25 25 35 25 45 C25 30 15 20 5 20 C5 35 15 45 25 70 Z" />
            <path d="M25 50 C30 35 45 20 40 5 C30 5 25 20 25 35 Z" fill="#22c55e" />
          </svg>

          {/* Dot Matrix */}
          <div className="absolute bottom-4 right-6 grid grid-cols-3 gap-1 opacity-70">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#15803d]" />
            ))}
          </div>
        </div>

        {/* MAIN CAPSULE CONTAINER */}
        <div className="relative rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-[#0D785D] via-[#0FA888] to-[#0ba88a] text-white shadow-xl shadow-teal-950/15 overflow-hidden border border-white/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT DARK TEAL BLOCK WITH ORGANIC CURVE */}
            <div className="lg:col-span-3.5 xl:col-span-3 bg-[#0D785D] p-5 sm:p-6 lg:py-7 lg:pl-7 lg:pr-8 relative flex flex-col justify-center rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[36px] shadow-md z-10">
              
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-2">
                Nilai Inti<br />
                Asih Putera
              </h2>
              
              <p className="text-teal-50/90 text-xs sm:text-[12.5px] leading-relaxed font-normal">
                Menjadi pribadi utuh yang bermanfaat bagi diri, keluarga, dan peradaban.
              </p>

              {/* Bottom White Cloud sitting on the edge */}
              <div className="absolute -bottom-1.5 right-6 sm:right-10 pointer-events-none select-none">
                <svg className="w-10 h-5 text-white fill-current drop-shadow-xs" viewBox="0 0 24 14">
                  <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
            </div>

            {/* RIGHT 5 PILLARS (TEAL BACKGROUND WITH VERTICAL DIVIDERS) */}
            <div className="lg:col-span-8.5 xl:col-span-9 p-4 sm:p-5 lg:py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-0 items-center">
              {VALUE_ITEMS.map((item, index) => {
                const isHovered = hoveredId === item.id;
                const isLast = index === VALUE_ITEMS.length - 1;

                return (
                  <div
                    key={item.id}
                    id={`core-value-${item.id}`}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => onSelectValue && onSelectValue({
                      id: item.id,
                      name: item.name,
                      icon: item.iconType,
                      description: item.description
                    })}
                    className={`flex flex-col items-center text-center px-2 py-2 sm:px-3 sm:py-2 transition-all duration-200 cursor-pointer ${
                      !isLast ? 'md:border-r md:border-white/30' : ''
                    } ${isHovered ? 'bg-white/15 rounded-xl scale-105' : 'hover:bg-white/10 rounded-xl'}`}
                  >
                    {/* Double-Ring Circular Icon Badge */}
                    <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full ${item.badgeBg} flex items-center justify-center mb-2.5 shadow-md ring-3 ring-white ring-offset-2 ring-offset-[#0FA888] transform transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`}>
                      {renderIcon(item.iconType)}
                    </div>

                    {/* Value Title */}
                    <h3 className="font-extrabold text-sm sm:text-base text-white mb-1 tracking-tight">
                      {item.name}
                    </h3>

                    {/* Value Description */}
                    <p className="text-[11px] sm:text-[11.5px] text-teal-50/95 leading-snug font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

