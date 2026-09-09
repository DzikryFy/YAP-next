'use client';

import React, { useEffect, useState } from 'react';
import { FeatureItem } from '../data/content';
import { Sprout, Moon, Users, BookOpen, Heart, CheckCircle2 } from 'lucide-react';
import { fetchWhyUsContent, WhyUsContentItem } from '../services/whyUsService';

interface WhyUsProps {
  onCardClick?: (feature: FeatureItem) => void;
  isLoggedIn?: boolean;
}

// Bangun URL proxy gambar dari field attachment
const buildImageUrl = (item: WhyUsContentItem): string => {
  const { ThumbnailId, ContentId, Thumbnail } = item;
  if (ThumbnailId && ContentId && Thumbnail) {
    return `/api/attachment?Id=${ThumbnailId}&RefId=${ContentId}&Filename=${encodeURIComponent(Thumbnail)}&t=${Date.now()}`;
  }
  return '';
};

// Helper untuk membersihkan tag HTML dari response string API
const stripHtml = (htmlString?: string) => {
  if (!htmlString) return '';
  return htmlString.replace(/<[^>]*>?/gm, '').trim();
};

// Konfigurasi visual untuk 6 urutan kartu
const CARD_PRESETS: {
  iconName: FeatureItem['iconName'];
  accentColor: string;
  footerTag: string;
  number: string;
}[] = [
  { iconName: 'sprout',      accentColor: '#10B981', footerTag: 'Pendidikan Holistik', number: '01' },
  { iconName: 'moon',        accentColor: '#F59E0B', footerTag: 'Karakter Rabbani',    number: '02' },
  { iconName: 'users',       accentColor: '#38BDF8', footerTag: 'Ekosistem Terpadu',   number: '03' },
  { iconName: 'bookOpen',    accentColor: '#C084FC', footerTag: 'Kurikulum Terpadu',   number: '04' },
  { iconName: 'heart',       accentColor: '#F472B6', footerTag: 'Akhlak Mulia',        number: '05' },
  { iconName: 'checkCircle', accentColor: '#22D3EE', footerTag: 'Standar Unggul',      number: '06' },
];

export const WhyUs: React.FC<WhyUsProps> = ({ onCardClick, isLoggedIn = false }) => {
  const [items, setItems] = useState<FeatureItem[]>([]);

  useEffect(() => {
    if (!isLoggedIn) return;

    const loadApiData = async () => {
      const apiData = await fetchWhyUsContent();
      if (!apiData || apiData.length === 0) return;

      const mappedData: FeatureItem[] = apiData.map((item: WhyUsContentItem, index: number) => {
        const preset = CARD_PRESETS[index % CARD_PRESETS.length];

        return {
          id: String(item.ContentId ?? `why-${index + 1}`),
          number: preset.number,
          iconName: preset.iconName,
          category: stripHtml(item.Category),
          title: stripHtml(item.Title),
          description: stripHtml(item.Content),
          accentColor: preset.accentColor,
          footerTag: preset.footerTag,
          image: buildImageUrl(item), // dari API, bukan lokal
        };
      });

      setItems(mappedData);
    };

    loadApiData();
  }, [isLoggedIn]);

  const getIcon = (iconName: FeatureItem['iconName']) => {
    switch (iconName) {
      case 'sprout':
        return <Sprout className="w-6 h-6 text-emerald-400" />;
      case 'moon':
        return <Moon className="w-6 h-6 text-amber-400" />;
      case 'users':
        return <Users className="w-6 h-6 text-sky-400" />;
      case 'bookOpen':
        return <BookOpen className="w-6 h-6 text-purple-300" />;
      case 'heart':
        return <Heart className="w-6 h-6 text-pink-400 fill-pink-400/20" />;
      case 'checkCircle':
        return <CheckCircle2 className="w-6 h-6 text-cyan-300" />;
      default:
        return <Sprout className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="why-us-section" className="py-6 sm:py-8 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Golden Islamic Ornaments */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 text-center">
          <div className="flex items-center gap-1.5 text-[#facc15] shrink-0 select-none" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-[1.5px] border-[#facc15] rotate-45 flex items-center justify-center bg-[#facc15]/10">
              <div className="w-1.5 h-1.5 bg-[#facc15]" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0C4229] tracking-tight font-serif sm:font-sans">
            Mengapa Asih Putera?
          </h2>

          <div className="flex items-center gap-1.5 text-[#facc15] shrink-0 select-none" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-[1.5px] border-[#facc15] rotate-45 flex items-center justify-center bg-[#facc15]/10">
              <div className="w-1.5 h-1.5 bg-[#facc15]" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          </div>
        </div>

        {/* 6-Column Photographic Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {items.length === 0 ? (
            // Skeleton saat menunggu data dari API
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[320px] sm:h-[340px] rounded-2xl bg-slate-200 animate-pulse"
              />
            ))
          ) : (
            items.map((item) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              onClick={() => onCardClick && onCardClick(item)}
              className="relative h-[320px] sm:h-[340px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group border border-white/20 bg-slate-900 flex flex-col justify-between p-3.5 sm:p-4"
            >
              {/* Background Photo dari API */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                className="transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay gelap di bagian bawah untuk teks */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041A14]/90 via-[#041A14]/30 to-black/10 pointer-events-none" />

              {/* Top Row: Translucent Icon & Pill Number Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 group-hover:bg-black/50">
                  {getIcon(item.iconName)}
                </div>

                <div className="px-2 py-0.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-white/90 text-[10px] font-mono font-bold tracking-wider shadow-xs">
                  {item.number}
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-1">
                <div
                  className="text-[11px] font-extrabold uppercase tracking-widest"
                  style={{ color: item.accentColor }}
                >
                  {item.category}
                </div>

                <h3 className="text-sm sm:text-[15px] font-black text-white leading-tight tracking-tight drop-shadow-md">
                  {item.title}
                </h3>

                <p className="text-[11px] sm:text-[12px] text-white/90 leading-relaxed pt-0.5 line-clamp-2 font-normal drop-shadow-sm">
                  {item.description}
                </p>

                <div className="pt-1.5 border-t border-white/25 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-teal-200 group-hover:text-white transition-colors">
                    {item.footerTag}
                  </span>
                </div>
              </div>
            </div>
          ))
          )}
        </div>
      </div>
    </section>
  );
};