import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const races = ["Saiyan", "Human", "Namekian", "Frieza Race", "Majin", "Android", "God", "Angel"]
const affiliations = ["Z Fighter", "Villain", "Army of Frieza", "Red Ribbon Army", "Namekian Warrior", "Freelancer"]
const genders = ["Male", "Female"]

interface FilterPanelProps {
  selectedRace: string
  selectedAffiliation: string
  selectedGender: string
  onRace: (r: string) => void
  onAffiliation: (a: string) => void
  onGender: (g: string) => void
  onReset: () => void
  activeCount: number
}

export function FilterPanel({
  selectedRace,
  selectedAffiliation,
  selectedGender,
  onRace,
  onAffiliation,
  onGender,
  onReset,
  activeCount,
}: FilterPanelProps) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-white uppercase tracking-widest">Filtros</p>
        {activeCount > 0 && (
          <Button
            variant="ghost"
            size="xs"
            onClick={onReset}
            className="text-gray-500 hover:text-white h-auto py-1 px-2 text-xs"
          >
            <XIcon className="size-3 mr-1" />
            Limpiar ({activeCount})
          </Button>
        )}
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Raza</p>
        <div className="flex flex-wrap gap-1.5">
          {races.map((r) => (
            <Badge
              key={r}
              onClick={() => onRace(selectedRace === r ? "" : r)}
              className={`cursor-pointer text-xs transition-all ${
                selectedRace === r
                  ? "bg-orange-500 text-black border-orange-500"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-orange-500/30 hover:text-white"
              }`}
            >
              {r}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="bg-white/5" />

      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Afiliación</p>
        <div className="flex flex-wrap gap-1.5">
          {affiliations.map((a) => (
            <Badge
              key={a}
              onClick={() => onAffiliation(selectedAffiliation === a ? "" : a)}
              className={`cursor-pointer text-xs transition-all ${
                selectedAffiliation === a
                  ? "bg-orange-500 text-black border-orange-500"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-orange-500/30 hover:text-white"
              }`}
            >
              {a}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="bg-white/5" />

      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Género</p>
        <div className="flex gap-1.5">
          {genders.map((g) => (
            <Badge
              key={g}
              onClick={() => onGender(selectedGender === g ? "" : g)}
              className={`cursor-pointer text-xs transition-all ${
                selectedGender === g
                  ? "bg-orange-500 text-black border-orange-500"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-orange-500/30 hover:text-white"
              }`}
            >
              {g}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
