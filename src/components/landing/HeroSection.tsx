import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, ZapIcon, StarIcon } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(251,146,60,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(220,38,38,0.08),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,146,60,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(251,146,60,0.8) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <Badge className="mb-6 border-orange-500/30 bg-orange-500/10 text-orange-400 px-4 py-1.5 text-sm backdrop-blur-sm">
            <StarIcon className="size-3 mr-1" />
            Catálogo completo del Universo Dragon Ball
          </Badge>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight mb-6"
        >
          <span className="text-white">El universo</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #f97316 0%, #fbbf24 45%, #ef4444 100%)",
            }}
          >
            Dragon Ball
          </span>
          <br />
          <span className="text-white">en tus manos</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Explora más de 58 personajes con sus stats reales, transformaciones, Ki, afiliaciones
          y mucho más. Todo desde la API oficial de Dragon Ball.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/home">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 hover:opacity-90 shadow-xl shadow-orange-500/30 font-bold px-8 text-base"
            >
              <ZapIcon className="size-4" />
              Explorar personajes
              <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
          <a href="#showcase">
            <Button
              size="lg"
              variant="outline"
              className="border-white/15 text-white hover:bg-white/5 backdrop-blur-sm px-8 text-base font-semibold"
            >
              Ver showcase
            </Button>
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { val: "58+", label: "Personajes" },
            { val: "12", label: "Universos" },
            { val: "7", label: "Esferas" },
            { val: "∞", label: "Poder" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black text-white">{val}</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-orange-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
