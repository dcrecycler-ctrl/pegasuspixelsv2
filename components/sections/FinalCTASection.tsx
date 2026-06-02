import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FinalCTASection() {
  return (
    <section className="bg-slate-900 py-32 md:py-40">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">

        <AnimateIn className="max-w-[640px] mx-auto">
          <h2 className="text-[40px] md:text-[56px] font-black tracking-[-0.03em] leading-[1.0] text-white mb-6">
            Haz que tu negocio sea más claro para tus clientes
          </h2>
          <p className="text-[17px] font-light text-slate-400 mb-3 leading-[1.65]">
            No necesitas cambiar cómo operas internamente.
          </p>
          <p className="text-[17px] font-light text-slate-400 mb-12 leading-[1.65]">
            Solo necesitas mejorar cómo los clientes te ven y te contactan.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 text-[17px] font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-xl shadow-blue-600/20"
          >
            👉 Solicitar consulta
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
