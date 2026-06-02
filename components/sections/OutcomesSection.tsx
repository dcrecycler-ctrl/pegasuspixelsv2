import { AnimateIn } from "@/components/ui/AnimateIn";

const outcomes = [
  { icon: "trending_up",   label: "More sales closed" },
  { icon: "bolt",          label: "Faster response time" },
  { icon: "account_tree",  label: "Clear team workflow" },
  { icon: "funnel",        label: "Fewer lost leads" },
];

export function OutcomesSection() {
  return (
    <section className="bg-[#0C111D] border-t border-white/[0.06] py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-16">
          <h2 className="text-[40px] md:text-[52px] font-black tracking-[-0.03em] leading-[1.05] text-white max-w-xl">
            What changes when you have a system
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {outcomes.map(({ icon, label }, i) => (
            <AnimateIn key={label} delay={i * 80}>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-10 flex items-center gap-8 group hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                <span className="material-symbols-outlined text-primary text-[40px] shrink-0 group-hover:scale-110 transition-transform duration-300">
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
