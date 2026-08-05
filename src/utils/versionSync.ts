import { useState, useEffect } from 'react';

export interface SaaSVersionData {
  version: string;
  date?: string;
  summary?: string;
  changelog?: Array<{
    type?: 'new' | 'improved' | 'fixed';
    title: string;
    description?: string;
  }>;
}

const STORAGE_KEY = 'velloxis_saas_version_data';

export function getStoredSaaSVersion(): SaaSVersionData | null {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    // Ignore storage errors
  }
  return null;
}

export function applyDOMVersionUpdates(data: SaaSVersionData) {
  if (data.version) {
    document.querySelectorAll('#app-version-badge').forEach((elem) => {
      (elem as HTMLElement).innerText = data.version.startsWith('v') ? data.version : `v${data.version}`;
    });
  }
  if (data.date) {
    document.querySelectorAll('#app-release-date').forEach((elem) => {
      (elem as HTMLElement).innerText = data.date!;
    });
  }
  if (data.summary) {
    document.querySelectorAll('#app-changelog-summary').forEach((elem) => {
      (elem as HTMLElement).innerText = data.summary!;
    });
  }
}

export async function syncAppVersion(): Promise<SaaSVersionData | null> {
  // First apply stored version if available
  const stored = getStoredSaaSVersion();
  if (stored) {
    applyDOMVersionUpdates(stored);
  }

  const endpoints = [
    '/api/saas-version',
    'https://app.aldolima.dev.br/api/version',
    'https://app.aldolima.dev.br/api/v1/version',
    'https://app.aldolima.dev.br/api/changelog',
    'https://app.aldolima.dev.br/version.json',
  ];

  for (const url of endpoints) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
      });

      if (!response.ok) continue;

      const data = await response.json();

      const version = data.version || data.v || data.latestVersion || data.appVersion || data.tag_name || data.release;
      if (!version) continue;

      const versionStr = String(version).startsWith('v') ? String(version) : `v${version}`;
      const dateStr = data.date || data.releaseDate || data.published_at || data.updatedAt || new Date().toLocaleDateString('pt-BR');
      const summaryStr = data.summary || data.description || data.changelog_summary || data.message || 'Última versão sincronizada com o SaaS.';

      const result: SaaSVersionData = {
        version: versionStr,
        date: dateStr,
        summary: summaryStr,
        changelog: Array.isArray(data.changelog) ? data.changelog : Array.isArray(data.changes) ? data.changes : undefined,
      };

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      } catch (e) {
        // ignore
      }

      applyDOMVersionUpdates(result);

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('saas-version-synced', { detail: result }));
      }

      return result;
    } catch (error) {
      // Continue trying next endpoint
    }
  }

  // Fallback if all endpoint fetches fail (e.g., CORS not configured yet on app.aldolima.dev.br)
  const summaryEl = document.getElementById('app-changelog-summary');
  if (summaryEl && (summaryEl.innerText === 'Carregando novidades...' || !summaryEl.innerText)) {
    summaryEl.innerText = 'Buscando atualizações do SaaS (app.aldolima.dev.br)...';
  }

  return stored;
}

export function useSaaSVersion() {
  const [versionData, setVersionData] = useState<SaaSVersionData | null>(() => getStoredSaaSVersion());

  useEffect(() => {
    const handleSync = (event: Event) => {
      const customEvent = event as CustomEvent<SaaSVersionData>;
      if (customEvent.detail) {
        setVersionData(customEvent.detail);
      }
    };

    window.addEventListener('saas-version-synced', handleSync);
    
    // Initial trigger
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
