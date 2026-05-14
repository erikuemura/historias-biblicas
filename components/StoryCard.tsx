import Link from "next/link"
import { Clock, BookOpen, ChevronRight } from "lucide-react"
import type { Story } from "@/data/stories"

interface StoryCardProps {
  story: Story
  index: number
}

export default function StoryCard({ story, index }: StoryCardProps) {
  return (
    <Link
      href={`/historias/${story.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={`relative h-48 bg-gradient-to-br ${story.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-white/30 blur-xl" />
          <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full bg-white/20 blur-2xl" />
        </div>

        <div className="relative text-center">
          <div className="text-7xl mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
            {story.emoji}
          </div>
        </div>

        <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">
          #{index + 1}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
            {story.bibleReference}
          </span>
          <span className="text-xs text-gray-400">{story.ageRange}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1 group-hover:text-amber-700 transition-colors">
          {story.title}
        </h3>
        <p className="text-sm text-gray-500 italic mb-3">{story.subtitle}</p>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
          {story.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {story.readingTime}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {story.scenes.length} cenas
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:gap-2 transition-all">
            Ler
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
