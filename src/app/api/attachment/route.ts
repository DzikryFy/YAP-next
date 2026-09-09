import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

const MIME_MAP: Record<string, string> = {
  mp4: 'video/mp4',
  webm: 'video/webm',
  mov: 'video/quicktime',
  webp: 'image/webp',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
};

function inferContentType(filename: string, fallback: string): string {
  if (fallback && fallback !== 'application/octet-stream') return fallback;
  const ext = filename.replace(/\.enc$/i, '').split('.').pop()?.toLowerCase() ?? '';
  return MIME_MAP[ext] ?? 'application/octet-stream';
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('Id');
  const refId = searchParams.get('RefId');
  const filename = searchParams.get('Filename');

  if (!id || !refId || !filename) {
    return NextResponse.json({ error: 'Missing required params: Id, RefId, Filename' }, { status: 400 });
  }

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

  const baseUrl = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:7000').replace(/\/api\/?$/, '');

  try {
    // Step 1: Fetch attachment metadata to get SignedPath
    const metaResponse = await axios.get(`${baseUrl}/api/Attachment`, {
      params: { Id: id, RefId: refId, Filename: filename },
      headers: authHeader,
    });

    const signedPath: string | undefined = metaResponse.data?.Data?.[0]?.SignedPath;
    if (!signedPath) {
      return NextResponse.json({ error: 'SignedPath not found' }, { status: 404 });
    }

    // Step 2: Forward Range header for video streaming support
    const rangeHeader = req.headers.get('range');

    const mediaResponse = await axios.get(signedPath, {
      responseType: 'arraybuffer',
      headers: {
        ...authHeader,
        ...(rangeHeader && { Range: rangeHeader }),
      },
      validateStatus: (status) => status < 500,
    });

    const contentType = inferContentType(
      filename,
      (mediaResponse.headers['content-type'] as string) ?? ''
    );

    const isPartial = mediaResponse.status === 206;
    const responseHeaders: Record<string, string> = {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600',
      'Accept-Ranges': 'bytes',
    };

    if (isPartial) {
      const contentRange = mediaResponse.headers['content-range'] as string | undefined;
      const contentLength = mediaResponse.headers['content-length'] as string | undefined;
      if (contentRange) responseHeaders['Content-Range'] = contentRange;
      if (contentLength) responseHeaders['Content-Length'] = contentLength;
    }

    return new NextResponse(mediaResponse.data, {
      status: isPartial ? 206 : 200,
      headers: responseHeaders,
    });
  } catch (error: any) {
    console.error('Failed to proxy attachment:', error?.response?.status, error.message);
    return NextResponse.json(
      { error: 'Attachment not found' },
      { status: error?.response?.status ?? 404 }
    );
  }
}
