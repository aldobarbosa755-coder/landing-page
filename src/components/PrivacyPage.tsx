import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Lock, ShieldCheck, CheckCircle2, Mail, ExternalLink, ArrowLeft, Eye, Database, HardDrive, FileText } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
  onOpenTrial: () => void;
  onOpenChangelog?: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate, onOpenTrial, onOpenChangelog }) => {
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
                <Lock className="w-3.5 h-3.5" />
                <span>Data Isolation Protected</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GDPR & CCPA Compliant</span>
              </div>
            </div>
          </div>

          {/* Hero Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-xs font-mono font-bold uppercase tracking-widest">
              <Eye className="w-3.5 h-3.5 text-[#818cf8]" />
              <span>Privacy & Data Protection Policy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black dark:text-white text-slate-950 tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg dark:text-slate-300 text-slate-700 max-w-3xl leading-relaxed">
              Your privacy is our absolute priority. Learn how Velloxis isolates, persists, and protects client briefings, freelancer credentials, and project data.
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
              className="px-4 py-2 rounded-xl bg-[#3525cd] text-white font-bold shadow-lg shadow-[#3525cd]/30 shrink-0 cursor-pointer"
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
                Data Isolation & Information Security
              </h2>
              <p>
                Your privacy is our absolute priority. This application operates by strictly isolating all information provided by you and your clients during the onboarding and briefing phases (such as emails, design preferences, logos, and reference links).
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                  <span>
                    <strong className="dark:text-white text-slate-900">Secure Storage:</strong> Your data is securely persisted in the database hosted on Supabase using rigorous Row Level Security guidelines, preventing any unauthorized cross-tenant or unauthenticated access.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                  <span>
                    <strong className="dark:text-white text-slate-900">Cookie & Local Data Control:</strong> We employ basic local storage technologies (like <code className="dark:bg-[#0f172a] bg-slate-100 px-1.5 py-0.5 rounded text-amber-500 dark:text-amber-300 font-mono text-xs border dark:border-[#1e293b] border-slate-300">localStorage</code>) exclusively to maintain your active freelancer session and conveniently retain form drafts.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <span className="w-8 h-8 rounded-xl bg-[#3525cd]/20 text-[#818cf8] flex items-center justify-center font-mono text-sm shrink-0">2</span>
                Data Sovereignty & Right to Erasure
              </h2>
              <p>
                You retain complete mastery and ownership over your briefings, workspaces, and projects. You can edit, update, or permanently delete your records at any moment using secure administrative controls.
              </p>
              <div className="p-4 rounded-2xl dark:bg-[#070b14] bg-slate-100 border dark:border-[#1e293b] border-slate-300 space-y-2">
                <div className="text-[#818cf8] font-mono font-bold text-xs flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>RIGHT TO ERASURE (GDPR / CCPA)</span>
                </div>
                <p className="text-xs dark:text-slate-300 text-slate-700">
                  To request detailed verification audits or demand the complete immediate erasure of all your information from our infrastructure, contact the developer directly via email: <a href="mailto:aldobarbosa755@gmail.com" className="text-[#818cf8] underline font-mono font-bold">aldobarbosa755@gmail.com</a>.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <span className="w-8 h-8 rounded-xl bg-[#3525cd]/20 text-[#818cf8] flex items-center justify-center font-mono text-sm shrink-0">3</span>
                Financial & Payment Processing Data
              </h2>
              <p>
                Payment processing for subscriptions is handled exclusively by <strong>Paddle.com Market Limited ("Paddle")</strong>. Velloxis never stores, transmits, or processes raw credit card numbers or banking passwords on its servers. All checkout sessions take place inside Paddle's PCI-DSS Level 1 certified environment.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4 border-t dark:border-[#1e293b] border-slate-200 pt-8">
              <h2 className="text-xl font-extrabold dark:text-white text-slate-900 flex items-center gap-2 tracking-tight">
                <Mail className="w-5 h-5 text-[#818cf8]" />
                Privacy Inquiries & Data Requests
              </h2>
              <p>
                For any privacy questions, data access requests, or regulatory compliance verification, reach out to our team directly:
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
        else onNavigate('/privacy');
      }} />
    </div>
  );
};
