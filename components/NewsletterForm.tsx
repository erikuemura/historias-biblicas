"use client"

import { useState } from "react"
import { Bell, CheckCircle, Loader2, Mail, Phone } from "lucide-react"

const FORMSPREE_ID = "xpqbevbv"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, phone }),
      })

      if (res.ok) {
        setStatus("success")
        setEmail("")
        setPhone("")
      } else {
        throw new Error("Erro ao enviar")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Ops! Algo deu errado. Tente novamente.")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Cadastro feito!</h3>
          <p className="text-amber-100">
            Você receberá nossas novas histórias em primeira mão. 🎉
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-300" />
          <input
            type="email"
            required
            placeholder="Seu e-mail *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:border-white focus:bg-white/30 transition-all text-sm"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-300" />
          <input
            type="tel"
            placeholder="WhatsApp (opcional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:border-white focus:bg-white/30 transition-all text-sm"
          />
        </div>
      </div>

      {errorMsg && (
        <p className="text-red-300 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-amber-700 font-bold hover:bg-amber-50 disabled:opacity-60 transition-all shadow-lg hover:shadow-xl text-sm"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Cadastrando...
          </>
        ) : (
          <>
            <Bell className="w-4 h-4" />
            Quero receber novas histórias!
          </>
        )}
      </button>

      <p className="text-xs text-amber-200 text-center">
        Sem spam. Só histórias lindas para seus filhos. ❤️
      </p>
    </form>
  )
}
