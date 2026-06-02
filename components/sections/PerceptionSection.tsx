"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const summaryCards = [
  { icon: "person_off",   label: "Leads perdidos" },
  { icon: "timer_off",    label: "Seguimiento inconsistente" },
  { icon: "scatter_plot", label: "Información dispersa" },
];

const problemCards = [
  {
    icon: "person_off",
    title: "Leads que se pierden",
    text: "Los clientes interesados no siempre son registrados correctamente.",
  },
  {
    icon: "timer_off",
    title: "Seguimiento inconsistente",
    text: "El interés existe, pero no se gestiona de forma continua.",
  },
  {
    icon: "scatter_plot",
    title: "Información dispersa",
    text: "WhatsApp, Excel y mensajes aislados sin sistema central.",
  },
];

const sources = [
  { label: "WhatsApp",       cls: "bg-green-50  text-green-700  border-green-200"  },
  { label: "Formularios web", cls: "bg-blue-50   text-blue-700   border-blue-200"   },
  { label: "Llamadas",       cls: "bg-violet-50 text-violet-700 border-violet-200" },
];

const lost = [
  "Oportunidad no registrada",
  "Sin seguimiento",
  "Venta no concretada",
];

export function PerceptionSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-[#F6F7F9] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        {/* ── Main header ── */}
        <AnimateIn delay={80} className="mb-14 max-w-2xl">
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.05] text-[#0F172A] mb-5">
            El problema no es falta de clientes
          </h2>
          <p className="text-[18px] text-[#0F172A]/60 leading-[1.65] mb-4">
            El interés entra por WhatsApp, llamadas y formularios — y se pierde sin sistema. Cada lead sin seguimiento es una venta que no existió.
          </p>
          <p className="text-[15px] font-semibold text-[#0F172A]">
            La mayoría de los negocios pierden ventas después del primer contacto, no antes.
          </p>
        </AnimateIn>

        {/* ── 3. Interactive problem cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {problemCards.map(({ icon, title, text }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <div
                className="bg-white border border-[#E2E8F0] rounded-[12px] p-8 h-full cursor-default hover:shadow-lg hover:-translate-y-1 hover:border-[#2563EB]/25 transition-all duration-300"
                style={{
                  opacity: hovered !== null && hovered !== i ? 0.45 : 1,
                  transition: "opacity 200ms ease, transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="material-symbols-outlined text-[#2563EB] text-[26px] block mb-5">
                  {icon}
                </span>
                <h3 className="text-[17px] font-bold text-[#0F172A] leading-[1.3] mb-3">
                  {title}
                </h3>
                <p className="text-[15px] text-[#0F172A]/55 leading-[1.65]">
                  {text}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* ── 4. Flow diagram ── */}
        <AnimateIn delay={120} className="mb-14">
          <div className="rounded-[12px] bg-white border border-[#E2E8F0] p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr_40px_1fr] gap-6 items-center">

              {/* Inputs */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#94A3B8] uppercase mb-4">
                  Cómo entra el interés
                </p>
                <div className="space-y-2">
                  <div className="rounded-[8px] border border-green-200 bg-green-50 px-4 py-3 text-[13px] font-semibold text-green-700 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">chat</span> WhatsApp
                  </div>
                  <div className="rounded-[8px] border border-blue-200 bg-blue-50 px-4 py-3 text-[13px] font-semibold text-blue-700 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">web</span> Formularios web
                  </div>
                  <div className="rounded-[8px] border border-violet-200 bg-violet-50 px-4 py-3 text-[13px] font-semibold text-violet-700 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">call</span> Llamadas
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <span className="text-[#CBD5E1] text-[28px]">→</span>
              </div>

              {/* No system */}
              <div className="rounded-[10px] border border-red-200 bg-red-50 p-6 text-center">
                <span className="material-symbols-outlined text-red-400 text-[32px] block mb-3">
                  scatter_plot
                </span>
                <p className="text-[13px] font-bold text-red-700 mb-1">Sin sistema central</p>
                <p className="text-[11px] text-red-400 leading-[1.6]">
                  WhatsApp, Excel y mensajes sueltos sin proceso estructurado
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <span className="text-[#CBD5E1] text-[28px]">→</span>
              </div>

              {/* Lost outcomes */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#94A3B8] uppercase mb-4">
                  Lo que se pierde
                </p>
                <div className="space-y-2">
                  <div className="rounded-[8px] border border-slate-100 bg-slate-50 px-4 py-3 flex items-center gap-3">
                    <span className="material-symbols-outlined text-red-300 text-[16px]">cancel</span>
                    <span className="text-[13px] text-slate-500">Lead sin registrar</span>
                  </div>
                  <div className="rounded-[8px] border border-slate-100 bg-slate-50 px-4 py-3 flex items-center gap-3">
                    <span className="material-symbols-outlined text-red-300 text-[16px]">cancel</span>
                    <span className="text-[13px] text-slate-500">Sin seguimiento</span>
                  </div>
                  <div className="rounded-[8px] border border-slate-100 bg-slate-50 px-4 py-3 flex items-center gap-3">
                    <span className="material-symbols-outlined text-red-300 text-[16px]">cancel</span>
                    <span className="text-[13px] text-slate-500">Venta no concretada</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimateIn>

        {/* ── 5. Final impact line ── */}
        <AnimateIn delay={140}>
          <div className="border-t border-[#E2E8F0] pt-10">
            <p className="text-[16px] md:text-[18px] font-semibold text-[#0F172A] leading-[1.65] max-w-2xl">
              Esto no es un problema de marketing.{" "}
              <span className="font-normal text-[#0F172A]/45">
                Es una falta de sistema para gestionar lo que ya entra.
              </span>
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
