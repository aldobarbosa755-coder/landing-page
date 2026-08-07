import React from 'react';
import { painVsSolution } from '../data/featuresData';
import { XCircle, CheckCircle2, ShieldCheck, ArrowRight, Lock } from 'lucide-react';
import { motion } from 'motion/react';

interface PainVsSolutionProps {
  onOpenTrial: () => void;
}

export const PainVsSolution: React.FC<PainVsSolutionProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-20 dark:bg-[#080c14] bg-[#f7f8fc] relative overflow-hidden" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-xs font-mono font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#10b981]" />
            <span>What Velloxis Solves</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black dark:text-white text-slate-950 tracking-tight leading-[1.2]">
            Stop Accepting Infinite Revisions & Losing Money on Projects
          </h2>
          <p className="text-base sm:text-lg dark:text-slate-300 text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Freelancers and agencies lose up to 30% of profit margins covering "small out-of-scope tweaks". Compare the traditional chaos with Velloxis Scope Protection:
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* THE PAIN / MANUAL CAOS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="rounded-3xl dark:bg-[#0f172a] bg-white border border-rose-500/30 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-rose-500/20 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 border border-rose-500/20">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black dark:text-white text-slate-900">Without Velloxis (Traditional Chaos)</h3>
                <p className="text-xs text-rose-500 font-bold">Uncontrolled scope creep, endless meetings, and delivery disputes</p>
              </div>
            </div>

            <div className="space-y-4">
              {painVsSolution.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-500 font-bold text-sm">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <h4>{item.painTitle}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-6">
                    {item.painDesc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center text-xs text-slate-400 font-mono italic">
              * Outcome: Unpaid working hours, high stress, and strained client relationships.
            </div>
          </motion.div>

          {/* THE SOLUTION / VELLOXIS LOCKDOWN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="rounded-3xl dark:bg-[#0f172a] bg-white border border-[#3525cd]/40 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl shadow-[#3525cd]/10"
          >
            <div className="flex items-center gap-3 border-b border-[#3525cd]/30 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#10b981]/15 flex items-center justify-center text-[#10b981] border border-[#10b981]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black dark:text-white text-slate-900">With Velloxis (Total Protection)</h3>
                <p className="text-xs text-[#10b981] font-bold">Scope lockdown, Master Keys, and immutable SHA-256 audit logs</p>
              </div>
            </div>

            <div className="space-y-4">
              {painVsSolution.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#10b981] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h4>{item.solutionTitle}</h4>
                  </div>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed pl-6">
                    {item.solutionDesc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t dark:border-[#131126] border-[#c7c4d8]/35 pt-4">
              <span className="text-xs font-mono font-bold text-[#10b981] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                <span>Zero unbudgeted feature additions</span>
              </span>
              <button
                onClick={onOpenTrial}
                className="cta-primary-btn cta-shimmer px-6 py-3 text-xs font-extrabold shadow-lg shadow-[#3525cd]/30 cursor-pointer"
              >
                <span>Protect My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
