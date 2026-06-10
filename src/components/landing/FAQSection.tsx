import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿De dónde vienen los datos de los personajes?",
    a: "Todos los datos se obtienen en tiempo real desde la Dragon Ball API (dragonball-api.com), una API pública y oficial que cubre personajes, transformaciones, planetas y más.",
  },
  {
    q: "¿Puedo ver las transformaciones de cada personaje?",
    a: "Sí. Al ingresar al detalle de un personaje, verás todas sus transformaciones disponibles en la API, incluyendo el nombre de la forma y el Ki de cada transformación.",
  },
  {
    q: "¿Cuántos personajes están disponibles?",
    a: "Actualmente la API cuenta con 58 personajes del universo Dragon Ball, incluyendo guerreros Z, villanos, dioses y personajes secundarios.",
  },
  {
    q: "¿La búsqueda funciona en tiempo real?",
    a: "La búsqueda filtra localmente entre los personajes ya cargados para máxima velocidad. También puedes combinarla con filtros de raza y afiliación.",
  },
  {
    q: "¿La aplicación funciona en móvil?",
    a: "Sí, está completamente optimizada para móvil con diseño Mobile First, breakpoints correctos y una experiencia táctil pulida.",
  },
  {
    q: "¿Qué tecnologías usa este proyecto?",
    a: "React 19, TypeScript, Vite, TailwindCSS v4, Shadcn/UI, Framer Motion, React Router y la Dragon Ball API. Todo con estándares de producción.",
  },
]

export function FAQSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="faq" ref={ref} className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-white/5 rounded-xl bg-white/[0.02] px-4 hover:border-white/10 transition-colors"
              >
                <AccordionTrigger className="text-sm text-white hover:text-orange-400 hover:no-underline py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-400 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
