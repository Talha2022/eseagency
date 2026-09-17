import { useEffect, useRef, useState } from 'react'

// Reusable single panel
function Panel({ item, index, totalCount, onProgress }) {
  const wrapperRef = useRef(null)
  const rafRef     = useRef(null)

  // Tagline cycler
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!item.taglines?.length) return
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setTaglineIndex(i => (i + 1) % item.taglines.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [item.taglines])

  // Scroll progress for this panel's progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const el = wrapperRef.current
        if (!el) return
        const { top, height } = el.getBoundingClientRect()
        // When top goes from 0 to -(height - vh), progress goes 0→1
        const vh = window.innerHeight
        const scrollable = height - vh
        const scrolled = -top
        const progress = Math.min(Math.max(scrolled / scrollable, 0), 1)
        onProgress(index, progress)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [index, onProgress])

  return (
    // Tall wrapper — controls how long user scrolls within this panel
    <div ref={wrapperRef} className="h-[200vh] relative">
      {/* Sticky panel */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: item.background }}
        />

        {/* Foreground image — full bleed background */}
        {item.foregroundImage && (
          <div className="absolute inset-0 z-[1]">
            <img
              src={item.foregroundImage}
              alt=""
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
        )}

        {/* Dark overlay at bottom for text contrast */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Label — top left */}
        <div className="absolute top-8 left-8 z-10">
          <span className="text-sm font-medium text-white/80 tracking-wide">
            {item.label}
          </span>
        </div>

        {/* Oversized title — marquee scrolling left like hero */}
        <div className="absolute bottom-20 left-0 right-0 z-10 overflow-hidden">
          <div className="flex w-max animate-marquee">
            <h2 className="text-[13vw] font-bold leading-none tracking-tight text-white whitespace-nowrap pr-[10vw]">
              {item.title}
            </h2>
            <h2 className="text-[13vw] font-bold leading-none tracking-tight text-white whitespace-nowrap pr-[10vw]" aria-hidden="true">
              {item.title}
            </h2>
          </div>

          {/* Animated tagline below title */}
          {item.taglines?.length > 0 && (
            <p
              className={`text-sm font-light text-white/70 pl-6 mt-2 tracking-widest transition-opacity duration-400 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {item.taglines[taglineIndex]}
            </p>
          )}
        </div>

      </div>
    </div>
  )
}

// Progress bars
function ProgressBars({ progresses, total, visible }) {
  return (
    <div
      className="fixed bottom-8 left-8 right-8 z-50 flex gap-2 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: 'none' }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-white rounded-full transition-none"
            style={{ width: `${(progresses[i] ?? 0) * 100}%` }}
          />
        </div>
      ))}
    </div>
  )
}

// Main component
export default function ScrollStackSection({ sections }) {
  const containerRef = useRef(null)
  const [progresses, setProgresses] = useState(
    Object.fromEntries(sections.map((_, i) => [i, 0]))
  )
  const [barsVisible, setBarsVisible] = useState(false)

  const handleProgress = (index, value) => {
    setProgresses(prev => ({ ...prev, [index]: value }))
  }

  // Show bars only while the stack container is in view
  useEffect(() => {
    const rafRef = { current: null }
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const el = containerRef.current
        if (!el) return
        const { top, bottom } = el.getBoundingClientRect()
        setBarsVisible(top < window.innerHeight && bottom > window.innerHeight)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {sections.map((item, i) => (
        <Panel
          key={i}
          item={item}
          index={i}
          totalCount={sections.length}
          onProgress={handleProgress}
        />
      ))}
      <ProgressBars progresses={progresses} total={sections.length} visible={barsVisible} />
    </div>
  )
}
