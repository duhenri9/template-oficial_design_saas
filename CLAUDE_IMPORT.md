# Importar Artefatos do Claude

Este guia explica como trazer artefatos exportados do Claude para este projeto.

## Opção A — ZIP/Download Local

1. Exporte os arquivos do Claude (ZIP) e descompacte em uma pasta local.
2. Rode:

```
./scripts/import-claude-artifacts.sh /caminho/para/pasta
```

Isso copia os arquivos para `src/claude-artifacts/` (Tailwind já escaneia essa pasta).

Depois, integre manualmente nos locais corretos:
- Componentes → `src/components/*`
- Páginas (App Router) → `src/app/*`
- APIs (App Router) → `src/app/api/<route>/route.ts`
- Assets → `public/*`

## Opção B — Repositório Git

Se os artefatos estiverem em um repositório Git:

```
git remote add claude <URL_DO_REPO>
git fetch claude
git checkout -b import/claude
git pull claude main   # ou o branch correto

# Mover arquivos manualmente para src/claude-artifacts ou estrutura final

git commit -am "chore: import claude artifacts"
git checkout main
git merge import/claude
```

## Conversão para App Router

Se vier código do Pages Router:
- `pages/index.tsx` → `src/app/page.tsx`
- `pages/api/*` → `src/app/api/*/route.ts` (handlers `GET/POST` exportados)
- SEO legado → `generateMetadata` ou metadados em `src/app/layout.tsx`

## Dicas
- Evite duplicar estilos globais, prefira classes utilitárias Tailwind.
- Revise imports relativos; use alias `@/*` sempre que possível (veja `tsconfig.json`).
- Teste com `npm run dev` e depois `npm run build`.

