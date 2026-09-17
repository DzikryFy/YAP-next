export interface UnitApiItem {
  ContentId?: number;
  Title?: string;
  Content?: string;
  Category?: string;
  Thumbnail?: string;
  ThumbnailId?: number;
}

export const buildUnitImageUrl = (item: UnitApiItem): string => {
  const { ThumbnailId, ContentId, Thumbnail } = item;
  if (Thumbnail && /^https?:\/\//i.test(Thumbnail)) return Thumbnail;
  if (ThumbnailId && ContentId && Thumbnail) {
    return `/api/attachment?Id=${ThumbnailId}&RefId=${ContentId}&Filename=${encodeURIComponent(Thumbnail)}&t=${Date.now()}`;
  }
  return '';
};

export const fetchEducationalUnits = async (): Promise<UnitApiItem[]> => {
  try {
    const response = await fetch('/api/unit', { cache: 'no-store' });
    if (!response.ok) return [];
    const result = await response.json();
    if (result.Status === 200 && Array.isArray(result.Data?.Content)) {
      return result.Data.Content as UnitApiItem[];
    }
    return [];
  } catch (error) {
    console.error('Gagal memuat unit dari API:', error);
    return [];
  }
};
