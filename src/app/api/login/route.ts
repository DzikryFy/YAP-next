import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch('http://localhost:7000/api/Auth/Login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: 'Login gagal' }, { status: response.status });
    }

    const token = data?.Data?.Token || data?.Data?.token || data?.token || data?.Token;
    const res = NextResponse.json(data);

    if (token) {
      res.cookies.set({
        name: 'token',
        value: token,
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
    }

    return res;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}