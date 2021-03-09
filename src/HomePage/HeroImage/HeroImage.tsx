import Image from "next/image"

const HeroImage = () => (
  <div className="absolute bottom-0 max-h-6/10 overflow-hidden">
    <Image
      src="/images/new_self_portrait.svg"
      alt="Arynn self portrait"
      quality={60}
      layout="fixed"
      height={600}
      width={480}
    />
  </div>
)

export default HeroImage
