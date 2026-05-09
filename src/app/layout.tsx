import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatWidget } from "@/components/chat/ChatWidget";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bozon = localFont({
  src: [
    {
      path: "../../assets/fonts/Bozon.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Bozon_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bozon",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LA Médic Rio | Construindo um amanhã mais saudável",
    template: "%s | LA Médic Rio",
  },
  description:
    "Comércio de Produtos Médicos Cirúrgicos. Somos os mais qualificados para o atendimento a: Urologia, Ginecologia, Proctologia e Cirurgia Geral.",
  keywords: [
    "equipamentos médicos",
    "cirúrgicos",
    "urologia",
    "ginecologia",
    "proctologia",
    "cirurgia geral",
    "Rio de Janeiro",
    "LA Médic Rio",
    "Lone Star Retractors",
  ],
  openGraph: {
    title: "LA Médic Rio | Construindo um amanhã mais saudável",
    description:
      "Comércio de Produtos Médicos Cirúrgicos especializado em Urologia, Ginecologia, Proctologia e Cirurgia Geral no Rio de Janeiro.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bozon.variable}`}>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <ChatWidget />

        {/* HubSpot CRM */}
        <Script
          id="hubspot"
          src="//js.hs-scripts.com/46162151.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
