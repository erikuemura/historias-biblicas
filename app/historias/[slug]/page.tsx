import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import {
  ArrowLeft,
  BookOpen,
  Clock,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
} from "lucide-react"
import { stories, getStoryBySlug } from "@/data/stories"
import PrintButton from "@/components/PrintButton"
import AudioPlayer from "@/components/AudioPlayer"
import ShareButtons from "@/components/ShareButtons"

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
      <div className={`relative overflow-hidden bg-gradient-to-br ${story.gradient} text-white`}>
        {story.imageUrl && (
          <div className="absolute inset-0">
            <Image
              src={story.imageUrl}
              alt={story.title}
              fill
              className="object-cover opacity-35"
              priority
              sizes="100vw"
            />
          </div>
        )}
        {!story.imageUrl && (
          <div className="absolute inset-0">
            <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
          </div>
        )}

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

        {/* Full illustration below title */}
        {story.imageUrl && (
          <div className="relative w-full h-72 sm:h-96 overflow-hidden">
            <Image
              src={story.imageUrl}
              alt={story.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4 text-gray-700 text-lg leading-relaxed font-medium">
          {story.description}
        </div>

        {/* Audio player */}
        <div className="mb-10">
          <AudioPlayer
            slug={story.slug}
            scenes={story.scenes}
            gradient={story.gradient}
          />
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
                {scene.imageUrl && (
                  <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 shadow-md">
                    <Image
                      src={scene.imageUrl}
                      alt={scene.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                )}
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

          <div className="flex items-center gap-3">
            <PrintButton />
            <ShareButtons title={story.title} slug={story.slug} />
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

      {/* Redes sociais */}
      <div className="border-t border-gray-100 py-10 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-5">
            Siga-nos nas redes sociais
          </p>
          <div className="flex items-center justify-center gap-4">
            {/* WhatsApp */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:opacity-85 transition-opacity" style={{ background: "#25D366" }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">WhatsApp</span>
            </a>

            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:opacity-85 transition-opacity" style={{ background: "#1877F2" }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:opacity-85 transition-opacity" style={{ background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
