export const COPY = {
  pt: {
    nav: {
      highlights: 'Destaques',
      about: 'Sobre',
      skills: 'Competências',
      experience: 'Experiência',
      education: 'Formação',
      contact: 'Contato',
      research: 'Pesquisa',
    },
    hero: {
      subtitle:
        'Engenheiro de Software Sênior e Tech Lead: lidero squads, tomo decisões arquiteturais e garanto confiabilidade em produção.',
      primaryCta: 'Ver experiência',
      secondaryCta: 'Falar comigo',
    },
    highlightsLead: 'Áreas em que entrego mais valor no dia a dia.',
    aboutTitle: 'Sobre',
    highlightsTitle: 'Destaques',
    skillsTitle: 'Competências',
    otherSkills: 'Outras competências',
    languages: 'Idiomas',
    experience: 'Experiência',
    education: 'Formação',
    educationLead: 'Clique para destacar uma etapa e ver o detalhe do curso/período.',
    educationDetailLabel: 'Foco na formação',
    research: 'Pesquisa',
    researchLead: 'Trabalhos acadêmicos e experimentos aplicados em qualidade de conteúdo e NLP.',
    contact: {
      title: 'Contato',
      lead: 'Quer conversar sobre um projeto, vaga ou colaboração? Me chama.',
      email: 'Email',
      phone: 'Telefone',
      github: 'Abrir GitHub',
      linkedin: 'Abrir LinkedIn',
      sendEmail: 'Enviar email',
    },
    footerBackToTop: 'Voltar ao topo',
    skillDetailCta: 'Vamos falar sobre esse stack',
    skillContext:
      'Clique em uma competência e eu te digo onde isso vira entrega (sem buzzword excessivo, prometo… quase).',
    levelLabel: 'Nível',
  },
  en: {
    nav: {
      highlights: 'Highlights',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      research: 'Research',
    },
    hero: {
      subtitle:
        'Senior Software Engineer and Tech Lead: I lead squads, drive architecture decisions, and own production reliability.',
      primaryCta: 'View experience',
      secondaryCta: 'Contact me',
    },
    highlightsLead: 'Where I deliver the most value day-to-day.',
    aboutTitle: 'About',
    highlightsTitle: 'Highlights',
    skillsTitle: 'Skills',
    otherSkills: 'Other skills',
    languages: 'Languages',
    experience: 'Experience',
    education: 'Education',
    educationLead: 'Click to highlight a stage and see the course/period details.',
    educationDetailLabel: 'Education focus',
    research: 'Research',
    researchLead: 'Academic and applied work on content quality and NLP.',
    contact: {
      title: 'Contact',
      lead: 'Want to talk about a project, opening, or collaboration? Reach out.',
      email: 'Email',
      phone: 'Phone',
      github: 'Open GitHub',
      linkedin: 'Open LinkedIn',
      sendEmail: 'Send email',
    },
    footerBackToTop: 'Back to top',
    skillDetailCta: 'Let’s talk about this stack',
    skillContext: 'Pick a skill and I’ll show how it turns into delivery (minimal buzzwords, mostly).',
    levelLabel: 'Level',
  },
};

export const SECTIONS_ORDER = ['home', 'highlights', 'about', 'skills', 'research', 'experience', 'education', 'contact'];

export const HIGHLIGHTS_BY_LANG = {
  pt: [
    {
      title: 'Serviços fiscais',
      text: 'Hoje atuo como Tech Lead e engenheiro hands-on construindo serviços distribuídos em Go e Python para fluxos fiscais: emissão/validação, integrações governamentais e rotinas de conformidade. Meu foco é manter o produto “de pé” em picos e dias ruins, com limites claros, idempotência e decisões pragmáticas.',
      tags: ['Go', 'Python', 'Domínio fiscal', 'Resiliência'],
    },
    {
      title: 'Certificados & segurança',
      text: 'Trabalho com automação de ciclo de vida de certificados e validações para evitar “surpresas” em produção. Desenho guardrails (e processos) que protegem o sistema sem travar o time: rotação, expiração, auditoria e integração segura com serviços.',
      tags: ['Certificados', 'Segurança', 'Automação'],
    },
    {
      title: 'Gateways & parceiros',
      text: 'Orquestro integrações com parceiros por meio de APIs e gateways: contratos bem versionados, tratamento de falhas, retries e idempotência. Como líder, eu garanto que o time tenha padrões de integração repetíveis e observáveis (pra debugar rápido sem “caça ao log”).',
      tags: ['APIs', 'Integrações', 'Idempotência'],
    },
    {
      title: 'Telemetria & observabilidade',
      text: 'Implanto padrões e componentes de observabilidade (tracing, métricas e logs) para transformar incidentes em decisões: o que medir, como alertar, o que é SLO e como fazer post-mortem sem caça às bruxas. Também mentoro o time para “pensar em produção” desde o design.',
      tags: ['OpenTelemetry', 'SLOs', 'Tech Lead'],
    },
  ],
  en: [
    {
      title: 'Tax services',
      text: 'Today I operate as a Tech Lead and hands-on engineer building distributed services in Go and Python for tax-related workflows: issuing/validating documents, government integrations, and compliance routines. The goal is simple: keep things reliable under spikes and bad days with clear boundaries and pragmatic trade-offs.',
      tags: ['Go', 'Python', 'Tax domain', 'Resilience'],
    },
    {
      title: 'Certificates & security',
      text: 'I work on certificate lifecycle automation and validations to avoid production “surprises”. I design guardrails that keep systems safe without slowing teams down: rotation, expiration, auditability, and secure service integrations.',
      tags: ['Certificates', 'Security', 'Automation'],
    },
    {
      title: 'Gateways & partners',
      text: 'I orchestrate partner integrations through APIs and gateways: well-versioned contracts, failure handling, retries, and idempotency. As a leader, I push repeatable integration patterns and observability so we can debug fast without “log hunting”.',
      tags: ['APIs', 'Integrations', 'Idempotency'],
    },
    {
      title: 'Telemetry & observability',
      text: 'I implement observability patterns (tracing, metrics, and logs) that turn incidents into decisions: what to measure, how to alert, what is an SLO, and how to run blameless reviews. I also mentor teams to “think production” during design.',
      tags: ['OpenTelemetry', 'SLOs', 'Tech Lead'],
    },
  ],
};

export const HERO_BADGES = {
  pt: ['Liderança técnica', 'Mentoria contínua', 'Execução confiável'],
  en: ['Engineering leadership', 'Continuous mentorship', 'Reliable execution'],
};

export const HERO_STATS_EXTRA = {
  pt: [
    { value: '4+', label: 'Times liderados' },
    { value: '25+', label: 'Rollouts monitorados' },
    { value: '8', label: 'Talks e artigos técnicos' },
  ],
  en: [
    { value: '4+', label: 'Teams led' },
    { value: '25+', label: 'Rollouts monitored' },
    { value: '8', label: 'Talks and write-ups' },
  ],
};

export const ABOUT_STORY_BY_LANG = {
  pt: `Sou o Rubio — Tech Lead que gosta de deixar produção entediante (isso é elogio). No dia a dia eu lidero squads e também boto a mão no código em Go e Python, desenhando serviços distribuídos, APIs e integrações com observabilidade de verdade (OpenTelemetry, SLOs e alertas que não viram spam). Eu curto decisões com trade-off explícito, deploy com rollback e incident review sem drama: o objetivo é o sistema aguentar o tranco e o time dormir. Fora do teclado, sou atleta de atletismo (100m e 200m) e já fui campeão mineiro nas duas provas — então sim, eu gosto de coisas rápidas, mas com técnica. Sou casado, amo praticar esportes (já pratiquei skate, futebol, futsal e handebol) e, apesar de ser de Belo Horizonte, vivo procurando motivo pra rodar o Brasil e o mundo.`,
  en: `I’m Rubio — a Tech Lead who enjoys making production boring (that’s a compliment). Day-to-day I lead squads and still write code in Go and Python, designing distributed services, APIs, and integrations with real observability (OpenTelemetry, SLOs, and alerts that don’t turn into spam). I like explicit trade-offs, deploys with rollbacks, and blameless incident reviews: the goal is predictable systems and teams that actually sleep. Off the keyboard, I’m a track & field athlete (100m and 200m) and I’ve been Minas Gerais state champion in both events—so yes, I like fast things, but with technique. I’m married, I love practicing sports (I’ve done skateboarding, soccer, futsal, and handball), and although I’m from Belo Horizonte, I’m always looking for an excuse to travel across Brazil—and the world.`,
};

export const SKILL_SPOTLIGHTS = {
  pt: [
    {
      title: 'Tech Lead em modo produção',
      points: [
        'Direção técnica com trade-offs claros',
        'Mentoria e crescimento do time',
        'Incidentes: rápido, calmo, sem caça às bruxas',
      ],
    },
    {
      title: 'Backend que aguenta o tranco',
      points: ['Go/Python em serviços distribuídos', 'APIs (REST/gRPC) com contratos fortes', 'Confiabilidade com SLOs e observabilidade'],
    },
  ],
  en: [
    {
      title: 'Tech Lead in production mode',
      points: ['Clear technical direction and trade-offs', 'Mentorship and team growth', 'Incidents: fast, calm, blameless'],
    },
    {
      title: 'Backend that scales (and behaves)',
      points: ['Go/Python distributed services', 'Strong API contracts (REST/gRPC)', 'Reliability via SLOs and observability'],
    },
  ],
};

export const RESEARCH_PROJECTS = {
  pt: [
    {
      title: 'WebFeatures',
      description:
        'Ferramenta web para extrair e compartilhar conjuntos de features de conteúdo colaborativo (Wikipedia), incluindo métricas de estrutura, estilo e legibilidade, aplicável a classificação de qualidade.',
      tags: ['Feature Engineering', 'Content Quality', 'Reprodutibilidade'],
    },
    {
      title: 'Análise temática/emocional em música periférica',
      description:
        'Dissertação de Mestrado (UFMG) aplicando NLP e análise de sentimentos em letras de músicas periféricas brasileiras para padrões temáticos e emocionais.',
      tags: ['NLP', 'Análise de sentimentos', 'Modelagem de tópicos'],
    },
    {
      title: 'Governança de qualidade colaborativa',
      description:
        'Pipeline de experimentos para monitorar confiança, spam e coerência em experiências de conteúdo colaborativo com sinais de interação.',
      tags: ['Experimentos', 'Governança', 'Sinais humanos'],
    },
  ],
  en: [
    {
      title: 'WebFeatures',
      description:
        'Web tool to extract and share feature sets from collaborative content (Wikipedia) with structure, style, and readability metrics for quality prediction.',
      tags: ['Feature Engineering', 'Content Quality', 'Reproducibility'],
    },
    {
      title: 'Thematic/emotional analysis in peripheral music',
      description:
        'M.Sc. thesis (UFMG) applying NLP and sentiment analysis to Brazilian peripheral music lyrics to find thematic and emotional patterns.',
      tags: ['NLP', 'Sentiment Analysis', 'Topic Modeling'],
    },
    {
      title: 'Collaborative quality governance',
      description:
        'Experiment pipeline monitoring trust, spam, and coherence in collaborative content using interaction signals.',
      tags: ['Experiments', 'Governance', 'Human signals'],
    },
  ],
};

export const EXPERIENCE_INSIGHTS = {
  pt: [
    'Liderança técnica de squads focados em confiabilidade com entregas previsíveis e telemetria unificada.',
    'Governança de qualidade, pipelines de testes e revisão de incidentes para decisões rápidas e seguras.',
    'Mentoria contínua, pair programming e feedback estruturado para times distribuídos em várias regiões.',
  ],
  en: [
    'Technical leadership of reliability-focused squads with predictable delivery and unified telemetry.',
    'Quality governance, testing pipelines, and incident reviews that unlock quick, secure decisions.',
    'Ongoing mentoring, pairing, and structured feedback for distributed teams across regions.',
  ],
};

export const EDUCATION_DETAILS_BY_SCHOOL = {
  pt: {
    default: {
      body: 'Clique em uma formação ao lado para ver o resumo e os destaques.',
      highlights: [],
    },
    'Universidade Federal de Minas Gerais': {
      body:
        'Mestrado em Ciência da Computação (UFMG), conectando NLP com engenharia: do dataset ao experimento, do insight ao relatório.',
      highlights: [
        {
          label: 'Dissertação (NLP)',
          detail: 'Análise temática/emocional de letras de música periférica brasileira.',
        },
        {
          label: 'Método',
          detail: 'Pipelines reprodutíveis, avaliação e leitura crítica de resultados.',
        },
        {
          label: 'Aplicação',
          detail: 'Transformar pesquisa em decisões: métricas, sinais e comunicação clara.',
        },
      ],
    },
    'Centro Federal de Educação Tecnológica de Minas Gerais': {
      body:
        'Bacharelado em Engenharia de Computação (CEFET-MG), base forte de sistemas, dados e engenharia de software.',
      highlights: [
        { label: 'Fundamentos', detail: 'Estruturas de dados, algoritmos e arquitetura de computadores.' },
        { label: 'Engenharia', detail: 'Projetos, qualidade, testes e trabalho em equipe.' },
        { label: 'Prática', detail: 'Construção de software com foco em confiabilidade e entregas.' },
      ],
    },
    'Colégio Estadual Técnico Industrial Professor Fontes': {
      body:
        'Formação técnica em Eletrotécnica e Eletroeletrônica: elétrica, eletrônica e prática de laboratório.',
      highlights: [
        { label: 'Técnico', detail: 'Eletrotécnica e Eletroeletrônica (base prática e teórica).' },
        { label: 'Rotina', detail: 'Leitura de esquemas, medições e manutenção/instalações.' },
        { label: 'Disciplina', detail: 'Mão na massa, segurança e atenção a detalhe.' },
      ],
    },
    'Colégio Tiradentes': {
      body: 'Ensino médio — a base que veio antes de eu trocar “prova” por “deploy”.',
      highlights: [
        { label: 'Base', detail: 'Formação geral (ensino médio).' },
        { label: 'Hábito', detail: 'Disciplina, constância e curiosidade intelectual.' },
        { label: 'Rumo', detail: 'Ponte para a formação técnica e depois engenharia.' },
      ],
    },
  },
  en: {
    default: {
      body: 'Select an education item on the left to see a short summary and highlights.',
      highlights: [],
    },
    'Universidade Federal de Minas Gerais': {
      body:
        "M.Sc. in Computer Science (UFMG), connecting NLP with engineering—from datasets to experiments, from insights to clear write-ups.",
      highlights: [
        {
          label: 'Thesis (NLP)',
          detail: 'Thematic/emotional analysis of Brazilian peripheral music lyrics.',
        },
        { label: 'Method', detail: 'Reproducible pipelines, evaluation, and critical result analysis.' },
        { label: 'Impact', detail: 'Turning research into decisions through metrics, signals, and storytelling.' },
      ],
    },
    'Centro Federal de Educação Tecnológica de Minas Gerais': {
      body: 'B.Sc. in Computer Engineering (CEFET-MG), strong foundations in systems, data, and software engineering.',
      highlights: [
        { label: 'Foundations', detail: 'Data structures, algorithms, and computer architecture.' },
        { label: 'Engineering', detail: 'Projects, quality, testing, and collaboration.' },
        { label: 'Practice', detail: 'Building software with reliability and delivery in mind.' },
      ],
    },
    'Colégio Estadual Técnico Industrial Professor Fontes': {
      body: 'Technical program in Electrical and Electronics: theory + labs and hands-on practice.',
      highlights: [
        { label: 'Technical', detail: 'Electrical and electronics foundations with practical training.' },
        { label: 'Routine', detail: 'Schematics, measurements, and maintenance/installations.' },
        { label: 'Craft', detail: 'Safety, precision, and attention to detail.' },
      ],
    },
    'Colégio Tiradentes': {
      body: "High school—the stage before I traded exams for deployments.",
      highlights: [
        { label: 'Base', detail: 'General education (high school).' },
        { label: 'Habits', detail: 'Discipline, consistency, and curiosity.' },
        { label: 'Path', detail: 'Bridge into technical education and engineering.' },
      ],
    },
  },
};

export const resolveEducationDetail = (lang, education) => {
  const bySchool = EDUCATION_DETAILS_BY_SCHOOL[lang] || EDUCATION_DETAILS_BY_SCHOOL.en;
  const school = education?.school;
  return bySchool[school] || bySchool.default;
};

export const CONTACT_NOTES = {
  pt: [
    'Disponível para consultorias de arquitetura, resposta rápida e atração de talentos (eu gosto de caos… desde que bem monitorado).',
    'Respondo em até dois dias úteis — ou antes, se o incidente estiver me encarando. E ainda compartilho aprendizados do pós-incidente.',
    'Calendário no LinkedIn e e-mail direto: menos burocracia, mais velocidade pra marcar a conversa.',
  ],
  en: [
    'Open for architecture consults, quick responses, and talent partnering (I enjoy orderly chaos—preferably with good dashboards).',
    'Reply within two business days—or sooner if an incident is staring at me. I also share post-incident learnings.',
    'LinkedIn calendar + direct email: less bureaucracy, faster conversations.',
  ],
};

export const SKILL_DETAILS = {
  'Leadership (Tech Lead)': {
    pt: 'Alinho contexto com stakeholders, defino direção técnica, destravo decisões e faço o time ficar mais forte a cada entrega (e incidente).',
    en: 'I align context with stakeholders, set technical direction, unblock decisions, and make the team stronger with every delivery (and incident).',
  },
  'System Design & Architecture': {
    pt: 'Desenho sistemas distribuídos com limites claros, trade-offs explícitos e foco em confiabilidade: latência, custo, consistência e operação.',
    en: 'I design distributed systems with clear boundaries, explicit trade-offs, and reliability-first thinking: latency, cost, consistency, and operations.',
  },
  'Go (Golang)': {
    pt: 'Serviços de alta performance, concorrência com goroutines, APIs e integrações. Go é meu “modo turbo” para produção.',
    en: 'High-performance services, goroutine concurrency, APIs, and integrations. Go is my “turbo mode” for production.',
  },
  Python: {
    pt: 'APIs, automações e serviços com foco em legibilidade e velocidade de entrega (com testes e observabilidade junto).',
    en: 'APIs, automation, and services with fast delivery and readable code (plus tests and observability).',
  },
  'TypeScript / Node.js': {
    pt: 'Quando precisa de web tooling, APIs e integrações rápidas, eu entro com Node/TypeScript — com o mesmo cuidado de testes, contratos e observabilidade.',
    en: 'For web tooling, APIs, and fast integrations, I use Node/TypeScript—with the same focus on tests, contracts, and observability.',
  },
  'Distributed Systems': {
    pt: 'Partição, consistência, timeouts, backpressure, e estratégias de degradação. Sistema distribuído não é “se falhar”, é “quando”.',
    en: 'Partitioning, consistency, timeouts, backpressure, and graceful degradation. In distributed systems it’s not “if”, it’s “when”.',
  },
  'API Design (REST/gRPC)': {
    pt: 'Contratos bem definidos (OpenAPI/Protobuf), versionamento, idempotência e compatibilidade. API boa é a que não surpreende.',
    en: 'Well-defined contracts (OpenAPI/Protobuf), versioning, idempotency, and compatibility. Good APIs don’t surprise people.',
  },
  'Observability (OpenTelemetry)': {
    pt: 'Tracing, métricas e logs com correlação, SLOs e alertas acionáveis. Menos “debug no escuro”, mais “diagnóstico em minutos”.',
    en: 'Tracing, metrics, and correlated logs with SLOs and actionable alerts. Less “debugging in the dark”, more “minutes to diagnose”.',
  },
  'Messaging (RabbitMQ)': {
    pt: 'Topologias, DLQ, retries/idempotência e backpressure. Fila boa é a que mantém o sistema estável (não a que esconde problema).',
    en: 'Topologies, DLQs, retries/idempotency, and backpressure. Good queues keep systems stable (they don’t hide problems).',
  },
  'Caching (Redis)': {
    pt: 'Caches, locks, TTL/invalidação e Redis Streams quando faz sentido. Cache é ótimo — até virar bug distribuído.',
    en: 'Caches, locks, TTL/invalidation, and Redis Streams when it fits. Caches are great—until they become distributed bugs.',
  },
  PostgreSQL: {
    pt: 'Modelagem, migrações seguras, tuning de queries e operação. Banco é produto: precisa de cuidado contínuo.',
    en: 'Modeling, safe migrations, query tuning, and operations. Databases are products: they need continuous care.',
  },
  'AWS (Cloud)': {
    pt: 'Cloud com mentalidade de custo, segurança e operação: o objetivo é escalar sem transformar a fatura em jumpscare.',
    en: 'Cloud with cost, security, and operations in mind: scale without turning the bill into a jump scare.',
  },
  Kubernetes: {
    pt: 'Operação cloud-native com foco em confiabilidade: deploys, health checks, recursos e “não matar o cluster sem querer”.',
    en: 'Cloud-native ops with reliability in mind: deploys, health checks, resources, and not taking the cluster down by accident.',
  },
  'Terraform (IaC)': {
    pt: 'Infra como código para provisionar com previsibilidade e revisão. Menos “clicar no console”, mais “PR com histórico”.',
    en: 'Infrastructure as code for predictable provisioning and review. Less “clicking in consoles”, more “PRs with history”.',
  },
  'CI/CD & Delivery': {
    pt: 'Pipelines com testes, checks e deploys seguros (rollout/rollback). Entrega boa é repetível — e sem susto.',
    en: 'Pipelines with tests, checks, and safe deploys (rollout/rollback). Good delivery is repeatable—and boring.',
  },
  'Security & Compliance': {
    pt: 'Boas práticas no dia a dia: segredos, least privilege, validações e trilhas de auditoria. Segurança não é “time”, é hábito.',
    en: 'Day-to-day security habits: secrets, least privilege, validations, and audit trails. Security is not a team, it’s a habit.',
  },
};

