import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('token');

    const username = process.env.CMS_USERNAME || 'yap@gmail.com';
    const password = process.env.CMS_PASSWORD || 'YAPhebat#1';
    const siteId = String(process.env.CMS_SITE_ID || '1005');

    const payload = {
      Username: username,
      Password: password,
      SiteId: siteId,
    };

    const apiUrl = (process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? '')
      .replace(/\/+$/, '');

    if (!apiUrl) {
      return NextResponse.json({ message: 'API_URL belum dikonfigurasi di .env' }, { status: 500 });
    }

    const loginEndpoint = `${apiUrl}/api/Auth/Login`;

    const response = await fetch(loginEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    const token = data?.Data?.Token || data?.Data?.token || data?.token || data?.Token;

    if (!response.ok || !token) {
      cookieStore.delete('token');
      return NextResponse.json(
        { message: 'Login gagal atau token tidak ada', data },
        { status: response.status || 400 }
      );
    }

    cookieStore.set('token', token, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({ success: true, message: 'Login Berhasil' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message }, { status: 500 });
  }
}