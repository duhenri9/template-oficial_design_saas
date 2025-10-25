"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // DEMO: sem backend. Apenas mostra um pequeno delay e reseta
    setTimeout(() => {
      setLoading(false);
      alert("DEMO: Tela de login não funcional. Conecte seu provedor de auth aqui.");
    }, 700);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Acessar sua conta</h1>
            <p className="text-sm text-gray-600 mt-1">DEMO – conecte seu provedor de autenticação em produção</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="voce@empresa.com"
                required
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 disabled:opacity-60 hover:shadow-lg transition"
            >
              {loading ? "Entrando..." : "Entrar (DEMO)"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600 font-medium">Voltar para início</Link>
            <span className="mx-2">•</span>
            <Link href="/checkout" className="hover:text-indigo-600 font-medium">Ir para Demo do Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

