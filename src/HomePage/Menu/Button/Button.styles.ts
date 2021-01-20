import styled, { css } from "styled-components"

export const ButtonBubble = styled.a`
  border: thin solid black;
  display: flex;
  padding: 2rem;
  margin: 0 2rem;
  width: 10rem;
  height: 6rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  position: relative;

  ${(props: { isCenterButton: boolean }) =>
    props.isCenterButton
      ? css`
          top: 4rem;
        `
      : css`
          top: 12rem;
        `}
`
