import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

const points = [
  "Respuesta lenta = cliente perdido",
  "Mensaje ignorado = ingreso perdido",
  "Sin seguimiento = fuga invisible",
];

export function PressureBlock() {
  return (
    <section className="bg-[#F7F8FA] py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="max-w-[760px]">

          <AnimateIn>
            <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-slate-900 mb-5">
              La mayoría de negocios no se da cuenta<br />de esto <span className="text-red-500">hasta que es tarde</span>
            </h2>
            <p className="text-[17px] font-light text-slate-500 mb-10 leading-[1.6]">
              Los clientes no desaparecen. Se pierden por demoras, desorden y falta de seguimiento.
            </p>
          </AnimateIn>

          <AnimateIn delay={80}>
            <ul className="space-y-4 mb-10">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <span className="text-[17px] font-medium text-slate-900">{point}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={140}>
            <Link
              href="#how-it-works"
              className="text-[14px] font-semibold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
            >
              Ver cómo se soluciona →
            </Link>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
