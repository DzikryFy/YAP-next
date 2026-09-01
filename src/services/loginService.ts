import apiClient from '../lib/axios';

export interface LoginPayload {
  Username: string;
  Password: string;
  SiteId: string;
}

export const loginService = {
  login: async (payload: LoginPayload) => {
    try {
      const response = await apiClient.post('/Auth/Login', payload);

      // Ambil token dari response Golang
      const token =
        response.data?.Data?.Token ||
        response.data?.Data?.token ||
        response.data?.token;

      if (token) {
        localStorage.setItem('token', token);
      }

      return response.data;
    } catch (error: any) {
      console.error('❌ Login Error:', error?.response?.data || error.message);
      throw error;
    }
  },
};