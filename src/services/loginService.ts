import { apiClient } from '../lib/axios';

export interface LoginPayload {
  Username: string;
  Password: string;
  SiteId: string | number;
}

// Memory storage untuk token (tanpa localStorage)
let inMemoryToken: string | null = null;

export const loginService = {
  // Method untuk mengambil token aktif
  getToken: (): string | null => {
    if (inMemoryToken) return inMemoryToken;

    // Fallback dari session cookie jika halaman di-refresh
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
      if (match) {
        inMemoryToken = decodeURIComponent(match[1]);
        return inMemoryToken;
      }
    }
    return null;
  },

  login: async (payload: LoginPayload) => {
    try {
      // Konversi SiteId ke number untuk Go Fiber
      const formattedPayload = {
        ...payload,
        SiteId: Number(payload.SiteId),
      };

      const response = await apiClient.post('/Auth/Login', formattedPayload);

      // Extract token dari response backend
      const token =
        response.data?.Data?.Token ||
        response.data?.Data?.token ||
        response.data?.token;

      if (token && typeof window !== 'undefined') {
        // 1. Simpan di variabel memori JS
        inMemoryToken = token;

        // 2. Simpan di Session Cookie (Otomatis hapus saat browser ditutup)
        document.cookie = `token=${token}; path=/; SameSite=Lax`;
      }

      return response.data;
    } catch (error: any) {
      console.error('❌ Login Error:', error?.response?.data || error.message);
      throw error;
    }
  },

  logout: () => {
    inMemoryToken = null;
    if (typeof document !== 'undefined') {
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    }
  },
};