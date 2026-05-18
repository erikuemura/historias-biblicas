"use client"

import { useState, useMemo } from "react"
import { Search, X, SlidersHorizontal } from "lucide-react"
import Fuse, { type IFuseOptions } from "fuse.js"
import StoryCard from "@/components/StoryCard"
import type { Story } from "@/data/stories"

type Testament = "todos" | "velho" | "novo"
type Duration = "todos" | "curta" | "media" | "longa"

function parseMins(readingTime: string) {
  return parseInt(readingTime)
}

// Remove acentos e normaliza para comparação (noée → noee, Dávi → Davi)
function normalize(str: string) {
  return str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
}

// Versão da história com campos pré-normalizados para o índice Fuse
type NormalizedStory = Story & {
  _n_title: string
  _n_subtitle: string
  _n_description: string
  _n_bible: string
}

const FUSE_OPTIONS: IFuseOptions<NormalizedStory> = {
  threshold: 0.35,
  distance: 300,
  minMatchCharLength: 2,
  includeScore: true,
  keys: [
    { name: "_n_title",       weight: 3   },
    { name: "_n_subtitle",    weight: 2   },
    { name: "_n_description", weight: 1.5 },
    { name: "_n_bible",       weight: 1   },
  ],
}

interface Props {
  stories: Story[]
}

export default function StoriesGrid({ stories }: Props) {
  const [testament, setTestament] = useState<Testament>("todos")
  const [duration, setDuration]   = useState<Duration>("todos")
  const [search, setSearch]       = useState("")

  // Pré-normaliza os campos e cria o índice Fuse uma só vez
  const fuse = useMemo(() => {
    const normalized: NormalizedStory[] = stories.map((s) => ({
      ...s,
      _n_title:       normalize(s.title),
      _n_subtitle:    normalize(s.subtitle),
      _n_description: normalize(s.description),
      _n_bible:       normalize(s.bibleReference),
    }))
    return new Fuse(normalized, FUSE_OPTIONS)
  }, [stories])

  const filtered = useMemo(() => {
    // 1. Busca fuzzy via Fuse (se houver texto)
    let pool: Story[]
    if (search.trim().length >= 2) {
      pool = fuse.search(normalize(search.trim())).map((r) => r.item)
    } else {
      pool = stories
    }

    // 2. Aplica filtros de testamento e duração em cima do resultado
    return pool.filter((s) => {
      if (testament !== "todos" && s.testament !== testament) return false
      if (duration !== "todos") {
        const mins = parseMins(s.readingTime)
        if (duration === "curta" && mins > 7)           return false
        if (duration === "media" && (mins < 8 || mins > 9)) return false
        if (duration === "longa" && mins < 10)          return false
      }
      return true
    })
  }, [stories, fuse, testament, duration, search])

  const hasFilters = testament !== "todos" || duration !== "todos" || search.trim()

  function clearAll() {
    setTestament("todos")
    setDuration("todos")
    setSearch("")
  }

  const testamentOptions: { value: Testament; label: string; emoji: string }[] = [
    { value: "todos", label: "Todos",            emoji: "📚" },
    { value: "velho", label: "Velho Testamento", emoji: "📜" },
    { value: "novo",  label: "Novo Testamento",  emoji: "✝️" },
  ]

  const durationOptions: { value: Duration; label: string; desc: string }[] = [
    { value: "todos",  label: "Qualquer duração", desc: ""          },
    { value: "curta",  label: "Rápida",           desc: "até 7 min" },
    { value: "media",  label: "Média",            desc: "8–9 min"   },
    { value: "longa",  label: "Longa",            desc: "10+ min"   },
  ]

  return (
    <div>
      {/* Busca */}
      <div className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nome ou personagem... (ex: Jesus, Moisés, Davi)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-10 py-3 text-sm rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-amber-400 bg-white placeholder:text-gray-400 shadow-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <SlidersHorizontal className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-bold text-amber-800">Filtrar histórias</span>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="ml-auto flex items-center gap-1 text-xs text-amber-700 hover:text-amber-900 font-semibold bg-amber-200 hover:bg-amber-300 px-2.5 py-1 rounded-full transition-colors"
            >
              <X className="w-3 h-3" /> Limpar
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          {/* Testamento */}
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2.5">Testamento</p>
            <div className="flex flex-wrap gap-2">
              {testamentOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTestament(opt.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 ${
                    testament === opt.value
                      ? "bg-amber-500 text-white border-amber-500 shadow-md scale-105"
                      : "bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-amber-700"
                  }`}
                >
                  <span>{opt.emoji}</span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden sm:block w-px bg-amber-200 self-stretch" />

          {/* Duração */}
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2.5">Duração</p>
            <div className="flex flex-wrap gap-2">
              {durationOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setDuration(opt.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 ${
                    duration === opt.value
                      ? "bg-amber-500 text-white border-amber-500 shadow-md scale-105"
                      : "bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-amber-700"
                  }`}
                >
                  {opt.label}
                  {opt.desc && (
                    <span className={`text-xs font-medium ${duration === opt.value ? "text-amber-100" : "text-gray-400"}`}>
                      {opt.desc}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contador */}
      <div className="flex items-center mb-5">
        <p className="text-sm text-gray-500">
          <span className="font-bold text-gray-800">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "história encontrada" : "histórias encontradas"}
          {search.trim().length >= 2 && (
            <span className="text-gray-400"> para &ldquo;{search}&rdquo;</span>
          )}
        </p>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((story, i) => (
            <StoryCard key={story.slug} story={story} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="font-bold text-gray-800 text-lg mb-2">Nenhuma história encontrada</h3>
          <p className="text-gray-500 text-sm mb-5">
            {search.trim()
              ? `Não encontramos nada para "${search}". Tente outra palavra.`
              : "Tente outros filtros."}
          </p>
          <button
            onClick={clearAll}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-sm transition-colors"
          >
            Ver todas as histórias
          </button>
        </div>
      )}
    </div>
  )
}
