import { AnimateIn } from "@/components/ui/AnimateIn";

export function FounderSection() {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: photo placeholder */}
          <AnimateIn>
            <div className="w-full aspect-[4/5] rounded-[16px] bg-[#EAECEF] flex items-center justify-center overflow-hidden max-w-md">
              <div className="text-center px-8">
                <span className="material-symbols-outlined text-[#CBD5E1] text-[48px] block mb-4">person</span>
                <p className="text-[#94A3B8] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">Foto</p>
                <p className="text-[#94A3B8] text-[11px] tracking-[0.08em] leading-[1.6]">
                  Foto profesional — ambiente natural, Punta del Este
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: text */}
          <AnimateIn delay={100}>
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase mb-6">
              The mind behind PP
            </p>
            <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A] mb-6">
              Hi, I&apos;m Alejandro.
            </h2>
            <p className="text-[17px] text-[#0F172A]/70 leading-[1.75] mb-5">
              I spent decades in the automotive and hospitality industries in the US. I know exactly how these businesses operate from the inside — the leads that slip through, the follow-ups that never happen, the sales lost without anyone noticing.
            </p>
            <p className="text-[17px] text-[#0F172A]/70 leading-[1.75] mb-5">
              Pegasus Pixels was born from that experience. I'm not a developer who learned about business — I'm someone from the business who learned to build the tools that were always missing.
            </p>
            <p className="text-[17px] text-[#0F172A]/70 leading-[1.75] mb-10">
              I now work from Punta del Este, serving both local businesses and US clients. When I implement a system, I stay until your team owns it. That's not an extra — it's the service.
            </p>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#EAECEF] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#94A3B8] text-[24px]">person</span>
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#0F172A]">Alejandro González</p>
                <p className="text-[13px] text-[#94A3B8]">Founder, Pegasus Pixels · Punta del Este</p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
