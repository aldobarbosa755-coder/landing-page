import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Key,
  FileCheck2,
  CheckCircle2,
  Sparkles,
  Layers,
  Download,
  AlertTriangle,
  Send,
  Building2,
  ExternalLink,
  ChevronRight,
  Eye,
  Laptop,
  Check,
  RefreshCw,
  FileText,
  Printer
} from 'lucide-react';
import { AuditEvent, ProjectScopeItem } from '../types';

interface InteractiveDashboardMockupProps {}

export const InteractiveDashboardMockup: React.FC<InteractiveDashboardMockupProps> = () => {
  const [activeTab, setActiveTab] = useState<'whitelabel-dashboard' | 'onboarding-form' | 'client-tracking' | 'audit-trail'>('whitelabel-dashboard');

  // Whitelabel Agency Customization State
  const [agencyName, setAgencyName] = useState('Apex Software Studio');
  const [primaryColor, setPrimaryColor] = useState('#3525cd');
  const [showPdfModal, setShowPdfModal] = useState(false);

  // Onboarding Form Steps State
  const [formStep, setFormStep] = useState<1 | 2 | 3 | 4>(1);
  const [clientName, setClientName] = useState('Nexus Retail Group');
  const [brandColor, setBrandColor] = useState('#4f46e5');
  const [logoUploaded, setLogoUploaded] = useState(true);
  const [isScopeLocked, setIsScopeLocked] = useState(false);
  const [digitalSignature, setDigitalSignature] = useState('');

  // Master Key & Scope State
  const [masterKeys, setMasterKeys] = useState<string[]>(['FP-88B2-Q4', 'VX-912A-K9', 'VX-4491-M3']);
  const [masterKeyInput, setMasterKeyInput] = useState('');
  const [masterKeyStatus, setMasterKeyStatus] = useState<string | null>(null);

  // Scope Items for Client View
  const [scopeItems, setScopeItems] = useState<ProjectScopeItem[]>([
    {
      id: '1',
      title: 'Design System & Figma UI/UX',
      description: 'Responsive desktop & mobile layouts with complete brand design tokens.',
      status: 'Aprovado',
      deliverables: ['Design System', 'Interactive Prototype', 'Figma Files']
    },
    {
      id: '2',
      title: 'Front-end Development & Client Portal',
      description: 'Production web application built with React + TypeScript & protected routes.',
      status: 'Aprovado',
      deliverables: ['Git Source Code', 'Responsive Portal', 'Usability Audits']
    },
    {
      id: '3',
      title: 'API Integration & Database RLS',
      description: 'Real-time webhooks, Supabase RLS policies, and automated notifications.',
      status: 'Em Produção',
      deliverables: ['Active Webhooks', 'API Documentation', 'SHA-256 Audit Logs']
    }
  ]);

  // Audit Events Log
  const [auditEvents, setAuditEvents] = useState<AuditEvent[]>([
    {
      id: 'evt-001',
      timestamp: '2026-07-24 10:14:02 UTC',
      action: 'ONBOARDING_SUBMITTED_AND_SIGNED',
      actor: 'Nexus Retail Group (Client)',
      ipAddress: '189.23.12.9',
      deviceInfo: 'MacBook Pro • Safari 18.2',
      sha256Hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      status: 'LOCKED'
    },
    {
      id: 'evt-002',
      timestamp: '2026-07-24 11:30:45 UTC',
      action: 'DEVICE_LOCK_BOUND',
      actor: 'Portal Client Engine',
      ipAddress: '189.23.12.9',
      deviceInfo: 'Device ID: dev_mac_88291a',
      sha256Hash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4',
      status: 'VERIFIED'
    },
    {
      id: 'evt-003',
      timestamp: '2026-07-24 14:05:12 UTC',
      action: 'PHASE_1_DESIGN_APPROVED',
      actor: 'Lucas M. (Approver)',
      ipAddress: '189.23.12.9',
      deviceInfo: 'MacBook Pro • Safari 18.2',
      sha256Hash: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
      status: 'VERIFIED'
    }
  ]);

  // Handle Master Key Usage to Unlock Scope
  const handleConsumeMasterKey = () => {
    if (!masterKeyInput.trim()) return;
    const cleanKey = masterKeyInput.trim().toUpperCase();
    if (masterKeys.includes(cleanKey)) {
      setMasterKeys(masterKeys.filter((k) => k !== cleanKey));
      setIsScopeLocked(false);
      setMasterKeyStatus(`✅ Master Key ${cleanKey} consumed successfully! Scope unlocked for authorized adjustments.`);
      setMasterKeyInput('');

      // Add new audit event
      const newAudit: AuditEvent = {
        id: `evt-${Date.now()}`,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
        action: 'MASTER_KEY_CONSUMED_SCOPE_UNLOCKED',
        actor: 'Agency / Authorized Client',
        ipAddress: '177.82.12.9',
        deviceInfo: 'MacBook Pro • Chrome 126',
        sha256Hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '99a4',
        status: 'CONSUMED'
      };
      setAuditEvents((prev) => [newAudit, ...prev]);
    } else {
      setMasterKeyStatus('❌ Invalid Master Key or already consumed.');
    }
  };

  // Handle Lock Scope Action
  const handleLockScope = () => {
    if (!digitalSignature.trim()) return;
    setIsScopeLocked(true);
    setFormStep(4);

    const newAudit: AuditEvent = {
      id: `evt-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
      action: 'SCOPE_LOCKDOWN_ENFORCED',
      actor: `${digitalSignature} (Assinatura Digital)`,
      ipAddress: '189.23.12.9',
      deviceInfo: 'MacBook Pro • Safari 18.2',
      sha256Hash: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
      status: 'LOCKED'
    };
    setAuditEvents((prev) => [newAudit, ...prev]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20" id="demo">
      <div className="rounded-3xl dark:bg-[#0f172a]/95 bg-white/95 border dark:border-[#131126] border-[#c7c4d8]/35 shadow-2xl shadow-[#3525cd]/15 backdrop-blur-xl overflow-hidden">
        
        {/* Top Header of Mockup */}
        <div className="dark:bg-[#080c14]/90 bg-slate-100/90 px-4 sm:px-6 py-4 border-b dark:border-[#131126] border-[#c7c4d8]/35 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]/80" />
            </div>
            <span className="text-slate-500 text-sm">|</span>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold dark:text-slate-300 text-slate-700 dark:bg-[#0f172a] bg-white px-3 py-1 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35">
              <Lock className="w-3.5 h-3.5 text-[#10b981]" />
              <span>velloxis.app/p/vx-9821a-client-view</span>
            </div>
          </div>

          {/* Navigation Module Tabs */}
          <div className="flex items-center gap-1 dark:bg-[#080c14] bg-slate-200/80 p-1 rounded-2xl border dark:border-[#131126] border-[#c7c4d8]/35">
            <button
              onClick={() => setActiveTab('whitelabel-dashboard')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'whitelabel-dashboard'
                  ? 'bg-gradient-to-r from-[#3525cd] to-[#4f46e5] text-white shadow-md'
                  : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Agency Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('onboarding-form')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'onboarding-form'
                  ? 'bg-gradient-to-r from-[#3525cd] to-[#4f46e5] text-white shadow-md'
                  : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Onboarding Form</span>
            </button>

            <button
              onClick={() => setActiveTab('client-tracking')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'client-tracking'
                  ? 'bg-gradient-to-r from-[#3525cd] to-[#4f46e5] text-white shadow-md'
                  : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Client Portal</span>
            </button>

            <button
              onClick={() => setActiveTab('audit-trail')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'audit-trail'
                  ? 'bg-gradient-to-r from-[#3525cd] to-[#4f46e5] text-white shadow-md'
                  : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
              <span>SHA-256 Audit Log</span>
            </button>
          </div>
        </div>

        {/* Live Playground Workspace */}
        <div className="p-4 sm:p-6 min-h-[480px] dark:bg-[#080c14]/70 bg-slate-50/70">

          {/* MODULE 1: WHITELABEL DASHBOARD */}
          {activeTab === 'whitelabel-dashboard' && (
            <div className="space-y-6">
              
              {/* Whitelabel Bar Customizer */}
              <div className="p-4 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-md"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {agencyName.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-sm font-black dark:text-white text-slate-900">{agencyName}</h3>
                    <p className="text-[10px] font-mono text-slate-500">Gestão Whitelabel Ativa • Subdomínio: <span className="text-[#4f46e5] font-bold">portal.apexstudio.dev</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-500">Nome da Agência:</span>
                    <input
                      type="text"
                      value={agencyName}
                      onChange={(e) => setAgencyName(e.target.value)}
                      className="text-xs px-2.5 py-1 rounded-lg dark:bg-[#080c14] bg-slate-100 border dark:border-[#131126] border-[#c7c4d8]/35 font-bold dark:text-white text-slate-900 focus:outline-none focus:border-[#3525cd]"
                    />
                  </div>
                  <button
                    onClick={() => setShowPdfModal(true)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-[#10b981]/25 transition-all"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Gerar Termo Jurídico PDF</span>
                  </button>
                </div>
              </div>

              {/* Central Project Pipeline Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Status 1: Onboarding */}
                <div className="p-3.5 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 space-y-3">
                  <div className="flex items-center justify-between border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                    <span className="text-xs font-black dark:text-white text-slate-900">1. Onboarding</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] font-bold">2 Projetos</span>
                  </div>
                  <div className="p-3 rounded-xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 space-y-1.5">
                    <span className="text-xs font-bold dark:text-white text-slate-900 block">E-commerce FitLife</span>
                    <p className="text-[10px] text-slate-500">Aguardando upload de logos e catálogo.</p>
                    <div className="flex items-center justify-between text-[10px] font-mono pt-1 text-slate-400">
                      <span>R$ 8.500</span>
                      <span className="text-[#f59e0b] font-bold">Aguardando Cliente</span>
                    </div>
                  </div>
                </div>

                {/* Status 2: Em Produção */}
                <div className="p-3.5 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 space-y-3">
                  <div className="flex items-center justify-between border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                    <span className="text-xs font-black dark:text-white text-slate-900">2. Em Produção</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] font-bold">3 Projetos</span>
                  </div>
                  <div className="p-3 rounded-xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 space-y-1.5 border-l-4 border-l-[#3525cd]">
                    <span className="text-xs font-bold dark:text-white text-slate-900 block">{clientName}</span>
                    <p className="text-[10px] text-slate-500">Fase 3: Integração de APIs e RLS.</p>
                    <div className="flex items-center justify-between text-[10px] font-mono pt-1">
                      <span className="text-slate-400">R$ 18.000</span>
                      <span className="text-[#4f46e5] font-bold">Escopo Trancado 🔒</span>
                    </div>
                  </div>
                </div>

                {/* Status 3: Aprovado / Finalizado */}
                <div className="p-3.5 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 space-y-3">
                  <div className="flex items-center justify-between border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                    <span className="text-xs font-black dark:text-white text-slate-900">3. Aprovado</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#10b981] font-bold">8 Projetos</span>
                  </div>
                  <div className="p-3 rounded-xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 space-y-1.5 border-l-4 border-l-[#10b981]">
                    <span className="text-xs font-bold dark:text-white text-slate-900 block">Portal PayTech B2B</span>
                    <p className="text-[10px] text-slate-500">Aceite final com Hash SHA-256 gerado.</p>
                    <div className="flex items-center justify-between text-[10px] font-mono pt-1 text-[#10b981] font-bold">
                      <span>R$ 32.000</span>
                      <span>Termo Assinado ✓</span>
                    </div>
                  </div>
                </div>

                {/* Status 4: Arquivado / Protegido */}
                <div className="p-3.5 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 space-y-3">
                  <div className="flex items-center justify-between border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                    <span className="text-xs font-black dark:text-white text-slate-900">4. Arquivado</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-500/10 text-slate-400 font-bold">14 Projetos</span>
                  </div>
                  <div className="p-3 rounded-xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 space-y-1.5 opacity-80">
                    <span className="text-xs font-bold dark:text-white text-slate-900 block">SaaS Logistics Pro</span>
                    <p className="text-[10px] text-slate-500">Garantia encerrada sem disputas.</p>
                    <div className="flex items-center justify-between text-[10px] font-mono pt-1 text-slate-400">
                      <span>R$ 24.500</span>
                      <span>100% Protegido</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 2: FORMSTEPS ONBOARDING FORM */}
          {activeTab === 'onboarding-form' && (
            <div className="max-w-3xl mx-auto space-y-6">
              
              {/* Step Tracker */}
              <div className="flex items-center justify-between p-4 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35">
                <div className={`flex items-center gap-2 text-xs font-mono font-bold ${formStep === 1 ? 'text-[#3525cd] dark:text-[#818cf8]' : 'text-slate-400'}`}>
                  <span className="w-6 h-6 rounded-full bg-[#3525cd]/10 flex items-center justify-center">1</span>
                  <span>Briefing & Dados</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
                <div className={`flex items-center gap-2 text-xs font-mono font-bold ${formStep === 2 ? 'text-[#3525cd] dark:text-[#818cf8]' : 'text-slate-400'}`}>
                  <span className="w-6 h-6 rounded-full bg-[#3525cd]/10 flex items-center justify-center">2</span>
                  <span>Logos & Marca</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
                <div className={`flex items-center gap-2 text-xs font-mono font-bold ${formStep === 3 ? 'text-[#3525cd] dark:text-[#818cf8]' : 'text-slate-400'}`}>
                  <span className="w-6 h-6 rounded-full bg-[#3525cd]/10 flex items-center justify-center">3</span>
                  <span>Entregáveis</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
                <div className={`flex items-center gap-2 text-xs font-mono font-bold ${formStep === 4 ? 'text-[#10b981]' : 'text-slate-400'}`}>
                  <span className="w-6 h-6 rounded-full bg-[#10b981]/10 flex items-center justify-center">4</span>
                  <span>Assinatura & Trava</span>
                </div>
              </div>

              {/* Form Content Steps */}
              <div className="p-6 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 space-y-4 shadow-sm">
                
                {formStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-black dark:text-white text-slate-900 border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                      Etapa 1: Informações do Cliente & Briefing
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-500 block mb-1">Nome da Empresa / Cliente:</label>
                        <input
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full text-xs p-2.5 rounded-xl dark:bg-[#080c14] bg-slate-100 border dark:border-[#131126] border-[#c7c4d8]/35 font-bold dark:text-white text-slate-900 focus:outline-none focus:border-[#3525cd]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-500 block mb-1">Cor Primária da Marca:</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={brandColor}
                            onChange={(e) => setBrandColor(e.target.value)}
                            className="w-9 h-9 rounded-xl border-0 cursor-pointer"
                          />
                          <span className="text-xs font-mono font-bold text-slate-400">{brandColor}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setFormStep(2)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#3525cd] to-[#4f46e5] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>Avançar para Ativos da Marca</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-black dark:text-white text-slate-900 border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                      Etapa 2: Coleta Guiada de Logos & Arquivos
                    </h3>
                    <div className="p-4 rounded-xl border-2 border-dashed dark:border-slate-800 border-slate-300 text-center space-y-2 dark:bg-[#080c14] bg-slate-50">
                      <Download className="w-8 h-8 text-[#3525cd] mx-auto" />
                      <p className="text-xs font-bold dark:text-white text-slate-900">Arraste a logo da sua empresa em SVG, PNG ou PDF Vector</p>
                      <span className="text-[10px] font-mono text-[#10b981] font-bold block">✓ Arquivo logo_nexus_master.svg anexado com sucesso (4.2 MB)</span>
                    </div>
                    <button
                      onClick={() => setFormStep(3)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#3525cd] to-[#4f46e5] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>Avançar para Aprovação de Entregáveis</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-black dark:text-white text-slate-900 border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                      Etapa 3: Definição dos Entregáveis & Escopo
                    </h3>
                    <div className="space-y-2">
                      {scopeItems.map((item) => (
                        <div key={item.id} className="p-3 rounded-xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-bold dark:text-white text-slate-900">{item.title}</span>
                            <p className="text-[10px] text-slate-500">{item.description}</p>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] font-mono font-bold text-[10px]">INCLUSO NO ESCOPO</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <label className="text-xs font-bold text-slate-500 block mb-1">Assinatura Digital do Responsável pelo Aceite:</label>
                      <input
                        type="text"
                        placeholder="Digite seu nome completo (Ex: Lucas Alcantara)"
                        value={digitalSignature}
                        onChange={(e) => setDigitalSignature(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl dark:bg-[#080c14] bg-slate-100 border dark:border-[#131126] border-[#c7c4d8]/35 font-bold dark:text-white text-slate-900 focus:outline-none focus:border-[#3525cd]"
                      />
                    </div>

                    <button
                      disabled={!digitalSignature.trim()}
                      onClick={handleLockScope}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#10b981] to-teal-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Assinar Contrato & Congelar Escopo Automaticamente (Scope Lockdown)</span>
                    </button>
                  </div>
                )}

                {formStep === 4 && (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center mx-auto border border-[#10b981]/30">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-black dark:text-white text-slate-900">Escopo Congelado e Trancado com Sucesso!</h3>
                      <p className="text-xs text-slate-500">Assinado por <span className="font-bold text-[#10b981]">{digitalSignature || 'Lucas Alcantara'}</span> • Trilha de Auditoria com Hash SHA-256 gerada.</p>
                    </div>

                    <div className="p-3 rounded-xl dark:bg-[#080c14] bg-slate-100 border dark:border-[#131126] border-[#c7c4d8]/35 text-[11px] font-mono text-left space-y-1 max-w-lg mx-auto">
                      <div className="text-slate-400 font-bold">CARIMBO DE AUDITORIA DE SEGURANÇA:</div>
                      <div className="text-[#10b981] font-bold">STATUS: LOCKDOWN_ACTIVE (RLS Enforced)</div>
                      <div className="text-slate-500 truncate">HASH SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
                    </div>

                    <button
                      onClick={() => setActiveTab('client-tracking')}
                      className="px-6 py-2.5 rounded-xl bg-[#3525cd] text-white font-extrabold text-xs inline-flex items-center gap-2"
                    >
                      <span>Ir para Portal de Acompanhamento do Cliente</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* MODULE 3: CLIENT TRACKING VIEW WITH DEVICE-LOCK & MASTER KEY */}
          {activeTab === 'client-tracking' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Progress View */}
              <div className="lg:col-span-8 space-y-4">
                
                {/* Device Locking Pill Header */}
                <div className="p-4 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 flex flex-wrap items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
                    <span className="font-black dark:text-white text-slate-900">Portal do Cliente • Projeto: <span className="text-[#4f46e5]">{clientName}</span></span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-[10px] font-mono font-bold">
                    <Lock className="w-3 h-3" />
                    <span>Dispositivo Blindado (Device-Lock: MacBook Pro M2 • IP 189.23.12.9)</span>
                  </div>
                </div>

                {/* Scope Lock Status Banner */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between gap-4 text-xs ${
                  isScopeLocked
                    ? 'bg-[#10b981]/10 border-[#10b981]/30 text-[#10b981]'
                    : 'bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#f59e0b]'
                }`}>
                  <div className="flex items-center gap-2.5">
                    {isScopeLocked ? <ShieldCheck className="w-5 h-5 shrink-0" /> : <AlertTriangle className="w-5 h-5 shrink-0" />}
                    <div>
                      <span className="font-bold block">
                        {isScopeLocked ? 'TRAVA DE ESCOPO ATIVA (Scope Lockdown Enforced)' : 'ESCOPO REABERTO VIA CHAVE MESTRE'}
                      </span>
                      <p className="text-[11px] opacity-90">
                        {isScopeLocked
                          ? 'O briefing está trancado contra alterações. Novas solicitações exigem o consumo de uma Chave Mestre de Segurança.'
                          : 'O formulário foi temporariamente liberado para aditivos autorizados. Ao concluir, o escopo será trancado novamente.'}
                      </p>
                    </div>
                  </div>

                  {!isScopeLocked && (
                    <button
                      onClick={() => setIsScopeLocked(true)}
                      className="shrink-0 px-3 py-1.5 rounded-xl bg-[#10b981] text-slate-950 font-black text-xs"
                    >
                      Retrancar Escopo
                    </button>
                  )}
                </div>

                {/* Milestones Approval Checklist */}
                <div className="p-5 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 space-y-3">
                  <h4 className="text-xs font-black dark:text-white text-slate-900 border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                    Aprovação de Fases e Entregáveis do Projeto (1-Clique)
                  </h4>

                  <div className="space-y-3">
                    {scopeItems.map((item) => (
                      <div key={item.id} className="p-3.5 rounded-xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold dark:text-white text-slate-900">{item.title}</span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                              item.status === 'Aprovado'
                                ? 'bg-[#10b981]/15 text-[#10b981]'
                                : 'bg-[#f59e0b]/15 text-[#f59e0b]'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500">{item.description}</p>
                        </div>

                        {item.status !== 'Aprovado' && (
                          <button
                            onClick={() => {
                              setScopeItems((prev) =>
                                prev.map((s) => (s.id === item.id ? { ...s, status: 'Aprovado' } : s))
                              );
                            }}
                            className="shrink-0 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#3525cd] to-[#4f46e5] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Aprovar Etapa</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Side Master Key Consumption Panel */}
              <div className="lg:col-span-4 space-y-4">
                
                {/* Master Keys Box */}
                <div className="p-4 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-2">
                    <span className="text-xs font-black dark:text-white text-slate-900 flex items-center gap-2">
                      <Key className="w-4 h-4 text-[#f59e0b]" />
                      Chaves Mestre de Segurança
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-0.5 rounded-full">
                      {masterKeys.length} Disponíveis
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Precisa reabrir o escopo para adicionar novos requisitos? Insira uma Chave Mestre de Segurança mascarada de uso atômico:
                  </p>

                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Ex: FP-88B2-Q4"
                      value={masterKeyInput}
                      onChange={(e) => setMasterKeyInput(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl dark:bg-[#080c14] bg-slate-100 border dark:border-[#131126] border-[#c7c4d8]/35 font-mono font-bold dark:text-white text-slate-900 focus:outline-none focus:border-[#3525cd] uppercase"
                    />
                    <button
                      onClick={handleConsumeMasterKey}
                      className="w-full py-2.5 rounded-xl bg-[#f59e0b] hover:bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                    >
                      <Key className="w-3.5 h-3.5" />
                      <span>Consumir Chave Mestre & Reabrir Escopo</span>
                    </button>
                  </div>

                  {masterKeyStatus && (
                    <div className="p-2.5 rounded-xl dark:bg-[#080c14] bg-slate-50 text-[11px] font-mono font-bold border dark:border-[#131126] border-[#c7c4d8]/35">
                      {masterKeyStatus}
                    </div>
                  )}

                  <div className="pt-2 border-t dark:border-[#131126] border-[#c7c4d8]/35">
                    <span className="text-[10px] font-mono text-slate-400 block mb-1">Chaves Disponíveis para Teste:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {masterKeys.map((k) => (
                        <button
                          key={k}
                          onClick={() => setMasterKeyInput(k)}
                          className="px-2 py-1 rounded-lg dark:bg-[#080c14] bg-slate-100 border dark:border-[#131126] border-[#c7c4d8]/35 text-[10px] font-mono font-bold text-[#4f46e5] hover:border-[#3525cd]"
                        >
                          {k}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* MODULE 4: AUDIT TRAIL SHA-256 */}
          {activeTab === 'audit-trail' && (
            <div className="space-y-4">
              
              {/* Audit Header Info */}
              <div className="p-4 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                <div>
                  <h3 className="text-sm font-black dark:text-white text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                    Trilha de Auditoria Criptográfica & Selo Público RLS
                  </h3>
                  <p className="text-[10px] font-mono text-slate-500">
                    Histórico imutável de eventos contratuais gerados com criptografia SHA-256 para proteção contra disputas.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                    Selo RLS Verificado ✓
                  </span>
                  <button
                    onClick={() => setShowPdfModal(true)}
                    className="px-3 py-1.5 rounded-xl bg-[#3525cd] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar Relatório em PDF</span>
                  </button>
                </div>
              </div>

              {/* Audit Log Table */}
              <div className="rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="dark:bg-[#080c14] bg-slate-100 border-b dark:border-[#131126] border-[#c7c4d8]/35 font-mono text-[10px] uppercase text-slate-400">
                        <th className="p-3">Data / Hora (UTC)</th>
                        <th className="p-3">Ação Auditável</th>
                        <th className="p-3">Ator / Responsável</th>
                        <th className="p-3">IP / Dispositivo</th>
                        <th className="p-3">Hash SHA-256</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-[#131126] divide-[#c7c4d8]/35 font-mono text-[11px]">
                      {auditEvents.map((evt) => (
                        <tr key={evt.id} className="hover:dark:bg-slate-800/40 hover:bg-slate-50 transition-colors">
                          <td className="p-3 text-slate-400 font-bold whitespace-nowrap">{evt.timestamp}</td>
                          <td className="p-3 font-bold text-[#4f46e5]">{evt.action}</td>
                          <td className="p-3 dark:text-slate-200 text-slate-800 font-medium whitespace-nowrap">{evt.actor}</td>
                          <td className="p-3 text-slate-500 whitespace-nowrap">{evt.ipAddress} • {evt.deviceInfo}</td>
                          <td className="p-3 text-[#10b981] font-bold truncate max-w-[140px]" title={evt.sha256Hash}>
                            {evt.sha256Hash.substring(0, 16)}...
                          </td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-md bg-[#10b981]/15 text-[#10b981] font-bold text-[9px]">
                              {evt.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Legal PDF Preview */}
        {showPdfModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 rounded-3xl max-w-xl w-full p-6 space-y-4 shadow-2xl relative">
              <div className="flex items-center justify-between border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#3525cd]" />
                  <h3 className="text-sm font-black dark:text-white text-slate-900">Termo de Encerramento e Aceite de Escopo (PDF Preview)</h3>
                </div>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="text-xs font-bold text-slate-400 hover:text-white"
                >
                  ✕ Fechar
                </button>
              </div>

              <div className="p-5 rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 space-y-3 text-xs dark:text-slate-200 text-slate-800 leading-relaxed font-sans">
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-2 font-mono text-[10px] text-slate-400">
                  <span>EMISSÃO: VELLOXIS SAAS ENGINE</span>
                  <span>CERTIFICADO ID: #VX-2026-9821</span>
                </div>
                <p className="font-bold">
                  DOCUMENTO FORMAL DE ACEITE E TERMO DE ENCERRAMENTO DE ETAPA
                </p>
                <p className="text-[11px] text-slate-400">
                  Atestamos que a empresa <strong className="text-white">{clientName}</strong> declarou e assinou o recebimento dos entregáveis contratados junto a <strong className="text-white">{agencyName}</strong>, atrelando a validade do aceite ao Hash criptográfico imutável SHA-256 abaixo.
                </p>
                <div className="p-2.5 rounded-xl bg-slate-950 text-[#10b981] font-mono text-[10px] break-all border border-slate-800">
                  HASH SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir</span>
                </button>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="px-4 py-2 rounded-xl bg-[#3525cd] text-white font-bold text-xs"
                >
                  Baixar Certificado PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer Banner Inside Mockup */}
        <div className="dark:bg-[#080c14] bg-slate-100 px-6 py-3.5 border-t dark:border-[#131126] border-[#c7c4d8]/35 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
            <span className="font-medium">Simulador interativo em tempo real do ecossistema Velloxis SaaS</span>
          </div>
          <a
            href="#calculator"
            className="text-[#3525cd] dark:text-[#818cf8] hover:underline font-bold flex items-center gap-1"
          >
            Simular economia contra Scope Creep na Calculadora de ROI
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
