import { AnimateIn } from "@/components/ui/AnimateIn";

const pillars = [
  {
    title: "Sitios web",
    body: "Sitios diseñados para conectar la intención del cliente con consultas reales, no solo presencia.",
  },
  {
    title: "Automatización",
    body: "Sistemas simples que ayudan a responder más rápido y reducir trabajo manual.",
  },
  {
    title: "Operaciones",
    body: "Herramientas para organizar consultas, reservas y comunicación en un solo lugar.",
  },
  {
    title: "Optimización",
    body: "Mejoras pequeñas que hacen que el flujo digital sea más consistente y ordenado.",
  },
];

export function DigitalInfrastructure() {
  return (
    <section className="py-32 bg-surface border-b border-outline/20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-16">
          <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.1] max-w-2xl text-on-surface">
            Infraestructura digital
          </h2>
          <p className="mt-5 text-[17px] font-light leading-[1.65] text-ink-700 max-w-2xl">
            Esta es la estructura que usamos para conectar cómo opera tu negocio online.
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
              El sitio web no es el centro. Es una parte del sistema.
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
