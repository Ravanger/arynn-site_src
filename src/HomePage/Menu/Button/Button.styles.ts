import styled, { css } from "styled-components"

export const ButtonBubble = styled.a`
  background-color: white;
  color: #e27996;
  font-size: 2.5rem;
  display: flex;
  padding: 2rem;
  margin: 0 4rem;
  width: 16rem;
  min-width: 16rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1.5rem;
  position: relative;

  ${(props: { isCenterButton: boolean }) =>
    props.isCenterButton
      ? css`
          top: 8rem;
        `
      : css`
          top: 16rem;
        `}
`
