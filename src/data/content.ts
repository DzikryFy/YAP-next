export interface FeatureItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  footerTag: string;
  iconName: 'sprout' | 'moon' | 'users' | 'bookOpen' | 'heart' | 'checkCircle';
  accentColor: string;
  image: string;
}

export interface CoreValueItem {
  id: string;
  name: string;
  icon: 'sprout' | 'users' | 'scale' | 'lightbulb' | 'settings';
  description: string;
}

export interface UnitItem {
  id: string;
  name: string;
  iconType: 'baby' | 'book' | 'building' | 'graduation';
  iconBg: string;
  badgeBorder: string;
  buttonBorder: string;
  buttonText: string;
  image: string;
  description: string;
  levels: string;
  highlights: string[];
  curriculum: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface NewsItem {
  id: string;
  category: 'BERITA' | 'AGENDA' | 'GALERI' | 'PRESTASI' | 'KEGIATAN' | 'PARENTING' | string;
  badgeBg: string;
  badgeText: string;
  title: string;
  description: string;
  date: string;
  image: string;
  content?: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: 'kontinuitas',
    number: '01',
    category: 'KONTINUITAS',
    title: 'Pendidikan Berkesinambungan 0 - 18 Tahun',
    description: 'Satu perjalanan utuh dari daya asuh hingga kemandirian.',
    footerTag: 'Pendidikan Holistik',
    iconName: 'sprout',
    accentColor: '#10b981',
    image: '/assets/images/why-berkesinambungan.jpg',
  },
  {
    id: 'tauhid',
    number: '02',
    category: 'FONDASI ISLAMI',
    title: 'Tauhid & Akhlak sebagai Fondasi',
    description: 'Menanamkan nilai Islam sebagai landasan berpikir, bersikap, dan bertindak.',
    footerTag: 'Karakter Robbani',
    iconName: 'moon',
    accentColor: '#f97316',
    image: '/assets/images/why-tauhid-akhlak.jpg',
  },
  {
    id: 'kolaborasi',
    number: '03',
    category: 'SINERGI',
    title: 'Kolaborasi Orang Tua',
    description: 'Bersama orang tua membangun ekosistem pendidikan yang konsisten.',
    footerTag: 'Ekosistem Terpadu',
    iconName: 'users',
    accentColor: '#3b82f6',
    image: '/assets/images/why-parent-collab.jpg',
  },
  {
    id: 'aktivitas',
    number: '04',
    category: 'METODE AKTIF',
    title: 'Pembelajaran Berbasis Aktivitas',
    description: 'Belajar aktif, kreatif, menyenangkan, dan bermakna.',
    footerTag: 'Kurikulum Terpadu',
    iconName: 'bookOpen',
    accentColor: '#a855f7',
    image: '/assets/images/why-aktivitas.jpg',
  },
  {
    id: 'karakter',
    number: '05',
    category: 'BUDAYA ADAB',
    title: 'Penumbuhan Karakter',
    description: 'Membentuk pribadi cageur, bageur, bener, pinter, singer.',
    footerTag: 'Akhlak Mulia',
    iconName: 'heart',
    accentColor: '#ec4899',
    image: '/assets/images/why-karakter.jpg',
  },
  {
    id: 'mutu',
    number: '06',
    category: 'PENJAMINAN MUTU',
    title: 'Sistem Mutu Pendidikan',
    description: 'Manajemen modern dan berkelanjutan untuk hasil terbaik.',
    footerTag: 'Standar Unggul',
    iconName: 'checkCircle',
    accentColor: '#06b6d4',
    image: '/assets/images/why-mutu.jpg',
  },
];

export const CORE_VALUES: CoreValueItem[] = [
  {
    id: 'cageur',
    name: 'Cageur',
    icon: 'sprout',
    description: 'Sehat jasmani, rohani, dan sosial.',
  },
  {
    id: 'bageur',
    name: 'Bageur',
    icon: 'users',
    description: 'Berakhlak mulia, peduli, dan berempati.',
  },
  {
    id: 'bener',
    name: 'Bener',
    icon: 'scale',
    description: 'Jujur, amanah, dan bertanggung jawab.',
  },
  {
    id: 'pinter',
    name: 'Pinter',
    icon: 'lightbulb',
    description: 'Cerdas, kritis, kreatif, dan berwawasan luas.',
  },
  {
    id: 'singer',
    name: 'Singer',
    icon: 'settings',
    description: 'Mandiri, percaya diri, dan siap bersaing global.',
  },
];

export const EDUCATIONAL_UNITS: UnitItem[] = [
  {
    id: 'tk',
    name: 'Day Care / TK',
    iconType: 'baby',
    iconBg: '#eab308',
    badgeBorder: '#eab308',
    buttonBorder: 'border-[#ca8a04] text-[#a16207] hover:bg-amber-50',
    buttonText: 'text-[#a16207]',
    image: '/assets/images/unit-daycare-tk.jpg',
    description: 'Belajar melalui bermain, tumbuh dengan kasih sayang dan nilai-nilai Islami sejak dini.',
    levels: 'Usia 3 Bulan - 6 Tahun',
    highlights: ['Montessori & Islamic Integrated', 'Sensory & Motoric Development', 'Tahfidz Al-Qur\'an Juz 30 Cilik'],
    curriculum: 'Kurikulum Merdeka PAUD dipadukan dengan Nilai Karakter Islami Asih Putera.'
  },
  {
    id: 'mi',
    name: 'MI',
    iconType: 'book',
    iconBg: '#0C4229',
    badgeBorder: '#0C4229',
    buttonBorder: 'border-[#0C4229] text-[#0C4229] hover:bg-teal-50',
    buttonText: 'text-[#0C4229]',
    image: '/assets/images/unit-mi.jpg',
    description: 'Dasar ilmu dan akhlak untuk pondasi masa depan santri berprestasi.',
    levels: 'Kelas 1 - 6 (Madrasah Ibtidaiyah)',
    highlights: ['Bilingual Science & Math', 'Halaqah Qur\'an & Bahasa Arab Terapan', 'Project-Based Learning & STEAM'],
    curriculum: 'Kemenag & Kurikulum Nasional dengan Penguatan Tauhid dan Life Skills.'
  },
  {
    id: 'mts',
    name: 'MTs',
    iconType: 'building',
    iconBg: '#2563eb',
    badgeBorder: '#2563eb',
    buttonBorder: 'border-blue-600 text-blue-600 hover:bg-blue-50',
    buttonText: 'text-blue-600',
    image: '/assets/images/unit-mts.jpg',
    description: 'Menguatkan ilmu pengetahuan, adab, karakter kepemimpinan, dan kemandirian.',
    levels: 'Kelas 7 - 9 (Madrasah Tsanawiyah)',
    highlights: ['Leadership Camp & Outing', 'Klub Robotik & Riset Remaja', 'Tahfidz Camp & Bimbingan Minat Bakat'],
    curriculum: 'Penguatan Sains, Akhlak, Kepemimpinan, dan Bahasa Asing.'
  },
  {
    id: 'ma',
    name: 'MA',
    iconType: 'graduation',
    iconBg: '#8b5cf6',
    badgeBorder: '#8b5cf6',
    buttonBorder: 'border-purple-600 text-purple-600 hover:bg-purple-50',
    buttonText: 'text-purple-600',
    image: '/assets/images/unit-ma.jpg',
    description: 'Persiapan unggul untuk masa depan, studi perguruan tinggi, dan peradaban baru.',
    levels: 'Kelas 10 - 12 (Madrasah Aliyah)',
    highlights: ['SNBP/SNBT University Preparation', 'Global Islamic Fellowship', 'Karya Tulis Ilmiah & Magang Sosial'],
    curriculum: 'Kesiapan Kampus Top Nasional & Internasional berlandaskan Akhlak Peradaban.'
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Anak kami tumbuh menjadi pribadi yang berakhlak, mandiri, dan bersemangat belajar. Asih Putera seperti rumah kedua bagi mereka.',
    author: 'Ibu Siti Rahmawati',
    role: 'Orang Tua Murid MI',
    avatar: '/assets/images/parent_mother_hijab_1787447406101.jpg',
  },
  {
    id: '2',
    quote: 'Ilmu yang bermanfaat dan pembinaan karakter di Asih Putera membekali saya hingga bisa bermanfaat di masyarakat.',
    author: 'Rizki Aulia Rahman',
    role: 'Alumni MA – Student at UI',
    avatar: '/assets/images/alumni_male_muslim_1787447417840.jpg',
  },
  {
    id: '3',
    quote: 'Guru-guru yang inspiratif dan lingkungan yang positif membuat kami nyaman belajar dan berkembang.',
    author: 'Aisyah Nurfadilah',
    role: 'Siswi MA',
    avatar: '/assets/images/student_female_hijab_1787447431052.jpg',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    category: 'BERITA',
    badgeBg: 'bg-teal-100',
    badgeText: 'text-teal-800',
    title: 'Semarak Milad Asih Putera ke-27: Mendidik Generasi Berakhlak',
    description: 'Rangkaian kegiatan inspiratif penuh berkah, refleksi 27 tahun perjalanan mencetak santri berprestasi dan berkarakter.',
    date: '18 Mei 2025',
    image: '/assets/images/news-milad.jpg',
    content: 'Perayaan milad Yayasan Asih Putera ke-27 diramaikan oleh penampilan santri, pameran seni kaligrafi & sains Islam terpadu, serta tausiyah kebangsaan oleh tokoh pendidikan Islam nasional. Momen ini menjadi wujud syukur atas dedikasi mencerdaskan generasi umat.'
  },
  {
    id: 'news-2',
    category: 'AGENDA',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    title: 'Open House PPDB 2025/2026: Sambut Generasi Rabbani',
    description: 'Konsultasi kurikulum terpadu dan temu ramah bapak/ibu orang tua calon santri bersama para ustadz & pengurus yayasan.',
    date: '25 Mei 2025',
    image: '/assets/images/news-openhouse.jpg',
    content: 'Sesi konsultasi kurikulum terpadu Kemenag & Nasional, tur fasilitas laboratorium sains, ruang tahfidz Qur\'an, asrama santri, dan kemudahan registrasi khusus bagi orang tua pendaftar awal.'
  },
  {
    id: 'news-3',
    category: 'GALERI',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    title: 'Tadabbur Alam & Outdoor Learning Santri MTs',
    description: 'Belajar sains ekologi di alam terbuka, menumbuhkan rasa syukur dan kepedulian lingkungan sesuai ajaran Islam.',
    date: '10 Mei 2025',
    image: '/assets/images/news-tadabbur.jpg',
    content: 'Santri MTs berpartisipasi aktif dalam eksplorasi sains lingkungan, observasi flora fauna, penanaman bibit pohon serentak, serta tafakkur ayat-ayat kauniyah Allah di kawasan konservasi hutan edukasi.'
  },
];