import { useEffect, useMemo, useRef, useState } from 'react'

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUpOnView(target: number, durationMs = 900) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)

  const formatter = useMemo(() => new Intl.NumberFormat('ja-JP'), [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    let started = false

    const start = () => {
      if (started) return
      started = true

      const startTime = performance.now()
      const from = 0

      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / durationMs)
        const eased = easeOutCubic(t)
        const next = Math.round(from + (target - from) * eased)
        setValue(next)
        if (t < 1) raf = requestAnimationFrame(tick)
      }

      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start()
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    io.observe(el)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [target, durationMs])

  return { ref, text: formatter.format(value) }
}
