import React, { useState, useEffect } from 'react';
import { ArrowRight, Home, School, Users, ChevronDown, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchSliders, SliderItem } from '../services/sliderService';

interface HeroProps {
  onOpenPPDB: () => void;
  onExplorePrograms: () => void;
  isLoggedIn?: boolean;
}

interface SlideItem {
  title: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
}

function buildSlides(sliderList: SliderItem[]): SlideItem[] {
  const result: SlideItem[] = [];

  for (const slider of sliderList) {
    for (const att of slider.Attachment ?? []) {
      const { AttachmentId: id, ReferenceId: refId, Name: filename, TypeFile: typeFile } = att;
      if (id != null && refId != null && filename) {
        const mediaType = typeFile?.startsWith('video/') ? 'video' : 'image';
        result.push({
          title: slider.Title,
          mediaUrl: `/api/attachment?Id=${id}&RefId=${refId}&Filename=${encodeURIComponent(filename)}&t=${Date.now()}`,
          mediaType,
        });
      }
    }
  }

  return result;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPPDB, onExplorePrograms, isLoggedIn = false }) => {
  const [slides, setSlides] = useState<SlideItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isLoggedIn) return;
    let isMounted = true;

    async function loadSliders() {
      try {
        const sliderList = await fetchSliders();
        if (!isMounted) return;

        const built = buildSlides(sliderList);
        if (built.length > 0) {
          setCurrentIndex(0);
          setSlides(built);
        }
      } catch (error) {
        console.error('Failed to load sliders:', error);
      }
    }

    loadSliders();
    return () => { isMounted = false; };
  }, [isLoggedIn]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('why-us-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrev = () => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      id="hero-section" 
      className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent"
    >
      {/* Sparkles */}
      <div className="absolute top-8 left-[28%] text-[#F2BA13] text-xl sm:text-2xl pointer-events-none select-none animate-float drop-shadow-xs">✦</div>
      <div className="absolute top-6 left-[38%] text-[#0C4229] text-xl sm:text-2xl pointer-events-none select-none animate-float-delayed drop-shadow-xs">★</div>
      <div className="absolute top-16 right-12 sm:right-24 text-[#F2BA13] text-2xl pointer-events-none select-none animate-float drop-shadow-xs">✦</div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.12] tracking-tight">
              <span className="text-[#0C4229] block">Berilmu untuk</span>
              <span className="text-[#F2BA13] block mt-1 drop-shadow-xs">Peradaban Baru</span>
            </h1>
          </div>

          <p className="text-slate-700 text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-lg font-medium">
            Menumbuhkan anak beriman, beradab, berilmu, dan siap menghadapi masa depan.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <button
              id="hero-ppdb-cta"
              onClick={onOpenPPDB}
              className="inline-flex items-center gap-2.5 bg-[#0C4229] hover:bg-[#082F1D] active:bg-[#062416] text-white font-extrabold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>Informasi PPDB</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              id="hero-explore-cta"
              onClick={onExplorePrograms}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-amber-50/80 active:bg-amber-100 text-[#b47a00] border-2 border-[#F2BA13] font-extrabold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Jelajahi Program</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] text-[#b47a00]" />
            </button>
          </div>

          <div className="pt-2 sm:pt-3">
            <div 
              id="hero-ecosystem-badge"
              className="inline-block bg-white/95 backdrop-blur-md px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl border border-slate-200/80 shadow-md space-y-1.5"
            >
              <div className="flex items-center flex-wrap gap-2.5 text-sm sm:text-base font-extrabold text-slate-700">
                <span className="inline-flex items-center gap-1.5 text-[#b47a00]">
                  <Home className="w-5 h-5 text-[#F2BA13]" />
                  <span>Rumah</span>
                </span>
                <span className="text-[#F2BA13] font-bold">→</span>
                
                <span className="inline-flex items-center gap-1.5 text-[#b47a00]">
                  <School className="w-5 h-5 text-[#F2BA13]" />
                  <span>Sekolah</span>
                </span>
                <span className="text-[#F2BA13] font-bold">→</span>
                
                <span className="inline-flex items-center gap-1.5 text-[#0C4229]">
                  <Users className="w-5 h-5 text-[#0C4229]" />
                  <span>Masyarakat</span>
                </span>
              </div>

              <p className="text-xs sm:text-[13px] font-semibold text-slate-600">
                Satu Ekosistem Pendidikan, Sepanjang Hayat
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Slider */}
        <div className="lg:col-span-6 relative">
          <div className="relative h-[320px] sm:h-[420px] lg:h-[450px] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-lg group">
            {slides.length === 0 ? (
              <div className="w-full h-full bg-slate-200 animate-pulse" />
            ) : (
              slides.map((slide, idx) => {
                const isActive = idx === currentIndex;
                const baseStyle: React.CSSProperties = {
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  opacity: isActive ? 1 : 0,
                  zIndex: isActive ? 1 : 0,
                  transition: 'opacity 0.7s ease-in-out',
                };

                return slide.mediaType === 'video' ? (
                  <video
                    key={idx}
                    src={slide.mediaUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={baseStyle}
                  />
                ) : (
                  <img
                    key={idx}
                    src={slide.mediaUrl}
                    alt={slide.title || `Slide ${idx + 1}`}
                    style={baseStyle}
                  />
                );
              })
            )}

            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Floating Mission Card */}
          <div 
            id="hero-floating-card"
            className="absolute -bottom-4 right-2 sm:right-6 bg-white rounded-t-[40px] rounded-b-2xl p-4 sm:p-5 shadow-2xl border-[2.5px] border-[#F2BA13] max-w-[220px] sm:max-w-[250px] text-center z-20"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F2BA13] text-white flex items-center justify-center shadow-md border-2 border-white">
              <Star className="w-4 h-4 fill-white text-white" />
            </div>

            <div className="pt-2 space-y-1.5">
              <h2 className="text-xs sm:text-sm font-extrabold text-[#0C4229] leading-tight">
                Mendidik<br />dengan<br />Sepenuh Hati
              </h2>
              <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium leading-tight pt-1 border-t border-amber-100">
                Berakar pada Tauhid,<br />Bertumbuh untuk<br />Peradaban.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Wave & Scroll Button */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none flex flex-col items-center">
        <div className="w-full overflow-hidden leading-none">
          <svg 
            viewBox="0 0 1440 60" 
            fill="none" 
            className="w-full h-8 sm:h-12 block" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0 60 C360 15 720 0 1080 25 C1260 40 1380 55 1440 60 V60 H0 Z" 
              fill="#f7faf9" 
            />
          </svg>
        </div>

        <button
          id="hero-scroll-down-arrow"
          onClick={handleScrollDown}
          aria-label="Gulir ke bagian Mengapa Memilih Asih Putera"
          className="pointer-events-auto absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C4229] hover:bg-[#082F1D] active:bg-[#062416] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3] text-white" />
        </button>
      </div>

    </section>
  );
};