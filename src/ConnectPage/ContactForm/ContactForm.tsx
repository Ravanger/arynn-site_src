import { DivRow, FormContact } from "./ContactForm.styles"

const ContactForm = () => {
  return (
    <FormContact method="POST">
      <DivRow>
        <input
          type="text"
          placeholder="Name"
          name="contact_name"
          id="contact_name"
        />
        <input
          type="email"
          placeholder="Email"
          name="contact_email"
          id="contact_email"
        />
      </DivRow>
      <input
        type="text"
        placeholder="Favourite colors"
        name="contact_colors"
        id="contact_colors"
      />
      <textarea
        placeholder="Describe your vision!"
        name="contact_message"
        id="contact_message"
        rows={8}
      />
      <button type="submit">Send!</button>
    </FormContact>
  )
}

export default ContactForm
