import { AnimateIn } from "@/components/ui/AnimateIn";

const pillars = [
  {
    title: "Sitios web",
    body: "Sitios diseñados para generar confianza, mejorar la visibilidad y convertir visitantes en consultas.",
  },
  {
    title: "Automatización",
    body: "Reducimos tareas repetitivas y mejoramos tiempos de respuesta mediante sistemas automatizados.",
  },
  {
    title: "Operaciones",
    body: "Implementamos sistemas para gestionar clientes, reservas, consultas e información de forma centralizada.",
  },
  {
    title: "Optimización",
    body: "Analizamos procesos existentes para detectar ineficiencias y oportunidades de mejora operativa.",
  },
];

export function DigitalInfrastructure() {
  return (
    <section className="py-32 bg-surface border-b border-outline/20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-16">
          <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.1] max-w-2xl text-on-surface">
            Infraestructura digital para pequeñas empresas
          </h2>
          <p className="mt-5 text-[17px] font-light leading-[1.65] text-ink-700 max-w-2xl">
            No se trata solo de tener un sitio web. Se trata de construir un sistema digital que ayude al negocio a operar mejor, captar más oportunidades y reducir fricción en sus procesos.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-10">
          {pillars.map(({ title, body }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <div className="border-l-2 border-primary/30 pl-6">
                <h3 className="text-xl font-semibold text-on-surface">{title}</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">{body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200}>
          <div className="mt-16 border-t border-outline/20 pt-8">
            <p className="text-[17px] font-light leading-[1.65] text-ink-700 max-w-3xl">
              El sitio web deja de ser el producto principal y pasa a ser una parte dentro de un sistema digital más amplio orientado al rendimiento del negocio.
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
