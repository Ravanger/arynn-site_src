import styled from "styled-components"
import { SpanShopHeader } from "src/ShopPage/ShopPage.styles"

export const HeaderContentBox = styled.header`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  justify-content: center;
  width: 100%;
  align-items: center;
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

  ${SpanShopHeader} & {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
  }
`

export const HrHeader = styled.hr`
  border: solid 0.1em #1b8e8a;
  width: 100%;
`
