import React, { useRef, useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id="testimonials-section" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white/40">
      
      {/* Decorative Organic Left Background Blob & Dots */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-48 h-64 pointer-events-none select-none hidden lg:block opacity-60">
        <svg viewBox="0 0 200 300" className="w-full h-full text-teal-100" fill="currentColor">
          <path d="M-50 0 C50 30 120 80 100 160 C80 240 20 280 -50 300 Z" opacity="0.4" />
        </svg>
        {/* Scattered Teal Dots */}
        <div className="absolute top-12 left-16 grid grid-cols-3 gap-2 opacity-40">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          ))}
        </div>
      </div>

      {/* Decorative Organic Right Background Blob & Dots */}
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-48 h-64 pointer-events-none select-none hidden lg:block opacity-70">
        <svg viewBox="0 0 200 300" className="w-full h-full text-rose-100" fill="currentColor">
          <path d="M250 0 C150 40 80 100 100 180 C120 250 180 290 250 300 Z" opacity="0.5" />
        </svg>
        {/* Scattered Coral/Rose Dots */}
        <div className="absolute bottom-10 right-16 grid grid-cols-3 gap-2 opacity-50">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading with Islamic Golden Geometric Ornaments */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 text-center">
          {/* Left Gold Ornament */}
          <div className="flex items-center gap-1.5 text-[#facc15] shrink-0 select-none" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-[1.5px] border-[#facc15] rotate-45 flex items-center justify-center bg-[#facc15]/10">
              <div className="w-1.5 h-1.5 bg-[#facc15]" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          </div>

          {/* Centered Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0F7A60] tracking-tight font-serif sm:font-sans">
            Apa Kata Orang Tua & Alumni
          </h2>

          {/* Right Gold Ornament */}
          <div className="flex items-center gap-1.5 text-[#facc15] shrink-0 select-none" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-[1.5px] border-[#facc15] rotate-45 flex items-center justify-center bg-[#facc15]/10">
              <div className="w-1.5 h-1.5 bg-[#facc15]" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          </div>
        </div>

        {/* Carousel & Cards Container with Side Navigation Pill Arrows */}
        <div className="relative px-2 sm:px-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Testimonial sebelumnya"
            className={`absolute -left-1 sm:-left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-7 sm:w-8 h-10 sm:h-12 bg-[#facc15] hover:bg-[#eab308] active:bg-[#ca8a04] text-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              !canScrollLeft ? 'opacity-40' : 'opacity-100 hover:scale-105'
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Testimonial selanjutnya"
            className={`absolute -right-1 sm:-right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-7 sm:w-8 h-10 sm:h-12 bg-[#facc15] hover:bg-[#eab308] active:bg-[#ca8a04] text-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              !canScrollRight ? 'opacity-40' : 'opacity-100 hover:scale-105'
            }`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />
          </button>

          {/* Testimonial Cards Grid / Horizontal Scroll */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex md:grid md:grid-cols-3 gap-5 lg:gap-6 overflow-x-auto md:overflow-visible pb-4 pt-1 px-1 scroll-smooth no-scrollbar"
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                id={`testimonial-card-${item.id}`}
                className="min-w-[300px] sm:min-w-[340px] md:min-w-0 bg-white rounded-[24px] sm:rounded-[28px] p-5 lg:p-6 border-[1.5px] border-[#fde047] sm:border-[#facc15]/70 shadow-xs hover:shadow-md transition-all duration-200 flex flex-row items-center gap-4 lg:gap-5 relative"
              >
                {/* Left: Rounded Portrait Photo */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full overflow-hidden shrink-0 border-2 border-amber-100/80 shadow-xs bg-amber-50/50">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right: Quote text, Author Name & Role */}
                <div className="flex-1 flex flex-col justify-between h-full space-y-2.5 sm:space-y-3">
                  {/* Quote Paragraph with Opening Quote Mark */}
                  <div className="text-slate-700 text-xs sm:text-[13px] leading-relaxed font-normal">
                    <span className="text-[#facc15] font-serif font-black text-lg sm:text-xl leading-none inline-block mr-1 select-none">
                      “
                    </span>
                    <span>{item.quote}”</span>
                  </div>

                  {/* Author Name and Subtitle */}
                  <div className="pt-0.5">
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#0F7A60] tracking-tight">
                      {item.author}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

