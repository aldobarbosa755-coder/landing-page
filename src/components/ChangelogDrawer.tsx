import React, { useState, useEffect } from 'react';
import { Sparkles, Check, Wrench, Zap, X, ShieldCheck, Clock, Layers, RefreshCw } from 'lucide-react';
import { syncAppVersion, useSaaSVersion } from '../utils/versionSync';

interface ChangelogDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type FilterCategory = 'all' | 'new' | 'improved' | 'fixed';

export const ChangelogDrawer: React.FC<ChangelogDrawerProps> = ({ isOpen, onClose }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const saasData = useSaaSVersion();

  // Automatic live sync effect that listens or polls for SaaS release updates
  useEffect(() => {
    if (!isOpen) return;

    const syncWithSaaS = async () => {
      setIsSyncing(true);
      try {
        await syncAppVersion();
      } catch (err) {
        // Fallback handled inside syncAppVersion
      } finally {
        setTimeout(() => {
          setIsSyncing(false);
          const now = new Date();
          setLastSyncTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 600);
      }
    };

    syncWithSaaS();
    const interval = setInterval(syncWithSaaS, 30000); // Auto-sync every 30s
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const releases = [
    {
      version: 'v3.0.0',
      tag: 'LATEST',
      tagColor: 'bg-[#3525cd]/20 text-[#818cf8] border-[#3525cd]/40',
      date: 'August 05, 2026',
      subtitle: 'Release Notes Drawer, SaaS Live Version Sync Engine, and Verified Trust Seals.',
      changes: [
        {
          type: 'new',
          title: 'Release Notes & Live Changelog Drawer',
          description: 'Interactive update notes drawer accessible from the footer, automatically syncing SaaS version updates.',
        },
        {
          type: 'new',
          title: 'Ecosystem & Native Integrations',
          description: 'Native workflow support with GitHub (repositories), Figma (prototypes), and Discord (real-time approval webhooks).',
        },
        {
          type: 'improved',
          title: 'Verified Trust Seals & Badges',
          description: 'Verifiable trust seal badges for freelancers to embed on LinkedIn proposals, boosting conversion rates.',
        },
        {
          type: 'improved',
          title: 'Enhanced Dark Mode Contrast',
          description: 'Refined visual hierarchy in dark mode for headers, SHA-256 security badges, and deliverable previews.',
        },
        {
          type: 'fixed',
          title: 'Auto-Fit Layout Alignment in Client Portal',
          description: 'Fixed responsive alignment of progress cards and Master Key action triggers on mobile viewports.',
        },
      ],
    },
    {
      version: 'v2.4.2',
      tag: 'STABLE',
      tagColor: 'bg-[#10b981]/20 text-[#10b981] border-[#10b981]/40',
      date: 'July 18, 2026',
      subtitle: 'Streamlined system status badges and theme container refinements.',
      changes: [
        {
          type: 'improved',
          title: 'Simplified System Status Indicator',
          description: 'Minimalist footer indicator displaying the active stable version of the onboarding engine.',
        },
        {
          type: 'fixed',
          title: 'Light Container Contrast Inheritance',
          description: 'Fixed color inheritance for context elements when operating in light mode.',
        },
      ],
    },
    {
      version: 'v2.4.1',
      tag: 'STABLE',
      tagColor: 'bg-[#10b981]/20 text-[#10b981] border-[#10b981]/40',
      date: 'July 05, 2026',
      subtitle: 'AI Contract Risk Analyzer and Embeddable Badge Generator.',
      changes: [
        {
          type: 'new',
          title: 'AI Contract Risk Analyzer (Gemini)',
          description: 'Smart AI modules that scan contracts for predatory clauses and scope ambiguities prior to proposal sending.',
        },
        {
          type: 'improved',
          title: 'Trust Seal & Badge Generator',
          description: 'Generate 1-click embeddable badges for portfolios and email signatures.',
        },
        {
          type: 'fixed',
          title: 'Master Key Scope Protocol',
          description: 'Direct portal support for encrypted Master Keys to perform controlled scope re-openings.',
        },
      ],
    },
  ];

  const filteredReleases = releases.map((rel) => {
    const items = rel.changes.filter((c) => {
      if (activeFilter === 'all') return true;
      return c.type === activeFilter;
    });
    return { ...rel, changes: items };
  }).filter((rel) => rel.changes.length > 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm flex justify-end">
      {/* Side Drawer Panel */}
      <div className="w-full max-w-2xl bg-[#0d1322] border-l border-[#1e293b] text-slate-100 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-[#1e293b] bg-[#080c14] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                System Updates & Release Notes <span id="app-version-badge" className="text-[#818cf8] text-xs font-mono font-bold bg-[#3525cd]/20 px-2 py-0.5 rounded-full border border-[#3525cd]/40">v3.0.0</span>
              </h2>
            </div>
            <p className="text-xs text-slate-300">
              Track platform enhancements. SaaS changes are automatically synchronized here.
            </p>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-[11px] font-mono font-bold">
                <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>Auto-Sync with SaaS: {lastSyncTime}</span>
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="self-end sm:self-center p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="px-5 py-3 border-b border-[#1e293b] bg-[#0d1322] flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider shrink-0 mr-1">Filter:</span>
          
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#3525cd] text-white shadow-md'
                : 'bg-[#151d30] text-slate-400 hover:text-white border border-[#1e293b]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Updates</span>
          </button>

          <button
            onClick={() => setActiveFilter('new')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'new'
                ? 'bg-[#3525cd] text-white shadow-md'
                : 'bg-[#151d30] text-slate-400 hover:text-white border border-[#1e293b]'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>⚡ New Features</span>
          </button>

          <button
            onClick={() => setActiveFilter('improved')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'improved'
                ? 'bg-[#3525cd] text-white shadow-md'
                : 'bg-[#151d30] text-slate-400 hover:text-white border border-[#1e293b]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>✨ Improvements</span>
          </button>

          <button
            onClick={() => setActiveFilter('fixed')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'fixed'
                ? 'bg-[#3525cd] text-white shadow-md'
                : 'bg-[#151d30] text-slate-400 hover:text-white border border-[#1e293b]'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-emerald-400" />
            <span>🛠️ Fixes</span>
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-8">
          {filteredReleases.map((release) => (
            <div key={release.version} className="space-y-4">
              
              {/* Version Banner */}
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-white font-mono">{release.version}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${release.tagColor}`}>
                    {release.tag}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {release.date}
                </span>
              </div>

              {release.subtitle && (
                <p className="text-xs text-slate-400 italic font-mono bg-[#151d30]/60 p-2.5 rounded-xl border border-[#1e293b]">
                  {release.subtitle}
                </p>
              )}

              {/* Items List */}
              <div className="space-y-3">
                {release.changes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#151d30] border border-[#1e293b] space-y-1.5 hover:border-[#3525cd]/60 transition-all"
                  >
                    <div className="flex items-start gap-2">
                      {item.type === 'new' && (
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px] font-bold uppercase shrink-0 mt-0.5">
                          ⚡ New
                        </span>
                      )}
                      {item.type === 'improved' && (
                        <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-mono text-[10px] font-bold uppercase shrink-0 mt-0.5">
                          ✨ Improved
                        </span>
                      )}
                      {item.type === 'fixed' && (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold uppercase shrink-0 mt-0.5">
                          🛠️ Fix
                        </span>
                      )}

                      <h4 className="text-xs font-bold text-white leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-[#1e293b] bg-[#080c14] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#10b981]" />
            <span>Velloxis Auto-Sync <span id="app-version-badge">v3.0.0</span> • Direct Feed</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#3525cd] hover:bg-[#4f46e5] text-white font-bold transition-all cursor-pointer shadow-md"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
