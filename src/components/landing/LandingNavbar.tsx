import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { MenuIcon, ZapIcon } from "lucide-react"

const links = [
  { label: "Personajes", href: "#features" },
  { label: "Sagas", href: "#showcase" },
  { label: "Stats", href: "#stats" },
  { label: "FAQ", href: "#faq" },
]

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
            <span className="text-sm">🐉</span>
          </div>
          <span className="font-black text-lg tracking-wider text-white group-hover:text-orange-400 transition-colors">
            DB<span className="text-orange-400">Universe</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/home">
            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 hover:opacity-90 shadow-lg shadow-orange-500/25 font-semibold"
            >
              <ZapIcon className="size-3.5" />
              Explorar App
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-950 border-white/10 text-white w-72">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-white flex items-center gap-2">
                <span>🐉</span> DBUniverse
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <Separator className="my-3 bg-white/10" />
              <Link to="/home">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 font-semibold">
                  <ZapIcon className="size-4" />
                  Explorar App
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
