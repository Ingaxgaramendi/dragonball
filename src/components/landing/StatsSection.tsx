import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

const stats = [
  { value: 58, suffix: "+", label: "Personajes únicos", description: "Base de datos completa" },
  { value: 12, suffix: "", label: "Universos", description: "Del multiverso Dragon Ball" },
  { value: 100, suffix: "+", label: "Transformaciones", description: "Formas y estados" },
  { value: 7, suffix: "", label: "Esferas del Dragón", description: "Para invocar a Shenron" },
]

export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="stats" ref={ref} className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            Números reales
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            El poder en cifras
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-zinc-950 p-8 text-center hover:bg-zinc-900 transition-colors group"
            >
              <div className="text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-red-500 tabular-nums">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-gray-600 text-xs">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
