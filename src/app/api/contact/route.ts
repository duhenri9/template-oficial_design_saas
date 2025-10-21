import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body?.name || '').trim();
    const email = String(body?.email || '').trim();
    const message = String(body?.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 });
    }

    const formspree = process.env.FORMSPREE_ENDPOINT;

    if (formspree) {
      const res = await fetch(formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        return NextResponse.json(
          { error: 'Falha ao enviar mensagem ao provedor de formulário.', details: text },
          { status: 502 }
        );
      }
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        error:
          'Nenhum provedor configurado. Defina FORMSPREE_ENDPOINT no ambiente para ativar o formulário.',
      },
      { status: 501 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Erro interno' }, { status: 500 });
  }
}

