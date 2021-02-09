import HeaderBar from "src/common/ContentBox/HeaderBar"
import Spacer from "src/common/Spacer"
import AboutBlurb from "./AboutBlurb"
import ContactForm from "./ContactForm"

const ConnectPage = () => {
  return (
    <>
      <HeaderBar>Let's Talk!</HeaderBar>
      <Spacer size="2rem" />
      <AboutBlurb />
      <Spacer size="2rem" />
      <HeaderBar>Email Me</HeaderBar>
      <Spacer size="2rem" />
      <ContactForm />
    </>
  )
}

export default ConnectPage
