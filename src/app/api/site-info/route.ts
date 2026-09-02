import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    const rawBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:7000';
    const cleanBaseUrl = rawBaseUrl.replace(/\/api\/?$/, '');

    const backendUrl = `${cleanBaseUrl}/api/SiteInformation`;

    const response = await axios.get(backendUrl, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.warn('⚠️ Gagal mengambil SiteInformation:', error?.response?.data || error.message);

    return NextResponse.json(
      { success: false, Data: null, message: 'Gagal mengambil informasi situs' },
      { status: 200 }
    );
  }
}