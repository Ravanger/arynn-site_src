import styled from "styled-components"

export const DivAbout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;

  > div {
    background-color: #1b8e8a;
    border-radius: 2rem;
    width: 100%;
    min-width: 20rem;
  }

  > main {
    color: #1b8e8a;

    > h2 {
      color: #e27996;
      font-size: 1.6rem;
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
