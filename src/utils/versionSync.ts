export async function syncAppVersion() {
  try {
    const response = await fetch('https://app.aldolima.dev.br/api/version');
    const data = await response.json();

    // Atualiza os elementos dinamicamente
    if (data.version) {
      const el = document.getElementById('app-version-badge');
      if (el) el.innerText = data.version;
      document.querySelectorAll('#app-version-badge').forEach((elem) => {
        (elem as HTMLElement).innerText = data.version;
      });
    }
    if (data.date) {
      const el = document.getElementById('app-release-date');
      if (el) el.innerText = data.date;
      document.querySelectorAll('#app-release-date').forEach((elem) => {
        (elem as HTMLElement).innerText = data.date;
      });
    }
    if (data.summary) {
      const el = document.getElementById('app-changelog-summary');
      if (el) el.innerText = data.summary;
      document.querySelectorAll('#app-changelog-summary').forEach((elem) => {
        (elem as HTMLElement).innerText = data.summary;
      });
    }
    return data;
  } catch (error) {
    console.warn('Erro ao sincronizar versão com a plataforma:', error);
    // If offline or CORS restriction, set fallback informative summary text
    const summaryEl = document.getElementById('app-changelog-summary');
    if (summaryEl && summaryEl.innerText === 'Carregando novidades...') {
      summaryEl.innerText = 'Últimas melhorias e atualizações sincronizadas no SaaS.';
    }
    return null;
  }
}

if (typeof window !== 'undefined') {
  (window as any).syncAppVersion = syncAppVersion;
}
