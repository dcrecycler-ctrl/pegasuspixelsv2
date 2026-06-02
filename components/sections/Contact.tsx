"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");

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
      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="py-40"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        {/* Left: Info */}
        <div>
          <h2 className="text-headline-lg font-black tracking-[-0.03em] leading-[1.1] mb-8 text-on-surface">
            Agendar una consulta
          </h2>
          <p className="text-[17px] font-light leading-[1.65] text-ink-700 mb-12">
            Si quieres entender cómo tu negocio puede adaptarse mejor a cómo se comportan los clientes hoy, podemos revisar tu sistema actual e identificar oportunidades de mejora.
          </p>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-primary-variant bg-surface-container p-4 rounded-full border border-outline/30">
                mail
              </span>
              <div>
                <span className="block text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase mb-1">
                  Email
                </span>
                <a
                  href="mailto:estudio@pegasuspixels.com"
                  className="text-body-md hover:text-primary transition-colors"
                >
                  estudio@pegasuspixels.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-primary-variant bg-surface-container p-4 rounded-full border border-outline/30">
                location_on
              </span>
              <div>
                <span className="block text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase mb-1">
                  Ubicación
                </span>
                <span className="text-body-md">
                  Punta del Este, Uruguay | Global Services
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form card */}
        <div className="bg-surface-container p-12 rounded-2xl border border-outline/40 coastal-shadow">
          {status === "success" ? (
            <div className="flex flex-col items-start justify-center h-full py-8">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                check_circle
              </span>
              <h3 className="text-headline-md text-on-surface mb-4">
                Solicitud Recibida
              </h3>
              <p className="text-body-md text-on-surface-variant mb-8">
                Gracias por su mensaje. Nos pondremos en contacto en las próximas 24 horas para agendar una consulta.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[11px] font-bold tracking-[0.12em] uppercase text-primary hover:text-primary-variant transition-colors"
              >
                Enviar otro mensaje →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="border-b border-outline pb-3">
                  <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-ink-600 block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setField("name")(e.target.value)}
                    required
                    placeholder="Su nombre"
                    className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 text-body-md"
                  />
                </div>
                <div className="border-b border-outline pb-3">
                  <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-ink-600 block mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={form.businessName}
                    onChange={(e) => setField("businessName")(e.target.value)}
                    required
                    placeholder="Nombre de su negocio"
                    className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 text-body-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="border-b border-outline pb-3">
                  <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-ink-600 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setField("email")(e.target.value)}
                    required
                    placeholder="email@ejemplo.com"
                    className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 text-body-md"
                  />
                </div>
                <div className="border-b border-outline pb-3">
                  <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-ink-600 block mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setField("phone")(e.target.value)}
                    placeholder="+598..."
                    className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 text-body-md"
                  />
                </div>
              </div>

              <div className="border-b border-outline pb-3">
                <label className="text-label-sm uppercase text-ink-600 block mb-2">
                  Mensaje
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setField("message")(e.target.value)}
                  required
                  placeholder="Cuéntenos sobre su proyecto o desafío técnico"
                  rows={3}
                  className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 text-on-surface resize-none placeholder:text-on-surface-variant/30 text-body-md"
                />
              </div>

              {status === "error" && (
                <p className="text-body-md text-red-600">
                  Hubo un error al enviar su mensaje. Por favor intente nuevamente.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-on-primary py-5 text-[14px] font-semibold uppercase hover:bg-primary-hover transition-all rounded-lg disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar Solicitud"}
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
