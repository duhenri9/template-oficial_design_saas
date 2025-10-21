# 🚀 Guia de Deploy - DesignSaaS

## ✅ Projeto Criado com Sucesso!

Seu projeto Next.js está pronto para deploy. Todos os arquivos foram criados e o build foi testado com sucesso.

## 📋 Estrutura do Projeto

```
designsaas/
├── src/
│   └── app/
│       ├── page.tsx          # Landing page principal
│       ├── layout.tsx         # Layout raiz
│       └── globals.css        # Estilos globais
├── package.json               # Dependências
├── tsconfig.json              # Configuração TypeScript
├── tailwind.config.ts         # Configuração Tailwind
├── next.config.mjs            # Configuração Next.js
├── .gitignore                 # Arquivos ignorados pelo Git
├── deploy-to-github.sh        # Script de deploy
└── README.md                  # Documentação
```

## 🎯 Opções de Deploy

### Opção 1: Deploy na Vercel (Recomendado - GRÁTIS)

A Vercel é a plataforma oficial do Next.js e oferece deploy gratuito e automático.

**Passo a Passo:**

1. **Criar repositório no GitHub:**
   ```bash
   # No navegador, vá para https://github.com/new
   # Crie um novo repositório (ex: design-saas)
   # NÃO inicialize com README (já temos um)
   ```

2. **Conectar ao repositório remoto:**
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/design-saas.git
   ```

3. **Fazer o primeiro push:**
   ```bash
   ./deploy-to-github.sh
   # OU manualmente:
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

4. **Deploy na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New Project"
   - Importe seu repositório do GitHub
   - Vercel detectará Next.js automaticamente
   - Clique em "Deploy"
   - ✅ Pronto! Seu site estará no ar em ~2 minutos

**URL final:** `https://seu-projeto.vercel.app`

---

### Opção 2: Deploy na Netlify (GRÁTIS)

1. **Push para GitHub** (mesmo processo acima)

2. **Deploy na Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - "Add new site" → "Import an existing project"
   - Conecte com GitHub
   - Selecione seu repositório
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Deploy!

---

### Opção 3: Deploy no Render (GRÁTIS)

1. **Push para GitHub** (mesmo processo acima)

2. **Deploy no Render:**
   - Acesse [render.com](https://render.com)
   - "New" → "Static Site"
   - Conecte com GitHub
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Deploy!

---

## 🧪 Testar Localmente

Antes de fazer deploy, você pode testar localmente:

```bash
# Modo desenvolvimento
npm run dev
# Acesse: http://localhost:3000

# Build de produção
npm run build
npm start
# Acesse: http://localhost:3000
```

---

## 🔧 Customização

### Alterar cores
Edite `src/app/page.tsx` e procure por:
- `from-purple-600` → Troque purple por outra cor
- `to-blue-600` → Troque blue por outra cor

### Alterar textos
Todos os textos estão em `src/app/page.tsx`. Busque por:
- "DesignSaaS" → Nome da empresa
- "Crie Designs Incríveis" → Headline
- Seções de features, pricing, testimonials

### Adicionar novas seções
Adicione novos componentes em `src/app/page.tsx` seguindo a estrutura existente.

---

## 🔐 Variáveis de Ambiente (Vercel)

Defina as variáveis no painel do projeto (Settings → Environment Variables):

- `NEXT_PUBLIC_SITE_URL` → URL pública do site (ex: https://designsaas.vercel.app)
- `NEXT_PUBLIC_GA_ID` → ID do Google Analytics (opcional)
- `NEXT_PUBLIC_SIGNUP_URL` → URL de cadastro (opcional)
- `NEXT_PUBLIC_LOGIN_URL` → URL de login (opcional)
- `NEXT_PUBLIC_CHECKOUT_URL` → URL de checkout (opcional)
- `NEXT_PUBLIC_DEMO_URL` → URL da demo (opcional)
- `FORMSPREE_ENDPOINT` → Endpoint do Formspree para contato (opcional)

Quando definidas, as CTAs e o formulário funcionam automaticamente.

---

## 📝 Checklist Pré-Deploy

- [x] ✅ Build foi testado com sucesso
- [ ] Revisar textos e descrições
- [ ] Adicionar logo personalizado (se tiver)
- [ ] Configurar domínio personalizado (opcional)
- [ ] Adicionar Google Analytics (opcional)
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Definir URLs de login/signup/checkout (opcional)
- [ ] Configurar formulário de contato (Formspree) (opcional)

---

## 🆘 Problemas Comuns

### Erro ao fazer push
```bash
# Se o branch for 'master' em vez de 'main':
git push -u origin master
```

### Build falhando
```bash
# Limpar cache e reinstalar
rm -rf node_modules .next
npm install
npm run build
```

### Porta 3000 em uso
```bash
# Use outra porta
PORT=3001 npm run dev
```

---

## 📊 Próximos Passos

1. ✅ Deploy concluído
2. Configure domínio personalizado (ex: designsaas.com)
3. Adicione Google Analytics
4. Configure formulário de contato
5. Adicione backend para autenticação (se necessário)
6. Configure pagamentos (Stripe, etc)

---

## 🌟 Recursos da Landing Page

- ✨ Design moderno com gradientes
- 📱 Totalmente responsivo
- ⚡ Performance otimizada
- 🎨 Tailwind CSS
- 🔧 TypeScript
- 🎯 SEO-friendly
- 💳 Tabela de preços interativa
- 💬 Seção de depoimentos
- 📧 CTAs estratégicos

---

## 📞 Suporte

Problemas? Dúvidas?
- GitHub Issues: [Reportar problema](https://github.com/seu-usuario/design-saas/issues)
- Documentação Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)

---

**Boa sorte com seu projeto! 🚀**
