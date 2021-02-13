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
              url: "/images/new_self_portrait.svg",
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
