import styled from "styled-components"

export const DivAbout = styled.div`
  display: grid;
  width: 100%;
  align-items: stretch;
  justify-items: stretch;
  grid-gap: 2rem;
  grid-template-areas:
    "picture"
    "blurb"
    "socials";

  @media (min-width: 48rem) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 2fr 3fr;
    grid-template-areas:
      "picture blurb"
      "picture socials";
  }

  > div {
    grid-area: picture;
  }

  > main {
    grid-area: blurb;
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
  }

  > ul {
    grid-area: socials;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-end;

    li {
      padding: 0.5em;
      text-align: center;
      background-color: #1b8e8a;
      border-radius: 1rem;
      font-size: 1.5rem;
      color: white;
    }
  }
`
