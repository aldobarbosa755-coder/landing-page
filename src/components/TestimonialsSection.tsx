import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Key,
  FileCheck2,
  Cpu,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText
} from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenTrial: (plan?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenTrial }) => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const useCases = [
    {
      id: 1,
      badge: 'Escopo & Aditivos',
      icon: Lock,
      title: 'Ajustes "Extras" no Meio do Projeto',
      problem: 'Pedidos de mudanças no chat sem orçamento adicional.',
      solution: 'Escopo congelado após aceite. Aditivos exigem Chave Mestre de Segurança.',
      metric: '100% Bloqueio sem Chave'
    },
    {
      id: 2,
      badge: 'Proteção Jurídica',
      icon: FileCheck2,
      title: 'Contestações ou "Não Sabia"',
      problem: 'Cliente nega o briefing original ou solicita chargeback.',
      solution: 'Trilha de auditoria SHA-256 com IP, data UTC e prova em PDF.',
      metric: 'Auditoria Imutável'
    },
    {
      id: 3,
      badge: 'Segurança de Acesso',
      icon: Key,
      title: 'Vazamento de Links e Protótipos',
      problem: 'Links de homologação repassados a terceiros não autorizados.',
      solution: 'Fingerprint Device-Locking vinculando a sessão ao navegador do cliente.',
      metric: 'Device Lock Ativo'
    },
    {
      id: 4,
      badge: 'Inteligência Contratual',
      icon: Cpu,
      title: 'Cláusulas Abusivas em Contratos',
      problem: 'Contratos extensos com armadilhas de prazos e retenção de código.',
      solution: 'Auditoria por IA (Gemini) apontando riscos e ambiguidades em segundos.',
      metric: 'Análise em < 5 Segundos'
    }
  ];

  return (
    <section className="py-16 dark:bg-[#080c14] bg-[#f7f8fc] relative border-t dark:border-[#131126] border-[#c7c4d8]/35" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] border border-[#4f46e5]/30 text-[10px] font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Casos de Uso Práticos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black dark:text-white text-slate-950 tracking-tight">
            O Que o Velloxis Resolve Na Prática
          </h2>
          <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
            4 riscos operacionais e financeiros eliminados diretamente na arquitetura da plataforma.
          </p>
        </div>

        {/* Product Technical Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl dark:bg-[#0d1326] bg-white border dark:border-[#1e293b] border-slate-200 shadow-md">
          <div className="text-center space-y-0.5 border-r dark:border-[#1e293b] border-slate-200 last:border-0 p-1.5">
            <div className="text-xl sm:text-2xl font-black text-[#10b981]">100%</div>
            <p className="text-[11px] font-mono dark:text-slate-300 text-slate-600 font-bold">Bloqueio sem Chave</p>
          </div>
          <div className="text-center space-y-0.5 border-r dark:border-[#1e293b] border-slate-200 last:border-0 p-1.5">
            <div className="text-xl sm:text-2xl font-black text-[#818cf8]">SHA-256</div>
            <p className="text-[11px] font-mono dark:text-slate-300 text-slate-600 font-bold">Trilha Criptográfica</p>
          </div>
          <div className="text-center space-y-0.5 border-r dark:border-[#1e293b] border-slate-200 last:border-0 p-1.5">
            <div className="text-xl sm:text-2xl font-black text-[#38bdf8]">Device-Lock</div>
            <p className="text-[11px] font-mono dark:text-slate-300 text-slate-600 font-bold">Fingerprint Browser</p>
          </div>
          <div className="text-center space-y-0.5 p-1.5">
            <div className="text-xl sm:text-2xl font-black text-[#f59e0b]">Zero</div>
            <p className="text-[11px] font-mono dark:text-slate-300 text-slate-600 font-bold">Alterações sem Registro</p>
          </div>
        </div>

        {/* Practical Use Cases Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;

            return (
              <div
                key={useCase.id}
                className="rounded-2xl p-5 space-y-3 dark:bg-[#0d1322] bg-white border dark:border-[#1e293b] border-slate-200 hover:border-[#4f46e5]/50 transition-all shadow-sm relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#4f46e5]/10 text-[#818cf8] border border-[#4f46e5]/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                    {useCase.badge}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full border border-[#10b981]/20">
                    {useCase.metric}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#3525cd]/20 text-[#4f46e5] flex items-center justify-center shrink-0 border border-[#3525cd]/30">
                    <Icon className="w-4.5 h-4.5 text-[#818cf8]" />
                  </div>
                  <h3 className="text-sm font-black dark:text-white text-slate-900 leading-snug">
                    {useCase.title}
                  </h3>
                </div>

                {/* Problem vs Solution Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl dark:bg-[#1a1325]/50 bg-rose-50/80 border border-rose-500/15 space-y-1">
                    <span className="text-rose-500 font-bold text-[10px] uppercase font-mono flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Problema:
                    </span>
                    <p className="dark:text-slate-300 text-slate-700 leading-snug text-[11px]">
                      {useCase.problem}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl dark:bg-[#0c1f17]/50 bg-emerald-50/80 border border-emerald-500/15 space-y-1">
                    <span className="text-emerald-500 font-bold text-[10px] uppercase font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Solução Velloxis:
                    </span>
                    <p className="dark:text-slate-300 text-slate-700 leading-snug text-[11px]">
                      {useCase.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside Use Cases */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#3525cd] via-[#4f46e5] to-[#2517a8] text-white border border-[#4f46e5]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-black">Pronto Para Eliminar o Scope Creep?</h3>
            <p className="text-xs text-indigo-100">Proteja seus entregáveis e briefing com o plano Start gratuito do Velloxis.</p>
          </div>
          <button
            onClick={() => onOpenTrial('starter')}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 text-xs font-black transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4 text-[#10b981]" />
            <span>Criar Conta Grátis Agora</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
