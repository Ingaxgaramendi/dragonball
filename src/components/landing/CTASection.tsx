import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, ZapIcon } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-950/40 via-red-950/20 to-zinc-950 p-12 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(251,146,60,0.15),transparent)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          <div className="relative z-10">
            <p className="text-5xl mb-6">🐉</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Listo para explorar
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                el universo completo
              </span>
              ?
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              58 personajes, datos reales, diseño premium. Todo lo que necesitas para ser el mayor fan de Dragon Ball.
            </p>
            <Link to="/home">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 hover:opacity-90 shadow-2xl shadow-orange-500/30 font-bold px-10 text-base"
              >
                <ZapIcon className="size-4" />
                Explorar ahora
                <ArrowRightIcon className="size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
