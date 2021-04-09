import { ShopPageType } from "./ShopPage.types"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import ShopItems from "./ShopItems"
import { Fragment } from "react"
import { IoMenu, IoTriangle } from "react-icons/io5"

const ShopPage = (props: ShopPageType) => {
  return (
    <>
      <div>
        <IoTriangle
          className="text-pink inline-block transform translate-y-1 lg:hidden"
          size="1.5rem"
        />
        <div
          className={`bg-pink px-6 py-4 mx-auto shadow-md ${
            props.isShopMenuOpen ? "w-48 rounded-t-xl2" : "w-min rounded-xl2"
          } lg:w-full lg:bg-white lg:shadow-none`}
          ref={props.shopMenuRef}
        >
          <HeaderBar
            isMenu
            noHr
            hrClassName="hidden lg:block lg:flex-grow lg:flex-shrink lg:border-15 lg:border-blue lg:border-solid"
          >
            <button
              className="cursor-pointer text-center text-white hover:text-blue-light w-auto align-middle lg:hidden"
              onClick={() => {
                props.setIsShopMenuOpen(!props.isShopMenuOpen)
              }}
            >
              <IoMenu size="2rem" className="" />
            </button>
            <ul
              className={`${
                props.isShopMenuOpen ? "flex" : "hidden"
              } absolute z-10 flex-col flex-nowrap right-0 left-0 mx-auto bg-pink w-48 rounded-b-xl2 space-y-2 py-4 lg:flex lg:flex-row lg:static lg:space-x-3 lg:space-y-0 lg:w-full lg:py-0 lg:bg-white`}
            >
              {props.shopFiltersList.map((filter, index) => {
                return (
                  <Fragment key={filter + index}>
                    <li>
                      <button
                        onClick={() => {
                          props.setShopFilter(filter)
                          props.setIsShopMenuOpen(false)
                        }}
                        className={`font-bold border-0 cursor-pointer text-lg text-white hover:text-blue-light lg:hover:text-pink lg:text-2xl ${
                          filter === props.shopFilter
                            ? "italic lg:text-pink"
                            : "lg:text-blue"
                        }`}
                      >
                        {filter || "All"}
                      </button>
                    </li>
                    <HeaderBar hrClassName="border-white w-24 mx-auto border-15 lg:hidden" />
                  </Fragment>
                )
              })}
            </ul>
          </HeaderBar>
        </div>
      </div>
      <Spacer size="2rem" />
      <ShopItems shopFilter={props.shopFilter} shopItems={props.shopItems} />
    </>
  )
}

export default ShopPage
