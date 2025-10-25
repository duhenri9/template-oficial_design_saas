'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || 'Falha ao enviar mensagem');
      }
      setStatus('success');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setError(err?.message || 'Erro desconhecido');
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
      {status === 'success' && (
        <div className="mb-6 p-3 rounded-lg border-2 border-green-200 bg-green-50 text-green-800 text-sm">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input name="name" required placeholder="Seu nome" className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" name="email" required placeholder="seu@email.com" className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
        <textarea name="message" required rows={5} placeholder="Como podemos ajudar?" className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gradient-to-r from-purple-600 to-blue-600 disabled:opacity-60 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
        {status === 'success' && (
          <span className="text-green-600 text-sm">Mensagem enviada com sucesso!</span>
        )}
        {status === 'error' && (
          <span className="text-red-600 text-sm">{error}</span>
        )}
      </div>
      <p className="mt-4 text-xs text-gray-500">Ao enviar, você concorda em ser contactado(a) por email.</p>
    </form>
  );
}
