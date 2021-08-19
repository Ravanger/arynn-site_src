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
import { motion } from "framer-motion"
import { aboutStrings } from "data/strings"

const AboutBlurb = (props: AboutBlurbType) => {
  const styledContactButton = (child: React.ReactNode) => (
    <div className="text-center bg-blue hover:bg-pink active:bg-blue-light text-white rounded-xl p-3 text-lg md:text-2xl md:p-4 md:rounded-2xl">
      {child}
    </div>
  )

  return (
    <div className="grid w-full items-stretch justify-items-stretch gap-8 grid-cols-1 md:grid-rows-2 md:grid-cols-2/3 md:children:first:row-span-2">
      <ResponsiveImage src="/images/about_image.jpg" alt="Arynn" isLocalImage />
      <main>
        <h2 className="text-pink text-center text-2xl md:text-left">
          {aboutStrings.blurbTitle || "My name is Arynn"}
        </h2>
        <Spacer size="1rem" />
        <p className="text-center text-sm md:text-lg md:text-left">
          {aboutStrings.blurbDescription ||
            `This is a blurb about me, I don’t know what to write right now because
          I am very tired and writing about yourself is very difficult. Words.`}
        </p>
      </main>
      <div className="self-end">
        <h2 className="text-pink text-center text-xs md:text-left md:text-2xl">
          {aboutStrings.socialsShoutout || `@artsyarynn across all platforms!`}
        </h2>
        <Spacer size="2rem" />
        <div className="flex flex-row flex-nowrap justify-around">
          {props.socialLinks.facebook && (
            <motion.a
              href={props.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.05 }}
            >
              {styledContactButton(<FaFacebookF />)}
              <span className="sr-only">Opens in new window</span>
            </motion.a>
          )}
          {props.socialLinks.instagram && (
            <motion.a
              href={props.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.05 }}
            >
              {styledContactButton(<FaInstagram />)}
              <span className="sr-only">Opens in new window</span>
            </motion.a>
          )}
          {props.socialLinks.twitter && (
            <motion.a
              href={props.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.05 }}
            >
              {styledContactButton(<FaTwitter />)}
              <span className="sr-only">Opens in new window</span>
            </motion.a>
          )}
          {props.socialLinks.email && (
            <motion.a
              href={`mailto:${props.socialLinks.email}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.05 }}
            >
              {styledContactButton(<FaEnvelope />)}
              <span className="sr-only">Opens in new window</span>
            </motion.a>
          )}
          {props.socialLinks.patreon && (
            <motion.a
              href={props.socialLinks.patreon}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.05 }}
            >
              {styledContactButton(<FaPatreon />)}
              <span className="sr-only">Opens in new window</span>
            </motion.a>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutBlurb
