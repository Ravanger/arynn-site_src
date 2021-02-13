import styled from "styled-components"

export const DivAbout = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;

  @media (min-width: 48rem) {
    flex-direction: row;
  }

  > div {
    background-color: #1b8e8a;
    border-radius: 2rem;
    width: 100%;
    min-height: 20rem;
    min-width: 20rem;
  }

  > main {
    color: #1b8e8a;

    > h2 {
      color: #e27996;
      font-size: 1.6rem;
      text-align: center;
      @media (min-width: 48rem) {
        text-align: inherit;
      }
    }

    > p {
      line-height: 1.5em;
      font-size: 1.1rem;
      text-align: justify;
      text-justify: inter-character;
    }

    > ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      li {
        padding: 0.5em;
        text-align: center;
        background-color: #1b8e8a;
        border-radius: 1rem;
        font-size: 1.5rem;
        color: white;
      }
    }
  }
`
