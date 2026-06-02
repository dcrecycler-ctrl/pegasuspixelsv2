import { AnimateIn } from "@/components/ui/AnimateIn";

const items = [
  "más claridad para el cliente",
  "más consultas recibidas",
  "menos oportunidades perdidas",
  "mejor seguimiento del interés",
];

export function OutcomesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">

        <AnimateIn className="mb-10">
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A]">
            Qué cambia
          </h2>
        </AnimateIn>

        <AnimateIn delay={80}>
          <ul className="inline-flex flex-col gap-4 text-left">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                <span className="text-[17px] text-[#0F172A]/80 leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </AnimateIn>

      </div>
    </section>
  );
}
