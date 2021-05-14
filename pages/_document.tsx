import Document, { Html, Head, Main, NextScript } from "next/document"
import NoScript from "src/common/NoScript"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <NoScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
