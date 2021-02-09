import HeaderBar from "src/common/ContentBox/HeaderBar"
import Spacer from "src/common/Spacer"
import ContactForm from "./ContactForm"

const ConnectContent = <main>Connect content</main>

const ConnectPage = () => {
  return (
    <>
      <HeaderBar>Let's Talk!</HeaderBar>
      <Spacer size="2rem" />
      {ConnectContent}
      <Spacer size="2rem" />
      <HeaderBar>Email Me</HeaderBar>
      <Spacer size="2rem" />
      <ContactForm />
    </>
  )
}

export default ConnectPage
