import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CreditCard, ShieldCheck, CheckCircle2, Mail, ArrowLeft } from 'lucide-react';

interface RefundsPageProps {
  onNavigate: (path: string) => void;
  onOpenTrial: () => void;
  onOpenChangelog?: () => void;
}

export const RefundsPage: React.FC<RefundsPageProps> = ({ onNavigate, onOpenTrial, onOpenChangelog }) => {
  return (
    <div className="min-h-screen dark:bg-[#080c14] bg-[#f7f8fc] text-slate-100 font-sans selection:bg-[#3525cd] selection:text-white antialiased">
      {/* Header */}
      <Header onOpenTrial={onOpenTrial} onNavigate={onNavigate} />

      <main className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Breadcrumb Navigation & Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b dark:border-[#1e293b] border-slate-200 pb-6">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold dark:text-slate-400 text-slate-600 hover:text-[#4f46e5] dark:hover:text-white transition-colors cursor-pointer w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Page</span>
            </button>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>14-Day 100% Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Hero Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-xs font-mono font-bold uppercase tracking-widest">
              <CreditCard className="w-3.5 h-3.5 text-[#10b981]" />
              <span>SaaS Refund & Cancellation Policy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black dark:text-white text-slate-950 tracking-tight leading-tight">
              Refund & Cancellation Policy
            </h1>
            <p className="text-base sm:text-lg dark:text-slate-300 text-slate-700 max-w-3xl leading-relaxed">
              Complete transparency regarding SaaS subscription refunds, billing cancellations, and 14-day guarantee rules.
            </p>
          </div>

          {/* Quick Legal Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 font-mono text-xs">
            <button
              onClick={() => onNavigate('/terms')}
              className="px-4 py-2 rounded-xl dark:bg-[#0f172a] bg-slate-200 dark:text-slate-300 text-slate-700 hover:text-white dark:border-[#1e293b] border-slate-300 font-bold shrink-0 cursor-pointer transition-colors"
            >
              1. Terms of Service
            </button>
            <button
              onClick={() => onNavigate('/privacy')}
              className="px-4 py-2 rounded-xl dark:bg-[#0f172a] bg-slate-200 dark:text-slate-300 text-slate-700 hover:text-white dark:border-[#1e293b] border-slate-300 font-bold shrink-0 cursor-pointer transition-colors"
            >
              2. Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('/refunds')}
              className="px-4 py-2 rounded-xl bg-[#3525cd] text-white font-bold shadow-lg shadow-[#3525cd]/30 shrink-0 cursor-pointer"
            >
              3. Refund Policy
            </button>
            <button
              onClick={() => onNavigate('/pricing')}
              className="px-4 py-2 rounded-xl dark:bg-[#0f172a] bg-slate-200 dark:text-slate-300 text-slate-700 hover:text-white dark:border-[#1e293b] border-slate-300 font-bold shrink-0 cursor-pointer transition-colors"
            >
              Plans & Pricing
            </button>
          </div>

          {/* Content Document Card */}
          <div className="p-6 sm:p-10 rounded-3xl dark:bg-[#0b101d] bg-white border dark:border-[#1e293b] border-slate-200 shadow-xl space-y-10 text-sm leading-relaxed dark:text-slate-300 text-slate-700">

            {/* Merchant Intro */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <span className="w-8 h-8 rounded-xl bg-[#10b981]/20 text-[#10b981] flex items-center justify-center font-mono text-sm shrink-0">1</span>
                Subscription & Payment Infrastructure
              </h2>
              <p>
                All digital transactions and SaaS subscription payments for <strong>Velloxis</strong> are securely processed. We handle checkout security, tax compliance, invoicing, and instant refund processing.
              </p>
            </section>

            {/* Highlighted 14-Day Guarantee Box */}
            <section className="space-y-4">
              <div className="p-6 rounded-3xl dark:bg-[#091512] bg-emerald-50/80 border border-[#10b981]/40 space-y-4 shadow-lg">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-[#10b981] font-black font-mono text-sm tracking-wider">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>14-DAY 100% MONEY-BACK GUARANTEE</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30 font-mono text-xs font-bold uppercase">
                    No Risk • Instant Eligibility
                  </span>
                </div>

                <p className="text-sm dark:text-slate-200 text-slate-800 leading-relaxed">
                  If you are not completely satisfied with your SaaS subscription within the first <strong>14 calendar days</strong> of purchase, you are eligible for a <strong>full refund</strong>, no questions asked.
                </p>

                <ul className="space-y-3 pt-2 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#10b981] font-bold shrink-0">•</span>
                    <span>
                      <strong className="dark:text-white text-slate-900">Subscription Cancellation:</strong> You may cancel your SaaS subscription at any time via your account settings or email support.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#10b981] font-bold shrink-0">•</span>
                    <span>
                      <strong className="dark:text-white text-slate-900">Access Duration:</strong> Upon cancellation, your account remains active until the end of the current billing cycle with zero cancellation fees.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#10b981] font-bold shrink-0">•</span>
                    <span>
                      <strong className="dark:text-white text-slate-900">How to Request Refund:</strong> Email support directly at <a href="mailto:aldobarbosa755@gmail.com" className="text-[#818cf8] underline font-mono font-bold">aldobarbosa755@gmail.com</a>.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section className="space-y-4 border-t dark:border-[#1e293b] border-slate-200 pt-8">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <Mail className="w-5 h-5 text-[#818cf8]" />
                Direct Support & Refund Assistance
              </h2>
              <p>
                Our billing operations team is ready to process your cancellation or refund within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <a
                  href="mailto:aldobarbosa755@gmail.com"
                  className="px-5 py-3 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] text-white font-mono font-bold text-xs transition-all inline-flex items-center gap-2 shadow-lg shadow-[#3525cd]/30"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: aldobarbosa755@gmail.com</span>
                </a>
              </div>
            </section>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer onOpenChangelog={onOpenChangelog} onOpenLegal={(tab) => {
        if (tab === 'terms') onNavigate('/terms');
        else if (tab === 'privacy') onNavigate('/privacy');
        else if (tab === 'refund') onNavigate('/refunds');
        else onNavigate('/refunds');
      }} />
    </div>
  );
};
