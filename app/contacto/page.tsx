import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactoPageClient } from "./ContactoPageClient";

export const metadata: Metadata = {
  title: "Contacto — Pegasus Pixels",
  description: "Agende una sesión de consultoría técnica sin compromiso. Hablemos sobre cómo la tecnología puede convertirse en la ventaja competitiva de su empresa.",
};

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <main>
        <ContactoPageClient />
      </main>
      <Footer />
    </>
  );
}
