export interface WhyUsContentItem {
  ContentId?: number;
  Title?: string;
  Category?: string;
  Content?: string;
  Thumbnail?: string;
  ThumbnailId?: number;
}

export const fetchWhyUsContent = async (): Promise<WhyUsContentItem[]> => {
  try {
    const response = await fetch('/api/why-us?KanalType=K005', { cache: 'no-store' });
    if (!response.ok) return [];

    const result = await response.json();
    if (result.Status === 200 && Array.isArray(result.Data?.Content)) {
      return result.Data.Content as WhyUsContentItem[];
    }

    return [];
  } catch (error) {
    console.error('Failed to fetch why-us content:', error);
    return [];
  }
};
