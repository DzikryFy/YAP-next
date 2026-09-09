'use client';

import React, { useEffect, useState } from 'react';
import { UnitItem } from '../data/content';
import { fetchEducationalUnits, buildUnitImageUrl, UnitApiItem } from '../services/unitService';
import { Baby, BookOpen, Building2, GraduationCap } from 'lucide-react';

interface EducationalUnitsProps {
  onSelectUnit: (unit: UnitItem) => void;
  isLoggedIn?: boolean;
}

const stripHtml = (html?: string): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '').trim();
};

// Icon & warna per urutan unit
const UNIT_PRESETS: { iconType: UnitItem['iconType']; iconBg: string; buttonBorder: string }[] = [
  { iconType: 'baby',       iconBg: '#F59E0B', buttonBorder: 'border-[#F59E0B]' },
  { iconType: 'book',       iconBg: '#10B981', buttonBorder: 'border-[#10B981]' },
  { iconType: 'building',   iconBg: '#3B82F6', buttonBorder: 'border-[#3B82F6]' },
  { iconType: 'graduation', iconBg: '#8B5CF6', buttonBorder: 'border-[#8B5CF6]' },
];

export const EducationalUnits: React.FC<EducationalUnitsProps> = ({ onSelectUnit, isLoggedIn = false }) => {
  const [units, setUnits] = useState<UnitItem[]>([]);

  useEffect(() => {
    if (!isLoggedIn) return;

    const loadUnits = async () => {
      const apiData = await fetchEducationalUnits();
      if (!apiData || apiData.length === 0) return;

      const mapped: UnitItem[] = apiData.map((item: UnitApiItem, index: number) => {
        const preset = UNIT_PRESETS[index % UNIT_PRESETS.length];
        return {
          id: String(item.ContentId ?? `unit-${index + 1}`),
          name: stripHtml(item.Title),
          description: stripHtml(item.Content),
          image: buildUnitImageUrl(item),
          iconType: preset.iconType,
          iconBg: preset.iconBg,
          badgeBorder: preset.buttonBorder,
          buttonBorder: preset.buttonBorder,
          buttonText: 'Selengkapnya',
          levels: item.Category || '',
          highlights: [],
          curriculum: '',
        };
      });

      setUnits(mapped);
    };

    loadUnits();
  }, [isLoggedIn]);

  const getUnitIcon = (iconType: UnitItem['iconType']) => {
    switch (iconType) {
      case 'baby':       return <Baby className="w-7 h-7" />;
      case 'book':       return <BookOpen className="w-7 h-7" />;
      case 'building':   return <Building2 className="w-7 h-7" />;
      case 'graduation': return <GraduationCap className="w-7 h-7" />;
      default:           return <GraduationCap className="w-7 h-7" />;
    }
  };

  return (
    <section id="units-section" className="py-8 sm:py-10 px-4 sm:px-8 relative">
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
            Unit Pendidikan
          </h2>

          <div className="flex items-center gap-1.5 text-[#facc15] shrink-0 select-none" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-[1.5px] border-[#facc15] rotate-45 flex items-center justify-center bg-[#facc15]/10">
              <div className="w-1.5 h-1.5 bg-[#facc15]" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {units.length === 0 ? (
            // Skeleton
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="h-56 sm:h-60 bg-slate-200 animate-pulse" />
                <div className="p-6 pt-9 space-y-3">
                  <div className="h-5 bg-slate-200 rounded animate-pulse mx-auto w-2/3" />
                  <div className="h-3 bg-slate-100 rounded animate-pulse" />
                  <div className="h-3 bg-slate-100 rounded animate-pulse w-5/6 mx-auto" />
                </div>
              </div>
            ))
          ) : (
            units.map((unit) => (
              <div
                key={unit.id}
                id={`unit-card-${unit.id}`}
                onClick={() => onSelectUnit(unit)}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative cursor-pointer overflow-hidden"
              >
                <div className="relative">
                  <div className="h-56 sm:h-60 overflow-hidden rounded-t-2xl bg-slate-100">
                    <img
                      src={unit.image}
                      alt={`Kegiatan santri di ${unit.name} Asih Putera`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className="w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg border-2 border-white transform transition-transform group-hover:scale-110"
                      style={{ backgroundColor: unit.iconBg }}
                    >
                      {getUnitIcon(unit.iconType)}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-9 flex-1 flex flex-col text-center items-center justify-center">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0C4229] mb-2.5 tracking-tight group-hover:text-[#082F1D] transition-colors">
                    {unit.name}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                    {unit.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
