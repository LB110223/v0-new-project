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

export function AxeptioProvider() {
  return (
    <>
      <Script
        id="axeptio-settings"
        strategy="afterInteractive"
      >
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
        strategy="lazyOnload"
      />
    </>
  )
}
