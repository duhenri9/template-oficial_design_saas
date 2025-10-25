'use client';

import { useState } from 'react';
import Link from 'next/link';

const TEMPLATE_PRICE = 780;
const CUSTOM_PRICE = 2997;

function formatBRL(v: number) {
  try { return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v); } catch { return `R$ ${v.toFixed(2)}`; }
}

export default function CheckoutPage() {
  const [product, setProduct] = useState<'template' | 'custom'>('custom');
  const [donation, setDonation] = useState<number>(0);
  const productPrice = product === 'template' ? TEMPLATE_PRICE : CUSTOM_PRICE;
  const total = productPrice + donation;
  const productTitle = product === 'template' ? 'Template Oficial (Starter KIT)' : 'Customização + Template Oficial';

  function payDemo(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const url = `/checkout/success?demo=1&amount=${encodeURIComponent(String(total))}&product=${encodeURIComponent(productTitle)}`;
    window.location.href = url;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-4 p-4 rounded-lg border-2 border-indigo-200 bg-indigo-50 text-indigo-900">
          <p className="text-sm font-medium">
            Dica (DEMO): Ajuste os preços em <span className="font-mono bg-white px-1 py-0.5 rounded border">src/app/checkout/page.tsx</span> nas constantes <span className="font-mono bg-white px-1 py-0.5 rounded border">TEMPLATE_PRICE</span> e <span className="font-mono bg-white px-1 py-0.5 rounded border">CUSTOM_PRICE</span>. Em produção, conecte o provedor de pagamento de sua escolha.
          </p>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Finalize sua compra (DEMO)</h1>
          <p className="text-sm text-gray-500 mt-2">Fluxo de checkout simulado (sem provedores externos)</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
            <div className="space-y-6">
              <div>
                <div className="mb-2 text-sm font-semibold text-gray-900">Produto</div>
                <div className="grid grid-cols-1 gap-2">
                  {([
                    { key: 'template', label: 'Template Oficial (Starter KIT)', price: TEMPLATE_PRICE },
                    { key: 'custom', label: 'Customização + Template Oficial', price: CUSTOM_PRICE },
                  ] as const).map((opt) => (
                    <label key={opt.key} className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition ${product === opt.key ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-200'}`}>
                      <div className="flex items-center gap-3">
                        <input type="radio" name="product" checked={product === opt.key} onChange={() => setProduct(opt.key)} className="accent-indigo-600" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{opt.label}</div>
                          <div className="text-xl font-bold text-indigo-600">{formatBRL(opt.price)}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm font-semibold text-gray-900">Doação opcional</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[0, 50, 100, 200, 500].map((v) => (
                    <label key={v} className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition ${donation === v ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-200'}`}>
                      <input type="radio" name="donation" checked={donation === v} onChange={() => setDonation(v)} className="accent-green-600" />
                      <span className="text-sm text-gray-800">{v === 0 ? 'Sem doação' : formatBRL(v)}</span>
                    </label>
                  ))}
                </div>
                <input type="number" min={0} step={10} value={donation} onChange={(e) => setDonation(Number(e.target.value))} placeholder="Ou digite um valor" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:outline-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Resumo do pedido</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{productTitle}</h3>
                  <p className="text-sm text-gray-600 mt-1">Licença comercial + 12 meses de atualizações</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{formatBRL(productPrice)}</div>
                </div>
              </div>

              {donation > 0 && (
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="font-semibold text-gray-900">Doação (opcional)</h3>
                    <p className="text-sm text-gray-600">Apoio ao projeto</p>
                  </div>
                  <div className="text-lg font-bold text-green-600">{formatBRL(donation)}</div>
                </div>
              )}

              <div className="flex justify-between text-xl font-bold pt-4 mb-6">
                <span className="text-gray-900">Total</span>
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{formatBRL(total)}</span>
              </div>

              {/* Ações */}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <a
                  href="#"
                  onClick={payDemo}
                  className="mt-6 w-full block py-3.5 rounded-xl text-center font-semibold transition bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg"
                >
                  Pagar (DEMO)
                </a>
                <Link
                  href="/"
                  className="w-full block py-3 rounded-xl text-center font-semibold border-2 border-gray-200 text-gray-700 hover:border-indigo-200 mt-3"
                >
                  Voltar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
