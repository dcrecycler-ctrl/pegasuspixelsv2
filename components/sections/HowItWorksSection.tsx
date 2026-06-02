import { AnimateIn } from "@/components/ui/AnimateIn";

const steps = [
  "Cliente contacta tu negocio",
  "Lead entra al sistema",
  "Equipo sigue proceso claro",
  "Se cierran más ventas",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white border-y border-slate-100 py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-12">
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900">
            Cómo funciona
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div className="bg-[#F7F8FA] border border-slate-100 rounded-2xl p-8 hover-lift">
                <span className="block text-[48px] font-black text-blue-600/20 leading-none mb-5">
                  {i + 1}
                </span>
                <p className="text-[18px] font-semibold text-slate-900 leading-[1.3]">
                  {step}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
