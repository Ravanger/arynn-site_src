import type { AppProps } from "next/app"
import { PageWithLayoutType } from "src/layouts"
import { Provider } from "jotai"
import "../styles/tailwind.css"
import { CartProvider } from "use-shopping-cart"
import { CURRENCY, getStripe } from "util/stripe"

// TODO: 404 page
// TODO: Meta info
// TODO: Accessibility
// Dumb components, move all data to "pages"
// Custom product store page

interface AppLayoutProps extends AppProps {
  Component: PageWithLayoutType
}

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider>
      <CartProvider
        mode="checkout-session"
        stripe={getStripe()}
        currency={CURRENCY}
      >
        {getLayout(<Component {...pageProps} />)}
      </CartProvider>
    </Provider>
  )
}

export default MyApp
