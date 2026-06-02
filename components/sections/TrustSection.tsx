import { AnimateIn } from "@/components/ui/AnimateIn";

export function TrustSection() {
  return (
    <section className="bg-white border-y border-slate-200 py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">

        <AnimateIn>
          <div className="w-full aspect-[21/8] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center">
            <p className="text-slate-300 text-[11px] tracking-[0.12em] uppercase text-center px-8">
              REAL_BUSINESS_IMAGE — Negocio real con inventario visible,<br />ambiente profesional y clientes confiando en el lugar
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
