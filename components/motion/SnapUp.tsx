import { useRef } from "react"

import { motion, useInView } from "framer-motion"

export const SnapUp = ({
  children,
  className,
  delay,
  position,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  position?: number
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: false,
  })

  return (
    <motion.div
      ref={ref}
      animate={
        inView && {
          y: [position ? position : 24, 0],
        }
      }
      className={className}
      initial={false}
      transition={{
        duration: 1,
        delay: delay || 0,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  )
}
