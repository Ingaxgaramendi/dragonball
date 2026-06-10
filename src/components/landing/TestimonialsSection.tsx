import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

const testimonials = [
  {
    name: "Carlos M.",
    role: "Fan desde 1999",
    avatar: "CM",
    color: "bg-orange-600",
    quote: "Por fin un catálogo de Dragon Ball que no se ve como la web del 2005. Los datos de Ki y las transformaciones están perfectos.",
    stars: 5,
  },
  {
    name: "Daniela R.",
    role: "Cosplayer & Fan",
    avatar: "DR",
    color: "bg-purple-600",
    quote: "Uso esta app para investigar los personajes antes de mis cosplays. La información de afiliaciones y razas es increíblemente útil.",
    stars: 5,
  },
  {
    name: "Mateo V.",
    role: "Developer & Otaku",
    avatar: "MV",
    color: "bg-blue-600",
    quote: "El diseño es de otro nivel. Parece una app enterprise pero temática Dragon Ball. Clean code, buena UX, todo bien.",
    stars: 5,
  },
  {
    name: "Sofía L.",
    role: "Maestra & Mamá Otaku",
    avatar: "SL",
    color: "bg-green-600",
    quote: "Le enseño Dragon Ball a mis alumnos y esta app es perfecta para mostrar los datos de cada personaje. Super intuitiva.",
    stars: 5,
  },
  {
    name: "Diego T.",
    role: "Speedrunner de DBZ",
    avatar: "DT",
    color: "bg-red-600",
    quote: "El carrusel de personajes y los filtros hacen que sea facilísimo encontrar cualquier guerrero. Exactamente lo que necesitaba.",
    stars: 5,
  },
  {
    name: "Ana P.",
    role: "Diseñadora UX",
    avatar: "AP",
    color: "bg-indigo-600",
    quote: "Como diseñadora aprecio el nivel de detalle. Los hover states, las animaciones, los skeletons... todo pulido al máximo.",
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="size-3 fill-orange-400 text-orange-400" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            Comunidad
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Lo que dicen los fans
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <Stars count={t.stars} />
              <p className="mt-4 text-sm text-gray-300 leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <AvatarFallback className={`${t.color} text-white text-xs font-bold`}>
                    {t.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
