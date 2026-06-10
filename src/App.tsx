import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MenuIcon } from "lucide-react"

const personajes = {
  saiyajins: [
    {
      nombre: "Son Goku",
      iniciales: "GK",
      raza: "Saiyajin Puro",
      nivel: "Ultra Instinto",
      poder: 99,
      avatarBg: "bg-orange-500",
      descripcion:
        "Nacido como Kakarrot, adoptó la Tierra como su hogar. Su corazón puro le permitió alcanzar el Ultra Instinto, una técnica que ni los Dioses de la Destrucción dominan por completo.",
      habilidades: ["Kamehameha", "Kaioken x20", "Ultra Instinto", "Genki Dama"],
      saga: "Todas las sagas",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      nombre: "Vegeta",
      iniciales: "VG",
      raza: "Saiyajin Puro",
      nivel: "Ultra Ego",
      poder: 96,
      avatarBg: "bg-blue-600",
      descripcion:
        "El Príncipe de los Saiyajins. Orgulloso y tenaz, evolucionó de villano a héroe. Desbloquear el Ultra Ego demostró que su camino no era imitar a Goku, sino superarse como guerrero.",
      habilidades: ["Final Flash", "Big Bang Attack", "Ultra Ego", "Galick Gun"],
      saga: "Todas las sagas",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      nombre: "Gohan",
      iniciales: "GH",
      raza: "Medio Saiyajin",
      nivel: "Gohan Beast",
      poder: 93,
      avatarBg: "bg-purple-600",
      descripcion:
        "El hijo de Goku cuyo potencial siempre superó al de su padre. En la saga Cell desencadenó el SSJ2 con rabia pura. En Super Hero alcanzó Gohan Beast, su forma definitiva.",
      habilidades: ["Masenko", "Kamehameha Padre-Hijo", "Gohan Beast", "Especial X100"],
      saga: "Cell, Super Hero",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      nombre: "Trunks del Futuro",
      iniciales: "TF",
      raza: "Medio Saiyajin",
      nivel: "SSJ Rage",
      poder: 82,
      avatarBg: "bg-indigo-500",
      descripcion:
        "El héroe solitario de un futuro devastado. Viajó al pasado para salvar su línea temporal y enfrentó a Zamasu con coraje puro, combinando energía de toda la humanidad en su espada.",
      habilidades: ["Burning Attack", "Masenko", "SSJ Rage", "Espada de la Esperanza"],
      saga: "Androides, Goku Black",
      rating: "⭐⭐⭐⭐",
    },
  ],
  villanos: [
    {
      nombre: "Freezer",
      iniciales: "FR",
      raza: "Mutante Cósmico",
      nivel: "Black Frieza",
      poder: 98,
      avatarBg: "bg-violet-600",
      descripcion:
        "El Emperador del mal destruyó el Planeta Vegeta con un dedo. Volvió de entre los muertos, entrenó en una cámara de tiempo y emergió como Black Frieza, liquidando a Goku y Vegeta de un golpe.",
      habilidades: ["Death Beam", "Death Ball", "Nova Strike", "Black Frieza"],
      saga: "Namek, Resurrección, Granolah",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      nombre: "Cell",
      iniciales: "CL",
      raza: "Bioandroide",
      nivel: "Forma Perfecta",
      poder: 85,
      avatarBg: "bg-green-700",
      descripcion:
        "La criatura más perfecta diseñada por el Dr. Gero, con el ADN de los guerreros más fuertes de la historia. Absorbió a los Androides 17 y 18 para alcanzar su obsesionante perfección.",
      habilidades: ["Kamehameha", "Solar Flare", "Regeneración Celular", "Absorción"],
      saga: "Cell",
      rating: "⭐⭐⭐⭐",
    },
    {
      nombre: "Majin Buu",
      iniciales: "MB",
      raza: "Majin",
      nivel: "Buu Puro",
      poder: 88,
      avatarBg: "bg-pink-500",
      descripcion:
        "El ser creado por Bibidi hace millones de años. Absorbió a los guerreros más poderosos de la historia y puede regenerar su cuerpo sin límite. Su forma pura es instintiva y la más devastadora.",
      habilidades: ["Candy Beam", "Regeneración Total", "Absorción", "Planet Burst"],
      saga: "Buu",
      rating: "⭐⭐⭐⭐",
    },
    {
      nombre: "Jiren",
      iniciales: "JR",
      raza: "Humano del U11",
      nivel: "Poder Total",
      poder: 97,
      avatarBg: "bg-red-700",
      descripcion:
        "El hombre que superó los límites de un Dios. Miembro del Orgullo Tropas del Universo 11 y rival máximo de Goku durante el Torneo del Poder. Su fuerza nació del dolor y la pérdida.",
      habilidades: ["Power Impact", "Poder Total", "Barrera Psíquica", "Hell Storm"],
      saga: "Torneo del Poder",
      rating: "⭐⭐⭐⭐⭐",
    },
  ],
  zWarriors: [
    {
      nombre: "Piccolo",
      iniciales: "PC",
      raza: "Namekiano",
      nivel: "Naranja Piccolo",
      poder: 80,
      avatarBg: "bg-green-500",
      descripcion:
        "El guardián de la Tierra y eterno mentor de Gohan. Fusionado con Kami y luego con Shenron en Super Hero, alcanzó un nivel divino que lo posicionó entre los más poderosos del Universo 7.",
      habilidades: ["Makankosappo", "Rayo Especial", "Naranja Piccolo", "Regeneración"],
      saga: "Todas las sagas",
      rating: "⭐⭐⭐⭐",
    },
    {
      nombre: "Krilin",
      iniciales: "KR",
      raza: "Humano",
      nivel: "Humano Definitivo",
      poder: 55,
      avatarBg: "bg-yellow-600",
      descripcion:
        "El humano más poderoso de la Tierra y mejor amigo de Goku. Murió dos veces y siempre volvió. Su espíritu inquebrantable supera con creces sus limitaciones físicas.",
      habilidades: ["Kienzan", "Kamehameha", "Hakai Balls", "Ryuken"],
      saga: "Todas las sagas",
      rating: "⭐⭐⭐⭐",
    },
    {
      nombre: "Androide 18",
      iniciales: "18",
      raza: "Cyborg Humana",
      nivel: "Fuente Infinita",
      poder: 72,
      avatarBg: "bg-sky-500",
      descripcion:
        "Venció a Vegeta SSJ sin despeinarse. Convertida en aliada y esposa de Krilin, su reactor de energía infinita la hace una de las guerreras más consistentes y temibles.",
      habilidades: ["Energy Blasts", "Barrier", "Kienzan Mejorado", "Absorción de Energía"],
      saga: "Androides, Cell, Super",
      rating: "⭐⭐⭐⭐",
    },
    {
      nombre: "Yamcha",
      iniciales: "YM",
      raza: "Humano",
      nivel: "El Nivel",
      poder: 18,
      avatarBg: "bg-amber-700",
      descripcion:
        "El guerrero del desierto que se convirtió en meme universal. La escena del cráter con el Saibaman es historia del anime. Pero nadie puede negarle el corazón que siempre puso en cada pelea.",
      habilidades: ["Kamehameha", "Roken Koppu Ha", "Spirit Ball", "Wolf Fang Fist"],
      saga: "Todas las sagas",
      rating: "⭐⭐⭐",
    },
  ],
}

const sagas = [
  {
    nombre: "Saga Saiyajin",
    año: "1989",
    descripcion:
      "Raditz llega a la Tierra revelando el origen extraterrestre de Goku. La invasión de Nappa y Vegeta desencadena la primera guerra a escala cósmica.",
    emoji: "🌍",
    gradiente: "from-orange-600 to-red-700",
    episodios: "1–35",
  },
  {
    nombre: "Saga Namek",
    año: "1990",
    descripcion:
      "La búsqueda de las Esferas del Dragón de Namek y el duelo eterno contra Freezer. La primera transformación Super Saiyajin cambia el anime para siempre.",
    emoji: "🟢",
    gradiente: "from-green-600 to-teal-600",
    episodios: "36–117",
  },
  {
    nombre: "Saga Cell",
    año: "1992",
    descripcion:
      "El bioandroide perfecto organiza su propio torneo. El despertar del SSJ2 de Gohan y el sacrificio de Goku en uno de los clímax más memorables del shōnen.",
    emoji: "🧬",
    gradiente: "from-green-800 to-purple-700",
    episodios: "118–194",
  },
  {
    nombre: "Saga Buu",
    año: "1994",
    descripcion:
      "El ser más antiguo del universo resucita. Fusiones, absorciones y la Genki Dama más grande de la historia cierran Dragon Ball Z con todo.",
    emoji: "🍬",
    gradiente: "from-pink-600 to-purple-800",
    episodios: "195–291",
  },
  {
    nombre: "Torneo del Poder",
    año: "2017",
    descripcion:
      "12 universos compiten por su propia supervivencia. Goku alcanza el Ultra Instinto y desafía a Jiren en el combate más épico de Dragon Ball Super.",
    emoji: "🌌",
    gradiente: "from-blue-700 to-indigo-900",
    episodios: "97–131",
  },
  {
    nombre: "Saga Granolah",
    año: "2021",
    descripcion:
      "El último Cerealiano busca venganza contra Freezer y los Saiyajins. Black Frieza irrumpe destrozando todo lo que creíamos conocer sobre el poder.",
    emoji: "💎",
    gradiente: "from-violet-700 to-gray-900",
    episodios: "Manga 67–87",
  },
]

const ranking = [
  { pos: 1, nombre: "Goku (Ultra Instinto Dominado)", poder: "Más allá de lo divino", emoji: "🥇" },
  { pos: 2, nombre: "Vegeta (Ultra Ego)", poder: "Más allá de lo divino", emoji: "🥈" },
  { pos: 3, nombre: "Black Frieza", poder: "Superó a ambos con un golpe", emoji: "🥉" },
  { pos: 4, nombre: "Jiren (Poder Total)", poder: "Supera a un Dios de Destrucción", emoji: "4️⃣" },
  { pos: 5, nombre: "Beerus", poder: "Dios de la Destrucción del U7", emoji: "5️⃣" },
  { pos: 6, nombre: "Gohan Beast", poder: "Por encima de Goku SSJ Blue", emoji: "6️⃣" },
  { pos: 7, nombre: "Broly (Legendario)", poder: "Poder ilimitado en batalla", emoji: "7️⃣" },
  { pos: 8, nombre: "Piccolo Naranja", poder: "Nivel divino del U7", emoji: "8️⃣" },
  { pos: 9, nombre: "Androide 18", poder: "Energía infinita, sin límite", emoji: "9️⃣" },
  { pos: 10, nombre: "Krilin", poder: "Máximo humano de la Tierra", emoji: "🔟" },
]

const faqs = [
  {
    pregunta: "¿Cuándo se transforma Goku en Super Saiyajin por primera vez?",
    respuesta:
      "En el episodio 95 de Dragon Ball Z, durante la batalla contra Freezer en el Planeta Namek. La muerte de Krilin rompe la barrera emocional de Goku y desencadena la legendaria transformación dorada.",
  },
  {
    pregunta: "¿Quién creó las Esferas del Dragón originalmente?",
    respuesta:
      "El Gran Anciano Katas de Namek. Al llegar a la Tierra, Kami las recreó aquí. Dende las perfeccionó en Namek para otorgar múltiples deseos y también resucitar a muchas personas a la vez.",
  },
  {
    pregunta: "¿Por qué Vegeta tardó tanto en superar a Goku?",
    respuesta:
      "El orgullo de Vegeta le impedía soltar el ego, requisito para el Ultra Instinto. Eventualmente encontró su propio camino: el Ultra Ego, una transformación basada en el deseo de combate y la destrucción.",
  },
  {
    pregunta: "¿Qué diferencia hay entre la Fusión Potara y la Fusión Metamoru?",
    respuesta:
      "Los aretes Potara crean una fusión permanente entre dioses y temporal de 1 hora entre mortales. La Fusión Metamoru requiere la danza sincronizada y dura 30 minutos, pero permite elegir el momento exacto de fusión.",
  },
  {
    pregunta: "¿Quién es el personaje más fuerte del canon actual?",
    respuesta:
      "Black Frieza, quien entrenó 10 años en una cámara de tiempo y neutralizó a Goku Ultra Instinto y Vegeta Ultra Ego simultáneamente. Aunque los Ángeles como Whis superarían su habilidad técnica.",
  },
]

export default function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-black text-white">

        {/* ── NAVBAR ── */}
        <header className="sticky top-0 z-50 border-b border-orange-500/20 bg-black/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

            <div className="flex items-center gap-2">
              <span className="text-2xl">🐉</span>
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-xl font-black tracking-widest text-transparent">
                DRAGON BALL
              </span>
            </div>

            {/* Desktop */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {[
                  { label: "Personajes", href: "#personajes" },
                  { label: "Sagas", href: "#sagas" },
                  { label: "Ranking", href: "#ranking" },
                  { label: "Trivia", href: "#trivia" },
                ].map(({ label, href }) => (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuLink
                      href={href}
                      className="rounded-md px-4 py-2 text-sm text-gray-400 transition-colors hover:bg-orange-500/10 hover:text-orange-400"
                    >
                      {label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3">
              <Button
                className="hidden bg-orange-500 text-black hover:bg-orange-400 font-bold md:inline-flex"
                size="sm"
              >
                ⚡ Explorar
              </Button>

              {/* Mobile */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-orange-400 md:hidden">
                    <MenuIcon className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="border-orange-500/20 bg-zinc-950 text-white"
                >
                  <SheetHeader className="mb-6">
                    <SheetTitle className="text-orange-400">🐉 Dragon Ball</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-1">
                    {["Personajes", "Sagas", "Ranking", "Trivia"].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-orange-500/10 hover:text-orange-400"
                      >
                        {item}
                      </a>
                    ))}
                    <Separator className="my-3 bg-orange-500/20" />
                    <Button className="bg-orange-500 text-black hover:bg-orange-400 font-bold">
                      ⚡ Explorar universo
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
          {/* Glow de fondo */}
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, #f97316, #dc2626 40%, transparent 70%)",
            }}
          />
          {/* Grid decorativo */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,#f97316 39px,#f97316 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#f97316 39px,#f97316 40px)",
            }}
          />

          <div className="relative z-10 max-w-5xl">
            <Badge className="mb-6 border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-orange-400">
              ✨ El universo más épico del manga y el anime
            </Badge>

            <h1 className="mb-3 text-7xl font-black leading-none tracking-tight md:text-9xl">
              <span className="text-white">DRAGON</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #fbbf24 50%, #ef4444 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BALL
              </span>
            </h1>

            <p className="mb-4 text-lg font-bold tracking-[0.4em] text-orange-400/80">
              超サイヤ人 · UNIVERSO 7 · TORIYAMA
            </p>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
              Explora el legado de Akira Toriyama. Personajes, sagas, niveles de poder y los momentos
              que definieron una generación completa de fans del anime.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-orange-500 px-8 text-base font-bold text-black hover:bg-orange-400"
              >
                ⚡ Ver Personajes
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500/40 px-8 text-base text-orange-400 hover:bg-orange-500/10"
              >
                🐉 Explorar Sagas
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-20 flex flex-wrap justify-center gap-10">
              {[
                { valor: "291", label: "Episodios DBZ" },
                { valor: "7", label: "Esferas del Dragón" },
                { valor: "12", label: "Universos" },
                { valor: "∞", label: "Poder de Goku" },
              ].map(({ valor, label }) => (
                <div key={label} className="text-center">
                  <p
                    className="text-4xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #f97316, #fbbf24)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {valor}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-orange-500/20" />

        {/* ── PERSONAJES ── */}
        <section id="personajes" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 text-center">
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 text-orange-400">
              Guerreros del Universo 7
            </Badge>
            <h2 className="text-5xl font-black text-white">PERSONAJES</h2>
            <p className="mt-3 text-gray-500">
              Haz click en cualquier guerrero para ver su historia completa
            </p>
          </div>

          <Tabs defaultValue="saiyajins">
            <div className="mb-8 flex justify-center">
              <TabsList className="border border-orange-500/20 bg-zinc-900">
                <TabsTrigger
                  value="saiyajins"
                  className="data-active:bg-orange-500 data-active:text-black"
                >
                  🔥 Saiyajins
                </TabsTrigger>
                <TabsTrigger
                  value="villanos"
                  className="data-active:bg-orange-500 data-active:text-black"
                >
                  💀 Villanos
                </TabsTrigger>
                <TabsTrigger
                  value="zWarriors"
                  className="data-active:bg-orange-500 data-active:text-black"
                >
                  ⚔️ Z Warriors
                </TabsTrigger>
              </TabsList>
            </div>

            {(["saiyajins", "villanos", "zWarriors"] as const).map((tab) => (
              <TabsContent key={tab} value={tab}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {personajes[tab].map((char) => (
                    <Dialog key={char.nombre}>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer border-zinc-800 bg-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Avatar size="lg">
                                    <AvatarFallback
                                      className={`${char.avatarBg} text-base font-black text-white`}
                                    >
                                      {char.iniciales}
                                    </AvatarFallback>
                                  </Avatar>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{char.raza}</p>
                                </TooltipContent>
                              </Tooltip>
                              <div className="min-w-0">
                                <CardTitle className="truncate text-sm text-white">
                                  {char.nombre}
                                </CardTitle>
                                <Badge className="mt-1 border-0 bg-zinc-800 text-xs text-orange-400">
                                  {char.nivel}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent>
                            <div className="space-y-1.5">
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>Nivel de Poder</span>
                                <span className="font-bold text-orange-400">{char.poder}/100</span>
                              </div>
                              <div style={{ "--primary": "#f97316" } as React.CSSProperties}>
                                <Progress
                                  value={char.poder}
                                  className="h-2 bg-zinc-800"
                                />
                              </div>
                            </div>
                            <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-gray-500">
                              {char.descripcion}
                            </p>
                          </CardContent>

                          <CardFooter className="border-zinc-800 pt-0">
                            <span className="text-xs">{char.rating}</span>
                          </CardFooter>
                        </Card>
                      </DialogTrigger>

                      {/* Modal de detalle */}
                      <DialogContent className="border-orange-500/30 bg-zinc-900 text-white sm:max-w-md">
                        <DialogHeader>
                          <div className="flex items-center gap-4">
                            <Avatar className="size-16">
                              <AvatarFallback
                                className={`${char.avatarBg} size-16 text-2xl font-black text-white`}
                              >
                                {char.iniciales}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <DialogTitle className="text-xl text-white">
                                {char.nombre}
                              </DialogTitle>
                              <div className="mt-1.5 flex flex-wrap gap-1.5">
                                <Badge className="border-orange-500/30 bg-orange-500/15 text-xs text-orange-400">
                                  {char.raza}
                                </Badge>
                                <Badge className="border-0 bg-zinc-800 text-xs text-gray-300">
                                  {char.nivel}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </DialogHeader>

                        <DialogDescription className="leading-relaxed text-gray-300">
                          {char.descripcion}
                        </DialogDescription>

                        <Separator className="bg-orange-500/20" />

                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-widest text-gray-600">
                            Habilidades
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {char.habilidades.map((h) => (
                              <Badge
                                key={h}
                                className="border-orange-500/20 bg-orange-500/10 text-xs text-orange-400"
                              >
                                {h}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs text-gray-500">
                            <span className="uppercase tracking-widest">Nivel de Poder</span>
                            <span className="font-bold text-orange-400">{char.poder} / 100</span>
                          </div>
                          <div style={{ "--primary": "#f97316" } as React.CSSProperties}>
                            <Progress value={char.poder} className="h-3 bg-zinc-800" />
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">
                            Aparece en:{" "}
                            <span className="text-gray-400">{char.saga}</span>
                          </span>
                          <span>{char.rating}</span>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <Separator className="bg-orange-500/20" />

        {/* ── SAGAS ── */}
        <section id="sagas" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 text-center">
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 text-orange-400">
              Historia del universo
            </Badge>
            <h2 className="text-5xl font-black text-white">LAS SAGAS</h2>
            <p className="mt-3 text-gray-500">
              Las historias que cambiaron el anime para siempre
            </p>
          </div>

          <div className="px-14">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {sagas.map((saga) => (
                  <CarouselItem
                    key={saga.nombre}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full border-zinc-800 bg-zinc-900 overflow-hidden">
                      <div className={`h-1.5 w-full bg-gradient-to-r ${saga.gradiente}`} />
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-3xl">{saga.emoji}</span>
                            <CardTitle className="mt-2 text-sm text-white">
                              {saga.nombre}
                            </CardTitle>
                            <CardDescription className="mt-1 text-xs text-orange-400/70">
                              {saga.año} · Ep. {saga.episodios}
                            </CardDescription>
                          </div>
                          <Badge className="shrink-0 border-0 bg-zinc-800 text-xs text-gray-500">
                            {saga.año}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed text-gray-400">
                          {saga.descripcion}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-orange-500/30 bg-zinc-900 text-orange-400 hover:bg-orange-500/10" />
              <CarouselNext className="border-orange-500/30 bg-zinc-900 text-orange-400 hover:bg-orange-500/10" />
            </Carousel>
          </div>
        </section>

        <Separator className="bg-orange-500/20" />

        {/* ── RANKING ── */}
        <section id="ranking" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 text-center">
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 text-orange-400">
              Top poder
            </Badge>
            <h2 className="text-5xl font-black text-white">RANKING DE PODER</h2>
            <p className="mt-3 text-gray-500">
              Los 10 guerreros más poderosos del universo Dragon Ball
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <ScrollArea className="h-[500px] rounded-xl border border-orange-500/20 bg-zinc-900 p-4">
              <div className="space-y-1 pr-3">
                {ranking.map((fighter, i) => (
                  <div key={fighter.pos}>
                    <div
                      className={`flex items-center gap-4 rounded-xl p-3 transition-colors ${
                        i < 3
                          ? "border border-orange-500/20 bg-orange-500/10"
                          : "hover:bg-zinc-800"
                      }`}
                    >
                      <span className="w-8 text-center text-xl">{fighter.emoji}</span>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`truncate text-sm font-bold ${
                            i < 3 ? "text-orange-400" : "text-white"
                          }`}
                        >
                          {fighter.nombre}
                        </p>
                        <p className="text-xs text-gray-500">{fighter.poder}</p>
                      </div>
                      <Badge
                        className={`shrink-0 text-xs ${
                          i < 3
                            ? "bg-orange-500 text-black"
                            : "border-0 bg-zinc-800 text-gray-500"
                        }`}
                      >
                        #{fighter.pos}
                      </Badge>
                    </div>
                    {i < ranking.length - 1 && (
                      <Separator className="my-1 bg-zinc-800" />
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>

        <Separator className="bg-orange-500/20" />

        {/* ── TRIVIA / FAQ ── */}
        <section id="trivia" className="mx-auto max-w-4xl px-6 py-24">
          <div className="mb-14 text-center">
            <Badge className="mb-4 border-orange-500/30 bg-orange-500/10 text-orange-400">
              ¿Sabías que...?
            </Badge>
            <h2 className="text-5xl font-black text-white">TRIVIA & FAQ</h2>
            <p className="mt-3 text-gray-500">Las preguntas que todo fan se hace</p>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 px-4"
              >
                <AccordionTrigger className="py-4 text-sm text-white hover:text-orange-400 hover:no-underline">
                  {faq.pregunta}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-400 leading-relaxed">
                  {faq.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-orange-500/20 bg-zinc-950 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center gap-5 text-center">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🐉</span>
                <span
                  className="text-2xl font-black tracking-widest"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  DRAGON BALL
                </span>
              </div>

              <Separator className="w-20 bg-orange-500/30" />

              <p className="max-w-sm text-sm leading-relaxed text-gray-600">
                Tributo al legado de{" "}
                <span className="text-gray-400">Akira Toriyama (1955–2024)</span>.
                <br />
                Dragon Ball © Toei Animation · Shueisha.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="border-zinc-700 bg-zinc-900 text-xs text-gray-500">
                  Dragon Ball Z
                </Badge>
                <Badge className="border-zinc-700 bg-zinc-900 text-xs text-gray-500">
                  Dragon Ball Super
                </Badge>
                <Badge className="border-zinc-700 bg-zinc-900 text-xs text-gray-500">
                  Dragon Ball GT
                </Badge>
                <Badge className="border-zinc-700 bg-zinc-900 text-xs text-gray-500">
                  Super Dragon Ball Heroes
                </Badge>
              </div>

              <p className="text-xs text-gray-700">© 2026 · Hecho con ❤️ para los fans</p>
            </div>
          </div>
        </footer>

      </div>
    </TooltipProvider>
  )
}
