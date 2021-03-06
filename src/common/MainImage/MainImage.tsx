import Image from "next/image"

const src = "/images/new_self_portrait.png"

const MainImage = () => (
  <Image
    src={src}
    alt="Arynn self portrait"
    quality={100}
    loader={({ src, width, quality }) =>
      `${src}?w=${width}&q=${quality || 100}`
    }
    layout="intrinsic"
    height={600}
    width={480}
    className="rounded-b-none -bottom-4"
  />
)

export default MainImage
