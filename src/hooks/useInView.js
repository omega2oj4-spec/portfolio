import { useState, useEffect } from 'react'

/**
 * Returns true once the given ref element enters the viewport.
 * Useful for triggering scroll animations.
 */
export function useInView(ref, threshold = 0.2, once = true) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setInView(true)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold, once])

  return inView
}
