import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPatreon,
} from "react-icons/fa"
import Spacer from "src/common/Spacer"
import ResponsiveImage from "src/common/ResponsiveImage"
import { AboutBlurbType } from "./AboutBlurb.types"

const AboutBlurb = (props: AboutBlurbType) => {
  const styledLi = (child: React.ReactNode) => (
    <li className="text-center bg-blue hover:bg-pink active:bg-blue-light text-white rounded-xl p-3 text-sm md:text-2xl md:p-4 md:rounded-2xl">
      {child}
    </li>
  )

  const headerText = (text: string) => (
    <h2 className="text-pink text-center text- md:text-left md:text-2xl">
      {text}
    </h2>
  )

  return (
    <div className="grid w-full items-stretch justify-items-stretch gap-8 grid-cols-1 md:grid-rows-2 md:grid-cols-2/3 md:children:first:row-span-2">
      <ResponsiveImage src="/images/new_self_portrait.svg" alt="Arynn" />
      <main>
        <h2 className="text-pink text-center text-2xl md:text-left">
          My name is Arynn
        </h2>
        <Spacer size="1rem" />
        <p className="text-center text-sm md:text-lg md:text-left">
          This is a blurb about me, I don’t know what to write right now because
          I am very tired and writing about yourself is very difficult. Words.
          Hi Boris. I bet you’re reading this because I wont update this. Can
          you make me a cup of tea? I love you. Keep being you.
        </p>
      </main>
      <div className="self-end">
        <h2 className="text-pink text-center text-xs md:text-left md:text-2xl">
          @artsyarynn across all platforms!
        </h2>
        <Spacer size="2rem" />
        <ul className="flex flex-row flex-nowrap justify-between">
          {props.socialLinks.facebook && (
            <a
              href={props.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              {styledLi(<FaFacebookF />)}
            </a>
          )}
          {props.socialLinks.instagram && (
            <a
              href={props.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {styledLi(<FaInstagram />)}
            </a>
          )}
          {props.socialLinks.twitter && (
            <a
              href={props.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              {styledLi(<FaTwitter />)}
            </a>
          )}
          {props.socialLinks.email && (
            <a
              href={`mailto:${props.socialLinks.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {styledLi(<FaEnvelope />)}
            </a>
          )}
          {props.socialLinks.patreon && (
            <a
              href={props.socialLinks.patreon}
              target="_blank"
              rel="noopener noreferrer"
            >
              {styledLi(<FaPatreon />)}
            </a>
          )}
        </ul>
      </div>
    </div>
  )
}

export default AboutBlurb
