import { AnimateIn } from "@/components/ui/AnimateIn";

const pains = [
  {
    icon: "chat_error",
    label: "Missed messages",
  },
  {
    icon: "schedule",
    label: "Slow follow-up",
  },
  {
    icon: "trending_down",
    label: "No clear sales process",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-[#0C111D] border-t border-white/[0.06] py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        {/* Image placeholder */}
        <AnimateIn>
          <div className="w-full aspect-[21/8] rounded-2xl border border-red-900/20 bg-gradient-to-br from-red-950/30 to-[#0C111D] flex items-center justify-center mb-20">
            <p className="text-red-900/50 text-[11px] tracking-[0.15em] uppercase text-center px-8">
              PROBLEM_IMAGE — Missed WhatsApp messages, stressed staff, lost leads
            </p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.03em] leading-[1.05] text-white mb-16 max-w-2xl">
            Where businesses lose money <em>every day</em>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map(({ icon, label }, i) => (
            <AnimateIn key={label} delay={i * 80}>
              <div className="rounded-2xl border border-red-900/25 bg-red-950/20 p-10 flex flex-col gap-6">
                <span className="material-symbols-outlined text-red-400 text-[36px]">
                  {icon}
                </span>
                <span className="text-[22px] font-semibold text-white leading-[1.2]">
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
