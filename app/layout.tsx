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
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smart-impulsion.com"),
  title: "Smart Impulsion | Conseil IA pour PME et ETI - ROI mesurable",
  description:
    "Smart Impulsion aide les PME et ETI françaises à déployer l'IA avec un ROI mesurable. -32% de temps opérationnel, +18% de performance. Évaluation gratuite.",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
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
        {/* Structured data — hardcoded trusted JSON-LD, no user input */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Smart Impulsion",
              "description": "Agence de conseil en intelligence artificielle pour PME et ETI. ROI mesurable garanti.",
              "url": "https://www.smart-impulsion.com",
              "email": "contact@smart-impulsion.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "70 quai Perrache",
                "postalCode": "69002",
                "addressLocality": "Lyon",
                "addressRegion": "Auvergne-Rhône-Alpes",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.7466,
                "longitude": 4.8262
              },
              "priceRange": "€€",
              "image": "https://www.smart-impulsion.com/og-image.png",
              "founder": {
                "@type": "Person",
                "name": "Laurent Bouzon",
                "jobTitle": "Fondateur & CEO"
              },
              "areaServed": [
                { "@type": "Country", "name": "France" }
              ],
              "serviceType": ["Conseil en intelligence artificielle", "Audit IA", "Formation IA", "Implémentation IA"],
              "knowsAbout": ["Intelligence artificielle", "ROI IA", "Automatisation", "Machine Learning", "NLP"],
              "sameAs": [
                "https://www.linkedin.com/company/107340725"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "2",
                "bestRating": "5"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Emmanuel Chochoy" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "reviewBody": "Smart Impulsion a transformé notre approche de l'IA. Leur focus sur le ROI nous a permis de justifier chaque euro investi avec des résultats concrets."
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Ervan Marduel" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "reviewBody": "L'approche méthodique de Smart Impulsion nous a permis d'identifier les opportunités d'IA à fort impact et de les déployer rapidement."
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Smart Impulsion",
              "url": "https://www.smart-impulsion.com",
              "description": "Agence de conseil IA pour PME et ETI françaises - ROI mesurable",
              "publisher": {
                "@type": "Organization",
                "name": "Smart Impulsion",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.smart-impulsion.com/og-image.png"
                }
              }
            })
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
          <GoogleAnalytics />
        </ThemeProvider>

      </body>
    </html>
  )
}
