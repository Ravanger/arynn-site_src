import ConnectPage from "src/ConnectPage"
import { PageWithLayoutType } from "src/layouts"
import { getLayout } from "src/layouts/MainLayout"

export const Connect: PageWithLayoutType = () => {
  return <ConnectPage />
}

Connect.getLayout = getLayout

export default Connect
