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
        border: 0;
        cursor: pointer;
        color: var(--activeLinkColor, #1b8e8a);
        font-style: var(--activeLinkFontStyle, normal);
      }
    }
  }
`

export const ACTIVE_LINK_VARIABLES = {
  ["--activeLinkColor" as any]: "#e27996",
  ["--activeLinkFontStyle" as any]: "italic",
}
