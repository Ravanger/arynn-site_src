import { useAtom } from "jotai"
import { shopFilterAtom } from "atoms/store"
import { ShopPageType } from "./ShopPage.types"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import ShopItems from "./ShopItems"

const SHOP_FILTERS = [
  "",
  "Prints",
  "Stickers",
  "Custom",
  "Artwork",
  "Originals",
]

const ShopPage = (props: ShopPageType) => {
  const [shopFilter, setShopFilter] = useAtom(shopFilterAtom)

  return (
    <>
      <HeaderBar isMenu>
        <ul className="flex flex-row flex-nowrap space-x-3">
          {SHOP_FILTERS.map((filter, index) => {
            return (
              <li key={filter + index} className="">
                <button
                  onClick={() => {
                    setShopFilter(filter)
                  }}
                  className={`font-bold border-0 cursor-pointer hover:text-pink ${
                    filter === shopFilter && "text-pink italic"
                  }`}
                >
                  {filter || "All"}
                </button>
              </li>
            )
          })}
        </ul>
      </HeaderBar>
      <Spacer size="2rem" />
      <ShopItems shopFilter={shopFilter} shopItems={props.shopItems} />
    </>
  )
}

export default ShopPage
