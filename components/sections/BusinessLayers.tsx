import { AnimateIn } from "@/components/ui/AnimateIn";

const layers = [
  {
    n: "1",
    title: "Descubrimiento",
    desc: "Cómo los clientes te encuentran",
  },
  {
    n: "2",
    title: "Contacto",
    desc: "Cómo te escriben o llaman — WhatsApp, redes, formularios",
  },
  {
    n: "3",
    title: "Gestión",
    desc: "Cómo se manejan esas consultas",
  },
  {
    n: "4",
    title: "Continuidad",
    desc: "Cómo el sistema mejora con el tiempo",
  },
];

export function BusinessLayers() {
  return (
    <section className="py-32 bg-on-surface">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-20">
          <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-6">
            Cómo funcionan los negocios modernos
          </span>
          <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.05] text-white max-w-2xl">
            Todo negocio hoy opera en cuatro capas conectadas.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {layers.map(({ n, title, desc }, i) => (
            <AnimateIn key={n} delay={i * 80}>
              <div className="bg-on-surface p-10 h-full">
                <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-6">
                  {n}
                </span>
                <div className="w-8 h-px bg-primary-variant mb-6" />
                <h3 className="text-[20px] font-semibold text-white mb-3">{title}</h3>
                <p className="text-[15px] font-light leading-[1.65] text-white/55">{desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Por qué existe este enfoque */}
        <AnimateIn delay={200}>
          <div className="mt-20 border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-6">
                Por qué existe este enfoque
              </span>
              <h3 className="text-[28px] font-black tracking-[-0.02em] leading-[1.2] text-white">
                El comportamiento del cliente cambió más rápido que los sistemas de los negocios.
              </h3>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <p className="text-[17px] font-light leading-[1.65] text-white/60">
                Eso creó una brecha entre cómo los clientes interactúan y cómo los negocios responden.
              </p>
              <p className="mt-4 text-[17px] font-semibold text-white">
                Nosotros cerramos esa brecha.
              </p>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
