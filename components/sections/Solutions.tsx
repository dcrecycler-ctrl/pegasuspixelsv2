const solutions = [
  {
    icon: "architecture",
    title: "Sistemas Empresariales",
    description: "Infraestructura digital robusta para el núcleo de su negocio.",
  },
  {
    icon: "diversity_3",
    title: "Gestión de Clientes",
    description: "CRMs personalizados que anticipan las necesidades de su audiencia.",
  },
  {
    icon: "analytics",
    title: "Dashboards",
    description: "Visualización de datos en tiempo real para decisiones estratégicas.",
  },
  {
    icon: "smart_toy",
    title: "Automatización",
    description: "Elimine tareas repetitivas y libere el potencial de su equipo.",
  },
];

import { AnimateIn } from "@/components/ui/AnimateIn";

export function Solutions() {
  return (
    <section id="soluciones" className="py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
      <AnimateIn className="text-center mb-24">
        <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.1] mb-8 text-on-surface">
          Creamos sistemas digitales que reflejan<br />el valor real de tu negocio
        </h2>
        <p className="text-[17px] font-light leading-[1.65] text-ink-700 max-w-3xl mx-auto">
          Fusionamos diseño estructural, tecnología de punta y optimización de operaciones para crear ecosistemas digitales que funcionan con la precisión de un reloj suizo.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((sol, i) => (
          <AnimateIn key={sol.title} delay={i * 80}>
          <div
            className="group p-10 bg-surface border border-outline rounded-xl hover-lift coastal-shadow hover:bg-ocean-900 hover:border-ocean-900 transition-colors duration-300 h-full"
          >
            <span className="material-symbols-outlined text-primary-variant group-hover:text-sun-600 text-4xl mb-8 block transition-colors duration-300">
              {sol.icon}
            </span>
            <h3 className="text-[18px] font-bold leading-[1.2] mb-4 text-on-surface group-hover:text-white/80 transition-colors duration-300">{sol.title}</h3>
            <p className="text-[15px] font-normal leading-[1.6] text-ink-700 group-hover:text-white/60 transition-colors duration-300">{sol.description}</p>
          </div>
          </AnimateIn>
        ))}
      </div>
      </div>
    </section>
  );
}
