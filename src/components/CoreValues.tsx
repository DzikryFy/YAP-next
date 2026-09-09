import React, { useState } from 'react';
import { CoreValueItem } from '../data/content';
import { Sprout, Users, Scale, Lightbulb, Settings2, Sparkles, Send } from 'lucide-react';

interface CoreValuesProps {
  onSelectValue?: (value: CoreValueItem) => void;
}

interface ValueCardData {
  id: string;
  name: string;
  iconType: CoreValueItem['icon'];
  badgeBg: string;
  description: string;
}

const VALUE_ITEMS: ValueCardData[] = [
  {
    id: 'cageur',
    name: 'Cageur',
    iconType: 'sprout',
    badgeBg: 'bg-[#7cb342]',
    description: 'Sehat jasmani, rohani, dan sosial.',
  },
  {
    id: 'bageur',
    name: 'Bageur',
    iconType: 'users',
    badgeBg: 'bg-[#0288d1]',
    description: 'Berakhlak mulia, peduli, dan berempati.',
  },
  {
    id: 'bener',
    name: 'Bener',
    iconType: 'scale',
    badgeBg: 'bg-[#f59e0b]',
    description: 'Jujur, amanah, dan bertanggung jawab.',
  },
  {
    id: 'pinter',
    name: 'Pinter',
    iconType: 'lightbulb',
    badgeBg: 'bg-[#f43f5e]',
    description: 'Cerdas, kritis, kreatif, dan berwawasan luas.',
  },
  {
    id: 'singer',
    name: 'Singer',
    iconType: 'settings',
    badgeBg: 'bg-[#8e24aa]',
    description: 'Mandiri, percaya diri, dan siap bersaing global.',
  },
];

export const CoreValues: React.FC<CoreValuesProps> = ({ onSelectValue }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const renderIcon = (type: ValueCardData['iconType']) => {
    switch (type) {
      case 'sprout':
        return (
          <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center">
            <Sprout className="w-5 h-5 text-white stroke-2" />
          </div>
        );
      case 'users':
        return (
          <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center">
            <Users className="w-5 h-5 text-white stroke-2" />
          </div>
        );
      case 'scale':
        return (
          <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center">
            <Scale className="w-5 h-5 text-white stroke-2" />
          </div>
        );
      case 'lightbulb':
        return (
          <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-white stroke-2" />
          </div>
        );
      case 'settings':
        return (
          <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center">
            <Settings2 className="w-5 h-5 text-white stroke-2" />
          </div>
        );
      default:
        return <Sparkles className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="core-values-section" className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* SURROUNDING PLAYFUL ILLUSTRATIONS (LEFT & RIGHT) */}
      <div className="max-w-7xl mx-auto relative">
        
        {/* Top-Left Red Dotted Path */}
        <div className="absolute -left-6 -top-4 w-28 h-20 pointer-events-none select-none hidden lg:block opacity-70 z-0">
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

        {/* Bottom-Left Peach/Coral Waves & Airplane */}
        <div className="absolute -left-10 -bottom-6 w-48 sm:w-64 h-36 sm:h-44 pointer-events-none select-none z-0 hidden md:block">
          <div className="absolute bottom-0 left-0 w-36 h-20 bg-[#fca5a5]/70 rounded-tr-[50px] -z-10" />
          <div className="absolute bottom-0 left-6 w-28 h-28 bg-[#fed7aa]/80 rounded-t-full -z-20" />
          
          <div className="absolute bottom-6 left-12 grid grid-cols-4 gap-1.5 opacity-60">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            ))}
          </div>

          <div className="absolute bottom-6 left-4 animate-float">
            <Send className="w-8 h-8 -rotate-12 text-white fill-white drop-shadow-md" />
          </div>
        </div>

        {/* Bottom-Right Green Leaves & Waves (Ditempatkan di z-0 & digeser agar tidak menutupi teks Singer) */}
        <div className="absolute -right-6 -bottom-8 w-40 sm:w-52 h-32 sm:h-40 pointer-events-none select-none z-0 hidden md:block">
          <div className="absolute bottom-0 right-0 w-28 h-16 bg-[#fcd34d]/80 rounded-tl-[40px] -z-10" />
          <div className="absolute bottom-0 right-6 w-24 h-20 bg-[#fb923c]/70 rounded-tl-[50px] -z-20" />
          
          <svg className="absolute bottom-6 right-8 w-10 h-14 text-[#16a34a] fill-current drop-shadow-sm" viewBox="0 0 50 70">
            <path d="M25 70 C25 45 40 40 45 25 C35 25 25 35 25 45 C25 30 15 20 5 20 C5 35 15 45 25 70 Z" />
            <path d="M25 50 C30 35 45 20 40 5 C30 5 25 20 25 35 Z" fill="#22c55e" />
          </svg>

          <div className="absolute bottom-3 right-4 grid grid-cols-3 gap-1 opacity-70">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#15803d]" />
            ))}
          </div>
        </div>

        {/* MAIN CAPSULE CONTAINER (Warna Solid #0C4229 & z-20 agar teks selalu di atas ilustrasi) */}
        <div className="relative z-20 rounded-3xl sm:rounded-4xl bg-[#0C4229] text-white shadow-xl shadow-teal-950/15 overflow-hidden border border-white/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT BLOCK */}
            <div className="lg:col-span-3.5 xl:col-span-3 p-5 sm:p-6 lg:py-7 lg:pl-7 lg:pr-8 relative flex flex-col justify-center rounded-b-3xl lg:rounded-b-none lg:rounded-r-[36px] shadow-xs">
              
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-2">
                Nilai Inti<br />
                Asih Putera
              </h2>
              
              <p className="text-teal-50/90 text-sm sm:text-[14px] leading-relaxed font-normal">
                Menjadi pribadi utuh yang bermanfaat bagi diri, keluarga, dan peradaban.
              </p>

              {/* Awan Putih di Pojok Bawah */}
              <div className="absolute -bottom-1.5 right-6 sm:right-10 pointer-events-none select-none">
                <svg className="w-10 h-5 text-white fill-current drop-shadow-xs" viewBox="0 0 24 14">
                  <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
            </div>

            {/* RIGHT 5 PILLARS */}
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
                      !isLast ? 'md:border-r md:border-white/20' : ''
                    } ${isHovered ? 'bg-white/15 rounded-xl scale-105' : 'hover:bg-white/10 rounded-xl'}`}
                  >
                    {/* Double-Ring Circular Icon Badge */}
                    <div className={`w-15 h-15 sm:w-16 sm:h-16 rounded-full ${item.badgeBg} flex items-center justify-center mb-2.5 shadow-md ring-3 ring-white ring-offset-2 ring-offset-[#0C4229] transform transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`}>
                      {renderIcon(item.iconType)}
                    </div>

                    {/* Value Title */}
                    <h3 className="font-extrabold text-base sm:text-lg text-white mb-1 tracking-tight">
                      {item.name}
                    </h3>

                    {/* Value Description */}
                    <p className="text-xs sm:text-[13px] text-teal-50/95 leading-snug font-normal">
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