import { CarouselPropsType } from "./Carousel.types"
import { BsFillTriangleFill } from "react-icons/bs"
import React, { MouseEventHandler, useCallback } from "react"
import { useEmblaCarousel } from "embla-carousel/react"
import Image from "next/image"
import Spacer from "src/common/Spacer"

const PrevNextButton = ({
  onClick,
  dir,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>
  dir: "PREV" | "NEXT"
}) => (
  <button
    onClick={onClick}
    className="text-pink hover:text-blue focus:outline-none"
  >
    <BsFillTriangleFill
      className={`text-3xl transform ${
        dir === "PREV" ? "-rotate-90" : "rotate-90"
      }`}
    />
    <span className="sr-only">
      {dir === "PREV" ? "Previous image" : "Next image"}
    </span>
  </button>
)

const EmblaSlide = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="embla__slide flex-nochange-full transition-transform duration-300 transform scale-90 sm:flex-nochange-3/4">
      {children}
    </div>
  )
}

const Carousel = (props: CarouselPropsType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    inViewThreshold: 100,
    selectedClass: "scale-100",
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla flex px-2 sm:p-0">
      <PrevNextButton onClick={scrollPrev} dir="PREV" />
      <Spacer axis="HORIZONTAL" size="1rem" />
      <div className="embla__viewport w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex select-none">
          {props.images.map((image) => (
            <EmblaSlide key={image.name + image.id}>
              <Image
                src={image.url.split("/").pop() || ""}
                alt={image.name + image.id}
                layout="responsive"
                width={600}
                height={600}
                objectFit="cover"
              />
            </EmblaSlide>
          ))}
        </div>
      </div>
      <Spacer axis="HORIZONTAL" size="1rem" />
      <PrevNextButton onClick={scrollNext} dir="NEXT" />
    </div>
  )
}

export default Carousel
