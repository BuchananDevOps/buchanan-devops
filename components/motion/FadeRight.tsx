import { useRef } from "react"

import { motion, useInView } from "framer-motion"

export const FadeRight = ({
  children,
  className,
  noHorizontal,
  delay,
  viewTriggerOffset,
}: {
  children: React.ReactNode
  className?: string
  noHorizontal?: boolean
  delay?: number
  viewTriggerOffset?: boolean
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: false,
    margin: viewTriggerOffset ? "-128px" : "0px",
  })

  const fadeRightVariants = {
    initial: {
      opacity: 1,
      x: noHorizontal ? 0 : -5,
    },
    animate: {
      opacity: 1,
      x: 6,
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={inView ? "animate" : "initial"}
      className={className}
      initial={false}
      transition={{
        duration: 1,
        delay: delay || 0,
      }}
      variants={fadeRightVariants}
    >
      {children}
    </motion.div>
  )
}
