import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Portfolio — Pegasus Pixels",
  description: "Proyectos y casos de estudio de Pegasus Pixels. Soluciones digitales para inmobiliarias, automotoras, hospitality y arquitectura.",
};

const projects = [
  {
    id: "portal-inmobiliario",
    category: "Inmobiliarias",
    title: "Portal de Propiedades Premium",
    description:
      "Plataforma completa de gestión y visualización de propiedades de alta gama para una desarrolladora inmobiliaria en Punta del Este.",
    result: "+340% en leads calificados",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcLHW6IKq2vaE-iyWy5u1Ne0L5oIPNG7xyL0O5R_uM0WnNYvlKHOjcNGr1lGv-nffxWz-zMa2hdqGdYxjmINlFoc1NVGG7hf8F4KUwVdWo_oRsgpeKIIei41PYjHSKnYHM3po5Pn-3OKBO_5dO2R02lrZ5y_jF6rSyS8yrH2lVtgQg45ma1GahFXwDWR-uqiZ4TK-zDen430-3xnZAb45Zvn5zwDnRtsXJ3bZg7av2Spk5W8qDbpKHFaOw1eybM6opb3CgtSTj5gA",
  },
  {
    id: "crm-automotora",
    category: "Automotoras",
    title: "CRM y Gestión de Inventario",
    description:
      "Sistema integral de gestión de ventas, inventario y pipeline para concesionaria de vehículos de lujo.",
    result: "60% reducción tiempo administrativo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqveCxfyowu1jdD-75BIY1nBeu_uOSsnlV5NZpb5q9TFawLgpV6-Wrvm32hYmON7upd282-qAOurf1D7oNfxctO4yp4Q0-YAqzas0aSEyvZeP00H9S7rZW1AltWkVucTYBxJqaMYuRp9SalcKcjRBoM8Ab7W7AQRdcR_YBKwZ3X06mCZ3JeMX-2uBXfkubK4Zix1PDuy7be3C6JFP499yRKEsHn-qPaXzEOLhTTKG17oj8yH-uAXGrDy4gDk1chCysS1UysVt8aFw",
  },
  {
    id: "plataforma-hospitality",
    category: "Hospitality",
    title: "Sistema de Reservas y Fidelización",
    description:
      "Plataforma de reservas online, menú digital y programa de fidelización para grupo gastronómico de alta gama.",
    result: "85% reducción en no-shows",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugEzAO_NOE31D70RnTr2mWedsInaoTM1EurrUw6WdyamToux7WuldzSCJ6Y2FdA9WtdttqSsnWqciSz-GNle4Q0NcH6Ik7F9xXeyx4S_3d7PDNVeUN2u6dMiJ1LbELJyuwqMcFRSAhQQtaXrI7AY7Vl7kz87mEeV5ucNyzq3rDKvcmjEMnnQc2kr66X_T5RKuGOrfjs3Ur_VzLWK2qi9I6zKDU3Ay4mnVKK9E1spCsLcOnkcJNwZ7nPzVI",
  },
  {
    id: "portfolio-arquitectura",
    category: "Arquitectura",
    title: "Portfolio Interactivo y Portal de Clientes",
    description:
      "Presencia digital premium con portfolio de proyectos y herramienta de presentación a clientes para estudio de arquitectura.",
    result: "+220% en consultas de proyectos",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugutlc_ah8VbjCUWZVJA4ta05WFbFt14zHXzKfJQC5lt_SlveP5hzuPOALbf1u2uCI6Gv-hiyEFmb5Te7cIfCJJKtybyFEbzu7F2uoN2eixA5prFVZdH_Q2SAeuHGf9gYVFG_W1MgNehKsl23xyTdtco97NT9i1UjcYz9AnmbTBj5YZKEeRNQXYBLtaVN1XPaNU_aRAOM0fXLSL0W4ufRkI2RiOQiPRZ7mLzHdIPkfz_j4geVd7YGIVqf4",
  },
  {
    id: "dashboard-analytics",
    category: "Sistemas Empresariales",
    title: "Dashboard de Analítica Ejecutiva",
    description:
      "Sistema de visualización de datos en tiempo real para equipo directivo de empresa de servicios profesionales.",
    result: "Decisiones 3x más rápidas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRFtUjgK88EapPn-achgjLn8252wTwVtquqjhomuUcH9hwsrGs3-eHsnNiQn0fbKd708kpAO691hk-aIp--CYgkeFrd0P81xVWZguu_Egdk9P2-MN7IsZjboilmBTTQC9xIfNIJN8qHHXuo8v8xvXLzhonA87GO0Ne8poHDEFTwwrZpE9UkVIuhpNcWA84OGeU-9JL1Isj2p_kYNzVjH3UB9n8Vb3mvVSoXoK5PuPLibMicNDbuaedQzqaAqZZhdlRuMjbdP_7k7s",
  },
  {
    id: "automatizacion-procesos",
    category: "Automatización",
    title: "Automatización de Operaciones",
    description:
      "Eliminación de procesos manuales y automatización del flujo de ventas para consultora con operación en tres países.",
    result: "40h semanales recuperadas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsy1-OHKF3S5wW4MU6mWpr6NLKAjaoGEgLCiWY4yyM-1O8o5Y-yB6Qbvh-m3dme_DfebENVZ1Gk8jqaqusaXJmZYUdclcAVXhUpHib9Vz0Eg_emtvyXcUuHnthqtebMomo-3QW7pdjY4JOFiwqNJoQlhjIvog04JYukrDAVhJiqPwksRQOyzgBOoKHXX_Q8t_nna8QaOxr0jhB0EH5xKA1ApHqzJ40qqoHqgZRdgbzB248aqz0lyGdSWcaNPHpGyuef9xwDhyTsMY",
  },
];

const categories = ["Todos", "Inmobiliarias", "Automotoras", "Hospitality", "Arquitectura", "Sistemas Empresariales", "Automatización"];

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <PageHero
          label="Trabajo Realizado"
          title="Proyectos que Hablan por Sí Mismos"
          description="Cada proyecto en este portfolio representa un desafío real resuelto con precisión técnica y visión estratégica. Resultados medibles, no solo diseños atractivos."
        />

        {/* Category tabs */}
        <section className="px-5 md:px-16 max-w-[1440px] mx-auto pb-4">
          <div className="flex flex-wrap gap-3 border-b border-outline/30 pb-6">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-5 py-2 text-label-sm uppercase rounded-lg cursor-pointer transition-colors ${
                  i === 0
                    ? "bg-on-surface text-surface"
                    : "border border-outline text-on-surface-variant hover:border-on-surface hover:text-on-surface"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-16 px-5 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-outline/30 rounded-xl overflow-hidden hover-lift coastal-shadow"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                  />
                </div>
                {/* Content */}
                <div className="p-8">
                  <span className="text-label-sm text-primary uppercase tracking-widest block mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-headline-md mb-3 text-on-surface">{project.title}</h3>
                  <p className="text-body-md text-on-surface-variant mb-6">{project.description}</p>
                  {/* Result metric */}
                  <div className="flex items-center gap-3 pt-4 border-t border-outline/30">
                    <span className="material-symbols-outlined text-primary text-[18px]">trending_up</span>
                    <span className="text-label-sm text-primary uppercase tracking-wide">{project.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Approach — dark section */}
        <section className="py-32 bg-on-surface text-surface-container px-5 md:px-16">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.3em] block mb-8">
                Nuestro Enfoque
              </span>
              <h2 className="text-headline-lg text-white mb-8">
                Resultados Medibles, No Solo Diseños Atractivos
              </h2>
              <p className="text-body-lg text-surface-container/70 mb-8">
                Cada proyecto que entregamos tiene métricas de éxito definidas desde el día uno. No medimos el éxito por cuánto nos gustó el diseño — lo medimos por el impacto real en el negocio de nuestros clientes.
              </p>
              <Link
                href="/contacto"
                className="flex items-center gap-2 group text-label-sm uppercase tracking-widest border-b border-primary-variant pb-1 hover:text-white transition-colors w-fit"
              >
                Hablar sobre su proyecto{" "}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "80+", label: "Proyectos Completados" },
                { value: "12+", label: "Años de Experiencia" },
                { value: "4", label: "Industrias Clave" },
                { value: "100%", label: "Proyectos a Medida" },
              ].map((stat) => (
                <div key={stat.label} className="border border-outline/20 rounded-xl p-8">
                  <span className="block text-[48px] leading-none font-semibold text-primary-variant mb-3">
                    {stat.value}
                  </span>
                  <span className="text-label-sm uppercase text-surface-container/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 bg-surface-container border-t border-outline/20 px-5 md:px-16">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
              Su Proyecto es el Siguiente
            </span>
            <h2 className="text-headline-lg mb-8 text-on-surface max-w-2xl mx-auto">
              Comencemos a Construir Su Caso de Éxito
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
              Cada empresa en este portfolio comenzó con una conversación. La suya también puede empezar hoy.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-on-surface text-surface px-10 py-4 text-label-sm uppercase hover:bg-primary transition-colors rounded-lg"
            >
              Solicitar Consulta
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
