import SEO from "src/common/SEO"
import ConnectPage from "src/ConnectPage"
import { getLayout } from "src/layouts/MainLayout/MainLayout"

export const Connect = () => {
  return (
    <>
      <SEO title="Connect" description="Connect with Arynn" url="/connect" />
      <ConnectPage />
    </>
  )
}

Connect.getLayout = getLayout

export default Connect
