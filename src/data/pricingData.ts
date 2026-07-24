import { PricingPlan, FaqItem } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    eyebrow: 'STARTER',
    name: 'Start Plan',
    tagline: 'Para freelancers e desenvolvedores em início de operação ou teste.',
    monthlyPrice: 0,
    annualPrice: 0,
    priceDisplayMonthly: 'US$ 0.00',
    priceDisplayAnnual: 'US$ 0.00',
    periodText: '/free',
    description: 'Acesso essencial com trava de escopo e carimbo criptográfico básico.',
    features: [
      { name: '1 active project at a time', included: true },
      { name: 'Limit of 3 delivery PDFs', included: true },
      { name: 'Smart Legal Shielding', included: true },
      { name: 'Basic Cryptographic Seal', included: true }
    ],
    ctaText: 'Activate Start Plan',
    badge: 'Grátis'
  },
  {
    id: 'pro',
    eyebrow: 'OPERATIONS',
    name: 'Freelancer Core (Pro)',
    tagline: 'Para freelancers, estúdios e agências operando em escala.',
    monthlyPrice: 29,
    annualPrice: 29,
    priceDisplayMonthly: 'US$ 29.00',
    priceDisplayAnnual: 'US$ 29.00',
    periodText: '/month',
    description: 'Whitelabel completo com sua marca, projetos ilimitados e análise de contratos por IA.',
    features: [
      { name: 'Unlimited Projects & Clients', included: true, highlighted: true },
      { name: 'Unlimited PDF Generation', included: true, highlighted: true },
      { name: 'Custom Brand Whitelabel', included: true, highlighted: true },
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
    tagline: 'Para software houses, agências e alta autoridade comercial.',
    monthlyPrice: 79,
    annualPrice: 79,
    priceDisplayMonthly: 'US$ 79.00',
    priceDisplayAnnual: 'US$ 79.00',
    periodText: '/month',
    description: 'Auditoria contratual por IA ilimitada, selos verificados e canal VIP dedicado.',
    features: [
      { name: 'All PRO Plan features', included: true, highlighted: true },
      { name: 'AI Contract Analysis (UNLIMITED)', included: true, highlighted: true },
      { name: 'Detailed Risk Reports (PDF)', included: true, highlighted: true },
      { name: 'Verified Member Badge', included: true },
      { name: 'Direct Support via VIP Channel', included: true }
    ],
    ctaText: 'Manage Compliance Suite',
    badge: 'BEST VALUE 💎'
  }
];

export const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O que é e como funciona a Trava de Escopo (Scope Lockdown)?',
    answer: 'A Trava de Escopo do Velloxis é um mecanismo de proteção contratual que congela o briefing e a lista de entregáveis assim que o cliente conclui o envio no formulário de onboarding. A partir desse momento, nenhuma alteração pode ser feita unilateralmente, garantindo que novos pedidos não fiquem escondidos sob a justificativa de "já estava incluso no preço".',
    category: 'Trava de Escopo'
  },
  {
    id: 'faq-2',
    question: 'E se o cliente realmente precisar alterar algo após o escopo trancado?',
    answer: 'Sem problemas! O Velloxis inclui o sistema de Chave Mestre de Segurança (Master Key - ex: FP-••••-Q4). O prestador de serviço ou agência pode fornecer uma chave mascarada de uso único ao cliente para reabrir temporariamente o formulário e aprovar o aditivo orçamentário com novo Hash SHA-256.',
    category: 'Trava de Escopo'
  },
  {
    id: 'faq-3',
    question: 'Como a Blindagem de Dispositivo (Device Locking) protege o projeto?',
    answer: 'Quando o link seguro do portal do cliente (/p/[accessToken]) é gerado, o Velloxis registra a impressão digital do primeiro navegador e dispositivo que acessou a URL. Se o link for repassado ou vazado para terceiros não autorizados, o sistema bloqueia o acesso e notifica a agência instantaneamente.',
    category: 'Device-Lock'
  },
  {
    id: 'faq-4',
    question: 'A Trilha de Auditoria com Hash SHA-256 tem validade jurídica no Brasil?',
    answer: 'Sim! A Trilha de Auditoria do Velloxis registra carimbo de data/hora imutável (timestamp), endereço IP, user-agent do dispositivo e gera um Hash criptográfico SHA-256 para cada aceite ou aprovação. Esses dados constituem uma prova documental eletrônica forte (Art. 10, §2º da MP 2.200-2/2001 e Código de Processo Civil) para resguardo contra contestações e chargebacks.',
    category: 'Segurança & SHA-256'
  },
  {
    id: 'faq-5',
    question: 'Meu cliente precisa criar uma conta ou baixar algum aplicativo?',
    answer: 'Não! A experiência do seu cliente é 100% fluida e sem fricção. Ele acessa a URL personalizada pelo próprio navegador do celular ou computador, preenche o formulário de onboarding e assina digitalmente em menos de 3 minutos.',
    category: 'Geral'
  },
  {
    id: 'faq-6',
    question: 'Como funciona a personalização Whitelabel?',
    answer: 'Nos planos Pro e Enterprise, você pode remover totalmente a marca do Velloxis e inserir o logotipo da sua agência, cores da sua marca e até configurar o portal para rodar no seu próprio subdomínio (ex: portal.suaagencia.com.br).',
    category: 'Preços & Whitelabel'
  }
];
