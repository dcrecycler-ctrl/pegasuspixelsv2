import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pegasus Pixels | Presencia digital y gestión de clientes — Uruguay",
  description:
    "Mejoramos la presencia digital y la gestión de leads de automotoras, inmobiliarias y restaurantes en Uruguay. Implementamos, capacitamos y te acompañamos.",
  keywords: [
    "arquitectura digital",
    "sistemas empresariales",
    "inmobiliarias",
    "automotoras",
    "hospitalidad",
    "Uruguay",
    "Punta del Este",
  ],
  openGraph: {
    title: "Pegasus Pixels | Presencia digital y gestión de clientes — Uruguay",
    description:
      "Mejoramos cómo tu negocio se ve y cómo gestiona a sus clientes. Automotoras, inmobiliarias y restaurantes en Uruguay.",
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
    <html lang="es" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface-container text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
