import { AnimateIn } from "@/components/ui/AnimateIn";

const cards = [
  {
    icon: "dashboard",
    title: "Claridad operativa",
    text: "Más claridad sobre cada oportunidad que entra.",
    bullets: ["sabes qué cliente contactó", "desde dónde llegó", "en qué estado está"],
  },
  {
    icon: "mark_chat_unread",
    title: "Más consultas efectivas",
    text: "El sistema reduce fricción en la entrada.",
    bullets: ["más contactos visibles", "menos pérdidas iniciales", "mejor flujo de entrada"],
  },
  {
    icon: "task_alt",
    title: "Menos oportunidades perdidas",
    text: "Nada queda fuera del sistema.",
    bullets: ["todo lead registrado", "menos olvidos", "menos mensajes sueltos"],
  },
  {
    icon: "trending_up",
    title: "Mejor seguimiento",
    text: "Control real del interés.",
    bullets: ["seguimiento estructurado", "recontacto de interesados", "más conversiones sin más tráfico"],
  },
];

const pipeline = [
  { label: "Nuevo",       color: "bg-blue-500",   cards: 3 },
  { label: "Contactado",  color: "bg-amber-400",  cards: 2 },
  { label: "En proceso",  color: "bg-violet-500", cards: 4 },
  { label: "Cerrado",     color: "bg-emerald-500", cards: 2 },
];

const metrics = [
  { label: "Leads activos",       value: "24" },
  { label: "Tiempo de respuesta", value: "< 2h" },
  { label: "Tasa de cierre",      value: "31%" },
];

export function OutcomesSection() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        {/* ── Title ── */}
        <AnimateIn className="mb-14">
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.05] text-[#0F172A]">
            Qué cambia con el sistema
          </h2>
        </AnimateIn>

        {/* ── 4 result cards — 2×2 grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {cards.map(({ icon, title, text, bullets }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <div className="group bg-[#F6F7F9] border border-[#E2E8F0] rounded-[12px] p-8 h-full hover:bg-white hover:border-[#2563EB]/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                <span className="material-symbols-outlined text-[#2563EB] text-[26px] block mb-5">
                  {icon}
                </span>
                <h3 className="text-[17px] font-bold text-[#0F172A] leading-[1.3] mb-2">
                  {title}
                </h3>
                <p className="text-[14px] text-[#0F172A]/55 leading-[1.6] mb-5">
                  {text}
                </p>
                <ul className="space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0" />
                      <span className="text-[13px] text-[#0F172A]/60 leading-[1.5]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* ── Visual placeholder — CRM dashboard mockup ── */}
        <AnimateIn delay={160}>
          <div className="rounded-[12px] border border-dashed border-[#CBD5E1] bg-[#F6F7F9] p-6 md:p-10">
            <p className="text-[10px] font-bold tracking-[0.18em] text-[#94A3B8] uppercase mb-6 text-center">
              Placeholder visual — Sistema de resultados y control de leads
            </p>

            {/* Mini CRM interface */}
            <div className="bg-white border border-[#E2E8F0] rounded-[10px] overflow-hidden shadow-sm">

              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#E2E8F0] bg-[#F6F7F9]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2563EB] text-[16px]">hub</span>
                  <span className="text-[12px] font-bold text-[#0F172A]">Pipeline de ventas</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#E2E8F0]" />
                  <div className="w-2 h-2 rounded-full bg-[#E2E8F0]" />
                  <div className="w-2 h-2 rounded-full bg-[#E2E8F0]" />
                </div>
              </div>

              {/* Pipeline columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E2E8F0] p-px">
                {pipeline.map(({ label, color, cards: n }) => (
                  <div key={label} className="bg-white p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full ${color}`} />
                      <span className="text-[11px] font-bold text-[#0F172A]/60 uppercase tracking-[0.1em]">{label}</span>
                      <span className="ml-auto text-[10px] font-bold text-[#94A3B8]">{n}</span>
                    </div>
                    <div className="space-y-2">
                      {Array.from({ length: n }).map((_, j) => (
                        <div
                          key={j}
                          className="h-8 rounded-[6px] border border-[#E2E8F0] bg-[#F6F7F9]"
                          style={{ opacity: 1 - j * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 divide-x divide-[#E2E8F0] border-t border-[#E2E8F0]">
                {metrics.map(({ label, value }) => (
                  <div key={label} className="px-5 py-4 text-center">
                    <p className="text-[18px] font-black text-[#0F172A] mb-1">{value}</p>
                    <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-[0.1em]">{label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
