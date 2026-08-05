import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FileText, ShieldCheck, Lock, CheckCircle2, Mail, ArrowLeft, Scale } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
  onOpenTrial: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate, onOpenTrial }) => {
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3525cd]/15 text-[#818cf8] border border-[#3525cd]/30 text-xs font-mono font-bold uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5" />
                <span>Legal Framework</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>PCI & Security Compliant</span>
              </div>
            </div>
          </div>

          {/* Hero Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-xs font-mono font-bold uppercase tracking-widest">
              <FileText className="w-3.5 h-3.5 text-[#818cf8]" />
              <span>Effective Date: August 2026</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black dark:text-white text-slate-950 tracking-tight leading-tight">
              Terms of Service (SaaS)
            </h1>
            <p className="text-base sm:text-lg dark:text-slate-300 text-slate-700 max-w-3xl leading-relaxed">
              Operating rules, scope lockdown guidelines, administrative responsibilities, and merchant agreements for freelancers, studios, and agencies using Velloxis.
            </p>
          </div>

          {/* Quick Legal Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 font-mono text-xs">
            <button
              onClick={() => onNavigate('/terms')}
              className="px-4 py-2 rounded-xl bg-[#3525cd] text-white font-bold shadow-lg shadow-[#3525cd]/30 shrink-0 cursor-pointer"
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
              className="px-4 py-2 rounded-xl dark:bg-[#0f172a] bg-slate-200 dark:text-slate-300 text-slate-700 hover:text-white dark:border-[#1e293b] border-slate-300 font-bold shrink-0 cursor-pointer transition-colors"
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

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <span className="w-8 h-8 rounded-xl bg-[#3525cd]/20 text-[#818cf8] flex items-center justify-center font-mono text-sm shrink-0">1</span>
                Acceptance & Platform Usage
              </h2>
              <p>
                By accessing, creating an account, or subscribing to the <strong>Velloxis</strong> platform, you agree to comply with and be bound by these Terms of Service. Velloxis provides client onboarding, digital briefing structure, SHA-256 audit trails, and scope lockdown capabilities for freelancers, digital studios, and agencies.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <span className="w-8 h-8 rounded-xl bg-[#3525cd]/20 text-[#818cf8] flex items-center justify-center font-mono text-sm shrink-0">2</span>
                Credential Security & Admin Responsibilities
              </h2>
              <p>
                As an administrator, you are responsible for maintaining the confidentiality of your workspace login credentials, API integrations, and client management tokens.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#818cf8] shrink-0 mt-0.5" />
                  <span>
                    <strong className="dark:text-white text-slate-900">Encrypted Infrastructure:</strong> Databases and communication channels employ robust server-side encryption and Row Level Security guidelines.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#818cf8] shrink-0 mt-0.5" />
                  <span>
                    <strong className="dark:text-white text-slate-900">Master Credentials:</strong> Maintaining strong passwords and restricting administrative access remains the sole responsibility of the workspace owner.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <span className="w-8 h-8 rounded-xl bg-[#3525cd]/20 text-[#818cf8] flex items-center justify-center font-mono text-sm shrink-0">3</span>
                Scope Lockdown & SHA-256 Certification
              </h2>
              <p>
                When a project brief or onboarding document is finalized and locked, Velloxis generates a cryptographic SHA-256 hash. This record certifies the exact scope items agreed upon by the agency and client at that point in time.
              </p>
              <div className="p-4 rounded-2xl dark:bg-[#070b14] bg-slate-100 border dark:border-[#1e293b] border-slate-300 font-mono text-xs space-y-2">
                <div className="text-[#10b981] font-bold flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>SCOPE STABILITY GUARANTEE</span>
                </div>
                <p className="dark:text-slate-400 text-slate-600">
                  Certified project records protect work from unnegotiated client scope creep. Any subsequent modifications require explicit re-authorization and generate an updated audit hash.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <span className="w-8 h-8 rounded-xl bg-[#3525cd]/20 text-[#818cf8] flex items-center justify-center font-mono text-sm shrink-0">4</span>
                Subscriptions & Billing Terms
              </h2>
              <p>
                All subscriptions and orders for <strong>Velloxis</strong> are processed through encrypted payment infrastructure. We handle customer service inquiries and support for all account billing activities.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                  <span>
                    <strong className="dark:text-white text-slate-900">Billing Cycles:</strong> Paid subscriptions automatically renew monthly or annually based on your chosen plan until canceled.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                  <span>
                    <strong className="dark:text-white text-slate-900">No Data Commerce:</strong> We strictly do not sell, rent, lease, or license user portfolios, client profiles, or telemetry logs to third-party ad networks.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4 border-t dark:border-[#1e293b] border-slate-200 pt-8">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <Mail className="w-5 h-5 text-[#818cf8]" />
                Questions & Legal Support
              </h2>
              <p>
                If you have questions regarding these Terms of Service or require specialized compliance documentation for enterprise workspaces, reach out to our team:
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
      <Footer onOpenLegal={(tab) => {
        if (tab === 'terms') onNavigate('/terms');
        else if (tab === 'privacy') onNavigate('/privacy');
        else if (tab === 'refund') onNavigate('/refunds');
        else onNavigate('/terms');
      }} />
    </div>
  );
};
