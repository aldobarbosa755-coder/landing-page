import React, { useState } from 'react';
import { featureDetails } from '../data/featuresData';
import { Building2, FileCheck2, Laptop, ShieldCheck, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FeatureTabsProps {
  onOpenTrial: () => void;
}

export const FeatureTabs: React.FC<FeatureTabsProps> = ({ onOpenTrial }) => {
  const [activeFeatureId, setActiveFeatureId] = useState<string>('whitelabel-dashboard');

  const currentFeature = featureDetails.find((f) => f.id === activeFeatureId) || featureDetails[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'whitelabel-dashboard':
        return <Building2 className="w-5 h-5" />;
      case 'onboarding-form':
        return <FileCheck2 className="w-5 h-5" />;
      case 'client-tracking':
        return <Laptop className="w-5 h-5" />;
      case 'audit-trail':
        return <ShieldCheck className="w-5 h-5 text-[#10b981]" />;
      default:
        return <Lock className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 dark:bg-[#080c14] bg-[#f7f8fc] relative border-t dark:border-[#131126] border-[#c7c4d8]/35" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-xs font-mono font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Velloxis Platform Modules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black dark:text-white text-slate-950 tracking-tight">
            Everything You Need To Protect Projects From Start To Finish
          </h2>
          <p className="text-base dark:text-slate-300 text-slate-600">
            A complete architecture combining Whitelabel, Autonomous Onboarding, Scope Lockdown, and SHA-256 Audit Trails.
          </p>
        </div>

        {/* Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 dark:bg-[#0f172a] bg-white p-2 rounded-2xl border dark:border-[#131126] border-[#c7c4d8]/35 shadow-sm max-w-4xl mx-auto">
          {featureDetails.map((feat) => {
            const isActive = feat.id === activeFeatureId;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveFeatureId(feat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#3525cd] to-[#4f46e5] text-white shadow-md'
                    : 'dark:text-slate-400 text-slate-600 dark:hover:text-slate-200 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                {getIcon(feat.id)}
                <span>{feat.title.split(' ')[0]} {feat.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Card */}
        <div className="relative min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature.id}
              initial={{ opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.99 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl"
            >
              
              {/* Left Text Detail */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/20 text-xs font-mono font-bold uppercase tracking-wider">
                  {currentFeature.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
                  {currentFeature.title}
                </h3>

                <p className="dark:text-slate-300 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {currentFeature.description}
                </p>

                <div className="space-y-3 pt-2">
                  {currentFeature.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center mt-0.5 shrink-0 border border-[#10b981]/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={onOpenTrial}
                    className="cta-primary-btn cta-shimmer px-7 py-3.5 text-xs sm:text-sm font-extrabold shadow-xl shadow-[#3525cd]/30 cursor-pointer"
                  >
                    <span>Activate Module in My Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Stat Highlight Box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 p-8 text-center space-y-4 shadow-sm">
                  <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3525cd] via-[#4f46e5] to-[#10b981]">
                    {currentFeature.statNumber}
                  </div>
                  <p className="text-sm font-bold dark:text-slate-200 text-slate-800">
                    {currentFeature.statText}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed border-t dark:border-[#131126] border-[#c7c4d8]/35 pt-4">
                    {currentFeature.subtitle}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
