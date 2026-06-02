import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FinalCTASection() {
  return (
    <section className="bg-[#F6F7F9] py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">

        <AnimateIn className="max-w-[640px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A] mb-6">
            Haz que cada cliente interesado sea visible y gestionado correctamente
          </h2>
          <p className="text-[17px] text-[#0F172A]/60 leading-[1.65] mb-2">
            No se trata solo de presencia digital.
          </p>
          <p className="text-[17px] text-[#0F172A]/60 leading-[1.65] mb-10">
            Se trata de ordenar lo que ya está entrando.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center bg-[#2563EB] text-white rounded-[10px] px-5 py-[14px] text-[15px] font-semibold hover:bg-blue-700 transition-colors"
          >
            Solicitar consulta
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
