import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function LandingFooter() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="size-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-xs">🐉</span>
              </div>
              <span className="font-black text-white">
                DB<span className="text-orange-400">Universe</span>
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
              Catálogo de personajes Dragon Ball con datos en tiempo real desde la API oficial.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-4">
              Navegación
            </p>
            <div className="space-y-2">
              {["#features", "#showcase", "#stats", "#faq"].map((href, i) => (
                <a
                  key={href}
                  href={href}
                  className="block text-xs text-gray-500 hover:text-white transition-colors"
                >
                  {["Características", "Personajes", "Stats", "FAQ"][i]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-4">
              Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["React 19", "TypeScript", "Vite", "TailwindCSS", "Shadcn/UI", "Framer Motion"].map(
                (tech) => (
                  <Badge
                    key={tech}
                    className="border-white/5 bg-white/[0.03] text-gray-500 text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>

        <Separator className="bg-white/5 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-700">
          <p>© 2026 DBUniverse. Tributo a Akira Toriyama (1955–2024).</p>
          <p>Dragon Ball © Toei Animation · Shueisha. Fan project.</p>
        </div>
      </div>
    </footer>
  )
}
