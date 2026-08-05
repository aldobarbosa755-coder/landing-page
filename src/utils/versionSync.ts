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

export const DEFAULT_SAAS_VERSION: SaaSVersionData = {
  version: 'v3.3.2',
  date: 'August 5, 2026',
  summary: 'Global Express CORS middleware enabled for seamless multi-domain landing page dynamic sync.',
  tag: 'Latest',
  items: [
    {
      id: 'ch-332-1',
      category: 'improved',
      type: 'improved',
      title: 'Global CORS Middleware & Dynamic Payload',
      description: 'Applied top-level Express CORS headers to all routes and preflights, supporting dynamic fetch from velloxis.aldolima.dev.br.',
    },
  ],
  totalReleases: 14,
};

export async function syncAppVersion(): Promise<SaaSVersionData> {
  const SAAS_API_URL = 'https://app.aldolima.dev.br/api/version';

  try {
    const response = await fetch(SAAS_API_URL, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      mode: 'cors',
    });

    if (response.ok) {
      const data = await response.json();

      const versionStr = data.version
        ? String(data.version).startsWith('v')
          ? String(data.version)
          : `v${data.version}`
        : DEFAULT_SAAS_VERSION.version;

      const newVersionData: SaaSVersionData = {
        version: versionStr,
        date: data.date || DEFAULT_SAAS_VERSION.date,
        summary: data.summary || DEFAULT_SAAS_VERSION.summary,
        tag: data.tag || DEFAULT_SAAS_VERSION.tag,
        items: Array.isArray(data.items) ? data.items : DEFAULT_SAAS_VERSION.items,
        totalReleases: data.totalReleases || DEFAULT_SAAS_VERSION.totalReleases,
      };

      // 1. Update Version Badges
      document.querySelectorAll('#app-version-badge, .app-version').forEach((elem) => {
        (elem as HTMLElement).innerText = newVersionData.version;
      });

      // 2. Update Release Summary
      document.querySelectorAll('#app-changelog-summary, .app-summary').forEach((elem) => {
        (elem as HTMLElement).innerText = newVersionData.summary;
      });

      // 3. Update Release Date
      document.querySelectorAll('#app-release-date, .app-date').forEach((elem) => {
        (elem as HTMLElement).innerText = newVersionData.date;
      });

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('saas-version-synced', { detail: newVersionData }));
      }

      console.log('✅ Versionamento Velloxis sincronizado com sucesso:', newVersionData.version);
      return newVersionData;
    }
  } catch (error: any) {
    console.warn('⚠️ Não foi possível carregar versão em tempo real:', error?.message || error);
  }

  return DEFAULT_SAAS_VERSION;
}

export function useSaaSVersion(): SaaSVersionData {
  const [versionData, setVersionData] = useState<SaaSVersionData>(DEFAULT_SAAS_VERSION);

  useEffect(() => {
    const handleSync = (event: Event) => {
      const customEvent = event as CustomEvent<SaaSVersionData>;
      if (customEvent.detail) {
        setVersionData(customEvent.detail);
      }
    };

    window.addEventListener('saas-version-synced', handleSync);

    // Initial sync call
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
