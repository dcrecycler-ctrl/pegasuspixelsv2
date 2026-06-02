import { AnimateIn } from "@/components/ui/AnimateIn";

const steps = [
  "El cliente entra a tu sitio",
  "Ve tu inventario de forma clara",
  "Se interesa por lo que ofreces",
  "Te contacta directamente",
  "Tu equipo sigue el proceso normal",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F7F8FA] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">

        <AnimateIn className="mb-14">
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900">
            Cómo funciona
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full hover-lift">
                <span className="block text-[48px] font-black text-slate-200 leading-none mb-5">
                  {i + 1}
                </span>
                <p className="text-[16px] font-semibold text-slate-900 leading-[1.35]">
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
