import { FeatureDetail } from '../types';

export const featureDetails: FeatureDetail[] = [
  {
    id: 'whitelabel-dashboard',
    title: 'Web Designer & Developer Whitelabel Hub',
    subtitle: 'Centralized client project management featuring your web studio brand identity and legal protection.',
    badge: 'Module 01 • Web Studio Management',
    description: 'Customize with your web design agency logo, custom domain, and brand colors. Track website projects split into clear phases (Briefing, Figma UI Design, Frontend Dev, Staging Approval) and export certified sign-off PDFs.',
    bullets: [
      'Full whitelabel with custom logo, custom subdomain, and custom color palette',
      'Centralized web project pipeline grouped by approval stage',
      'One-click automated Website Handover & Final Acceptance Certificate',
      'Client access management with role-based security & RLS permissions'
    ],
    interfaceType: 'whitelabel-dashboard',
    statNumber: '100%',
    statText: 'Whitelabel branded for your Web Agency'
  },
  {
    id: 'onboarding-form',
    title: 'Autonomous Web Onboarding Form (FormSteps)',
    subtitle: 'Guided asset collection for logos, website copy, color palettes, and hosting credentials.',
    badge: 'Module 02 • Asset Collection & Scope Lock',
    description: 'Guide web design clients step-by-step through uploading SVG logos, typography specs, page copy, and CMS credentials on day one. Once signed, the website briefing freezes automatically.',
    bullets: [
      'Smart step-by-step form for vector logos, website content, and DNS/CMS credentials',
      'Automatic validation of image resolutions & vector file formats upon upload',
      'Automated Website Scope Lockdown right after client briefing signature',
      'Eliminates lost email chains and endless alignment calls'
    ],
    interfaceType: 'onboarding-form',
    statNumber: '85%',
    statText: 'Reduction in client asset collection delay'
  },
  {
    id: 'client-tracking',
    title: 'Client Portal with Device Locking & Scope Lock',
    subtitle: 'Single-device security binding with 1-click Figma design and staging site approval.',
    badge: 'Module 03 • Client Portal & Staging Shield',
    description: 'The web project portal binds exclusively to the first client device that accesses the secure link (/p/[accessToken]). Out-of-scope page or feature requests require a Master Key (e.g., FP-88B2-Q4) to unlock.',
    bullets: [
      'Device-Lock: Automatic binding preventing unauthorized staging link sharing',
      'One-click approval for website wireframes, Figma UI, and live staging builds',
      'Scope Lockdown barrier blocking unbudgeted page & feature additions',
      'Atomic consumption of Security Master Keys for paid scope change orders'
    ],
    interfaceType: 'client-tracking',
    statNumber: '$0',
    statText: 'Unpaid website revision losses'
  },
  {
    id: 'audit-trail',
    title: 'SHA-256 Cryptographic Audit Trail',
    subtitle: 'Immutable event log with certified public validation seals for legal contract protection.',
    badge: 'Module 04 • Legal Shield for Web Freelancers',
    description: 'Automated generation of audit logs containing timestamp, IP address, browser fingerprint, and SHA-256 Hashes for every web design approval, protecting freelancers against chargebacks and unpaid disputes.',
    bullets: [
      'Unique and tamper-evident SHA-256 cryptographic hash per approval decision',
      'Complete log of client IP, device ID, geo-location & UTC timestamp',
      'Public verification seal accessible via QR Code & database RLS',
      'Instant export of Certified Audit PDF reports for contracts & payment processors'
    ],
    interfaceType: 'audit-trail',
    statNumber: '100%',
    statText: 'Dispute & chargeback protection'
  }
];

export const painVsSolution = [
  {
    painTitle: 'Infinite Unpaid Website Revisions',
    painDesc: 'Web clients request extra pages, custom animations, and layout overhauls mid-build, claiming "this was already implied".',
    solutionTitle: 'Automated Scope Lockdown',
    solutionDesc: 'The website briefing and page deliverable list are locked upon signature. Adding new pages requires consuming a Master Key.'
  },
  {
    painTitle: 'Disorganized Asset Gathering & Missing Copy',
    painDesc: 'Frustrating email threads searching for vector logos, color codes, high-res images, and website text.',
    solutionTitle: 'Autonomous Onboarding Engine',
    solutionDesc: 'A guided step-by-step form (FormSteps) collects all website assets, copy, and credentials upfront on day one.'
  },
  {
    painTitle: 'Client Payment Disputes & Chargebacks',
    painDesc: 'Lack of formal digital sign-off records leads to arguments over website completion and withheld final payments.',
    solutionTitle: 'SHA-256 Cryptographic Audit Trail',
    solutionDesc: 'An immutable encrypted log of every design & staging approval with IP, timestamp, and SHA-256 hash valid as legal proof.'
  },
  {
    painTitle: 'Uncontrolled Staging Link Sharing',
    painDesc: 'Private website staging links are leaked to unvetted third parties or competitors before launch.',
    solutionTitle: 'Device-Lock Fingerprint Security',
    solutionDesc: 'The client portal locks exclusively to the first browser and device that accesses the client project link.'
  }
];
