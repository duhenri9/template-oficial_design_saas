#!/bin/bash

# Script para fazer deploy do projeto no GitHub

echo "🚀 Iniciando deploy para GitHub..."

# Verificar se há um repositório remoto configurado
if ! git remote | grep -q 'origin'; then
    echo "⚠️  Nenhum repositório remoto encontrado."
    echo "📝 Por favor, crie um repositório no GitHub e execute:"
    echo "   git remote add origin https://github.com/seu-usuario/design-saas.git"
    exit 1
fi

# Adicionar todos os arquivos
echo "📦 Adicionando arquivos ao git..."
git add .

# Criar commit
echo "💾 Criando commit..."
git commit -m "feat: Initial commit - DesignSaaS landing page

- Landing page completa com Next.js 14
- Design responsivo com Tailwind CSS
- Seções: Hero, Features, Pricing, Testimonials
- Configuração TypeScript
- Pronto para deploy"

# Push para o repositório
echo "🔄 Enviando para o GitHub..."
git push -u origin main || git push -u origin master

echo "✅ Deploy concluído com sucesso!"
echo "🌐 Próximos passos:"
echo "   1. Acesse https://vercel.com"
echo "   2. Importe seu repositório do GitHub"
echo "   3. Configure o projeto (Next.js será detectado automaticamente)"
echo "   4. Deploy!"
