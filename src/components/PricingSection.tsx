import React from 'react';
import { pricingPlans } from '../data/pricingData';
import { Check, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: (planId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-24 dark:bg-[#080c14] bg-[#f7f8fc] relative border-t dark:border-[#131126] border-[#c7c4d8]/35" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-[10px] font-mono font-bold uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Velloxis Official Pricing & Plans</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black dark:text-white text-slate-950 tracking-tight">
            Transparent Plans To Protect Your Projects
          </h2>
          <p className="text-base dark:text-slate-300 text-slate-700">
            Choose the right plan for your agency scale. Start for free and scale as your client volume grows.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const priceText = plan.priceDisplayMonthly || `$${plan.monthlyPrice}.00`;
            const isPro = plan.id === 'pro';

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
                  isPro
                    ? 'dark:bg-[#0d1326] bg-white border-2 border-[#4f46e5] shadow-2xl shadow-[#3525cd]/25 scale-[1.02] z-10'
                    : 'dark:bg-[#0d1322] bg-white border dark:border-[#1e293b] border-slate-200 shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isPro && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#3525cd] text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-md flex items-center gap-1">
                    <span>MOST POPULAR 🔥</span>
                  </div>
                )}

                {plan.id === 'enterprise' && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-[10px] font-mono font-bold tracking-widest uppercase shadow-md flex items-center gap-1">
                    <span>BEST VALUE 💎</span>
                  </div>
                )}

                {/* Header */}
                <div className="space-y-4">
                  <div>
                    {plan.eyebrow && (
                      <span className={`text-[11px] font-mono font-extrabold uppercase tracking-widest block mb-1 ${
                        plan.id === 'enterprise' ? 'text-[#f59e0b]' : isPro ? 'text-[#818cf8]' : 'text-slate-400'
                      }`}>
                        {plan.eyebrow}
                      </span>
                    )}
                    <h3 className="text-2xl font-black dark:text-white text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 min-h-[32px] leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black dark:text-white text-slate-950 font-sans tracking-tight">
                        {priceText}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {plan.periodText || '/month'}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-4 border-t dark:border-[#1e293b] border-slate-200 space-y-3">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#10b981] font-bold" />
                        <span className={feat.highlighted ? 'dark:text-white text-slate-900 font-bold' : 'dark:text-slate-300 text-slate-700 font-medium'}>
                          {feat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onOpenTrial(plan.id)}
                    className={`w-full py-3.5 px-5 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                      isPro
                        ? 'bg-[#4f46e5] hover:bg-[#4338ca] text-white shadow-indigo-500/30'
                        : 'dark:bg-[#1e293b] bg-slate-200 hover:bg-slate-300 dark:hover:bg-[#334155] dark:text-slate-100 text-slate-900 border dark:border-[#334155] border-slate-300'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-3xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-[#10b981]/15 text-[#10b981] flex items-center justify-center shrink-0 border border-[#10b981]/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-black dark:text-white text-slate-900">Security & Commercial Guarantee</h4>
            <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed">
              All plans include SHA-256 cryptographic scope protection and digital signature verification. Upgrade, downgrade, or cancel anytime directly from your agency dashboard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
