import React from 'react';
import { Phone, Mail, Search } from 'lucide-react';

interface TopBarProps {
  onOpenSearch?: () => void;
  onSelectNav?: (item: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenSearch, onSelectNav }) => {
  return (
    <div id="top-header-bar" className="bg-[#075B3A] text-white text-xs py-2 px-4 sm:px-8 border-b border-[#075B3A]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <a
            id="topbar-phone-link"
            href="tel:081122334455"
            className="inline-flex items-center gap-1.5 hover:text-emerald-200 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Hotline 081320267490</span>
          </a>
          <a
            id="topbar-email-link"
            href="mailto:info@asihputera.sch.id"
            className="inline-flex items-center gap-1.5 hover:text-emerald-200 transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>humas@asihputera.sch.id</span>
          </a>
        </div>

        {/* Right: Quick Portals & Search */}
        <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
          {['Orang Tua', 'Alumni', 'Karier', 'Donasi'].map((item) => (
            <button
              key={item}
              id={`topbar-link-${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => onSelectNav && onSelectNav(item)}
              className="hover:text-emerald-200 transition-colors cursor-pointer font-medium"
            >
              {item}
            </button>
          ))}
          <button
            id="topbar-search-button"
            onClick={onOpenSearch}
            aria-label="Cari di website Asih Putera"
            className="p-1 hover:text-emerald-200 transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
