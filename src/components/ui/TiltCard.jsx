import { useTilt } from '../../hooks/useTilt.js'

export default function TiltCard({ className = '', children, max = 8, glow = 'electric' }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max })
  const glowShadow = glow === 'emerald' ? 'hover:shadow-glow-emerald' : 'hover:shadow-glow'

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`glass rounded-2xl transition-shadow duration-300 will-change-transform ${glowShadow} ${className}`}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out, box-shadow 0.3s ease' }}
    >
      {children}
    </div>
  )
}
