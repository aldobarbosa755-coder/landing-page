import React, { useState } from 'react';
import { Calculator, Clock, Sparkles, ArrowRight, ShieldCheck, Lock, DollarSign } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenTrial: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenTrial }) => {
  const [projectsPerMonth, setProjectsPerMonth] = useState<number>(4);
  const [averageProjectValue, setAverageProjectValue] = useState<number>(6000);
  const [unpaidAdjustmentHours, setUnpaidAdjustmentHours] = useState<number>(24);

  // Calculations
  const hourlyRate = Math.round(averageProjectValue / 40); // ~40h per project
  const wastedMoneyInScopeCreep = unpaidAdjustmentHours * hourlyRate;
  const annualLoss = wastedMoneyInScopeCreep * 12;

  // Potential aditiional revenue with Master Keys & Scope Lockdown (conservative 25% ad-on billing)
  const additionalAditionsBillable = Math.round(wastedMoneyInScopeCreep * 0.85);
  const totalSavedAndBilledMonthly = wastedMoneyInScopeCreep + additionalAditionsBillable;
  const totalSavedAndBilledAnnual = totalSavedAndBilledMonthly * 12;

  const proPlanCost = 197; // Annualized monthly plan
  const roiMultiplier = Math.max(Math.round(totalSavedAndBilledMonthly / proPlanCost), 1);

  return (
    <section className="py-20 dark:bg-[#080c14] bg-[#f7f8fc] relative border-t dark:border-[#131126] border-[#c7c4d8]/35" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 text-[10px] font-mono font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora de Economia contra Scope Creep</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black dark:text-white text-slate-950 tracking-tight">
            Quanto Dinheiro Sua Agência ou Freelance Perde em Alterações Gratuitas?
          </h2>
          <p className="text-base dark:text-slate-300 text-slate-700">
            Ajuste os controles abaixo e veja o impacto financeiro direto da Trava de Escopo (Scope Lockdown) do Velloxis na sua operação:
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl backdrop-blur-xl">
          
          {/* Left Inputs Controls */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-lg font-black dark:text-white text-slate-900 border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#f59e0b]" />
              <span>1. Insira os dados da sua operação atual</span>
            </h3>

            {/* Slider 1: Projects Per Month */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold dark:text-slate-200 text-slate-800">
                  Projetos Entregues por Mês:
                </label>
                <span className="text-sm font-mono font-extrabold text-[#4f46e5] dark:bg-[#080c14] bg-slate-100 px-3 py-1 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35">
                  {projectsPerMonth} projetos/mês
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={projectsPerMonth}
                onChange={(e) => setProjectsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#3525cd]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>1 projeto</span>
                <span>12 projetos</span>
                <span>25+ projetos</span>
              </div>
            </div>

            {/* Slider 2: Average Project Value */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold dark:text-slate-200 text-slate-800">
                  Valor Médio por Projeto (R$):
                </label>
                <span className="text-sm font-mono font-extrabold text-[#10b981] dark:bg-[#080c14] bg-slate-100 px-3 py-1 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35">
                  R$ {averageProjectValue.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={averageProjectValue}
                onChange={(e) => setAverageProjectValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>R$ 1.000</span>
                <span>R$ 15.000</span>
                <span>R$ 30.000+</span>
              </div>
            </div>

            {/* Slider 3: Unpaid Adjustment Hours */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold dark:text-slate-200 text-slate-800">
                  Horas Gastas com Refeitos/Alterações Não Pagas/Mês:
                </label>
                <span className="text-sm font-mono font-extrabold text-[#f59e0b] dark:bg-[#080c14] bg-slate-100 px-3 py-1 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35">
                  {unpaidAdjustmentHours}h de retrabalho
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="100"
                step="2"
                value={unpaidAdjustmentHours}
                onChange={(e) => setUnpaidAdjustmentHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>4h / mês</span>
                <span>50h / mês</span>
                <span>100h / mês</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <span className="text-slate-500 font-medium">Custo Estimado da Sua Hora Técnica:</span>
              <p className="font-extrabold dark:text-white text-slate-900">
                R$ {hourlyRate}/hora • Prejuízo Anual Estimado em Retrabalho: <span className="text-rose-500 font-black">R$ {annualLoss.toLocaleString('pt-BR')}</span>
              </p>
            </div>
          </div>

          {/* Right Results Display */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl dark:bg-[#080c14] bg-slate-900 border dark:border-[#131126] border-[#3525cd]/30 p-6 sm:p-8 space-y-6 shadow-xl text-white">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#818cf8] flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#10b981]" />
                  2. Seu Ganho Direto com Velloxis
                </span>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 uppercase tracking-widest">
                  Scope Lockdown Active
                </span>
              </div>

              {/* Extra Monthly Savings */}
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-medium">Recuperação Financeira + Aditivos Faturados / Mês:</span>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-300 to-[#818cf8]">
                  +R$ {totalSavedAndBilledMonthly.toLocaleString('pt-BR')} /mês
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-left">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Proteção Anual Total:</span>
                  <div className="text-lg font-black text-white mt-1">
                    +R$ {totalSavedAndBilledAnnual.toLocaleString('pt-BR')}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-left">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Horas Livres Recuperadas:</span>
                  <div className="text-lg font-black text-[#818cf8] mt-1 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{unpaidAdjustmentHours}h livres /mês</span>
                  </div>
                </div>
              </div>

              {/* ROI Badge */}
              <div className="p-4 rounded-2xl bg-[#3525cd]/20 border border-[#3525cd]/40 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">Retorno do Investimento em Relação ao Plano Pro:</span>
                <span className="text-xs font-mono font-black text-[#f59e0b] bg-[#f59e0b]/15 px-3 py-1 rounded-xl border border-[#f59e0b]/30">
                  🚀 {roiMultiplier}x mais economia que a mensalidade!
                </span>
              </div>
            </div>

            {/* Direct Conversion Action */}
            <div className="space-y-3 pt-4">
              <button
                onClick={onOpenTrial}
                className="cta-primary-btn cta-shimmer w-full py-4 text-sm sm:text-base font-extrabold shadow-2xl shadow-[#3525cd]/40"
              >
                <span>Proteger Meus Projetos com Velloxis</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Zero risco • Plano Start 100% Gratuito • Sem cartão de crédito</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
