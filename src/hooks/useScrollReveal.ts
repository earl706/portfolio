import { useEffect, useRef, useState } from "react"

type Options = {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollReveal<T extends HTMLElement>(
  options: Options = {},
) {
  const { threshold = 0.15, rootMargin = "0px 0px -8% 0px", triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (triggerOnce) observer.unobserve(node)
        } else if (!triggerOnce) {
          setVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, visible }
}
