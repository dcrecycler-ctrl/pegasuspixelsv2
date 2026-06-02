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
            <a
              href="https://wa.me/59899000000?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Pegasus%20Pixels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-[10px] px-5 py-[14px] text-[15px] font-semibold hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.882a.5.5 0 0 0 .606.607l6.098-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.36-.214-3.733.893.924-3.638-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Hablemos por WhatsApp
            </a>
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
