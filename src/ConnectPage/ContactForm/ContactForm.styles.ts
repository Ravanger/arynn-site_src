import styled from "styled-components"

export const FormContact = styled.form`
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    "name"
    "email"
    "colours"
    "vision"
    "send";

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "name name email email"
      "colours colours colours colours"
      "vision vision vision vision"
      ". . . send";
  }

  #contact_name {
    grid-area: name;
  }

  #contact_email {
    grid-area: email;
  }

  #contact_colors {
    grid-area: colours;
  }

  #contact_message {
    grid-area: vision;
  }

  > button {
    grid-area: send;
  }
`
