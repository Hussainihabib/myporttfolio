import { useRef } from 'react'

/**
 * Lightweight CSS-only 3D tilt effect driven by mouse position.
 * Returns a ref to attach to the element and mouse handlers.
 * No dependency on Three.js — keeps card grids smooth on low-end devices.
 */
export function useTilt({ max = 10, scale = 1.02 } = {}) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -max
    const rotateY = ((x - centerX) / centerX) * max
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
