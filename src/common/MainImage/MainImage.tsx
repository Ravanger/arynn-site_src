import Image from "next/image"

const src = "/images/new_self_portrait.svg"

const MainImage = () => (
  <Image
    src={src}
    alt="Arynn self portrait"
    quality={60}
    layout="intrinsic"
    height={600}
    width={480}
  />
)

export default MainImage
