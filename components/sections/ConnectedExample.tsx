import { AnimateIn } from "@/components/ui/AnimateIn";

const columns = [
  {
    label: "Antes",
    text: "Consultas llegan por distintos canales sin orden ni seguimiento.",
    accent: "bg-red-500/10 border-red-500/20 text-red-700",
    dot: "bg-red-500",
  },
  {
    label: "Después",
    text: "Todas las consultas se organizan y responden dentro de un flujo claro.",
    accent: "bg-primary/10 border-primary/20 text-primary",
    dot: "bg-primary",
  },
  {
    label: "Resultado",
    text: "Más control, mejor respuesta y menos oportunidades perdidas.",
    accent: "bg-green-600/10 border-green-600/20 text-green-700",
    dot: "bg-green-600",
  },
];

export function ConnectedExample() {
  return (
    <section className="py-32 bg-surface-container-high border-y border-outline/20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-4">
            Ejemplo de sistema conectado
          </span>
          <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.05] text-on-surface max-w-xl">
            Qué cambia cuando el sistema funciona.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(({ label, text, accent, dot }, i) => (
            <AnimateIn key={label} delay={i * 80}>
              <div className={`rounded-xl border p-8 h-full ${accent}`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-2 h-2 rounded-full ${dot}`} />
                  <span className="text-[11px] font-bold tracking-[0.12em] uppercase">
                    {label}
                  </span>
                </div>
                <p className="text-[17px] font-light leading-[1.65] text-on-surface">
                  {text}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
