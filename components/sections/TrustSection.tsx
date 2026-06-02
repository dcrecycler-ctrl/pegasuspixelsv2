import { AnimateIn } from "@/components/ui/AnimateIn";

export function TrustSection() {
  return (
    <section className="bg-[#0C111D] border-t border-white/[0.06] py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        {/* Image placeholder */}
        <AnimateIn>
          <div className="w-full aspect-[21/9] rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.05] to-[#0C111D] flex items-center justify-center mb-16">
            <p className="text-white/[0.18] text-[11px] tracking-[0.15em] uppercase text-center px-8">
              REAL_BUSINESS_IMAGE — Dealership / restaurant / office in real operation
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={80} className="max-w-2xl">
          <h2 className="text-[40px] md:text-[56px] font-black tracking-[-0.03em] leading-[1.05] text-white mb-6">
            Built for <em>real businesses</em>
          </h2>
          <p className="text-[20px] font-light text-white/50 leading-[1.5]">
            Designed for companies that rely on daily customer flow.
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
