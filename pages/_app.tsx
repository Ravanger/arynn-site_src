import type { AppProps } from "next/app"
import { PageWithLayoutType } from "src/layouts"
import { Provider as JotaiProvider } from "jotai"
import { CartProvider } from "use-shopping-cart"
import { CURRENCY, getStripe } from "util/stripe"
import "../styles/tailwind.css"
import { useEffect } from "react"

interface AppLayoutProps extends AppProps {
  Component: PageWithLayoutType
}

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {},
          (err) => {
            console.error("Service Worker registration failed: ", err)
          }
        )
      })
    }
  }, [])

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <JotaiProvider>
      <CartProvider
        mode="checkout-session"
        stripe={getStripe()}
        currency={CURRENCY}
      >
        {getLayout(<Component {...pageProps} />)}
      </CartProvider>
    </JotaiProvider>
  )
}

export default MyApp
