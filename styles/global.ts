import { createGlobalStyle, css } from "styled-components"

const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  em,
  img,
  strike,
  strong,
  sub,
  sup,
  b,
  u,
  i,
  center,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  caption,
  article,
  aside,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  menu,
  nav,
  section,
  summary,
  time,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`

const GlobalStyle = createGlobalStyle`
  ${reset}
`

export default GlobalStyle
