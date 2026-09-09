import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onOpenPPDB: () => void;
  onScheduleVisit: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenPPDB, onScheduleVisit }) => {
  return (
    <section id="cta-enrollment-section" className="relative py-5 sm:py-7 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Left Outer Botanical Flower & Leaves Decoration */}
        <div className="absolute -left-5 -top-4 sm:-left-7 sm:-top-5 z-20 pointer-events-none select-none">
          <svg className="w-16 h-16 sm:w-22 sm:h-22" viewBox="0 0 100 100" fill="none">
            {/* Green leaves */}
            <path d="M10 60 C5 40 25 35 40 45 C35 65 15 70 10 60 Z" fill="#65a30d" opacity="0.9" />
            <path d="M25 75 C15 60 30 50 48 58 C45 78 30 85 25 75 Z" fill="#84cc16" opacity="0.95" />
            <path d="M5 80 C-2 70 10 60 25 68 C20 85 10 90 5 80 Z" fill="#4d7c0f" />
            
            {/* Pink Blossom Flowers */}
            <g transform="translate(32, 28)">
              {/* Petals */}
              <circle cx="0" cy="-12" r="9" fill="#f472b6" />
              <circle cx="11.4" cy="-3.7" r="9" fill="#fb7185" />
              <circle cx="7" cy="10" r="9" fill="#f43f5e" />
              <circle cx="-7" cy="10" r="9" fill="#fda4af" />
              <circle cx="-11.4" cy="-3.7" r="9" fill="#f472b6" />
              {/* Flower Center */}
              <circle cx="0" cy="0" r="5" fill="#fef08a" />
              <circle cx="0" cy="0" r="2.5" fill="#eab308" />
            </g>

            {/* Small secondary pink bud */}
            <g transform="translate(14, 20)">
              <circle cx="0" cy="-6" r="5" fill="#f472b6" />
              <circle cx="5" cy="0" r="5" fill="#fb7185" />
              <circle cx="-5" cy="0" r="5" fill="#fda4af" />
              <circle cx="0" cy="5" r="5" fill="#f472b6" />
              <circle cx="0" cy="0" r="2.5" fill="#fef08a" />
            </g>
          </svg>
        </div>

        {/* Right Outer Botanical Yellow Leaves Decoration */}
        <div className="absolute -right-4 -bottom-3 sm:-right-6 sm:-bottom-4 z-20 pointer-events-none select-none">
          <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 100 100" fill="none">
            <path d="M70 30 C90 40 85 70 65 85 C55 65 60 40 70 30 Z" fill="#eab308" opacity="0.9" />
            <path d="M50 45 C75 50 75 80 50 95 C40 75 40 55 50 45 Z" fill="#facc15" opacity="0.95" />
            <path d="M30 65 C50 65 55 88 35 98 C25 85 25 75 30 65 Z" fill="#fde047" />
            <circle cx="82" cy="70" r="5" fill="#fef08a" />
            <circle cx="88" cy="80" r="4" fill="#fef9c3" />
          </svg>
        </div>

        {/* Main Banner Capsule Card */}
        <div className="relative rounded-[22px] sm:rounded-[30px] bg-gradient-to-r from-[#0C4229] via-[#0E4A2E] via-40% via-[#105434] to-[#135E3B] p-5 sm:p-6 lg:px-9 lg:py-6 shadow-xl shadow-teal-950/20 border border-white/30 overflow-hidden text-white">
          
          {/* Seamless Campus Building Photo with Smooth Feathered Alpha Mask (Lebih Terang & Jelas) */}
          <div 
            className="absolute inset-0 pointer-events-none select-none overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,1) 70%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,1) 70%)'
            }}
          >
            <img 
              src="/assets/images/cta-profil.jpg" 
              alt="Profil Kampus Asih Putera" 
              className="w-full h-full object-cover object-right opacity-80 mix-blend-normal" 
            />
            {/* Lapisan tipis agar teks tetap terbaca jelas */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C4229]/80 via-[#0E4A2E]/40 to-transparent" />
          </div>

          {/* Warm Amber/Gold Light Ray on Top Right */}
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-yellow-300/25 blur-3xl pointer-events-none" />

          {/* Paper Airplane & Sparkles in the Center */}
          <div className="absolute left-[44%] sm:left-[47%] lg:left-[50%] top-2 sm:top-3.5 z-10 pointer-events-none select-none hidden sm:block animate-float">
            <div className="relative">
              {/* Lilac / White Origami Paper Plane */}
              <svg className="w-9 h-9 sm:w-11 sm:h-11 -rotate-12 drop-shadow-md" viewBox="0 0 64 64" fill="none">
                <path d="M4 32 L58 6 L32 58 L26 38 Z" fill="#f8f4ff" />
                <path d="M26 38 L58 6 L32 58 Z" fill="#e9d8fd" />
                <path d="M26 38 L32 58 L38 42 Z" fill="#c084fc" />
              </svg>
              {/* Sparkle */}
              <Sparkles className="w-3.5 h-3.5 text-yellow-100 absolute -top-1.5 -right-1.5 animate-pulse" />
            </div>
          </div>

          {/* Grid Layout: Left Typography, Right Action Buttons */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-4 items-center">
            
            {/* Left Content: Headlines & Subtitle */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-1.5 sm:space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-white tracking-tight leading-[1.2] drop-shadow-xs">
                Bergabunglah Bersama Kami<br />
                <span className="text-white">Mendidik Generasi untuk Peradaban Baru</span>
              </h2>
              
              <p className="text-teal-50/95 text-xs sm:text-sm max-w-xl leading-relaxed font-normal">
                PPDB 2025/2026 telah dibuka. Raih potensi terbaik putra-putri Anda bersama Asih Putera.
              </p>
            </div>

            {/* Right Content: Dual Action Pill Buttons */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-2.5 justify-center sm:max-w-md lg:max-w-[240px] ml-auto w-full">
              
              {/* Button 1: Daftar PPDB Sekarang (Warna Kuning Solid) */}
              <button
                id="cta-daftar-ppdb-btn"
                onClick={onOpenPPDB}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#eab308] hover:bg-[#ca8a04] active:bg-[#a16207] text-white font-bold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-full shadow-md shadow-yellow-950/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Daftar PPDB Sekarang</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5] ml-0.5 shrink-0" />
              </button>

              {/* Button 2: Kunjungi Sekolah (Solid White Pill with Teal Text) */}
              <button
                id="cta-kunjungi-sekolah-btn"
                onClick={onScheduleVisit}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50/90 active:bg-teal-100 text-[#0C4229] font-bold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-full shadow-md shadow-teal-950/10 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 cursor-pointer whitespace-nowrap border border-white/80"
              >
                <span>Kunjungi Sekolah</span>
                <ArrowRight className="w-4 h-4 text-[#0C4229] stroke-[2.5] ml-0.5 shrink-0" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};