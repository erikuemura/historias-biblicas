import { Metadata } from "next"
import { Star } from "lucide-react"
import StoriesGrid from "@/components/StoriesGrid"
import { stories } from "@/data/stories"

export const metadata: Metadata = {
  title: "Todas as Histórias | Histórias da Bíblia para Crianças",
  description:
    "Explore todas as histórias bíblicas infantis — lindas, ilustradas e escritas para pais lerem aos filhos pequenos.",
}

export default function StoriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3">
          <Star className="w-4 h-4 fill-amber-400 stroke-amber-600" />
          COLEÇÃO COMPLETA
          <Star className="w-4 h-4 fill-amber-400 stroke-amber-600" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
          Todas as Histórias
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Um momento único de comunhão entre pais e filhos — e com Deus.
        </p>
      </div>

      <StoriesGrid stories={stories} />
    </div>
  )
}
