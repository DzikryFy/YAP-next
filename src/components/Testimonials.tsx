'use client';

import React, { useRef, useState, useEffect } from 'react';
import { getTestimonials, TestimonialItem } from '../services/testimonialService';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  isLoggedIn?: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ isLoggedIn = false }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    if (!isLoggedIn) return;
    let isMounted = true;

    getTestimonials().then((data) => {
      if (isMounted) setTestimonials(data);
    });

    return () => { isMounted = false; };
  }, [isLoggedIn]);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => { checkScroll(); }, [testimonials]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -380 : 380,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id="testimonials-section" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white/40">

      {/* Decorative blobs */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-48 h-64 pointer-events-none select-none hidden lg:block opacity-60">
        <svg viewBox="0 0 200 300" className="w-full h-full text-teal-100" fill="currentColor">
          <path d="M-50 0 C50 30 120 80 100 160 C80 240 20 280 -50 300 Z" opacity="0.4" />
        </svg>
        <div className="absolute top-12 left-16 grid grid-cols-3 gap-2 opacity-40">
          {[...Array(6)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal-400" />)}
        </div>
      </div>
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-48 h-64 pointer-events-none select-none hidden lg:block opacity-70">
        <svg viewBox="0 0 200 300" className="w-full h-full text-rose-100" fill="currentColor">
          <path d="M250 0 C150 40 80 100 100 180 C120 250 180 290 250 300 Z" opacity="0.5" />
        </svg>
        <div className="absolute bottom-10 right-16 grid grid-cols-3 gap-2 opacity-50">
          {[...Array(9)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-rose-400" />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-7 text-center">
          <div className="flex items-center gap-1.5 text-[#facc15] shrink-0 select-none" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-[1.5px] border-[#facc15] rotate-45 flex items-center justify-center bg-[#facc15]/10">
              <div className="w-1.5 h-1.5 bg-[#facc15]" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0C4229] tracking-tight font-serif sm:font-sans">
            Apa Kata Orang Tua & Alumni
          </h2>

          <div className="flex items-center gap-1.5 text-[#facc15] shrink-0 select-none" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-[1.5px] border-[#facc15] rotate-45 flex items-center justify-center bg-[#facc15]/10">
              <div className="w-1.5 h-1.5 bg-[#facc15]" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          </div>
        </div>

        <div className="relative px-2 sm:px-4">

          {/* Nav arrows */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Testimonial sebelumnya"
            className={`absolute -left-1 sm:-left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-7 sm:w-8 h-10 sm:h-12 bg-[#facc15] hover:bg-[#eab308] active:bg-[#ca8a04] text-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${!canScrollLeft ? 'opacity-40' : 'opacity-100 hover:scale-105'}`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />
          </button>

          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Testimonial selanjutnya"
            className={`absolute -right-1 sm:-right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-7 sm:w-8 h-10 sm:h-12 bg-[#facc15] hover:bg-[#eab308] active:bg-[#ca8a04] text-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${!canScrollRight ? 'opacity-40' : 'opacity-100 hover:scale-105'}`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />
          </button>

          {/* Cards */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex md:grid md:grid-cols-3 gap-5 lg:gap-6 overflow-x-auto md:overflow-visible pb-4 pt-1 px-1 scroll-smooth no-scrollbar"
          >
            {testimonials.length === 0 ? (
              // Skeleton
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="min-w-[300px] sm:min-w-[340px] md:min-w-0 bg-white rounded-[28px] p-5 border-[1.5px] border-slate-200 shadow-xs flex flex-row items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-slate-200 animate-pulse shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-slate-200 rounded animate-pulse" />
                    <div className="h-3 bg-slate-200 rounded animate-pulse w-5/6" />
                    <div className="h-3 bg-slate-200 rounded animate-pulse w-4/6" />
                    <div className="h-4 bg-slate-100 rounded animate-pulse w-1/2 mt-2" />
                  </div>
                </div>
              ))
            ) : (
              testimonials.map((item) => (
                <div
                  key={item.id}
                  id={`testimonial-card-${item.id}`}
                  className="min-w-[300px] sm:min-w-[340px] md:min-w-0 bg-white rounded-[24px] sm:rounded-[28px] p-5 lg:p-6 border-[1.5px] border-[#fde047] sm:border-[#facc15]/70 shadow-xs hover:shadow-md transition-all duration-200 flex flex-row items-center gap-4 lg:gap-5 relative"
                >
                  {/* Avatar dari API */}
                  <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full overflow-hidden shrink-0 border-2 border-amber-100/80 shadow-xs bg-amber-50/50">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>

                  {/* Konten */}
                  <div className="flex-1 flex flex-col justify-between h-full space-y-2.5 sm:space-y-3">
                    <div className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                      <span className="text-[#facc15] font-serif font-black text-lg sm:text-xl leading-none inline-block mr-1 select-none">"</span>
                      <span>{item.quote}"</span>
                    </div>
                    <div className="pt-0.5">
                      <h3 className="font-extrabold text-sm sm:text-base text-[#0C4229] tracking-tight">{item.author}</h3>
                      <p className="text-xs sm:text-[13px] text-slate-500 font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
