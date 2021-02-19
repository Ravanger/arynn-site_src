import styled from "styled-components"

export const FormShopPiece = styled.form`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-template-areas:
    "description description"
    "quantity price"
    "continue continue";

  @media (min-width: 48rem) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "description description description"
      ". . price"
      "quantity . continue";
  }

  > p {
    grid-area: description;
  }

  > select {
    grid-area: quantity;
  }

  > span {
    grid-area: price;
    text-align: right;
    font-size: 2rem;
    font-weight: bold;
  }

  > button {
    grid-area: continue;
  }
`
