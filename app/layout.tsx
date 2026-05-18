import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://historias-biblicas.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Histórias da Bíblia para Crianças",
    template: "%s | Histórias da Bíblia para Crianças",
  },
  description:
    "Histórias bíblicas ilustradas e narradas, escritas com carinho para pais lerem aos filhos pequenos de 3 a 8 anos. Gratuito, com ilustrações e áudio!",
  keywords: [
    "histórias bíblicas para crianças",
    "bíblia infantil",
    "histórias para crianças",
    "bíblia para crianças",
    "histórias bíblicas ilustradas",
    "educação cristã",
    "família cristã",
    "histórias hora de dormir",
    "davi e golias",
    "arca de noé",
    "nascimento de jesus",
  ],
  authors: [{ name: "Histórias da Bíblia para Crianças" }],
  creator: "Histórias da Bíblia para Crianças",
  openGraph: {
    title: "Histórias da Bíblia para Crianças",
    description:
      "Histórias bíblicas ilustradas e narradas para pais lerem aos filhos. Gratuito!",
    type: "website",
    url: BASE_URL,
    siteName: "Histórias da Bíblia para Crianças",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Histórias da Bíblia para Crianças",
    description: "Histórias bíblicas ilustradas e narradas para pais lerem aos filhos.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Histórias Bíblicas",
  },
  icons: {
    apple: "/icons/apple-touch-icon.png",
    icon: [
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
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
        <GoogleAnalytics />
        <ServiceWorkerRegister />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
