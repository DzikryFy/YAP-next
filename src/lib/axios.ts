import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:7000/api', // Direct ke Golang API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: Tempelkan Bearer Token otomatis jika ada di localStorage
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;