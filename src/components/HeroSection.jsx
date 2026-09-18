import { useEffect, useRef } from 'react'

const marqueeText = 'OVERTAKE TIME WITH US - OVERTAKE TIME WITH US - OVERTAKE TIME WITH US - '
const SCROLL_RANGE = 1600
const FPS = 24

const frameModules = import.meta.glob('../assets/hero/frame*.webp', { eager: true })
const FRAMES = Object.keys(frameModules).sort().map(k => frameModules[k].default)
const TOTAL = FRAMES.length

export default function HeroSection() {
  const wrapperRef     = useRef(null)
  const labelsRef      = useRef(null)
  const marqueeRef     = useRef(null)
  const blackRef       = useRef(null)
  const canvasRef      = useRef(null)
  const imagesRef      = useRef([])
  const lastDrawnRef   = useRef(-1)
  const introsDoneRef  = useRef(false) // true once intro playback finishes
  const rafRef         = useRef(null)
  const lastTimeRef    = useRef(null)

  const drawFrame = (idx) => {
    const canvas = canvasRef.current
    const imgs   = imagesRef.current
    if (!canvas || !imgs[idx]) return
    if (lastDrawnRef.current === idx) return
    lastDrawnRef.current = idx

    const ctx = canvas.getContext('2d')
    const img = imgs[idx]
    const cw = canvas.width, ch = canvas.height
    const iw = img.naturalWidth, ih = img.naturalHeight
    const scale = Math.max(cw / iw, ch / ih)
    const sw = iw * scale, sh = ih * scale
    const sx = (cw - sw) / 2, sy = (ch - sh) / 2
    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, sx, sy, sw, sh)
  }

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const f = lastDrawnRef.current >= 0 ? lastDrawnRef.current : 0
      lastDrawnRef.current = -1 // force redraw after resize
      drawFrame(f)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  // Phase 1: preload then play intro 0 → 49
  useEffect(() => {
    let loaded = 0
    const imgs = Array(TOTAL)

    const startIntro = () => {
      imagesRef.current = imgs
      drawFrame(0)
      lastDrawnRef.current = 0

      const tick = (timestamp) => {
        if (!lastTimeRef.current) lastTimeRef.current = timestamp
        const elapsed = timestamp - lastTimeRef.current
        if (elapsed >= 1000 / FPS) {
          lastTimeRef.current = timestamp
          const next = lastDrawnRef.current + 1
          if (next < TOTAL) {
            drawFrame(next)
          } else {
            // intro done — hold on last frame
            introsDoneRef.current = true
            return
          }
        }
        rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    FRAMES.forEach((src, i) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        imgs[i] = img
        loaded++
        if (loaded === TOTAL) startIntro()
      }
    })

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Phase 2: scroll → scrub frames 49 → 0 (reverse)
  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const top      = wrapper.getBoundingClientRect().top
      const scrolled = Math.max(-top, 0)
      const progress = Math.min(scrolled / SCROLL_RANGE, 1)

      // Only scrub frames once intro is done
      if (introsDoneRef.current) {
        // scroll down → go from last frame back to 0
        const frameProgress = Math.min(scrolled / (SCROLL_RANGE * 0.6), 1)
        const frameIdx = Math.round((1 - frameProgress) * (TOTAL - 1))
        drawFrame(frameIdx)
      }

      // Labels
      if (labelsRef.current) {
        labelsRef.current.style.transform = `translateY(calc(-50% - ${progress * 220}px))`
        labelsRef.current.style.opacity   = `${1 - progress * 2}`
      }

      // Marquee
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateY(calc(0px - ${progress * 400}px))`
        marqueeRef.current.style.opacity   = `${1 - progress * 1.5}`
      }

      // Black overlay fades in after 50% scroll
      if (blackRef.current) {
        const blackProgress = Math.max((progress - 0.5) / 0.5, 0)
        blackRef.current.style.opacity = `${blackProgress}`
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={wrapperRef} style={{ height: `calc(100svh + ${SCROLL_RANGE}px)` }}>
      <div className="sticky top-0 w-full h-svh overflow-hidden flex flex-col text-white font-sans">

        {/* Frame canvas */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: 'linear-gradient(135deg, #F4A020 0%, #EE8020 25%, #E8551F 55%, #E8304A 80%, #DE2A3A 100%)' }}
        >
          <canvas ref={canvasRef} className="w-full h-full" style={{ display: 'block' }} />
        </div>

        {/* Black overlay */}
        <div
          ref={blackRef}
          className="absolute inset-0 z-[1] bg-black opacity-0 will-change-[opacity]"
        />

        {/* Navbar — rendered by Layout, this space intentionally empty */}

        {/* Small labels */}
        <div
          ref={labelsRef}
          className="absolute z-20 w-full top-1/2 -translate-y-1/2 flex justify-between px-10 text-xs tracking-widest pointer-events-none will-change-transform"
        >
          <span>modern</span>
          <span>high quality</span>
          <span>fresh</span>
        </div>

        {/* Marquee */}
        <div
          ref={marqueeRef}
          className="absolute top-1/2 left-0 w-full z-20 overflow-hidden will-change-transform"
          aria-label="Overtake time with us"
        >
          <div className="flex w-max animate-marquee">
            <span className="text-[clamp(80px,14vw,180px)] font-extrabold leading-none whitespace-nowrap tracking-tight">
              {marqueeText}
            </span>
            <span className="text-[clamp(80px,14vw,180px)] font-extrabold leading-none whitespace-nowrap tracking-tight" aria-hidden="true">
              {marqueeText}
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
