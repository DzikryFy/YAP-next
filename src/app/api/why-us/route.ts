import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const kanalType = searchParams.get('KanalType') ?? 'K005';

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const baseUrl = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:7000').replace(/\/api\/?$/, '');

  try {
    const response = await axios.get(`${baseUrl}/api/content?KanalType=${kanalType}`, {
      headers: { ...(token && { Authorization: `Bearer ${token}` }) },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Failed to fetch why-us:', error?.response?.data ?? error.message);
    return NextResponse.json(
      { Status: 500, Message: 'Failed to fetch why-us', Data: { Content: [] } },
      { status: 200 }
    );
  }
}
