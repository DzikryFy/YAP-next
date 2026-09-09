export interface SliderAttachment {
  AttachmentId?: number;
  ReferenceId?: string | number;
  Name?: string;
  TypeFile?: string;
}

export interface SliderItem {
  SliderId: number;
  Title: string;
  Attachment?: SliderAttachment[];
}

export const fetchSliders = async (): Promise<SliderItem[]> => {
  try {
    const response = await fetch('/api/slider', { cache: 'no-store' });
    if (!response.ok) return [];

    const result = await response.json();
    return result?.Data?.Slider ?? [];
  } catch (error) {
    console.error('Failed to fetch sliders:', error);
    return [];
  }
};
