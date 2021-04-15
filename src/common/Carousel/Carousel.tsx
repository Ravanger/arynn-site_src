import { CarouselPropsType } from "./Carousel.types"
import { BsFillTriangleFill } from "react-icons/bs"
import React, { MouseEventHandler, useCallback } from "react"
import { useEmblaCarousel } from "embla-carousel/react"
import Image from "next/image"

const PrevNextButton = ({
  onClick,
  dir,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>
  dir: "PREV" | "NEXT"
}) => (
  <button onClick={onClick}>
    <BsFillTriangleFill
      className={`absolute text-pink hover:text-blue transform ${
        dir === "PREV" ? "left-12 -rotate-90" : "right-12 rotate-90"
      } md:text-3xl sm:static`}
    />
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
    <div className="embla flex">
      <PrevNextButton onClick={scrollPrev} dir="PREV" />
      <div className="embla__viewport w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex select-none">
          {props.images.map((image) => (
            <EmblaSlide key={image.name + image.id}>
              <Image
                src={image.url}
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
      <PrevNextButton onClick={scrollNext} dir="NEXT" />
    </div>
  )
}

export default Carousel
