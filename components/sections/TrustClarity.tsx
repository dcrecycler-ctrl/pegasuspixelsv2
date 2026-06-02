import { AnimateIn } from "@/components/ui/AnimateIn";

export function TrustClarity() {
  return (
    <section className="bg-[#F6F7F9] py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">

        <AnimateIn className="max-w-[720px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A] mb-6">
            Ordenamos cómo tu negocio se presenta y cómo gestiona el interés que recibe
          </h2>
          <p className="text-[17px] text-[#0F172A]/60 leading-[1.65]">
            Mejoramos cómo los clientes entienden tu negocio y damos estructura a los contactos que ya entran.
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
