// Service Worker — Histórias da Bíblia para Crianças
// Estratégia: Cache-first para assets estáticos, Network-first para páginas

const CACHE_NAME = "historias-biblicas-v1"

// Assets para pré-cachear na instalação
const PRECACHE_URLS = [
  "/",
  "/historias",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
]

// Instala e pré-cacheia os assets essenciais
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  )
  self.skipWaiting()
})

// Ativa e remove caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// Fetch: estratégias por tipo de recurso
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Ignora requests não-GET e de outras origens
  if (request.method !== "GET" || url.origin !== location.origin) return

  // Áudios MP3: Cache-first (offline após primeira escuta)
  if (url.pathname.startsWith("/audio/")) {
    event.respondWith(
      caches.match(request).then(
        (cached) => cached ?? fetch(request).then((res) => {
          const clone = res.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          return res
        })
      )
    )
    return
  }

  // Imagens e ícones: Cache-first
  if (
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico)$/)
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) => cached ?? fetch(request).then((res) => {
          const clone = res.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          return res
        })
      )
    )
    return
  }

  // Páginas e JS/CSS: Network-first com fallback para cache
  event.respondWith(
    fetch(request)
      .then((res) => {
        const clone = res.clone()
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
        return res
      })
      .catch(() => caches.match(request))
  )
})
