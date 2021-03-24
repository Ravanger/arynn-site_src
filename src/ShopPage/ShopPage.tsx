import { useAtom } from "jotai"
import { shopFilterAtom } from "atoms/store"
import { ShopPageType } from "./ShopPage.types"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import ShopItems from "./ShopItems"
import React, { useRef, useState } from "react"
import { IoMenu, IoTriangle } from "react-icons/io5"
import { useClickOutside } from "util/handlers"

const SHOP_FILTERS = ["", "Prints", "Stickers", "Custom", "Originals"]

const ShopPage = (props: ShopPageType) => {
  const [shopFilter, setShopFilter] = useAtom(shopFilterAtom)
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false)
  const shopMenuRef = useRef(null)
  useClickOutside(shopMenuRef, () => setIsShopMenuOpen(false))

  return (
    <>
      <div>
        <IoTriangle
          className="text-pink inline-block transform translate-y-1 lg:hidden"
          size="1.5rem"
        />
        <div
          className={`bg-pink px-6 py-4 mx-auto ${
            isShopMenuOpen ? "w-48 rounded-t-xl2" : "w-min rounded-xl2"
          } lg:w-full lg:bg-white`}
          ref={shopMenuRef}
        >
          <HeaderBar
            isMenu
            noHr
            hrClassName="hidden lg:block lg:flex-grow lg:flex-shrink lg:border-15 lg:border-blue lg:border-solid"
          >
            <button
              className="cursor-pointer text-center text-white hover:text-blue-light w-auto align-middle lg:hidden"
              onClick={() => {
                setIsShopMenuOpen(!isShopMenuOpen)
              }}
            >
              <IoMenu size="2rem" className="" />
            </button>
            <ul
              className={`${
                isShopMenuOpen ? "flex" : "hidden"
              } absolute z-10 flex-col flex-nowrap right-0 left-0 mx-auto bg-pink w-48 rounded-b-xl2 space-y-2 py-4 lg:flex lg:flex-row lg:static lg:space-x-3 lg:space-y-0 lg:w-full lg:py-0 lg:bg-white`}
            >
              {SHOP_FILTERS.map((filter, index) => {
                return (
                  <React.Fragment key={filter + index}>
                    <li className="">
                      <button
                        onClick={() => {
                          setShopFilter(filter)
                        }}
                        className={`font-bold border-0 cursor-pointer text-lg text-white hover:text-blue-light lg:hover:text-pink lg:text-2xl ${
                          filter === shopFilter
                            ? "italic lg:text-pink"
                            : "lg:text-blue"
                        }`}
                      >
                        {filter || "All"}
                      </button>
                    </li>
                    <HeaderBar hrClassName="border-white w-24 mx-auto border-15 lg:hidden" />
                  </React.Fragment>
                )
              })}
            </ul>
          </HeaderBar>
        </div>
      </div>
      <Spacer size="2rem" />
      <ShopItems shopFilter={shopFilter} shopItems={props.shopItems} />
    </>
  )
}

export default ShopPage
