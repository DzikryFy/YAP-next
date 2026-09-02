import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const username = process.env.CMS_USERNAME || 'yap@gmail.com';
    const password = process.env.CMS_PASSWORD || 'YAPhebat#1';
    const siteId = String(process.env.CMS_SITE_ID || '1005');

    const payload = {
      Username: username,
      Password: password,
      SiteId: siteId,
    };

    const rawUrl = process.env.API_URL || 'http://localhost:7000';
    const baseUrl = rawUrl.replace(/\/+$/, '');
    const loginEndpoint = `${baseUrl}/api/Auth/Login`;

    // Cetak payload di terminal VS Code
    console.log('🚀 Payload yang dikirim ke Go Fiber:', payload);

    const response = await fetch(loginEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log('📩 Balasan dari Go Fiber:', data);

    const token = data?.Data?.Token || data?.Data?.token || data?.token || data?.Token;

    if (!response.ok || !token) {
      return NextResponse.json(
        { message: 'Login gagal atau token tidak ada', data },
        { status: response.status || 400 }
      );
    }

    const cookieStore = await cookies();
    cookieStore.set('token', token, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({ success: true, message: 'Login Berhasil' });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}