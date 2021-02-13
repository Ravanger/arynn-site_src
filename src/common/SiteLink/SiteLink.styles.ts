import styled from "styled-components"

export const SpanLink = styled.span`
  font-size: var(--siteLinkFontSize, 1em);
  font-weight: var(--siteLinkFontWeight, normal);
  color: var(--siteLinkSelectedColor, #e27996);
  font-style: var(--siteLinkSelectedFontStyle, normal);
  padding: 0 0.25em;
  cursor: pointer;
  white-space: nowrap;

  :hover {
    color: #1b8e8a;
  }
`

export const PRIMARY_LINK_VARIABLES = {
  ["--siteLinkFontSize" as any]: "1.5em",
  ["--siteLinkFontWeight" as any]: "bold",
}

export const CURRENT_LINK_VARIABLES = {
  ["--siteLinkSelectedColor" as any]: "#1b8e8a",
  ["--siteLinkSelectedFontStyle" as any]: "italic",
}
