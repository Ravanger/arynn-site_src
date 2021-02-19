import { DivAbout } from "./AboutBlurb.styles"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPatreon,
} from "react-icons/fa"
import Spacer from "src/common/Spacer"
import ResponsiveImage from "src/common/ResponsiveImage"

const AboutBlurb = () => {
  return (
    <DivAbout>
      <ResponsiveImage src="http://placekitten.com/800/800" alt="Arynn" />
      <main>
        <h2>My name is Arynn</h2>
        <Spacer size="1rem" />
        <p>
          This is a blurb about me, I don’t know what to write right now because
          I am very tired and writing about yourself is very difficult. Words.
          Hi Boris. I bet you’re reading this because I wont update this. Can
          you make me a cup of tea? I love you. Keep being you.
        </p>
        <Spacer size="1rem" />
        <h2>@artsyarynn across all platforms!</h2>
      </main>
      <ul>
        <a
          href="http://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaFacebookF />
          </li>
        </a>
        <a
          href="http://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaInstagram />
          </li>
        </a>
        <a
          href="http://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaTwitter />
          </li>
        </a>
        <a
          href="http://www.hotmail.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaEnvelope />
          </li>
        </a>
        <a
          href="http://www.patreon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaPatreon />
          </li>
        </a>
      </ul>
    </DivAbout>
  )
}

export default AboutBlurb
