import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { LogoAsihPutera } from './LogoAsihPutera';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectUnit: (unitId: string) => void;
  onOpenPPDB: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectUnit }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="footer-section" className="relative bg-[#0F7A60] text-white pt-14 pb-10 px-4 sm:px-8 border-t border-[#0D785D] overflow-hidden">
      {/* Top subtle line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Logo Capsule */}
          <div className="lg:col-span-4 space-y-5">
            {/* White Rounded Brand Capsule Badge */}
            <div className="inline-flex items-center bg-white px-4 py-2.5 rounded-2xl shadow-md border border-white/90">
              <LogoAsihPutera className="h-10 sm:h-12 md:h-13" />
            </div>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-[13px] text-teal-50/90 leading-relaxed max-w-sm font-normal">
              Mendidik dengan Sepenuh Hati. Bagian dari ekosistem pendidikan Asih Putera: Daycare, TK, MI, MTs, dan MA.
            </p>

            {/* Social Icons (Rounded teal circles with brand border) */}
            <div className="flex items-center gap-3 pt-1">
              <a
                id="footer-social-facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Yayasan Asih Putera"
                className="w-9 h-9 rounded-full bg-[#0D785D] hover:bg-[#0b5e4a] border border-white/20 flex items-center justify-center text-white/90 hover:text-white transition-all shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                id="footer-social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Yayasan Asih Putera"
                className="w-9 h-9 rounded-full bg-[#0D785D] hover:bg-[#0b5e4a] border border-white/20 flex items-center justify-center text-white/90 hover:text-white transition-all shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                id="footer-social-youtube"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube Yayasan Asih Putera"
                className="w-9 h-9 rounded-full bg-[#0D785D] hover:bg-[#0b5e4a] border border-white/20 flex items-center justify-center text-white/90 hover:text-white transition-all shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: TAUTAN CEPAT */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-extrabold text-[#facc15] tracking-wider uppercase">
              TAUTAN CEPAT
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-teal-50/90 font-normal">
              {[
                { label: 'Profil MI', target: 'why-us' },
                { label: 'Kurikulum', target: 'units' },
                { label: 'Program', target: 'units' },
                { label: 'Kesiswaan', target: 'units' },
                { label: 'Galeri', target: 'news' },
                { label: 'Informasi', target: 'news' },
                { label: 'Hubungi', target: 'footer' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.target)}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: PROGRAM UNGGULAN */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold text-[#facc15] tracking-wider uppercase">
              PROGRAM UNGGULAN
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-teal-50/90 font-normal">
              {[
                'Tahfiz & Adab Harian',
                'Project-Based Learning',
                'Babakti ka Sepuh',
                'City Survival & Life Skills',
                'Outdoor Learning'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onSelectUnit('mi')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: INFORMASI KONTAK & NEWSLETTER */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-sm font-extrabold text-[#facc15] tracking-wider uppercase">
              INFORMASI KONTAK
            </h3>

            {/* Contact Details with Yellow Icons */}
            <div className="space-y-3 text-xs sm:text-[13px] text-teal-50/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Jl. P. Cibabat No. 33, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#facc15] shrink-0" />
                <span>(022) 1234 5678</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#facc15] shrink-0" />
                <span>info@asihputera.sch.id</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2 space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-white">
                Newsletter
              </h4>
              <p className="text-[11px] sm:text-xs text-teal-100/90 leading-relaxed">
                Dapatkan informasi terbaru seputar kegiatan dan program MI Asih Putera.
              </p>

              {/* Joined Input with Yellow Arrow Button */}
              <form onSubmit={handleSubscribe} className="flex items-center pt-1">
                <div className="relative flex items-center w-full bg-white rounded-xl overflow-hidden shadow-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda"
                    className="w-full bg-white text-slate-800 text-xs px-4 py-3 outline-none placeholder:text-slate-400 font-medium"
                  />
                  <button
                    type="submit"
                    aria-label="Kirim Langganan Newsletter"
                    className="bg-[#facc15] hover:bg-[#eab308] active:bg-[#ca8a04] text-slate-900 px-4 py-3 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </form>

              {subscribed && (
                <div className="inline-flex items-center gap-1.5 text-xs text-yellow-200 font-medium pt-1 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Terima kasih! Email Anda berhasil didaftarkan.</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-100/80 font-medium">
          <p>© 2026 Yayasan Asih Putera. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => alert('Kebijakan Privasi Yayasan Asih Putera:\nData pribadi Anda dijaga kerahasiaannya dan hanya digunakan untuk keperluan layanan pendidikan dan komunikasi resmi.')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Kebijakan Privasi
            </button>
            <span className="text-white/30">|</span>
            <button 
              onClick={() => alert('Syarat & Ketentuan Layanan Yayasan Asih Putera:\nLayanan portal dan pendaftaran peserta didik baru tunduk pada ketentuan resmi madrasah.')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Syarat & Ketentuan
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};