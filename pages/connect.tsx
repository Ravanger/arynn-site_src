import SEO from "src/common/SEO"
import ConnectPage from "src/ConnectPage"
import { PageWithLayoutType } from "src/layouts"
import { getLayout } from "src/layouts/MainLayout/MainLayout"

export const Connect: PageWithLayoutType = () => {
  return (
    <>
      <SEO title="Connect" description="Connect with Arynn" url="/connect" />
      <ConnectPage />
    </>
  )
}

Connect.getLayout = getLayout

export default Connect
