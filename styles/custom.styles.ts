import { css } from "styled-components"

export const custom = css`
  body {
    background-color: #6cbebb;
    overflow-x: hidden;
  }

  img {
    border-radius: 2rem;
    background-color: #6cbebb;
  }

  body,
  html,
  input,
  textarea,
  select {
    font-family: "Noto Serif", serif;
    color: #1b8e8a;
  }

  select {
    padding: 0.8em;
    border: solid 0.1em #1b8e8a;
    border-radius: 0.4rem;
    font-weight: bold;
  }

  input,
  textarea {
    font-weight: bold;
    border: solid 0.15rem #1b8e8a;
    border-radius: 0.5rem;
    padding: 1em;
  }
`
