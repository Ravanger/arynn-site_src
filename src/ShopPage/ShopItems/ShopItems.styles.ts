import styled from "styled-components"

export const DivShopItems = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1.5rem;

  @media (min-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 60rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`
