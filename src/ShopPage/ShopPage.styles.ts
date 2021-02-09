import styled from "styled-components"

export const SpanShopHeader = styled.span`
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    > li {
      + li {
        margin-left: 0.8rem;
      }

      > button {
        background: none;
        border: 0;
        cursor: pointer;
        color: var(--activeLink, #1b8e8a);
      }
    }
  }
`

export const ACTIVE_LINK_VARIABLES = {
  ["--activeLink" as any]: "#e27996",
}
