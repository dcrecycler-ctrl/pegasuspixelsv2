import { AnimateIn } from "@/components/ui/AnimateIn";

const industries = [
  "Concesionarias",
  "Restaurantes",
  "Empresas náuticas",
  "Servicios técnicos",
  "Profesionales",
  "Inmobiliarias",
];

export function Industries() {
  return (
    <section id="industrias" className="py-32 bg-surface border-y border-outline/20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-4">
            Industrias
          </span>
          <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.05] text-on-surface max-w-xl">
            Trabajamos con negocios que dependen de un flujo constante de clientes.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-outline/20">
          {industries.map((name, i) => (
            <AnimateIn key={name} delay={i * 60}>
              <div className="bg-surface px-8 py-10">
                <span className="text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-3">
                  0{i + 1}
                </span>
                <span className="text-[20px] font-semibold text-on-surface">{name}</span>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
