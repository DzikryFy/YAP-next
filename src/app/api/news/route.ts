import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // 1. Ambil token dari cookie httpOnly menggunakan next/headers
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized / Token tidak ada di cookie' },
        { status: 401 }
      );
    }

    const rawUrl = process.env.API_URL || 'http://localhost:7000';
    const baseUrl = rawUrl.replace(/\/+$/, '');
    const searchParams = request.nextUrl.search; // Meneruskan ?KanalType=K001

    // 2. Tembak Go Fiber dengan endpoint /api/content (huruf kecil sesuai Postman)
    const response = await fetch(`${baseUrl}/api/content${searchParams}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}