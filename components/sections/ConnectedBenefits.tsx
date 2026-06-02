import { AnimateIn } from "@/components/ui/AnimateIn";

const benefits = [
  "Respuestas más rápidas a clientes",
  "Seguimiento más organizado",
  "Menos oportunidades perdidas",
  "Flujo de comunicación más claro",
  "Menos trabajo manual",
];

export function ConnectedBenefits() {
  return (
    <section className="py-32 bg-white border-b border-outline/20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <AnimateIn className="lg:col-span-5">
            <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.05] text-on-surface">
              Qué cambia cuando todo se conecta
            </h2>
            <p className="mt-6 text-[17px] font-light leading-[1.65] text-ink-700">
              Cuando tu presencia digital funciona como un sistema, el negocio se vuelve más claro y más fácil de operar.
            </p>
          </AnimateIn>

          <AnimateIn delay={100} className="lg:col-span-7 lg:pt-2">
            <ul className="divide-y divide-outline/20">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-6 py-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-[17px] font-light leading-[1.6] text-on-surface">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
