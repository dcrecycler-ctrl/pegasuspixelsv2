import { AnimateIn } from "@/components/ui/AnimateIn";

export function TrustSection() {
  return (
    <section className="bg-[#F7F8FA] py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn>
          <div className="w-full aspect-[21/8] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center mb-12">
            <p className="text-slate-300 text-[11px] tracking-[0.15em] uppercase text-center px-8">
              REAL_BUSINESS_IMAGE — Concesionaria / restaurante / oficina
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={80} className="max-w-xl">
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900 mb-4">
            Diseñado para negocios reales
          </h2>
          <p className="text-[18px] font-light text-slate-500 leading-[1.55]">
            Para empresas que dependen de un flujo constante de clientes.
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
