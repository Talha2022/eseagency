import { useEffect, useRef } from 'react'

const marqueeText = 'OVERTAKE TIME WITH US - OVERTAKE TIME WITH US - OVERTAKE TIME WITH US - '
const FPS = 24

const frameModules = import.meta.glob('../assets/hero/frame*.webp', { eager: true })
const FRAMES = Object.keys(frameModules).sort().map(k => frameModules[k].default)
const TOTAL = FRAMES.length

// Shorter scroll range on mobile so the scrub doesn't take forever
const getScrollRange = () => (window.innerWidth < 768 ? 900 : 1600)

export default function HeroSection() {
  const wrapperRef    = useRef(null)
  const labelsRef     = useRef(null)
  const marqueeRef    = useRef(null)
  const blackRef      = useRef(null)
  const canvasRef     = useRef(null)
  const imagesRef     = useRef([])
  const lastDrawnRef  = useRef(-1)
  const introsDoneRef = useRef(false)
  const rafRef        = useRef(null)
  const lastTimeRef   = useRef(null)
  const scrollRangeRef = useRef(getScrollRange())

  const drawFrame = (idx) => {
    const canvas = canvasRef.current
    const imgs   = imagesRef.current
    if (!canvas || !imgs[idx]) return
    if (lastDrawnRef.current === idx) return
    lastDrawnRef.current = idx

    const ctx = canvas.getContext('2d')
    const img = imgs[idx]
    const dpr = window.devicePixelRatio || 1

    // Physical canvas dimensions
    const cw = canvas.width   // already DPR-scaled
    const ch = canvas.height

    // Logical display dimensions
    const lw = cw / dpr
    const lh = ch / dpr

    const iw = img.naturalWidth
    const ih = img.naturalHeight

    const isMobile = window.innerWidth < 768
    let sw, sh, sx, sy

    if (isMobile) {
      // On mobile (portrait): contain — show full image, letterboxed if needed
      // Anchor to top-center so subject (usually top half of frame) stays visible
      const scale = Math.min(lw / iw, lh / ih)
      sw = iw * scale
      sh = ih * scale
      sx = (lw - sw) / 2      // center horizontally
      sy = 0                   // anchor to top
    } else {
      // On desktop: cover — fill the whole viewport
      const scale = Math.max(lw / iw, lh / ih)
      sw = iw * scale
      sh = ih * scale
      sx = (lw - sw) / 2
      sy = (lh - sh) / 2
    }

    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, sx * dpr, sy * dpr, sw * dpr, sh * dpr)
  }

  // Resize canvas — account for devicePixelRatio for sharp rendering on Retina/mobile
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const w   = canvas.offsetWidth
      const h   = canvas.offsetHeight
      canvas.width  = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)

      // Update scroll range on orientation change / resize
      scrollRangeRef.current = getScrollRange()
      // Update wrapper height
      if (wrapperRef.current) {
        wrapperRef.current.style.height = `calc(100svh + ${scrollRangeRef.current}px)`
      }

      const f = lastDrawnRef.current >= 0 ? lastDrawnRef.current : 0
      lastDrawnRef.current = -1
      drawFrame(f)
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  // Phase 1: preload → play intro 0 → last frame
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

  // Phase 2: scroll → scrub frames in reverse
  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const SCROLL_RANGE = scrollRangeRef.current
      const top      = wrapper.getBoundingClientRect().top
      const scrolled = Math.max(-top, 0)
      const progress = Math.min(scrolled / SCROLL_RANGE, 1)

      if (introsDoneRef.current) {
        const frameProgress = Math.min(scrolled / (SCROLL_RANGE * 0.6), 1)
        const frameIdx = Math.round((1 - frameProgress) * (TOTAL - 1))
        drawFrame(frameIdx)
      }

      // Labels — reduce travel distance on mobile
      if (labelsRef.current) {
        const travel = window.innerWidth < 768 ? 120 : 220
        labelsRef.current.style.transform = `translateY(calc(-50% - ${progress * travel}px))`
        labelsRef.current.style.opacity   = `${1 - progress * 2}`
      }

      // Marquee
      if (marqueeRef.current) {
        const travel = window.innerWidth < 768 ? 200 : 400
        marqueeRef.current.style.transform = `translateY(calc(0px - ${progress * travel}px))`
        marqueeRef.current.style.opacity   = `${1 - progress * 1.5}`
      }

      // Black overlay
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
    <div
      ref={wrapperRef}
      style={{ height: `calc(100svh + ${scrollRangeRef.current}px)` }}
    >
      <div className="sticky top-0 w-full h-svh overflow-hidden flex flex-col text-white">

        {/* Frame canvas — covers full viewport */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: '#000' }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ display: 'block' }}
          />
        </div>

        {/* Black overlay (fades in at end of scroll) */}
        <div
          ref={blackRef}
          className="absolute inset-0 z-[1] bg-black opacity-0 will-change-[opacity]"
        />

        {/* Small descriptor labels */}
        <div
          ref={labelsRef}
          className="absolute z-20 w-full top-1/2 -translate-y-1/2 flex justify-between px-6 sm:px-10 text-[10px] sm:text-xs tracking-widest pointer-events-none will-change-transform"
        >
          <span>modern</span>
          <span className="hidden sm:inline">high quality</span>
          <span>fresh</span>
        </div>

        {/* Scrolling marquee */}
        <div
          ref={marqueeRef}
          className="absolute top-1/2 left-0 w-full z-20 overflow-hidden will-change-transform"
          aria-label="Overtake time with us"
        >
          <div className="flex w-max animate-marquee">
            <span className="text-[clamp(48px,12vw,180px)] font-extrabold leading-none whitespace-nowrap tracking-tight">
              {marqueeText}
            </span>
            <span
              className="text-[clamp(48px,12vw,180px)] font-extrabold leading-none whitespace-nowrap tracking-tight"
              aria-hidden="true"
            >
              {marqueeText}
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
