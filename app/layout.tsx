import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Berenice Solohaga — Portfolio",
    template: "%s | Berenice Solohaga",
  },
  description:
    "Portfolio profesional de Berenice Solohaga — Fullstack Developer especializada en React, Next.js y Django.",
  openGraph: {
    title: "Berenice Solohaga — Portfolio",
    description:
      "Conocé mis proyectos, habilidades y formas de contacto. Desarrollo web moderno con React, Next.js y Django.",
    url: "https://portfoliobereail.netlify.app",
    siteName: "Berenice Solohaga Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berenice Solohaga — Portfolio",
    description:
      "Fullstack Developer — React | Next.js | Django | Mobile",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
