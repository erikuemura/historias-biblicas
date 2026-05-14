import Link from "next/link"
import { BookOpen, Sparkles, Heart, Star } from "lucide-react"
import StoryCard from "@/components/StoryCard"
import NewsletterForm from "@/components/NewsletterForm"
import { stories } from "@/data/stories"

export default function HomePage() {
  const oldTestament = stories.filter((s) => s.testament === "velho")
  const newTestament = stories.filter((s) => s.testament === "novo")

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="absolute top-8 right-1/4 text-white/30 text-4xl select-none">✦</div>
        <div className="absolute bottom-12 left-1/3 text-white/20 text-2xl select-none">✦</div>
        <div className="absolute top-1/3 right-12 text-white/25 text-3xl select-none">✦</div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/30">
              <Sparkles className="w-4 h-4" />10 histórias bíblicas para crianças
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Histórias da Bíblia
              <br />
              <span className="text-yellow-200">para Crianças</span>
            </h1>

            <p className="text-xl sm:text-2xl text-amber-100 leading-relaxed mb-10 font-medium">
              Histórias bíblicas lindas e cheias de ilustrações, escritas com
              carinho para pais lerem aos seus filhos pequenos.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/historias"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-700 font-bold rounded-2xl hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
              >
                <BookOpen className="w-5 h-5" />
                Explorar Histórias
              </Link>
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all text-lg"
              >
                <Heart className="w-5 h-5" />
                Receber Novidades
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 text-amber-100 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📖</span> Gratuito para sempre
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span> Ricas em ilustrações
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👨‍👩‍👧</span> Perfeito para famílias
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Velho Testamento */}
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
            Da criação do mundo ao corajoso Davi — histórias que toda criança
            precisa conhecer!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {oldTestament.map((story, i) => (
            <StoryCard key={story.slug} story={story} index={i} />
          ))}
        </div>
      </section>

      {/* Novo Testamento */}
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
              Do nascimento em Belém à ressurreição — as histórias mais lindas
              já contadas!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newTestament.map((story, i) => (
              <StoryCard key={story.slug} story={story} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Por que ler a Bíblia para crianças?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Momentos de leitura juntos criam memórias afetivas para toda a vida
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "💛",
                title: "Valores e caráter",
                text: "Histórias que ensinam coragem, bondade, fé e amor ao próximo de um jeito natural.",
              },
              {
                emoji: "🌟",
                title: "Momentos especiais",
                text: "A hora da história cria laços afetivos poderosos entre pais e filhos.",
              },
              {
                emoji: "🧠",
                title: "Desenvolvimento",
                text: "Histórias estimulam a imaginação, o vocabulário e o amor pela leitura.",
              },
              {
                emoji: "🙏",
                title: "Fé desde pequeno",
                text: "Plante sementes de fé que crescerão para sempre no coração das crianças.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        id="newsletter"
        className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 py-16 sm:py-20"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Receba novas histórias!
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Cadastre seu e-mail (e WhatsApp, se quiser) e seja o primeiro a saber
            quando uma nova história chegar. É grátis!
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
