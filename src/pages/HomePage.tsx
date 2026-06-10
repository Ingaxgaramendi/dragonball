import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HomeNavbar } from "@/components/home/HomeNavbar"
import { SearchBar } from "@/components/home/SearchBar"
import { FilterPanel } from "@/components/home/FilterPanel"
import { CharacterCard } from "@/components/home/CharacterCard"
import { SkeletonCard } from "@/components/home/SkeletonCard"
import { CharacterDetailDialog } from "@/components/home/CharacterDetailDialog"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCharacters } from "@/hooks/useCharacters"
import { ChevronLeftIcon, ChevronRightIcon, SlidersHorizontalIcon, XIcon } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Character } from "@/types/dragonball"

type SortKey = "name" | "ki" | "default"

const sortOptions: { label: string; value: SortKey }[] = [
  { label: "Por defecto", value: "default" },
  { label: "Nombre A–Z", value: "name" },
]

export function HomePage() {
  const { characters, meta, loading, error, page, setPage } = useCharacters(1, 12)

  const [search, setSearch] = useState("")
  const [selectedRace, setSelectedRace] = useState("")
  const [selectedAffiliation, setSelectedAffiliation] = useState("")
  const [selectedGender, setSelectedGender] = useState("")
  const [sortKey, setSortKey] = useState<SortKey>("default")
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)

  const filtered = useMemo(() => {
    let list: Character[] = [...characters]

    if (search) {
      list = list.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (selectedRace) {
      list = list.filter((c) => c.race === selectedRace)
    }
    if (selectedAffiliation) {
      list = list.filter((c) => c.affiliation === selectedAffiliation)
    }
    if (selectedGender) {
      list = list.filter((c) => c.gender === selectedGender)
    }
    if (sortKey === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    }

    return list
  }, [characters, search, selectedRace, selectedAffiliation, selectedGender, sortKey])

  const activeFiltersCount = [selectedRace, selectedAffiliation, selectedGender].filter(Boolean).length

  function handleReset() {
    setSelectedRace("")
    setSelectedAffiliation("")
    setSelectedGender("")
    setSearch("")
  }

  function openDetail(id: number) {
    setSelectedId(id)
    setDetailOpen(true)
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-black text-white">
        <HomeNavbar />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-black text-white mb-1">Personajes</h1>
            <p className="text-sm text-gray-500">
              {meta ? `${meta.totalItems} personajes · Página ${meta.currentPage} de ${meta.totalPages}` : "Cargando..."}
            </p>
          </motion.div>

          <div className="flex gap-6">
            {/* Sidebar filters — desktop */}
            <aside className="hidden lg:block w-64 shrink-0 space-y-4 sticky top-20 self-start">
              <FilterPanel
                selectedRace={selectedRace}
                selectedAffiliation={selectedAffiliation}
                selectedGender={selectedGender}
                onRace={setSelectedRace}
                onAffiliation={setSelectedAffiliation}
                onGender={setSelectedGender}
                onReset={handleReset}
                activeCount={activeFiltersCount}
              />
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0 space-y-5">
              {/* Toolbar */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex-1 min-w-48">
                  <SearchBar value={search} onChange={setSearch} />
                </div>

                {/* Sort */}
                <div className="flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-xl p-1">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSortKey(opt.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        sortKey === opt.value
                          ? "bg-orange-500 text-black"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* Mobile filters */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="lg:hidden border-white/10 bg-white/[0.04] text-gray-300 hover:bg-white/[0.08] relative"
                    >
                      <SlidersHorizontalIcon className="size-4" />
                      Filtros
                      {activeFiltersCount > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full bg-orange-500 text-black text-[10px] flex items-center justify-center font-bold">
                          {activeFiltersCount}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-zinc-950 border-white/10 text-white w-72">
                    <SheetHeader className="mb-4">
                      <SheetTitle className="text-white">Filtros</SheetTitle>
                    </SheetHeader>
                    <FilterPanel
                      selectedRace={selectedRace}
                      selectedAffiliation={selectedAffiliation}
                      selectedGender={selectedGender}
                      onRace={setSelectedRace}
                      onAffiliation={setSelectedAffiliation}
                      onGender={setSelectedGender}
                      onReset={handleReset}
                      activeCount={activeFiltersCount}
                    />
                  </SheetContent>
                </Sheet>
              </div>

              {/* Active filter chips */}
              {(selectedRace || selectedAffiliation || selectedGender) && (
                <div className="flex flex-wrap gap-2">
                  {[
                    { val: selectedRace, clear: () => setSelectedRace("") },
                    { val: selectedAffiliation, clear: () => setSelectedAffiliation("") },
                    { val: selectedGender, clear: () => setSelectedGender("") },
                  ]
                    .filter((f) => f.val)
                    .map((f) => (
                      <Badge
                        key={f.val}
                        className="bg-orange-500/10 text-orange-400 border-orange-500/20 cursor-pointer hover:bg-orange-500/20 transition-colors gap-1"
                        onClick={f.clear}
                      >
                        {f.val}
                        <XIcon className="size-2.5" />
                      </Badge>
                    ))}
                </div>
              )}

              {/* Error state */}
              {error && (
                <div className="text-center py-16 space-y-3">
                  <p className="text-4xl">⚠️</p>
                  <p className="text-white font-semibold">Error al cargar</p>
                  <p className="text-sm text-gray-500">{error}</p>
                </div>
              )}

              {/* Grid */}
              {!error && (
                <>
                  {loading ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                      {Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                  ) : filtered.length === 0 ? (
                    <div className="text-center py-20 space-y-3">
                      <p className="text-5xl">🔍</p>
                      <p className="text-white font-bold">Sin resultados</p>
                      <p className="text-sm text-gray-500">Prueba con otro nombre o limpia los filtros.</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleReset}
                        className="border-white/10 text-gray-300 hover:bg-white/5 mt-2"
                      >
                        Limpiar filtros
                      </Button>
                    </div>
                  ) : (
                    <AnimatePresence mode="wait">
                      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filtered.map((char, i) => (
                          <CharacterCard
                            key={char.id}
                            char={char}
                            index={i}
                            onClick={() => openDetail(char.id)}
                          />
                        ))}
                      </div>
                    </AnimatePresence>
                  )}
                </>
              )}

              {/* Pagination */}
              {!loading && !error && meta && meta.totalPages > 1 && !search && !selectedRace && !selectedAffiliation && !selectedGender && (
                <>
                  <Separator className="bg-white/5 mt-6" />
                  <div className="flex items-center justify-between pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page === 1}
                      onClick={() => setPage((p) => p - 1)}
                      className="border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.08] disabled:opacity-30"
                    >
                      <ChevronLeftIcon className="size-4" />
                      Anterior
                    </Button>

                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: meta.totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          className={`size-8 rounded-lg text-xs font-semibold transition-all ${
                            p === page
                              ? "bg-orange-500 text-black"
                              : "text-gray-500 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page === meta.totalPages}
                      onClick={() => setPage((p) => p + 1)}
                      className="border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.08] disabled:opacity-30"
                    >
                      Siguiente
                      <ChevronRightIcon className="size-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>

        <CharacterDetailDialog
          characterId={selectedId}
          open={detailOpen}
          onClose={() => setDetailOpen(false)}
        />
      </div>
    </TooltipProvider>
  )
}
