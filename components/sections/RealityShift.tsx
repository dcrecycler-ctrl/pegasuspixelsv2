import { AnimateIn } from "@/components/ui/AnimateIn";

const channels = ["WhatsApp", "Instagram", "Google", "Llamadas telefónicas", "Sitio web"];

export function RealityShift() {
  return (
    <section className="py-32 bg-surface-container-high border-y border-outline/20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 space-y-24">

        {/* Block 1: Reality statement + channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <AnimateIn className="lg:col-span-6">
            <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.05] text-on-surface">
              La forma en que los clientes interactúan con los negocios cambió.
            </h2>
            <p className="mt-6 text-[17px] font-light leading-[1.65] text-ink-700">
              Ya no siguen un solo canal. Hoy se mueven entre:
            </p>
          </AnimateIn>

          <AnimateIn delay={100} className="lg:col-span-6 flex flex-wrap gap-3 lg:pt-4">
            {channels.map((ch) => (
              <span
                key={ch}
                className="px-5 py-3 bg-surface border border-outline/40 rounded-full text-[15px] font-medium text-on-surface"
              >
                {ch}
              </span>
            ))}
            <p className="w-full mt-4 text-[17px] font-light leading-[1.65] text-ink-700">
              Pero la mayoría de los negocios todavía los gestiona por separado.
            </p>
          </AnimateIn>
        </div>

        {/* Block 2: Insight + Problem side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline/20">
          <AnimateIn className="bg-surface-container-high p-10 md:pr-16">
            <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-5">
              Insight clave
            </span>
            <p className="text-[22px] font-semibold leading-[1.4] text-on-surface">
              Los negocios no necesitan más herramientas.
            </p>
            <p className="mt-3 text-[22px] font-light leading-[1.4] text-ink-700">
              Necesitan que las herramientas trabajen juntas.
            </p>
          </AnimateIn>

          <AnimateIn delay={80} className="bg-surface-container-high p-10 md:pl-16">
            <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-5">
              Lo que está pasando hoy
            </span>
            <p className="text-[17px] font-light leading-[1.65] text-ink-700">
              La mayoría de los negocios ya está presente en todos los canales.
            </p>
            <p className="mt-4 text-[17px] font-semibold text-on-surface">
              El problema no es visibilidad.
            </p>
            <p className="text-[17px] font-semibold text-on-surface">
              El problema es conexión.
            </p>
            <p className="mt-4 text-[17px] font-light leading-[1.65] text-ink-700">
              Los mensajes, consultas y contactos quedan dispersos sin un flujo claro.
            </p>
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
