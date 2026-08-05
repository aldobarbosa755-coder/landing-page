import React, { useState } from 'react';
import { ShieldCheck, X, FileText, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'all' | 'privacy' | 'terms' | 'refund';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, defaultTab = 'all' }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'privacy' | 'terms' | 'refund'>(defaultTab);

  // Sync activeTab when defaultTab changes on modal open
  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-[#080c14] border border-[#1e293b] text-slate-100 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-[#131126] bg-[#070b14] flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#3525cd]/20 border border-[#3525cd]/40 text-[#818cf8] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-[#818cf8]" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                Privacy Policy & Terms
              </h2>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                Includes Refund & Cancellation Policy
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-[#1e293b] hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-3.5 border-b border-[#131126] bg-[#080c14] flex items-center gap-2.5 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#3525cd] text-white shadow-lg shadow-[#3525cd]/30'
                : 'bg-[#0f172a] text-slate-400 hover:text-white border border-[#1e293b]'
            }`}
          >
            All Policies
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-[#3525cd] text-white shadow-lg shadow-[#3525cd]/30'
                : 'bg-[#0f172a] text-slate-400 hover:text-white border border-[#1e293b]'
            }`}
          >
            1. Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-[#3525cd] text-white shadow-lg shadow-[#3525cd]/30'
                : 'bg-[#0f172a] text-slate-400 hover:text-white border border-[#1e293b]'
            }`}
          >
            2. Terms of Service
          </button>
          <button
            onClick={() => setActiveTab('refund')}
            className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'refund'
                ? 'bg-[#3525cd] text-white shadow-lg shadow-[#3525cd]/30'
                : 'bg-[#0f172a] text-slate-400 hover:text-white border border-[#1e293b]'
            }`}
          >
            3. Refund Policy
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-8 text-xs text-slate-300 leading-relaxed font-sans">
          
          {/* SECTION 1: PRIVACY POLICY */}
          {(activeTab === 'all' || activeTab === 'privacy') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-2">
                <h3 className="text-sm font-black text-white font-mono uppercase tracking-wider">
                  1. PRIVACY POLICY
                </h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Your privacy is our absolute priority. This application operates by strictly isolating all information provided by you and your clients during the onboarding and briefing phases (such as emails, design preferences, logos, and reference links).
              </p>
              <ul className="space-y-3 pt-1">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10b981] font-bold text-sm shrink-0">•</span>
                  <span className="text-xs sm:text-sm">
                    <strong className="text-white">Secure Storage:</strong> Your data is securely persisted in the database hosted on Supabase using rigorous Row Level Security guidelines, preventing any unauthorized cross-tenant or unauthenticated access.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10b981] font-bold text-sm shrink-0">•</span>
                  <span className="text-xs sm:text-sm">
                    <strong className="text-white">Cookie & Local Data Control:</strong> We employ basic local storage technologies (like <code className="bg-[#0f172a] px-1.5 py-0.5 rounded text-amber-300 font-mono text-[11px] border border-[#1e293b]">localStorage</code>) exclusively to maintain your active freelancer session and conveniently retain form drafts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10b981] font-bold text-sm shrink-0">•</span>
                  <span className="text-xs sm:text-sm">
                    <strong className="text-white">Data Sovereignty:</strong> You retain complete mastery to edit, update, or permanently delete your briefings, workspaces, and projects from the database at any moment using secure administrative controls.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#10b981] font-bold text-sm shrink-0">•</span>
                  <span className="text-xs sm:text-sm">
                    <strong className="text-white">Right to Erasure:</strong> To request detailed verification audits or demand the complete immediate erasure of all your information from our infrastructure, contact the developer immediately via email: <a href="mailto:aldobarbosa755@gmail.com" className="text-[#818cf8] underline hover:text-white font-mono font-bold">aldobarbosa755@gmail.com</a>.
                  </span>
                </li>
              </ul>
            </div>
          )}

          {/* SECTION 2: TERMS OF SERVICE */}
          {(activeTab === 'all' || activeTab === 'terms') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-2">
                <h3 className="text-sm font-black text-white font-mono uppercase tracking-wider">
                  2. TERMS OF SERVICE (SAAS)
                </h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                By using our platform to generate project delivery reports, structure industrial design briefs, or access account features, you agree to the conditions outlined below:
              </p>
              <ul className="space-y-3 pt-1">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#818cf8] font-bold text-sm shrink-0">•</span>
                  <span className="text-xs sm:text-sm">
                    <strong className="text-white">Credential Security:</strong> Exercise caution when configuring hosting or custom domain parameters. The database provides server-side encryption, but maintaining robust master credentials is the sole responsibility of the administrator.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#818cf8] font-bold text-sm shrink-0">•</span>
                  <span className="text-xs sm:text-sm">
                    <strong className="text-white">Scope Stability:</strong> Once marked as in production or active, project milestones and data grids act as certified records to protect the workflow against unnegotiated client scope creep.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#818cf8] font-bold text-sm shrink-0">•</span>
                  <span className="text-xs sm:text-sm">
                    <strong className="text-white">No Data Commerce:</strong> Under no circumstances do we share, sell, rent, license, or lease freelancer portfolios, contact lists, client profiles, or telemetry logs with external marketing networks or third parties.
                  </span>
                </li>
              </ul>
            </div>
          )}

          {/* SECTION 3: REFUND & CANCELLATION POLICY */}
          {(activeTab === 'all' || activeTab === 'refund') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-2">
                <h3 className="text-sm font-black text-white font-mono uppercase tracking-wider">
                  3. REFUND & CANCELLATION POLICY
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-[10px] font-mono font-bold uppercase">
                  14-DAY GUARANTEE
                </span>
              </div>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                All digital transactions and SaaS subscription payments for <strong className="text-white">Velloxis</strong> are securely processed. We handle checkout security, tax compliance, invoicing, and instant refund processing.
              </p>

              {/* Green Box */}
              <div className="p-5 rounded-2xl bg-[#091512] border border-[#10b981]/30 space-y-3.5 shadow-sm">
                <div className="flex items-center gap-2 text-[#10b981] font-extrabold font-mono text-xs tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>14-DAY 100% MONEY-BACK GUARANTEE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  If you are not completely satisfied with your SaaS subscription within the first <strong className="text-white">14 calendar days</strong> of purchase, you are eligible for a <strong className="text-white">full refund</strong>, no questions asked.
                </p>
                <ul className="space-y-2.5 pt-1">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-[#10b981] font-bold">•</span>
                    <span><strong className="text-white">Subscription Cancellation:</strong> You may cancel your SaaS subscription at any time via your account settings or email support.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-[#10b981] font-bold">•</span>
                    <span><strong className="text-white">Access Duration:</strong> Upon cancellation, your account remains active until the end of the current billing cycle with zero cancellation fees.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-[#10b981] font-bold">•</span>
                    <span><strong className="text-white">How to Request Refund:</strong> Email support directly at <a href="mailto:aldobarbosa755@gmail.com" className="text-[#818cf8] underline font-mono font-bold">aldobarbosa755@gmail.com</a>.</span>
                  </li>
                </ul>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#131126] bg-[#070b14] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-[#10b981]" />
            <span>Velloxis SaaS • Commercial Safety Certified</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] text-white font-extrabold text-xs transition-all shadow-lg shadow-[#3525cd]/30 cursor-pointer"
          >
            Understand & Accept
          </button>
        </div>

      </div>
    </div>
  );
};
