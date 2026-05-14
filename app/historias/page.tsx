import { Metadata } from "next"
import { BookOpen, Star } from "lucide-react"
import StoryCard from "@/components/StoryCard"
import { stories } from "@/data/stories"

export const metadata: Metadata = {
  title: "Todas as Histórias | Histórias da Bíblia para Crianças",
  description:
    "Explore todas as histórias bíblicas infantis — lindas, ilustradas e escritas para pais lerem aos filhos pequenos.",
}

export default function StoriesPage() {
  const oldTestament = stories.filter((s) => s.testament === "velho")
  const newTestament = stories.filter((s) => s.testament === "novo")

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3">
          <Star className="w-4 h-4 fill-amber-400 stroke-amber-600" />
          COLEÇÃO COMPLETA
          <Star className="w-4 h-4 fill-amber-400 stroke-amber-600" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
          Todas as Histórias
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          10 histórias bíblicas escritas com carinho para crianças de 3 a 8
          anos. Perfeitas para ler juntos na hora de dormir!
        </p>
      </div>

      {/* Velho Testamento */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-amber-200" />
          <h2 className="text-xl font-black text-amber-700 flex items-center gap-2">
            📜 Velho Testamento
          </h2>
          <div className="h-px flex-1 bg-amber-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {oldTestament.map((story, i) => (
            <StoryCard key={story.slug} story={story} index={i} />
          ))}
        </div>
      </div>

      {/* Novo Testamento */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-purple-200" />
          <h2 className="text-xl font-black text-purple-700 flex items-center gap-2">
            ✝️ Novo Testamento
          </h2>
          <div className="h-px flex-1 bg-purple-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newTestament.map((story, i) => (
            <StoryCard key={story.slug} story={story} index={i} />
          ))}
        </div>
      </div>

      <div className="text-center p-8 bg-amber-50 rounded-2xl border-2 border-dashed border-amber-200">
        <div className="text-4xl mb-3">✨</div>
        <h3 className="font-bold text-gray-900 text-lg mb-2">
          Mais histórias chegando!
        </h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-4">
          Estamos escrevendo novas histórias com muito carinho. Cadastre seu
          e-mail para ser avisado!
        </p>
        <a
          href="/#newsletter"
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          Quero ser avisado!
        </a>
      </div>
    </div>
  )
}
