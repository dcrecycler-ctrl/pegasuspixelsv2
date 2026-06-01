import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Industrias — Pegasus Pixels",
  description: "Soluciones digitales especializadas para inmobiliarias, automotoras, hospitality, arquitectura, servicios profesionales y pequeñas empresas.",
};

const industries = [
  {
    id: "inmobiliarias",
    label: "Inmobiliarias",
    title: "INMOBILIARIAS",
    description:
      "El mercado inmobiliario de alta gama exige presencias digitales que estén a la altura de cada propiedad. Un portal desactualizado no vende propiedades de lujo.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcLHW6IKq2vaE-iyWy5u1Ne0L5oIPNG7xyL0O5R_uM0WnNYvlKHOjcNGr1lGv-nffxWz-zMa2hdqGdYxjmINlFoc1NVGG7hf8F4KUwVdWo_oRsgpeKIIei41PYjHSKnYHM3po5Pn-3OKBO_5dO2R02lrZ5y_jF6rSyS8yrH2lVtgQg45ma1GahFXwDWR-uqiZ4TK-zDen430-3xnZAb45Zvn5zwDnRtsXJ3bZg7av2Spk5W8qDbpKHFaOw1eybM6opb3CgtSTj5gA",
    imageAlt: "Modern villa",
    challenges: ["Portales web desactualizados que no reflejan el valor de las propiedades", "Gestión manual de leads sin seguimiento sistemático", "Falta de herramientas de visualización premium para compradores remotos"],
    solutions: ["Portal de propiedades a medida con filtros avanzados y galería de alta calidad", "CRM integrado para seguimiento de leads y automatización de comunicaciones", "Tours virtuales y visualizaciones inmersivas para decisiones de compra remotas"],
    benefits: ["Mayor captación de leads calificados desde canales digitales", "Ciclos de venta más cortos con mejor información al cliente", "Imagen de marca coherente con el posicionamiento premium de cada propiedad"],
    imageFirst: false,
  },
  {
    id: "automotoras",
    label: "Automotoras",
    title: "AUTOMOTORAS Y CONCESIONARIAS",
    description:
      "Los compradores de vehículos de alta gama investigan digitalmente antes de visitar el showroom. Su presencia digital debe transmitir la misma excelencia que su flota.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqveCxfyowu1jdD-75BIY1nBeu_uOSsnlV5NZpb5q9TFawLgpV6-Wrvm32hYmON7upd282-qAOurf1D7oNfxctO4yp4Q0-YAqzas0aSEyvZeP00H9S7rZW1AltWkVucTYBxJqaMYuRp9SalcKcjRBoM8Ab7W7AQRdcR_YBKwZ3X06mCZ3JeMX-2uBXfkubK4Zix1PDuy7be3C6JFP499yRKEsHn-qPaXzEOLhTTKG17oj8yH-uAXGrDy4gDk1chCysS1UysVt8aFw",
    imageAlt: "Luxury showroom",
    challenges: ["Inventario digital disperso y difícil de actualizar", "Falta de herramientas de comparación y configuración de vehículos", "Procesos de ventas y comisiones gestionados en planillas sin visibilidad"],
    solutions: ["Plataforma de inventario digital con actualizaciones en tiempo real", "Configurador de vehículos interactivo con opciones y precios", "Dashboard de pipeline de ventas con seguimiento de comisiones"],
    benefits: ["Reducción del tiempo de gestión de inventario en un 60%", "Mayor engagement del cliente antes de la visita al showroom", "Visibilidad completa del pipeline para gerentes y vendedores"],
    imageFirst: true,
  },
  {
    id: "hospitality",
    label: "Hospitality",
    title: "HOSPITALITY",
    description:
      "En restaurantes, hoteles y experiencias gastronómicas de alto nivel, el servicio comienza antes de que el cliente llegue. Su presencia digital es la primera impresión.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugEzAO_NOE31D70RnTr2mWedsInaoTM1EurrUw6WdyamToux7WuldzSCJ6Y2FdA9WtdttqSsnWqciSz-GNle4Q0NcH6Ik7F9xXeyx4S_3d7PDNVeUN2u6dMiJ1LbELJyuwqMcFRSAhQQtaXrI7AY7Vl7kz87mEeV5ucNyzq3rDKvcmjEMnnQc2kr66X_T5RKuGOrfjs3Ur_VzLWK2qi9I6zKDU3Ay4mnVKK9E1spCsLcOnkcJNwZ7nPzVI",
    imageAlt: "Hospitality interior",
    challenges: ["Sistemas de reserva desconectados de la operación del negocio", "Menús digitales estáticos que no reflejan la identidad de marca", "Falta de herramientas de fidelización y gestión de eventos privados"],
    solutions: ["Sistema de reservas online integrado con gestión de mesas y turnos", "Menú digital interactivo con identidad visual de alta estética", "Programa de fidelización y portal para gestión de eventos privados"],
    benefits: ["Reducción de no-shows con confirmaciones y recordatorios automatizados", "Experiencia digital coherente con la propuesta gastronómica premium", "Mayor captación de eventos corporativos y celebraciones privadas"],
    imageFirst: false,
  },
  {
    id: "arquitectura",
    label: "Arquitectura",
    title: "ARQUITECTURA Y CONSTRUCCIÓN",
    description:
      "Los estudios de arquitectura de alto nivel merecen una presencia digital que transmita la misma precisión y visión que sus proyectos más emblemáticos.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugutlc_ah8VbjCUWZVJA4ta05WFbFt14zHXzKfJQC5lt_SlveP5hzuPOALbf1u2uCI6Gv-hiyEFmb5Te7cIfCJJKtybyFEbzu7F2uoN2eixA5prFVZdH_Q2SAeuHGf9gYVFG_W1MgNehKsl23xyTdtco97NT9i1UjcYz9AnmbTBj5YZKEeRNQXYBLtaVN1XPaNU_aRAOM0fXLSL0W4ufRkI2RiOQiPRZ7mLzHdIPkfz_j4geVd7YGIVqf4",
    imageAlt: "Architectural detail",
    challenges: ["Portfolio digital que no refleja la calidad y escala de los proyectos", "Procesos de presentación a clientes manuales y poco profesionales", "Falta de herramientas de seguimiento de obra y comunicación con equipos"],
    solutions: ["Portfolio interactivo de proyectos con visualizaciones de alta resolución", "Herramienta de presentación a clientes con fichas técnicas y renders", "Sistema de gestión de proyectos con seguimiento de hitos y comunicación"],
    benefits: ["Mayor captación de proyectos de alto valor a través del portfolio digital", "Presentaciones más efectivas que acortan los ciclos de aprobación", "Mejor coordinación entre arquitectos, constructores y clientes"],
    imageFirst: true,
  },
  {
    id: "servicios-profesionales",
    label: "Servicios Profesionales",
    title: "SERVICIOS PROFESIONALES",
    description:
      "Consultoras, estudios jurídicos, contables y firmas de servicios especializados que necesitan transmitir autoridad, confianza y rigor a través de su presencia digital.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHFTU2l2FUw6eqLukriNe5NQMuCvs7EGyFLfNSzFDlQGJ7iUAMVHQKbRGsc9nUqO1-c8ePPZab-9YjTsy4mNrKa62ySh8q-Ad1qQwW0qlioh3MpIcO-NAe3de948k8aXkF4JOrh5imN8utLZ-hElVjwU4QKkTB2Q6Umz1WFDMlryWAoOaKeQ4obX0vVw4drhWm3bVHUldpXzKEifurAO1sgsqkPxHv7i9PLDEWvQ7T98RiRmAnMJCbdT1f4bG_g4j95DCtU0QaRdc",
    imageAlt: "Professional consultant",
    challenges: ["Presencia digital genérica que no diferencia la firma en el mercado", "Procesos de onboarding de clientes lentos y con mucha fricción manual", "Dificultad para comunicar la profundidad y el rigor de su expertise"],
    solutions: ["Sitio web de posicionamiento que establece autoridad y credibilidad", "Portal de clientes para documentos, comunicaciones y seguimiento de casos", "Sistema de captación y calificación de leads automatizado"],
    benefits: ["Posicionamiento claro como referente en su área de especialización", "Reducción del tiempo administrativo en el onboarding de nuevos clientes", "Mayor captación de clientes del segmento correcto a través del posicionamiento digital"],
    imageFirst: false,
  },
  {
    id: "pequenas-empresas",
    label: "Pequeñas Empresas",
    title: "PEQUEÑAS EMPRESAS",
    description:
      "Las pequeñas empresas con ambición de crecer merecen herramientas digitales de nivel profesional. La tecnología no debe ser un privilegio exclusivo de las grandes corporaciones.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRFtUjgK88EapPn-achgjLn8252wTwVtquqjhomuUcH9hwsrGs3-eHsnNiQn0fbKd708kpAO691hk-aIp--CYgkeFrd0P81xVWZguu_Egdk9P2-MN7IsZjboilmBTTQC9xIfNIJN8qHHXuo8v8xvXLzhonA87GO0Ne8poHDEFTwwrZpE9UkVIuhpNcWA84OGeU-9JL1Isj2p_kYNzVjH3UB9n8Vb3mvVSoXoK5PuPLibMicNDbuaedQzqaAqZZhdlRuMjbdP_7k7s",
    imageAlt: "Small business digital",
    challenges: ["Presencia digital inexistente o desactualizada que frena el crecimiento", "Procesos manuales que limitan la capacidad operativa del equipo", "Dificultad para competir con empresas más grandes en el entorno digital"],
    solutions: ["Sitio web profesional optimizado para SEO local y conversión", "Automatización de procesos clave: presupuestos, seguimiento, facturación", "Sistema de gestión de clientes accesible y fácil de usar para equipos pequeños"],
    benefits: ["Visibilidad digital que compite en igualdad de condiciones con empresas mayores", "Ahorro de horas semanales en tareas administrativas automatizadas", "Crecimiento sostenido con una infraestructura digital que escala con el negocio"],
    imageFirst: true,
  },
];

export default function IndustriasPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <PageHero
          label="Sectores de Especialidad"
          title="Soluciones Diseñadas para Su Industria"
          description="No trabajamos con soluciones genéricas. Cada industria tiene sus propios ciclos de venta, desafíos operativos y expectativas de cliente. Nuestras soluciones nacen de ese entendimiento profundo."
        />

        {/* Industry rows — dark section */}
        <section className="py-16 bg-on-surface text-surface-container px-5 md:px-16">
          <div className="max-w-[1440px] mx-auto">
            <div className="space-y-40">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  id={industry.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
                >
                  {/* Text */}
                  <div className={industry.imageFirst ? "order-2" : "order-2 lg:order-1"}>
                    <h2 className="text-headline-lg mb-6 uppercase text-white">
                      {industry.title}
                    </h2>
                    <p className="text-body-lg text-surface-container/70 mb-10 max-w-lg">
                      {industry.description}
                    </p>

                    <div className="space-y-8 mb-10">
                      <div>
                        <span className="text-label-sm text-primary-variant uppercase tracking-widest block mb-4">
                          Desafíos Comunes
                        </span>
                        <ul className="space-y-3">
                          {industry.challenges.map((c) => (
                            <li key={c} className="flex items-start gap-3">
                              <span className="material-symbols-outlined text-primary-variant text-[18px] mt-0.5 flex-shrink-0">
                                remove
                              </span>
                              <span className="text-body-md text-surface-container/70">{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-label-sm text-primary-variant uppercase tracking-widest block mb-4">
                          Soluciones Aplicadas
                        </span>
                        <ul className="space-y-3">
                          {industry.solutions.map((s) => (
                            <li key={s} className="flex items-start gap-3">
                              <span className="material-symbols-outlined text-primary-variant text-[18px] mt-0.5 flex-shrink-0">
                                check_small
                              </span>
                              <span className="text-body-md text-surface-container/70">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-label-sm text-primary-variant uppercase tracking-widest block mb-4">
                          Beneficios Obtenidos
                        </span>
                        <ul className="space-y-3">
                          {industry.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-3">
                              <span className="material-symbols-outlined text-primary-variant text-[18px] mt-0.5 flex-shrink-0">
                                trending_up
                              </span>
                              <span className="text-body-md text-white">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href="/contacto"
                      className="flex items-center gap-2 group text-label-sm uppercase tracking-widest border-b border-primary-variant pb-1 hover:text-white transition-colors w-fit"
                    >
                      Solicitar Consulta{" "}
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={`${industry.imageFirst ? "order-1" : "order-1 lg:order-2"} sticky top-24`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={industry.imageAlt}
                      className="w-full aspect-video object-cover rounded-2xl"
                      src={industry.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 bg-surface-container border-t border-outline/20 px-5 md:px-16">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
              Trabajemos Juntos
            </span>
            <h2 className="text-headline-lg mb-8 text-on-surface max-w-2xl mx-auto">
              ¿Su Industria No Está Listada?
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
              Trabajamos con cualquier negocio que valore la calidad y entienda el impacto estratégico de la tecnología. Si su empresa tiene estándares altos, tenemos una solución.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-primary text-on-primary px-10 py-4 text-label-sm uppercase hover:bg-primary-hover transition-colors rounded-lg"
            >
              Agendar Consulta
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
