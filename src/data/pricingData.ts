import { PricingPlan, FaqItem } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    eyebrow: 'STARTER',
    name: 'Start Plan',
    tagline: 'For freelancers & developers getting started or testing the system.',
    monthlyPrice: 0,
    annualPrice: 0,
    priceDisplayMonthly: '$0.00',
    priceDisplayAnnual: '$0.00',
    periodText: '/forever',
    description: 'Essential access with Scope Lockdown and basic cryptographic sign-off.',
    features: [
      { name: '1 active project at a time', included: true },
      { name: 'Limit of 3 sign-off PDFs', included: true },
      { name: 'Smart Legal Scope Shielding', included: true },
      { name: 'Basic SHA-256 Cryptographic Seal', included: true }
    ],
    ctaText: 'Activate Free Plan',
    badge: 'Free Forever'
  },
  {
    id: 'pro',
    eyebrow: 'OPERATIONS',
    name: 'Freelancer Core (Pro)',
    tagline: 'For freelancers, studios, and agencies operating at scale.',
    monthlyPrice: 29,
    annualPrice: 23.20,
    priceDisplayMonthly: '$29.00',
    priceDisplayAnnual: '$23.20',
    periodText: '/month',
    description: 'Complete Whitelabel with your agency brand, unlimited projects, and AI contract audits.',
    features: [
      { name: 'Unlimited Projects & Clients', included: true, highlighted: true },
      { name: 'Unlimited Audit PDF Generation', included: true, highlighted: true },
      { name: 'Custom Brand Whitelabeling', included: true, highlighted: true },
      { name: 'AI Contract Analysis (3/month)', included: true },
      { name: 'Priority Email Support (24h)', included: true }
    ],
    popular: true,
    ctaText: 'Subscribe Freelancer Core ⚡',
    badge: 'MOST POPULAR 🔥'
  },
  {
    id: 'enterprise',
    eyebrow: 'AUTHORITY & SCALE',
    name: 'Compliance Suite',
    tagline: 'For software houses, agencies, and high-volume operations.',
    monthlyPrice: 79,
    annualPrice: 63.20,
    priceDisplayMonthly: '$79.00',
    priceDisplayAnnual: '$63.20',
    periodText: '/month',
    description: 'Unlimited AI contract audits, verified security badges, and dedicated VIP support.',
    features: [
      { name: 'All PRO Plan features included', included: true, highlighted: true },
      { name: 'AI Contract Analysis (UNLIMITED)', included: true, highlighted: true },
      { name: 'Detailed Risk Reports (PDF)', included: true, highlighted: true },
      { name: 'Verified Agency Member Badge', included: true },
      { name: 'Direct Support via VIP Channel', included: true }
    ],
    ctaText: 'Get Compliance Suite',
    badge: 'BEST VALUE 💎'
  }
];

export const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is Scope Lockdown and how does it protect my work?',
    answer: 'Scope Lockdown is a contractual protection mechanism that freezes the project briefing and deliverables list as soon as the client completes onboarding. From that moment on, no modifications can be made unilaterally, ensuring unbudgeted feature requests are never hidden under the claim of "it was already included".',
    category: 'Scope Lockdown'
  },
  {
    id: 'faq-2',
    question: 'What if the client actually needs to change something after scope is locked?',
    answer: 'No problem! Velloxis includes an Atomic Master Security Key system (e.g., FP-••••-Q4). The service provider or agency can issue a single-use masked key to the client to temporarily unlock the form and approve a paid scope addition backed by a new SHA-256 hash.',
    category: 'Scope Lockdown'
  },
  {
    id: 'faq-3',
    question: 'Can I set maximum limits for revisions and change requests in advance?',
    answer: 'Yes! You can define clear parameters during project creation, such as "up to 2 revision rounds per phase". Once reached, the system automatically prompts the client to generate an additional work order before submitting new requests.',
    category: 'Scope Lockdown'
  },
  {
    id: 'faq-4',
    question: 'How does Device Locking protect project preview links?',
    answer: 'When a secure client portal link (/p/[accessToken]) is created, Velloxis registers the browser fingerprint and device of the initial session. If the link is forwarded or leaked to unauthorized third parties, access is blocked and your agency is instantly notified.',
    category: 'Device-Lock'
  },
  {
    id: 'faq-5',
    question: 'What happens if a client tries to open a preview link on a different browser or phone?',
    answer: 'The system detects the unrecognized device signature and requires authorization or blocks access according to your security settings. This prevents competitors or unauthorized stakeholders from reviewing unreleased staging work.',
    category: 'Device-Lock'
  },
  {
    id: 'faq-6',
    question: 'Are SHA-256 Cryptographic Audit Trails legally valid?',
    answer: 'Yes! Velloxis Audit Trails capture immutable UTC timestamps, IP addresses, browser device specs, and generate a tamper-proof SHA-256 cryptographic hash for every sign-off and approval. This provides indisputable documentary evidence to protect against scope disputes and chargebacks.',
    category: 'Security & SHA-256'
  },
  {
    id: 'faq-7',
    question: 'Where is the cryptographic proof stored and how can it be verified?',
    answer: 'Every approval generates a downloadable, certified PDF Audit Certificate containing the raw SHA-256 hash string, server timestamps, and digital fingerprint. Anyone can verify the hash integrity on public verification portals or in court.',
    category: 'Security & SHA-256'
  },
  {
    id: 'faq-8',
    question: 'Does my client need to create an account or install an app?',
    answer: 'No! The client experience is 100% frictionless. They access your custom URL directly from their browser on mobile or desktop, complete the onboarding form, and sign digitally in under 3 minutes.',
    category: 'General'
  },
  {
    id: 'faq-9',
    question: 'Can I import my existing contract templates or onboarding questionnaires?',
    answer: 'Absolutely. Velloxis provides pre-built templates for Web Design, UI/UX, Custom Software Development, and Branding projects, but you can fully customize every question, field, and agreement clause.',
    category: 'General'
  },
  {
    id: 'faq-10',
    question: 'How does Whitelabel customization work?',
    answer: 'On Pro and Enterprise plans, you can completely remove Velloxis branding and insert your agency logo, brand colors, custom email signatures, and even run the portal on your own custom domain (e.g., portal.youragency.com).',
    category: 'Pricing & Whitelabel'
  },
  {
    id: 'faq-11',
    question: 'Can I start on the free plan and upgrade later as my agency grows?',
    answer: 'Yes! The Starter plan is 100% free forever for up to 1 active project and 3 PDF certificates. Whenever you need unlimited projects or full agency whitelabeling, you can upgrade instantly in 1 click.',
    category: 'Pricing & Whitelabel'
  },
  {
    id: 'faq-12',
    question: 'Is there any long-term lock-in or cancellation fee?',
    answer: 'None at all. All monthly plans are pay-as-you-go with no commitments. Annual plans come with a 20% discount and a 30-day money-back guarantee.',
    category: 'Pricing & Whitelabel'
  }
];
