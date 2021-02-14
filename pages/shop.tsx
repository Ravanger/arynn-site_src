import ShopPage from "src/ShopPage"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { SHOP_ITEMS_MOCK_DATA } from "util/sampleData"

const Shop = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO title="Shop" description="Arynn's Shop" url="/shop" />
      <ShopPage shopItems={props.shopItems} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { shopItems: SHOP_ITEMS_MOCK_DATA },
    revalidate: 600,
  }
}

Shop.getLayout = getLayout

export default Shop
