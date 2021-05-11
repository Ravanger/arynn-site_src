import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import HeaderBar from "src/common/HeaderBar"
import { DropdownSliderPropsType } from "./Questions.types"
import { BsFillTriangleFill } from "react-icons/bs"
import Spacer from "src/common/Spacer"
import { socialLinks } from "src/common/socials"

const DropdownQuestion = (props: DropdownSliderPropsType) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <span
        className="flex flex-row items-baseline cursor-pointer text-pink font-bold text-sm sm:text-xl md:text-2xl"
        onClick={() => setOpen(!isOpen)}
      >
        <motion.span
          className="transform rotate-90"
          initial={false}
          animate={isOpen ? { rotate: "180deg" } : { rotate: "90deg" }}
        >
          <BsFillTriangleFill size="0.8rem" />
        </motion.span>
        <Spacer axis="HORIZONTAL" size="0.5rem" />
        <span className="flex flex-row flex-nowrap items-center">
          <span>{props.question}</span>
          <Spacer axis="HORIZONTAL" size="0.5rem" />
          <hr className="w-4 sm:w-12 h-0.5 bg-pink border-none" />
        </span>
      </span>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={props.question}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", scaleY: 1 },
              collapsed: { opacity: 0, height: 0, scaleY: 0 },
            }}
            className="text-sm sm:text-base"
          >
            <Spacer />
            {props.answer}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

const Questions = () => (
  <div className="text-left">
    <HeaderBar>questions n' answers</HeaderBar>
    <Spacer size="2rem" />
    <DropdownQuestion
      question="can i return this?"
      answer="i cannot accommodate returns or exchanges, but if there's an issue with your order please let know! i'm a reasonable human being i swear."
    />
    <Spacer />
    <DropdownQuestion
      question="how long will my order take?"
      answer="custom items require different amounts of time. regular pre-made items will usually ship within a couple of days, but please allow me a week just in case!"
    />
    <Spacer />
    <DropdownQuestion
      question="package liability"
      answer="once a package leaves my hands it's out of my hands, girl."
    />
    <Spacer />
    <DropdownQuestion
      question="still have unanswered questions?"
      answer={`feel free to email me at ${socialLinks.email} or contact me through my social media pages. i'll be around.`}
    />
  </div>
)

export default Questions
