import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { EnvWarning } from "@/components/env-warning"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ResizeObserverFix } from "@/components/resize-observer-fix"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smart Impulsion | IA à ROI mesurable pour entreprises françaises",
  description:
    "Smart Impulsion transforme votre entreprise avec des solutions d'intelligence artificielle garantissant un retour sur investissement mesurable. Expertise en IA générative, machine learning et NLP.",
  keywords:
    "intelligence artificielle, IA, ROI mesurable, transformation digitale, machine learning, deep learning, NLP, vision par ordinateur, automatisation, analyse de données, entreprises françaises",
  authors: [
    { name: "Laurent Bouzon", url: "https://www.linkedin.com/in/laurent-bouzon-150237108/" },
    { name: "Mohammad-Ali Bacha", url: "https://www.linkedin.com/in/mohammad-ali-bacha/" },
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.smart-impulsion.fr",
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
    canonical: "https://www.smart-impulsion.fr",
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
        {/* Favicon */}
        <link
          rel="icon"
          href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjk3MzE2Ii8+CjxwYXRoIGQ9Ik02NSAzNUw0NSA1NUw2NSA3NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
          type="image/svg+xml"
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
        </ThemeProvider>

        <Script id="axeptio-settings" strategy="lazyOnload">
          {`
            window.axeptioSettings = {
              clientId: "6819f18c7725ab15cba26463",
              cookiesVersion: "smart impulsion-fr-EU"
            };
          `}
        </Script>
        <Script src="//static.axept.io/sdk.js" strategy="lazyOnload" />

        {/* Données structurées Schema.org pour le SEO */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Smart Impulsion",
              "url": "https://www.smart-impulsion.fr",
              "logo": "https://www.smart-impulsion.fr/smart-impulsion-logo.png",
              "description": "Smart Impulsion transforme votre entreprise avec des solutions d'intelligence artificielle garantissant un retour sur investissement mesurable.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paris",
                "addressRegion": "Île-de-France",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@smart-impulsion.fr"
              },
              "sameAs": [
                "https://www.linkedin.com/company/107340725"
              ],
              "founders": [
                {
                  "@type": "Person",
                  "name": "Laurent Bouzon",
                  "jobTitle": "Co-fondateur",
                  "sameAs": "https://www.linkedin.com/in/laurent-bouzon-150237108/"
                },
                {
                  "@type": "Person",
                  "name": "Mohammad-Ali Bacha",
                  "jobTitle": "Co-fondateur",
                  "sameAs": "https://www.linkedin.com/in/mohammad-ali-bacha/"
                }
              ],
              "knowsAbout": [
                "Intelligence Artificielle",
                "Machine Learning",
                "Deep Learning",
                "Traitement du Langage Naturel",
                "Vision par Ordinateur",
                "Automatisation des Processus",
                "Analyse de Données Massives"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}
