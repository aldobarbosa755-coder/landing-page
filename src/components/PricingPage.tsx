import React, { useState, useEffect } from 'react';
import { pricingPlans, faqList } from '../data/pricingData';
import { Header } from './Header';
import { Footer } from './Footer';
import { LegalModal } from './LegalModal';
import { Check, ShieldCheck, ArrowRight, Lock, HelpCircle, FileText, CreditCard, ChevronDown, Sparkles, Building2, Mail, ExternalLink, Code2 } from 'lucide-react';

interface PricingPageProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
  onOpenChangelog?: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigateHome, onNavigate, onOpenChangelog }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'all' | 'privacy' | 'terms' | 'refund'>('all');
  const [paddleLoaded, setPaddleLoaded] = useState(false);

  useEffect(() => {
    // Check or load Paddle v2 script
    if (typeof window !== 'undefined') {
      const checkPaddle = () => {
        if ((window as any).Paddle) {
          setPaddleLoaded(true);
          try {
            if (!(window as any).__paddle_initialized) {
              const metaEnv = (import.meta as any).env || {};
              const clientToken = metaEnv.VITE_PADDLE_CLIENT_TOKEN || 'live_195af09cd4dcad3eb49692c55e2';
              const isLive = clientToken.startsWith('live_');
              const paddleEnv = metaEnv.VITE_PADDLE_ENV || (isLive ? 'production' : 'sandbox');

              if ((window as any).Paddle.Environment) {
                (window as any).Paddle.Environment.set(paddleEnv);
              }
              if ((window as any).Paddle.Initialize) {
                (window as any).Paddle.Initialize({
                  token: clientToken,
                  eventCallback: (event: any) => {
                    console.log('Paddle Event:', event);
                  },
                });
                (window as any).__paddle_initialized = true;
              }
            }
          } catch (e) {
            console.log('Paddle initialized');
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

  const openLegal = (tab: 'all' | 'privacy' | 'terms' | 'refund') => {
    if (onNavigate) {
      if (tab === 'terms') onNavigate('/terms');
      else if (tab === 'privacy') onNavigate('/privacy');
      else if (tab === 'refund') onNavigate('/refunds');
      else onNavigate('/terms');
    } else {
      setLegalTab(tab);
      setIsLegalModalOpen(true);
    }
  };

  const handleSubscribe = (planId?: string) => {
    if (!planId || planId === 'starter') {
      window.open('https://app.aldolima.dev.br', '_blank', 'noopener,noreferrer');
      return;
    }

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
          settings: {
            displayMode: 'overlay',
            theme: 'dark',
            locale: 'en',
          },
          items: [
            {
              priceId,
              quantity: 1,
            },
          ],
          customData: {
            source: 'pricing_page',
            planId,
            billingCycle,
          },
        });
        return;
      } catch (err) {
        console.log('Paddle Checkout fallback triggered', err);
      }
    }
    window.open('https://app.aldolima.dev.br', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen dark:bg-[#080c14] bg-[#f7f8fc] text-slate-100 font-sans selection:bg-[#3525cd] selection:text-white antialiased">
      {/* Header */}
      <Header onOpenTrial={handleSubscribe} onNavigate={onNavigate || onNavigateHome} />

      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Breadcrumb / Go Back Home */}
          <div className="flex items-center justify-between">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold dark:text-slate-400 text-slate-600 hover:text-[#4f46e5] dark:hover:text-white transition-colors cursor-pointer"
            >
              ← Back to Main Page
            </button>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Paddle Merchant of Record Compliant</span>
            </div>
          </div>

          {/* Page Hero Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-[10px] font-mono font-bold uppercase tracking-widest">
                <Lock className="w-3.5 h-3.5 text-[#10b981]" />
                <span>100% Transparent SaaS Billing</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full dark:bg-[#0f172a] bg-slate-200 text-slate-800 dark:text-slate-200 border dark:border-[#1e293b] border-slate-300 text-[10px] font-mono font-bold">
                <span className={`w-2 h-2 rounded-full ${paddleLoaded ? 'bg-[#10b981] animate-pulse' : 'bg-amber-400'}`} />
                <CreditCard className="w-3 h-3 text-[#818cf8]" />
                <span>Paddle.js v2 SDK {paddleLoaded ? 'Active' : 'Loaded'}</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black dark:text-white text-slate-950 tracking-tight leading-tight">
              Simple Plans To Protect Your Agency & Deliverables
            </h1>
            <p className="text-base sm:text-lg dark:text-slate-300 text-slate-700 leading-relaxed">
              No hidden fees, no per-client penalties. Start free and scale your scope protection as your project volume grows.
            </p>

            {/* Paddle.js Embed Code Badge */}
            <div className="pt-1 flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 p-2 px-4 rounded-xl dark:bg-[#0d1322] bg-slate-100 border dark:border-[#1e293b] border-slate-300 text-[11px] font-mono text-slate-400">
                <Code2 className="w-3.5 h-3.5 text-[#818cf8]" />
                <span className="text-slate-400">Paddle Script:</span>
                <code className="text-[#818cf8] font-bold">&lt;script src="https://cdn.paddle.com/paddle/v2/paddle.js"&gt;&lt;/script&gt;</code>
              </div>

              {/* Paddle Domain Authorization Status */}
              {typeof window !== 'undefined' && window.location.hostname.includes('velloxis.aldolima.dev.br') ? (
                <div className="max-w-xl text-xs dark:bg-[#062c1d]/90 bg-emerald-500/10 border border-emerald-500/30 p-3.5 rounded-2xl text-emerald-600 dark:text-emerald-300 text-left space-y-1 font-sans">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-700 dark:text-emerald-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Domínio Autorizado no Paddle: velloxis.aldolima.dev.br</span>
                  </div>
                  <p className="text-[11px] leading-relaxed opacity-90">
                    O checkout do Paddle está ativo em ambiente de produção com Token Live <code className="font-mono text-[#818cf8]">live_195af0...</code> e os Price IDs configurados.
                  </p>
                </div>
              ) : (
                <div className="max-w-xl text-xs dark:bg-[#0f172a]/80 bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-2xl text-amber-600 dark:text-amber-300 text-left space-y-1 font-sans">
                  <div className="font-bold flex items-center gap-1.5 text-amber-700 dark:text-amber-200">
                    <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Paddle Ativo no Domínio de Produção: velloxis.aldolima.dev.br</span>
                  </div>
                  <p className="text-[11px] leading-relaxed opacity-90">
                    Seu domínio principal <strong>velloxis.aldolima.dev.br</strong> está Aprovado no Paddle! Para abrir o checkout aqui na visualização de preview, adicione também <strong>{typeof window !== 'undefined' ? window.location.hostname : 'preview-url'}</strong> no Paddle em <em>Developer Tools &rarr; Checkout Settings &rarr; Allowed Domains</em>.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Legal Switcher Tabs */}
            <div className="pt-2 flex items-center justify-center gap-2 overflow-x-auto pb-2 font-mono text-xs">
              <button
                onClick={() => onNavigate ? onNavigate('/terms') : openLegal('terms')}
                className="px-4 py-2 rounded-xl dark:bg-[#0f172a] bg-slate-200 dark:text-slate-300 text-slate-700 hover:text-white dark:border-[#1e293b] border-slate-300 font-bold shrink-0 cursor-pointer transition-colors"
              >
                1. Terms of Service
              </button>
              <button
                onClick={() => onNavigate ? onNavigate('/privacy') : openLegal('privacy')}
                className="px-4 py-2 rounded-xl dark:bg-[#0f172a] bg-slate-200 dark:text-slate-300 text-slate-700 hover:text-white dark:border-[#1e293b] border-slate-300 font-bold shrink-0 cursor-pointer transition-colors"
              >
                2. Privacy Policy
              </button>
              <button
                onClick={() => onNavigate ? onNavigate('/refunds') : openLegal('refund')}
                className="px-4 py-2 rounded-xl dark:bg-[#0f172a] bg-slate-200 dark:text-slate-300 text-slate-700 hover:text-white dark:border-[#1e293b] border-slate-300 font-bold shrink-0 cursor-pointer transition-colors"
              >
                3. Refund Policy
              </button>
              <button
                onClick={() => onNavigate ? onNavigate('/pricing') : undefined}
                className="px-4 py-2 rounded-xl bg-[#3525cd] text-white font-bold shadow-lg shadow-[#3525cd]/30 shrink-0 cursor-pointer"
              >
                Plans & Pricing
              </button>
            </div>

            {/* Monthly / Annual Billing Switcher */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <div className="inline-flex items-center p-1 rounded-2xl dark:bg-[#0d1322] bg-white border dark:border-[#1e293b] border-slate-200 shadow-sm">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    billingCycle === 'monthly'
                      ? 'bg-[#3525cd] text-white shadow-md'
                      : 'dark:text-slate-400 text-slate-600 hover:text-white'
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                    billingCycle === 'annual'
                      ? 'bg-[#3525cd] text-white shadow-md'
                      : 'dark:text-slate-400 text-slate-600 hover:text-white'
                  }`}
                >
                  <span>Annual Billing</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#10b981]/20 text-[#10b981] text-[10px] font-mono font-bold">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => {
              const displayPrice = billingCycle === 'annual'
                ? (plan.annualPrice > 0 ? `$${(plan.annualPrice * 0.8).toFixed(2)}` : '$0.00')
                : (plan.priceDisplayMonthly || `$${plan.monthlyPrice}.00`);

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

                    <div className="pt-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-black dark:text-white text-slate-950 font-sans tracking-tight">
                          {displayPrice}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {plan.periodText || '/month'}
                        </span>
                      </div>
                      {billingCycle === 'annual' && plan.monthlyPrice > 0 && (
                        <p className="text-[10px] text-[#10b981] font-mono font-bold mt-1">
                          Billed annually (${(plan.annualPrice * 0.8 * 12).toFixed(2)}/year)
                        </p>
                      )}
                    </div>

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

                  <div className="pt-4">
                    <button
                      onClick={() => handleSubscribe(plan.id)}
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

          {/* Feature Comparison Matrix */}
          <div className="space-y-6 pt-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-950 tracking-tight">
                Full Plan Feature Breakdown
              </h2>
              <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600">
                Compare capabilities side-by-side to choose the best scope protection for your team.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border dark:border-[#1e293b] border-slate-200 dark:bg-[#0d1322] bg-white shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b dark:border-[#1e293b] border-slate-200 dark:bg-[#080c14] bg-slate-100 text-slate-400 font-mono text-[11px] uppercase">
                    <th className="p-4 sm:p-5 font-bold">Feature / Capability</th>
                    <th className="p-4 sm:p-5 font-bold text-center">Starter ($0)</th>
                    <th className="p-4 sm:p-5 font-bold text-center text-[#818cf8]">Freelancer Core ($29/mo)</th>
                    <th className="p-4 sm:p-5 font-bold text-center text-[#f59e0b]">Compliance Suite ($79/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-[#1e293b] divide-slate-200 text-slate-300">
                  <tr>
                    <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">Active Projects Limit</td>
                    <td className="p-4 sm:p-5 text-center text-slate-400">1 Project</td>
                    <td className="p-4 sm:p-5 text-center font-bold text-[#10b981]">Unlimited</td>
                    <td className="p-4 sm:p-5 text-center font-bold text-[#10b981]">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">Scope Lockdown & Briefing Sign-off</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">SHA-256 Cryptographic Audit Trail</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">Atomic Master Security Key System</td>
                    <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">Custom Brand Whitelabeling (Logo & Colors)</td>
                    <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-[#10b981] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">AI Contract Risk Audits (Gemini Engine)</td>
                    <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                    <td className="p-4 sm:p-5 text-center font-mono font-bold text-slate-200">3 / month</td>
                    <td className="p-4 sm:p-5 text-center font-bold text-[#10b981]">UNLIMITED</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">Support SLA</td>
                    <td className="p-4 sm:p-5 text-center text-slate-400">Community</td>
                    <td className="p-4 sm:p-5 text-center font-mono text-slate-200">Priority 24h Email</td>
                    <td className="p-4 sm:p-5 text-center font-bold text-[#10b981]">Dedicated VIP Channel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Paddle Merchant of Record & Legal Compliance Statement */}
          <div className="p-8 rounded-3xl dark:bg-[#0d1322] bg-white border dark:border-[#131126] border-slate-200 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b dark:border-[#1e293b] border-slate-200 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3525cd]/15 text-[#818cf8] border border-[#3525cd]/30 text-xs font-mono font-bold uppercase">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Merchant of Record Disclosure</span>
                </div>
                <h3 className="text-xl font-extrabold dark:text-white text-slate-900">
                  Payments & Order Processing via Paddle.com
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-mono font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>14-Day 100% Refund Policy</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
              <div className="space-y-3">
                <h4 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#818cf8]" />
                  Authorized Reseller & Billing Support
                </h4>
                <p>
                  Our order process is conducted by our online reseller <strong>Paddle.com Market Limited ("Paddle")</strong>. Paddle is the Merchant of Record for all our orders. Paddle handles customer service inquiries, taxes, and return processing.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={() => openLegal('refund')}
                    className="px-3 py-1.5 rounded-xl bg-[#3525cd]/20 hover:bg-[#3525cd]/30 text-[#818cf8] border border-[#3525cd]/40 text-xs font-mono font-bold transition-all cursor-pointer"
                  >
                    View 14-Day Refund Policy →
                  </button>
                  <button
                    onClick={() => openLegal('privacy')}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-bold transition-all cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => openLegal('terms')}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-bold transition-all cursor-pointer"
                  >
                    Terms of Service
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#10b981]" />
                  Direct Merchant Contact Details
                </h4>
                <div className="p-4 rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#1e293b] border-slate-200 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Merchant Entity:</span>
                    <span className="font-bold text-white">Velloxis SaaS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Support Email:</span>
                    <a href="mailto:aldobarbosa755@gmail.com" className="font-bold text-[#818cf8] underline">
                      aldobarbosa755@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Billing Portal:</span>
                    <a href="https://app.aldolima.dev.br" target="_blank" rel="noopener noreferrer" className="font-bold text-[#10b981] underline">
                      app.aldolima.dev.br
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Paddle Buyer Help:</span>
                    <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="font-bold text-[#818cf8] underline inline-flex items-center gap-1">
                      paddle.net <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="space-y-6 pt-4" id="faq">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3525cd]/10 text-[#4f46e5] text-xs font-mono font-bold uppercase">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Billing & Legal Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-950">
                Frequently Asked Billing Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-3">
              {faqList.map((item) => {
                const isOpen = openFaqId === item.id;
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl dark:bg-[#0d1322] bg-white border dark:border-[#1e293b] border-slate-200 overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors cursor-pointer"
                    >
                      <span className="text-sm font-bold dark:text-white text-slate-900">
                        {item.question}
                      </span>
                      <div className={`p-1.5 rounded-xl transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#3525cd] text-white' : 'dark:bg-[#080c14] bg-slate-100 text-slate-500'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed border-t dark:border-[#1e293b] border-slate-200">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer onOpenChangelog={onOpenChangelog} onOpenLegal={openLegal} />

      {/* Legal Policy Modal */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        defaultTab={legalTab}
      />
    </div>
  );
};
