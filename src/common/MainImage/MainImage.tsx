import Image from "next/image"

const MainImage = () => (
  <Image
    src="/images/new_self_portrait.svg"
    alt="Arynn self portrait"
    quality={60}
    layout="fixed"
    height={600}
    width={480}
  />
)

export default MainImage
