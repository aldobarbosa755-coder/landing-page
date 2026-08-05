import { useState, useEffect } from 'react';

export interface ChangelogItem {
  id?: string;
  category?: 'new' | 'improved' | 'fixed' | string;
  type?: 'new' | 'improved' | 'fixed' | string;
  title: string;
  description: string;
}

export interface SaaSVersionData {
  version: string;
  date: string;
  summary: string;
  tag?: string;
  items?: ChangelogItem[];
  totalReleases?: number;
}

export const CACHE_KEY = 'velloxis_cached_version';

export const DEFAULT_SAAS_VERSION: SaaSVersionData = {
  version: 'v3.3.3',
  date: 'August 5, 2026',
  summary: 'Global Express CORS middleware & dynamic version synchronization enabled.',
  tag: 'Latest',
  items: [
    {
      id: 'ch-333-1',
      category: 'improved',
      type: 'improved',
      title: 'Global CORS Middleware & Dynamic Payload',
      description: 'Applied top-level Express CORS headers to all routes and preflights, supporting dynamic fetch from velloxis.aldolima.dev.br.',
    },
  ],
  totalReleases: 15,
};

export function getCachedVersion(): SaaSVersionData | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    // ignore
  }
  return null;
}

export async function syncAppVersion(): Promise<SaaSVersionData> {
  const SAAS_API_URL = 'https://app.aldolima.dev.br/api/version';
  const FALLBACK_URL = '/api/version';

  let data: any = null;

  try {
    let response = await fetch(SAAS_API_URL, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      mode: 'cors',
    }).catch(() => null);

    if (!response || !response.ok) {
      console.warn('⚠️ Falha ao conectar em app.aldolima.dev.br, tentando fallback local...');
      response = await fetch(FALLBACK_URL, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      }).catch(() => null);
    }

    if (response && response.ok) {
      data = await response.json();
    }
  } catch (err: any) {
    console.warn('⚠️ Erro ao sincronizar versão do SaaS:', err?.message || err);
  }

  const cached = getCachedVersion();

  const versionStr = data?.version || data?.latestVersion || cached?.version || DEFAULT_SAAS_VERSION.version;
  const formattedVersion = String(versionStr).startsWith('v') ? String(versionStr) : `v${versionStr}`;

  const result: SaaSVersionData = {
    version: formattedVersion,
    date: data?.date || cached?.date || DEFAULT_SAAS_VERSION.date,
    summary: data?.summary || cached?.summary || DEFAULT_SAAS_VERSION.summary,
    tag: data?.tag || cached?.tag || DEFAULT_SAAS_VERSION.tag,
    items: Array.isArray(data?.items) ? data.items : cached?.items || DEFAULT_SAAS_VERSION.items,
    totalReleases: data?.totalReleases || cached?.totalReleases || DEFAULT_SAAS_VERSION.totalReleases,
  };

  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(result));
  } catch (e) {
    // ignore
  }

  // Update DOM elements dynamically
  document.querySelectorAll('#app-version-badge, .app-version').forEach((elem) => {
    (elem as HTMLElement).innerText = result.version;
  });

  document.querySelectorAll('#app-changelog-summary, .app-summary').forEach((elem) => {
    (elem as HTMLElement).innerText = result.summary;
  });

  document.querySelectorAll('#app-release-date, .app-date').forEach((elem) => {
    (elem as HTMLElement).innerText = result.date;
  });

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('saas-version-synced', { detail: result }));
  }

  console.log('✅ Versionamento Velloxis sincronizado com sucesso:', result.version);
  return result;
}

export function useSaaSVersion(): SaaSVersionData {
  const [versionData, setVersionData] = useState<SaaSVersionData>(() => getCachedVersion() || DEFAULT_SAAS_VERSION);

  useEffect(() => {
    const handleSync = (event: Event) => {
      const customEvent = event as CustomEvent<SaaSVersionData>;
      if (customEvent.detail) {
        setVersionData(customEvent.detail);
      }
    };

    window.addEventListener('saas-version-synced', handleSync);

    syncAppVersion().then((res) => {
      if (res) setVersionData(res);
    });

    return () => {
      window.removeEventListener('saas-version-synced', handleSync);
    };
  }, []);

  return versionData;
}

if (typeof window !== 'undefined') {
  (window as any).syncAppVersion = syncAppVersion;
}
