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

// Legacy content (kept via LandingClient)
// const plans = [
    {
      name: 'Starter',
      price: isAnnual ? 29 : 39,
      description: 'Perfeito para começar',
      features: [
        '5 projetos ativos',
        '10 GB de armazenamento',
        'Suporte por email',
        'Templates básicos'
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: isAnnual ? 79 : 99,
      description: 'Para profissionais',
      features: [
        'Projetos ilimitados',
        '100 GB de armazenamento',
        'Suporte prioritário',
        'Templates premium',
        'Colaboração em equipe',
        'Integrações avançadas'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: isAnnual ? 199 : 249,
      description: 'Para grandes equipes',
      features: [
        'Tudo do Pro',
        'Armazenamento ilimitado',
        'Suporte 24/7',
        'Templates customizados',
        'API dedicada',
        'Gerente de conta'
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              DesignSaaS
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Recursos</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">Preços</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition">Depoimentos</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contato</a>
          </div>
          <div className="flex space-x-4">
            <a href={LOGIN_URL} className="text-gray-700 hover:text-purple-600 transition">Entrar</a>
            <a href={SIGNUP_URL} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Começar Grátis
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            🎉 Novo: IA integrada para designs automáticos
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Crie Designs
            <br />
            Incríveis em Minutos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A plataforma completa de design que transforma suas ideias em realidade.
            Colabore em tempo real, acesse templates premium e exporte em qualquer formato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SIGNUP_URL} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
              Comece Gratuitamente
            </a>
            <a href={DEMO_URL} className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition">
              Ver Demo
            </a>
          </div>
          <div className="mt-12">
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <Check className="w-5 h-5 text-green-500" />
              <span>Sem cartão de crédito</span>
              <span className="mx-2">•</span>
              <Check className="w-5 h-5 text-green-500" />
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tudo que você precisa para criar
            </h2>
            <p className="text-xl text-gray-600">
              Recursos poderosos para designers de todos os níveis
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-xl transition">
              <Zap className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Super Rápido</h3>
              <p className="text-gray-600">
                Interface otimizada para máxima produtividade. Crie designs complexos em segundos.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-xl transition">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Seguro</h3>
              <p className="text-gray-600">
                Seus dados protegidos com criptografia de ponta a ponta e backups automáticos.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-xl transition">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Colaborativo</h3>
              <p className="text-gray-600">
                Trabalhe em equipe em tempo real. Comentários, versões e aprovações integradas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preços transparentes
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Escolha o plano perfeito para você
            </p>
            <div className="inline-flex items-center bg-white rounded-full p-1 border-2 border-gray-200">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full transition ${!isAnnual ? 'bg-purple-600 text-white' : 'text-gray-700'}`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full transition ${isAnnual ? 'bg-purple-600 text-white' : 'text-gray-700'}`}
              >
                Anual <span className="text-sm">(economize 25%)</span>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl border-2 ${
                  plan.highlighted
                    ? 'border-purple-600 shadow-2xl scale-105 bg-white'
                    : 'border-gray-200 bg-white'
                } transition hover:shadow-xl`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <a
                  href={`${CHECKOUT_URL}${CHECKOUT_URL.includes('?') ? '&' : '?'}plan=${encodeURIComponent(
                    plan.name.toLowerCase()
                  )}&billing=${isAnnual ? 'annual' : 'monthly'}`}
                  className={`w-full inline-block text-center py-3 rounded-full font-semibold transition ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600'
                  }`}
                >
                  Começar Agora
                </a>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Amado por milhares de designers
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos clientes estão dizendo
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                role: 'Designer Freelancer',
                text: 'Melhor ferramenta de design que já usei. Aumentou minha produtividade em 300%!'
              },
              {
                name: 'João Santos',
                role: 'Diretor de Criação',
                text: 'A colaboração em tempo real mudou completamente nosso workflow. Recomendo!'
              },
              {
                name: 'Ana Costa',
                role: 'Product Designer',
                text: 'Templates incríveis e interface intuitiva. Não consigo mais trabalhar sem!'
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de designers que já estão criando projetos incríveis
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
            Comece Grátis Agora
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Fale com a gente</h2>
            <p className="text-lg text-gray-600">Tire dúvidas, peça uma demo ou solicite uma proposta.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-bold">DesignSaaS</span>
              </div>
              <p className="text-gray-400">
                Transformando ideias em designs incríveis
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DesignSaaS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
