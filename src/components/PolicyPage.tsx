import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle2, Lock, CreditCard, ExternalLink, Copy, Check, ArrowLeft, Home } from 'lucide-react';
import { Footer } from './Footer';

interface PolicyPageProps {
  type: 'terms' | 'privacy' | 'refund' | 'all';
  onNavigateHome: () => void;
  onNavigateTo: (path: string) => void;
  onOpenChangelog?: () => void;
}

export const PolicyPage: React.FC<PolicyPageProps> = ({
  type,
  onNavigateHome,
  onNavigateTo,
  onOpenChangelog,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'privacy' | 'terms' | 'refund'>(
    type === 'all' ? 'all' : type
  );
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    setActiveTab(type === 'all' ? 'all' : type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [type]);

  const handleCopyPaddleText = () => {
    const text = `Velloxis is a Client Onboarding & Scope Lockdown SaaS platform for freelancers and digital agencies. Payments are processed by Paddle.com Market Limited, acting as Merchant of Record. Contact aldobarbosa755@gmail.com for support.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const titles = {
    terms: 'Terms of Service (SaaS Agreement)',
    privacy: 'Privacy Policy & Data Protection',
    refund: 'Refund & Cancellation Policy (Paddle SaaS)',
    all: 'Privacy Policy, Terms of Service & Refund Policy',
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white antialiased flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-indigo-400 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                V
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                Velloxis
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onNavigateHome}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Home className="w-3.5 h-3.5 text-indigo-400" />
                <span>Home</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTo('/pricing')}
                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
              >
                Pricing
              </button>
            </div>
          </div>
        </header>

        {/* Main Header / Breadcrumb Hero */}
        <section className="bg-slate-900/60 border-b border-slate-800/80 py-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {titles[activeTab]}
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Verified Legal Terms & Official Paddle Merchant Policies for Velloxis SaaS
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Commercial Partner</span>
              </div>
            </div>

            {/* Sub Nav Tabs */}
            <div className="pt-2 flex items-center gap-2 overflow-x-auto text-xs font-mono">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('all');
                  onNavigateTo('/terms');
                }}
                className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                }`}
              >
                All Policies
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('privacy');
                  onNavigateTo('/privacy');
                }}
                className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
                  activeTab === 'privacy'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                }`}
              >
                1. Privacy Policy
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('terms');
                  onNavigateTo('/terms');
                }}
                className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
                  activeTab === 'terms'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                }`}
              >
                2. Terms of Service
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('refund');
                  onNavigateTo('/refunds');
                }}
                className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
                  activeTab === 'refund'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                }`}
              >
                3. Refund Policy
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
          
          {/* SECTION 1: PRIVACY POLICY */}
          {(activeTab === 'all' || activeTab === 'privacy') && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-lg font-black text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  <Lock className="w-5 h-5 text-indigo-400" />
                  <span>1. PRIVACY POLICY</span>
                </h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Your privacy is our absolute priority. This application operates by strictly isolating all information provided by you and your clients during the onboarding and briefing phases (such as emails, design preferences, logos, and reference links).
              </p>
              <ul className="space-y-4 pt-1">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg shrink-0">•</span>
                  <span className="text-sm">
                    <strong className="text-white">Secure Storage:</strong> Your data is securely persisted in the database hosted on Supabase using rigorous Row Level Security guidelines, preventing any unauthorized cross-tenant or unauthenticated access.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg shrink-0">•</span>
                  <span className="text-sm">
                    <strong className="text-white">Cookie & Local Data Control:</strong> We employ basic local storage technologies (like <code className="bg-slate-950 px-2 py-0.5 rounded text-amber-300 font-mono text-xs border border-slate-800">localStorage</code>) exclusively to maintain your active freelancer session and conveniently retain form drafts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg shrink-0">•</span>
                  <span className="text-sm">
                    <strong className="text-white">Data Sovereignty:</strong> You retain complete mastery to edit, update, or permanently delete your briefings, workspaces, and projects from the database at any moment using secure administrative controls.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg shrink-0">•</span>
                  <span className="text-sm">
                    <strong className="text-white">Right to Erasure:</strong> To request detailed verification audits or demand the complete immediate erasure of all your information from our infrastructure, contact the developer immediately via email: <a href="mailto:aldobarbosa755@gmail.com" className="text-indigo-400 underline hover:text-white font-mono font-bold">aldobarbosa755@gmail.com</a>.
                  </span>
                </li>
              </ul>
            </div>
          )}

          {/* SECTION 2: TERMS OF SERVICE */}
          {(activeTab === 'all' || activeTab === 'terms') && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-lg font-black text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-400" />
                  <span>2. TERMS OF SERVICE (SAAS)</span>
                </h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                By using our platform to generate project delivery reports, structure industrial design briefs, or integrate billing via Paddle, you agree to the conditions outlined below:
              </p>
              <ul className="space-y-4 pt-1">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold text-lg shrink-0">•</span>
                  <span className="text-sm">
                    <strong className="text-white">Credential Security:</strong> Exercise caution when configuring hosting or custom domain parameters. The database provides server-side encryption, but maintaining robust master credentials is the sole responsibility of the administrator.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold text-lg shrink-0">•</span>
                  <span className="text-sm">
                    <strong className="text-white">Scope Stability:</strong> Once marked as in production or active, project milestones and data grids act as certified records to protect the workflow against unnegotiated client scope creep.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold text-lg shrink-0">•</span>
                  <span className="text-sm">
                    <strong className="text-white">No Data Commerce:</strong> Under no circumstances do we share, sell, rent, license, or lease freelancer portfolios, contact lists, client profiles, or telemetry logs with external marketing networks or third parties.
                  </span>
                </li>
              </ul>
            </div>
          )}

          {/* SECTION 3: REFUND & CANCELLATION POLICY */}
          {(activeTab === 'all' || activeTab === 'refund') && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-lg font-black text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-emerald-400" />
                  <span>3. REFUND & CANCELLATION POLICY (PADDLE SAAS)</span>
                </h2>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-bold uppercase">
                  14-DAY GUARANTEE
                </span>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                All digital transactions and SaaS subscription payments for <strong className="text-white">Velloxis</strong> are processed through <strong className="text-white">Paddle.com Market Limited ("Paddle")</strong>, our authorized Merchant of Record. Paddle is responsible for secure checkout handling, tax compliance, invoicing, and refund processing.
              </p>

              {/* Green Money Back Box */}
              <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold font-mono text-sm tracking-wider">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>14-DAY 100% MONEY-BACK GUARANTEE</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  If you are not completely satisfied with your SaaS subscription within the first <strong className="text-white">14 calendar days</strong> of purchase, you are eligible for a <strong className="text-white">full refund</strong>, no questions asked.
                </p>
                <ul className="space-y-3 pt-1">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong className="text-white">Subscription Cancellation:</strong> You may cancel your SaaS subscription at any time via your account settings or through the billing link in your Paddle email receipts.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong className="text-white">Access Duration:</strong> Upon cancellation, your account remains active until the end of the current billing cycle with zero cancellation fees.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong className="text-white">How to Request Refund:</strong> Email support directly at <a href="mailto:aldobarbosa755@gmail.com" className="text-indigo-400 underline font-mono font-bold">aldobarbosa755@gmail.com</a> or access Paddle Buyer Support at <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline font-mono font-bold inline-flex items-center gap-1">https://paddle.net <ExternalLink className="w-3.5 h-3.5" /></a>.</span>
                  </li>
                </ul>
              </div>

              {/* Vendor Copy Helper */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-indigo-400 font-bold block tracking-wider">
                    PADDLE VENDOR ONBOARDING FIELD COPY HELPERS:
                  </span>
                  <p className="text-sm font-mono text-slate-300">
                    Copy "What will you sell on Paddle?" text
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPaddleText}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

            </div>
          )}

        </section>
      </div>

      {/* Footer */}
      <Footer 
        onOpenChangelog={onOpenChangelog} 
        onOpenLegal={(tab) => {
          if (tab === 'privacy') onNavigateTo('/privacy');
          else if (tab === 'terms') onNavigateTo('/terms');
          else if (tab === 'refund') onNavigateTo('/refunds');
          else onNavigateTo('/terms');
        }} 
      />
    </div>
  );
};
