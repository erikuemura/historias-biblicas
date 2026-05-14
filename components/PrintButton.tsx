"use client"

import { Printer } from "lucide-react"

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm print:hidden"
    >
      <Printer className="w-4 h-4" />
      Salvar / Imprimir PDF
    </button>
  )
}
