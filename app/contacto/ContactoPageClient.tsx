"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", phone: "", businessName: "", message: "" };
type SubmitStatus = "idle" | "loading" | "success" | "error";

const faqs = [
  {
    q: "¿Cuánto tiempo toma un proyecto típico?",
    a: "Depende del alcance. Un sitio web de alta calidad toma entre 4 y 8 semanas. Un sistema empresarial completo puede tomar entre 2 y 6 meses. Siempre definimos tiempos claros en la propuesta inicial.",
  },
  {
    q: "¿Trabajan con empresas de cualquier tamaño?",
    a: "Trabajamos con empresas medianas y grandes que valoran la calidad por encima del precio mínimo. El tamaño no es la restricción — el estándar de excelencia sí lo es.",
  },
  {
    q: "¿Qué incluye la consultoría inicial?",
    a: "Una sesión de diagnóstico sin costo de 45 a 60 minutos donde analizamos su situación actual, objetivos y desafíos. Al final de la sesión tiene claridad sobre los pasos a seguir, independientemente de si trabajamos juntos o no.",
  },
  {
    q: "¿Ofrecen soporte después del lanzamiento?",
    a: "Sí. No desaparecemos al entregar el proyecto. Ofrecemos planes de mantenimiento y evolución continua para clientes que quieren un socio de largo plazo.",
  },
  {
    q: "¿Trabajan de forma remota?",
    a: "Sí, con clientes en Uruguay y en el exterior. Nuestra base está en Punta del Este, Uruguay, pero la naturaleza del trabajo digital permite colaborar efectivamente sin importar la ubicación.",
  },
];

const proceso = [
  { n: "01", title: "Recibimos su consulta", desc: "Revisamos su mensaje y lo analizamos antes de responder. No respondemos con plantillas genéricas." },
  { n: "02", title: "Contacto en 24 horas", desc: "Le respondemos dentro de las 24 horas hábiles para coordinar una sesión de diagnóstico sin compromiso." },
  { n: "03", title: "Sesión de diagnóstico", desc: "45 a 60 minutos donde entendemos su negocio en profundidad y identificamos oportunidades y desafíos." },
  { n: "04", title: "Propuesta estratégica", desc: "Presentamos una propuesta técnica y estratégica personalizada para su situación específica." },
];

export function ContactoPageClient() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const setField = (field: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-20 px-5 md:px-16 max-w-[1440px] mx-auto">
        <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">Contacto</span>
        <h1 className="text-[52px] md:text-display-lg leading-[1.1] mb-8 text-on-surface max-w-3xl">
          Comencemos una Conversación
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          ¿Listo para elevar la infraestructura digital de su empresa? Cuéntenos sobre su negocio y agendaremos una sesión de diagnóstico sin compromiso.
        </p>
      </section>

      {/* Contact form + info */}
      <section className="pb-20 px-5 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Left: Info */}
          <div>
            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary bg-surface-container p-4 rounded-full border border-outline/30">
                  mail
                </span>
                <div>
                  <span className="block text-label-sm text-primary uppercase mb-1">Email</span>
                  <a href="mailto:estudio@pegasuspixels.com" className="text-body-md hover:text-primary transition-colors">
                    estudio@pegasuspixels.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary bg-surface-container p-4 rounded-full border border-outline/30">
                  location_on
                </span>
                <div>
                  <span className="block text-label-sm text-primary uppercase mb-1">Ubicación</span>
                  <span className="text-body-md">Punta del Este, Uruguay | Global Services</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary bg-surface-container p-4 rounded-full border border-outline/30">
                  schedule
                </span>
                <div>
                  <span className="block text-label-sm text-primary uppercase mb-1">Tiempo de Respuesta</span>
                  <span className="text-body-md">Menos de 24 horas hábiles</span>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div>
              <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">Próximos Pasos</span>
              <div className="space-y-4">
                {proceso.map((step) => (
                  <div key={step.n} className="flex gap-4 p-5 bg-surface-container border border-outline/30 rounded-xl">
                    <span className="text-label-sm text-primary uppercase tracking-widest flex-shrink-0 mt-0.5">{step.n}</span>
                    <div>
                      <p className="text-body-md font-medium text-on-surface mb-1">{step.title}</p>
                      <p className="text-body-md text-on-surface-variant">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface-container p-12 rounded-2xl border border-outline/40 coastal-shadow">
            {status === "success" ? (
              <div className="flex flex-col items-start justify-center h-full py-8">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">check_circle</span>
                <h3 className="text-headline-md text-on-surface mb-4">Consulta Recibida</h3>
                <p className="text-body-md text-on-surface-variant mb-8">
                  Gracias por su mensaje. Lo revisaremos con atención y le responderemos dentro de las próximas 24 horas para coordinar la sesión de diagnóstico.
                </p>
                <button onClick={() => setStatus("idle")} className="text-label-sm uppercase text-primary hover:text-primary-variant transition-colors">
                  Enviar otro mensaje →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="border-b border-outline pb-3">
                    <label className="text-label-sm uppercase text-on-surface-variant block mb-2">Nombre</label>
                    <input type="text" value={form.name} onChange={(e) => setField("name")(e.target.value)} required placeholder="Su nombre" className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 text-body-md" />
                  </div>
                  <div className="border-b border-outline pb-3">
                    <label className="text-label-sm uppercase text-on-surface-variant block mb-2">Empresa</label>
                    <input type="text" value={form.businessName} onChange={(e) => setField("businessName")(e.target.value)} required placeholder="Nombre de su empresa" className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 text-body-md" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="border-b border-outline pb-3">
                    <label className="text-label-sm uppercase text-on-surface-variant block mb-2">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setField("email")(e.target.value)} required placeholder="email@empresa.com" className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 text-body-md" />
                  </div>
                  <div className="border-b border-outline pb-3">
                    <label className="text-label-sm uppercase text-on-surface-variant block mb-2">Teléfono</label>
                    <input type="tel" value={form.phone} onChange={(e) => setField("phone")(e.target.value)} placeholder="+598..." className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 text-body-md" />
                  </div>
                </div>
                <div className="border-b border-outline pb-3">
                  <label className="text-label-sm uppercase text-on-surface-variant block mb-2">Mensaje</label>
                  <textarea value={form.message} onChange={(e) => setField("message")(e.target.value)} required placeholder="Cuéntenos sobre su empresa, sus desafíos actuales y qué tipo de solución está buscando" rows={4} className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface resize-none placeholder:text-on-surface-variant/30 text-body-md" />
                </div>
                {status === "error" && (
                  <p className="text-body-md text-red-600">Hubo un error. Por favor intente nuevamente.</p>
                )}
                <button type="submit" disabled={status === "loading"} className="w-full bg-on-surface text-surface py-5 text-label-sm uppercase hover:bg-primary transition-all rounded-lg disabled:opacity-60">
                  {status === "loading" ? "Enviando..." : "Enviar Solicitud"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-surface-container border-y border-outline/20 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">FAQ</span>
              <h2 className="text-headline-lg mb-6 text-on-surface">Preguntas Frecuentes</h2>
              <p className="text-body-lg text-on-surface-variant">
                Si tiene alguna otra pregunta, no dude en contactarnos directamente.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="divide-y divide-outline/30">
                {faqs.map((faq, i) => (
                  <div key={i} className="py-6">
                    <button
                      className="w-full flex items-center justify-between gap-4 text-left group"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-headline-md text-on-surface group-hover:text-primary transition-colors">
                        {faq.q}
                      </span>
                      <span className={`material-symbols-outlined text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                        expand_more
                      </span>
                    </button>
                    {openFaq === i && (
                      <p className="mt-4 text-body-lg text-on-surface-variant pr-12">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-on-surface px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto text-center">
          <span className="text-label-sm text-primary-variant uppercase tracking-[0.3em] block mb-6">¿Listo para Empezar?</span>
          <h2 className="text-headline-lg text-white mb-8 max-w-2xl mx-auto">
            La Primera Conversación No Tiene Costo
          </h2>
          <p className="text-body-lg text-surface-container/70 max-w-xl mx-auto mb-12">
            La sesión de diagnóstico inicial es completamente gratuita. Saldrá de ella con claridad sobre sus opciones, independientemente de si decidimos trabajar juntos.
          </p>
          <Link
            href="mailto:estudio@pegasuspixels.com"
            className="inline-flex items-center gap-3 border border-primary-variant text-white px-10 py-4 text-label-sm uppercase hover:bg-primary transition-colors rounded-lg"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            estudio@pegasuspixels.com
          </Link>
        </div>
      </section>
    </>
  );
}
