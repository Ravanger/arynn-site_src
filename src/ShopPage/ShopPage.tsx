import { useAtom } from "jotai"
import { shopFilterAtom } from "atoms/store"
import { SpanShopHeader, ACTIVE_LINK_VARIABLES } from "./ShopPage.styles"
import { ShopPageType } from "./ShopPage.types"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import ShopItems from "./ShopItems"

const FILTERS = ["", "Prints", "Stickers", "Custom", "Artwork", "Originals"]

const ShopPage = (props: ShopPageType) => {
  const [shopFilter, setShopFilter] = useAtom(shopFilterAtom)

  return (
    <>
      <SpanShopHeader>
        <HeaderBar>
          <ul>
            {FILTERS.map((filter, index) => {
              return (
                <li key={filter + index}>
                  <button
                    onClick={() => {
                      setShopFilter(filter)
                    }}
                    style={{
                      ...(filter === shopFilter && ACTIVE_LINK_VARIABLES),
                    }}
                  >
                    {filter || "All"}
                  </button>
                </li>
              )
            })}
          </ul>
        </HeaderBar>
      </SpanShopHeader>
      <Spacer size="2rem" />
      <ShopItems shopFilter={shopFilter} shopItems={props.shopItems} />
    </>
  )
}

export default ShopPage
