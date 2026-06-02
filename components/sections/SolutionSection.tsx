import { AnimateIn } from "@/components/ui/AnimateIn";

export function SolutionSection() {
  return (
    <section className="bg-[#0C111D] border-t border-white/[0.06] py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text */}
          <AnimateIn>
            <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase block mb-8">
              The solution
            </span>
            <h2 className="text-[40px] md:text-[56px] font-black tracking-[-0.03em] leading-[1.05] text-white mb-6">
              We organize how your business <em>handles customers</em>
            </h2>
            <p className="text-[20px] font-light text-white/50 leading-[1.5]">
              Everything becomes structured. Nothing gets lost.
            </p>
          </AnimateIn>

          {/* Image placeholder */}
          <AnimateIn delay={100}>
            <div className="w-full aspect-square rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 to-[#0C111D] flex items-center justify-center">
              <p className="text-primary/30 text-[11px] tracking-[0.15em] uppercase text-center px-8">
                SYSTEM_FLOW_IMAGE — Customer → System → Team → Sale
              </p>
            </div>
          </AnimateIn>

        </div>

      </div>
    </section>
  );
}
