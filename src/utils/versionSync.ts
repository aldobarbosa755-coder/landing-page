import { useState, useEffect } from 'react';

export interface SaaSVersionData {
  version: string;
  date: string;
  summary: string;
}

export const DEFAULT_SAAS_VERSION: SaaSVersionData = {
  version: 'v3.3.1',
  date: '05/08/2026',
  summary: 'Última versão sincronizada com o SaaS (v3.3.1).',
};

export async function syncAppVersion(): Promise<SaaSVersionData> {
  try {
    const response = await fetch('https://app.aldolima.dev.br/api/version');
    if (response.ok) {
      const data = await response.json();
      
      const newVersionData: SaaSVersionData = {
        version: data.version ? (String(data.version).startsWith('v') ? String(data.version) : `v${data.version}`) : DEFAULT_SAAS_VERSION.version,
        date: data.date || DEFAULT_SAAS_VERSION.date,
        summary: data.summary || DEFAULT_SAAS_VERSION.summary,
      };

      // Atualiza os elementos dinamicamente se existirem no DOM
      document.querySelectorAll('#app-version-badge').forEach((elem) => {
        (elem as HTMLElement).innerText = newVersionData.version;
      });
      document.querySelectorAll('#app-release-date').forEach((elem) => {
        (elem as HTMLElement).innerText = newVersionData.date;
      });
      document.querySelectorAll('#app-changelog-summary').forEach((elem) => {
        (elem as HTMLElement).innerText = newVersionData.summary;
      });

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('saas-version-synced', { detail: newVersionData }));
      }

      return newVersionData;
    }
  } catch (error) {
    console.warn('Erro ao sincronizar versão com a plataforma:', error);
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
    
    // Dispara a sincronização na montagem
    syncAppVersion().then((res) => {
      if (res) setVersionData(res);
    });

    return () => {
      window.removeEventListener('saas-version-synced', handleSync);
    };
  }, []);

  return versionData;
}
