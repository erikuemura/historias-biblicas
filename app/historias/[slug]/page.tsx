import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import {
  ArrowLeft,
  BookOpen,
  Clock,
  ChevronLeft,
  ChevronRight,
  Heart,
  Lightbulb,
} from "lucide-react"
import { stories, getStoryBySlug } from "@/data/stories"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) return {}
  return {
    title: `${story.title} | Histórias da Bíblia para Crianças`,
    description: story.description,
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) notFound()

  const currentIndex = stories.findIndex((s) => s.slug === slug)
  const prevStory = currentIndex > 0 ? stories[currentIndex - 1] : null
  const nextStory =
    currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null

  return (
    <div>
      {/* Hero */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${story.gradient} text-white`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/historias"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Todas as histórias
          </Link>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="text-8xl sm:text-9xl drop-shadow-lg">{story.emoji}</div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-semibold bg-white/25 px-3 py-1 rounded-full">
                  {story.bibleReference}
                </span>
                <span className="text-xs font-semibold bg-white/25 px-3 py-1 rounded-full">
                  {story.ageRange}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold bg-white/25 px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  {story.readingTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-2">
                {story.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 font-medium italic">
                {story.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 text-gray-700 text-lg leading-relaxed font-medium">
          {story.description}
        </div>

        {/* Scenes */}
        <div className="space-y-14">
          {story.scenes.map((scene, index) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0`}
                >
                  {index + 1}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                  {scene.title}
                </h2>
              </div>

              <div className="pl-0 sm:pl-14">
                <div className="prose-story">
                  {scene.text.split("\n\n").map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-5 last:mb-0">
                      {paragraph.startsWith("— ") ? (
                        <span className="italic text-gray-700">{paragraph}</span>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </div>

              {index < story.scenes.length - 1 && (
                <div className="flex items-center gap-3 mt-10">
                  <div className="flex-1 h-px bg-amber-200" />
                  <div className="text-amber-300 text-lg">✦</div>
                  <div className="flex-1 h-px bg-amber-200" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Moral lesson */}
        <div className="mt-14 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-black text-gray-900">
              O que aprendemos hoje?
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed font-medium pl-0 sm:pl-14">
            {story.moralLesson}
          </p>
        </div>

        {/* Prayer suggestion */}
        <div className="mt-6 bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🙏</span>
            <h3 className="font-bold text-purple-900">Hora de orar juntos!</h3>
          </div>
          <p className="text-purple-700 text-sm leading-relaxed">
            Que tal terminar a história com uma oraçãozinha? Pergunte para seu
            filho: <strong>„O que você quer agradecer a Deus hoje?"</strong> e
            orem juntos com as palavras dele. Deus ama ouvir a voz das crianças!
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          {prevStory ? (
            <Link
              href={`/historias/${prevStory.slug}`}
              className="flex-1 flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-amber-600 group-hover:-translate-x-1 transition-all flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-400 font-medium mb-0.5">
                  História anterior
                </div>
                <div className="font-bold text-gray-800 text-sm truncate">
                  {prevStory.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextStory ? (
            <Link
              href={`/historias/${nextStory.slug}`}
              className="flex-1 flex items-center justify-end gap-3 p-4 bg-white rounded-2xl border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all group text-right"
            >
              <div className="min-w-0">
                <div className="text-xs text-gray-400 font-medium mb-0.5">
                  Próxima história
                </div>
                <div className="font-bold text-gray-800 text-sm truncate">
                  {nextStory.title}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>

        {/* Back + share */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100">
          <Link
            href="/historias"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-amber-300 text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Ver outras histórias
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            Compartilhe com outras famílias!
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-t border-amber-100 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-4xl mb-3">📬</div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">
            Gostou dessa história?
          </h3>
          <p className="text-gray-600 mb-6">
            Cadastre seu e-mail e seja avisado quando novas histórias chegarem!
          </p>
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-md"
          >
            Quero receber novas histórias
          </Link>
        </div>
      </div>
    </div>
  )
}
