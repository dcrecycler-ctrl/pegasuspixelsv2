"use client";

import { useState, FormEvent } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

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

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder=" "
        className="
          peer w-full bg-transparent border-0 border-b border-outline/30
          focus:border-gold focus:outline-none
          font-body text-base text-cream pt-6 pb-2
          transition-colors duration-200
          placeholder-transparent
        "
      />
      <label
        htmlFor={id}
        className="
          absolute left-0 top-1
          font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-outline-muted
          transition-all duration-200
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:uppercase-none
          peer-focus:top-1 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:tracking-[0.15em] peer-focus:text-gold
        "
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder=" "
        rows={4}
        className="
          peer w-full bg-transparent border-0 border-b border-outline/30
          focus:border-gold focus:outline-none resize-none
          font-body text-base text-cream pt-6 pb-2
          transition-colors duration-200
          placeholder-transparent
        "
      />
      <label
        htmlFor={id}
        className="
          absolute left-0 top-1
          font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-outline-muted
          transition-all duration-200
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal
          peer-focus:top-1 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:tracking-[0.15em] peer-focus:text-gold
        "
      >
        {label}
      </label>
    </div>
  );
}

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
    <section id="contacto" className="bg-ink py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">Contacto</SectionLabel>
            <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.15] tracking-[-0.01em] text-cream mb-8">
              Comencemos a Construir
            </h2>
            <p className="font-body text-base text-outline-muted leading-relaxed mb-12">
              Cada proyecto comienza con una conversación. Cuéntanos sobre tu negocio y exploraremos juntos cómo la tecnología puede convertirse en tu ventaja competitiva.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-outline-muted mb-2">
                  Email
                </p>
                <a
                  href="mailto:estudio@pegasuspixels.com"
                  className="font-body text-sm text-cream-dim hover:text-gold transition-colors duration-200"
                >
                  estudio@pegasuspixels.com
                </a>
              </div>
              <div>
                <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-outline-muted mb-2">
                  Ubicación
                </p>
                <p className="font-body text-sm text-cream-dim">
                  Punta del Este, Uruguay
                </p>
                <p className="font-body text-sm text-cream-dim">
                  Global Services
                </p>
              </div>
            </div>

            {/* Decorative line */}
            <div className="mt-12 w-8 h-px bg-gold" />
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            {status === "success" ? (
              <div className="h-full flex flex-col items-start justify-center bg-ink-low rounded-[4px] border border-gold/30 p-10 md:p-14">
                <div className="w-8 h-px bg-gold mb-8" />
                <h3 className="font-display text-2xl font-semibold text-cream mb-4">
                  Solicitud Recibida
                </h3>
                <p className="font-body text-base text-outline-muted leading-relaxed mb-8">
                  Gracias por tu mensaje. Nos pondremos en contacto contigo en las próximas 24 horas para agendar una consulta.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-body text-sm font-semibold text-gold hover:text-gold-dim transition-colors duration-200"
                >
                  Enviar otro mensaje →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FloatingInput
                    id="name"
                    label="Nombre"
                    value={form.name}
                    onChange={setField("name")}
                    required
                  />
                  <FloatingInput
                    id="businessName"
                    label="Empresa"
                    value={form.businessName}
                    onChange={setField("businessName")}
                    required
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FloatingInput
                    id="email"
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={setField("email")}
                    required
                  />
                  <FloatingInput
                    id="phone"
                    label="Teléfono"
                    type="tel"
                    value={form.phone}
                    onChange={setField("phone")}
                  />
                </div>

                {/* Message */}
                <FloatingTextarea
                  id="message"
                  label="Mensaje"
                  value={form.message}
                  onChange={setField("message")}
                  required
                />

                {/* Error */}
                {status === "error" && (
                  <p className="font-body text-sm text-red-400">
                    Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.
                  </p>
                )}

                {/* Submit */}
                <div className="flex items-center gap-6 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className={status === "loading" ? "opacity-60 cursor-not-allowed" : ""}
                  >
                    {status === "loading" ? "Enviando..." : "Enviar Solicitud"}
                  </Button>
                  <p className="font-body text-xs text-outline-muted">
                    Respuesta en menos de 24 horas
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
