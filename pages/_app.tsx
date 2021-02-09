import type { AppProps } from "next/app"
import GlobalStyle from "styles/global.styles"
import { PageWithLayoutType } from "src/layouts"
import { Provider } from "jotai"

interface AppLayoutProps extends AppProps {
  Component: PageWithLayoutType
}

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider>
      {getLayout(
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      )}
    </Provider>
  )
}

export default MyApp
