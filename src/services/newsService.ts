export interface ContentParams {
  KanalType?: string;
  Limit?: number;
}

export const getNewsList = async (params: ContentParams = { KanalType: 'K001' }) => {
  try {
    const query = new URLSearchParams(params as Record<string, string>).toString();

    // Panggil Route Handler internal Next.js (port 3000)
    const response = await fetch(`/api/news?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};