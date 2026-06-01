import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pegasus Pixels — Arquitectura de Sistemas Digitales",
  description:
    "Ayudamos a inmobiliarias, automotoras y empresas de hospitalidad con tecnología y experiencias digitales de élite.",
  keywords: [
    "desarrollo web",
    "sistemas digitales",
    "inmobiliarias",
    "automotoras",
    "hospitalidad",
    "Uruguay",
    "Punta del Este",
  ],
  openGraph: {
    title: "Pegasus Pixels — Arquitectura de Sistemas Digitales",
    description:
      "Tecnología y experiencias digitales para empresas modernas.",
    type: "website",
    locale: "es_UY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${hanken.variable}`}
    >
      <body className="bg-ink text-cream antialiased">{children}</body>
    </html>
  );
}
