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
  title: "Pegasus Pixels | Arquitectura Digital para Empresas Modernas",
  description:
    "Ayudamos a inmobiliarias, automotoras y empresas de hospitalidad a mejorar su presencia digital, organizar operaciones y ofrecer una experiencia moderna a sus clientes.",
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
    title: "Pegasus Pixels | Arquitectura Digital para Empresas Modernas",
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
