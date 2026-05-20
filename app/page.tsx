import Link from "next/link"
import { BookOpen, Heart, Star, ArrowRight } from "lucide-react"
import StoryCard from "@/components/StoryCard"
import NewsletterForm from "@/components/NewsletterForm"
import { stories } from "@/data/stories"

export const metadata = {
  title: "Histórias da Bíblia para Crianças — Ilustradas e com Narração",
  description:
    "Histórias bíblicas ilustradas e narradas, escritas com carinho para pais lerem aos filhos de 3 a 8 anos. Gratuito, com áudio e ilustrações!",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? "https://historinhasbiblicas.com.br",
  },
}

export default function HomePage() {
  const oldTestament = stories.filter((s) => s.testament === "velho")
  const newTestament = stories.filter((s) => s.testament === "novo")
  const totalStories = stories.length

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 text-white">
        {/* blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        </div>
        {/* decorative stars */}
        <div className="absolute top-8 right-1/4 text-white/30 text-4xl select-none">✦</div>
        <div className="absolute bottom-12 left-1/3 text-white/20 text-2xl select-none">✦</div>
        <div className="absolute top-1/3 right-12 text-white/25 text-3xl select-none">✦</div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-white/30">
              <Heart className="w-4 h-4 fill-white" />
              Para pais que querem plantar fé desde cedo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Um momento especial
              <br />
              <span className="text-yellow-200">a cada história contada</span>
            </h1>

            <p className="text-xl sm:text-2xl text-amber-100 leading-relaxed mb-4 font-medium">
              Histórias bíblicas lindas para você ler com seu filho — e junto aproximar
              o coração das crianças de Jesus.
            </p>
            <p className="text-base sm:text-lg text-amber-200 leading-relaxed mb-10">
              Gratuito, ilustrado e com narração em áudio. Histórias esperando por vocês.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/historias"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-700 font-bold rounded-2xl hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
              >
                <BookOpen className="w-5 h-5" />
                Ver todas as histórias
              </Link>
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all text-lg"
              >
                <Heart className="w-5 h-5" />
                Receber novidades
              </a>
            </div>

            {/* quick proof */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-amber-100 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📖</span> Sempre gratuito
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span> Ricas em ilustrações
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔊</span> Narração em áudio
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👨‍👩‍👧</span> Feito para famílias
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROPÓSITO ── */}
      <section className="bg-white py-16 sm:py-20 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">✝️</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-snug">
            Aproximar pais e filhos —<br className="hidden sm:block" />
            <span className="text-amber-500"> à luz da Palavra de Deus</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Cada história foi escrita para ser um momento de comunhão: você, seu filho
            e a Bíblia. Enquanto a imaginação das crianças viaja pelas histórias,
            sementes de fé são plantadas nos seus corações — de um jeito suave, carinhoso
            e cheio de amor.
          </p>

          {/* 3 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 text-left">
            {[
              {
                icon: "🤝",
                title: "Pais e filhos mais unidos",
                text: "A hora da história cria memórias afetivas que duram para sempre. Um ritual simples que fortalece o vínculo familiar.",
              },
              {
                icon: "✨",
                title: "Crianças perto de Jesus",
                text: "Apresentar Jesus de forma amorosa e acessível enquanto a criança ainda é pequena — é o maior presente que um pai pode dar.",
              },
              {
                icon: "📖",
                title: "A Bíblia de forma viva",
                text: "Histórias em linguagem simples e cheia de cor, para que a Palavra de Deus faça sentido desde os primeiros anos de vida.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="flex flex-col items-start gap-3 p-6 rounded-2xl bg-amber-50 border border-amber-100"
              >
                <span className="text-3xl">{p.icon}</span>
                <h3 className="font-bold text-gray-900 text-base">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARTA PARA OS PAIS ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-rose-100 p-8 sm:p-12 relative">
            {/* quote mark */}
            <div className="absolute top-6 left-8 text-7xl text-rose-100 font-serif leading-none select-none">"</div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-rose-500 font-semibold text-sm mb-6">
                <Heart className="w-4 h-4 fill-rose-400" />
                Uma carta para você, pai ou mãe
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Você não precisa ser perfeito — precisa estar presente. Ler uma história bíblica
                antes de dormir pode parecer simples, mas é um dos maiores atos de amor que você
                pode oferecer ao seu filho.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                É nesse momento tranquilo, com o livro aberto e seu filho nos seus braços, que ele
                aprende que existe um Deus que o ama, que a vida tem propósito, e que a família é sagrada.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Que cada história aqui seja um fio dourado que une o coração do seu filho ao coração de Jesus. 🙏
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center text-white font-bold text-sm">
                  HB
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Histórias Bíblicas</div>
                  <div className="text-xs text-gray-400">Para crianças de 3 a 8 anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VELHO TESTAMENTO ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3">
            <Star className="w-4 h-4 fill-amber-400 stroke-amber-600" />
            VELHO TESTAMENTO
            <Star className="w-4 h-4 fill-amber-400 stroke-amber-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            As Grandes Histórias de Israel
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Da criação do mundo ao corajoso Davi — histórias que toda criança precisa conhecer!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {oldTestament.map((story, i) => (
            <StoryCard key={story.slug} story={story} index={i} />
          ))}
        </div>
      </section>

      {/* ── NOVO TESTAMENTO ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm mb-3">
              <Star className="w-4 h-4 fill-purple-400 stroke-purple-600" />
              NOVO TESTAMENTO
              <Star className="w-4 h-4 fill-purple-400 stroke-purple-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              A Vida e os Milagres de Jesus
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Do nascimento em Belém à ressurreição — as histórias mais lindas já contadas!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newTestament.map((story, i) => (
              <StoryCard key={story.slug} story={story} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/historias"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl transition-all shadow-md hover:shadow-lg hover:scale-105 text-lg"
            >
              Ver todas as histórias
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="bg-amber-50 py-16 sm:py-20 border-t border-amber-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Como funciona?
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Simples, bonito e feito para a hora do sono.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                emoji: "📚",
                title: "Escolha uma história",
                text: "Navegue pelo acervo e escolha a história que mais agradou você ou seu filho.",
              },
              {
                step: "2",
                emoji: "🛏️",
                title: "Leia junto na hora do sono",
                text: "Aconcheguem-se juntos. Você lê, ou deixa o áudio narrar — o que for melhor para vocês.",
              },
              {
                step: "3",
                emoji: "🙏",
                title: "Termine com uma oração",
                text: "Cada história termina com uma sugestão de oração para encerrar o momento com Deus.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-white font-black text-2xl flex items-center justify-center shadow-md">
                  {item.step}
                </div>
                <div className="text-4xl">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section
        id="newsletter"
        className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 py-16 sm:py-20"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Receba novas histórias!
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Cadastre seu e-mail e seja o primeiro a saber quando uma nova história
            chegar para você ler com seu filho. É grátis!
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
