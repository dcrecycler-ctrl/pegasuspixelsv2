"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    label: "Presencia",
    description:
      "Diseñamos y publicamos tu presencia digital — sitio, inventario y primera impresión — para que el cliente que llega encuentre lo que necesita y confíe.",
    bullets: [
      "Sitio profesional y rápido",
      "Inventario claro y navegable",
      "Primera impresión que genera confianza",
    ],
  },
  {
    number: "02",
    label: "Captura",
    description:
      "Centralizamos todas las consultas — WhatsApp, formularios, llamadas — en un solo sistema. Nada queda suelto, nada se pierde.",
    bullets: [
      "Todas las entradas en un lugar",
      "Cero leads sin registrar",
      "Tu equipo siempre alineado",
    ],
  },
  {
    number: "03",
    label: "Gestión",
    description:
      "Cada consulta tiene un estado, un responsable y un próximo paso. Tu equipo sabe qué hacer con cada oportunidad, sin depender de la memoria de nadie.",
    bullets: [
      "Pipeline visual por etapas",
      "Seguimiento estructurado",
      "Recontacto de interesados",
    ],
  },
  {
    number: "04",
    label: "Conversión",
    description:
      "Con presencia clara y gestión ordenada, más consultas se convierten en visitas y ventas — sin necesitar más tráfico ni más marketing.",
    bullets: [
      "Más cierres con el mismo tráfico",
      "Menos oportunidades perdidas",
      "Control real del proceso de ventas",
    ],
  },
];

export function TrustClarity() {
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, index) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep((prev) => Math.max(prev, index));
          }
        },
        { threshold: 0.35, rootMargin: "0px 0px -15% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const progressPct = activeStep >= 0 ? `${((activeStep + 1) / steps.length) * 100}%` : "0%";

  return (
    <section className="bg-white py-24 md:py-32 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: sticky ── */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase mb-6">
              Cómo trabajamos
            </p>
            <h2 className="text-[30px] md:text-[40px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A] mb-6">
              Las dos partes que definen si tu negocio crece
            </h2>
            <p className="text-[17px] text-[#0F172A]/55 leading-[1.65] mb-6">
              La puerta de entrada tiene que ser impecable para que el cliente llegue. Y cuando llega, necesitás un sistema para no perder ninguna oportunidad.
            </p>
            <p className="text-[15px] font-semibold text-[#0F172A] leading-[1.5]">
              Una sin la otra no alcanza.
            </p>

            {/* Step counter + progress bar (desktop) */}
            <div className="hidden lg:flex items-center gap-4 mt-12">
              <div className="relative h-px w-28 bg-slate-100 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-[#2563EB] transition-all duration-500 ease-out"
                  style={{ width: progressPct }}
                />
              </div>
              <span className="text-[12px] font-medium text-slate-400 tabular-nums">
                {Math.max(0, activeStep + 1)}&nbsp;/&nbsp;{steps.length}
              </span>
            </div>
          </div>

          {/* ── Right: scroll steps ── */}
          <div className="relative">
            {/* Vertical progress line (desktop) */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-slate-100">
              <div
                className="absolute top-0 left-0 w-full bg-[#2563EB] transition-all duration-500 ease-out"
                style={{ height: progressPct }}
              />
            </div>

            <div className="lg:pl-10">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el: HTMLDivElement | null) => { stepRefs.current[i] = el; }}
                  className="py-10 border-b border-slate-50 last:border-0"
                  style={{
                    opacity: i > activeStep ? 0.15 : i === activeStep ? 1 : 0.5,
                    transform: i > activeStep ? "translateY(14px)" : "translateY(0)",
                    transition: "opacity 500ms ease, transform 500ms ease",
                  }}
                >
                  {/* Step label */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-5 h-px bg-slate-200" />
                    <span className="text-[11px] font-bold tracking-[0.12em] text-slate-400 uppercase">
                      {step.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[17px] text-[#0F172A] leading-[1.65] mb-5">
                    {step.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0" />
                        <span className="text-[14px] text-[#0F172A]/60 leading-[1.5]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom result block ── */}
        <div className="mt-20 pt-12 border-t border-slate-100">
          <p className="text-[18px] md:text-[22px] font-semibold text-[#0F172A] leading-[1.5] max-w-2xl">
            Presencia que atrae. Sistema que convierte. Nada que se pierde.
          </p>
        </div>

      </div>
    </section>
  );
}
