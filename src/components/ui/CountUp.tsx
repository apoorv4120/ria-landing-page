import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 1500,
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out-cubic
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(end)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
