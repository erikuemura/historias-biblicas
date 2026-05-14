import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Histórias da Bíblia para Crianças",
  description:
    "Histórias bíblicas ilustradas e escritas com carinho para pais lerem aos filhos pequenos. Com fé, diversão e muito amor!",
  keywords: ["bíblia infantil", "histórias bíblicas", "crianças", "família", "fé"],
  openGraph: {
    title: "Histórias da Bíblia para Crianças",
    description: "Histórias bíblicas ilustradas para pais lerem aos filhos",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-amber-50/30">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
