import type { AppProps } from "next/app"
import { PageWithLayoutType } from "src/layouts"
import { Provider } from "jotai"
import "../styles/tailwind.css"

// TODO: 404 page

interface AppLayoutProps extends AppProps {
  Component: PageWithLayoutType
}

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page) => page)

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>
}

export default MyApp
