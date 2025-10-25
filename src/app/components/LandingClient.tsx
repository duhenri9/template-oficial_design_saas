'use client';

import { useState } from 'react';
import { ChevronDown, Check, Sparkles, Zap, Shield, Users } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function LandingClient() {
  const [isAnnual, setIsAnnual] = useState(false);

  const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL || '#';
  const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL || '#';
  // Em modo demo, preferimos /checkout por padrão
  const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || '/checkout';
  const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL || '/checkout';

  const plans = [
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
          <div className="mt-4">
            <a href="/docs" className="inline-block text-sm text-gray-700 hover:text-purple-600 transition underline underline-offset-4">
              Ver Documentação (guia rápido de customização)
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

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O que dizem nossos clientes</h2>
            <p className="text-xl text-gray-600">Resultados reais com o Template Oficial</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                role: 'Founder, Studio Criativo',
                text: 'Conseguimos lançar nosso SaaS em semanas. O fluxo de pagamentos e a base já pronta fizeram toda a diferença.'
              },
              {
                name: 'João Santos',
                role: 'CTO, ProdTech',
                text: 'A arquitetura é enxuta e bem pensada. O modo demo ajuda a validar a jornada antes de ligar provedores reais.'
              },
              {
                name: 'Ana Costa',
                role: 'Product Designer',
                text: 'A landing oficial pronta, com seções e CTAs bem definidos, acelerou muito nossa validação de mercado.'
              }
            ].map((t) => (
              <div key={t.name} className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">“{t.text}”</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
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
              <button onClick={() => setIsAnnual(false)} className={`px-6 py-2 rounded-full transition ${!isAnnual ? 'bg-purple-600 text-white' : 'text-gray-700'}`}>Mensal</button>
              <button onClick={() => setIsAnnual(true)} className={`px-6 py-2 rounded-full transition ${isAnnual ? 'bg-purple-600 text-white' : 'text-gray-700'}`}>
                Anual <span className="text-sm">(economize 25%)</span>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl border-2 ${plan.highlighted ? 'border-purple-600 shadow-2xl scale-105 bg-white' : 'border-gray-200 bg-white'} transition hover:shadow-xl`}>
                {plan.highlighted && (
                  <div className="mb-4 inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-semibold">Mais Popular</div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-700"><Check className="w-5 h-5 text-green-500" />{f}</li>
                  ))}
                </ul>
                <a href={CHECKOUT_URL} className={`block text-center px-6 py-3 rounded-full font-semibold transition ${plan.highlighted ? 'bg-purple-600 text-white hover:shadow-lg' : 'border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600'}`}>
                  Escolher Plano
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Fale com a gente</h2>
            <p className="text-gray-600">Tire dúvidas, peça uma demo ou solicite uma proposta.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
