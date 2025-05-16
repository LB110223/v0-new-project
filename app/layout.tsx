import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { EnvWarning } from "@/components/env-warning"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smart Impulsion - IA à ROI mesurable",
  description: "Transformez votre entreprise avec l'IA et un ROI mesurable",
    generator: 'v0.dev'
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

        {/* Favicon forcé avec données inline */}
        <link
          rel="icon"
          href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjk3MzE2Ii8+CjxwYXRoIGQ9Ik02NSAzNUw0NSA1NUw2NSA3NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
          type="image/svg+xml"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <EnvWarning />
          {children}
        </ThemeProvider>

        {/* Script pour forcer le remplacement du favicon */}
        <Script id="favicon-replacer" strategy="afterInteractive">
          {`
            // Fonction pour forcer le remplacement du favicon
            function replaceFavicon() {
              // Supprimer tous les favicons existants
              const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
              existingFavicons.forEach(favicon => {
                favicon.parentNode.removeChild(favicon);
              });
              
              // Créer un nouveau favicon
              const newFavicon = document.createElement('link');
              newFavicon.rel = 'icon';
              newFavicon.href = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjk3MzE2Ii8+CjxwYXRoIGQ9Ik02NSAzNUw0NSA1NUw2NSA3NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
              newFavicon.type = 'image/svg+xml';
              
              // Ajouter le nouveau favicon au document
              document.head.appendChild(newFavicon);
            }
            
            // Exécuter immédiatement
            replaceFavicon();
            
            // Exécuter à nouveau après un court délai pour s'assurer qu'il est appliqué
            setTimeout(replaceFavicon, 500);
            
            // Exécuter à nouveau si la page est entièrement chargée
            window.addEventListener('load', replaceFavicon);
          `}
        </Script>

        {/* Script Axeptio */}
        <Script id="axeptio-script" strategy="afterInteractive">
          {`
            window.axeptioSettings = {
              clientId: "6825ac28ce08b489a55f4f14",
              cookiesVersion: "smart-impulsion-fr-EU",
              googleConsentMode: {
                default: {
                  analytics_storage: "denied",
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  wait_for_update: 500
                }
              },
              alwaysDisplayBanner: true,
              autoDisplayBanner: true
            };
            
            (function(d, s) {
              var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
              e.async = true; e.src = "//static.axept.io/sdk.js";
              t.parentNode.insertBefore(e, t);
            })(document, "script");
            
            void 0 === window._axcb && (window._axcb = []);
            window._axcb.push(function(axeptio) {
              // Forcer l'ouverture du bandeau après le chargement
              setTimeout(function() {
                if (typeof axeptio.showBanner === "function") {
                  axeptio.showBanner();
                } else if (typeof axeptio.initBanner === "function") {
                  axeptio.initBanner();
                } else if (typeof axeptio.showCookies === "function") {
                  axeptio.showCookies();
                }
              }, 1000);
              
              axeptio.on("cookies:complete", function(choices) {
                localStorage.setItem("userConsentChoices", JSON.stringify(choices));
              });
            });
            
            // Vérifier si c'est la première visite
            if (!localStorage.getItem("axeptio_first_visit")) {
              localStorage.setItem("axeptio_first_visit", "false");
              // Forcer l'ouverture du bandeau
              setTimeout(function() {
                if (window._axcb) {
                  window._axcb.push(function(axeptio) {
                    if (typeof axeptio.showBanner === "function") {
                      axeptio.showBanner();
                    } else if (typeof axeptio.initBanner === "function") {
                      axeptio.initBanner();
                    } else if (typeof axeptio.showCookies === "function") {
                      axeptio.showCookies();
                    }
                  });
                }
              }, 1500);
            }
          `}
        </Script>
      </body>
    </html>
  )
}
