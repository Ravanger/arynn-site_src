import styled from "styled-components"

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;

  input,
  textarea,
  button {
    font-size: 1rem;
    font-weight: bold;
    flex-grow: 1;
    border: solid 0.15rem #1b8e8a;
    color: #1b8e8a;
    border-radius: 0.5rem;
    margin: 0.5em;
    padding: 1em;
  }

  > button {
    width: 15rem;
    align-self: flex-end;
    border: 0;
    background-color: #e27996;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  }
`

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
