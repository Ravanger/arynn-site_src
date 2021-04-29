import SEO from "src/common/SEO"
import { getLayout } from "src/layouts/MainLayout/MainLayout"
import CustomShopPage from "src/ShopPage/CustomShopPage"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { getShopItems } from "util/dataFetching"
import { Product, useShoppingCart } from "use-shopping-cart"
import { readFile, writeFile } from "util/cache"
import { useState } from "react"
import { getProductBySku, itemIdExistsInCart } from "util/stripe"

const Custom = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (props.errors || !props.customShopPieces) return <></>

  const customShopPieces: Product[] = props.customShopPieces
  if (customShopPieces.length <= 0) return <></>

  const [selectedPieceSku, setSelectedPieceSku] = useState(
    customShopPieces[0].sku
  )
  const [wantedQuantity, setWantedQuantity] = useState(1)
  const { addItem, incrementItem, cartDetails } = useShoppingCart()

  const selectedPiece = getProductBySku(
    selectedPieceSku,
    props.customShopPieces
  )

  return selectedPiece ? (
    <>
      <SEO
        title="Get a custom piece!"
        description="Got something special in mind? Let me know and I'll make it for you!"
        url="/shop/custom"
      />
      <CustomShopPage
        customShopPieces={customShopPieces}
        selectedPiece={selectedPiece}
        setSelectedPieceSku={setSelectedPieceSku}
        addToCartFunc={() =>
          itemIdExistsInCart(cartDetails, selectedPieceSku)
            ? incrementItem(selectedPieceSku, wantedQuantity)
            : addItem(selectedPiece, wantedQuantity)
        }
        quantityInCart={cartDetails[selectedPieceSku]?.quantity}
        setWantedQuantity={setWantedQuantity}
        wantedQuantity={wantedQuantity}
      />
    </>
  ) : (
    <></>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    let shopItems: Product[] = await readFile(".shopCache")
    if (shopItems.length <= 0) {
      shopItems = await getShopItems()
      await writeFile(shopItems, ".shopCache")
    }

    const customShopPieces = shopItems.filter((item) => {
      return item.product_data.metadata.type.toUpperCase() === "CUSTOM"
    })

    return {
      props: { customShopPieces },
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

Custom.getLayout = getLayout

export default Custom
