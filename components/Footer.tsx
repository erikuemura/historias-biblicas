import Link from "next/link"
import { BookOpen, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                Histórias da Bíblia
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Histórias bíblicas lindas e ilustradas, escritas com carinho para
              pais lerem aos seus filhos pequenos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Histórias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/historias/criacao-do-mundo"
                  className="hover:text-amber-400 transition-colors"
                >
                  A Criação do Mundo
                </Link>
              </li>
              <li>
                <Link
                  href="/historias/noe-e-a-grande-arca"
                  className="hover:text-amber-400 transition-colors"
                >
                  Noé e a Grande Arca
                </Link>
              </li>
              <li>
                <Link
                  href="/historias/jose-e-o-casaco-colorido"
                  className="hover:text-amber-400 transition-colors"
                >
                  José e o Casaco Colorido
                </Link>
              </li>
              <li>
                <Link
                  href="/historias/o-bebe-moises"
                  className="hover:text-amber-400 transition-colors"
                >
                  O Bebê Moisés
                </Link>
              </li>
              <li>
                <Link
                  href="/historias/davi-e-golias"
                  className="hover:text-amber-400 transition-colors"
                >
                  Davi e Golias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Contato</h3>
            <p className="text-sm text-gray-400 mb-4">
              Receba novas histórias por e-mail!
            </p>
            <Link
              href="#newsletter"
              className="inline-block px-4 py-2 text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-white rounded-full transition-colors"
            >
              Cadastrar e-mail
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Histórias da Bíblia para Crianças.
          </p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />{" "}
            para famílias
          </p>
        </div>
      </div>
    </footer>
  )
}
