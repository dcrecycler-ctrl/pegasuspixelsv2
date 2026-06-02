import { AnimateIn } from "@/components/ui/AnimateIn";

export function TransformationSection() {
  return (
    <section className="bg-[#0C111D] border-t border-white/[0.06] py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        {/* Image placeholder: before / after */}
        <AnimateIn>
          <div className="w-full aspect-[16/7] rounded-2xl overflow-hidden mb-20 grid grid-cols-2 gap-px">
            <div className="bg-gradient-to-br from-red-950/60 to-[#0C111D] flex items-center justify-center">
              <p className="text-red-900/50 text-[11px] tracking-[0.15em] uppercase text-center px-6">
                BEFORE — Chaos
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/15 to-[#0C111D] flex items-center justify-center">
              <p className="text-primary/40 text-[11px] tracking-[0.15em] uppercase text-center px-6">
                AFTER — Control
              </p>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={80}>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-[-0.03em] leading-[1.05] text-white mb-6 max-w-3xl">
            It&apos;s not lack of customers.<br />
            It&apos;s <em>lack of structure.</em>
          </h2>
          <p className="text-[20px] font-light text-white/50 max-w-lg leading-[1.5]">
            Most businesses don&apos;t see where they are losing sales.
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
