import type { AppProps } from "next/app"
import { PageWithLayoutType } from "src/layouts"
import { Provider as JotaiProvider } from "jotai"
import { CartProvider } from "use-shopping-cart"
import { CURRENCY, getStripe } from "util/stripe"
import "../styles/tailwind.css"

interface AppLayoutProps extends AppProps {
  Component: PageWithLayoutType
}

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
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
