import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Soluciones — Pegasus Pixels",
  description: "Servicios digitales a medida para inmobiliarias, automotoras y empresas de hospitalidad. Diseño web, automatización, sistemas empresariales y más.",
};

const services = [
  {
    icon: "web",
    title: "Diseño y Desarrollo Web",
    description:
      "Sitios web y aplicaciones que reflejan la excelencia de su marca. Desde landing pages de alto impacto hasta plataformas complejas, cada proyecto se construye con precisión técnica y visión estratégica.",
  },
  {
    icon: "build",
    title: "Optimización y Reparación",
    description:
      "Diagnosticamos y solucionamos los problemas que frenan el rendimiento de su sitio actual. Velocidad, errores técnicos, conversión y experiencia de usuario.",
  },
  {
    icon: "search",
    title: "SEO y Visibilidad Local",
    description:
      "Posicionamos su negocio donde sus clientes lo buscan. Estrategia de contenido, optimización técnica y presencia local para captar demanda real y calificada.",
  },
  {
    icon: "smart_toy",
    title: "Automatización de Procesos",
    description:
      "Eliminamos tareas repetitivas que consumen el tiempo de su equipo. Flujos de trabajo automatizados, integraciones y sistemas que trabajan mientras usted crece.",
  },
  {
    icon: "architecture",
    title: "Sistemas Empresariales",
    description:
      "Infraestructura digital a medida para el núcleo de su operación. Portales, intranets, gestión de clientes y plataformas que escalan con su negocio.",
  },
  {
    icon: "analytics",
    title: "Dashboards y Analítica",
    description:
      "Visualización de datos en tiempo real que transforma información dispersa en decisiones estratégicas claras. Métricas que importan, presentadas con precisión ejecutiva.",
  },
  {
    icon: "lightbulb",
    title: "Consultoría Digital",
    description:
      "Diagnóstico profundo de su ecosistema digital. Identificamos fricciones, oportunidades y prioridades para trazar la hoja de ruta más efectiva para su empresa.",
  },
  {
    icon: "diversity_3",
    title: "Gestión de Clientes (CRM)",
    description:
      "Sistemas de gestión de relaciones con clientes diseñados para los ciclos de venta de su industria. Seguimiento, automatización y visibilidad completa del pipeline.",
  },
];

const metodologia = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos en profundidad su negocio, su presencia digital actual y sus objetivos. Identificamos los puntos de fricción y las oportunidades de mayor impacto.",
  },
  {
    number: "02",
    title: "Diseño Estratégico",
    description:
      "Desarrollamos la arquitectura de la solución: flujos de usuario, estructura técnica y diseño visual. Todo pensado para sus clientes y su operación específica.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos con estándares de producción desde el primer día. Código limpio, sistemas escalables y revisiones continuas para mantener el rumbo.",
  },
  {
    number: "04",
    title: "Entrega y Seguimiento",
    description:
      "Lanzamos, medimos y ajustamos. El proyecto no termina en la entrega — aseguramos que los resultados esperados se materialicen en el mundo real.",
  },
];

export default function SolucionesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <PageHero
          label="Servicios"
          title="Soluciones Digitales para Empresas de Alto Rendimiento"
          description="Cada solución que construimos está diseñada para reflejar la calidad de su negocio y generar resultados medibles. No vendemos tecnología — construimos ventajas competitivas."
        />

        {/* Services grid */}
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-10 bg-white border border-outline/30 rounded-xl hover-lift coastal-shadow"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-8 block">
                  {service.icon}
                </span>
                <h3 className="text-headline-md mb-4 text-on-surface">{service.title}</h3>
                <p className="text-body-md text-on-surface-variant">{service.description}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Metodología — dark inverted section */}
        <section className="py-32 bg-on-surface text-surface-container">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <span className="text-label-sm text-primary-variant uppercase tracking-[0.3em] block mb-16 text-center">
              Proceso de Trabajo
            </span>
            <h2 className="text-headline-lg text-white text-center mb-20 max-w-2xl mx-auto">
              Un Proceso Estructurado para Resultados Predecibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metodologia.map((step) => (
                <div key={step.number} className="relative">
                  <span className="text-label-sm text-primary-variant uppercase tracking-widest block mb-6">
                    {step.number}
                  </span>
                  <div className="w-8 h-px bg-primary-variant mb-6" />
                  <h3 className="text-headline-md text-white mb-4">{step.title}</h3>
                  <p className="text-body-md text-surface-container/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué nosotros — light section */}
        <section className="py-40 bg-surface">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
                Nuestra Diferencia
              </span>
              <h2 className="text-headline-lg mb-8 text-on-surface">
                No Somos una Agencia. Somos un Socio Estratégico.
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                La mayoría de las agencias entregan un sitio web y desaparecen. Nosotros permanecemos como parte de su equipo digital, entendiendo profundamente su negocio y evolucionando su infraestructura tecnológica junto con él.
              </p>
              <p className="text-body-lg text-on-surface-variant mb-12 italic border-l-4 border-primary pl-8 py-2 bg-surface-container">
                "Cada decisión técnica que tomamos tiene un propósito de negocio detrás. El código es el medio, no el fin."
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-primary text-on-primary px-10 py-4 text-label-sm uppercase hover:bg-primary-hover transition-colors rounded-lg"
              >
                Agendar Consulta
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "12+", label: "Años de Experiencia" },
                { value: "80+", label: "Proyectos Ejecutados" },
                { value: "100%", label: "Proyectos a Medida" },
                { value: "3", label: "Industrias Clave" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface-container border border-outline/30 rounded-xl p-8 coastal-shadow"
                >
                  <span className="block text-[48px] leading-none font-semibold text-primary mb-3">
                    {stat.value}
                  </span>
                  <span className="text-label-sm uppercase text-on-surface-variant/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-32 bg-surface-container-high border-y border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">
            <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
              ¿Listo para comenzar?
            </span>
            <h2 className="text-headline-lg mb-8 text-on-surface max-w-2xl mx-auto">
              Hablemos Sobre Su Próximo Proyecto
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
              Una sesión de consultoría técnica sin compromiso para explorar las posibilidades y definir el camino correcto para su empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contacto"
                className="bg-primary text-on-primary px-10 py-4 text-label-sm uppercase hover:bg-primary-hover transition-colors rounded-lg"
              >
                Solicitar Consulta
              </Link>
              <Link
                href="/portfolio"
                className="border border-primary text-primary px-10 py-4 text-label-sm uppercase hover:bg-surface-container-high transition-colors rounded-lg"
              >
                Ver Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
