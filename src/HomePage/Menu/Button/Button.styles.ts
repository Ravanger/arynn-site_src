import styled from "styled-components"

export const ButtonBubble = styled.a`
  background-color: white;
  color: #e27996;
  font-size: 2.5rem;
  display: flex;
  padding: 2rem;
  width: 16rem;
  min-width: 16rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1.5rem;
  position: relative;
  top: 16rem;

  :hover {
    color: #1b8e8a;
  }

  + a {
    margin-left: 8rem;
  }

  :nth-child(2) {
    top: 8rem;
  }
`
