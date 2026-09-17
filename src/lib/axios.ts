import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL ?? '',
  headers: {
    'Content-Type': 'application/json',
  },
});
