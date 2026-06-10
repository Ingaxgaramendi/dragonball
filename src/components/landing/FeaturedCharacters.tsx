import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { useAllCharacters } from "@/hooks/useCharacters"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import type { Character } from "@/types/dragonball"

const affiliationColor: Record<string, string> = {
  "Z Fighter": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Villain: "bg-red-500/15 text-red-400 border-red-500/20",
  "Army of Frieza": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Namekian Warrior": "bg-green-500/15 text-green-400 border-green-500/20",
}

function CharacterSpotlight({ char, index }: { char: Character; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/20 transition-all duration-300 cursor-pointer"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Avatar className="size-20 ring-2 ring-white/10 group-hover:ring-orange-500/30 transition-all duration-300">
          <AvatarImage src={char.image} alt={char.name} className="object-cover object-top" />
          <AvatarFallback className="bg-gradient-to-br from-orange-600 to-red-700 text-white font-black text-xl">
            {char.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="text-center">
        <p className="font-bold text-white text-sm mb-1">{char.name}</p>
        <p className="text-xs text-gray-500 mb-2">{char.race}</p>
        <Badge
          className={`text-xs border ${affiliationColor[char.affiliation] ?? "bg-gray-500/15 text-gray-400 border-gray-500/20"}`}
        >
          {char.affiliation}
        </Badge>
      </div>

      <div className="w-full space-y-1.5 text-xs">
        <div className="flex justify-between text-gray-600">
          <span>Ki Base</span>
          <span className="text-orange-400 font-medium truncate max-w-[120px] text-right">{char.ki}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Ki Máximo</span>
          <span className="text-yellow-400 font-medium truncate max-w-[120px] text-right">{char.maxKi}</span>
        </div>
      </div>
    </motion.div>
  )
}

function SkeletonCard() {
  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
      <Skeleton className="size-20 rounded-full bg-white/5" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-3 w-24 mx-auto bg-white/5" />
        <Skeleton className="h-3 w-16 mx-auto bg-white/5" />
        <Skeleton className="h-5 w-20 mx-auto bg-white/5 rounded-full" />
      </div>
    </div>
  )
}

export function FeaturedCharacters() {
  const { characters, loading } = useAllCharacters()

  const featured = characters.filter((c) =>
    ["Goku", "Vegeta", "Gohan", "Piccolo", "Freezer", "Cell", "Beerus", "Broly"].includes(c.name)
  ).slice(0, 8)

  return (
    <section id="showcase" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            Guerreros legendarios
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Personajes destacados
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Datos reales desde la Dragon Ball API. Cada personaje con su Ki, raza, afiliación y más.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : featured.map((char, i) => (
                <CharacterSpotlight key={char.id} char={char} index={i} />
              ))}
        </div>
      </div>
    </section>
  )
}
