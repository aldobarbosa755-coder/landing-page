import { FeatureDetail } from '../types';

export const featureDetails: FeatureDetail[] = [
  {
    id: 'whitelabel-dashboard',
    title: 'Freelancer & Whitelabel Agency Dashboard',
    subtitle: 'Centralized project management featuring your own brand identity and legal compliance reporting.',
    badge: 'Module 01 • Management & Branding',
    description: 'Customize with your agency logo, domain, and colors. Track projects split into clear phases (Onboarding, In Production, Approved, Archived) and generate legal sign-off certificates in PDF.',
    bullets: [
      'Full whitelabel with custom logo, custom domain, and custom color palette',
      'Centralized Kanban pipeline grouped by approval stage',
      'One-click automated Project Completion & Final Acceptance Certificate',
      'Team member management with role-based security & RLS permissions'
    ],
    interfaceType: 'whitelabel-dashboard',
    statNumber: '100%',
    statText: 'Whitelabel with your own custom branding'
  },
  {
    id: 'onboarding-form',
    title: 'Autonomous Onboarding Form (FormSteps)',
    subtitle: 'Guided asset collection collecting client logos, brand specs, and credentials without meetings.',
    badge: 'Module 02 • Onboarding & Scope Freezing',
    description: 'Guide clients step-by-step through submitting logos, fonts, visual references, and credentials. Once signed and submitted, project scope freezes automatically against accidental modifications.',
    bullets: [
      'Smart step-by-step form for assets, branding, and access credentials',
      'Validation of image resolution & vector file formats upon upload',
      'Automated Scope Lockdown right after client briefing signature',
      'Eliminates lost emails and redundant status alignment calls'
    ],
    interfaceType: 'onboarding-form',
    statNumber: '85%',
    statText: 'Reduction in asset collection time'
  },
  {
    id: 'client-tracking',
    title: 'Client Portal with Device Locking & Scope Lock',
    subtitle: 'Single-device security binding with 1-click transparent milestone sign-off.',
    badge: 'Module 03 • Client Portal & Scope Lock',
    description: 'The client portal binds exclusively to the first device that accesses the secure link (/p/[accessToken]). Out-of-scope requests require validation via an Atomic Security Master Key (e.g. FP-••••-Q4).',
    bullets: [
      'Device-Lock: Automatic binding preventing unauthorized link sharing',
      'One-click approval for project deliverables and milestones',
      'Scope Lockdown barrier blocking unbudgeted feature requests',
      'Atomic consumption of masked Security Master Keys for scope re-openings'
    ],
    interfaceType: 'client-tracking',
    statNumber: '$0',
    statText: 'Unpaid scope creep feature losses'
  },
  {
    id: 'audit-trail',
    title: 'SHA-256 Cryptographic Audit Trail',
    subtitle: 'Immutable event log with certified public validation seals for legal protection.',
    badge: 'Module 04 • Legal Shield',
    description: 'Automated generation of audit logs containing timestamp, IP address, device specs, and SHA-256 Hashes for every approval or modification, creating indisputable documentary proof against scope disputes.',
    bullets: [
      'Unique and tamper-evident SHA-256 cryptographic hash per decision',
      'Complete log of IP, device ID, approximate geo-location & UTC timestamp',
      'Public verification seal accessible via QR Code & database RLS',
      'Instant export of Certified Audit PDF reports for contracts'
    ],
    interfaceType: 'audit-trail',
    statNumber: '100%',
    statText: 'Protection against disputes and payment chargebacks'
  }
];

export const painVsSolution = [
  {
    painTitle: 'Infinite Unpaid Scope Creep',
    painDesc: 'Clients request unlimited revisions mid-project, claiming "this was already implied in the original quote".',
    solutionTitle: 'Automated Scope Lockdown',
    solutionDesc: 'The briefing and deliverables are formally approved and locked. Any scope re-opening requires consuming a Master Key.'
  },
  {
    painTitle: 'Disorganized Asset Collection & Endless Meetings',
    painDesc: 'Frustrating email threads searching for high-resolution logos, color palettes, credentials, and copy.',
    solutionTitle: 'Autonomous Onboarding Engine',
    solutionDesc: 'A smart step-by-step form (FormSteps) guides the client through submitting all required assets on day one.'
  },
  {
    painTitle: 'Project Disputes & Chargeback Claims',
    painDesc: 'Lack of formal sign-off records leads to arguments over deadlines, deliverables, and unfounded claims.',
    solutionTitle: 'SHA-256 Cryptographic Audit Trail',
    solutionDesc: 'An immutable encrypted log of every decision with IP, timestamp, and SHA-256 hash valid as certified legal evidence.'
  },
  {
    painTitle: 'Leaked Progress & Homologation Links',
    painDesc: 'Private project review links are forwarded without control to third parties or competitors.',
    solutionTitle: 'Device-Lock Fingerprint Security',
    solutionDesc: 'The client portal locks exclusively to the first browser and device that opens the project URL.'
  }
];
