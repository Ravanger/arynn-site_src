import { css } from "styled-components"

export const fonts = css`
  /* noto-serif-regular - latin */
  @font-face {
    font-family: "Noto Serif";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(""),
      url("/fonts/noto-serif-v9-latin-regular.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("/fonts/noto-serif-v9-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* noto-serif-italic - latin */
  @font-face {
    font-family: "Noto Serif";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local(""),
      url("/fonts/noto-serif-v9-latin-italic.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("/fonts/noto-serif-v9-latin-italic.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* noto-serif-700 - latin */
  @font-face {
    font-family: "Noto Serif";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(""), url("/fonts/noto-serif-v9-latin-700.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("/fonts/noto-serif-v9-latin-700.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* noto-serif-700italic - latin */
  @font-face {
    font-family: "Noto Serif";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local(""),
      url("/fonts/noto-serif-v9-latin-700italic.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("/fonts/noto-serif-v9-latin-700italic.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`
