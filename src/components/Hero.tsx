import React from 'react';
import { Lock, ArrowRight, Play, CheckCircle2, ShieldCheck, Key } from 'lucide-react';

interface HeroProps {
  onOpenTrial: (plan?: string) => void;
  onOpenVideoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onOpenVideoModal }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden dark:bg-[#080c14] bg-[#f7f8fc]">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#13112615_1px,transparent_1px),linear-gradient(to_bottom,#13112615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#3525cd]/25 via-[#4f46e5]/20 to-[#10b981]/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#10b981]/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Security & Cryptography Engineering Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-4 py-2 rounded-full dark:bg-[#0f172a]/90 bg-white/90 border dark:border-[#131126] border-[#c7c4d8]/35 text-xs shadow-xl backdrop-blur-md hover:border-[#3525cd]/40 transition-all">
            <span className="flex items-center gap-1.5 font-black dark:text-white text-slate-900">
              <Lock className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Built with Enterprise-Grade Security</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#3525cd]/15 text-[#818cf8] text-[10px] font-mono font-bold tracking-wider uppercase border border-[#3525cd]/30">
              <ShieldCheck className="w-3 h-3 text-[#818cf8]" />
              Zero-Trust Architecture
            </span>
            <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981] text-[10px] font-mono font-bold tracking-wider uppercase border border-[#10b981]/30">
              <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
              GDPR & Legal Compliance Ready
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black dark:text-white text-slate-950 tracking-tight leading-[1.2] sm:leading-[1.18] max-w-4xl mx-auto">
            Autonomous Onboarding,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3525cd] via-[#4f46e5] to-[#10b981] inline-block">
              Scope Lockdown
            </span>{' '}
            & Legal Protection for Your Projects
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl dark:text-slate-300 text-slate-700 max-w-3xl mx-auto font-normal leading-relaxed pt-2">
            Eliminate <strong className="dark:text-white text-slate-950 font-bold">Scope Creep</strong> (unpaid feature requests), exhausting client meetings, and project disputes. Freeze project briefings, require <strong className="dark:text-white text-slate-950 font-bold">Master Keys</strong> for scope reopenings, and issue certified audit logs with <strong className="dark:text-white text-slate-950 font-bold">SHA-256 Cryptographic Hashes</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTrial('starter')}
              className="cta-primary-btn cta-shimmer w-full sm:w-auto px-9 py-4 sm:py-5 text-base sm:text-lg group shadow-2xl shadow-[#3525cd]/40 cursor-pointer"
            >
              <Key className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform duration-200" />
              <span>Create Free Account Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>

            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-base font-extrabold dark:text-white text-slate-900 px-8 py-4 sm:py-5 rounded-2xl dark:bg-[#0f172a] bg-white hover:bg-slate-100 dark:hover:bg-[#1a233a] border dark:border-[#3525cd]/40 border-[#3525cd]/30 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-[#3525cd]/20 flex items-center justify-center text-[#4f46e5] shrink-0">
                <Play className="w-4 h-4 fill-[#3525cd] ml-0.5" />
              </div>
              <span>Test Live Simulator</span>
            </a>
          </div>

          {/* Risk Reversal */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>Setup in less than 3 minutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span>Certified electronic evidence protection</span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl dark:bg-[#0f172a]/80 bg-white/80 border dark:border-[#131126] border-[#c7c4d8]/35 backdrop-blur-sm text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-[#10b981] font-sans">
                $0
              </div>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Scope Creep Losses</p>
            </div>

            <div className="p-4 rounded-2xl dark:bg-[#0f172a]/80 bg-white/80 border dark:border-[#131126] border-[#c7c4d8]/35 backdrop-blur-sm text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 font-sans">
                SHA-256
              </div>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Cryptographic Hash</p>
            </div>

            <div className="p-4 rounded-2xl dark:bg-[#0f172a]/80 bg-white/80 border dark:border-[#131126] border-[#c7c4d8]/35 backdrop-blur-sm text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-[#4f46e5] font-sans">
                100%
              </div>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Device-Lock Secured</p>
            </div>

            <div className="p-4 rounded-2xl dark:bg-[#0f172a]/80 bg-white/80 border dark:border-[#131126] border-[#c7c4d8]/35 backdrop-blur-sm text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-[#3525cd] dark:text-[#818cf8] font-sans">
                85%
              </div>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Onboarding Time Saved</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
