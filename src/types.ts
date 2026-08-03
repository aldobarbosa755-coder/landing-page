export type TestimonialCategory = 'all' | 'agencies' | 'freelancers' | 'designers' | 'software';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  category: TestimonialCategory;
  rating: number;
  headline: string;
  fullText: string;
  metricLabel: string;
  metricValue: string;
  verifiedCustomer: boolean;
  videoDuration?: string;
  videoThumbnail?: string;
  tags: string[];
}

export interface PricingPlan {
  id: string;
  eyebrow?: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  priceDisplayMonthly?: string;
  priceDisplayAnnual?: string;
  periodText?: string;
  description: string;
  features: {
    name: string;
    included: boolean;
    highlighted?: boolean;
    tooltip?: string;
  }[];
  popular?: boolean;
  ctaText: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Scope Lockdown' | 'Security & SHA-256' | 'Device-Lock' | 'Pricing & Whitelabel' | 'Geral' | 'Trava de Escopo' | 'Segurança & SHA-256' | 'Preços & Whitelabel';
}

export interface FeatureDetail {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  bullets: string[];
  interfaceType: 'whitelabel-dashboard' | 'onboarding-form' | 'client-tracking' | 'audit-trail';
  statNumber: string;
  statText: string;
}

export interface LeadTrialData {
  fullName: string;
  email: string;
  whatsapp: string;
  companyName: string;
  teamSize: string;
  selectedPlan: string;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  action: string;
  actor: string;
  ipAddress: string;
  deviceInfo: string;
  sha256Hash: string;
  status: 'VERIFIED' | 'LOCKED' | 'CONSUMED';
}

export interface ProjectScopeItem {
  id: string;
  title: string;
  description: string;
  status: 'Pendente' | 'Em Produção' | 'Aprovado' | 'Trancado' | 'Pending' | 'In Production' | 'Approved' | 'Locked';
}
