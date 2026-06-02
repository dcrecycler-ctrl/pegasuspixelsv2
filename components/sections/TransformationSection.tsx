import { AnimateIn } from "@/components/ui/AnimateIn";

export function TransformationSection() {
  return (
    <section className="bg-white border-y border-slate-100 py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        {/* Before / After image placeholder */}
        <AnimateIn>
          <div className="w-full aspect-[16/6] rounded-2xl overflow-hidden mb-14 grid grid-cols-2 gap-px border border-slate-200">
            <div className="bg-red-50 flex items-center justify-center">
              <p className="text-red-300 text-[11px] tracking-[0.12em] uppercase text-center px-6">
                BEFORE — Caos operativo
              </p>
            </div>
            <div className="bg-blue-50 flex items-center justify-center">
              <p className="text-blue-300 text-[11px] tracking-[0.12em] uppercase text-center px-6">
                AFTER — Sistema claro
              </p>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={80} className="max-w-2xl">
          <h2 className="text-[36px] md:text-[52px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900 mb-5">
            No es falta de clientes.<br />
            Es falta de <span className="text-blue-600">estructura.</span>
          </h2>
          <p className="text-[18px] font-light text-slate-500 leading-[1.55]">
            La mayoría de los negocios no ve dónde pierde ventas.
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
