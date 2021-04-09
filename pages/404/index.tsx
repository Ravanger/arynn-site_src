import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import Spacer from "src/common/Spacer"

const Success = () => {
  return (
    <>
      <SEO title="404" description="Thank you for your order" url="/success" />
      <h2 className="text-4xl font-bold">Error 404</h2>
      <Spacer size="2rem" />
      <p className="font-bold italic">What are you doing?</p>
      <p className="italic">There's nothing to see here.</p>
    </>
  )
}

Success.getLayout = getLayout

export default Success
