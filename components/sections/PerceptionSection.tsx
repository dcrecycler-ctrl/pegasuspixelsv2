import { AnimateIn } from "@/components/ui/AnimateIn";

export function PerceptionSection() {
  return (
    <section className="bg-white border-y border-slate-200 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <AnimateIn>
            <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900 mb-6">
              Most businesses lose interest before the conversation starts
            </h2>
            <p className="text-[18px] font-light text-slate-600 leading-[1.65]">
              Not because of sales — but because customers arrive unsure or unconvinced.
            </p>
          </AnimateIn>

          {/* Right: image */}
          <AnimateIn delay={100}>
            <div className="w-full aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
              <p className="text-slate-300 text-[11px] tracking-[0.12em] uppercase text-center px-8">
                PERCEPTION_IMAGE — Customer browsing business online
              </p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
