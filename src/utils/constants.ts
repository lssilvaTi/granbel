/**
 * Production site URL — MUST match `site` in `astro.config.mjs` (canonical URLs, sitemap, OG).
 * Troque pelo domínio definitivo do cliente antes do go-live.
 */
export const SITE_URL = 'https://www.granbeltransportes.com.br' as const;

/** Nome visível da marca. */
export const SITE_NAME = 'Granbel Transportes e Mudanças' as const;

/** Linha curta para rodapé e meta genérica. */
export const SITE_TAGLINE =
  'Transporte seguro, mudanças planejadas e logística com a cara da sua empresa — do primeiro contato à entrega.' as const;

/** Logo colorido — JSON-LD / referência principal. */
export const LOGO_COLOR_PATH = '/assets/logos/LOGO_GRANBEL_PRINCIPAL.png' as const;
/** Logo branco — header e rodapé (fundo azul). */
export const LOGO_WHITE_PATH = '/assets/logos/LOGO_GRANBEL_BRANCO.png' as const;

export const LOGO_PATH = LOGO_COLOR_PATH;

export const DEFAULT_OG_IMAGE = '/og-default.svg' as const;

/** Imagens Unsplash — hero carousel (3ª/4ª: URLs antigas do projeto retornam 404 no CDN). */
export const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80',
] as const;

/** Números do banner (home) — animação de contagem no Hero. Ajuste valores com o cliente. */
export const HERO_STATS = [
  { value: 20, suffix: '+', label: 'Anos de tradição', icon: 'fa-truck-moving' },
  { value: 150_000, suffix: '+', label: 'Mudanças realizadas', icon: 'fa-boxes-stacked' },
  { value: 2500, suffix: '+', label: 'Cidades atendidas', icon: 'fa-route' },
  { value: 95, suffix: '%', label: 'Clientes satisfeitos', icon: 'fa-star' },
] as const;

/** Fotos de apoio (URLs remotas) — substitua por imagens da Granbel quando houver. */
export const PLACEHOLDER_IMAGES = {
  heroSlide: HERO_SLIDES[0],
  portrait:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
} as const;

/** Blocos detalhados da página Serviços (imagens próprias por serviço). */
export const SERVICES_PAGE_BLOCKS = [
  {
    id: 'mudancas-residenciais',
    title: 'Mudanças residenciais',
    text: 'Embalagem organizada, desmontagem e montagem de móveis, proteção de vidros e objetos frágeis, e equipe treinada para tratar sua casa com o mesmo cuidado que você. Planejamos rota, equipe e horários para o dia da mudança ser o mais tranquilo possível.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Caixas e preparação para mudança residencial',
  },
  {
    id: 'mudancas-corporativas',
    title: 'Mudanças corporativas',
    text: 'Mudança de escritórios, estações de trabalho e arquivos com cronograma alinhado ao seu time. Minimizamos paradas: rotulagem, inventário e priorização do que precisa estar pronto no primeiro dia útil na nova sede.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ambiente corporativo e logística de escritório',
  },
  {
    id: 'transporte-cargas',
    title: 'Transporte de cargas e fretes',
    text: 'Fretes urbanos e interestaduais com veículos adequados ao volume e à fragilidade da carga. Ideal para lojas online, indústria leve, distribuição e entregas programadas — com acompanhamento da carga e comunicação clara em cada etapa.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Veículo de entrega em rota — fretes e transporte de cargas',
  },
  {
    id: 'logistica-armazenagem',
    title: 'Logística e armazenagem',
    text: 'Guarda temporária entre mudanças, estoque sob demanda e transferência rápida de mercadoria entre veículos quando você precisa ganhar tempo. Estrutura pensada para acesso seguro, controle de entradas e saídas e flexibilidade de prazo.',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Armazém organizado com caixas e prateleiras',
  },
] as const;

export const SERVICES = [
  {
    id: 'mudancas',
    title: 'Mudanças completas',
    description:
      'Residencial e corporativo: equipe, veículos e materiais certos para cada tipo de bem — do sofá ao arquivo da empresa.',
    icon: 'fa-house-chimney',
  },
  {
    id: 'embalagem',
    title: 'Embalagem e montagem',
    description:
      'Técnicas de proteção, caixas numeradas e desmontagem/montagem de móveis para você ganhar tempo e evitar imprevistos.',
    icon: 'fa-box-open',
  },
  {
    id: 'fretes',
    title: 'Fretes e cargas',
    description:
      'Transporte pontual de volumes médios e grandes, com agendamento e acompanhamento do frete do início ao fim.',
    icon: 'fa-truck-moving',
  },
  {
    id: 'cobertura',
    title: 'Cobertura regional e nacional',
    description:
      'Rotas locais e viagens longas com planejamento de paradas, documentação e prazos alinhados ao seu negócio.',
    icon: 'fa-route',
  },
] as const;

export const DIFFERENTIALS = [
  { title: 'Equipe uniformizada e treinada em manuseio seguro', icon: 'fa-people-carry-box' },
  { title: 'Seguro e procedimentos claros para imprevistos', icon: 'fa-shield-halved' },
  { title: 'Orçamento detalhado — sem surpresas na hora do serviço', icon: 'fa-file-invoice-dollar' },
  { title: 'Pontualidade e comunicação por WhatsApp em tempo real', icon: 'fa-comments' },
  { title: 'Materiais de embalagem de qualidade (fita, papelão, cantoneiras)', icon: 'fa-boxes-stacked' },
  { title: 'Veículos revisados e adequados ao volume da sua mudança', icon: 'fa-truck-front' },
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Orçamento sem compromisso',
    description:
      'Envie fotos, lista de cômodos ou agende uma visita. Respondemos com valores e opções de data.',
  },
  {
    number: 2,
    title: 'Planejamento do dia D',
    description:
      'Definimos horários, equipe, veículo e lista do que precisa de cuidado extra (obras de arte, pianos, equipamentos de informática).',
  },
  {
    number: 3,
    title: 'Execução com supervisão',
    description:
      'Carregamento ordenado, fixação da carga e rota otimizada. Você acompanha cada etapa.',
  },
  {
    number: 4,
    title: 'Entrega e conferência',
    description:
      'Descarga no destino, montagem sob demanda e vistoria final. Só encerramos com sua confirmação.',
  },
] as const;

export const ABOUT_HIGHLIGHTS = [
  { title: 'Anos de experiência em mudanças e logística urbana', icon: 'fa-calendar-check' },
  { title: 'Atendimento humano — sem call center genérico', icon: 'fa-headset' },
  { title: 'Frota própria e parceiros auditados em rotas longas', icon: 'fa-truck-ramp-box' },
  { title: 'Contrato e termos de serviço transparentes', icon: 'fa-file-signature' },
  { title: 'Respeito a condomínios, janelas de carga e normas locais', icon: 'fa-building' },
  { title: 'Clientes que indicam e repetem', icon: 'fa-heart' },
  { title: 'Soluções para prazos apertados (quando couber na agenda)', icon: 'fa-bolt' },
  { title: 'Compromisso com sustentabilidade na reutilização de materiais', icon: 'fa-leaf' },
] as const;

/** Textos da seção “Por que a Granbel” na home. */
export const VALUE_PROPOSITION_COPY = {
  kicker: 'Confiança que se vê na primeira conversa',
  lead: 'Mudança é vida em movimento — e cada caixa carrega memória. Tratamos seu patrimônio com método, respeito e ferramentas simples: lista do que conferir, fotos e conversa direta com você.',
  p1: 'Atendemos famílias, empresas em expansão e quem precisa de transporte confiável. Do apartamento pequeno ao escritório com muitas mesas, dimensionamos pessoas, veículos e tempo.',
  p2: 'Nosso diferencial está nos detalhes: proteção de pisos e portas, rotulagem de caixas por ambiente e orientação sobre o que transportar primeiro na nova casa ou sede.',
  cta: 'Ver diferenciais',
} as const;

export const TESTIMONIALS = [
  {
    name: 'Mariana Costa',
    text: 'Mudança de apartamento em um dia único, sem um arranhão. A equipe etiquetou tudo por cômodo — desempacotar foi até rápido.',
    rating: 5,
  },
  {
    name: 'Ricardo Almeida',
    text: 'Transportamos nosso estoque entre filiais com prazo apertado. A Granbel manteve a gente informado no WhatsApp o tempo todo.',
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Atendem qual região?',
    answer:
      'Atuamos em todo o Brasil. Informe origem e destino no formulário ou pelo WhatsApp — verificamos disponibilidade, rota e prazo para o seu caso.',
  },
  {
    question: 'Como peço um orçamento?',
    answer:
      'Use a página Orçamento, o formulário de Contato ou fale pelo WhatsApp com fotos dos ambientes e lista de itens grandes (geladeira, guarda-roupa etc.). Quanto mais contexto, mais preciso fica o valor.',
  },
  {
    question: 'Vocês embalam tudo?',
    answer:
      'Sim — oferecemos embalagem completa, parcial (apenas frágeis) ou somente transporte se você preferir embalar. O orçamento detalha cada modalidade.',
  },
  {
    question: 'Trabalham com empresas e pessoas físicas?',
    answer:
      'Atendemos os dois perfis: mudanças residenciais, corporativas, fretes para pequenos negócios e projetos sob medida. Nota fiscal e documentação são alinhadas no fechamento.',
  },
  {
    question: 'Quanto tempo de antecedência preciso?',
    answer:
      'Para fins de semana e viradas de mês, recomendamos agendar com antecedência. Para datas flexíveis, muitas vezes conseguimos encaixar em poucos dias — pergunte sempre.',
  },
] as const;

export const ABOUT_PAGE_QUOTE = {
  text: 'Nosso compromisso é simples: cada entrega como se fosse a nossa própria mudança.',
  author: 'Equipe Granbel',
  role: 'Direção operacional',
} as const;

/** Frases na faixa estilo “fita de embalagem” (home). */
export const PACKING_TAPE_LABELS = [
  'PISOS E PORTAS PROTEGIDOS',
  'CAIXAS NUMERADAS POR CÔMODO',
  'CARGA AMARRADA E CONFERIDA',
  'WHATSAPP NO DIA DA OPERAÇÃO',
  'ORÇAMENTO CLARO — SEM LETRAS MIÚDAS',
  'EQUIPE UNIFORMIZADA',
  'FRÁGEIS IDENTIFICADOS',
] as const;

/** Dicas em formato de bilhete — dia da mudança. */
export const MOVING_DAY_TIPS = [
  {
    title: 'O que levar no primeiro dia',
    body: 'Mala com carregador, remédios, documentos e uma troca de roupa — tudo que não pode ir no caminhão fechado.',
    accent: 'amber',
  },
  {
    title: 'Frágeis bem indicados',
    body: 'Escreva na caixa o que é frágil e o cômodo — em português simples. Evita quebra e agiliza a entrega.',
    accent: 'sage',
  },
  {
    title: 'Livre a passagem',
    body: 'Elevador reservado, vaga para o veículo e corredores limpos reduzem tempo — e risco de batidas.',
    accent: 'clay',
  },
] as const;

/** Cidades / regiões para faixa de cobertura (ajuste ao real). */
export const COVERAGE_CITIES = [
  'Belo Horizonte',
  'São Paulo',
  'Rio de Janeiro',
  'Disponibilidade para todo o Brasil',
] as const;

/**
 * CONTATO — atualize telefone, WhatsApp e redes antes de publicar.
 * `phoneTel` e whatsapp em formato internacional sem símbolos extras no wa.me.
 */
export const CONTACT = {
  phoneDisplay: '(11) 99999-0000',
  phoneTel: '+5511999990000',
  whatsapp: '5511999990000',
  email: 'contato@granbeltransportes.com.br',
  address: 'Rua Exemplo, 1000 — Sala 12',
  addressLine2: 'Vila Mariana — São Paulo, SP',
  city: 'São Paulo',
  region: 'SP',
  postalCode: '04000-000',
  facebook: 'https://www.facebook.com/granbeltransportes',
  instagram: 'https://www.instagram.com/granbeltransportes',
  linkedin: 'https://www.linkedin.com/company/granbel-transportes',
} as const;
