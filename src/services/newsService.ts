export interface NewsApiItem {
  ContentId?: number;
  Title?: string;
  Content?: string;
  Category?: string;
  Kanal?: string;
  TglPublish?: string;
  Thumbnail?: string;
  ThumbnailId?: number;
}

export const buildNewsImageUrl = (item: NewsApiItem): string => {
  const { ThumbnailId, ContentId, Thumbnail } = item;
  if (Thumbnail && /^https?:\/\//i.test(Thumbnail)) return Thumbnail;
  if (ThumbnailId && ContentId && Thumbnail) {
    return `/api/attachment?Id=${ThumbnailId}&RefId=${ContentId}&Filename=${encodeURIComponent(Thumbnail)}&t=${Date.now()}`;
  }
  return '';
};

export const getNewsList = async (params: { KanalType?: string } = { KanalType: 'K001' }): Promise<NewsApiItem[]> => {
  try {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    const response = await fetch(`/api/news?${query}`, { cache: 'no-store' });
    if (!response.ok) return [];
    const result = await response.json();
    if (result.Status === 200 && Array.isArray(result.Data?.Content)) {
      return result.Data.Content as NewsApiItem[];
    }
    return [];
  } catch (error) {
    console.error('Gagal mengambil berita dari API:', error);
    return [];
  }
};
