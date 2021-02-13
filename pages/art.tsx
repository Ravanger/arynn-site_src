import ArtPage from "src/ArtPage"
import SEO from "src/common/SEO"
import { PageWithLayoutType } from "src/layouts"
import { getLayout } from "src/layouts/MainLayout/MainLayout"

export const Art: PageWithLayoutType = () => {
  return (
    <>
      <SEO title="Art" description="Arynn's art" url="/art" />
      <ArtPage />
    </>
  )
}

Art.getLayout = getLayout

export default Art
