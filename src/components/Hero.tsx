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
    const attachments = slider.Attachment
      ? Array.isArray(slider.Attachment) ? slider.Attachment : [slider.Attachment]
      : [];
    const directUrl = slider.URL || slider.Url || slider.FileUrl || slider.MediaUrl || slider.VideoUrl;

    if (directUrl) {
      const mediaType = slider.TypeReference?.toLowerCase().includes('video') ? 'video' : 'image';
      result.push({ title: slider.Title, mediaUrl: directUrl, mediaType });
    }

    for (const att of attachments) {
      const { AttachmentId: id, ReferenceId: refId, Name: filename, TypeFile: typeFile } = att;
      const attachmentUrl = att.URL || att.Url || att.FileUrl || att.MediaUrl;
      if (attachmentUrl) {
        const mediaType = typeFile?.toLowerCase().startsWith('video/') || typeFile?.toLowerCase().includes('video') ? 'video' : 'image';
        result.push({ title: slider.Title, mediaUrl: attachmentUrl, mediaType });
        continue;
      }

      if (id != null && refId != null && filename) {
        const mediaType = typeFile?.toLowerCase().startsWith('video/') || typeFile?.toLowerCase().includes('video') ? 'video' : 'image';
        result.push({
          title: slider.Title,
          mediaUrl: `/api/attachment?Id=${id}&RefId=${refId}&Filename=${encodeURIComponent(filename)}`,
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
    const interval = window.setInterval(() => {
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
      className="relative overflow-hidden bg-[#f4f8f5] px-4 pb-14 pt-5 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f7b58c]/75 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-32 -top-28 h-80 w-80 rounded-full bg-[#f4c979]/55 sm:h-[30rem] sm:w-[30rem]" />
      <div className="pointer-events-none absolute bottom-[-9rem] left-[32%] h-64 w-[34rem] rotate-[-8deg] rounded-[45%] bg-[#c8dc9f]/65" />
      <div className="pointer-events-none absolute left-1/2 top-10 text-3xl text-[#d99a1e] sm:text-5xl animate-float">✦</div>
      <div className="pointer-events-none absolute left-[46%] top-16 text-xl text-[#8cb482] sm:text-3xl animate-float-delayed">★</div>
      <div className="pointer-events-none absolute right-[43%] top-24 text-2xl text-[#d99a1e] animate-float">✧</div>

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 overflow-hidden rounded-[28px] bg-[#fffaf0] px-5 py-10 shadow-[0_20px_70px_rgba(92,74,37,0.08)] sm:px-10 sm:py-14 lg:grid-cols-12 lg:gap-5 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute -left-16 bottom-[-5rem] h-52 w-52 rounded-full bg-[#f3b29d]/60" />
        <div className="pointer-events-none absolute -right-14 bottom-[-7rem] h-60 w-60 rounded-full bg-[#f3d487]/75" />
        
        {/* Left Column */}
        <div className="relative z-10 space-y-5 sm:space-y-6 lg:col-span-6 lg:pr-5">
          <div className="space-y-1">
            <h1 className="max-w-[650px] text-4xl font-black leading-[1.06] tracking-tight text-[#0C4229] sm:text-5xl lg:text-[60px]">
              <span className="text-[#0C4229] block">Berilmu untuk</span>
              <span className="mt-2 block text-[#d77b16] drop-shadow-[0_2px_0_rgba(255,255,255,0.7)]">Peradaban Baru</span>
            </h1>
          </div>

          <p className="max-w-xl text-base font-medium leading-relaxed text-[#333333] sm:text-lg lg:text-[20px]">
            Menumbuhkan anak beriman, beradab, berilmu, dan siap menghadapi masa depan.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <button
              id="hero-ppdb-cta"
              onClick={onOpenPPDB}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#0C4229] px-6 py-3.5 text-sm font-extrabold text-white shadow-md transition-all duration-200 hover:bg-[#082F1D] hover:shadow-lg active:bg-[#062416] sm:px-8 sm:text-base"
            >
              <span>Informasi PPDB</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              id="hero-explore-cta"
              onClick={onExplorePrograms}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#d99a1e] bg-white/80 px-6 py-3.5 text-sm font-extrabold text-[#8f610d] shadow-xs transition-all duration-200 hover:bg-amber-50 hover:shadow-md active:bg-amber-100 sm:px-8 sm:text-base"
            >
              <span>Jelajahi Program</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] text-[#b47a00]" />
            </button>
          </div>

          <div className="pt-2 sm:pt-3">
            <div 
              id="hero-ecosystem-badge"
              className="inline-block space-y-1.5 rounded-2xl border border-[#e8d4a9] bg-white/60 px-5 py-3 shadow-sm backdrop-blur-md sm:px-6 sm:py-3.5"
            >
              <div className="flex items-center flex-wrap gap-2.5 text-sm sm:text-base font-extrabold text-slate-700">
                <span className="inline-flex items-center gap-1.5 text-[#b47a00]">
                  <Home className="w-5 h-5 text-[#d99a1e]" />
                  <span>Rumah</span>
                </span>
                <span className="text-[#d99a1e] font-bold">→</span>
                
                <span className="inline-flex items-center gap-1.5 text-[#b47a00]">
                  <School className="w-5 h-5 text-[#d99a1e]" />
                  <span>Sekolah</span>
                </span>
                <span className="text-[#d99a1e] font-bold">→</span>
                
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
        <div className="relative lg:col-span-6">
          <div className="group relative h-[320px] overflow-hidden rounded-[26px] sm:h-[420px] sm:rounded-[34px] lg:h-[500px] lg:rounded-[42px]">
            {slides.length === 0 ? (
              <div className="flex h-full w-full items-center justify-center bg-[#f1e9d8]">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#d99a1e]/30 border-t-[#075B3A]" aria-label="Memuat gambar hero" />
              </div>
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

            <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-2/5 bg-gradient-to-r from-[#fffaf0] via-[#fffaf0]/55 to-transparent" />
            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/10 via-transparent to-white/10" />

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
            className="absolute -bottom-4 right-2 z-20 max-w-[220px] rounded-t-[38px] rounded-b-2xl border-[2.5px] border-[#e4ae31] bg-white/95 p-4 text-center shadow-2xl backdrop-blur-sm sm:right-6 sm:max-w-[250px] sm:p-5"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#d99a1e] text-white flex items-center justify-center shadow-md border-2 border-white">
              <Star className="w-4 h-4 fill-white text-white" />
            </div>

            <div className="pt-2 space-y-1.5">
              <h2 className="text-sm font-extrabold leading-tight text-[#0C4229] sm:text-base">
                Mendidik<br />dengan<br />Sepenuh Hati
              </h2>
              <p className="border-t border-amber-100 pt-1 text-[10px] font-medium leading-tight text-slate-600 sm:text-[11px]">
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
              fill="#f4f8f5"
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