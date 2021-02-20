import styled from "styled-components"

export const APrevNextButton = styled.a`
  color: #e27996;
  transform: rotate(var(--nextPrevRotate));

  :hover {
    color: #1b8e8a;
  }
`

export const PREV_BUTTON_VARIABLES = {
  ["--nextPrevRotate" as any]: "-90deg",
}

export const NEXT_BUTTON_VARIABLES = {
  ["--nextPrevRotate" as any]: "90deg",
}
