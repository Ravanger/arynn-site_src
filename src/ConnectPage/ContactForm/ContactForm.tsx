import Button from "src/common/Button"
import emailjs from "emailjs-com"
import { useState } from "react"
import Spinner from "src/common/Spinner"

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false)
  const [response, setResponse] = useState({ status: 0, text: "" })
  emailjs.init(process.env.NEXT_PUBLIC_EMAIL_USER_ID!)

  return (
    <form
      className="grid w-full gap-4 grid-cols-1 text-xs md:grid-cols-4"
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
      <input
        type="text"
        placeholder="Name"
        name="contact_name"
        id="contact_name"
        className="focus:border-pink md:col-span-2"
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="contact_email"
        id="contact_email"
        className="focus:border-pink md:col-span-2"
        required
      />
      <input
        type="text"
        placeholder="Favourite colors"
        name="contact_colors"
        id="contact_colors"
        className="focus:border-pink md:col-span-4"
      />
      <textarea
        placeholder="Describe your vision!"
        name="contact_message"
        id="contact_message"
        className="focus:border-pink md:col-span-4"
        rows={8}
        required
      />
      <Button
        type="submit"
        className="flex justify-center animate-scaleExpandIn hover:animate-scaleExpandOut focus:outline-none md:col-start-4"
        disabled={isSending}
      >
        {isSending ? <Spinner /> : <span>Send!</span>}
      </Button>
      {response.text && (
        <p className="text-pink text-xl italic md:col-span-4">
          {response.status === 400
            ? "Error. Try again."
            : response.status === 200
            ? "Thank you!"
            : ""}
        </p>
      )}
    </form>
  )
}

export default ContactForm
