import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Oikos — Plataforma para inmobiliarias | Pegasus Pixels",
  description:
    "Oikos no es una web. Es un sistema de gestión de clientes inmobiliarios. Centraliza leads, controla tu pipeline y cierra más operaciones.",
};

const modules = [
  {
    icon: "language",
    title: "Presencia digital",
    description:
      "Presencia digital estructurada para convertir visitantes en leads calificados. El primer eslabón del sistema.",
  },
  {
    icon: "person_search",
    title: "Gestión de leads",
    description:
      "Todos los leads en un único lugar. Sin WhatsApp perdidos, sin hojas de cálculo, sin información duplicada.",
  },
  {
    icon: "account_tree",
    title: "Seguimiento del pipeline",
    description:
      "Visibilidad completa de cada etapa del ciclo de venta. Sabe exactamente en qué punto está cada oportunidad.",
  },
  {
    icon: "analytics",
    title: "Business Dashboard",
    description:
      "Métricas de desempeño consolidadas. Decisiones basadas en datos reales, no en suposiciones.",
  },
];

const beforeItems = [
  "Leads dispersos entre WhatsApp, email y llamadas",
  "Seguimiento manual sin visibilidad de etapas",
  "No sabe cuántos clientes perdió esta semana",
  "Cada asesor trabaja con su propio sistema",
];

const afterItems = [
  "Sistema único que centraliza todos los canales",
  "Pipeline estructurado con etapas claras",
  "Métricas de conversión en tiempo real",
  "Proceso estandarizado para todo el equipo",
];

const comparisonRows = [
  ["Gestión de leads", false, true],
  ["Pipeline de ventas", false, true],
  ["Dashboard de métricas", false, true],
  ["Seguimiento automático", false, true],
  ["Presencia digital", true, true],
  ["Visibilidad de conversión", false, true],
] as [string, boolean, boolean][];

export default function OikosPage() {
  return (
    <div className="bg-surface-container min-h-screen">
      <Nav />

      <main>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="pt-24 pb-32 relative overflow-hidden bg-surface-container">
          {/* ambient gradients */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-ocean-600/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-sun-400/15 blur-[80px] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,255,255,0.88) 0%, transparent 100%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto px-5 md:px-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left: copy */}
              <div className="lg:col-span-6">
                <span className="anim-fade-up delay-0 text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                  Pegasus Pixels · Vertical Inmobiliario
                </span>
                <h1 className="anim-fade-up delay-100 text-[48px] md:text-[60px] leading-[1.08] tracking-[-0.03em] font-semibold mb-8 text-ocean-900">
                  Oikos no es una web.<br />
                  Es un sistema de gestión de clientes inmobiliarios.
                </h1>
                <p className="anim-fade-up delay-200 text-body-lg text-ink-800 max-w-xl mb-12">
                  Integra tu presencia digital con la gestión de leads, el pipeline de ventas y el flujo de clientes desde el primer contacto hasta el cierre de la operación.
                </p>
                <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-5">
                  <a
                  href="https://wa.me/59899000000?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Oikos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-4 text-label-sm uppercase hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all duration-200 rounded-lg font-semibold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.882a.5.5 0 0 0 .606.607l6.098-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.36-.214-3.733.893.924-3.638-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  Hablemos por WhatsApp
                </a>
                  <a
                    href="#sistema"
                    className="border border-primary-variant text-primary-variant px-10 py-4 text-label-sm uppercase hover:bg-sky-200 transition-colors rounded-lg text-center font-semibold"
                  >
                    Ver sistema
                  </a>
                </div>
              </div>

              {/* Right: imagery grid */}
              <div className="anim-fade-right delay-200 lg:col-span-6 mt-16 lg:mt-0">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Agente inmobiliario gestionando operaciones"
                      className="hero-photo w-full h-80 object-cover rounded-xl coastal-shadow"
                      src="/agente-inmobiliario.png"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Plataforma de gestión de clientes"
                      className="hero-photo w-full h-64 object-cover rounded-xl coastal-shadow"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsy1-OHKF3S5wW4MU6mWpr6NLKAjaoGEgLCiWY4yyM-1O8o5Y-yB6Qbvh-m3dme_DfebENVZ1Gk8jqaqusaXJmZYUdclcAVXhUpHib9Vz0Eg_emtvyXcUuHnthqtebMomo-3QW7pdjY4JOFiwqNJoQlhjIvog04JYukrDAVhJiqPwksRQOyzgBOoKHXX_Q8t_nna8QaOxr0jhB0EH5xKA1ApHqzJ40qqoHqgZRdgbzB248aqz0lyGdSWcaNPHpGyuef9xwDhyTsMY"
                    />
                  </div>
                  <div className="space-y-6 pt-12">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="CRM inmobiliario en pantalla"
                      className="hero-photo w-full h-96 object-cover rounded-xl coastal-shadow"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8whSeNDYqwpFmhGq8iXq8smVkDKwtA6lWIJ6vgg1imicVGYCfv5w67GjkSh5YAyFE_TdZk-fQAEZg9lem4XA3ajntTz09y781vLbWhniz1rHBR0rYT2Y0UGP8kkiIfO7ssKFtRzR0DoPno3DugHxL1ZUj0IhFFj-FP23nU3p7Y2_W7MPRfCnNFUGug8_zY0y_6626gQnsRIA3bns-EWuvZzkCaa4iC2kyPgZQPl2QIFREm1Dwk3gLizdpxdIqflo5-l9XHH56QRY"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PROBLEM ──────────────────────────────────────────────── */}
        <section className="py-32 bg-white border-y border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <AnimateIn>
                <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                  El problema real
                </span>
                <h2 className="text-headline-lg mb-8 max-w-md text-on-surface">
                  La pérdida ocurre después de que llega el lead
                </h2>
              </AnimateIn>
              <AnimateIn delay={100} className="space-y-10">
                <p className="text-body-lg text-on-surface-variant">
                  Las inmobiliarias ya generan consultas. El problema es lo que pasa después: leads sin seguimiento, comunicación fragmentada entre WhatsApp y llamadas, y ninguna visibilidad del proceso de venta.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <span className="text-label-sm text-primary-variant uppercase">Desorganización</span>
                    <p className="text-body-md text-on-surface-variant">
                      Los leads llegan por múltiples canales sin un sistema que los centralice.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-label-sm text-primary-variant uppercase">Seguimiento</span>
                    <p className="text-body-md text-on-surface-variant">
                      Sin proceso estructurado, los contactos se enfrían y las oportunidades se pierden.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-label-sm text-primary-variant uppercase">Fragmentación</span>
                    <p className="text-body-md text-on-surface-variant">
                      WhatsApp, email y llamadas funcionan como silos separados sin historial unificado.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-label-sm text-primary-variant uppercase">Visibilidad</span>
                    <p className="text-body-md text-on-surface-variant">
                      No existe forma de medir cuántos clientes se pierden en cada etapa del proceso.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── SHIFT ────────────────────────────────────────────────── */}
        <section className="py-40 bg-surface-container">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">
            <AnimateIn className="max-w-4xl mx-auto">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-8">
                Cambio de enfoque
              </span>
              <p className="text-[40px] md:text-[52px] leading-[1.15] tracking-[-0.03em] font-semibold text-ocean-900">
                El problema no es la captación.{" "}
                <span className="text-ink-600">Es la gestión del sistema.</span>
              </p>
              <p className="text-body-lg text-ink-700 max-w-2xl mx-auto mt-10">
                Una inmobiliaria puede tener excelente visibilidad y seguir perdiendo operaciones. El cuello de botella está en la gestión de lo que ya llegó.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── WHAT OIKOS IS ─────────────────────────────────────────── */}
        <section id="sistema" className="py-32 bg-white border-y border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateIn>
                <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                  Qué es Oikos
                </span>
                <h2 className="text-headline-lg mb-8 text-on-surface">
                  Un sistema que conecta presencia digital con operación de ventas
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-10">
                  Oikos integra la capa de captación digital con la gestión de leads, el seguimiento de pipeline y el dashboard de desempeño en un único ecosistema operativo.
                </p>
                <p className="text-body-md text-on-surface-variant">
                  No es una herramienta aislada. Es la extensión operativa de tu presencia digital — diseñado como capa de inteligencia de negocio sobre los servicios de Pegasus Pixels.
                </p>
              </AnimateIn>
              <AnimateIn delay={100}>
                <div className="space-y-5">
                  {[
                    {
                      label: "Ecosistema unificado",
                      body: "Front-end, CRM y dashboard en un único sistema coherente.",
                    },
                    {
                      label: "Vertical inmobiliario",
                      body: "Diseñado específicamente para el ciclo de venta y alquiler inmobiliario.",
                    },
                    {
                      label: "Operación estructurada",
                      body: "Procesos estandarizados que funcionan sin depender de personas clave.",
                    },
                    {
                      label: "Datos accionables",
                      body: "Métricas que permiten tomar decisiones de negocio en tiempo real.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex gap-5 p-6 bg-surface border border-outline rounded-xl coastal-shadow"
                    >
                      <div className="mt-1 w-2 h-2 rounded-full bg-sun-600 shrink-0" />
                      <div>
                        <span className="text-label-sm text-primary-variant uppercase block mb-2">
                          {item.label}
                        </span>
                        <p className="text-body-md text-on-surface-variant">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── MODULES ──────────────────────────────────────────────── */}
        <section className="py-40 bg-surface-container">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <AnimateIn className="text-center mb-24">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                Módulos del sistema
              </span>
              <h2 className="text-headline-lg md:text-[56px] mb-8 text-on-surface">
                Cuatro capas. Un sistema integrado.
              </h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Cada módulo funciona de forma independiente y se potencia con los demás, creando un flujo operativo completo de captación a cierre.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modules.map((mod, i) => (
                <AnimateIn key={mod.title} delay={i * 80}>
                  <div className="p-10 bg-surface border border-outline rounded-xl hover-lift coastal-shadow hover:bg-sand-100 transition-colors duration-300 h-full">
                    <span className="material-symbols-outlined text-primary-variant text-4xl mb-8 block">
                      {mod.icon}
                    </span>
                    <h3 className="text-headline-md mb-4 text-on-surface">{mod.title}</h3>
                    <p className="text-body-md text-on-surface-variant">{mod.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUE ────────────────────────────────────────────────── */}
        <section className="py-32 bg-white border-y border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <AnimateIn className="max-w-3xl mx-auto text-center">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-8">
                La propuesta
              </span>
              <p className="text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.03em] font-semibold text-ocean-900 mb-10">
                Oikos no aumenta tus leads. Te ayuda a no perder los que ya tienes.
              </p>
              <p className="text-body-lg text-on-surface-variant">
                La mayoría de las inmobiliarias ya tienen suficiente demanda. Lo que no tienen es el sistema para convertirla de forma consistente y medible.
              </p>
            </AnimateIn>

            <AnimateIn delay={100} className="mt-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { val: "—", label: "No promesas de leads", body: "Nos enfocamos en lo que ya entra." },
                  { val: "—", label: "No más herramientas sueltas", body: "Un sistema, no diez aplicaciones." },
                  { val: "—", label: "No intuición", body: "Métricas reales para decisiones reales." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-10 bg-surface border border-outline rounded-xl coastal-shadow text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-sun-300 mx-auto mb-6 flex items-center justify-center">
                      <div className="w-4 h-0.5 bg-ocean-900" />
                    </div>
                    <h4 className="text-headline-md mb-3 text-on-surface">{item.label}</h4>
                    <p className="text-body-md text-on-surface-variant">{item.body}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── TRANSFORMATION — Before / After ──────────────────────── */}
        <section className="py-40 bg-surface-container">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <AnimateIn className="text-center mb-20">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                Transformación operativa
              </span>
              <h2 className="text-headline-lg text-on-surface">
                Lo que cambia cuando el sistema funciona
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Before */}
              <AnimateIn>
                <div className="p-10 bg-surface border border-outline rounded-xl coastal-shadow h-full">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-3 h-3 rounded-full bg-sand-300" />
                    <span className="text-label-sm text-ink-600 uppercase tracking-widest">Sin sistema</span>
                  </div>
                  <ul className="space-y-6">
                    {beforeItems.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-sand-300 text-[20px] mt-0.5 shrink-0">
                          remove
                        </span>
                        <p className="text-body-md text-on-surface-variant">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              {/* After */}
              <AnimateIn delay={100}>
                <div className="p-10 bg-ocean-900 rounded-xl coastal-shadow h-full">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-3 h-3 rounded-full bg-sun-600" />
                    <span className="text-label-sm text-sun-400 uppercase tracking-widest">Con Oikos</span>
                  </div>
                  <ul className="space-y-6">
                    {afterItems.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-sun-600 text-[20px] mt-0.5 shrink-0">
                          check
                        </span>
                        <p className="text-body-md text-sky-200">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── DIFFERENTIATION ───────────────────────────────────────── */}
        <section className="py-32 bg-white border-y border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <AnimateIn className="text-center mb-20">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                ¿Por qué Oikos?
              </span>
              <h2 className="text-headline-lg text-on-surface">
                Sitio web tradicional vs sistema Oikos
              </h2>
            </AnimateIn>

            <AnimateIn delay={80}>
              <div className="overflow-hidden border border-outline rounded-xl coastal-shadow">
                {/* Header */}
                <div className="grid grid-cols-3 bg-surface-container border-b border-outline px-8 py-5">
                  <span className="text-label-sm text-ink-600 uppercase tracking-wider">Función</span>
                  <span className="text-label-sm text-ink-600 uppercase tracking-wider text-center">
                    Sitio web tradicional
                  </span>
                  <span className="text-label-sm text-primary-variant uppercase tracking-wider text-center">
                    Sistema Oikos
                  </span>
                </div>
                {comparisonRows.map(([label, hasTraditional, hasOikos]) => (
                  <div
                    key={label}
                    className="grid grid-cols-3 bg-surface border-b border-outline last:border-b-0 px-8 py-5 hover:bg-sand-100 transition-colors"
                  >
                    <span className="text-body-md text-on-surface">{label}</span>
                    <div className="flex justify-center">
                      {hasTraditional ? (
                        <span className="material-symbols-outlined text-ocean-600 text-[20px]">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-sand-300 text-[20px]">cancel</span>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {hasOikos ? (
                        <span className="material-symbols-outlined text-sun-600 text-[20px]">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-sand-300 text-[20px]">cancel</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-40 bg-ocean-900">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">
            <AnimateIn className="max-w-3xl mx-auto">
              <span className="text-label-sm text-sun-400 uppercase tracking-[0.2em] block mb-8">
                Diagnóstico sin costo
              </span>
              <h2 className="text-[40px] md:text-[56px] leading-[1.15] tracking-[-0.03em] font-semibold text-sky-100 mb-8">
                ¿Cuántos clientes estás perdiendo sin darte cuenta?
              </h2>
              <p className="text-body-lg text-sky-300 mb-14 max-w-xl mx-auto">
                En 30 minutos auditamos tu flujo actual y te mostramos exactamente dónde se están perdiendo las oportunidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="https://wa.me/59899000000?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Oikos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-4 text-label-sm uppercase hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all duration-200 rounded-lg font-semibold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.882a.5.5 0 0 0 .606.607l6.098-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.36-.214-3.733.893.924-3.638-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  Hablemos por WhatsApp
                </a>
                <a
                  href="#sistema"
                  className="border border-sky-400/40 text-sky-200 px-10 py-4 text-label-sm uppercase hover:border-sky-300/60 hover:text-sky-100 transition-colors rounded-lg font-semibold"
                >
                  Ver el sistema
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
