import Button from "src/common/Button"
import emailjs from "emailjs-com"
import { useEffect, useState } from "react"
import Spinner from "src/common/Spinner"
import toast from "react-hot-toast"

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false)
  const [response, setResponse] = useState({ status: 0, text: "" })
  emailjs.init(process.env.NEXT_PUBLIC_EMAIL_USER_ID!)

  useEffect(() => {
    response.text && response.status === 400
      ? toast.error("Error. Please try again.")
      : response.status === 200
      ? toast.success("Thank you!")
      : null
  }, [response])

  return (
    <form
      className="grid w-full gap-4 grid-cols-1 text-xs px-4 md:grid-cols-4 sm:-0"
      id="contact_form"
      onSubmit={async (event) => {
        if (isSending) return

        event.preventDefault()
        setIsSending(true)
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
            "#contact_form"
          )
          .then((response) => {
            setResponse({ status: response.status, text: response.text })
            setIsSending(false)
          })
          .catch((err) => {
            setResponse({ status: err.status, text: err.text })
            setIsSending(false)
            console.error(err)
          })
      }}
    >
      <label htmlFor="contact_email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        placeholder="Email Address"
        name="contact_email"
        id="contact_email"
        className="focus:border-pink md:col-span-2"
        required
      />
      <label htmlFor="contact_name" className="sr-only">
        Name
      </label>
      <input
        type="text"
        placeholder="Name"
        name="contact_name"
        id="contact_name"
        className="focus:border-pink md:col-span-2"
        required
      />
      <label htmlFor="contact_colors" className="sr-only">
        Subject
      </label>
      <input
        type="text"
        placeholder="Subject"
        name="contact_subject"
        id="contact_subject"
        className="focus:border-pink md:col-span-4"
        required
      />
      <label htmlFor="contact_message" className="sr-only">
        Describe your vision!
      </label>
      <textarea
        placeholder="Hellloooooooo..."
        name="contact_message"
        id="contact_message"
        className="focus:border-pink md:col-span-4"
        rows={8}
        required
      />
      <Button
        type="submit"
        className="flex justify-center focus:outline-none md:col-start-4"
        disabled={isSending}
      >
        {isSending ? <Spinner /> : <span>Send!</span>}
      </Button>
    </form>
  )
}

export default ContactForm
