import { AnimateIn } from "@/components/ui/AnimateIn";

const steps = [
  "El cliente entra a tu sitio",
  "Ve tu inventario claramente",
  "Muestra interés",
  "Te contacta",
  "El equipo gestiona el contacto",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F6F7F9] py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-14">
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A]">
            Cómo funciona
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-7 h-full hover-lift">
                <span className="block text-[44px] font-black text-[#E2E8F0] leading-none mb-4">
                  {i + 1}
                </span>
                <p className="text-[15px] font-semibold text-[#0F172A] leading-[1.4]">
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
