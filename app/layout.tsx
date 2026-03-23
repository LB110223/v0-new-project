import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { EnvWarning } from "@/components/env-warning"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ResizeObserverFix } from "@/components/resize-observer-fix"
import { AxeptioProvider } from "@/components/axeptio-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smart Impulsion | IA à ROI mesurable pour entreprises françaises",
  description:
    "Smart Impulsion aide les PME et ETI françaises à obtenir un ROI mesurable avec l'IA. -32% de temps opérationnel, +18% de performance commerciale. Audit, formation, déploiement.",
  keywords:
    "intelligence artificielle, IA, ROI mesurable, transformation digitale, machine learning, deep learning, NLP, vision par ordinateur, automatisation, analyse de données, entreprises françaises",
  authors: [
    { name: "Laurent Bouzon", url: "https://www.linkedin.com/in/laurent-bouzon-150237108/" },
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.smart-impulsion.com",
    title: "Smart Impulsion | IA à ROI mesurable",
    description:
      "Transformez votre entreprise avec l'IA et un ROI mesurable. Expertise en IA générative, machine learning et NLP.",
    siteName: "Smart Impulsion",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smart Impulsion - IA à ROI mesurable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Impulsion | IA à ROI mesurable",
    description:
      "Transformez votre entreprise avec l'IA et un ROI mesurable. Expertise en IA générative, machine learning et NLP.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.smart-impulsion.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                if (e.message === 'ResizeObserver loop completed with undelivered notifications.' || 
                    e.message === 'ResizeObserver loop limit exceeded') {
                  e.stopImmediatePropagation();
                  e.preventDefault();
                }
              });
            `,
          }}
        />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Smart Impulsion",
              "url": "https://www.smart-impulsion.com",
              "logo": "https://www.smart-impulsion.com/smart-impulsion-logo.png",
              "description": "Smart Impulsion aide les PME et ETI françaises à obtenir un ROI mesurable avec l'intelligence artificielle. Audit, formation, déploiement.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lyon",
                "addressRegion": "Auvergne-Rhône-Alpes",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@smart-impulsion.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/107340725"
              ],
              "founder": {
                "@type": "Person",
                "name": "Laurent Bouzon",
                "jobTitle": "Fondateur & CEO",
                "sameAs": "https://www.linkedin.com/in/laurent-bouzon-150237108/"
              },
              "knowsAbout": [
                "Conseil en IA pour PME",
                "ROI de l'intelligence artificielle",
                "Audit IA",
                "Formation IA entreprise",
                "Automatisation des processus par l'IA",
                "IA générative pour entreprises",
                "Transformation digitale PME ETI"
              ]
            }`
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ResizeObserverFix />
          <ScrollToTop />
          <EnvWarning />
          <Navbar />
          {children}
          <Footer />
          <AxeptioProvider />
        </ThemeProvider>

      </body>
    </html>
  )
}
