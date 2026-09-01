import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { LogoAsihPutera } from './LogoAsihPutera';

interface HeaderProps {
  onOpenPPDB: () => void;
  onNavigate: (sectionId: string) => void;
  onSelectUnit?: (unitId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPPDB, onNavigate, onSelectUnit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pendidikanDropdownOpen, setPendidikanDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

  return (
    <header id="main-navigation-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <div 
          id="brand-logo" 
          onClick={() => onNavigate('hero')}
          className="flex items-center cursor-pointer group py-0.5"
        >
          <LogoAsihPutera className="h-10 sm:h-12 md:h-14 hover:opacity-90 transition-opacity" />
        </div>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <button
            id="nav-link-profil"
            onClick={() => onNavigate('why-us')}
            className="hover:text-[#0F7A60] transition-colors cursor-pointer"
          >
            Profil
          </button>

          {/* Pendidikan with dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setPendidikanDropdownOpen(true)}
            onMouseLeave={() => setPendidikanDropdownOpen(false)}
          >
            <button
              id="nav-link-pendidikan"
              onClick={() => onNavigate('units')}
              className="inline-flex items-center gap-1 hover:text-[#0F7A60] transition-colors cursor-pointer py-1"
            >
              <span>Pendidikan</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {pendidikanDropdownOpen && (
              <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-teal-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                {[
                  { id: 'tk', name: 'Day Care / TK', desc: 'Usia 3 Bln - 6 Thn' },
                  { id: 'mi', name: 'MI (Madrasah Ibtidaiyah)', desc: 'Kelas 1 - 6' },
                  { id: 'mts', name: 'MTs (Madrasah Tsanawiyah)', desc: 'Kelas 7 - 9' },
                  { id: 'ma', name: 'MA (Madrasah Aliyah)', desc: 'Kelas 10 - 12' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setPendidikanDropdownOpen(false);
                      if (onSelectUnit) onSelectUnit(item.id);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-teal-50 transition-colors text-slate-700 hover:text-[#0F7A60]"
                  >
                    <div className="font-semibold text-xs text-slate-900">{item.name}</div>
                    <div className="text-[11px] text-slate-500">{item.desc}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informasi with dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setInfoDropdownOpen(true)}
            onMouseLeave={() => setInfoDropdownOpen(false)}
          >
            <button
              id="nav-link-informasi"
              onClick={() => onNavigate('news')}
              className="inline-flex items-center gap-1 hover:text-[#0F7A60] transition-colors cursor-pointer py-1"
            >
              <span>Informasi</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {infoDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-teal-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                <button
                  onClick={() => { setInfoDropdownOpen(false); onOpenPPDB(); }}
                  className="w-full text-left px-4 py-2 hover:bg-teal-50 transition-colors text-xs font-semibold text-[#0F7A60]"
                >
                  Penerimaan Siswa (PPDB)
                </button>
                <button
                  onClick={() => { setInfoDropdownOpen(false); onNavigate('news'); }}
                  className="w-full text-left px-4 py-2 hover:bg-teal-50 transition-colors text-xs text-slate-700 hover:text-[#0F7A60]"
                >
                  Berita & Pengumuman
                </button>
                <button
                  onClick={() => { setInfoDropdownOpen(false); onNavigate('core-values'); }}
                  className="w-full text-left px-4 py-2 hover:bg-teal-50 transition-colors text-xs text-slate-700 hover:text-[#0F7A60]"
                >
                  Nilai Budaya Karakter
                </button>
              </div>
            )}
          </div>

          <button
            id="nav-link-galeri"
            onClick={() => onNavigate('news')}
            className="hover:text-[#0F7A60] transition-colors cursor-pointer"
          >
            Galeri
          </button>

          <button
            id="nav-link-publikasi"
            onClick={() => onNavigate('news')}
            className="hover:text-[#0F7A60] transition-colors cursor-pointer"
          >
            Publikasi
          </button>

          <button
            id="nav-link-hubungi"
            onClick={() => onNavigate('footer')}
            className="hover:text-[#0F7A60] transition-colors cursor-pointer"
          >
            Hubungi
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="header-ppdb-button"
            onClick={onOpenPPDB}
            className="bg-[#facc15] hover:bg-[#eab308] active:bg-[#ca8a04] text-slate-900 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            PPDB 2025/2026
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#0F7A60] transition-colors cursor-pointer"
          aria-label="Buka Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden bg-white border-b border-teal-100 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('why-us'); }}
              className="text-left py-2 border-b border-slate-100 hover:text-[#0F7A60]"
            >
              Profil
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('units'); }}
              className="text-left py-2 border-b border-slate-100 hover:text-[#0F7A60]"
            >
              Pendidikan (TK, MI, MTs, MA)
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('core-values'); }}
              className="text-left py-2 border-b border-slate-100 hover:text-[#0F7A60]"
            >
              Nilai Inti Yayasan
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('news'); }}
              className="text-left py-2 border-b border-slate-100 hover:text-[#0F7A60]"
            >
              Berita, Agenda & Galeri
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('testimonials'); }}
              className="text-left py-2 border-b border-slate-100 hover:text-[#0F7A60]"
            >
              Testimoni Orang Tua & Alumni
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('footer'); }}
              className="text-left py-2 border-b border-slate-100 hover:text-[#0F7A60]"
            >
              Hubungi Kami
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenPPDB(); }}
              className="w-full mt-2 bg-[#facc15] hover:bg-[#eab308] active:bg-[#ca8a04] text-slate-900 text-center font-bold py-3 rounded-full shadow-md cursor-pointer transition-colors"
            >
              PPDB 2025/2026
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
