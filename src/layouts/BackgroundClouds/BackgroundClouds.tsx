import { motion } from "framer-motion"

const BackgroundClouds = () => {
  return (
    <motion.div
      className="absolute -z-90 h-full w-full overflow-hidden bg-clouds bg-repeat"
      animate={{ y: 10 }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  )
}

export default BackgroundClouds
