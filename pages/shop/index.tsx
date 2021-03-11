import ShopPage from "src/ShopPage"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { getShopItems } from "util/dataFetching"

const Shop = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO title="Shop" description="Arynn's Shop" url="/shop" />
      <ShopPage shopItems={props.shopItems} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const shopItems = await getShopItems()

    return {
      props: { shopItems },
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

Shop.getLayout = getLayout

export default Shop
