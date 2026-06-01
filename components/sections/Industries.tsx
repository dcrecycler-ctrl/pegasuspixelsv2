"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const industries = [
  {
    id: "inmobiliarias",
    label: "Inmobiliarias",
    title: "Plataformas de visualización para propiedades premium",
    description:
      "Portales de propiedades que capturan la calidad arquitectónica de cada proyecto. Tours virtuales, fichas interactivas, CRM de leads calificados y dashboards de gestión para brokers y desarrolladores.",
    capabilities: [
      "Portal de propiedades a medida",
      "CRM de clientes y leads",
      "Tours virtuales integrados",
      "Dashboard de gestión para brokers",
      "Módulo de valuaciones",
    ],
  },
  {
    id: "automotoras",
    label: "Automotoras",
    title: "Gestión de inventario premium para concesionarios de élite",
    description:
      "Sistemas de gestión de inventario, configuradores de vehículos, CRM de seguimiento de ventas y plataformas de financiamiento que elevan la experiencia de compra a nivel luxury.",
    capabilities: [
      "Inventario digital con filtros avanzados",
      "Configurador de vehículos",
      "Pipeline de ventas y comisiones",
      "Integración con financiamiento",
      "Portal para clientes VIP",
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    title: "Restaurantes, hoteles y experiencias gastronómicas de alto nivel",
    description:
      "Plataformas de reservas, gestión de experiencias, menús digitales interactivos y sistemas de fidelización para establecimientos que entienden que el servicio comienza antes de que el cliente llegue.",
    capabilities: [
      "Sistema de reservas online",
      "Menú digital interactivo",
      "Programa de fidelización",
      "Gestión de eventos privados",
      "Dashboard de ocupación y revenue",
    ],
  },
  {
    id: "arquitectura",
    label: "Arquitectura",
    title: "Visualización de proyectos para estudios de diseño y construcción",
    description:
      "Portfolios de proyectos inmersivos, herramientas de presentación a clientes, gestión de licitaciones y plataformas de colaboración para estudios de arquitectura e interiorismo de alta gama.",
    capabilities: [
      "Portfolio interactivo de proyectos",
      "Herramienta de presentación a clientes",
      "Gestión de licitaciones",
      "Colaboración de equipos",
      "Seguimiento de obra",
    ],
  },
];

export function Industries() {
  const [active, setActive] = useState(0);
  const industry = industries[active];

  return (
    <section id="industrias" className="bg-ink py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <SectionLabel className="mb-5">Industrias</SectionLabel>
          <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.15] tracking-[-0.01em] text-cream">
            Especialización Profunda en Cada Vertical
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {industries.map((ind, i) => (
              <button
                key={ind.id}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 lg:w-full text-left px-5 py-4 rounded-[4px] border transition-all duration-200 group ${
                  active === i
                    ? "bg-ink-low border-gold/50 text-cream"
                    : "bg-transparent border-outline/20 text-cream-dim hover:border-outline/50 hover:text-cream"
                }`}
              >
                <span
                  className={`font-body text-[11px] font-semibold tracking-[0.18em] uppercase block mb-1 ${
                    active === i ? "text-gold" : "text-outline-muted"
                  }`}
                >
                  0{i + 1}
                </span>
                <span className="font-body text-sm font-medium">{ind.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8 bg-ink-low rounded-[4px] border border-outline/30 p-8 md:p-12">
            <div key={industry.id}>
              <h3 className="font-display text-[clamp(22px,2.5vw,36px)] font-semibold text-cream leading-tight mb-5">
                {industry.title}
              </h3>

              <p className="font-body text-base text-outline-muted leading-relaxed mb-10">
                {industry.description}
              </p>

              <div className="mb-10">
                <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-outline-muted mb-5">
                  Capacidades incluidas
                </p>
                <ul className="flex flex-col gap-3">
                  {industry.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <div className="w-px h-4 bg-gold mt-1 flex-shrink-0" />
                      <span className="font-body text-sm text-cream-dim leading-relaxed">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:text-gold-dim transition-colors duration-200 group"
              >
                Ver Portfolio
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
