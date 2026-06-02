import { AnimateIn } from "@/components/ui/AnimateIn";

const breakdown = [
  {
    number: "01",
    title: "Leads that get lost",
    body: "Clients interested are not always properly recorded.",
    bullets: [
      "Missed messages",
      "Untracked contacts",
      "Opportunities never entered into a system",
    ],
  },
  {
    number: "02",
    title: "Inconsistent follow-up",
    body: "Interest exists but is not managed properly.",
    bullets: [
      "Delayed responses",
      "Lack of continuity",
      "Cold leads not reactivated",
    ],
  },
  {
    number: "03",
    title: "Fragmented information",
    body: "No centralized system exists.",
    bullets: [
      "WhatsApp used as informal database",
      "Incomplete Excel tracking",
      "No visibility of pipeline status",
    ],
  },
];

export function PerceptionSection() {
  return (
    <section className="bg-[#F6F7F9] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        {/* ── 1. Header ── */}
        <AnimateIn className="mb-16 max-w-2xl">
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.05] text-[#0F172A] mb-5">
            El problema no es la falta de clientes
          </h2>
          <p className="text-[18px] text-[#0F172A]/60 leading-[1.65]">
            El problema es que los clientes interesados no se convierten en ventas porque el proceso no está estructurado.
          </p>
        </AnimateIn>

        {/* ── 2. Core message block ── */}
        <AnimateIn delay={80} className="mb-16">
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-8 md:p-10 max-w-xl">
            <p className="text-[16px] text-[#0F172A]/70 leading-[1.7] mb-6">
              En la mayoría de los negocios, el interés sí existe.
              <br />
              <span className="font-semibold text-[#0F172A]">Pero el sistema falla después:</span>
            </p>
            <ul className="space-y-3">
              {["Leads que se pierden", "Seguimiento inconsistente", "Información dispersa (WhatsApp / Excel)"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  <span className="text-[15px] text-[#0F172A]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>

        {/* ── 3. Visual placeholder ── */}
        <AnimateIn delay={120} className="mb-16">
          <div className="w-full rounded-[12px] border border-dashed border-[#CBD5E1] bg-white p-10 md:p-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-[11px] font-bold tracking-[0.18em] text-[#94A3B8] uppercase mb-8 text-center">
                Visual Placeholder
              </p>

              {/* Abstract pipeline flow diagram */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
                {[
                  { label: "WhatsApp", color: "bg-green-100 text-green-700 border-green-200" },
                  { label: "Formularios", color: "bg-blue-100 text-blue-700 border-blue-200" },
                  { label: "Llamadas", color: "bg-purple-100 text-purple-700 border-purple-200" },
                ].map((source) => (
                  <div key={source.label} className={`rounded-[8px] border px-5 py-3 text-[13px] font-semibold ${source.color}`}>
                    {source.label}
                  </div>
                ))}

                <div className="hidden md:flex items-center text-slate-300 text-[20px] font-light">→</div>

                <div className="rounded-[8px] border-2 border-dashed border-red-200 bg-red-50 px-6 py-4 text-center">
                  <p className="text-[13px] font-bold text-red-500">Sin sistema</p>
                  <p className="text-[11px] text-red-400 mt-1">Caos de gestión</p>
                </div>

                <div className="hidden md:flex items-center text-slate-300 text-[20px] font-light">→</div>

                <div className="rounded-[8px] border border-slate-200 bg-slate-50 px-6 py-4 text-center">
                  <p className="text-[13px] font-bold text-slate-400">Oportunidad</p>
                  <p className="text-[11px] text-red-400 mt-1">Perdida</p>
                </div>
              </div>

              <p className="text-[11px] text-[#94A3B8] text-center mt-8 tracking-[0.1em] uppercase">
                Concept — Revenue Leakage in Dealer Operations
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* ── 4. Expanded breakdown ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {breakdown.map(({ number, title, body, bullets }, i) => (
            <AnimateIn key={number} delay={i * 80}>
              <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-8 h-full">
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase block mb-4">
                  {number}
                </span>
                <h3 className="text-[17px] font-bold text-[#0F172A] leading-[1.3] mb-3">
                  {title}
                </h3>
                <p className="text-[14px] text-[#0F172A]/55 leading-[1.6] mb-5">
                  {body}
                </p>
                <ul className="space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                      <span className="text-[13px] text-[#0F172A]/60 leading-[1.5]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* ── 5. Final impact statement ── */}
        <AnimateIn delay={160}>
          <div className="border-t border-[#E2E8F0] pt-10">
            <p className="text-[16px] md:text-[18px] font-semibold text-[#0F172A] leading-[1.6] max-w-2xl">
              This is not a marketing problem.{" "}
              <span className="text-[#0F172A]/50 font-normal">
                It is a lack of system control over revenue flow.
              </span>
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
