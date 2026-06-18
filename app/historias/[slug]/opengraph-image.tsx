import { ImageResponse } from "next/og"
import { getStoryBySlug } from "@/data/stories"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Gradient map: tailwind class → CSS colors
const gradients: Record<string, [string, string, string]> = {
  "from-blue-400 via-teal-400 to-green-400":   ["#60a5fa", "#2dd4bf", "#4ade80"],
  "from-amber-400 via-orange-400 to-red-400":   ["#fbbf24", "#fb923c", "#f87171"],
  "from-purple-400 via-pink-400 to-rose-400":   ["#c084fc", "#f472b6", "#fb7185"],
  "from-emerald-400 via-teal-400 to-cyan-400":  ["#34d399", "#2dd4bf", "#22d3ee"],
  "from-red-400 via-rose-400 to-pink-400":      ["#f87171", "#fb7185", "#f472b6"],
  "from-yellow-400 via-amber-400 to-orange-400":["#facc15", "#fbbf24", "#fb923c"],
  "from-indigo-400 via-blue-400 to-cyan-400":   ["#818cf8", "#60a5fa", "#22d3ee"],
  "from-orange-400 via-red-400 to-rose-500":    ["#fb923c", "#f87171", "#f43f5e"],
  "from-green-400 via-emerald-400 to-teal-400": ["#4ade80", "#34d399", "#2dd4bf"],
  "from-pink-400 via-rose-400 to-red-400":      ["#f472b6", "#fb7185", "#f87171"],
  "from-violet-400 via-purple-400 to-pink-400": ["#a78bfa", "#c084fc", "#f472b6"],
  "from-sky-400 via-blue-400 to-indigo-400":    ["#38bdf8", "#60a5fa", "#818cf8"],
  "from-teal-400 via-cyan-400 to-sky-400":      ["#2dd4bf", "#22d3ee", "#38bdf8"],
  "from-rose-400 via-pink-400 to-fuchsia-400":  ["#fb7185", "#f472b6", "#e879f9"],
  "from-lime-400 via-green-400 to-emerald-400": ["#a3e635", "#4ade80", "#34d399"],
  "from-fuchsia-400 via-violet-400 to-purple-400":["#e879f9","#a78bfa","#c084fc"],
  "from-cyan-400 via-sky-400 to-blue-400":      ["#22d3ee", "#38bdf8", "#60a5fa"],
}

function resolveGradient(cls: string): [string, string, string] {
  return gradients[cls] ?? ["#fb923c", "#f97316", "#ef4444"]
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) {
    return new ImageResponse(
      <div style={{ background: "#fff7ed", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, color: "#c2410c" }}>
        Histórias da Bíblia para Crianças
      </div>,
      { ...size }
    )
  }

  const [c1, c2, c3] = resolveGradient(story.gradient)

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          fontFamily: "sans-serif",
          position: "relative",
          padding: "64px 80px",
        }}
      >
        {/* Background blobs */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "flex" }} />
        <div style={{ position: "absolute", top: 40, left: 60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex" }} />

        {/* Emoji */}
        <div style={{ fontSize: 120, marginBottom: 24, display: "flex", lineHeight: 1 }}>
          {story.emoji}
        </div>

        {/* Bible reference badge */}
        <div style={{
          display: "flex",
          background: "rgba(255,255,255,0.25)",
          borderRadius: 100,
          padding: "8px 20px",
          marginBottom: 20,
          fontSize: 24,
          color: "white",
          fontWeight: 600,
        }}>
          {story.bibleReference}
        </div>

        {/* Story title */}
        <div style={{
          fontSize: 72,
          fontWeight: 900,
          color: "white",
          lineHeight: 1.1,
          marginBottom: 16,
          maxWidth: 900,
          display: "flex",
          flexWrap: "wrap",
        }}>
          {story.title}
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 34,
          color: "rgba(255,255,255,0.85)",
          fontWeight: 500,
          fontStyle: "italic",
          marginBottom: 40,
          display: "flex",
        }}>
          {story.subtitle}
        </div>

        {/* Site branding footer */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "rgba(255,255,255,0.2)",
          borderRadius: 100,
          padding: "10px 24px",
        }}>
          <span style={{ fontSize: 28 }}>📖</span>
          <span style={{ fontSize: 24, color: "white", fontWeight: 700 }}>
            historinhasbiblicas.com.br
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
