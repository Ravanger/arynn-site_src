import ShopPage from "src/ShopPage"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import { getShopItems } from "./api/shopitems"
import { InferGetStaticPropsType } from "next"

export const Shop = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO title="Shop" description="Arynn's Shop" url="/shop" />
      <ShopPage shopItems={props.shopItems} />
    </>
  )
}

export const getStaticProps = async () => {
  const shopItems = await getShopItems()

  return {
    props: { shopItems },
  }
}

Shop.getLayout = getLayout

export default Shop
