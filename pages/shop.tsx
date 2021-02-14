import ShopPage from "src/ShopPage"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import { InferGetStaticPropsType } from "next"
import { ShopItemType } from "src/ShopPage/ShopPage.types"

export const Shop = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO title="Shop" description="Arynn's Shop" url="/shop" />
      <ShopPage shopItems={props.shopItems} />
    </>
  )
}

export const getStaticProps = async () => {
  const shopItems: ShopItemType[] = [
    {
      title: "Custom portrait",
      image: "http://placekitten.com/500/500",
      price: "35+",
      type: "Custom",
    },
    {
      title: "Sticker package",
      image: "http://placekitten.com/400/400",
      price: "8",
      type: "Stickers",
    },
    {
      title: "Original Painting Title",
      image: "http://placekitten.com/450/450",
      price: "300",
      type: "Originals",
    },
    {
      title: "Custom portrait",
      image: "http://placekitten.com/600/600",
      price: "35+",
      type: "Custom",
    },
    {
      title: "Sticker package",
      image: "http://placekitten.com/550/333",
      price: "8",
      type: "Stickers",
    },
    {
      title: "Original Painting Title",
      image: "http://placekitten.com/375/375",
      price: "300",
      type: "Artwork",
    },
    {
      title: "Custom portrait",
      image: "http://placekitten.com/425/300",
      price: "35+",
      type: "Custom",
    },
    {
      title: "Sticker package",
      image: "http://placekitten.com/475/475",
      price: "8",
      type: "Stickers",
    },
    {
      title: "Original Painting Title",
      image: "http://placekitten.com/525/500",
      price: "300",
      type: "Originals",
    },
    {
      title: "Custom portrait",
      image: "http://placekitten.com/575/500",
      price: "35+",
      type: "Custom",
    },
    {
      title: "Sticker package",
      image: "http://placekitten.com/350/500",
      price: "8",
      type: "Stickers",
    },
    {
      title: "Original Painting Title",
      image: "http://placekitten.com/666/666",
      price: "300",
      type: "Artwork",
    },
  ]

  return {
    props: { shopItems },
    revalidate: 600,
  }
}

Shop.getLayout = getLayout

export default Shop
