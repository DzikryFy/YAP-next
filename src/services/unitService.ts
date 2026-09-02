import axios from 'axios';

export interface ContentApiItem {
  ContentId?: string | number;
  Id?: string | number;
  Title?: string;
  Judul?: string;
  Content?: string;
  Description?: string;
  Deskripsi?: string;
  Summary?: string;
  Category?: string;
  SignedThumbnail?: string;
  Thumbnail?: string;
  ImageUrl?: string;
  Gambar?: string;
  [key: string]: any;
}

export const fetchEducationalUnits = async (): Promise<ContentApiItem[]> => {
  try {
    // Paksa request menembak ke server Next.js lokal
    const response = await axios.get('/api/unit', { baseURL: '' });
    return (
      response.data?.Data?.Content ||
      response.data?.data?.Content ||
      response.data?.Data ||
      (Array.isArray(response.data) ? response.data : [])
    );
  } catch (error) {
    console.error('❌ Gagal memuat data unit dari API:', error);
    return [];
  }
};