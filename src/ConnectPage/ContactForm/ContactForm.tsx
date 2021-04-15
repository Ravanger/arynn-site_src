import Button from "src/common/Button"

const ContactForm = () => {
  return (
    <form
      method="POST"
      className="grid w-full gap-4 grid-cols-1 text-xs md:grid-cols-4"
    >
      <input
        type="text"
        placeholder="Name"
        name="contact_name"
        id="contact_name"
        className="focus:border-pink md:col-span-2"
      />
      <input
        type="email"
        placeholder="Email"
        name="contact_email"
        id="contact_email"
        className="focus:border-pink md:col-span-2"
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
      />
      <Button
        type="submit"
        className="animate-scaleExpandIn hover:animate-scaleExpandOut focus:outline-none md:col-start-4"
      >
        Send!
      </Button>
    </form>
  )
}

export default ContactForm
