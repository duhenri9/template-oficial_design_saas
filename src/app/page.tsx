import LandingClient from './components/LandingClient';
import Link from 'next/link';

function DemoPTBR() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl" />
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Template Oficial — Demo</span>
                <div className="text-xs text-gray-500">Português (Brasil)</div>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/checkout" className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-lg">Testar Checkout</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">SaaS Template em Next.js<br /><span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Pronto para Lançar</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">Base completa com autenticação, pagamentos, e-mails e banco — testável em modo demo, sem chaves.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/checkout" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl">Testar Fluxo Completo</Link>
            <Link href="/docs" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-indigo-200">Ver Documentação</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Page() {
  const isDemo = process.env.VERCEL === '1' || process.env.NEXT_PUBLIC_ENABLE_DEMO === 'true';
  return isDemo ? <DemoPTBR /> : <LandingClient />;
}
