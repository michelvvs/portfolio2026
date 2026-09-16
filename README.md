# <michelvvs /> — Portfolio 2026

Portfólio minimalista, editorial e de alta performance desenvolvido com **React 19**, **TypeScript**, **Vite** e **Tailwind CSS v4**. Inspirado nas melhores referências de design moderno, com estética dark mode, tipografia refinada e suporte bilíngue nativo.

🔗 **Live Demo / Domínio:** [michelvvs.com](https://michelvvs.com)  
👤 **Autor:** Michel Victor ([@michelvvs](https://github.com/michelvvs)) — Senior Front-end & Mobile Engineer na Livelo

---

## ✨ Destaques & Funcionalidades

- 🌐 **Suporte Bilíngue Nativo (`pt-BR` / `en-US`):** Alternância instantânea de idioma com persistência em `localStorage` e sincronização do `<html lang>` e `<title>`.
- ⚡ **Hero Section com Cyberpunk / Clean Frame:** Avatar circular com halo sutil em neon esmeralda e badge de código `</>`.
- 🏷️ **Logo de Marca em Estilo Tag HTML:** `<michelvvs />` interativo na barra de navegação sticky com efeito backdrop blur.
- 🔁 **Infinite Marquee Ticker:** Faixa horizontal infinita com palavras-chave de tecnologia em movimento suave contínuo.
- 💬 **Integração Direta com WhatsApp:** Link dinâmico com mensagem pré-definida para contratação e contato rápido.
- 📋 **Ações Rápidas em 1-Clique:** Copiar e-mail e telefone com feedback visual instantâneo e abertura de cliente de e-mail.
- 🛠️ **Stack & Habilidades Estruturada:** Grid responsivo 2x2 categorizado por domínio técnico (Front-end & Mobile, UI & Design Systems, Estado & Testes, Back-end & DevOps) com ícones temáticos oficiais.
- 📜 **Linha do Tempo de Carreira:** Histórico profissional detalhado com destaques de realizações e badges de tecnologias.
- 📄 **Download de Currículo PDF:** Link direto para o PDF atualizado localizado em `/public`.
- 📱 **100% Responsivo & Acessível:** Layout fluido do mobile ao desktop widescreen com menu drawer animado.

---

## 🚀 Tecnologias Utilizadas

- **Framework / Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite 6](https://vite.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) com `@tailwindcss/vite`
- **Ícones:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons / Tabler)
- **Tipografia:** [Inter](https://fonts.google.com/specimen/Inter) e [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts

---

## 📁 Estrutura do Projeto

```
portfolio202609/
├── public/
│   ├── avatar.jpg               # Imagem de perfil pública
│   └── curriculo Michel.pdf     # Currículo em PDF para download
├── src/
│   ├── assets/
│   │   └── avatar.jpg           # Asset de imagem otimizado
│   ├── components/
│   │   ├── About.tsx            # Seção Sobre com biografia e ações
│   │   ├── Education.tsx        # Formação acadêmica e especializações
│   │   ├── Experience.tsx       # Linha do tempo profissional
│   │   ├── Footer.tsx           # Chamada de contato e rodapé
│   │   ├── Hero.tsx             # Hero com avatar circular e badges
│   │   ├── Icons.tsx            # Ícones SVG dedicados (WhatsApp, LinkedIn, GitHub)
│   │   ├── LanguageSelector.tsx # Seletor de idioma PT / EN
│   │   ├── MarqueeBanner.tsx    # Ticker horizontal infinito
│   │   ├── Navbar.tsx           # Barra de navegação com brand <michelvvs />
│   │   ├── Projects.tsx         # Projetos em destaque (opcional/modular)
│   │   ├── Skills.tsx           # Grid 2x2 de competências técnicas
│   │   └── TechBadge.tsx        # Badges dinâmicos com ícones oficiais de techs
│   ├── context/
│   │   └── LanguageContext.tsx  # Gerenciamento global de estado de idioma
│   ├── data/
│   │   └── portfolioData.ts     # Dataset central tipado (pt-BR e en-US)
│   ├── App.tsx                  # Estrutura principal da página
│   ├── index.css                # Configurações do Tailwind CSS e estilos globais
│   └── main.tsx                 # Entrypoint da aplicação React
├── index.html                   # HTML base com SEO e meta tags
├── package.json                 # Dependências e scripts
├── tsconfig.json                # Configurações do TypeScript
└── vite.config.ts               # Configurações do Vite
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js (v18 ou superior recomendado)
- npm, yarn ou pnpm

### Instalação & Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/michelvvs/portfolio2026.git
   cd portfolio2026
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:5173` no seu navegador.

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```

5. **Visualizar build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## ✏️ Customização de Conteúdo

Todo o conteúdo textual, experiências, habilidades, links e dados de contato estão centralizados em [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).

Para alterar qualquer informação:
1. Abra `src/data/portfolioData.ts`.
2. Atualize os campos desejados nas chaves `'pt-BR'` e `'en-US'`.

---

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE) — sinta-se à vontade para utilizar como base para o seu próprio portfólio.
