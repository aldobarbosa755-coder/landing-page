import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, Sun, Moon, Key, Sparkles } from 'lucide-react';
import { VelloxisLogo } from './VelloxisLogo';

interface HeaderProps {
  onOpenTrial: (plan?: string) => void;
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrial, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Live Simulator', href: '#demo' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'Use Cases', href: '#testimonials' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      if (onNavigate) {
        onNavigate(href);
      } else {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new Event('popstate'));
      }
      setMobileMenuOpen(false);
    } else if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        e.preventDefault();
        if (onNavigate) {
          onNavigate('/' + href);
        } else {
          window.history.pushState({}, '', '/' + href);
          window.dispatchEvent(new Event('popstate'));
        }
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 dark:bg-[#080c14]/90 bg-white/90 backdrop-blur-md border-b border-[#131126] dark:border-[#131126] border-[#c7c4d8]/35 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center group shrink-0"
          >
            <VelloxisLogo size={36} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-slate-900/80 dark:bg-[#0f172a]/90 bg-slate-100/90 p-1.5 rounded-full border border-[#131126] dark:border-[#131126] border-[#c7c4d8]/35 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs lg:text-sm font-bold whitespace-nowrap dark:text-slate-300 text-slate-700 hover:text-[#4f46e5] dark:hover:text-white px-3 lg:px-4 py-1.5 rounded-full hover:bg-[#3525cd]/15 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl dark:bg-[#0f172a] bg-slate-100 dark:text-slate-300 text-slate-700 hover:text-[#3525cd] dark:hover:text-white border border-[#131126] dark:border-[#131126] border-[#c7c4d8]/35 transition-colors cursor-pointer"
              title="Toggle Light/Dark Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#3525cd]" />}
            </button>

            <a
              href="https://app.aldolima.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold whitespace-nowrap dark:text-slate-300 text-slate-700 hover:text-[#3525cd] dark:hover:text-white px-3 py-2 transition-colors cursor-pointer"
            >
              Log In
            </a>
            <button
              onClick={() => onOpenTrial('pro')}
              className="cta-primary-btn cta-shimmer text-xs font-black px-4 lg:px-5 py-2.5 whitespace-nowrap shadow-lg shadow-[#3525cd]/40 border border-[#4f46e5]/50 group cursor-pointer"
            >
              <Key className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform duration-200" />
              <span>Create Free Account</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#3525cd]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080c14]/95 dark:bg-[#080c14]/95 bg-white/95 backdrop-blur-xl border-b border-[#131126] px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold dark:text-slate-200 text-slate-800 hover:text-[#4f46e5] px-3 py-2.5 rounded-xl hover:bg-[#3525cd]/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#131126] flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-1 py-1">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span>Scope Protection • 14 days free, no credit card required</span>
            </div>
            <a
              href="https://app.aldolima.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-sm font-extrabold text-white py-3 rounded-2xl bg-gradient-to-r from-[#3525cd] to-[#4f46e5] shadow-lg shadow-[#3525cd]/30"
            >
              <Key className="w-4 h-4 text-amber-300" />
              <span>Launch Velloxis App</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
