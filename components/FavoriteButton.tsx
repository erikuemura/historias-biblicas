"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

const STORAGE_KEY = "historias-favoritas"

function getFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")
  } catch {
    return []
  }
}

function setFavorites(slugs: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs))
}

function trackEvent(action: "curtir" | "descurtir", slug: string, title: string) {
  try {
    // Google Analytics 4 custom event — visível em Eventos > curtir_historia
    const w = window as any
    if (typeof w.gtag === "function") {
      w.gtag("event", "curtir_historia", {
        acao: action,
        historia_slug: slug,
        historia_titulo: title,
      })
    }
  } catch {}
}

interface Props {
  slug: string
  title: string
}

export default function FavoriteButton({ slug, title }: Props) {
  const [isFav, setIsFav] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setIsFav(getFavorites().includes(slug))
  }, [slug])

  function toggle() {
    const favs = getFavorites()
    const next = favs.includes(slug)
      ? favs.filter((s) => s !== slug)
      : [...favs, slug]

    setFavorites(next)
    const nowFav = next.includes(slug)
    setIsFav(nowFav)
    trackEvent(nowFav ? "curtir" : "descurtir", slug, title)

    // pequena animação de pulso
    setAnimating(true)
    setTimeout(() => setAnimating(false), 400)
  }

  return (
    <button
      onClick={toggle}
      aria-label={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      title={isFav ? "Remover dos favoritos" : "Salvar nos favoritos"}
      className={`
        inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm
        border-2 transition-all duration-200 select-none
        ${isFav
          ? "bg-rose-50 border-rose-300 text-rose-600 hover:bg-rose-100"
          : "bg-white border-gray-200 text-gray-500 hover:border-rose-300 hover:text-rose-500"
        }
        ${animating ? "scale-110" : "scale-100"}
      `}
    >
      <Heart
        className={`w-4 h-4 transition-all duration-200 ${
          isFav ? "fill-rose-500 stroke-rose-500" : "fill-none stroke-current"
        } ${animating ? "scale-125" : "scale-100"}`}
      />
      {isFav ? "Favoritada" : "Favoritar"}
    </button>
  )
}
