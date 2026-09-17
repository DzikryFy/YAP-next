export interface SliderAttachment {
  AttachmentId?: number;
  ReferenceId?: string | number;
  Name?: string;
  TypeFile?: string;
  URL?: string;
  Url?: string;
  FileUrl?: string;
  MediaUrl?: string;
}

export interface SliderItem {
  SliderId: number;
  Title: string;
  URL?: string;
  Url?: string;
  FileUrl?: string;
  MediaUrl?: string;
  VideoUrl?: string;
  TypeReference?: string;
  Attachment?: SliderAttachment[] | SliderAttachment | null;
}

export const fetchSliders = async (): Promise<SliderItem[]> => {
  try {
    const response = await fetch('/api/slider', { cache: 'no-store' });
    if (!response.ok) return [];

    const result = await response.json();
    const sliders = result?.Data?.Slider ?? result?.Data ?? result?.Slider ?? result;
    return Array.isArray(sliders) ? sliders : [];
  } catch (error) {
    console.error('Failed to fetch sliders:', error);
    return [];
  }
};
