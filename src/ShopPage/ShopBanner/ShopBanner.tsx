import Image from "next/image"
import Link from "next/link"
import DynamicImage from "src/common/DynamicImage"
import HeaderBar from "src/common/HeaderBar"
import Spacer from "src/common/Spacer"

const ShopBanner = () => (
  <Link href="#">
    <a>
      <div className="animate-scaleExpandIn hover:animate-scaleExpandOut flex flex-col border-1/2 border-pink hover:border-blue shadow-md rounded-xl overflow-hidden lg:flex-row z-40 relative">
        <div className="px-8 py-16">
          <p className="text-pink">
            Are you looking for a signature custom portrait?
          </p>
          <Spacer />
          <HeaderBar>Look no further.</HeaderBar>
          <Spacer />
          <p className="text-pink italic">Click here to get started!</p>
        </div>
        <div className="w-1/2 mx-auto max-h-48 lg:max-h-4">
          <DynamicImage
            src="/images/new_self_portrait.svg"
            alt="Click here for a custom portrait!"
            className="rounded-none"
          />
        </div>
      </div>
    </a>
  </Link>
)

export default ShopBanner
