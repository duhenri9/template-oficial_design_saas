export default function DocsPage() {
  const code = (s: string) => <code className="px-1 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-800 text-sm">{s}</code>;
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Documentação – Template Oficial (Demo)</h1>
        <p className="text-gray-600 mb-8">Guia rápido para entender e customizar a versão demo em PT‑BR.</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1) O que está ativo no Demo</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Home em PT‑BR com destaque para o fluxo de teste.</li>
              <li>Checkout em modo DEMO: não usa provedores externos.</li>
              <li>Página de Sucesso com detalhes simulados via query string.</li>
              <li>Contato com fallback DEMO (sem provider).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2) Alternar Demo vs. Landing</h2>
            <p className="text-gray-700 mb-2">
              Por padrão, quando o app roda na Vercel, a Home exibe a <strong>Demo PT‑BR</strong>.
              Para ativar manualmente (fora da Vercel), defina a variável {code('NEXT_PUBLIC_ENABLE_DEMO=true')}.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Arquivo: {code('src/app/page.tsx')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3) Ajustar preços e textos</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Checkout (DEMO): edite os preços em {code('src/app/checkout/page.tsx')} → constantes {code('TEMPLATE_PRICE')} e {code('CUSTOM_PRICE')}.</li>
              <li>Textos da landing (versão original): editar em {code('src/app/components/LandingClient.tsx')}.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4) Contato (provider opcional)</h2>
            <p className="text-gray-700 mb-2">Se quiser usar um provider (ex.: Formspree):</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Defina {code('FORMSPREE_ENDPOINT')} no ambiente.</li>
              <li>Arquivo da API: {code('src/app/api/contact/route.ts')}.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5) Próximos passos (produção)</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Pagamentos reais: integrar Stripe/Hotmart/Abacate conforme sua necessidade (fora do escopo deste demo).</li>
              <li>Emails transacionais: conectar provider (Resend/Postmark/SES) com variáveis de ambiente e rotas dedicadas.</li>
              <li>SEO e copy final: ajustar títulos e descrições na landing e na demo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6) Deploy</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Vercel: conecte a este repositório e use a branch {code('main')}.</li>
              <li>Em “Redeploy”, desmarque “Use existing Build Cache” quando houver mudanças grandes.</li>
            </ul>
          </section>

          <div className="mt-8">
            <a href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold">Voltar à Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

