import Script from "next/script"

const GA_ID = "G-GL950W65YF"

/**
 * Google Analytics with Consent Mode v2.
 *
 * Load order (critical):
 * 1. `ga-bootstrap` (beforeInteractive) — creates dataLayer, exposes window.gtag,
 *    and sets consent defaults to "denied" BEFORE any GA hit leaves the page.
 *    This is the Google-recommended Consent Mode v2 pattern and is required
 *    for Axeptio's `gtag('consent', 'update', ...)` callback to work.
 * 2. `ga-script` (afterInteractive) — loads gtag.js asynchronously, then
 *    registers the `js` + `config` commands.
 *
 * Axeptio (see components/axeptio-provider.tsx) pushes consent updates via
 * `window.gtag('consent', 'update', { analytics_storage: 'granted', ... })`
 * once the user accepts cookies. Those updates MUST land on the same
 * dataLayer / gtag function created here — do not wrap this in a client
 * useEffect closure (that would scope gtag to the closure, not window).
 *
 * All inline scripts below contain only hardcoded trusted constants — no
 * user input is interpolated, so there is no XSS surface.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script id="ga-bootstrap" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){window.dataLayer.push(arguments);};
          window.gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          window.gtag('js', new Date());
        `}
      </Script>
      <Script
        id="ga-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`window.gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  )
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}
