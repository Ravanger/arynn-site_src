import styled from "styled-components"

export const HeaderContentBox = styled.header`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  align-items: center;
  color: #1b8e8a;
  font-size: 2.5rem;
  font-style: italic;

  > span {
    padding: 0 1em;
    flex: 0 1 auto;
  }

  &:before,
  &:after {
    content: "";
    flex: 1 1 auto;
    border-bottom: solid 0.1em #1b8e8a;
    height: 0.1em;
  }
`
