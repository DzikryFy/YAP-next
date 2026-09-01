import apiClient from '../lib/axios';

export interface ContentParams {
  KanalType?: string;
  Limit?: number;
}

export const getNewsList = async (params: ContentParams = { KanalType: 'K001' }) => {
  try {
    const response = await apiClient.get('/Content', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};