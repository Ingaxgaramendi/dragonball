import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ZapIcon, SearchIcon, LayersIcon, StarIcon, ShieldIcon, TrendingUpIcon } from "lucide-react"

const features = [
  {
    icon: ZapIcon,
    title: "Datos en tiempo real",
    description: "Toda la información se carga directamente desde la Dragon Ball API oficial con datos actualizados.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: SearchIcon,
    title: "Búsqueda avanzada",
    description: "Filtra por nombre, raza, afiliación o nivel de poder. Encuentra cualquier guerrero al instante.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: LayersIcon,
    title: "Transformaciones",
    description: "Visualiza cada transformación de los personajes con sus incrementos de Ki y características únicas.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: StarIcon,
    title: "Ki completo",
    description: "Ki base y Ki máximo de cada personaje para entender la escala de poder del universo Dragon Ball.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: ShieldIcon,
    title: "Afiliaciones",
    description: "Descubre a qué grupo pertenece cada guerrero: Z Fighters, Villanos, Ejército de Freezer y más.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: TrendingUpIcon,
    title: "Rankings de poder",
    description: "Compara los niveles de poder y ordena personajes por su Ki para descubrir quién domina el universo.",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
]

export function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="features" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            Funcionalidades
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Una experiencia completa para explorar el universo Dragon Ball con datos reales y diseño premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group p-6 rounded-2xl border ${feat.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300`}
            >
              <div className={`size-10 rounded-xl ${feat.bg} border ${feat.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feat.icon className={`size-5 ${feat.color}`} />
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
