import React, { useState } from 'react';
import { LeadTrialData } from '../types';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock, Key, Loader2 } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose, defaultPlan = 'pro' }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<LeadTrialData>({
    fullName: '',
    email: '',
    whatsapp: '',
    companyName: '',
    teamSize: '1-5 pessoas',
    selectedPlan: defaultPlan
  });

  const [setupProgress, setSetupProgress] = useState(0);

  if (!isOpen) return null;

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);

    // Simulate setup
    let prog = 0;
    const interval = setInterval(() => {
      prog += 20;
      setSetupProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setTimeout(() => setStep(3), 500);
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: FORM */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3525cd]/10 text-[#4f46e5] text-xs font-mono font-bold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Acesso Gratuito e Imediato • Sem Cartão</span>
              </div>
              <h3 className="text-2xl font-black dark:text-white text-slate-950">Criar Sua Conta Velloxis</h3>
              <p className="text-xs dark:text-slate-400 text-slate-600">
                Preencha os dados abaixo para receber seu acesso com Trava de Escopo e Trilha SHA-256 ativas.
              </p>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold dark:text-slate-300 text-slate-700">Seu Nome Completo:</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ex: Gabriel Alcantara"
                  className="w-full dark:bg-[#080c14] bg-slate-50 dark:text-white text-slate-900 text-xs px-3.5 py-3 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35 focus:outline-none focus:border-[#3525cd]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold dark:text-slate-300 text-slate-700">E-mail Comercial:</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="gabriel@estudio.com"
                    className="w-full dark:bg-[#080c14] bg-slate-50 dark:text-white text-slate-900 text-xs px-3.5 py-3 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35 focus:outline-none focus:border-[#3525cd]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold dark:text-slate-300 text-slate-700">WhatsApp Comercial:</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full dark:bg-[#080c14] bg-slate-50 dark:text-white text-slate-900 text-xs px-3.5 py-3 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35 focus:outline-none focus:border-[#3525cd]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold dark:text-slate-300 text-slate-700">Nome do Estúdio / Agência:</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Apex Software Studio"
                    className="w-full dark:bg-[#080c14] bg-slate-50 dark:text-white text-slate-900 text-xs px-3.5 py-3 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35 focus:outline-none focus:border-[#3525cd]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold dark:text-slate-300 text-slate-700">Tamanho da Equipe:</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full dark:bg-[#080c14] bg-slate-50 dark:text-white text-slate-900 text-xs px-3.5 py-3 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35 focus:outline-none focus:border-[#3525cd]"
                  >
                    <option value="1 pessoa">1 pessoa (Freelancer)</option>
                    <option value="2-5 pessoas">2 a 5 pessoas (Estúdio Small)</option>
                    <option value="6-20 pessoas">6 a 20 pessoas (Agência Pro)</option>
                    <option value="20+ pessoas">Mais de 20 pessoas (Software House)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="cta-primary-btn cta-shimmer w-full py-4 text-sm font-extrabold shadow-2xl shadow-[#3525cd]/40"
                >
                  <Key className="w-4 h-4 text-amber-300" />
                  <span>Ativar Minha Conta Gratuitamente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Zero compromisso • Sem necessidade de cartão de crédito</span>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: SIMULATED SETUP */}
        {step === 2 && (
          <div className="py-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#3525cd]/20 text-[#4f46e5] flex items-center justify-center mx-auto border border-[#3525cd]/30 animate-pulse">
              <Loader2 className="w-8 h-8 animate-spin text-[#4f46e5]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold dark:text-white text-slate-900">Gerando Instância Criptográfica Velloxis...</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Aguarde enquanto configuramos seu ambiente Whitelabel e chaves de segurança SHA-256.
              </p>
            </div>

            <div className="space-y-2 max-w-xs mx-auto">
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#3525cd] to-[#10b981] h-full rounded-full transition-all duration-300" style={{ width: `${setupProgress}%` }} />
              </div>
              <p className="text-[10px] text-[#4f46e5] font-mono font-bold">{setupProgress}% concluído</p>
            </div>
          </div>
        )}

        {/* STEP 3: ACCESS GRANTED */}
        {step === 3 && (
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center mx-auto border border-[#10b981]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black dark:text-white text-slate-900">Parabéns, {formData.fullName}! 🎉</h3>
              <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed max-w-sm mx-auto">
                Sua conta do <strong className="dark:text-white text-slate-900">Velloxis</strong> para <strong className="dark:text-white text-slate-900">{formData.companyName}</strong> foi ativada com sucesso!
              </p>
            </div>

            <div className="p-4 rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 text-left text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-300 border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                <span>Plano Selecionado:</span>
                <span className="font-bold text-[#4f46e5] uppercase">{formData.selectedPlan.toUpperCase()} (ATIVO)</span>
              </div>
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-300">
                <span>E-mail de Acesso:</span>
                <span className="font-bold dark:text-white text-slate-900">{formData.email}</span>
              </div>
            </div>

            <button
              onClick={() => {
                window.open('https://velloxis.aldolima.dev.br/', '_blank', 'noopener,noreferrer');
              }}
              className="w-full py-4 rounded-2xl bg-[#10b981] hover:bg-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#10b981]/20 transition-all cursor-pointer"
            >
              <Lock className="w-4 h-4 text-slate-950" />
              <span>Acessar Meu Painel de Proteção Agora</span>
            </button>
          </div>
        )}

        </div>
      </div>
  );
};
