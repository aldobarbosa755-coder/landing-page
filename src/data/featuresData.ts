import { FeatureDetail } from '../types';

export const featureDetails: FeatureDetail[] = [
  {
    id: 'whitelabel-dashboard',
    title: 'Painel do Freelancer e Agência Whitelabel',
    subtitle: 'Gestão centralizada de projetos com sua própria identidade visual e relatórios jurídicos.',
    badge: 'Módulo 01 • Gestão & Branding',
    description: 'Personalize com a marca e logotipo da sua agência. Acompanhe todos os projetos divididos por fases claras (Onboarding, Em Produção, Aprovado e Arquivado) e gere termos jurídicos de encerramento em PDF.',
    bullets: [
      'Whitelabel completo com logotipo, domínio personalizado e paleta de cores própria',
      'Visão Kanban centralizada de projetos por estágio de aprovação',
      'Emissão de Termo de Encerramento e Aceite Final com 1 clique',
      'Gerenciamento de membros de equipe com níveis de permissão RLS'
    ],
    interfaceType: 'whitelabel-dashboard',
    statNumber: '100%',
    statText: 'Whitelabel com sua própria marca'
  },
  {
    id: 'onboarding-form',
    title: 'Formulário de Onboarding Autónomo (FormSteps)',
    subtitle: 'Coleta estruturada e guiada de todos os ativos do cliente sem reuniões desnecessárias.',
    badge: 'Módulo 02 • Onboarding & Congelamento',
    description: 'Guie o cliente na entrega de logos, fontes, referências visuais e acessos. Assim que o cliente assina e envia, o escopo congela automaticamente contra edições acidentais.',
    bullets: [
      'Formulário passo a passo inteligente para arquivos, marcas e credenciais',
      'Validação de formatos e resoluções mínimas para ativos enviadas',
      'Congelamento Automático de Escopo pós-assinatura do briefing',
      'Zero e-mails perdidos e reuniões de alinhamento redundantes'
    ],
    interfaceType: 'onboarding-form',
    statNumber: '85%',
    statText: 'Redução no tempo de coleta de ativos'
  },
  {
    id: 'client-tracking',
    title: 'Portal de Acompanhamento com Device Locking',
    subtitle: 'Blindagem de dispositivo único e aprovação transparente de etapas em 1 clique.',
    badge: 'Módulo 03 • Portal do Cliente & Scope Lock',
    description: 'O portal do cliente atrela-se exclusivamente ao primeiro dispositivo que abre o link (/p/[accessToken]). Alterações fora do escopo trancado exigem a validação por Chave Mestre de Segurança (ex: FP-••••-Q4).',
    bullets: [
      'Device-Lock: Blindagem automática contra compartilhamento não autorizado do link',
      'Aprovação de entregáveis e marcos do projeto com apenas 1 clique',
      'Trava de Escopo (Scope Lockdown) com barreira para novos pedidos',
      'Consumo atômico de Chaves Mestre de Segurança mascaradas para reaberturas'
    ],
    interfaceType: 'client-tracking',
    statNumber: '0',
    statText: 'Alterações fora do escopo sem orçamento'
  },
  {
    id: 'audit-trail',
    title: 'Trilha de Auditoria Criptográfica SHA-256',
    subtitle: 'Registro imutável de eventos e selo de verificação pública para proteção jurídica.',
    badge: 'Módulo 04 • Blindagem Jurídica',
    description: 'Emissão automatizada de logs auditáveis contendo data, hora, IP, dispositivo e Hash SHA-256 para cada aceite ou alteração, gerando prova documental irrefutável contra disputas e chargebacks.',
    bullets: [
      'Geração de Hash SHA-256 único e inviolável para cada decisão e contrato',
      'Registro completo de IP, dispositivo, geolocalização aproximada e timestamp UTC',
      'Selo de Verificação Pública acessível via QR Code e RLS no banco',
      'Exportação instantânea do Certificado de Auditoria em PDF impresso'
    ],
    interfaceType: 'audit-trail',
    statNumber: '100%',
    statText: 'Proteção contra disputas e chargebacks'
  }
];

export const painVsSolution = [
  {
    painTitle: 'Fim do Scope Creep (Alterações Infinitas)',
    painDesc: 'Clientes pedem modificações ilimitadas no meio do projeto alegando que "isso já estava subentendido no valor cobrado".',
    solutionTitle: 'Trava de Escopo (Scope Lockdown)',
    solutionDesc: 'O briefing e entregáveis são formalmente aprovados e trancados. Qualquer reabertura exige o consumo de uma Chave Mestre de Segurança.'
  },
  {
    painTitle: 'Reuniões e Coleta de Arquivos Desorganizada',
    painDesc: 'Troca infindável de mensagens e e-mails buscando logos em alta resolução, paletas de cores, senhas e textos.',
    solutionTitle: 'Onboarding Autônomo e Estruturado',
    solutionDesc: 'Um formulário inteligente (FormSteps) guia o cliente na entrega de todos os ativos necessários no primeiro dia de projeto.'
  },
  {
    painTitle: 'Disputas, Chargebacks e Negativa de Entrega',
    painDesc: 'Falta de registros formais de aceite geram questionamentos sobre prazos e alegações contratuais infundadas.',
    solutionTitle: 'Trilha de Auditoria com Hash SHA-256',
    solutionDesc: 'Log imutável criptografado de cada decisão com IP, timestamp e hash SHA-256 para impressão ou PDF com validade de prova.'
  },
  {
    painTitle: 'Links de Acompanhamento Vazados',
    painDesc: 'Links privados de acompanhamento e homologação compartilhados sem controle com terceiros e concorrentes.',
    solutionTitle: 'Blindagem de Dispositivo Único (Device Locking)',
    solutionDesc: 'O portal de acompanhamento é atrelado exclusivamente ao primeiro dispositivo e navegador que abriu a URL do projeto.'
  }
];
