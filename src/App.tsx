import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
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
import { PricingPage } from './components/PricingPage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { RefundsPage } from './components/RefundsPage';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'all' | 'privacy' | 'terms' | 'refund'>('all');
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLegal = (tab: 'all' | 'privacy' | 'terms' | 'refund' = 'all') => {
    if (tab === 'terms') {
      navigateTo('/terms');
    } else if (tab === 'privacy') {
      navigateTo('/privacy');
    } else if (tab === 'refund') {
      navigateTo('/refunds');
    } else {
      setLegalTab(tab);
      setIsLegalModalOpen(true);
    }
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenTrial = (plan: string = 'pro') => {
    window.open('https://app.aldolima.dev.br', '_blank', 'noopener,noreferrer');
  };

  const handleCloseTrial = () => {
    setIsTrialModalOpen(false);
  };

  const cleanPath = currentPath.replace(/\/$/, '');

  const renderCurrentView = () => {
    if (cleanPath === '/pricing') {
      return (
        <PricingPage
          onNavigateHome={() => navigateTo('/')}
          onNavigate={navigateTo}
        />
      );
    }

    if (cleanPath === '/terms') {
      return (
        <TermsPage
          onNavigate={navigateTo}
          onOpenTrial={() => handleOpenTrial('pro')}
        />
      );
    }

    if (cleanPath === '/privacy') {
      return (
        <PrivacyPage
          onNavigate={navigateTo}
          onOpenTrial={() => handleOpenTrial('pro')}
        />
      );
    }

    if (cleanPath === '/refunds' || cleanPath === '/refund') {
      return (
        <RefundsPage
          onNavigate={navigateTo}
          onOpenTrial={() => handleOpenTrial('pro')}
        />
      );
    }

    return (
      <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white antialiased">
        {/* Navigation Header */}
        <Header onOpenTrial={handleOpenTrial} onNavigate={navigateTo} />

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

          {/* Social Proof & Trusted Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SocialProofLogos />
          </motion.div>

          {/* Pain vs Solution Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <PainVsSolution onOpenTrial={() => handleOpenTrial('pro')} />
          </motion.div>

          {/* Feature Explorer Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <FeatureTabs onOpenTrial={() => handleOpenTrial('pro')} />
          </motion.div>

          {/* Interactive ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <RoiCalculator onOpenTrial={(plan) => handleOpenTrial(plan || 'pro')} />
          </motion.div>

          {/* Real Customer Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <TestimonialsSection onOpenTrial={() => handleOpenTrial('pro')} />
          </motion.div>

          {/* Pricing Tiers & Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <PricingSection onOpenTrial={handleOpenTrial} />
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <FaqSection />
          </motion.div>

          {/* Bottom Conversion Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ConversionCtaBanner onOpenTrial={handleOpenTrial} />
          </motion.div>
        </main>

        {/* Footer */}
        <Footer
          onOpenLegal={handleOpenLegal}
        />

        {/* Floating Sticky Conversion Bar on Scroll */}
        <FloatingBar onOpenTrial={() => handleOpenTrial('pro')} />
      </div>
    );
  };

  return (
    <div key={cleanPath || 'home'} className="animate-page-fade">
      {renderCurrentView()}

      {/* Modals & Drawers */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrial}
        defaultPlan={selectedPlan}
      />

      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        defaultTab={legalTab}
      />
    </div>
  );
}
