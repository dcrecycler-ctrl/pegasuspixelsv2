import { AnimateIn } from "@/components/ui/AnimateIn";

const steps = [
  "Customer contacts your business",
  "Lead enters the system",
  "Team follows a clear process",
  "Sales get completed",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#0C111D] border-t border-white/[0.06] py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-16">
          <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.03em] leading-[1.05] text-white">
            How it works
          </h2>
        </AnimateIn>

        {/* Image placeholder */}
        <AnimateIn>
          <div className="w-full aspect-[21/6] rounded-2xl border border-white/[0.06] bg-gradient-to-r from-primary/10 via-white/[0.03] to-primary/10 flex items-center justify-center mb-16">
            <p className="text-white/[0.18] text-[11px] tracking-[0.15em] uppercase text-center px-8">
              PROCESS_IMAGE — Simple 4-step flow diagram
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div className="bg-[#0C111D] p-10 h-full">
                <span className="block text-[40px] font-black text-primary/30 leading-none mb-6">
                  {i + 1}
                </span>
                <div className="w-8 h-px bg-primary/30 mb-6" />
                <p className="text-[18px] font-semibold text-white leading-[1.3]">
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
