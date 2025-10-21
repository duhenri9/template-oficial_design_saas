import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DesignSaaS - Crie Designs Incríveis em Minutos",
    template: "%s | DesignSaaS",
  },
  description: "A plataforma completa de design que transforma suas ideias em realidade.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'DesignSaaS - Crie Designs Incríveis em Minutos',
    description: 'A plataforma completa de design que transforma suas ideias em realidade.',
    siteName: 'DesignSaaS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DesignSaaS - Crie Designs Incríveis em Minutos',
    description: 'A plataforma completa de design que transforma suas ideias em realidade.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
