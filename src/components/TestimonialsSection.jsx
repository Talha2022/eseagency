import { useState, useRef, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Ana del Gado',
    company: 'Foodscapers',
    quote: '"Working with this team transformed our brand completely. The creativity and dedication they brought was unmatched."',
    videoSrc: null, // replace with actual video path e.g. '/videos/ana.mp4'
    avatar: null,
  },
  {
    id: 2,
    name: 'Philipp Hohenzollern',
    company: 'Studio PH',
    quote: '"Every detail was thoughtfully crafted. They understood our vision better than we did ourselves."',
    videoSrc: null,
    avatar: null,
  },
  {
    id: 3,
    name: 'Rémy & Tina Vils',
    company: 'ALVICO Vils AG',
    quote: '"It was evident that you\'re committed. That you have a passion for the job. It gave me a great feeling."',
    videoSrc: null,
    avatar: null,
  },
  {
    id: 4,
    name: 'Jonathan Harter',
    company: 'Harter Group',
    quote: '"Fast, ambitious, and results-driven. Exactly what we needed to break through the noise."',
    videoSrc: null,
    avatar: null,
  },
]

export default function TestimonialsSection() {
  const [active, setActive]   = useState(0)
  const [muted, setMuted]     = useState(true)
  const [playing, setPlaying] = useState(true)
  const videoRef = useRef(null)

  const current = testimonials[active]

  // When active changes, reload & play video
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    vid.load()
    if (playing) vid.play().catch(() => {})
  }, [active])

  const togglePlay = () => {
    const vid = videoRef.current
    if (!vid) return
    if (playing) { vid.pause(); setPlaying(false) }
    else         { vid.play();  setPlaying(true)  }
  }

  return (
    <section className="bg-black py-16 px-10">
      {/* Rounded video card */}
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/7' }}>

        {/* Background video */}
        {current.videoSrc ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={current.videoSrc}
            autoPlay
            loop
            muted={muted}
            playsInline
          />
        ) : (
          /* Placeholder when no video is provided */
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2a] via-[#2a2a3a] to-[#0a0a14]" />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Quote — left side */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-10 max-w-xs">
          <p className="text-white text-2xl font-light leading-snug mb-4">
            {current.quote}
          </p>
          <p className="text-white/60 text-sm tracking-wide">
            <span className="text-white font-medium">{current.name}</span>
            {' '}
            <span>{current.company}</span>
          </p>
        </div>

        {/* Controls — top right */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                <rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          <button
            onClick={() => setMuted(m => !m)}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? (
              <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l1.99 2L21 18.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Person selector — bottom center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                i === active
                  ? 'bg-white/25 border border-white/40 scale-105'
                  : 'bg-white/10 border border-white/10 hover:bg-white/20'
              }`}
            >
              {/* Avatar circle */}
              <div className="w-7 h-7 rounded-full bg-white/30 overflow-hidden flex-shrink-0">
                {t.avatar
                  ? <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  : <div className="w-full h-full bg-gradient-to-br from-white/40 to-white/10" />
                }
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-medium leading-tight">{t.name}</p>
                <p className="text-white/50 text-[10px] leading-tight">{t.company}</p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
