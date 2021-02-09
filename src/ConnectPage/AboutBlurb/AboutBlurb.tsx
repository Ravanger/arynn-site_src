import Spacer from "src/common/Spacer"
import { DivAbout } from "./AboutBlurb.styles"

const AboutBlurb = () => {
  return (
    <DivAbout>
      <div></div>
      <Spacer size="2rem" axis="HORIZONTAL" />
      <main>
        <h2>My name is Arynn</h2>
        <Spacer size="2rem" />
        <p>
          This is a blurb about me, I don’t know what to write right now because
          I am very tired and writing about yourself is very difficult. Words.
          Hi Boris. I bet you’re reading this because I wont update this. Can
          you make me a cup of tea? I love you. Keep being you.
        </p>
        <Spacer size="2rem" />
        <h2>@artsyarynn across all platforms!</h2>
        <Spacer size="2rem" />
        <div>
          <div>FB</div>
          <div>IG</div>
          <div>TW</div>
          <div>EM</div>
          <div>PT</div>
        </div>
      </main>
    </DivAbout>
  )
}

export default AboutBlurb
