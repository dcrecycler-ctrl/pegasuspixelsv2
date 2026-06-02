import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FinalCTASection() {
  return (
    <section className="bg-[#F6F7F9] py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">

        <AnimateIn className="max-w-[640px] mx-auto">
          <p className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase mb-6">
            Empezá hoy
          </p>
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A] mb-6">
            ¿En qué industria trabajás?
          </h2>
          <p className="text-[17px] text-[#0F172A]/60 leading-[1.65] mb-10">
            Contanos de tu negocio y te mostramos cómo funciona en vivo — sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-[#2563EB] text-white rounded-[10px] px-5 py-[14px] text-[15px] font-semibold hover:bg-blue-700 transition-colors"
            >
              Hablemos por WhatsApp
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center border border-[#CBD5E1] bg-transparent text-[#0F172A] rounded-[10px] px-5 py-[14px] text-[15px] font-medium hover:bg-slate-50 transition-colors"
            >
              Enviar consulta
            </Link>
          </div>
          <p className="text-[13px] text-[#0F172A]/40">
            Automotoras · Inmobiliarias · Restaurantes · Construcción y más
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
