import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveDashboardMockup } from './components/InteractiveDashboardMockup';
import { SocialProofLogos } from './components/SocialProofLogos';
import { PainVsSolution } from './components/PainVsSolution';
import { FeatureTabs } from './components/FeatureTabs';
import { RoiCalculator } from './components/RoiCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ConversionCtaBanner } from './components/ConversionCtaBanner';
import { TrialModal } from './components/TrialModal';
import { FloatingBar } from './components/FloatingBar';
import { Footer } from './components/Footer';
import { ChangelogDrawer } from './components/ChangelogDrawer';
import { PricingPage } from './components/PricingPage';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'all' | 'privacy' | 'terms' | 'refund'>('all');
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  const handleOpenLegal = (tab: 'all' | 'privacy' | 'terms' | 'refund' = 'all') => {
    setLegalTab(tab);
    setIsLegalModalOpen(true);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTrial = (plan: string = 'pro') => {
    window.open('https://app.aldolima.dev.br', '_blank', 'noopener,noreferrer');
  };

  const handleCloseTrial = () => {
    setIsTrialModalOpen(false);
  };

  if (currentPath === '/pricing' || currentPath === '/pricing/') {
    return (
      <PricingPage
        onNavigateHome={() => navigateTo('/')}
        onOpenChangelog={() => setIsChangelogOpen(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white antialiased">
      {/* Navigation Header */}
      <Header onOpenTrial={handleOpenTrial} />

      {/* Main Content */}
      <main>
        {/* Conversion Hero */}
        <Hero
          onOpenTrial={handleOpenTrial}
          onOpenVideoModal={() => {
            const testimonialsEl = document.getElementById('testimonials');
            testimonialsEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Live Interactive Product Playground */}
        <InteractiveDashboardMockup />

        {/* Social Proof & Trusted Logos */}
        <SocialProofLogos />

        {/* Pain vs Solution Comparison */}
        <PainVsSolution onOpenTrial={() => handleOpenTrial('pro')} />

        {/* Feature Explorer Tabs */}
        <FeatureTabs onOpenTrial={() => handleOpenTrial('pro')} />

        {/* Interactive ROI Calculator */}
        <RoiCalculator onOpenTrial={() => handleOpenTrial('pro')} />

        {/* Real Customer Testimonials (Crucial User Request) */}
        <TestimonialsSection onOpenTrial={() => handleOpenTrial('pro')} />

        {/* Pricing Tiers & Guarantees */}
        <PricingSection onOpenTrial={handleOpenTrial} />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Bottom Conversion Banner */}
        <ConversionCtaBanner onOpenTrial={handleOpenTrial} />
      </main>

      {/* Footer */}
      <Footer
        onOpenChangelog={() => setIsChangelogOpen(true)}
        onOpenLegal={handleOpenLegal}
      />

      {/* Floating Sticky Conversion Bar on Scroll */}
      <FloatingBar onOpenTrial={() => handleOpenTrial('pro')} />

      {/* Free Trial Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrial}
        defaultPlan={selectedPlan}
      />

      {/* Interactive System Changelog & Release Notes Drawer */}
      <ChangelogDrawer
        isOpen={isChangelogOpen}
        onClose={() => setIsChangelogOpen(false)}
      />

      {/* Legal & Policy Modal (Privacy Policy, Terms, Refund Policy) */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        defaultTab={legalTab}
      />
    </div>
  );
}
