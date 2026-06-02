import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FinalCTASection() {
  return (
    <section className="bg-slate-900 py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">

        <AnimateIn className="max-w-2xl mx-auto">
          <h2 className="text-[44px] md:text-[64px] font-black tracking-[-0.04em] leading-[0.95] text-white mb-6">
            Deja de perder clientes<br />
            <span className="text-red-500">sin darte cuenta</span>
          </h2>
          <p className="text-[18px] font-light text-white/50 mb-12 leading-[1.55]">
            Pon orden en cómo funciona tu negocio hoy.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 text-[17px] font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-xl shadow-blue-600/20"
          >
            Arreglar mi sistema →
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
