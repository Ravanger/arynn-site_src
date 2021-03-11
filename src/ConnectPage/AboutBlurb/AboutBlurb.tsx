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
  const styledLi = (child: React.ReactNode) => (
    <li className="p-4 text-center bg-blue hover:bg-pink active:bg-blue-light rounded-2xl text-2xl text-white">
      {child}
    </li>
  )

  const headerText = (text: string) => (
    <h2 className="text-pink text-2xl text-center md:text-left">{text}</h2>
  )

  return (
    <div className="grid w-full items-stretch justify-items-stretch gap-8 grid-cols-1 md:grid-rows-2 md:grid-cols-2/3 md:children:first:row-span-2">
      <ResponsiveImage src="/images/new_self_portrait.svg" alt="Arynn" />
      <main>
        {headerText("My name is Arynn")}
        <Spacer size="1rem" />
        <p className="text-lg text-justify">
          This is a blurb about me, I don’t know what to write right now because
          I am very tired and writing about yourself is very difficult. Words.
          Hi Boris. I bet you’re reading this because I wont update this. Can
          you make me a cup of tea? I love you. Keep being you.
        </p>
        <Spacer size="1rem" />
      </main>
      <div className="self-end">
        {headerText("@artsyarynn across all platforms!")}
        <Spacer size="2rem" />
        <ul className="flex flex-row flex-nowrap justify-between">
          <a
            href="http://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {styledLi(<FaFacebookF />)}
          </a>
          <a
            href="http://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {styledLi(<FaInstagram />)}
          </a>
          <a
            href="http://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {styledLi(<FaTwitter />)}
          </a>
          <a
            href="http://www.hotmail.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {styledLi(<FaEnvelope />)}
          </a>
          <a
            href="http://www.patreon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {styledLi(<FaPatreon />)}
          </a>
        </ul>
      </div>
    </div>
  )
}

export default AboutBlurb
