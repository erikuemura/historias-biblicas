"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Square, Volume2, RotateCcw } from "lucide-react"

interface Scene {
  title: string
  text: string
}

interface AudioPlayerProps {
  slug: string
  scenes: Scene[]
  gradient: string
}

interface SavedProgress {
  scene: number
  time: number
  savedAt: string
}

type Status = "idle" | "loading" | "playing" | "paused"

const SAVE_KEY = (slug: string) => `audio-progress-${slug}`

function loadProgress(slug: string): SavedProgress | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY(slug))
    if (!raw) return null
    const data = JSON.parse(raw) as SavedProgress
    // Ignore progress older than 30 days
    const age = Date.now() - new Date(data.savedAt).getTime()
    if (age > 30 * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(SAVE_KEY(slug))
      return null
    }
    return data
  } catch {
    return null
  }
}

function saveProgress(slug: string, scene: number, time: number) {
  try {
    const data: SavedProgress = { scene, time, savedAt: new Date().toISOString() }
    localStorage.setItem(SAVE_KEY(slug), JSON.stringify(data))
  } catch {}
}

function clearProgress(slug: string) {
  try {
    localStorage.removeItem(SAVE_KEY(slug))
  } catch {}
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

function relativeDate(iso: string) {
  const diff = Date.now() - new Date(iso).getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  if (minutes < 2) return "agora mesmo"
  if (minutes < 60) return `há ${minutes} minutos`
  if (hours < 24) return `há ${hours}h`
  if (days === 1) return "ontem"
  return `há ${days} dias`
}

export default function AudioPlayer({ slug, scenes, gradient }: AudioPlayerProps) {
  const [status, setStatus] = useState<Status>("idle")
  const [currentScene, setCurrentScene] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [savedProgress, setSavedProgress] = useState<SavedProgress | null>(null)
  const [showResumeBanner, setShowResumeBanner] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const sceneRef = useRef(0)
  const saveIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function audioUrl(scene: number) {
    return `/audio/${slug}/cena-${scene + 1}.mp3`
  }

  function startSaveInterval() {
    if (saveIntervalRef.current) clearInterval(saveIntervalRef.current)
    saveIntervalRef.current = setInterval(() => {
      const audio = audioRef.current
      if (audio && !audio.paused && audio.currentTime > 0) {
        saveProgress(slug, sceneRef.current, audio.currentTime)
      }
    }, 5000)
  }

  function stopSaveInterval() {
    if (saveIntervalRef.current) {
      clearInterval(saveIntervalRef.current)
      saveIntervalRef.current = null
    }
  }

  function loadScene(index: number, startTime = 0) {
    const audio = audioRef.current
    if (!audio) return
    sceneRef.current = index
    setCurrentScene(index)
    audio.src = audioUrl(index)
    audio.load()
    audio.addEventListener(
      "canplay",
      () => {
        if (startTime > 0) audio.currentTime = startTime
        audio.play().catch(() => setStatus("idle"))
      },
      { once: true }
    )
  }

  function play() {
    if (!audioRef.current) return
    if (status === "paused") {
      audioRef.current.play()
      setStatus("playing")
      startSaveInterval()
      return
    }
    setStatus("loading")
    loadScene(0)
  }

  function pause() {
    audioRef.current?.pause()
    stopSaveInterval()
    // Save immediately on pause
    const audio = audioRef.current
    if (audio) saveProgress(slug, sceneRef.current, audio.currentTime)
    setStatus("paused")
  }

  function stop() {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.src = ""
    stopSaveInterval()
    sceneRef.current = 0
    setCurrentScene(0)
    setCurrentTime(0)
    setDuration(0)
    setStatus("idle")
  }

  function finish() {
    stop()
    clearProgress(slug)
    setSavedProgress(null)
    setShowResumeBanner(false)
  }

  function resumeFromSaved() {
    if (!savedProgress) return
    setShowResumeBanner(false)
    setStatus("loading")
    loadScene(savedProgress.scene, savedProgress.time)
  }

  function startOver() {
    clearProgress(slug)
    setSavedProgress(null)
    setShowResumeBanner(false)
    setStatus("loading")
    loadScene(0)
  }

  function goToScene(index: number) {
    const wasPlaying = status === "playing"
    stopSaveInterval()
    setStatus("loading")
    loadScene(index)
    if (!wasPlaying) {
      // If was paused/idle, just load and pause
      audioRef.current?.addEventListener(
        "canplay",
        () => {
          audioRef.current?.pause()
          setStatus("paused")
        },
        { once: true }
      )
    }
  }

  useEffect(() => {
    // Check for saved progress on mount
    const progress = loadProgress(slug)
    if (progress && (progress.scene > 0 || progress.time > 10)) {
      setSavedProgress(progress)
      setShowResumeBanner(true)
    }

    const audio = new Audio()
    audioRef.current = audio

    audio.addEventListener("playing", () => {
      setStatus("playing")
      startSaveInterval()
    })
    audio.addEventListener("waiting", () => setStatus("loading"))
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime)
    })
    audio.addEventListener("durationchange", () => {
      setDuration(audio.duration)
    })
    audio.addEventListener("ended", () => {
      stopSaveInterval()
      const next = sceneRef.current + 1
      if (next < scenes.length) {
        loadScene(next)
      } else {
        finish()
      }
    })
    audio.addEventListener("error", () => {
      stopSaveInterval()
      setStatus("idle")
    })

    return () => {
      audio.pause()
      audio.src = ""
      stopSaveInterval()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const isActive = status !== "idle"
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="space-y-3">

      {/* Resume banner */}
      {showResumeBanner && savedProgress && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl mt-0.5">🔖</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-amber-900 mb-0.5">
                Vocês pararam aqui {relativeDate(savedProgress.savedAt)}
              </p>
              <p className="text-xs text-amber-700">
                Cena {savedProgress.scene + 1}: <span className="font-semibold">{scenes[savedProgress.scene]?.title}</span>
                {savedProgress.time > 0 && (
                  <span className="text-amber-500 ml-1">· {formatTime(savedProgress.time)}</span>
                )}
              </p>
            </div>
            <button
              onClick={() => setShowResumeBanner(false)}
              className="text-amber-400 hover:text-amber-600 text-lg leading-none mt-0.5"
              aria-label="Fechar"
            >×</button>
          </div>
          <div className="flex gap-2 mt-3 pl-9">
            <button
              onClick={resumeFromSaved}
              className={`flex-1 py-2 rounded-xl bg-gradient-to-r ${gradient} text-white text-sm font-bold shadow-sm hover:opacity-90 transition-opacity`}
            >
              ▶ Continuar de onde parou
            </button>
            <button
              onClick={startOver}
              className="px-4 py-2 rounded-xl bg-white border border-amber-200 text-amber-700 text-sm font-semibold hover:bg-amber-50 transition-colors"
            >
              Recomeçar
            </button>
          </div>
        </div>
      )}

      {/* Player principal */}
      <div className="bg-white border border-amber-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3">
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
            {/* Reset to beginning when paused/playing */}
            {isActive && (
              <button
                onClick={startOver}
                className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Recomeçar do início"
                title="Recomeçar do início"
              >
                <RotateCcw className="w-3.5 h-3.5 text-gray-500" />
              </button>
            )}

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

        {/* Time progress bar */}
        {isActive && duration > 0 && (
          <div className="px-4 pb-3">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Scene navigation dots */}
      {isActive && (
        <div className="flex items-center justify-center gap-2">
          {scenes.map((scene, i) => (
            <button
              key={i}
              onClick={() => goToScene(i)}
              title={`Cena ${i + 1}: ${scene.title}`}
              aria-label={`Ir para cena ${i + 1}: ${scene.title}`}
              className={`rounded-full transition-all duration-300 hover:opacity-80 ${
                i === currentScene
                  ? "w-6 h-1.5 bg-amber-500"
                  : i < currentScene
                  ? "w-3 h-1.5 bg-amber-300"
                  : "w-3 h-1.5 bg-gray-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
