import styled, { css } from "styled-components"

export const ButtonBubble = styled.a`
  background-color: white;
  color: #e27996;
  font-size: 2rem;
  display: flex;
  padding: 2rem;
  margin: 0 2rem;
  width: 12rem;
  height: 6rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1.5rem;
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
