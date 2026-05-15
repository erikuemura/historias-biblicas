import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Histórias da Bíblia para Crianças"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "#fb923c", opacity: 0.12, display: "flex" }} />
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 380, height: 380, borderRadius: "50%", background: "#f97316", opacity: 0.1, display: "flex" }} />
        <div style={{ position: "absolute", top: 40, right: 80, width: 120, height: 120, borderRadius: "50%", background: "#fbbf24", opacity: 0.15, display: "flex" }} />

        {/* Book icon */}
        <div style={{ fontSize: 110, marginBottom: 24, display: "flex" }}>📖</div>

        {/* Star row */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
          {["⭐", "✨", "⭐", "✨", "⭐"].map((s, i) => (
            <span key={i} style={{ fontSize: 28, opacity: 0.85 }}>{s}</span>
          ))}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: "#c2410c",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: 20,
            maxWidth: 900,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          Histórias da Bíblia
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#ea580c",
            textAlign: "center",
            maxWidth: 780,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            opacity: 0.9,
          }}
        >
          para Crianças
        </div>

        {/* Description */}
        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            color: "#9a3412",
            textAlign: "center",
            maxWidth: 820,
            opacity: 0.75,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          Histórias bíblicas com carinho para pais lerem aos filhos 💛
        </div>
      </div>
    ),
    { ...size }
  )
}
