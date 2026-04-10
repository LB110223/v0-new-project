import Script from "next/script"

declare global {
  interface Window {
    axeptioSettings?: {
      clientId: string
      cookiesVersion: string
      googleConsentMode?: object
    }
    openAxeptioCookies?: () => void
  }
}

/**
 * Axeptio cookie consent + Google Consent Mode v2 bridge.
 *
 * `axeptio-settings` MUST run before `axeptio-sdk` — Axeptio reads
 * `window.axeptioSettings.googleConsentMode` at SDK init time and turns
 * it into `gtag('consent', 'update', ...)` calls when the user accepts.
 *
 * These calls go through `window.gtag`, which is created by the
 * GoogleAnalytics bootstrap script in `components/google-analytics.tsx`.
 * Keep both components mounted together.
 */
export function AxeptioProvider() {
  return (
    <>
      <Script id="axeptio-settings" strategy="beforeInteractive">
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
            }
          };
        `}
      </Script>
      <Script
        id="axeptio-sdk"
        src="https://static.axept.io/sdk.js"
        strategy="afterInteractive"
      />
    </>
  )
}
