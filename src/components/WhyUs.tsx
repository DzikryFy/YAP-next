import React from 'react';
import { FEATURES, FeatureItem } from '../data/content';
import { Sprout, Moon, Users, BookOpen, Heart, CheckCircle2 } from 'lucide-react';

interface WhyUsProps {
  onCardClick?: (feature: FeatureItem) => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onCardClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sprout':
        return <Sprout className="w-5 h-5 text-emerald-400" />;
      case 'moon':
        return <Moon className="w-5 h-5 text-amber-400" />;
      case 'users':
        return <Users className="w-5 h-5 text-sky-400" />;
      case 'bookOpen':
        return <BookOpen className="w-5 h-5 text-purple-300" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-pink-400 fill-pink-400/20" />;
      case 'checkCircle':
        return <CheckCircle2 className="w-5 h-5 text-cyan-300" />;
      default:
        return <Sprout className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="why-us-section" className="py-10 sm:py-12 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Badge with stars */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-teal-500 text-xl select-none animate-float">✦</span>
          <div className="bg-white/90 backdrop-blur-xs border-2 border-teal-100 px-7 py-2 rounded-full shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F7A60] tracking-tight">
              Mengapa Asih Putera?
            </h2>
          </div>
          <span className="text-amber-400 text-xl select-none animate-float-delayed">✦</span>
        </div>

        {/* 6-Column Photographic Grid Cards from Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {FEATURES.map((item) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              onClick={() => onCardClick && onCardClick(item)}
              className="relative h-[320px] sm:h-[340px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group border border-white/20 bg-slate-900 flex flex-col justify-between p-3.5 sm:p-4"
            >
              {/* Background Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Rich Multi-stop Dark Teal Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062921] via-[#062921]/85 via-50% to-black/30 pointer-events-none" />

              {/* Top Row: Translucent Icon & Pill Number Badge */}
              <div className="relative z-10 flex items-center justify-between">
                {/* Rounded Square Glass Icon */}
                <div className="w-8 h-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 group-hover:bg-black/50">
                  {getIcon(item.iconName)}
                </div>

                {/* Pill Number Badge */}
                <div className="px-2 py-0.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-white/90 text-[10px] font-mono font-bold tracking-wider shadow-xs">
                  {item.number}
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-1">
                {/* Category Tracking Label */}
                <div 
                  className="text-[9px] font-extrabold uppercase tracking-widest"
                  style={{ color: item.accentColor }}
                >
                  {item.category}
                </div>

                {/* Main Title */}
                <h3 className="text-xs sm:text-[13px] font-black text-white leading-tight tracking-tight drop-shadow-xs">
                  {item.title}
                </h3>

                {/* Description Body */}
                <p className="text-[10px] sm:text-[11px] text-white/80 leading-relaxed pt-0.5 line-clamp-2 font-normal">
                  {item.description}
                </p>

                {/* Bottom Tag / Footer */}
                <div className="pt-1.5 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-teal-300/90 group-hover:text-teal-200 transition-colors">
                    {item.footerTag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

