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

export function getStoredSaaSVersion(): SaaSVersionData {
  return DEFAULT_SAAS_VERSION;
}

export function syncAppVersion(): SaaSVersionData {
  return DEFAULT_SAAS_VERSION;
}

export function useSaaSVersion(): SaaSVersionData {
  const [versionData] = useState<SaaSVersionData>(DEFAULT_SAAS_VERSION);
  return versionData;
}
