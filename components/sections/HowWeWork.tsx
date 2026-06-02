import { AnimateIn } from "@/components/ui/AnimateIn";

const steps = [
  "Analizamos cómo entra la demanda hoy",
  "Identificamos dónde se pierden oportunidades de clientes",
  "Revisamos cómo se gestionan las consultas y el seguimiento",
  "Detectamos procesos manuales innecesarios o ineficientes",
  "Diseñamos e implementamos un sistema digital para mejorar todo el flujo",
];

export function HowWeWork() {
  return (
    <section className="py-32 bg-on-surface">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: heading block */}
          <AnimateIn className="lg:col-span-5">
            <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-6">
              Cómo trabajamos
            </span>
            <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.05] text-white mb-8">
              No construimos sitios web.
            </h2>
            <p className="text-[17px] font-light leading-[1.65] text-white/60 max-w-sm">
              Analizamos cómo funciona tu negocio y diseñamos el sistema digital alrededor de eso.
            </p>
          </AnimateIn>

          {/* Right: steps + closing */}
          <AnimateIn delay={120} className="lg:col-span-7">
            <ol className="space-y-0 divide-y divide-white/10">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-8 py-6">
                  <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase tabular-nums shrink-0 pt-[3px]">
                    0{i + 1}
                  </span>
                  <span className="text-[17px] font-light leading-[1.6] text-white/80">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-12 pt-8 border-t border-white/10 space-y-3">
              <p className="text-[15px] font-semibold text-white">
                No empezamos con diseño.<br />Empezamos con cómo funciona tu negocio.
              </p>
              <p className="text-[15px] font-light text-white/55 leading-[1.65]">
                El objetivo no es tener un sitio web. El objetivo es mejorar cómo tu negocio captura, gestiona y convierte clientes.
              </p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
