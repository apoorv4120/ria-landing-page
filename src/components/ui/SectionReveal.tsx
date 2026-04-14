import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function SectionReveal({ children, delay = 0, className = '' }: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
