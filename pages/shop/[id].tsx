import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import SEO from "src/common/SEO"
import ShopPiecePage from "src/ShopPage/ShopPiecePage"
import { getShopItems } from "util/dataFetching"
import { readFile, writeFile } from "util/cache"
import { Product } from "use-shopping-cart"
import {
  addProductToCart,
  getProductQuantityInCart,
  itemExistsInCart,
} from "util/cart"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { cartAtom } from "atoms/store"
import { useAtom } from "jotai"

const ShopPiece = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  const [wantedQuantity, setWantedQuantity] = useState(1)
  const [quantityInCart, setQuantityInCart] = useState(0)
  const [cartInfo, setCartInfo] = useAtom(cartAtom)

  useEffect(() => {
    if (props.item.product_data?.metadata.type.toUpperCase() === "CUSTOM")
      router.replace("/shop/custom")
  }, [props.item, router])

  useEffect(() => {
    setQuantityInCart(getProductQuantityInCart(cartInfo.products, props.item))
  }, [cartInfo.products, props.item])

  if (props.errors || !props.item) return <></>
  const shopItem: Product = props.item

  const isCustomType =
    shopItem.product_data?.metadata.type.toUpperCase() === "CUSTOM"

  const canAddToCart =
    !itemExistsInCart(cartInfo.products, shopItem.sku) && !shopItem.isSold

  return isCustomType ? (
    <></>
  ) : (
    <>
      <SEO
        title={"Shop: " + shopItem.name}
        description={`Arynn's Shop - ${shopItem.name}: ${shopItem.description}`}
        url={"/shop/" + shopItem.sku}
      />
      <ShopPiecePage
        item={shopItem}
        addToCartFunc={() => {
          canAddToCart &&
            setCartInfo({
              products: addProductToCart(
                cartInfo.products,
                shopItem,
                wantedQuantity
              ),
              totalPrice: cartInfo.totalPrice + shopItem.price * wantedQuantity,
            })
        }}
        quantityInCart={quantityInCart}
        setWantedQuantity={setWantedQuantity}
        wantedQuantity={wantedQuantity}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    let shopItems: Product[] = await readFile(".shopCache")
    if (shopItems.length <= 0) {
      shopItems = await getShopItems()
      await writeFile(shopItems, ".shopCache")
    }

    const paths = shopItems.map((item) => ({
      params: { id: item.sku },
    }))

    return { paths, fallback: false }
  } catch (err) {
    console.error("Error in ShopPiece.getStaticPaths: ", err)
    return { paths: [], fallback: false }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    let shopItems: Product[] = await readFile(".shopCache")
    if (shopItems.length <= 0) {
      shopItems = await getShopItems()
      await writeFile(shopItems, ".shopCache")
    }

    const id = params?.id
    const item = id && shopItems.find((item) => item.sku === id)

    return id && item
      ? { props: { item } }
      : { props: { errors: "No item found" } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

ShopPiece.getLayout = getLayout

export default ShopPiece
