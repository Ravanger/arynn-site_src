import styled from "styled-components"

export const AMenuLink = styled.a`
  font-size: var(--siteLinkFontSize, 1em);
  font-weight: var(--siteLinkFontWeight, normal);
  color: var(--siteLinkSelected, #e27996);
  padding: 0 0.25em;
  white-space: nowrap;
`

export const PRIMARY_LINK_VARIABLES = {
  ["--siteLinkFontSize" as any]: "1.5em",
  ["--siteLinkFontWeight" as any]: "bold",
}

export const CURRENT_LINK_MAIN_VARIABLES = {
  ["--siteLinkSelected" as any]: "#1b8e8a",
}

export const CURRENT_LINK_SECONDARY_VARIABLES = {
  ["--siteLinkSelected" as any]: "#e27996",
}
