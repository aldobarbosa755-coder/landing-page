import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Lock, Key } from 'lucide-react';

interface FloatingBarProps {
  onOpenTrial: () => void;
}

export const FloatingBar: React.FC<FloatingBarProps> = ({ onOpenTrial }) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 z-40 max-w-lg w-full dark:bg-[#0f172a]/95 bg-white/95 border border-[#3525cd]/40 p-4 rounded-2xl shadow-2xl backdrop-blur-xl animate-fade-in flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3525cd] to-[#4f46e5] flex items-center justify-center shrink-0 shadow-md">
          <Lock className="w-5 h-5 text-[#10b981]" />
        </div>
        <div>
          <h4 className="text-xs font-bold dark:text-white text-slate-900">Elimine o Scope Creep no Velloxis</h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-300">Plano Start 100% Grátis • Sem cartão de crédito</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenTrial}
          className="cta-primary-btn cta-shimmer px-4 py-2 text-xs font-black shrink-0 shadow-lg shadow-[#3525cd]/40"
        >
          <Key className="w-3.5 h-3.5 text-amber-300" />
          <span>Testar Grátis</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
