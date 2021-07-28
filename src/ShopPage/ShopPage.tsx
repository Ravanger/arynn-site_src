import { ShopPageType } from "./ShopPage.types"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"
import ShopItems from "./ShopItems"
import Menu from "src/common/Menu"
import ShopBanner from "./ShopBanner"
import { motion } from "framer-motion"
import Link from "next/link"

const ShopPage = (props: ShopPageType) => {
  return (
    <>
      <ShopBanner />
      <Spacer />
      <div className="w-full flex flex-col items-center">
        <Menu
          isMenuOpen={props.isShopMenuOpen}
          setMenuOpen={props.setIsShopMenuOpen}
          menuRef={props.shopMenuRef}
          zindex="z-30"
          shopMenu
          role="menu"
          isMobile={props.isMobile}
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
                  <motion.button
                    onClick={() => {
                      props.setShopFilter(filter)
                      props.setIsShopMenuOpen(false)
                    }}
                    className={`font-bold border-0 text-lg text-white focus:outline-none lg:hover:text-pink lg:text-2xl lg:leading-10 ${
                      filter === props.shopFilter
                        ? "italic lg:text-pink"
                        : "lg:text-blue"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.05 }}
                  >
                    {filter || "All"}
                  </motion.button>
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
      <Link href="/connect">
        <a className="text-pink hover:text-blue active:text-blue-light text-sm">
          {"Can't find what you're looking for? Send me an email!"}
        </a>
      </Link>
    </>
  )
}

export default ShopPage
