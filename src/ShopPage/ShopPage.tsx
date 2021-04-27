import { ShopPageType } from "./ShopPage.types"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import ShopItems from "./ShopItems"
import Menu from "src/common/Menu"

const ShopPage = (props: ShopPageType) => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Menu
          isMenuOpen={props.isShopMenuOpen}
          setMenuOpen={props.setIsShopMenuOpen}
          menuRef={props.shopMenuRef}
          zindex="z-40"
          shopMenu
          role="menu"
        >
          <HeaderBar
            isMenu
            noHr
            hrClassName="hidden lg:block lg:flex-grow lg:flex-shrink lg:bg-blue lg:h-0.5 lg:border-none"
            contentClassName="lg:space-x-4"
          >
            {props.shopFiltersList.map((filter, index) => {
              return (
                <div key={filter + index} className="lg:inline-block">
                  <button
                    onClick={() => {
                      props.setShopFilter(filter)
                      props.setIsShopMenuOpen(false)
                    }}
                    className={`font-bold border-0 text-lg text-white transform animate-scaleExpandIn hover:animate-scaleExpandOut focus:outline-none lg:hover:text-pink lg:text-2xl lg:leading-10 ${
                      filter === props.shopFilter
                        ? "italic lg:text-pink"
                        : "lg:text-blue"
                    }`}
                  >
                    {filter || "All"}
                  </button>
                  <Spacer className="lg:hidden" />
                  <HeaderBar hrClassName="w-24 mx-auto bg-white border-none h-0.5 lg:hidden" />
                  <Spacer className="lg:hidden" />
                </div>
              )
            })}
          </HeaderBar>
        </Menu>
      </div>
      <Spacer size="2rem" />
      <ShopItems shopFilter={props.shopFilter} shopItems={props.shopItems} />
      <Spacer size="3rem" />
      <p className="text-pink text-sm">
        Can't find what you're looking for? Send me an email!
      </p>
    </>
  )
}

export default ShopPage
