import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const kanalType = searchParams.get('KanalType') ?? 'K001';

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const configuredApiUrl = process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL ?? '';
  if (!configuredApiUrl) {
    return NextResponse.json({ message: 'API_URL belum dikonfigurasi di .env' }, { status: 500 });
  }

  const baseUrl = configuredApiUrl.replace(/\/api\/?$/, '');

  try {
    const response = await axios.get(`${baseUrl}/api/content?KanalType=${kanalType}`, {
      headers: { ...(token && { Authorization: `Bearer ${token}` }) },
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    const responseData = axios.isAxiosError(error) ? error.response?.data : undefined;
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Failed to fetch news:', responseData ?? message);
    return NextResponse.json(
      { Status: 500, Message: 'Failed to fetch news', Data: { Content: [] } },
      { status: 502 }
    );
  }
}
