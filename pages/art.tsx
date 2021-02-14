import ArtPage from "src/ArtPage"
import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import { ArtItemType } from "src/ArtPage/ArtPage.types"
import { InferGetStaticPropsType } from "next"

export const Art = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO title="Art" description="Arynn's art" url="/art" />
      <ArtPage artItems={props.artItems} />
    </>
  )
}

export const getStaticProps = async () => {
  const artItems: ArtItemType[] = [
    {
      title: "Paintings portrait",
      image: "http://placekitten.com/500/500",
      type: "Paintings",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Sticker package",
      image: "http://placekitten.com/400/400",
      type: "Comics",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Original Painting Title",
      image: "http://placekitten.com/450/450",
      type: "Digital Art",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Paintings portrait",
      image: "http://placekitten.com/600/600",
      type: "Paintings",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Sticker package",
      image: "http://placekitten.com/550/333",
      type: "Comics",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Original Painting Title",
      image: "http://placekitten.com/375/375",
      type: "Design",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Paintings portrait",
      image: "http://placekitten.com/425/300",
      type: "Paintings",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Sticker package",
      image: "http://placekitten.com/475/475",
      type: "Comics",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Original Painting Title",
      image: "http://placekitten.com/525/500",
      type: "Digital Art",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Paintings portrait",
      image: "http://placekitten.com/575/500",
      type: "Paintings",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Sticker package",
      image: "http://placekitten.com/350/500",
      type: "Comics",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
    {
      title: "Original Painting Title",
      image: "http://placekitten.com/666/666",
      type: "Design",
      description:
        "Woooahhh brrroooo this is a lorem ipsum description and whatnot",
    },
  ]

  return {
    props: { artItems },
    revalidate: 600,
  }
}

Art.getLayout = getLayout

export default Art
