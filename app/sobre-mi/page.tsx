import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Sobre Mí — Pegasus Pixels",
  description: "Fundador de Pegasus Pixels. Décadas en las industrias automotriz y de hospitalidad en Estados Unidos, ahora en Punta del Este.",
};

const experiencia = [
  {
    period: "Industria automotriz",
    role: "Operaciones y ventas",
    description: "Décadas trabajando en la industria automotriz y de hospitalidad en Estados Unidos — desde adentro del negocio, no desde afuera.",
  },
  {
    period: "Tecnología al servicio del negocio",
    role: "El problema siempre fue el sistema",
    description: "Entendí que los negocios no pierden ventas por falta de clientes — las pierden por falta de sistema. Eso cambió todo.",
  },
  {
    period: "2020 — Presente",
    role: "Pegasus Pixels",
    description: "Construí las herramientas que siempre me faltaron. Hoy trabajo desde Punta del Este implementando Dealio, Oikos y Hermes para negocios en Uruguay y Estados Unidos.",
  },
];

const valores = [
  {
    icon: "precision_manufacturing",
    title: "Precisión Estructural",
    description: "Cada decisión técnica tiene un propósito de negocio. No construyo por construir — construyo para que funcione en el mundo real.",
  },
  {
    icon: "timeline",
    title: "Orientación a Resultados",
    description: "El éxito de un proyecto se mide en métricas de negocio, no en cuánto nos gustó el diseño. Defino métricas de éxito antes de escribir la primera línea de código.",
  },
  {
    icon: "handshake",
    title: "Socio Estratégico",
    description: "No desaparezco al entregar el proyecto. Permanezco como parte del equipo digital de mis clientes, evolucionando la infraestructura junto con el negocio.",
  },
  {
    icon: "school",
    title: "Aprendizaje Continuo",
    description: "El ecosistema tecnológico cambia permanentemente. Me mantengo actualizado para ofrecer siempre las soluciones más efectivas y apropiadas para cada contexto.",
  },
];

export default function SobreMiPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero — 2-col with portrait, mirrors homepage About section style */}
        <section className="pt-24 pb-20 bg-surface">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Pegasus Pixels"
                className="w-full aspect-[4/5] object-cover rounded-2xl coastal-shadow"
                src="/foto-perfil.jpg.jpg"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-label-sm text-primary uppercase tracking-[0.2em] mb-6 block">
                Sobre Mí
              </span>
              <h1 className="text-[52px] md:text-display-lg leading-[1.1] mb-8 text-on-surface">
                Soy un Consultor Digital, No Solo un Desarrollador
              </h1>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Durante más de 12 años he ayudado a empresas de élite a construir la infraestructura digital que merecen. No ofrezco plantillas ni soluciones genéricas — cada proyecto que acompaño nace de un entendimiento profundo del negocio, sus clientes y sus objetivos.
              </p>
              <p className="text-body-lg text-on-surface-variant mb-12 italic border-l-4 border-primary pl-8 py-2 bg-surface-container">
                "La tecnología es el medio, nunca el fin. Mi trabajo es hacer que su negocio crezca — el código es solo la herramienta."
              </p>
              <div className="flex gap-16">
                <div>
                  <span className="block text-[48px] leading-none font-semibold text-primary mb-2">12+</span>
                  <span className="text-label-sm uppercase text-on-surface-variant/60">Años de Experiencia</span>
                </div>
                <div>
                  <span className="block text-[48px] leading-none font-semibold text-primary mb-2">80+</span>
                  <span className="text-label-sm uppercase text-on-surface-variant/60">Proyectos Ejecutados</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Por qué nació Pegasus Pixels */}
        <section className="py-40 bg-surface-container border-y border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
                El Origen
              </span>
              <h2 className="text-headline-lg mb-8 text-on-surface">
                Por Qué Nació Pegasus Pixels
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-body-lg text-on-surface-variant">
                Después de años trabajando en agencias y proyectos freelance, identifiqué un patrón que se repetía: los negocios de alta gama estaban siendo atendidos por proveedores de tecnología que no entendían sus industrias ni sus estándares.
              </p>
              <p className="text-body-lg text-on-surface-variant">
                Una inmobiliaria que vende propiedades de USD 1,000,000 no puede tener un portal que parece de 2010. Una concesionaria de autos premium no puede gestionar su inventario en planillas de Excel. Un restaurant de alta cocina no puede tomar reservas por WhatsApp.
              </p>
              <p className="text-body-lg text-on-surface-variant">
                Creé Pegasus Pixels para cerrar esa brecha: tecnología de nivel empresarial, con el entendimiento estratégico de un consultor de negocios, aplicada específicamente a las industrias donde el estándar de excelencia es no negociable.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Filosofía — valores */}
        <section className="py-40 bg-surface">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <div className="text-center mb-24">
              <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
                Filosofía de Trabajo
              </span>
              <h2 className="text-headline-lg md:text-[56px] mb-8 text-on-surface">
                Los Principios que Guían Cada Proyecto
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((v) => (
                <div key={v.title} className="p-10 bg-white border border-outline/30 rounded-xl hover-lift coastal-shadow">
                  <span className="material-symbols-outlined text-primary text-4xl mb-8 block">{v.icon}</span>
                  <h3 className="text-headline-md mb-4 text-on-surface">{v.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiencia timeline — dark section */}
        <section className="py-32 bg-on-surface text-surface-container">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <span className="text-label-sm text-primary-variant uppercase tracking-[0.3em] block mb-16 text-center">
              Trayectoria
            </span>
            <h2 className="text-headline-lg text-white text-center mb-20 max-w-2xl mx-auto">
              Más de Una Década Construyendo Infraestructura Digital
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
              {experiencia.map((exp, i) => (
                <div key={exp.period} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <span className="text-label-sm text-primary-variant uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <div className="md:col-span-9 border-l border-outline/20 pl-8">
                    <h3 className="text-headline-md text-white mb-3">{exp.role}</h3>
                    <p className="text-body-md text-surface-container/70">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo trabajo con clientes */}
        <section className="py-40 bg-surface-container border-y border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
                  Forma de Trabajo
                </span>
                <h2 className="text-headline-lg mb-8 text-on-surface">
                  Cómo Trabajo con Mis Clientes
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-8">
                  Trabajo con un número limitado de clientes de forma simultánea. Esto no es un lujo — es una condición necesaria para ofrecer el nivel de atención y compromiso que cada proyecto requiere.
                </p>
                <p className="text-body-lg text-on-surface-variant">
                  Cada relación comienza con una sesión de diagnóstico donde entiendo profundamente el negocio, los objetivos y los desafíos. Solo después de eso propongo una solución — nunca al revés.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { n: "01", title: "Diagnóstico sin compromiso", desc: "Primera sesión para entender su negocio, sus objetivos y sus desafíos actuales. Sin costo y sin presión." },
                  { n: "02", title: "Propuesta estratégica", desc: "Basada en el diagnóstico, presento una propuesta técnica y estratégica con alcance, tiempos y resultados esperados." },
                  { n: "03", title: "Desarrollo colaborativo", desc: "Trabajo en ciclos cortos con revisiones frecuentes. Usted ve el progreso en tiempo real y puede ajustar el rumbo cuando sea necesario." },
                  { n: "04", title: "Lanzamiento y seguimiento", desc: "Después del lanzamiento, permanezco como punto de contacto para evolucionar el sistema según crezca su negocio." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-6 p-6 bg-white border border-outline/30 rounded-xl">
                    <span className="text-label-sm text-primary uppercase tracking-widest flex-shrink-0 mt-1">{step.n}</span>
                    <div>
                      <h3 className="text-headline-md mb-2 text-on-surface">{step.title}</h3>
                      <p className="text-body-md text-on-surface-variant">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 bg-surface-container-high">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">
            <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
              ¿Trabajamos Juntos?
            </span>
            <h2 className="text-headline-lg mb-8 text-on-surface max-w-2xl mx-auto">
              El Primer Paso es una Conversación
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
              No hace falta tener todo claro desde el principio. La claridad emerge del diagnóstico. Empecemos por ahí.
            </p>
            <a
              href="https://wa.me/59899000000?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Pegasus%20Pixels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-4 text-[14px] font-semibold uppercase rounded-lg hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.882a.5.5 0 0 0 .606.607l6.098-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.36-.214-3.733.893.924-3.638-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Hablemos por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
