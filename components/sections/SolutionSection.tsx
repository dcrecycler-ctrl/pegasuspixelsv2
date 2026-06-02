import { AnimateIn } from "@/components/ui/AnimateIn";

export function SolutionSection() {
  return (
    <section className="bg-[#F7F8FA] py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <AnimateIn>
            <span className="text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase block mb-6">
              La solución
            </span>
            <h2 className="text-[36px] md:text-[52px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900 mb-5">
              Organizamos cómo tu negocio <span className="text-blue-600">gestiona clientes</span>
            </h2>
            <p className="text-[18px] font-light text-slate-500 leading-[1.55]">
              Todo queda estructurado. Nada se pierde.
            </p>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="w-full aspect-square rounded-2xl border border-blue-100 bg-blue-50 flex items-center justify-center">
              <p className="text-blue-200 text-[11px] tracking-[0.12em] uppercase text-center px-8">
                SYSTEM_FLOW_IMAGE — Cliente → Sistema → Equipo → Venta
              </p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
