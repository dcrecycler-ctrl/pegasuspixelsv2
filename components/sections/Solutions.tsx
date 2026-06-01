import { SectionLabel } from "@/components/ui/SectionLabel";

const solutions = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="0" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Sistemas Empresariales",
    description:
      "Plataformas a medida que centralizan operaciones, automatizan procesos y escalan con tu negocio. Desde portales de clientes hasta intranets de gestión.",
    tags: ["Portales Web", "Automatización", "Integración"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Gestión de Clientes",
    description:
      "CRM y herramientas de seguimiento diseñadas para los ciclos de venta de tu industria. Visualiza tu pipeline, gestiona contactos y cierra más negocios.",
    tags: ["CRM", "Pipeline", "Seguimiento"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="2 20 22 20" />
      </svg>
    ),
    title: "Dashboards",
    description:
      "Visualización de datos en tiempo real que convierte información dispersa en decisiones claras. Métricas que importan, presentadas con precisión ejecutiva.",
    tags: ["Analítica", "Tiempo Real", "KPIs"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    ),
    title: "Automatización",
    description:
      "Flujos de trabajo que eliminan tareas repetitivas, sincronizan sistemas y liberan a tu equipo para lo que realmente importa: crecer el negocio.",
    tags: ["Workflows", "Integraciones", "Eficiencia"],
  },
];

export function Solutions() {
  return (
    <section className="bg-ink-low border-y border-outline/20 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <SectionLabel className="mb-5">Nuestras Soluciones</SectionLabel>
            <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.15] tracking-[-0.01em] text-cream">
              Diseñamos Herramientas Que Reflejan la Calidad de Tu Negocio
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="group bg-ink rounded-[4px] border border-outline/30 p-8 md:p-10 hover:border-outline/60 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="text-gold mb-6 w-fit">
                {sol.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-cream mb-4">
                {sol.title}
              </h3>

              <p className="font-body text-base text-outline-muted leading-relaxed mb-8 flex-1">
                {sol.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {sol.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-[2px] bg-ink-high text-outline-muted border border-outline/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="mt-8 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
