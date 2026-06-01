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
        <h2 className="text-headline-lg md:text-[56px] mb-8 text-on-surface">
          Creamos sistemas digitales que reflejan<br />el valor real de tu negocio
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto">
          Fusionamos diseño estructural, tecnología de punta y optimización de operaciones para crear ecosistemas digitales que funcionan con la precisión de un reloj suizo.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((sol, i) => (
          <AnimateIn key={sol.title} delay={i * 80}>
          <div
            className="p-10 bg-surface border border-outline rounded-xl hover-lift coastal-shadow hover:bg-sand-100 transition-colors duration-300 h-full"
          >
            <span className="material-symbols-outlined text-primary-variant text-4xl mb-8 block">
              {sol.icon}
            </span>
            <h3 className="text-headline-md mb-4 text-on-surface">{sol.title}</h3>
            <p className="text-body-md text-on-surface-variant">{sol.description}</p>
          </div>
          </AnimateIn>
        ))}
      </div>
      </div>
    </section>
  );
}
