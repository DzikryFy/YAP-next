'use client';

import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

interface NewsEventsProps {
  onSelectNews?: (item: any) => void;
}

export const NewsEvents: React.FC<NewsEventsProps> = ({ onSelectNews }) => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Tembak Route Handler Next.js (/api/news)
    fetch('/api/news?KanalType=K001')
      .then((res) => {
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        return res.json();
      })
      .then((response) => {
        console.log('--- DATA BERITA DITERIMA ---', response);
        const rawData =
          response?.Data?.Content ||
          response?.data?.Content ||
          response?.Data ||
          (Array.isArray(response) ? response : []);

        setNewsItems(rawData);
      })
      .catch((err) => {
        console.error('❌ Error mengambil berita:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="news-section" className="py-14 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-teal-400 text-xl select-none animate-float">✦</span>
          <div className="bg-white border-2 border-teal-100 px-8 py-2.5 rounded-full shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F7A60] tracking-tight">
              Berita, Agenda & Galeri
            </h2>
          </div>
          <span className="text-amber-400 text-xl select-none animate-float-delayed">✦</span>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-slate-500 font-medium">
            Memuat layanan berita...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.length > 0 ? (
              newsItems.map((item: any, index: number) => {
                const id = item.ContentId || item.id || item.Id || index;
                const title = item.Title || item.title || item.Judul || 'Judul Berita';

                const rawDescription = item.Content || item.description || item.Deskripsi || item.Summary || '';
                const cleanDescription = rawDescription.replace(/<[^>]*>?/gm, '');

                let image = item.SignedThumbnail || item.Thumbnail || item.image || item.Gambar || item.ImageUrl || '';

                if (image && !image.startsWith('http')) {
                  image = `http://localhost:7000/resources/asset/${image}`;
                }

                if (!image) {
                  image = 'https://placehold.co/600x400/0F7A60/FFFFFF?text=Asih+Putera';
                }

                const category = item.Category || item.category || item.Kanal || 'news';
                const rawDate = item.TglPublish || item.date || item.Tanggal;
                const date = rawDate
                  ? new Date(rawDate).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })
                  : 'Terbaru';

                return (
                  <div
                    key={id}
                    onClick={() => onSelectNews && onSelectNews(item)}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                  >
                    <div className="h-48 overflow-hidden bg-slate-100 relative">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://placehold.co/600x400/0F7A60/FFFFFF?text=Gambar+Tidak+Tersedia';
                        }}
                      />
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-md mb-2 tracking-wider bg-teal-50 text-[#0F7A60]">
                          {category}
                        </span>

                        <h3 className="font-extrabold text-sm sm:text-base text-slate-800 leading-snug group-hover:text-[#0F7A60] transition-colors mb-2 line-clamp-2">
                          {title}
                        </h3>

                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                          {cleanDescription}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium pt-3 border-t border-slate-100">
                        <Calendar className="w-3.5 h-3.5 text-[#0F7A60]" />
                        <span>{date}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 text-center py-12 text-slate-400">
                Belum ada berita yang tersedia.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};