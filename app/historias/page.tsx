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
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3">
          <Star className="w-4 h-4 fill-amber-400 stroke-amber-600" />
          COLEÇÃO COMPLETA
          <Star className="w-4 h-4 fill-amber-400 stroke-amber-600" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
          Todas as Histórias
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Histórias bíblicas escritas com carinho para crianças de 3 a 8 anos.
          Perfeitas para ler juntos na hora de dormir ou em qualquer momento
          especial!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stories.map((story, i) => (
          <StoryCard key={story.slug} story={story} index={i} />
        ))}
      </div>

      <div className="text-center mt-8 p-8 bg-amber-50 rounded-2xl border-2 border-dashed border-amber-200">
        <div className="text-4xl mb-3">✨</div>
        <h3 className="font-bold text-gray-900 text-lg mb-2">
          Mais histórias chegando!
        </h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-4">
          Estamos escrevendo novas histórias com muito carinho. Cadastre seu
          e-mail para ser avisado quando uma nova história for publicada!
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
