import React, { useState } from 'react';
import { UnitItem, NewsItem, CoreValueItem, FeatureItem } from '../data/content';
import { X, CheckCircle2, Calendar, Phone, ArrowRight, School, Search } from 'lucide-react';

interface ModalsProps {
  // PPDB
  ppdbOpen: boolean;
  onClosePPDB: () => void;
  defaultUnit?: string;

  // Visit Tour
  visitOpen: boolean;
  onCloseVisit: () => void;

  // Unit Detail
  selectedUnit: UnitItem | null;
  onCloseUnit: () => void;

  // News Detail
  selectedNews: NewsItem | null;
  onCloseNews: () => void;

  // Core Value Detail
  selectedValue: CoreValueItem | null;
  onCloseValue: () => void;

  // Feature Detail
  selectedFeature: FeatureItem | null;
  onCloseFeature: () => void;

  // Search
  searchOpen: boolean;
  onCloseSearch: () => void;
  onSelectUnitFromSearch: (unitId: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  ppdbOpen,
  onClosePPDB,
  defaultUnit,
  visitOpen,
  onCloseVisit,
  selectedUnit,
  onCloseUnit,
  selectedNews,
  onCloseNews,
  selectedValue,
  onCloseValue,
  selectedFeature,
  onCloseFeature,
  searchOpen,
  onCloseSearch,
  onSelectUnitFromSearch,
}) => {
  // PPDB Form State
  const [ppdbLevel, setPpdbLevel] = useState(defaultUnit || 'mi');
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [ppdbSubmitted, setPpdbSubmitted] = useState(false);

  // Visit Form State
  const [visitDate, setVisitDate] = useState('');
  const [visitUnit, setVisitUnit] = useState('mi');
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitSubmitted, setVisitSubmitted] = useState(false);

  // Search Query
  const [searchQuery, setSearchQuery] = useState('');

  const handlePpdbSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPpdbSubmitted(true);
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitSubmitted(true);
  };

  return (
    <>
      {/* 1. PPDB MODAL */}
      {ppdbOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-teal-100 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onClosePPDB}
              aria-label="Tutup Formulir"
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {ppdbSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#0F7A60]">Pendaftaran Berhasil Terkirim!</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Terima kasih, Bapak/Ibu <strong>{parentName}</strong>. Tim Penerimaan Siswa Baru (PPDB) Yayasan Asih Putera akan segera menghubungi Anda melalui WhatsApp di nomor <strong>{parentPhone}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setPpdbSubmitted(false);
                      onClosePPDB();
                    }}
                    className="bg-[#0F7A60] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#0b5e4a] transition-colors"
                  >
                    Selesai
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePpdbSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#ff6f3c] bg-orange-50 px-2.5 py-1 rounded-full">
                    PPDB 2025/2026
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F7A60] mt-2">
                    Formulir Minat PPDB
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Daftarkan putra-putri Anda untuk pengalaman pendidikan holistik berbasis tauhid.
                  </p>
                </div>

                <div className="space-y-3 text-xs font-semibold text-slate-700">
                  <div>
                    <label className="block mb-1">Pilih Jenjang Pendidikan</label>
                    <select
                      value={ppdbLevel}
                      onChange={(e) => setPpdbLevel(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 text-slate-800 focus:bg-white focus:border-[#0F7A60] outline-hidden"
                    >
                      <option value="tk">Day Care / TK Asih Putera (Usia 3 Bln - 6 Thn)</option>
                      <option value="mi">MI Asih Putera (Madrasah Ibtidaiyah / SD)</option>
                      <option value="mts">MTs Asih Putera (Madrasah Tsanawiyah / SMP)</option>
                      <option value="ma">MA Asih Putera (Madrasah Aliyah / SMA)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1">Nama Lengkap Orang Tua / Wali</label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Contoh: Bpk. Ahmad Fauzi"
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:border-[#0F7A60] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Nama Calon Siswa</label>
                    <input
                      type="text"
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="Contoh: Muhammad Rayhan"
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:border-[#0F7A60] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Nomor WhatsApp Aktif</label>
                    <input
                      type="tel"
                      required
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:border-[#0F7A60] outline-hidden"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full bg-[#facc15] hover:bg-[#eab308] active:bg-[#ca8a04] text-slate-900 font-bold py-3 rounded-full shadow-md text-sm transition-all cursor-pointer"
                  >
                    Kirim Formulir PPDB
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. VISIT SCHOOL MODAL */}
      {visitOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-teal-100 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseVisit}
              aria-label="Tutup Modal Kunjungan"
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {visitSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-teal-100 text-[#0F7A60] rounded-full flex items-center justify-center mx-auto">
                  <School className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-[#0F7A60]">Jadwal Kunjungan Terkonfirmasi</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Kami menantikan kehadiran Bapak/Ibu <strong>{visitorName}</strong> pada tanggal <strong>{visitDate || 'yang telah dipilih'}</strong> di Kampus Yayasan Asih Putera Bandung.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setVisitSubmitted(false);
                      onCloseVisit();
                    }}
                    className="bg-[#0F7A60] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#0b5e4a] transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleVisitSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#0F7A60] bg-teal-50 px-2.5 py-1 rounded-full">
                    School Tour & Consultation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F7A60] mt-2">
                    Jadwalkan Kunjungan Sekolah
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Kunjungi kampus, lihat sarana belajar, dan konsultasikan perkembangan anak bersama tim konselor kami.
                  </p>
                </div>

                <div className="space-y-3 text-xs font-semibold text-slate-700">
                  <div>
                    <label className="block mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:border-[#0F7A60] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Nomor Kontak / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={visitorPhone}
                      onChange={(e) => setVisitorPhone(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:border-[#0F7A60] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Unit yang Ingin Dikunjungi</label>
                    <select
                      value={visitUnit}
                      onChange={(e) => setVisitUnit(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl p-2.5 bg-slate-50 text-slate-800 focus:bg-white focus:border-[#0F7A60] outline-hidden"
                    >
                      <option value="tk">Day Care / TK Asih Putera</option>
                      <option value="mi">MI Asih Putera (Madrasah Ibtidaiyah)</option>
                      <option value="mts">MTs Asih Putera (Madrasah Tsanawiyah)</option>
                      <option value="ma">MA Asih Putera (Madrasah Aliyah)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1">Rencana Tanggal Kunjungan</label>
                    <input
                      type="date"
                      required
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:border-[#0F7A60] outline-hidden"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full bg-[#0F7A60] hover:bg-[#0b5e4a] text-white font-bold py-3 rounded-full shadow-md text-sm transition-all"
                  >
                    Konfirmasi Jadwal Kunjungan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 3. UNIT DETAIL MODAL */}
      {selectedUnit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-teal-100 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseUnit}
              aria-label="Tutup Informasi Unit"
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={selectedUnit.image}
                  alt={selectedUnit.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      {selectedUnit.levels}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1.5">{selectedUnit.name} Asih Putera</h3>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F7A60] mb-1">Visi Pembelajaran</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">{selectedUnit.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F7A60] mb-1">Kurikulum & Pendekatan</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{selectedUnit.curriculum}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F7A60] mb-2">Program Unggulan</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedUnit.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-teal-50/80 border border-teal-100 p-2.5 rounded-xl text-center">
                      <span className="text-xs font-bold text-[#0F7A60]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  onClick={() => {
                    onCloseUnit();
                    // trigger PPDB
                  }}
                  className="flex-1 bg-[#facc15] hover:bg-[#eab308] active:bg-[#ca8a04] text-slate-900 font-bold py-3 rounded-full text-xs sm:text-sm text-center shadow-md cursor-pointer transition-colors"
                >
                  Daftar PPDB {selectedUnit.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. NEWS / EVENT READER MODAL */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-teal-100 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseNews}
              aria-label="Tutup Berita"
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="h-52 rounded-2xl overflow-hidden">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${selectedNews.badgeBg} ${selectedNews.badgeText}`}>
                  {selectedNews.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  {selectedNews.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {selectedNews.title}
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {selectedNews.description}
              </p>

              <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 leading-relaxed border border-slate-100">
                {selectedNews.content || selectedNews.description}
              </div>

              <div className="pt-2">
                <button
                  onClick={onCloseNews}
                  className="w-full bg-[#0F7A60] text-white font-bold py-2.5 rounded-full text-xs hover:bg-[#0b5e4a] transition-colors"
                >
                  Tutup Artikel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SEARCH MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-teal-100 relative animate-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-[#0F7A60] text-base">Pencarian Website Asih Putera</h3>
              <button onClick={onCloseSearch} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ketik kata kunci: PPDB, TK, MI, MTs, MA, Biaya..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#0F7A60] focus:bg-white"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto text-xs">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Pencarian Cepat
              </div>
              {[
                { title: 'Penerimaan Siswa Baru (PPDB 2025/2026)', category: 'Informasi', action: 'ppdb' },
                { title: 'Unit Day Care & TK Asih Putera', category: 'Pendidikan', action: 'tk' },
                { title: 'Madrasah Ibtidaiyah (MI) Terpadu', category: 'Pendidikan', action: 'mi' },
                { title: 'Madrasah Tsanawiyah (MTs) Sains & Karakter', category: 'Pendidikan', action: 'mts' },
                { title: 'Madrasah Aliyah (MA) Persiapan Universitas', category: 'Pendidikan', action: 'ma' },
                { title: 'Filosofi Cageur, Bageur, Bener, Pinter, Singer', category: 'Nilai Inti', action: 'values' },
              ]
                .filter((item) =>
                  searchQuery ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) : true
                )
                .map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onCloseSearch();
                      if (item.action === 'ppdb') {
                        // ppdb trigger
                      } else {
                        onSelectUnitFromSearch(item.action);
                      }
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-teal-50 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-[#0F7A60]">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-slate-400">{item.category}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0F7A60] transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. FEATURE / WHY US CARD MODAL */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-teal-100 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseFeature}
              aria-label="Tutup Detail"
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="relative h-60 rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {selectedFeature.number} • {selectedFeature.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{selectedFeature.title}</h3>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F7A60] mb-1">
                  Pilar Pendidikan Asih Putera
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedFeature.description}
                </p>
              </div>

              <div className="bg-teal-50/70 border border-teal-100/80 p-4 rounded-2xl">
                <div className="text-xs text-[#0F7A60] font-bold mb-1">Implementasi Terpadu:</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pilar <strong>{selectedFeature.title}</strong> diintegrasikan dalam seluruh aktivitas harian santri, kurikulum intrakurikuler, ekstrakurikuler, pembiasaan ibadah, dan bimbingan kepemimpinan di seluruh jenjang pendidikan Yayasan Asih Putera.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onCloseFeature}
                  className="w-full bg-[#0F7A60] hover:bg-[#0b5e4a] text-white font-bold py-3 rounded-full text-xs sm:text-sm shadow-md transition-colors"
                >
                  Tutup Informasi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
