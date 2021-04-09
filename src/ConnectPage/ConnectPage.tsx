import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import AboutBlurb from "./AboutBlurb"
import { ConnectPageType } from "./ConnectPage.types"
import ContactForm from "./ContactForm"

const ConnectPage = (props: ConnectPageType) => {
  return (
    <>
      <HeaderBar>Let's Talk!</HeaderBar>
      <Spacer size="2rem" />
      <AboutBlurb socialLinks={props.socialLinks} />
      <Spacer size="2rem" />
      <HeaderBar>Email Me</HeaderBar>
      <Spacer size="2rem" />
      <ContactForm />
    </>
  )
}

export default ConnectPage
