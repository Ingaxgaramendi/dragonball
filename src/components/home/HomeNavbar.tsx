import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HomeIcon, ArrowLeftIcon } from "lucide-react"

export function HomeNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" size="icon-sm" className="text-gray-500 hover:text-white hover:bg-white/5">
              <ArrowLeftIcon className="size-4" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <span className="text-xs">🐉</span>
            </div>
            <span className="font-black text-white hidden sm:block">
              DB<span className="text-orange-400">Universe</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 hidden sm:flex">
            <HomeIcon className="size-3 mr-1" />
            Catálogo
          </Badge>
        </div>
      </div>
    </header>
  )
}
