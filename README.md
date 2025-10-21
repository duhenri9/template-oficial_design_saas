# DesignSaaS Landing Page

Uma landing page moderna e responsiva para um SaaS de design, construída com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Recursos

- ✨ Design moderno com gradientes e animações
- 📱 Totalmente responsivo
- ⚡ Otimizado com Next.js 14
- 🎨 Estilizado com Tailwind CSS
- 🔧 TypeScript para type safety
- 🎯 Componentes interativos com React
- 🧭 SEO pronto (OpenGraph, `robots.txt`, `sitemap.xml`)
- 📈 Google Analytics (via `NEXT_PUBLIC_GA_ID`)
- 📬 Formulário de contato (via Formspree, opcional)
- 🔗 CTAs configuráveis por ambiente (login, signup, checkout, demo)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones

## ⚙️ Configuração

Crie um arquivo `.env.local` a partir de `.env.example` e ajuste conforme necessário:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# (Opcional) Analytics
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# (Opcional) URLs de CTA
# NEXT_PUBLIC_SIGNUP_URL=https://app.seusite.com/signup
# NEXT_PUBLIC_LOGIN_URL=https://app.seusite.com/login
# NEXT_PUBLIC_CHECKOUT_URL=https://checkout.seusite.com/checkout
# NEXT_PUBLIC_DEMO_URL=https://demo.seusite.com

# (Opcional) Formulário de contato (Formspree)
# FORMSPREE_ENDPOINT=https://formspree.io/f/SEU_ID
```

Com isso:
- Os botões “Entrar”, “Começar Grátis”, “Ver Demo” e “Começar Agora” apontam para suas URLs.
- O GA é habilitado automaticamente quando `NEXT_PUBLIC_GA_ID` está definido.
- O formulário em `/#contact` envia para o Formspree quando `FORMSPREE_ENDPOINT` está definido.

## 📁 Estrutura do Projeto

```
design-saas/
├── src/
│   └── app/
│       ├── page.tsx          # Landing page principal
│       ├── layout.tsx         # Layout raiz
│       └── globals.css        # Estilos globais
│       ├── robots.ts          # robots.txt dinâmico
│       ├── sitemap.ts         # sitemap.xml dinâmico
│       ├── icon.svg           # Ícone do app (favicon)
│       ├── components/
│       │   └── ContactForm.tsx
│       └── api/
│           └── contact/route.ts # API do formulário (Formspree)
├── public/                    # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 Seções da Landing Page

1. **Hero** - Cabeçalho com CTA principal
2. **Features** - Recursos principais
3. **Pricing** - Tabela de preços (mensal/anual)
4. **Testimonials** - Depoimentos de clientes
5. **CTA** - Call-to-action final
6. **Contact** - Formulário de contato (opcional)
7. **Footer** - Rodapé com links

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Outras plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js, como:
- Netlify
- AWS Amplify
- Digital Ocean
- Render

## 📝 Licença

MIT
