import SEO from "src/common/SEO"
import ConnectPage from "src/ConnectPage"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import { socialLinks } from "data/socials"

const Connect = () => {
  return (
    <>
      <SEO title="Connect" description="Connect with Arynn" url="/connect" />
      <ConnectPage socialLinks={socialLinks} />
    </>
  )
}

Connect.getLayout = getLayout

export default Connect
