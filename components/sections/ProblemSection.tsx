import { AnimateIn } from "@/components/ui/AnimateIn";

const pains = [
  { icon: "chat_error",     label: "Mensajes sin respuesta" },
  { icon: "schedule",       label: "Seguimiento lento" },
  { icon: "trending_down",  label: "Sin proceso de ventas claro" },
];

export function ProblemSection() {
  return (
    <section className="bg-white border-y border-slate-100 py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-12">
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900 max-w-xl">
            Dónde los negocios pierden dinero <span className="text-red-500">cada día</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pains.map(({ icon, label }, i) => (
            <AnimateIn key={label} delay={i * 80}>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-8 flex items-center gap-6 hover-lift">
                <span className="material-symbols-outlined text-red-500 text-[32px] shrink-0">
                  {icon}
                </span>
                <span className="text-[18px] font-semibold text-slate-900 leading-[1.2]">
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
