import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Key } from 'lucide-react';

interface ConversionCtaBannerProps {
  onOpenTrial: (plan?: string) => void;
}

export const ConversionCtaBanner: React.FC<ConversionCtaBannerProps> = ({ onOpenTrial }) => {
  const [quickEmail, setQuickEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenTrial('pro');
  };

  return (
    <section className="py-20 dark:bg-[#080c14] bg-[#f7f8fc] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3525cd]/20 via-slate-950 to-[#10b981]/10 opacity-90 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3525cd]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#10b981]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#3525cd]/40 p-8 sm:p-14 shadow-2xl space-y-8 text-center max-w-4xl mx-auto backdrop-blur-xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-mono font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>BLINDAGEM JURÍDICA E DE ESCOPO IMEDIATA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black dark:text-white text-slate-950 tracking-tight leading-tight">
            Pronto Para Eliminar o Scope Creep dos Seus Projetos?
          </h2>

          <p className="text-base sm:text-lg dark:text-slate-300 text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Crie seu primeiro formulário de onboarding em 2 minutos, tranque o briefing com aprovação formal e exija Chaves Mestre para qualquer alteração.
          </p>

          {/* Quick Lead Capture Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <input
              type="email"
              required
              value={quickEmail}
              onChange={(e) => setQuickEmail(e.target.value)}
              placeholder="Digite seu melhor e-mail comercial..."
              className="w-full dark:bg-[#080c14] bg-slate-50 text-slate-900 dark:text-white text-sm px-5 py-4 rounded-2xl border dark:border-[#131126] border-[#c7c4d8]/35 focus:outline-none focus:border-[#3525cd] shadow-inner"
            />
            <button
              type="submit"
              className="cta-primary-btn cta-shimmer w-full sm:w-auto shrink-0 px-9 py-4 sm:py-4.5 text-sm sm:text-base font-extrabold shadow-2xl shadow-[#3525cd]/40 border border-[#4f46e5]/50"
            >
              <Key className="w-4.5 h-4.5 text-amber-300" />
              <span>Ativar Minha Conta Grátis</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </form>

          {/* Guarantees list */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs dark:text-slate-400 text-slate-600 font-medium pt-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>Setup em menos de 3 minutos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span>Garantia de satisfação de 30 dias</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
