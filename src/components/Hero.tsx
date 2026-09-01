import React from 'react';
import { ArrowRight, Home, School, Users, ChevronDown, Star } from 'lucide-react';

interface HeroProps {
  onOpenPPDB: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPPDB, onExplorePrograms }) => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('why-us-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="hero-section" 
      className="relative pt-10 sm:pt-16 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[length:100%_100%] bg-center bg-no-repeat bg-emerald-50/30"
      style={{
        backgroundImage: `url('/assets/images/hero-bg.jpg')`,
      }}
    >
      {/* Soft luminous wash to ensure optimal text readability while showcasing the entire background illustration without cropping */}
      <div className="absolute inset-0 bg-white/65 backdrop-blur-[0.5px] pointer-events-none -z-10" />

      {/* Decorative Subtle Floating Sparkles */}
      <div className="absolute top-8 left-[28%] text-[#F2BA13] text-xl sm:text-2xl pointer-events-none select-none animate-float drop-shadow-xs">
        ✦
      </div>
      <div className="absolute top-6 left-[38%] text-[#0F7A60] text-xl sm:text-2xl pointer-events-none select-none animate-float-delayed drop-shadow-xs">
        ★
      </div>
      <div className="absolute top-16 right-12 sm:right-24 text-[#F2BA13] text-2xl pointer-events-none select-none animate-float drop-shadow-xs">
        ✦
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* Left Column: Headlines, Subtitle, Actions, Ecosystem */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          
          {/* Main Titles */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.12] tracking-tight">
              <span className="text-[#0F7A60] block">Berilmu untuk</span>
              <span className="text-[#F2BA13] block mt-1 drop-shadow-xs">Peradaban Baru</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-lg font-medium">
            Menumbuhkan anak beriman, beradab, berilmu, dan siap menghadapi masa depan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            {/* Primary Dark Teal Button */}
            <button
              id="hero-ppdb-cta"
              onClick={onOpenPPDB}
              className="inline-flex items-center gap-2 bg-[#0F7A60] hover:bg-[#0b5e4a] active:bg-[#084234] text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>Informasi PPDB</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Secondary Golden-Yellow Outlined Button */}
            <button
              id="hero-explore-cta"
              onClick={onExplorePrograms}
              className="inline-flex items-center gap-2 bg-white hover:bg-amber-50/80 active:bg-amber-100 text-[#b47a00] border-2 border-[#F2BA13] font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Jelajahi Program</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] text-[#b47a00]" />
            </button>
          </div>

          {/* Ecosystem Pipeline Flow */}
          <div className="pt-2 sm:pt-3">
            <div 
              id="hero-ecosystem-badge"
              className="inline-block bg-white/90 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border border-slate-100/80 shadow-sm space-y-1"
            >
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700">
                <span className="inline-flex items-center gap-1.5 text-[#b47a00]">
                  <Home className="w-4 h-4 text-[#F2BA13]" />
                  <span>Rumah</span>
                </span>
                <span className="text-[#F2BA13] font-bold">→</span>
                
                <span className="inline-flex items-center gap-1.5 text-[#b47a00]">
                  <School className="w-4 h-4 text-[#F2BA13]" />
                  <span>Sekolah</span>
                </span>
                <span className="text-[#F2BA13] font-bold">→</span>
                
                <span className="inline-flex items-center gap-1.5 text-[#0F7A60]">
                  <Users className="w-4 h-4 text-[#0F7A60]" />
                  <span>Masyarakat</span>
                </span>
              </div>

              <p className="text-[11px] sm:text-xs font-semibold text-slate-600">
                Satu Ekosistem Pendidikan, Sepanjang Hayat
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Integrated Classroom Photo & Islamic Arch Floating Badge */}
        <div className="lg:col-span-6 relative">
          
          {/* Main Visual Image with Soft Left Organic Blending */}
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-lg [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.4)_6%,rgba(0,0,0,0.9)_18%,black_28%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.4)_6%,rgba(0,0,0,0.9)_18%,black_28%)]">
            <img
              id="hero-classroom-image"
              src="/assets/images/hero-asih-putera.jpg"
              alt="Siswa-Siswi dan Kegiatan Pembelajaran Yayasan Asih Putera"
              className="w-full h-[320px] sm:h-[420px] lg:h-[450px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Distinctive Islamic Arched Dome Mission Card (Bottom Right) */}
          <div 
            id="hero-floating-card"
            className="absolute -bottom-4 right-2 sm:right-6 bg-white rounded-t-[40px] rounded-b-2xl p-4 sm:p-5 shadow-2xl border-[2.5px] border-[#F2BA13] max-w-[220px] sm:max-w-[250px] text-center z-20"
          >
            {/* Top Arched Center Star Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F2BA13] text-white flex items-center justify-center shadow-md border-2 border-white">
              <Star className="w-4 h-4 fill-white text-white" />
            </div>

            <div className="pt-2 space-y-1.5">
              <h2 className="text-xs sm:text-sm font-extrabold text-[#0F7A60] leading-tight">
                Mendidik<br />dengan<br />Sepenuh Hati
              </h2>
              <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium leading-tight pt-1 border-t border-amber-100">
                Berakar pada Tauhid,<br />Bertumbuh untuk<br />Peradaban.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* 7. BOTTOM ORGANIC WAVE & CENTERED SCROLL-DOWN BUTTON */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none flex flex-col items-center">
        {/* Organic Bottom Curve */}
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

        {/* Centered Scroll Down Circular Teal Button (Fully visible, above wave, with glowing pulse effect) */}
        <button
          id="hero-scroll-down-arrow"
          onClick={handleScrollDown}
          aria-label="Gulir ke bagian Mengapa Memilih Asih Putera"
          className="pointer-events-auto absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0F7A60] hover:bg-[#0b5e4a] active:bg-[#084234] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3] text-white" />
        </button>
      </div>

    </section>
  );
};