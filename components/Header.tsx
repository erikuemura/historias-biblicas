import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-gray-800 text-lg leading-none block">
                Histórias da Bíblia
              </span>
              <span className="text-xs text-amber-600 font-medium">
                para Crianças
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              Início
            </Link>
            <Link
              href="/historias"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
            >
              Histórias
            </Link>
            <Link
              href="#newsletter"
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Novidades
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
