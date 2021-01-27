import ConnectPage from "src/ConnectPage"
import { PageWithLayoutType } from "src/layouts"
import { getLayout } from "src/layouts/MainLayout/MainLayout"

export const Connect: PageWithLayoutType = () => {
  return <ConnectPage />
}

Connect.getLayout = getLayout

export default Connect
