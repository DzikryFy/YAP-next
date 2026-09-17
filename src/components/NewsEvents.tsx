'use client';

import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { getNewsList, buildNewsImageUrl, NewsApiItem } from '../services/newsService';

interface NewsEventsProps {
  onSelectNews?: (item: any) => void;
  isLoggedIn?: boolean;
}

const stripHtml = (html?: string): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '').trim();
};

const formatDate = (raw?: string): string => {
  if (!raw) return 'Terbaru';
  return new Date(raw).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const NewsEvents: React.FC<NewsEventsProps> = ({ onSelectNews, isLoggedIn = false }) => {
  const [newsItems, setNewsItems] = useState<NewsApiItem[]>([]);

  useEffect(() => {
    if (!isLoggedIn) return;
    let isMounted = true;

    getNewsList({ KanalType: 'K001' }).then((data) => {
      if (isMounted) setNewsItems(data);
    });

    return () => { isMounted = false; };
  }, [isLoggedIn]);

  return (
    <section id="news-section" className="py-8 sm:py-10 px-4 sm:px-8 relative overflow-hidden" style={{ backgroundColor: '#fff8e9', backgroundImage: 'radial-gradient(circle at 8% 18%, rgba(251, 146, 60, 0.2), transparent 28%), radial-gradient(circle at 94% 82%, rgba(96, 165, 250, 0.18), transparent 30%), linear-gradient(135deg, #fff8e9 0%, #fff1e7 100%)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 text-center">
          <div className="flex items-center gap-1.5 text-[#facc15] shrink-0 select-none" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-[1.5px] border-[#facc15] rotate-45 flex items-center justify-center bg-[#facc15]/10">
              <div className="w-1.5 h-1.5 bg-[#facc15]" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0C4229] tracking-tight font-serif sm:font-sans">
            Berita, Agenda & Galeri
          </h2>

          <div className="flex items-center gap-1.5 text-[#facc15] shrink-0 select-none" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-[1.5px] border-[#facc15] rotate-45 flex items-center justify-center bg-[#facc15]/10">
              <div className="w-1.5 h-1.5 bg-[#facc15]" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.length === 0 ? (
            // Skeleton
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col">
                <div className="h-48 bg-slate-200 animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-slate-200 rounded animate-pulse w-1/3" />
                  <div className="h-5 bg-slate-200 rounded animate-pulse" />
                  <div className="h-3 bg-slate-100 rounded animate-pulse" />
                  <div className="h-3 bg-slate-100 rounded animate-pulse w-4/5" />
                  <div className="h-3 bg-slate-100 rounded animate-pulse w-1/4 mt-2" />
                </div>
              </div>
            ))
          ) : (
            newsItems.map((item, index) => {
              const id = item.ContentId ?? index;
              const title = stripHtml(item.Title) || 'Judul Berita';
              const description = stripHtml(item.Content);
              const image = buildNewsImageUrl(item);
              const category = item.Category || item.Kanal || 'Berita';
              const date = formatDate(item.TglPublish);

              return (
                <div
                  key={id}
                  onClick={() => onSelectNews && onSelectNews(item)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md mb-2 tracking-wider bg-teal-50 text-[#0C4229] uppercase">
                        {category}
                      </span>

                      <h3 className="font-extrabold text-base sm:text-lg text-slate-800 leading-snug group-hover:text-[#0C4229] transition-colors mb-2 line-clamp-2">
                        {title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2 mb-4 font-normal">
                        {description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium pt-3 border-t border-slate-100">
                      <Calendar className="w-3.5 h-3.5 text-[#0C4229]" />
                      <span>{date}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
