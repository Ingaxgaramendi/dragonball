import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { useAllCharacters } from "@/hooks/useCharacters"
import type { Character } from "@/types/dragonball"

function CarouselCard({ char }: { char: Character }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-6 h-full flex flex-col items-center gap-4 hover:border-orange-500/20 transition-all duration-300">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-orange-500/5 to-transparent" />
      <Avatar className="size-24 ring-2 ring-white/10 group-hover:ring-orange-500/25 transition-all relative z-10">
        <AvatarImage src={char.image} alt={char.name} className="object-cover object-top" />
        <AvatarFallback className="bg-gradient-to-br from-orange-600 to-red-700 text-white font-black text-2xl">
          {char.name.slice(0, 2)}
        </AvatarFallback>
      </Avatar>

      <div className="text-center z-10">
        <h3 className="font-bold text-white text-base mb-1">{char.name}</h3>
        <p className="text-xs text-gray-500 mb-3">{char.race} · {char.gender}</p>
        <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 text-xs mb-3">
          {char.affiliation}
        </Badge>
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{char.description}</p>
      </div>

      <div className="w-full grid grid-cols-2 gap-2 mt-auto">
        <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-0.5">Ki</p>
          <p className="text-xs font-bold text-orange-400 truncate">{char.ki}</p>
        </div>
        <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-0.5">Max Ki</p>
          <p className="text-xs font-bold text-yellow-400 truncate">{char.maxKi}</p>
        </div>
      </div>
    </div>
  )
}

export function CharacterCarousel() {
  const { characters, loading } = useAllCharacters()

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            Explorar
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Todos los guerreros
          </h2>
        </motion.div>

        {loading ? (
          <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex-none w-64 space-y-4 p-6 rounded-2xl border border-white/5">
                <Skeleton className="size-24 rounded-full mx-auto bg-white/5" />
                <Skeleton className="h-4 w-32 mx-auto bg-white/5" />
                <Skeleton className="h-3 w-20 mx-auto bg-white/5" />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {characters.map((char) => (
                  <CarouselItem key={char.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <CarouselCard char={char} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-white/10 bg-zinc-900 text-white hover:bg-zinc-800 -left-4" />
              <CarouselNext className="border-white/10 bg-zinc-900 text-white hover:bg-zinc-800 -right-4" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  )
}
