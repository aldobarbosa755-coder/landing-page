import React from 'react';
import { ShieldCheck, Lock, Key, Award, CheckCircle2, Layers } from 'lucide-react';

export const SocialProofLogos: React.FC = () => {
  const companyLogos = [
    { name: 'Apex Software Studio', label: 'APEX CODE' },
    { name: 'Vanguard UX Agency', label: 'VANGUARD UX' },
    { name: 'DevForge Sistemas', label: 'DEVFORGE' },
    { name: 'LF Design Lab', label: 'LF LABS' },
    { name: 'Elevate Growth', label: 'ELEVATE' },
    { name: 'Studio Néctar', label: 'NECTAR' }
  ];

  const ecosystemIntegrations = [
    {
      name: 'GitHub',
      role: 'Sincronização de Código & Repositórios',
      description: 'Congela repositórios e gera logs SHA-256 no momento do aceite do escopo.',
      svg: (
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      badge: 'GitHub Sync'
    },
    {
      name: 'Figma',
      role: 'Importação de Protótipos & UI/UX',
      description: 'Vincula protótipos e tokens de design diretamente à folha de aprovação do cliente.',
      svg: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      ),
      badge: 'Figma Design'
    },
    {
      name: 'Discord',
      role: 'Notificações & Alertas em Tempo Real',
      description: 'Webhooks instantâneos de novos aceites, assinaturas e envio de Chaves Mestre.',
      svg: (
        <svg className="w-6 h-6 fill-current text-[#5865F2]" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      badge: 'Discord Bot'
    }
  ];

  return (
    <section className="py-16 dark:bg-[#080c14] bg-[#f7f8fc] border-y dark:border-[#131126] border-[#c7c4d8]/35 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Ecosystem Integrations Block (Requested by User) */}
        <div className="p-6 sm:p-8 rounded-3xl dark:bg-[#0f172a] bg-white border dark:border-[#1e293b] border-slate-200 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b dark:border-[#1e293b] border-slate-200 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3525cd]/15 text-[#818cf8] border border-[#3525cd]/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>ECOSSISTEMA & INTEGRAÇÕES NATIVAS INCLUSAS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900">
                Conecte o Velloxis com as Ferramentas do Seu Workflow
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#10b981] bg-[#10b981]/10 px-3 py-1.5 rounded-full border border-[#10b981]/20 shrink-0">
              ✓ Integrações Ativas no Ecossistema
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ecosystemIntegrations.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#1e293b] border-slate-200 space-y-3 hover:border-[#3525cd] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-md">
                    {item.svg}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#3525cd]/20 text-[#818cf8] border border-[#3525cd]/30 uppercase">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-black dark:text-white text-slate-900 group-hover:text-[#818cf8] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#10b981] font-semibold">
                    {item.role}
                  </p>
                </div>

                <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Agency Logos Block */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#4f46e5]">
              A PLATAFORMA DE ONBOARDING & TRAVA DE ESCOPO LÍDER NO BRASIL
            </p>
            <p className="text-sm dark:text-slate-300 text-slate-600">
              Estúdios de software, agências e prestadores protegendo milhões em entregas diárias com o Velloxis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-85">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 hover:border-[#3525cd] transition-all flex items-center justify-center text-center group cursor-default shadow-sm"
              >
                <span className="text-xs font-black tracking-widest text-slate-400 dark:group-hover:text-white group-hover:text-slate-900 transition-colors font-mono">
                  {logo.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Security Seals */}
        <div className="pt-6 border-t dark:border-[#131126] border-[#c7c4d8]/35 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#10b981]" />
            <span className="dark:text-slate-300 text-slate-700 font-bold">Hash SHA-256 Criptográfico Imutável</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 shadow-sm">
            <Lock className="w-4 h-4 text-[#4f46e5]" />
            <span className="dark:text-slate-300 text-slate-700 font-bold">Device Locking (Navegador & Dispositivo)</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 shadow-sm">
            <Key className="w-4 h-4 text-[#f59e0b]" />
            <span className="dark:text-slate-300 text-slate-700 font-bold">Chave Mestre de Segurança Atômica</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 shadow-sm">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="dark:text-slate-300 text-slate-700 font-bold">Validade de Prova Eletrônica MP 2.200-2</span>
          </div>
        </div>

      </div>
    </section>
  );
};

