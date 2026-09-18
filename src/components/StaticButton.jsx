import { useEffect, useRef } from 'react'

/**
 * StaticButton — a button with an animated TV-static grey background.
 * Accepts all standard button props plus `className` for sizing/layout overrides.
 */
export default function StaticButton({ children, className = '', onClick, type = 'button', ...rest }) {
  const canvasRef = useRef(null)
  const rafRef    = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = canvas.offsetWidth  || 1
      canvas.height = canvas.offsetHeight || 1
    }

    const draw = () => {
      resize()
      const { width, height } = canvas
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        // grey static — mid-range values so it reads as "grey"
        const v = 80 + ((Math.random() * 80) | 0)
        data[i] = data[i + 1] = data[i + 2] = v
        data[i + 3] = 255
      }
      ctx.putImageData(imageData, 0, 0)
      rafRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      {...rest}
    >
      {/* TV static layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.55, mixBlendMode: 'luminosity' }}
      />
      {/* Content sits above the static */}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
