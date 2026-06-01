import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: "12+", label: "Años de Experiencia" },
  { value: "80+", label: "Proyectos Ejecutados" },
  { value: "3", label: "Industrias Clave" },
  { value: "100%", label: "Proyectos a Medida" },
];

export function About() {
  return (
    <section id="sobre-mi" className="bg-ink-low border-y border-outline/20 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <SectionLabel className="mb-5">Sobre Mí</SectionLabel>
            <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.15] tracking-[-0.01em] text-cream mb-8">
              La Optimización es un Arte Estructural
            </h2>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-ink rounded-[4px] border border-outline/30 p-6"
                >
                  <p className="font-display text-3xl font-bold text-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-outline-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Gold quote mark */}
            <div className="font-display text-[80px] leading-none text-gold/30 mb-4 select-none">
              &ldquo;
            </div>

            <blockquote className="font-display text-[clamp(20px,2.5vw,32px)] font-medium text-cream leading-[1.4] mb-10">
              Ayudo a empresas de élite a dejar atrás la fricción técnica y construir sistemas digitales que trabajan tan duro como su equipo. No vendo código — construyo ventajas competitivas.
            </blockquote>

            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-ink-highest border border-outline/40 flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8e9192"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-cream">
                  Fundador, Pegasus Pixels
                </p>
                <p className="font-body text-xs text-outline-muted mt-0.5">
                  Punta del Este, Uruguay · Global Services
                </p>
              </div>
            </div>

            {/* Decorative line */}
            <div className="mt-12 w-full h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
