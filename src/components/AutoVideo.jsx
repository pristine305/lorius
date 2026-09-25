import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks'

/** Plays only while on screen, and never at all if the visitor prefers reduced motion. */
export default function AutoVideo({ src, poster, label, className }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const v = ref.current
    if (!v || reduce) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!v.src) v.src = src
          v.play().catch(() => {})
        } else v.pause()
      },
      { threshold: 0.25 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [src, reduce])

  return (
    <video ref={ref} className={className} poster={poster} aria-label={label}
      muted loop playsInline preload="none" src={reduce ? undefined : undefined} />
  )
}
