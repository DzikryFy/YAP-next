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

let siteInfoRequest: Promise<SiteInfoData | null> | null = null;
let siteInfoCache: { data: SiteInfoData | null; expiresAt: number } | null = null;

export async function fetchSiteInformation(): Promise<SiteInfoData | null> {
  if (siteInfoCache && siteInfoCache.expiresAt > Date.now()) {
    return siteInfoCache.data;
  }

  if (siteInfoRequest) return siteInfoRequest;

  siteInfoRequest = fetch('/api/site-info', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
    .then(async (res) => {
      if (!res.ok) return null;

      const result = await res.json();
      return result?.Data || result?.data || null;
    })
    .then((data) => {
      siteInfoCache = { data, expiresAt: Date.now() + 60_000 };
      return data;
    })
    .catch((error) => {
      console.error('Error fetching site info:', error);
      return null;
    })
    .finally(() => {
      siteInfoRequest = null;
    });

  return siteInfoRequest;
}