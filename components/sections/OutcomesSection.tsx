import { AnimateIn } from "@/components/ui/AnimateIn";

const outcomes = [
  { icon: "trending_up",   label: "Más ventas cerradas" },
  { icon: "bolt",          label: "Respuesta más rápida" },
  { icon: "account_tree",  label: "Equipo organizado" },
  { icon: "funnel",        label: "Menos clientes perdidos" },
];

export function OutcomesSection() {
  return (
    <section className="bg-white border-y border-slate-100 py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {outcomes.map(({ icon, label }, i) => (
            <AnimateIn key={label} delay={i * 80}>
              <div className="bg-white border border-slate-100 rounded-2xl p-8 flex items-center gap-6 hover-lift">
                <span className="material-symbols-outlined text-blue-600 text-[36px] shrink-0">
                  {icon}
                </span>
                <span className="text-[20px] font-semibold text-slate-900 leading-[1.2]">
                  {label}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
