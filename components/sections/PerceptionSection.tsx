import { AnimateIn } from "@/components/ui/AnimateIn";

const bullets = [
  "clientes interesados no siempre son registrados",
  "el seguimiento no es consistente",
  "la información queda dispersa en WhatsApp o Excel",
];

export function PerceptionSection() {
  return (
    <section className="bg-[#F6F7F9] py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16">
        <div className="max-w-[640px]">

          <AnimateIn>
            <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A] mb-6">
              El problema no es la falta de clientes
            </h2>
            <p className="text-[17px] text-[#0F172A]/60 leading-[1.65] mb-10">
              El problema es que el interés entra, pero no siempre se organiza ni se sigue correctamente.
            </p>
          </AnimateIn>

          <AnimateIn delay={80}>
            <ul className="space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  <span className="text-[17px] text-[#0F172A]/80 leading-[1.6]">{b}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
