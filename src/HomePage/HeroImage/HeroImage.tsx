import Image from "next/image"
import { DivImage } from "./HeroImage.styles"

const HeroImage = () => (
  <DivImage>
    <Image
      src="/images/new_self_portrait.png"
      alt="Arynn self portrait"
      quality={60}
      layout="fixed"
      height={600}
      width={480}
    />
  </DivImage>
)

export default HeroImage
