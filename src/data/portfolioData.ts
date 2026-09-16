export type Language = 'pt-BR' | 'en-US';

export interface Project {
  title: string;
  category: string;
  description: string;
  url?: string;
  githubUrl?: string;
  isExternal?: boolean;
  featured?: boolean;
  tags?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  current?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status?: string;
  details?: string;
}

export interface PortfolioData {
  name: string;
  fullName: string;
  role: string;
  tagline: string;
  location: string;
  status: string;
  phone?: string;
  hero: {
    greeting: string;
    rolePrimary: string;
    roleSecondary: string;
    shortBio: string;
  };
  bio: {
    aboutTitle: string;
    intro: string;
    details: string;
    inlineLinksPrefix: string;
    inlineLinksSuffix: string;
    emailActionText: string;
  };
  socials: {
    email: string;
    phone?: string;
    whatsappUrl?: string;
    whatsappMessage?: string;
    linkedin: string;
    github: string;
    portfolio: string;
    resumeUrl?: string;
    resumeLabel: string;
  };
  actions: {
    copyEmail: string;
    copiedEmail: string;
    copyPhone: string;
    copiedPhone: string;
    openEmailClient: string;
  };
  sections: {
    about: { title: string; subtitle?: string };
    experience: { title: string; subtitle: string };
    skills: { title: string; subtitle: string };
    formation: { title: string; subtitle: string };
    projects: { title: string; subtitle: string; itemsCount: string };
    contact: {
      title: string;
      description: string;
    };
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    formation: string;
    projects: string;
    contact: string;
  };
  projects: Project[];
  experiences: Experience[];
  skills: SkillCategory[];
  education: EducationItem[];
  marqueeKeywords: string[];
}

export const portfolioContent: Record<Language, PortfolioData> = {
  'pt-BR': {
    name: 'Michel Victor',
    fullName: 'Michel Victor Vasconcelos de Souza',
    role: 'Desenvolvedor Javascript | Typescript',
    tagline: 'Design Systems, React, React Native, Next.js, TypeScript & Node.js',
    location: 'Rio de Janeiro, Brasil',
    status: 'Senior na Livelo · Disponível para conexões',
    phone: '(21) 9719-41397',
    hero: {
      greeting: "Opa, beleza? Eu sou Michel",
      rolePrimary: 'Fullstack | Front End | Mobile',
      roleSecondary: 'Senior',
      shortBio: 'Especialista na construção de aplicações escaláveis, Micro Front-ends e Design Systems reutilizáveis para Web e Mobile.',
    },
    bio: {
      aboutTitle: 'Sobre',
      intro: 'Atualmente trabalhando como Desenvolvedor Front/Mobile Senior na Livelo, onde lidero a evolução do Design System cross-platform (Web e Mobile com React, React Native e Expo) para múltiplos Micro Front-ends.',
      details: 'Forte domínio na arquitetura de Design Systems reutilizáveis (Tailwind CSS, Radix UI, Storybook, Emotion), gerenciamento de estado (Zustand, Redux, React Query) e integração de APIs RESTful com bancos relacionais (PostgreSQL). Vivência sólida em soluções críticas nos setores de Benefícios & Fidelidade, HealthTech, Saúde Pública e E-commerce.',
      inlineLinksPrefix: 'Você pode me encontrar no',
      inlineLinksSuffix: 'conferir meus projetos no',
      emailActionText: 'e-mail',
    },
    socials: {
      email: 'michel.vvs@gmail.com',
      phone: '(21) 9719-41397',
      whatsappUrl: 'https://wa.me/5521971941397?text=Ol%C3%A1%2C%20Michel!%20Adorei%20seu%20portfolio%20e%20quero%20te%20contratar!',
      whatsappMessage: 'Olá, Michel! Adorei seu portfolio e quero te contratar!',
      linkedin: 'https://www.linkedin.com/in/michelvvs',
      github: 'https://github.com/michelvvs',
      portfolio: 'https://michelvvs.com',
      resumeUrl: '/MichelVictorCurriculo.pdf',
      resumeLabel: 'Currículo PDF',
    },
    actions: {
      copyEmail: 'Copiar e-mail',
      copiedEmail: 'E-mail copiado!',
      copyPhone: 'Copiar telefone',
      copiedPhone: 'Telefone copiado!',
      openEmailClient: 'Abrir no cliente de e-mail',
    },
    sections: {
      about: { title: 'Sobre' },
      experience: { title: 'Experiência Profissional', subtitle: 'Histórico de Carreira' },
      skills: { title: 'Stack & Habilidades', subtitle: 'Competências Técnicas' },
      formation: { title: 'Formação Acadêmica & Cursos', subtitle: 'Educação' },
      projects: { title: 'Projetos em Destaque', subtitle: 'Portfólio', itemsCount: 'itens' },
      contact: {
        title: 'Vamos construir algo incrível juntos?',
        description: 'Estou aberto a oportunidades, projetos freelance e conversas sobre desenvolvimento front-end, design systems e arquitetura de software.',
      },
    },
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      formation: 'Formação',
      projects: 'Projetos',
      contact: 'Contato',
    },
    projects: [
      {
        title: 'Cross-Platform Design System & Micro Front-ends',
        category: 'Design System / Mobile & Web',
        description: 'Manutenção, governança e evolução de componentes de alta complexidade com React, React Native e Emotion para ecossistema Micro Front-ends na Livelo.',
        tags: ['React', 'React Native', 'Next.js', 'Emotion', 'Expo', 'Cypress', 'Jest'],
        featured: true,
        url: 'https://www.linkedin.com/in/michelvvs',
      },
      {
        title: 'HealthTech Design System & Plataforma Hospitalar',
        category: 'Design System / HealthTech',
        description: 'Construção de Design System do zero com Storybook, Radix UI e Tailwind CSS, além de arquitetura com autenticação JWT/SSO na Epimed Solutions.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Radix UI', 'React Query'],
        featured: true,
        url: 'https://michelvvs.com',
      },
      {
        title: 'Centro de Inteligência Epidemiológica (SMS-RJ)',
        category: 'Fullstack / Data Engineering',
        description: 'Pipeline em Node.js consumindo APIs do SUS com banco PostgreSQL, dashboards analíticos dinâmicos em React com ApexCharts e automação com Puppeteer.',
        tags: ['Node.js', 'React', 'PostgreSQL', 'ApexCharts', 'Puppeteer', 'Express'],
        featured: true,
      },
      {
        title: 'E-Commerce de Alta Escala & Checkout',
        category: 'E-Commerce / Front-end',
        description: 'Desenvolvimento e otimização de fluxos críticos de vitrine, carrinho e checkout, além de microsserviços institucionais em Next.js e NestJS.',
        tags: ['React', 'Next.js', 'NestJS', 'Prisma ORM', 'Redux Toolkit', 'Zustand'],
        featured: true,
      },
    ],
    experiences: [
      {
        company: 'Livelo',
        role: 'Desenvolvedor Front/Mobile Senior',
        period: '11/2025 — Atualmente',
        location: 'Remoto',
        current: true,
        description: 'Manutenção e evolução do Design System corporativo, garantindo consistência visual e técnica para múltiplos Micro Front-ends. Desenvolvimento de componentes de alta complexidade com React, React Native, Next.js, Emotion e Expo voltados a reuso cross-platform (Web e Mobile), com governança de adoção e cobertura de testes E2E (Cypress) e unitários (Jest).',
        highlights: [
          'Manutenção e evolução do Design System para múltiplos Micro Front-ends.',
          'Componentes de alta complexidade em React, React Native, Next.js, Emotion e Expo (Web e Mobile).',
          'Governança, documentação e análise de adoção de bibliotecas.',
          'Pipelines de testes E2E (Cypress) e unitários (Jest).',
        ],
        technologies: ['React', 'React Native', 'Next.js', 'Emotion', 'Expo', 'Design Systems', 'Micro Front-ends', 'Cypress', 'Jest'],
      },
      {
        company: 'Epimed Solutions',
        role: 'Desenvolvedor Front-end Pleno',
        period: '04/2023 — 11/2025',
        location: 'Remoto',
        description: 'Arquitetura e desenvolvimento de sistemas para o setor de HealthTech com Next.js e TypeScript. Construção do Design System do zero utilizando Storybook, Radix UI e Tailwind CSS. Integração de sistemas complexos com autenticação JWT/SSO e consumo de APIs via Swagger com React Query.',
        highlights: [
          'Arquitetura de sistemas HealthTech com Next.js e TypeScript.',
          'Construção de Design System do zero com Storybook, RadixUI e Tailwind CSS.',
          'Autenticação JWT/SSO e consumo de APIs com React Query e Swagger.',
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Radix UI', 'React Query', 'Swagger', 'JWT / SSO'],
      },
      {
        company: 'Centro de Inteligência Epidemiológica (SMS-RJ)',
        role: 'Desenvolvedor Fullstack Pleno',
        period: '05/2022 — 07/2024',
        location: 'Remoto',
        description: 'Desenvolvimento de soluções de engenharia de dados para saúde pública no Rio de Janeiro. Criação de serviços em Node.js que automatizam o consumo de APIs do SUS e alimentação de bancos PostgreSQL, dashboards analíticos com ReactJS e ApexCharts, e scraping com Puppeteer.',
        highlights: [
          'Serviços em Node.js para ingestão automatizada de dados da API do SUS em PostgreSQL.',
          'Dashboards analíticos dinâmicos com ReactJS e ApexCharts.',
          'Automação e coleta de dados com Puppeteer.',
        ],
        technologies: ['Node.js', 'React', 'PostgreSQL', 'ApexCharts', 'Puppeteer', 'Express', 'REST APIs'],
      },
      {
        company: 'HEAP Engenharia de Software',
        role: 'Desenvolvedor Front-end Pleno',
        period: '04/2022 — 04/2023',
        location: 'Remoto',
        description: 'Desenvolvimento e sustentação de e-commerces de grande escala, otimizando fluxos de Carrinho e Checkout. Arquitetura de soluções Fullstack utilizando Next.js e NestJS com Prisma ORM e gerenciamento de estado com Redux Toolkit e Zustand.',
        highlights: [
          'Manutenção e otimização de fluxos de carrinho e checkout de alta conversão.',
          'Aplicações Fullstack com Next.js, NestJS e Prisma ORM.',
          'Gerenciamento de estado com Redux Toolkit e Zustand.',
        ],
        technologies: ['React', 'Next.js', 'NestJS', 'Prisma ORM', 'Redux Toolkit', 'Zustand', 'TypeScript'],
      },
      {
        company: 'RioSaúde (Empresa Pública de Saúde do RJ)',
        role: 'Desenvolvedor Front-end Júnior',
        period: '10/2021 — 03/2022',
        location: 'Rio de Janeiro, RJ',
        description: 'Desenvolvimento de interfaces modernas para gestão de saúde pública com ReactJS e JavaScript (ES6+). Manutenção e evolução de sistemas de processos seletivos públicos integrando front-end React com back-end PHP, além de padronização com Ant Design e Styled-components.',
        highlights: [
          'Interfaces para gestão de saúde pública em React e JavaScript ES6+.',
          'Integração de módulos para triagem de candidatos em processos seletivos.',
          'Padronização visual com Ant Design, Styled Components e Bootstrap.',
        ],
        technologies: ['React', 'JavaScript (ES6+)', 'Styled Components', 'Ant Design', 'Bootstrap', 'PHP', 'GitHub'],
      },
    ],
    skills: [
      {
        category: 'Front-end & Mobile',
        items: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Expo', 'Micro Front-ends', 'HTML5', 'CSS3 / SASS'],
      },
      {
        category: 'UI & Design Systems',
        items: ['Tailwind CSS', 'Radix UI', 'Shadcn/UI', 'Emotion', 'Storybook', 'Styled Components', 'Material UI', 'Figma'],
      },
      {
        category: 'Estado, Consumo de Dados & Testes',
        items: ['Zustand', 'Redux Toolkit', 'React Query (TanStack Query)', 'Jest', 'Cypress', 'React Testing Library'],
      },
      {
        category: 'Back-end, Banco de Dados & DevOps',
        items: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'Prisma ORM', 'REST APIs', 'Git / GitHub', 'Docker', 'CI/CD', 'Vite'],
      },
    ],
    education: [
      {
        degree: 'Bacharelado em Sistemas de Informação',
        institution: 'Universidade Veiga de Almeida',
        period: '02/2022 — 12/2026',
        status: 'Em andamento',
      },
      {
        degree: 'React JS / Next.js & Ecossistema Moderno',
        institution: 'Udemy',
        period: '2021',
        status: 'Especialização',
      },
      {
        degree: 'JavaScript Avançado & ES6+',
        institution: 'Udemy',
        period: '2020',
        status: 'Especialização',
      },
    ],
    marqueeKeywords: [
      'WEB',
      'FRONTEND',
      'MOBILE',
      'DESIGN SYSTEMS',
      'REACT',
      'REACT NATIVE',
      'NEXT.JS',
      'TYPESCRIPT',
      'JAVASCRIPT',
      'MICRO FRONT-ENDS',
      'EXPO',
      'TAILWIND CSS',
      'NODE.JS',
      'CYPRESS',
      'JEST',
      'FIGMA',
      'GIT',
    ],
  },
  'en-US': {
    name: 'Michel Victor',
    fullName: 'Michel Victor Vasconcelos de Souza',
    role: 'JavaScript | TypeScript Developer',
    tagline: 'Design Systems, React, React Native, Next.js, TypeScript & Node.js',
    location: 'Rio de Janeiro, Brazil',
    status: 'Senior at Livelo · Available for networking',
    phone: '+55 (21) 9719-41397',
    hero: {
      greeting: "Hey there! I'm Michel",
      rolePrimary: 'Fullstack | Front End | Mobile',
      roleSecondary: 'Senior',
      shortBio: 'Specialist in building scalable applications, Micro Front-ends, and reusable Design Systems for Web and Mobile.',
    },
    bio: {
      aboutTitle: 'About',
      intro: 'Currently working as a Senior Front/Mobile Developer at Livelo, where I lead the evolution of the cross-platform Design System (Web and Mobile with React, React Native, and Expo) for multiple Micro Front-ends.',
      details: 'Strong expertise in reusable Design Systems architecture (Tailwind CSS, Radix UI, Storybook, Emotion), state management (Zustand, Redux, React Query), and RESTful API integration with relational databases (PostgreSQL). Solid track record in mission-critical solutions across Loyalty & Rewards, HealthTech, Public Health, and E-commerce.',
      inlineLinksPrefix: 'You can find me on',
      inlineLinksSuffix: 'check out my projects on',
      emailActionText: 'email',
    },
    socials: {
      email: 'michel.vvs@gmail.com',
      phone: '+55 (21) 9719-41397',
      whatsappUrl: 'https://wa.me/5521971941397?text=Hello%2C%20Michel!%20I%20loved%20your%20portfolio%20and%20want%20to%20hire%20you!',
      whatsappMessage: 'Hello, Michel! I loved your portfolio and want to hire you!',
      linkedin: 'https://www.linkedin.com/in/michelvvs',
      github: 'https://github.com/michelvvs',
      portfolio: 'https://michelvvs.com',
      resumeUrl: '/MichelVictorResumeEN.pdf',
      resumeLabel: 'Resume PDF',
    },
    actions: {
      copyEmail: 'Copy email',
      copiedEmail: 'Email copied!',
      copyPhone: 'Copy phone',
      copiedPhone: 'Phone copied!',
      openEmailClient: 'Open in email client',
    },
    sections: {
      about: { title: 'About' },
      experience: { title: 'Professional Experience', subtitle: 'Career History' },
      skills: { title: 'Stack & Skills', subtitle: 'Technical Competencies' },
      formation: { title: 'Academic Education & Courses', subtitle: 'Education' },
      projects: { title: 'Featured Projects', subtitle: 'Portfolio', itemsCount: 'items' },
      contact: {
        title: "Let's build something amazing together?",
        description: "I'm open to opportunities, freelance projects, and conversations about front-end development, design systems, and software architecture.",
      },
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      formation: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
    projects: [
      {
        title: 'Cross-Platform Design System & Micro Front-ends',
        category: 'Design System / Mobile & Web',
        description: 'Maintenance, governance, and evolution of high-complexity components with React, React Native, and Emotion for the Micro Front-ends ecosystem at Livelo.',
        tags: ['React', 'React Native', 'Next.js', 'Emotion', 'Expo', 'Cypress', 'Jest'],
        featured: true,
        url: 'https://www.linkedin.com/in/michelvvs',
      },
      {
        title: 'HealthTech Design System & Hospital Platform',
        category: 'Design System / HealthTech',
        description: 'Built a Design System from scratch with Storybook, Radix UI, and Tailwind CSS, plus architecture with JWT/SSO authentication at Epimed Solutions.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Radix UI', 'React Query'],
        featured: true,
        url: 'https://michelvvs.com',
      },
      {
        title: 'Epidemiological Intelligence Center (SMS-RJ)',
        category: 'Fullstack / Data Engineering',
        description: 'Node.js pipeline consuming SUS APIs with PostgreSQL database, dynamic analytical dashboards in React with ApexCharts, and automation with Puppeteer.',
        tags: ['Node.js', 'React', 'PostgreSQL', 'ApexCharts', 'Puppeteer', 'Express'],
        featured: true,
      },
      {
        title: 'High-Scale E-Commerce & Checkout',
        category: 'E-Commerce / Front-end',
        description: 'Development and optimization of critical showcase, cart, and checkout flows, along with institutional microservices in Next.js and NestJS.',
        tags: ['React', 'Next.js', 'NestJS', 'Prisma ORM', 'Redux Toolkit', 'Zustand'],
        featured: true,
      },
    ],
    experiences: [
      {
        company: 'Livelo',
        role: 'Senior Front/Mobile Developer',
        period: '11/2025 — Present',
        location: 'Remote',
        current: true,
        description: 'Maintenance and evolution of the corporate Design System, ensuring visual and technical consistency for multiple Micro Front-ends. Development of high-complexity components with React, React Native, Next.js, Emotion, and Expo aimed at cross-platform reuse (Web and Mobile), with adoption governance and E2E (Cypress) and unit (Jest) test coverage.',
        highlights: [
          'Maintenance and evolution of the Design System for multiple Micro Front-ends.',
          'High-complexity components in React, React Native, Next.js, Emotion, and Expo (Web and Mobile).',
          'Governance, documentation, and library adoption analysis.',
          'E2E (Cypress) and unit (Jest) test pipelines.',
        ],
        technologies: ['React', 'React Native', 'Next.js', 'Emotion', 'Expo', 'Design Systems', 'Micro Front-ends', 'Cypress', 'Jest'],
      },
      {
        company: 'Epimed Solutions',
        role: 'Mid-level Front-end Developer',
        period: '04/2023 — 11/2025',
        location: 'Remote',
        description: 'Architecture and development of systems for the HealthTech sector with Next.js and TypeScript. Construction of the Design System from scratch using Storybook, Radix UI, and Tailwind CSS. Integration of complex systems with JWT/SSO authentication and API consumption via Swagger with React Query.',
        highlights: [
          'HealthTech systems architecture with Next.js and TypeScript.',
          'Building the Design System from scratch with Storybook, Radix UI, and Tailwind CSS.',
          'JWT/SSO authentication and API consumption with React Query and Swagger.',
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Radix UI', 'React Query', 'Swagger', 'JWT / SSO'],
      },
      {
        company: 'Epidemiological Intelligence Center (SMS-RJ)',
        role: 'Mid-level Fullstack Developer',
        period: '05/2022 — 07/2024',
        location: 'Remote',
        description: 'Development of data engineering solutions for public health in Rio de Janeiro. Creation of Node.js services that automate SUS API consumption and PostgreSQL database population, dynamic analytical dashboards with ReactJS and ApexCharts, and scraping with Puppeteer.',
        highlights: [
          'Node.js services for automated SUS API data ingestion into PostgreSQL.',
          'Dynamic analytical dashboards with ReactJS and ApexCharts.',
          'Automation and data collection with Puppeteer.',
        ],
        technologies: ['Node.js', 'React', 'PostgreSQL', 'ApexCharts', 'Puppeteer', 'Express', 'REST APIs'],
      },
      {
        company: 'HEAP Software Engineering',
        role: 'Mid-level Front-end Developer',
        period: '04/2022 — 04/2023',
        location: 'Remote',
        description: 'Development and maintenance of large-scale e-commerces, optimizing Cart and Checkout flows. Fullstack architecture using Next.js and NestJS with Prisma ORM, and state management with Redux Toolkit and Zustand.',
        highlights: [
          'Maintenance and optimization of high-converting cart and checkout flows.',
          'Fullstack applications with Next.js, NestJS, and Prisma ORM.',
          'State management with Redux Toolkit and Zustand.',
        ],
        technologies: ['React', 'Next.js', 'NestJS', 'Prisma ORM', 'Redux Toolkit', 'Zustand', 'TypeScript'],
      },
      {
        company: 'RioSaúde (Public Health Company of RJ)',
        role: 'Junior Front-end Developer',
        period: '10/2021 — 03/2022',
        location: 'Rio de Janeiro, RJ',
        description: 'Development of modern interfaces for public health management with ReactJS and JavaScript (ES6+). Maintenance and evolution of public recruitment systems integrating React front-end with PHP back-end, along with UI standardization with Ant Design and Styled-components.',
        highlights: [
          'Interfaces for public health management in React and JavaScript ES6+.',
          'Integration of candidate screening modules for public selection processes.',
          'Visual standardization with Ant Design, Styled Components, and Bootstrap.',
        ],
        technologies: ['React', 'JavaScript (ES6+)', 'Styled Components', 'Ant Design', 'Bootstrap', 'PHP', 'GitHub'],
      },
    ],
    skills: [
      {
        category: 'Front-end & Mobile',
        items: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Expo', 'Micro Front-ends', 'HTML5', 'CSS3 / SASS'],
      },
      {
        category: 'UI & Design Systems',
        items: ['Tailwind CSS', 'Radix UI', 'Shadcn/UI', 'Emotion', 'Storybook', 'Styled Components', 'Material UI', 'Figma'],
      },
      {
        category: 'State, Data Fetching & Testing',
        items: ['Zustand', 'Redux Toolkit', 'React Query (TanStack Query)', 'Jest', 'Cypress', 'React Testing Library'],
      },
      {
        category: 'Back-end, Databases & DevOps',
        items: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'Prisma ORM', 'REST APIs', 'Git / GitHub', 'Docker', 'CI/CD', 'Vite'],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Information Systems',
        institution: 'Universidade Veiga de Almeida',
        period: '02/2022 — 12/2026',
        status: 'In progress',
      },
      {
        degree: 'React JS / Next.js & Modern Ecosystem',
        institution: 'Udemy',
        period: '2021',
        status: 'Specialization',
      },
      {
        degree: 'Advanced JavaScript & Modern ES6+',
        institution: 'Udemy',
        period: '2020',
        status: 'Specialization',
      },
    ],
    marqueeKeywords: [
      'WEB',
      'FRONTEND',
      'MOBILE',
      'DESIGN SYSTEMS',
      'REACT',
      'REACT NATIVE',
      'NEXT.JS',
      'TYPESCRIPT',
      'JAVASCRIPT',
      'MICRO FRONT-ENDS',
      'EXPO',
      'TAILWIND CSS',
      'NODE.JS',
      'CYPRESS',
      'JEST',
      'FIGMA',
      'GIT',
    ],
  },
};
