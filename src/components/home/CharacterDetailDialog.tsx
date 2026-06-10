import { useCharacter } from "@/hooks/useCharacters"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ZapIcon, StarIcon, UserIcon, GlobeIcon } from "lucide-react"

interface CharacterDetailDialogProps {
  characterId: number | null
  open: boolean
  onClose: () => void
}

const affiliationStyle: Record<string, string> = {
  "Z Fighter": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Villain: "bg-red-500/15 text-red-400 border-red-500/20",
  "Army of Frieza": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Namekian Warrior": "bg-green-500/15 text-green-400 border-green-500/20",
  Freelancer: "bg-gray-500/15 text-gray-400 border-gray-500/20",
}

export function CharacterDetailDialog({ characterId, open, onClose }: CharacterDetailDialogProps) {
  const { character, loading } = useCharacter(open ? characterId : null)

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="bg-zinc-950 border-white/10 text-white sm:max-w-lg p-0 overflow-hidden">
        {loading || !character ? (
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton className="size-20 rounded-full bg-white/5" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-5 w-40 bg-white/5" />
                <Skeleton className="h-3 w-24 bg-white/5" />
                <Skeleton className="h-5 w-28 bg-white/5 rounded-full" />
              </div>
            </div>
            <Skeleton className="h-24 w-full bg-white/5 rounded-lg" />
            <div className="grid grid-cols-2 gap-3">
              <Skeleton className="h-16 bg-white/5 rounded-lg" />
              <Skeleton className="h-16 bg-white/5 rounded-lg" />
            </div>
          </div>
        ) : (
          <ScrollArea className="max-h-[85vh]">
            {/* Header image banner */}
            <div className="relative h-32 bg-gradient-to-br from-orange-950/60 via-red-950/40 to-zinc-950 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(251,146,60,0.2),transparent)]" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent" />
              <img
                src={character.image}
                alt={character.name}
                className="absolute right-6 bottom-0 h-36 object-contain object-bottom opacity-40"
              />
            </div>

            <div className="px-6 pb-6 -mt-10 relative z-10 space-y-5">
              <DialogHeader>
                <div className="flex items-end gap-4">
                  <Avatar className="size-20 ring-2 ring-orange-500/20 shadow-xl shadow-orange-500/10">
                    <AvatarImage src={character.image} alt={character.name} className="object-cover object-top" />
                    <AvatarFallback className="bg-gradient-to-br from-orange-600 to-red-700 text-white font-black text-2xl">
                      {character.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="pb-1">
                    <DialogTitle className="text-xl text-white">{character.name}</DialogTitle>
                    <p className="text-xs text-gray-500 mt-0.5">{character.race} · {character.gender}</p>
                    <Badge
                      className={`mt-2 text-xs border ${affiliationStyle[character.affiliation] ?? "bg-gray-500/15 text-gray-400 border-gray-500/20"}`}
                    >
                      {character.affiliation}
                    </Badge>
                  </div>
                </div>
              </DialogHeader>

              <p className="text-sm text-gray-400 leading-relaxed">{character.description}</p>

              <Separator className="bg-white/5" />

              {/* Ki stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-orange-500/5 border border-orange-500/15 p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <ZapIcon className="size-3.5 text-orange-400" />
                    <p className="text-[10px] uppercase tracking-widest text-orange-400/70 font-semibold">Ki Base</p>
                  </div>
                  <p className="text-sm font-bold text-white break-words">{character.ki}</p>
                </div>
                <div className="rounded-xl bg-yellow-500/5 border border-yellow-500/15 p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <StarIcon className="size-3.5 text-yellow-400" />
                    <p className="text-[10px] uppercase tracking-widest text-yellow-400/70 font-semibold">Ki Máximo</p>
                  </div>
                  <p className="text-sm font-bold text-white break-words">{character.maxKi}</p>
                </div>
              </div>

              {/* Info extras */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-gray-500">
                  <UserIcon className="size-3.5 text-gray-600 shrink-0" />
                  <span className="truncate">{character.race}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <GlobeIcon className="size-3.5 text-gray-600 shrink-0" />
                  <span className="truncate">{character.gender}</span>
                </div>
              </div>

              {/* Transformations */}
              {character.transformations && character.transformations.length > 0 && (
                <>
                  <Separator className="bg-white/5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-3">
                      Transformaciones ({character.transformations.length})
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {character.transformations.map((t) => (
                        <Tooltip key={t.id}>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] hover:border-orange-500/20 transition-colors px-3 py-2 cursor-default">
                              {t.image && (
                                <img
                                  src={t.image}
                                  alt={t.name}
                                  className="size-6 object-contain rounded"
                                />
                              )}
                              <span className="text-xs text-gray-300">{t.name}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ki: {t.ki}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  )
}
