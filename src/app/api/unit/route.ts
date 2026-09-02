import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      console.warn('⚠️ Token tidak ditemukan di cookie, menggunakan data lokal.');
      return NextResponse.json(
        { success: false, Data: { Content: [] }, message: 'Unauthenticated' },
        { status: 200 }
      );
    }

    // Ambil base URL dan hilangkan akhiran '/api' jika ada untuk cegah duplikasi /api/api
    const rawBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:7000';
    const cleanBaseUrl = rawBaseUrl.replace(/\/api\/?$/, '');
    
    const backendUrl = `${cleanBaseUrl}/api/content?KanalType=K004`;

    const response = await axios.get(backendUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.warn('⚠️ Go Fiber menolak request:', error?.response?.data || error.message);

    return NextResponse.json(
      { success: false, Data: { Content: [] }, message: 'Gagal mengambil data dari server' },
      { status: 200 }
    );
  }
}