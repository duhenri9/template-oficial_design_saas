import Link from 'next/link';

function formatBRL(v: number) {
  try { return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v); } catch { return `R$ ${Number(v || 0).toFixed(2)}`; }
}

export default function SuccessPage({ searchParams }: { searchParams: { demo?: string; amount?: string; product?: string } }) {
  const isDemo = searchParams.demo === '1';
  const total = Number(searchParams.amount || '0');
  const productName = searchParams.product || 'Design SaaS – Pagamento (DEMO)';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white text-3xl">✓</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Pagamento confirmado{isDemo ? ' (DEMO)' : ''}!</h1>
            <p className="text-lg text-gray-600">Obrigado por apoiar nosso projeto.</p>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Detalhes da compra</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Produto:</span>
                <span className="font-semibold text-gray-900">{productName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total pago:</span>
                <span className="font-bold text-lg text-indigo-600">{formatBRL(total)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition">
              Voltar ao início
            </Link>
            <Link href="/docs" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-indigo-200 transition">
              Ver documentação
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

