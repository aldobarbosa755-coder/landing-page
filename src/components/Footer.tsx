import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { VelloxisLogo } from './VelloxisLogo';

interface FooterProps {
  onOpenChangelog?: () => void;
  onOpenLegal?: (tab: 'all' | 'privacy' | 'terms' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChangelog, onOpenLegal }) => {
  return (
    <footer className="dark:bg-[#080c14] bg-[#0f172a] border-t dark:border-[#131126] border-slate-800 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <VelloxisLogo size={36} />
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Client Onboarding SaaS Platform, Scope Lockdown, and Legal Protection designed for freelancers, agencies, and digital studios.
            </p>

            {/* System Status & Version Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080c14] border border-[#131126] text-[10px] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-slate-300 font-bold uppercase tracking-wider">SHA-256 Trail Active • 99.99% Uptime</span>
              </div>

              {onOpenChangelog && (
                <button
                  onClick={onOpenChangelog}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3525cd]/20 hover:bg-[#3525cd]/30 text-[#818cf8] border border-[#3525cd]/40 text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm hover:scale-105"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Changelog v2.5.0 LATEST ⚡</span>
                </button>
              )}
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-white uppercase text-[10px] tracking-widest">Modules</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Whitelabel Dashboard</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">FormSteps Onboarding</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Client Tracking & Scope Lock</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">SHA-256 Audit Trail</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Plans & Licenses</a></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-white uppercase text-[10px] tracking-widest">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#testimonials" className="hover:text-white transition-colors">Digital Freelancers</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Software & UX Agencies</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Design & Branding Studios</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Technology Consultants</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Enterprise Software Scale</a></li>
            </ul>
          </div>

          {/* Col 4: Legal & Support */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-white uppercase text-[10px] tracking-widest">Legal & Support</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-white transition-colors">Help Center & FAQ</a></li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.('terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.('privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.('refund')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.('all')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  SHA-256 Cryptographic Verification
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} Velloxis Technology & Scope Protection. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Engineered to eliminate Scope Creep</span>
            <ShieldCheck className="w-3.5 h-3.5 text-[#10b981] inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
