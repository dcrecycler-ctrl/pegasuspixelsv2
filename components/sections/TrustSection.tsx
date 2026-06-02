import { AnimateIn } from "@/components/ui/AnimateIn";

export function TrustSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn>
          <div className="w-full aspect-video rounded-[12px] bg-[#EAECEF] flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#94A3B8] text-[13px] font-semibold tracking-[0.15em] uppercase mb-2">IMAGEN</p>
              <p className="text-[#94A3B8] text-[11px] tracking-[0.08em] text-center px-8">
                Clientes interactuando con inventario en entorno real de negocio
              </p>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
