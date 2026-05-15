"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Square, Volume2 } from "lucide-react"

interface Scene {
  title: string
  text: string
}

interface AudioPlayerProps {
  slug: string
  scenes: Scene[]
  gradient: string
}

type Status = "idle" | "loading" | "playing" | "paused"

export default function AudioPlayer({ slug, scenes, gradient }: AudioPlayerProps) {
  const [status, setStatus] = useState<Status>("idle")
  const [currentScene, setCurrentScene] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const sceneRef = useRef(0)

  function audioUrl(scene: number) {
    return `/audio/${slug}/cena-${scene + 1}.mp3`
  }

  function loadScene(index: number) {
    const audio = audioRef.current
    if (!audio) return
    sceneRef.current = index
    setCurrentScene(index)
    audio.src = audioUrl(index)
    audio.load()
    audio.play().catch(() => setStatus("idle"))
  }

  function play() {
    if (!audioRef.current) return

    if (status === "paused") {
      audioRef.current.play()
      setStatus("playing")
      return
    }

    setStatus("loading")
    loadScene(0)
  }

  function pause() {
    audioRef.current?.pause()
    setStatus("paused")
  }

  function stop() {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.src = ""
    sceneRef.current = 0
    setCurrentScene(0)
    setStatus("idle")
  }

  useEffect(() => {
    const audio = new Audio()
    audioRef.current = audio

    audio.addEventListener("playing", () => setStatus("playing"))
    audio.addEventListener("waiting", () => setStatus("loading"))

    audio.addEventListener("ended", () => {
      const next = sceneRef.current + 1
      if (next < scenes.length) {
        loadScene(next)
      } else {
        stop()
      }
    })

    audio.addEventListener("error", () => setStatus("idle"))

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const isActive = status !== "idle"

  return (
    <>
      <div className="flex items-center gap-3 bg-white border border-amber-200 rounded-2xl px-4 py-3 shadow-sm">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
          <Volume2 className="w-4 h-4 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-xs text-gray-400 font-medium">Ouvir a história</div>
          <div className="text-sm font-bold text-gray-700 truncate">
            {isActive
              ? `Cena ${currentScene + 1} de ${scenes.length}: ${scenes[currentScene]?.title}`
              : "Narração em português"}
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          {status === "playing" || status === "loading" ? (
            <button
              onClick={pause}
              className="w-9 h-9 rounded-xl bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors"
              aria-label="Pausar"
            >
              {status === "loading" ? (
                <span className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Pause className="w-4 h-4 text-amber-700 fill-amber-700" />
              )}
            </button>
          ) : (
            <button
              onClick={play}
              className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} hover:opacity-90 flex items-center justify-center transition-opacity shadow-sm`}
              aria-label="Ouvir"
            >
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            </button>
          )}

          {isActive && (
            <button
              onClick={stop}
              className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Parar"
            >
              <Square className="w-3.5 h-3.5 text-gray-500 fill-gray-500" />
            </button>
          )}
        </div>
      </div>

      {isActive && (
        <div className="flex items-center justify-center gap-2 mt-2">
          {scenes.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentScene
                  ? "w-6 bg-amber-500"
                  : i < currentScene
                  ? "w-3 bg-amber-300"
                  : "w-3 bg-gray-200"
              }`}
            />
          ))}
        </div>
      )}
    </>
  )
}
