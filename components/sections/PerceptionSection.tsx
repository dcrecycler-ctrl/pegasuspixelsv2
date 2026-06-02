import { AnimateIn } from "@/components/ui/AnimateIn";

const bullets = [
  "el cliente no entiende rápido lo que ofreces",
  "el inventario no se ve claro",
  "el contacto no es inmediato",
];

export function PerceptionSection() {
  return (
    <section className="bg-[#F7F8FA] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="max-w-[680px]">

          <AnimateIn>
            <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900 mb-8">
              Muchos negocios pierden clientes antes del primer contacto
            </h2>
            <p className="text-[18px] font-light text-slate-600 leading-[1.65] mb-2">
              No es falta de interés.
            </p>
            <p className="text-[18px] font-light text-slate-600 leading-[1.65] mb-10">
              Es falta de claridad en cómo se presenta el negocio online.
            </p>
          </AnimateIn>

          <AnimateIn delay={80}>
            <ul className="space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span className="text-[17px] text-slate-700 leading-[1.6]">{b}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
