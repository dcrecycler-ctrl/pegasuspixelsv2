import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FinalCTASection() {
  return (
    <section className="bg-[#0C111D] border-t border-white/[0.06] py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-16">

        {/* Image placeholder */}
        <AnimateIn>
          <div className="w-full aspect-[21/7] rounded-2xl border border-white/[0.06] bg-gradient-to-br from-primary/10 to-[#0C111D] flex items-center justify-center mb-20">
            <p className="text-white/[0.18] text-[11px] tracking-[0.15em] uppercase text-center px-8">
              CTA_IMAGE — Calm business owner, control, clarity, success
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={80} className="text-center max-w-3xl mx-auto">
          <h2 className="text-[48px] md:text-[72px] font-black tracking-[-0.04em] leading-[0.95] text-white mb-6">
            Stop losing customers <em>silently</em>
          </h2>
          <p className="text-[20px] font-light text-white/50 mb-12 leading-[1.5]">
            Bring structure to how your business operates today.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 text-[17px] font-semibold rounded-xl hover:bg-primary-hover transition-colors"
          >
            👉 Book a strategy call
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
