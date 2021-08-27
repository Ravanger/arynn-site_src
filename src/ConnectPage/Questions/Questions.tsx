import { AnimatePresence, motion } from "framer-motion"
import { Fragment, useState } from "react"
import HeaderBar from "src/common/HeaderBar"
import { DropdownSliderPropsType } from "./Questions.types"
import { BsFillTriangleFill } from "react-icons/bs"
import Spacer from "src/common/Spacer"
import { questionsAndAnswers } from "data/strings"

const DropdownQuestion = (props: DropdownSliderPropsType) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <span
        className="flex flex-row items-baseline cursor-pointer text-pink group hover:text-blue font-bold text-sm sm:text-xl md:text-2xl"
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
          <hr className="w-4 sm:w-12 h-0.5 bg-pink group-hover:bg-blue border-none" />
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
    <HeaderBar>{"questions n' answers"}</HeaderBar>
    <Spacer size="2rem" />
    {questionsAndAnswers.map((qna) => (
      <Fragment key={qna.question}>
        <DropdownQuestion question={qna.question} answer={qna.answer} />
        <Spacer />
      </Fragment>
    ))}
  </div>
)

export default Questions
