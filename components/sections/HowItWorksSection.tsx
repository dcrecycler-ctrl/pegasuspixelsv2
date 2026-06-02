import { AnimateIn } from "@/components/ui/AnimateIn";

const steps = [
  "Customer sees your business online",
  "They understand it clearly",
  "They contact you already interested",
  "Your team continues as usual",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white border-y border-slate-200 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">

        <AnimateIn className="mb-14">
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900">
            How it works
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div className="bg-[#F7F8FA] border border-slate-200 rounded-2xl p-8 h-full hover-lift">
                <span className="block text-[52px] font-black text-slate-200 leading-none mb-5">
                  {i + 1}
                </span>
                <p className="text-[17px] font-semibold text-slate-900 leading-[1.35]">
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
