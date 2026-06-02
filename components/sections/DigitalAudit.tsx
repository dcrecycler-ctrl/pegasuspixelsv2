import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

const points = [
  "Puntos de entrada de clientes",
  "Flujo de comunicación",
  "Velocidad de respuesta",
  "Estructura operativa",
  "Oportunidades perdidas",
];

export function DigitalAudit() {
  return (
    <section className="py-32 bg-on-surface">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <AnimateIn className="lg:col-span-6">
            <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-6">
              Auditoría digital
            </span>
            <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.05] text-white mb-6">
              Analizamos cómo está funcionando tu negocio hoy en digital.
            </h2>
            <Link
              href="/contacto"
              className="inline-block mt-4 bg-primary text-on-primary px-10 py-4 text-[14px] font-semibold uppercase hover:bg-primary-hover transition-colors rounded-lg"
            >
              Revisar mi negocio
            </Link>
          </AnimateIn>

          <AnimateIn delay={100} className="lg:col-span-6">
            <ul className="divide-y divide-white/10">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-6 py-5">
                  <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant tabular-nums shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-[17px] font-light text-white/80">{point}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
