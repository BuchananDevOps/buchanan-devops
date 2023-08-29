import { useRef } from "react"

import { motion } from "framer-motion"

export const SnapLeft = ({
  children,
  className,
  delay,
}: {
  children: React.ReactNode
  className?: string
  noVertical?: boolean
  delay?: number
  viewTriggerOffset?: boolean
}) => {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      animate={{
        x: [300, 0],
      }}
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
