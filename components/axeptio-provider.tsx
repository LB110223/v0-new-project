import Script from "next/script"

declare global {
  interface Window {
    axeptioSettings?: {
      clientId: string
      cookiesVersion: string
    }
    openAxeptioCookies?: () => void
  }
}

export function AxeptioProvider() {
  return (
    <>
      <Script
        id="axeptio-settings"
        strategy="beforeInteractive"
      >
        {`
          window.axeptioSettings = {
            clientId: "6819f18c7725ab15cba26463",
            cookiesVersion: "smart impulsion-fr-EU",
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
