import { useAtom } from "jotai"
import { shopFilterAtom } from "atoms/store"
import { SpanShopHeader, ACTIVE_LINK_VARIABLES } from "./ShopPage.styles"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"

const FILTERS = ["All", "Prints", "Stickers", "Custom", "Artwork", "Originals"]

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
                <li>
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
      {shopFilter || "None"}
    </>
  )
}

export default ShopPage
