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

export function Solutions() {
  return (
    <section id="soluciones" className="py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
      <div className="text-center mb-24">
        <h2 className="text-headline-lg md:text-[56px] mb-8 text-on-surface">
          Diseñamos Herramientas Que Reflejan la Calidad de Tu Negocio
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto">
          Fusionamos diseño estructural, tecnología de punta y optimización de operaciones para crear ecosistemas digitales que funcionan con la precisión de un reloj suizo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((sol) => (
          <div
            key={sol.title}
            className="p-10 bg-white border border-outline/30 rounded-xl hover-lift coastal-shadow"
          >
            <span className="material-symbols-outlined text-primary-variant text-4xl mb-8 block">
              {sol.icon}
            </span>
            <h3 className="text-headline-md mb-4 text-on-surface">{sol.title}</h3>
            <p className="text-body-md text-on-surface-variant">{sol.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
