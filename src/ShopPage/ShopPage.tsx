import { useAtom } from "jotai"
import { shopFilterAtom } from "atoms/store"
import { SpanShopHeader, ACTIVE_LINK_VARIABLES } from "./ShopPage.styles"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import ShopItems from "./ShopItems"

const FILTERS = ["All", "Prints", "Stickers", "Custom", "Artwork", "Originals"]
const shopList: {
  title: string
  image: string
  price: string
  type: string
}[] = [
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

const ShopPage = () => {
  const [shopFilter, setShopFilter] = useAtom(shopFilterAtom)

  return (
    <>
      <SpanShopHeader>
        <HeaderBar>
          <ul>
            {FILTERS.map((filter) => {
              let currentFilter = filter
              if (currentFilter === "All") currentFilter = ""

              return (
                <li key={filter}>
                  <button
                    onClick={() => {
                      setShopFilter(currentFilter)
                    }}
                    style={{
                      ...(currentFilter === shopFilter &&
                        ACTIVE_LINK_VARIABLES),
                    }}
                  >
                    {filter}
                  </button>
                </li>
              )
            })}
          </ul>
        </HeaderBar>
      </SpanShopHeader>
      <Spacer size="2rem" />
      <ShopItems shopFilter={shopFilter} shopItems={shopList} />
    </>
  )
}

export default ShopPage
