import { SectionLabel } from "@/components/ui/SectionLabel";

const painPoints = [
  {
    number: "01",
    title: "Desconexión",
    description:
      "Tu servicio es de élite, pero tu presencia digital no lo refleja. Los clientes potenciales forman su primera impresión antes de llamarte — y esa impresión ocurre en pantalla.",
  },
  {
    number: "02",
    title: "Fricción",
    description:
      "Procesos manuales, herramientas desconectadas y flujos de trabajo que frenan a tu equipo. Cada minuto perdido en fricción técnica es un minuto que no se invierte en cerrar negocios.",
  },
  {
    number: "03",
    title: "La Solución",
    description:
      "Sistemas digitales diseñados específicamente para tu industria. Herramientas que automatizan lo repetitivo, visualizan lo complejo y presentan tu negocio con la autoridad que merece.",
    isHighlight: true,
  },
];

export function ProblemStatement() {
  return (
    <section id="soluciones" className="bg-ink py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <SectionLabel className="mb-5">El Problema</SectionLabel>
          <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.15] tracking-[-0.01em] text-cream">
            La Primera Impresión Ya No Ocurre Solamente en Tu Negocio
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {painPoints.map((point) => (
            <div
              key={point.number}
              className={`rounded-[4px] p-8 md:p-10 border transition-all duration-300 group ${
                point.isHighlight
                  ? "bg-ink-low border-gold/30 hover:border-gold/60"
                  : "bg-ink-low border-outline/30 hover:border-outline/60"
              }`}
            >
              <span
                className={`font-body text-[11px] font-semibold tracking-[0.18em] uppercase mb-6 block ${
                  point.isHighlight ? "text-gold" : "text-outline-muted"
                }`}
              >
                {point.number}
              </span>
              <h3
                className={`font-display text-2xl font-semibold mb-4 ${
                  point.isHighlight ? "text-gold" : "text-cream"
                }`}
              >
                {point.title}
              </h3>
              <p className="font-body text-base text-outline-muted leading-relaxed">
                {point.description}
              </p>
              {point.isHighlight && (
                <div className="mt-8 w-8 h-px bg-gold" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
