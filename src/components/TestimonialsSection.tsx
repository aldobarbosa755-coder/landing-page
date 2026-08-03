import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Key,
  FileCheck2,
  Cpu,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText
} from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenTrial: (plan?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenTrial }) => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const useCases = [
    {
      id: 1,
      badge: 'Scope & Revisions',
      icon: Lock,
      title: '"Extra" Tweaks Mid-Project',
      problem: 'Mid-project change requests submitted via chat without additional budget.',
      solution: 'Scope locked post-approval. Re-openings require a Master Security Key.',
      metric: '100% Lock Without Key'
    },
    {
      id: 2,
      badge: 'Legal Protection',
      icon: FileCheck2,
      title: 'Disputes or "I Didn\'t Know" Claims',
      problem: 'Client denies the original briefing scope or files a payment chargeback.',
      solution: 'SHA-256 audit log tracking IP, UTC timestamp, and verifiable PDF proof.',
      metric: 'Immutable Audit Trail'
    },
    {
      id: 3,
      badge: 'Access Security',
      icon: Key,
      title: 'Leaked Preview Links & Prototypes',
      problem: 'Private review and homologation links forwarded to unauthorized third parties.',
      solution: 'Fingerprint Device-Locking binding the review session to the client browser.',
      metric: 'Active Device Lock'
    },
    {
      id: 4,
      badge: 'Contract Intelligence',
      icon: Cpu,
      title: 'Abusive Contractual Clauses',
      problem: 'Lengthy contracts hidden with deadline traps and source code retention risks.',
      solution: 'AI Contract Audit (Gemini) pinpointing risks and ambiguity in seconds.',
      metric: 'Analysis in < 5 Seconds'
    }
  ];

  return (
    <section className="py-16 dark:bg-[#080c14] bg-[#f7f8fc] relative border-t dark:border-[#131126] border-[#c7c4d8]/35" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] border border-[#4f46e5]/30 text-[10px] font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Practical Use Cases</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black dark:text-white text-slate-950 tracking-tight">
            What Velloxis Solves In Practice
          </h2>
          <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
            4 operational and financial risks eliminated directly at the platform architecture layer.
          </p>
        </div>

        {/* Product Technical Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl dark:bg-[#0d1326] bg-white border dark:border-[#1e293b] border-slate-200 shadow-md">
          <div className="text-center space-y-0.5 border-r dark:border-[#1e293b] border-slate-200 last:border-0 p-1.5">
            <div className="text-xl sm:text-2xl font-black text-[#10b981]">100%</div>
            <p className="text-[11px] font-mono dark:text-slate-300 text-slate-600 font-bold">Lock Without Key</p>
          </div>
          <div className="text-center space-y-0.5 border-r dark:border-[#1e293b] border-slate-200 last:border-0 p-1.5">
            <div className="text-xl sm:text-2xl font-black text-[#818cf8]">SHA-256</div>
            <p className="text-[11px] font-mono dark:text-slate-300 text-slate-600 font-bold">Cryptographic Trail</p>
          </div>
          <div className="text-center space-y-0.5 border-r dark:border-[#1e293b] border-slate-200 last:border-0 p-1.5">
            <div className="text-xl sm:text-2xl font-black text-[#38bdf8]">Device-Lock</div>
            <p className="text-[11px] font-mono dark:text-slate-300 text-slate-600 font-bold">Browser Fingerprint</p>
          </div>
          <div className="text-center space-y-0.5 p-1.5">
            <div className="text-xl sm:text-2xl font-black text-[#f59e0b]">Zero</div>
            <p className="text-[11px] font-mono dark:text-slate-300 text-slate-600 font-bold">Unregistered Tweaks</p>
          </div>
        </div>

        {/* Practical Use Cases Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;

            return (
              <div
                key={useCase.id}
                className="rounded-2xl p-5 space-y-3 dark:bg-[#0d1322] bg-white border dark:border-[#1e293b] border-slate-200 hover:border-[#4f46e5]/50 transition-all shadow-sm relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#4f46e5]/10 text-[#818cf8] border border-[#4f46e5]/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                    {useCase.badge}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full border border-[#10b981]/20">
                    {useCase.metric}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#3525cd]/20 text-[#4f46e5] flex items-center justify-center shrink-0 border border-[#3525cd]/30">
                    <Icon className="w-4.5 h-4.5 text-[#818cf8]" />
                  </div>
                  <h3 className="text-sm font-black dark:text-white text-slate-900 leading-snug">
                    {useCase.title}
                  </h3>
                </div>

                {/* Problem vs Solution Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl dark:bg-[#1a1325]/50 bg-rose-50/80 border border-rose-500/15 space-y-1">
                    <span className="text-rose-500 font-bold text-[10px] uppercase font-mono flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Problem:
                    </span>
                    <p className="dark:text-slate-300 text-slate-700 leading-snug text-[11px]">
                      {useCase.problem}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl dark:bg-[#0c1f17]/50 bg-emerald-50/80 border border-emerald-500/15 space-y-1">
                    <span className="text-emerald-500 font-bold text-[10px] uppercase font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Velloxis Solution:
                    </span>
                    <p className="dark:text-slate-300 text-slate-700 leading-snug text-[11px]">
                      {useCase.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside Use Cases */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#3525cd] via-[#4f46e5] to-[#2517a8] text-white border border-[#4f46e5]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-black">Ready To Eliminate Scope Creep?</h3>
            <p className="text-xs text-indigo-100">Protect your project deliverables and briefing with the free Velloxis Starter plan.</p>
          </div>
          <button
            onClick={() => onOpenTrial('starter')}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 text-xs font-black transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4 text-[#10b981]" />
            <span>Create Free Account Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
