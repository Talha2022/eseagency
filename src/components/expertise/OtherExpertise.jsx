import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import imgCampaigning from '../../assets/homepage/campaign.png'
import imgSocial      from '../../assets/homepage/social.png'
import imgBranding    from '../../assets/homepage/bd.png'
import imgEmployer    from '../../assets/homepage/empbd.png'
import imgWebsites    from '../../assets/homepage/website.png'

/**
 * Grey TV static noise canvas component for card backgrounds.
 */
function GreyTVStaticCanvas({ opacity = 0.22 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    let animationFrameId

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return
      // Render at half resolution for retro pixelated grain & smooth performance
      canvas.width = Math.max(Math.floor(rect.width / 2), 120)
      canvas.height = Math.max(Math.floor(rect.height / 2), 120)
    }

    updateSize()
    const resizeObserver = new ResizeObserver(() => updateSize())
    resizeObserver.observe(canvas)

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      if (w > 0 && h > 0) {
        const imageData = ctx.createImageData(w, h)
        const data = imageData.data
        const len = data.length

        for (let i = 0; i < len; i += 4) {
          // Grey TV static noise luminance
          const noise = (Math.random() * 220 + 25) | 0
          data[i]     = noise // R
          data[i + 1] = noise // G
          data[i + 2] = noise // B
          data[i + 3] = 255   // Alpha
        }
        ctx.putImageData(imageData, 0, 0)
      }
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-300"
      style={{
        opacity,
        mixBlendMode: 'screen',
        imageRendering: 'pixelated',
      }}
    />
  )
}

const ALL_EXPERTISE = [
  {
    slug: 'campaigning',
    title: 'Campaigning',
    to: '/expertise/campaigning',
    img: imgCampaigning,
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    to: '/expertise/social-media',
    img: imgSocial,
  },
  {
    slug: 'branding-design',
    title: 'Branding & Design',
    to: '/expertise/branding-design',
    img: imgBranding,
  },
  {
    slug: 'employer-branding',
    title: 'Employer branding',
    to: '/expertise/employer-branding',
    img: imgEmployer,
  },
  {
    slug: 'websites',
    title: 'Websites',
    to: '/expertise/websites',
    img: imgWebsites,
  },
]

export default function OtherExpertise({ currentSlug }) {
  // If currentSlug is provided, exclude current and pick 4 other expertises
  const displayItems = currentSlug
    ? ALL_EXPERTISE.filter((item) => item.slug !== currentSlug).slice(0, 4)
    : ALL_EXPERTISE.slice(0, 4) // Default 4 items as in attached picture

  return (
    <section className="bg-black text-white px-6 sm:px-10 lg:px-16 py-20 lg:py-28 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-10 sm:mb-14">
          Other expertise
        </h2>

        {/* 2x2 Grid of Cards with sharp corners & compact height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {displayItems.map((item) => (
            <Link
              key={item.slug}
              to={item.to}
              className="relative rounded-none overflow-hidden bg-[#161719] border border-white/10 p-6 sm:p-8 lg:p-9 min-h-[220px] sm:min-h-[270px] lg:min-h-[300px] flex flex-col justify-between group transition-all duration-500 hover:border-white/30 hover:shadow-2xl no-underline"
            >
              {/* Grey TV Static Background Canvas */}
              <GreyTVStaticCanvas opacity={0.22} />

              {/* Subtly blended radial vignette for atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/[0.03] pointer-events-none z-0" />

              {/* Card Header Content (Title + Button) */}
              <div className="relative z-10 flex flex-col items-start gap-4">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight text-white leading-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-xs sm:text-sm font-medium backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:bg-white/25 group-hover:border-white/25 group-hover:text-white group-hover:scale-105">
                  Learn more
                  <svg
                    className="w-3.5 h-3.5 stroke-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>

              {/* 3D Visual Asset positioned on right/bottom */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute right-0 bottom-0 h-[80%] sm:h-[88%] lg:h-[92%] w-auto max-w-[50%] sm:max-w-[55%] object-contain object-bottom pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1 z-10 drop-shadow-2xl"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
