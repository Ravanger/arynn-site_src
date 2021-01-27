import ArtPage from "src/ArtPage"
import { PageWithLayoutType } from "src/layouts"
import { getLayout } from "src/layouts/MainLayout/MainLayout"

export const Art: PageWithLayoutType = () => {
  return <ArtPage />
}

Art.getLayout = getLayout

export default Art
