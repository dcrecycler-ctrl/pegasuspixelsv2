import { AnimateIn } from "@/components/ui/AnimateIn";

export function SolutionSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <AnimateIn>
            <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A] mb-6">
              Convertimos interés en oportunidades claras
            </h2>
            <p className="text-[17px] text-[#0F172A]/60 leading-[1.65]">
              Organizamos la forma en que los clientes interactúan con tu negocio para que nada se pierda.
            </p>
          </AnimateIn>

          {/* Right: image placeholder */}
          <AnimateIn delay={100}>
            <div className="w-full aspect-video rounded-[12px] bg-[#EAECEF] flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#94A3B8] text-[13px] font-semibold tracking-[0.15em] uppercase mb-2">IMAGEN</p>
                <p className="text-[#94A3B8] text-[11px] tracking-[0.08em] text-center px-8">
                  Inventario estructurado en pantalla con autos o propiedades
                </p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
