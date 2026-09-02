import apiClient from '../lib/axios';

export interface LoginPayload {
  Username: string;
  Password: string;
  SiteId: string | number;
}

export const loginService = {
  login: async (payload: LoginPayload) => {
    try {
      // Konversi SiteId ke number agar sesuai tipe data backend Go Fiber
      const formattedPayload = {
        ...payload,
        SiteId: Number(payload.SiteId),
      };

      const response = await apiClient.post('/Auth/Login', formattedPayload);

      // Ambil token dari response Go Fiber
      const token =
        response.data?.Data?.Token ||
        response.data?.Data?.token ||
        response.data?.token;

      if (token && typeof window !== 'undefined') {
        // 1. Simpan di localStorage
        localStorage.setItem('token', token);

        // 2. Simpan di Session Cookie (Tanpa 'expires' = otomatis terhapus saat browser ditutup)
        document.cookie = `token=${token}; path=/;`;
      }

      return response.data;
    } catch (error: any) {
      console.error('❌ Login Error:', error?.response?.data || error.message);
      throw error;
    }
  },
};