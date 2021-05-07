import { NextSeo } from "next-seo"
import Head from "next/head"
import { SEOProps } from "./SEO.types"

const SEO = (props: SEOProps) => {
  const SITE_URL = "https://www.arynn.ca"
  const SITE_NAME = "Arynn"

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/images/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#6CBEBB" />
        <meta
          name="msapplication-config"
          content="/images/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#6CBEBB" />
        {/* ~Icons */}
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={SITE_URL + props.url}
        openGraph={{
          url: SITE_URL + props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: "/images/new_self_portrait.png",
              width: 600,
              height: 480,
              alt: SITE_NAME,
            },
          ],
          site_name: SITE_NAME,
        }}
      />
    </>
  )
}
export default SEO
