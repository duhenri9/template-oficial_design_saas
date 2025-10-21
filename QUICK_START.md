# ⚡ Quick Start

## 🚀 Deploy em 3 Passos

### 1️⃣ Criar repositório no GitHub
```bash
# Vá para: https://github.com/new
# Nome: design-saas
# Visibilidade: Public
# NÃO marque "Add a README file"
# Clique em "Create repository"
```

### 2️⃣ Conectar e fazer push
```bash
# Copie a URL do seu repositório (ex: https://github.com/seu-usuario/design-saas.git)

git remote add origin https://github.com/SEU-USUARIO/design-saas.git
git add .
git commit -m "Initial commit: DesignSaaS landing page"
git push -u origin main
```

Se der erro com 'main', tente:
```bash
git push -u origin master
```

### 3️⃣ Deploy na Vercel
```bash
# Vá para: https://vercel.com/new
# Clique em "Import Git Repository"
# Selecione seu repositório "design-saas"
# Clique em "Deploy"
# ✅ PRONTO! Aguarde ~2 minutos
```

---

## 🧪 Testar Localmente

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

---

## 📝 Comandos Úteis

```bash
# Ver status do git
git status

# Ver arquivos do projeto
ls -la

# Instalar dependências novamente
npm install

# Limpar cache
rm -rf .next node_modules
npm install

# Ver versão do Node
node --version

# Verificar erros de lint
npm run lint
```

---

## 🎨 Personalizar Rapidamente

### Mudar nome da empresa
```bash
# Abra src/app/page.tsx
# Busque por "DesignSaaS" e substitua
```

### Mudar cores
```bash
# Abra src/app/page.tsx
# Busque por "purple-600" e "blue-600"
# Substitua por: red, green, yellow, pink, indigo, etc.
```

### Mudar preços
```bash
# Abra src/app/page.tsx
# Busque por "plans = [" (linha ~11)
# Altere os valores de "price"
```

---

## 🔗 Links Importantes

- **Vercel:** https://vercel.com
- **GitHub:** https://github.com
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

---

## ✅ Checklist

- [ ] Repositório criado no GitHub
- [ ] Código enviado (git push)
- [ ] Deploy na Vercel concluído
- [ ] Site acessível pela URL da Vercel
- [ ] Testado em diferentes dispositivos
- [ ] Customizado com seu conteúdo

---

**Precisa de ajuda? Veja o arquivo `DEPLOY_GUIDE.md` para instruções detalhadas!**
