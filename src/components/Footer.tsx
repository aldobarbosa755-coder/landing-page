import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { VelloxisLogo } from './VelloxisLogo';

interface FooterProps {
  onOpenChangelog?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChangelog }) => {
  return (
    <footer className="dark:bg-[#080c14] bg-[#0f172a] border-t dark:border-[#131126] border-slate-800 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <VelloxisLogo size={36} />
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Plataforma SaaS de Onboarding de Clientes, Trava de Escopo (Scope Lockdown) e Proteção Jurídica desenvolvida para freelancers, agências e estúdios digitais.
            </p>

            {/* System Status & Version Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080c14] border border-[#131126] text-[10px] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-slate-300 font-bold uppercase tracking-wider">Trilha SHA-256 Ativa • 99.99% Uptime</span>
              </div>

              {onOpenChangelog && (
                <button
                  onClick={onOpenChangelog}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3525cd]/20 hover:bg-[#3525cd]/30 text-[#818cf8] border border-[#3525cd]/40 text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm hover:scale-105"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Changelog v2.5.0 LATEST ⚡</span>
                </button>
              )}
            </div>
          </div>

          {/* Col 2: Produto */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-white uppercase text-[10px] tracking-widest">Módulos</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Whitelabel Dashboard</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">FormSteps Onboarding</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Client Tracking & Scope Lock</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Trilha de Auditoria SHA-256</a></li>
              {onOpenChangelog && (
                <li>
                  <button
                    onClick={onOpenChangelog}
                    className="text-[#818cf8] hover:text-white transition-colors font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>⚡ Changelog v2.5.0</span>
                  </button>
                </li>
              )}
              <li><a href="#pricing" className="hover:text-white transition-colors">Planos & Licenças</a></li>
            </ul>
          </div>

          {/* Col 3: Soluções */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-white uppercase text-[10px] tracking-widest">Para Quem É</h4>
            <ul className="space-y-2">
              <li><a href="#testimonials" className="hover:text-white transition-colors">Freelancers Digitais</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Agências de Software & UX</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Estúdios de Design & Branding</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Consultores de Tecnologia</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Software Scale Enterprise</a></li>
            </ul>
          </div>

          {/* Col 4: Suporte & Legal */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-white uppercase text-[10px] tracking-widest">Jurídico & Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-white transition-colors">Central de Ajuda & FAQ</a></li>
              {onOpenChangelog && (
                <li>
                  <button
                    onClick={onOpenChangelog}
                    className="hover:text-white transition-colors text-slate-400 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Notas de Lançamento (v2.5.0)</span>
                  </button>
                </li>
              )}
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso de Prova Eletrônica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade & LGPD</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Validade MP 2.200-2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Criptografia SHA-256</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} Velloxis Tecnologia e Proteção Contratual LTDA. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            {onOpenChangelog && (
              <button
                onClick={onOpenChangelog}
                className="text-[#818cf8] hover:underline font-bold cursor-pointer"
              >
                Changelog v2.5.0
              </button>
            )}
            <div className="flex items-center gap-1.5">
              <span>Desenvolvido para eliminar o Scope Creep</span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#10b981] inline" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

