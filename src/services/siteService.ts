export interface SiteInfoData {
  SiteId?: string;
  Code?: string;
  Name?: string;
  Description?: string;
  Address?: string;
  Alamat?: string;
  UrlMap?: string;
  Phone?: string;
  Telepon?: string;
  Email?: string;
  Logo?: string;
  Domain?: string;
  Facebook?: string;
  Instagram?: string;
  Youtube?: string;
}

export async function fetchSiteInformation(): Promise<SiteInfoData | null> {
  try {
    const res = await fetch('/api/site-info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const result = await res.json();
    return result?.Data || result?.data || null;
  } catch (error) {
    console.error('Error fetching site info:', error);
    return null;
  }
}