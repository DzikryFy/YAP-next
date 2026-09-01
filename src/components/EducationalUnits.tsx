import React from 'react';
import { EDUCATIONAL_UNITS, UnitItem } from '../data/content';
import { Baby, BookOpen, Building2, GraduationCap, ArrowRight } from 'lucide-react';

interface EducationalUnitsProps {
  onSelectUnit: (unit: UnitItem) => void;
}

export const EducationalUnits: React.FC<EducationalUnitsProps> = ({ onSelectUnit }) => {
  const getUnitIcon = (iconType: string) => {
    switch (iconType) {
      case 'baby':
        return <Baby className="w-5 h-5" />;
      case 'book':
        return <BookOpen className="w-5 h-5" />;
      case 'building':
        return <Building2 className="w-5 h-5" />;
      case 'graduation':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <section id="units-section" className="py-14 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Badge with stars */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-teal-400 text-xl select-none animate-float">✦</span>
          <div className="bg-white border-2 border-teal-100 px-8 py-2.5 rounded-full shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F7A60] tracking-tight">
              Unit Pendidikan
            </h2>
          </div>
          <span className="text-amber-400 text-xl select-none animate-float-delayed">✦</span>
        </div>

        {/* 4 Educational Unit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATIONAL_UNITS.map((unit) => (
            <div
              key={unit.id}
              id={`unit-card-${unit.id}`}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Image Container with overlapping circular badge */}
              <div className="relative">
                {/* Image itself is rounded at top and clips zoom */}
                <div className="h-48 overflow-hidden rounded-t-2xl bg-slate-100">
                  <img
                    src={unit.image}
                    alt={`Kegiatan santri di ${unit.name} Asih Putera`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Centered Circular Badge (Fully visible without clipping) */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                  <div
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg border-2 border-white transform transition-transform group-hover:scale-110"
                    style={{ backgroundColor: unit.iconBg }}
                  >
                    {getUnitIcon(unit.iconType)}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-8 flex-1 flex flex-col text-center items-center justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-[#0F7A60] mb-2">
                    {unit.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {unit.description}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  id={`unit-btn-${unit.id}`}
                  onClick={() => onSelectUnit(unit)}
                  className={`w-full py-2.5 px-4 rounded-full border text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${unit.buttonBorder}`}
                >
                  <span>Lihat Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
