export interface TestimonialItem {
  id: string | number;
  author: string;
  role: string;
  quote: string;
  avatar: string;
}

interface TestimonialApiItem {
  ContentId?: number;
  Title?: string;
  Content?: string;
  Category?: string;
  Thumbnail?: string;
  ThumbnailId?: number;
}

const stripHtml = (html?: string): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '').trim();
};

const buildAvatarUrl = (item: TestimonialApiItem): string => {
  const { ThumbnailId, ContentId, Thumbnail } = item;
  if (Thumbnail && /^https?:\/\//i.test(Thumbnail)) return Thumbnail;
  if (ThumbnailId && ContentId && Thumbnail) {
    return `/api/attachment?Id=${ThumbnailId}&RefId=${ContentId}&Filename=${encodeURIComponent(Thumbnail)}&t=${Date.now()}`;
  }
  return '';
};

export const getTestimonials = async (): Promise<TestimonialItem[]> => {
  try {
    const response = await fetch('/api/testimonials', { cache: 'no-store' });
    if (!response.ok) return [];

    const result = await response.json();
    const items: TestimonialApiItem[] = Array.isArray(result.Data?.Content)
      ? result.Data.Content
      : [];

    if (items.length === 0) return [];

    return items.map((item, index) => {
      // "Nama - Jabatan" dari Title
      const parts = (item.Title || '').split('-');
      const author = parts[0]?.trim() || 'Orang Tua / Alumni';
      const role = parts.slice(1).join('-').trim() || item.Category || 'Wali Murid';

      return {
        id: item.ContentId ?? index,
        author,
        role,
        quote: stripHtml(item.Content),
        avatar: buildAvatarUrl(item),
      };
    });
  } catch (error) {
    console.error('Gagal memuat testimonial dari API:', error);
    return [];
  }
};
