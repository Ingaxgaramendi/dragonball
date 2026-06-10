import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Character } from "@/types/dragonball"

const affiliationStyle: Record<string, string> = {
  "Z Fighter": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Villain: "bg-red-500/15 text-red-400 border-red-500/20",
  "Army of Frieza": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Namekian Warrior": "bg-green-500/15 text-green-400 border-green-500/20",
  "Red Ribbon Army": "bg-rose-500/15 text-rose-400 border-rose-500/20",
  Freelancer: "bg-gray-500/15 text-gray-400 border-gray-500/20",
}

interface CharacterCardProps {
  char: Character
  index: number
  onClick: () => void
}

export function CharacterCard({ char, index, onClick }: CharacterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/5"
    >
      {/* Top image area */}
      <div className="relative h-40 bg-gradient-to-b from-zinc-800/50 to-zinc-900/30 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <Avatar className="size-28 ring-2 ring-white/5 group-hover:ring-orange-500/20 transition-all duration-300">
          <AvatarImage src={char.image} alt={char.name} className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500" />
          <AvatarFallback className="bg-gradient-to-br from-orange-600 to-red-700 text-white font-black text-3xl size-28">
            {char.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="absolute bottom-2 right-2">
          <Badge
            className={`text-[10px] border ${affiliationStyle[char.affiliation] ?? "bg-gray-500/15 text-gray-400 border-gray-500/20"}`}
          >
            {char.affiliation}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-white text-sm group-hover:text-orange-400 transition-colors">
            {char.name}
          </h3>
          <p className="text-xs text-gray-500">{char.race} · {char.gender}</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2">
            <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-0.5">Ki</p>
            <p className="text-xs font-semibold text-orange-400 truncate">{char.ki}</p>
          </div>
          <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2">
            <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-0.5">Max Ki</p>
            <p className="text-xs font-semibold text-yellow-400 truncate">{char.maxKi}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
