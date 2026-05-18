"use client"

import { useEffect, useState } from "react"
import { X, Download, Share } from "lucide-react"

type Platform = "android" | "ios-safari" | "ios-chrome" | "ios-other" | "chrome" | "other"

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other"
  const ua = navigator.userAgent
  const isIOS = /iphone|ipad|ipod/i.test(ua)

  if (isIOS) {
    if (/CriOS/i.test(ua)) return "ios-chrome"          // Chrome no iOS
    if (/FxiOS/i.test(ua)) return "ios-other"           // Firefox no iOS
    if (/safari/i.test(ua)) return "ios-safari"         // Safari nativo
    return "ios-other"
  }

  if (/android/i.test(ua)) return "android"
  if (/chrome/i.test(ua)) return "chrome"               // Chrome desktop
  return "other"
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in navigator && (navigator as any).standalone === true)
  )
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [show, setShow] = useState(false)
  const [platform, setPlatform] = useState<Platform>("other")
  const [showIOSGuide, setShowIOSGuide] = useState(false)

  useEffect(() => {
    if (isStandalone()) return // já instalado
    const p = detectPlatform()
    setPlatform(p)

    if (p === "ios-safari" || p === "ios-chrome" || p === "ios-other") {
      // iOS: mostra o banner após 3s (não tem beforeinstallprompt)
      const dismissed = sessionStorage.getItem("pwa-dismissed")
      if (!dismissed) setTimeout(() => setShow(true), 3000)
    }

    // Android/Chrome: captura o evento beforeinstallprompt
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      const dismissed = sessionStorage.getItem("pwa-dismissed")
      if (!dismissed) setShow(true)
    }
    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  function dismiss() {
    sessionStorage.setItem("pwa-dismissed", "1")
    setShow(false)
    setShowIOSGuide(false)
  }

  const isIOS = platform === "ios-safari" || platform === "ios-chrome" || platform === "ios-other"

  async function install() {
    if (isIOS) {
      setShowIOSGuide(true)
      return
    }
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === "accepted") setShow(false)
    setDeferredPrompt(null)
  }

  if (!show) return null

  return (
    <>
      {/* Banner principal */}
      <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-amber-100 p-4 flex items-center gap-3">
          <img src="/icons/icon-72x72.png" alt="App" className="w-12 h-12 rounded-xl flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-sm leading-tight">Instalar no celular</p>
            <p className="text-xs text-gray-500 mt-0.5">Acesse offline, sem abrir o navegador</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={install}
              className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors"
            >
              {isIOS ? (
                <><Share className="w-3.5 h-3.5" /> Como instalar</>
              ) : (
                <><Download className="w-3.5 h-3.5" /> Instalar</>
              )}
            </button>
            <button onClick={dismiss} className="text-gray-400 hover:text-gray-600 p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Guia iOS */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-end justify-center pb-4 px-4 bg-black/40 backdrop-blur-sm" onClick={dismiss}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-gray-900">Instalar no iPhone / iPad</h3>
              <button onClick={dismiss}><X className="w-5 h-5 text-gray-400" /></button>
            </div>

            {platform === "ios-chrome" ? (
              /* Chrome no iOS */
              <ol className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>Toque no menu <strong>⋯</strong> (três pontos) no canto inferior direito do Chrome</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>Toque em <strong>"Adicionar à Tela de Início"</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>Toque em <strong>"Adicionar"</strong> para confirmar</span>
                </li>
              </ol>
            ) : (
              /* Safari no iOS */
              <ol className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>Toque no ícone de <strong>Compartilhar</strong> <span className="inline-block bg-gray-100 rounded px-1.5 py-0.5 text-base leading-none">⎙</span> na barra inferior do Safari</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong> <span className="inline-block bg-gray-100 rounded px-1.5 py-0.5">＋</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>Toque em <strong>"Adicionar"</strong> no canto superior direito</span>
                </li>
              </ol>
            )}

            <p className="text-xs text-gray-400 mt-4 text-center">O ícone do app aparecerá na sua tela inicial 📱</p>
          </div>
        </div>
      )}
    </>
  )
}
