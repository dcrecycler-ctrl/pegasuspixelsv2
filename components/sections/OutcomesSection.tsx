import { AnimateIn } from "@/components/ui/AnimateIn";

const outcomes = [
  { icon: "star_rate",   label: "Better first impression" },
  { icon: "group",       label: "More qualified customers" },
  { icon: "chat",        label: "Easier conversations" },
  { icon: "verified",    label: "Higher trust before contact" },
];

export function OutcomesSection() {
  return (
    <section className="bg-[#F7F8FA] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">

        <AnimateIn className="mb-14">
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900">
            What changes
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {outcomes.map(({ icon, label }, i) => (
            <AnimateIn key={label} delay={i * 80}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 flex items-center gap-6 hover-lift">
                <span className="material-symbols-outlined text-blue-600 text-[32px] shrink-0">
                  {icon}
                </span>
                <span className="text-[18px] font-semibold text-slate-900 leading-[1.25]">
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
