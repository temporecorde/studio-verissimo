import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Veríssimo | Especialista em Cabelos com Curvatura",
  description:
    "Cortes, mechas e tratamentos especializados para cabelos ondulados, cacheados e crespos em Barueri, São Paulo.",
  other: { "codex-preview": "development" },
  icons: { icon: "/v-verissimo.png", shortcut: "/v-verissimo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
