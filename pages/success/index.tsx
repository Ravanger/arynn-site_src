import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SuccessPage from "src/SuccessPage"

const Success = () => {
  return (
    <>
      <SEO
        title="Thank you!"
        description="Thank you for your order"
        url="/success"
      />
      <SuccessPage />
    </>
  )
}

Success.getLayout = getLayout

export default Success
