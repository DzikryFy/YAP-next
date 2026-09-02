import axios from 'axios';

// 1. Ambil URL dari .env dengan fallback ke localhost
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:7000/api';

const apiClient = axios.create({
  baseURL: BASE_URL.replace(/\/+$/, ''), // Menghapus trailing slash jika ada
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper Vanilla JS untuk membaca Cookie tanpa library tambahan
const getCookie = (name: string) => {
  if (typeof window === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
};

// Interceptor: Otomatis tempelkan Bearer Token
apiClient.interceptors.request.use(
  (config) => {
    // Pastikan kode hanya berjalan di browser (Client-side)
    if (typeof window !== 'undefined') {
      // Mengambil token dari localStorage ATAU Cookie (sesuai yang Anda pakai)
      const token = localStorage.getItem('token') || getCookie('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;