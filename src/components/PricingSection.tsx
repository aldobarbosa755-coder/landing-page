import React, { useEffect, useState } from 'react';
import { pricingPlans } from '../data/pricingData';
import { Check, ShieldCheck, ArrowRight, Lock, CreditCard } from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: (planId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  const [paddleLoaded, setPaddleLoaded] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  useEffect(() => {
    // Check if Paddle v2 script is available or inject dynamically
    if (typeof window !== 'undefined') {
      const checkPaddle = () => {
        if ((window as any).Paddle) {
          setPaddleLoaded(true);
          try {
            const metaEnv = (import.meta as any).env || {};
            const clientToken = metaEnv.VITE_PADDLE_CLIENT_TOKEN || 'live_195af09cd4dcad3eb49692c55e2';
            const isLiveToken = clientToken.startsWith('live_');

            // Force Paddle SDK Environment: production for live_ tokens, sandbox for test_ tokens
            if ((window as any).Paddle.Environment) {
              if (isLiveToken || metaEnv.VITE_PADDLE_ENV === 'production') {
                (window as any).Paddle.Environment.set('production');
              } else {
                (window as any).Paddle.Environment.set('sandbox');
              }
            }

            if ((window as any).Paddle.Initialize && !(window as any).__paddle_initialized) {
              (window as any).Paddle.Initialize({
                token: clientToken,
                eventCallback: (data: any) => {
                  console.log('Paddle Event:', data);
                  if (data?.name === 'checkout.error') {
                    console.error('Paddle Checkout Error Details:', data);
                  }
                },
              });
              (window as any).__paddle_initialized = true;
            }
          } catch (e) {
            console.error('Paddle init error:', e);
          }
        }
      };

      if ((window as any).Paddle) {
        checkPaddle();
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
        script.async = true;
        script.onload = checkPaddle;
        document.head.appendChild(script);
      }
    }
  }, []);

  const handleSubscribePlan = (planId: string) => {
    if (planId === 'starter') {
      onOpenTrial('starter');
      return;
    }

    // If Paddle checkout is initialized, attempt opening Paddle checkout
    if (typeof window !== 'undefined' && (window as any).Paddle?.Checkout) {
      try {
        const metaEnv = (import.meta as any).env || {};
        
        let priceId = '';
        if (planId === 'pro') {
          priceId = billingCycle === 'annual'
            ? (metaEnv.VITE_PADDLE_PRICE_PRO_ANNUAL || 'pri_01kz4j1y54jybgmpt5ehgz7g2r')
            : (metaEnv.VITE_PADDLE_PRICE_PRO_MONTHLY || 'pri_01kz4hybt73v5q4mww0gyn5hbk');
        } else if (planId === 'enterprise') {
          priceId = billingCycle === 'annual'
            ? (metaEnv.VITE_PADDLE_PRICE_ENTERPRISE_ANNUAL || 'pri_01kz4j4351x35afwx2fxdv0ead')
            : (metaEnv.VITE_PADDLE_PRICE_ENTERPRISE_MONTHLY || 'pri_01kz4hzd18djqsg05gcaad2wj8');
        }

        (window as any).Paddle.Checkout.open({
          items: [
            {
              priceId,
              quantity: 1,
            },
          ],
        });
      } catch (err) {
        console.log('Paddle Checkout fallback triggered', err);
        onOpenTrial(planId);
      }
    } else {
      onOpenTrial(planId);
    }
  };

  return (
    <section className="py-24 dark:bg-[#080c14] bg-[#f7f8fc] relative border-t dark:border-[#131126] border-[#c7c4d8]/35" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-[10px] font-mono font-bold uppercase tracking-widest">
              <Lock className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Velloxis Official Pricing & Plans</span>
            </div>
            
            {/* Paddle.js Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full dark:bg-[#0f172a] bg-slate-200 text-slate-800 dark:text-slate-200 border dark:border-[#1e293b] border-slate-300 text-[10px] font-mono font-bold">
              <span className={`w-2 h-2 rounded-full ${paddleLoaded ? 'bg-[#10b981] animate-pulse' : 'bg-amber-400'}`} />
              <CreditCard className="w-3 h-3 text-[#818cf8]" />
              <span>Paddle.js v2 SDK {paddleLoaded ? 'Active' : 'Loaded'}</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black dark:text-white text-slate-950 tracking-tight">
            Transparent Plans To Protect Your Projects
          </h2>
          <p className="text-base dark:text-slate-300 text-slate-700">
            Choose the right plan for your agency scale. Start for free and scale as your client volume grows.
          </p>

          {/* Paddle.js Embed Script Notice & Billing Cycle Switcher */}
          <div className="pt-2 flex flex-col items-center gap-4">
            <div className="inline-flex items-center p-1 rounded-2xl dark:bg-[#0d1322] bg-white border dark:border-[#1e293b] border-slate-200 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[#3525cd] text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-[#3525cd] text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-2 py-0.5 rounded-full bg-[#10b981]/20 text-[#10b981] text-[9px] uppercase font-mono font-black">
                  Save ~20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const displayPrice = billingCycle === 'annual'
              ? (plan.priceDisplayAnnual || (plan.annualPrice > 0 ? `$${plan.annualPrice.toFixed(2)}` : '$0.00'))
              : (plan.priceDisplayMonthly || `$${plan.monthlyPrice.toFixed(2)}`);

            const periodLabel = plan.id === 'starter' ? '/forever' : '/month';
            const isPro = plan.id === 'pro';

            const subtextAnnual = (billingCycle === 'annual' && plan.id !== 'starter')
              ? (plan.id === 'pro' ? 'Billed annually as $278.40/yr' : 'Billed annually as $758.40/yr')
              : null;

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
                        {displayPrice}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {periodLabel}
                      </span>
                    </div>
                    {subtextAnnual && (
                      <p className="text-[10px] font-mono font-bold text-[#10b981] mt-1">
                        {subtextAnnual}
                      </p>
                    )}
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
                    onClick={() => handleSubscribePlan(plan.id)}
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
