import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import imgCampaigning  from '../assets/homepage/campaign.png'
import imgSocial       from '../assets/homepage/social.png'
import imgBranding     from '../assets/homepage/bd.png'
import imgEmployer     from '../assets/homepage/empbd.png'
import imgWebsites     from '../assets/homepage/website.png'

const links = [
  { label: 'Home',      to: '/' },
  { label: 'Work',      to: '/work' },
  { label: 'Expertise', to: null, dropdown: true },
  { label: 'Agency',    to: '/agency' },
  { label: 'Jobs',      to: '/work' },
  { label: 'Contact',   to: '/contact' },
]

const expertiseCategories = [
  { name: 'Campaigning',       to: '/expertise/campaigning',        img: imgCampaigning },
  { name: 'Social Media',      to: '/expertise/social-media',       img: imgSocial },
  { name: 'Branding & Design', to: '/expertise/branding-design',    img: imgBranding },
  { name: 'Employer Branding', to: '/expertise/employer-branding',  img: imgEmployer },
  { name: 'Websites',          to: '/expertise/websites',           img: imgWebsites },
]

export default function Navbar({ transparent = false }) {
  const { pathname } = useLocation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null) // null or 'expertise'
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileSubmenu(null)
  }, [pathname])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 180)
  }

  const EASING = 'cubic-bezier(0.76, 0, 0.24, 1)'
  const DURATION = '0.6s'

  return (
    <header
      style={{
        backgroundColor: isDropdownOpen ? '#000000' : transparent ? 'transparent' : '#0d0d0e',
        borderBottom: 'none',
        transition: `background-color ${DURATION} ${EASING}, border-color ${DURATION} ${EASING}`,
      }}
      className="relative z-50 w-full"
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Navbar Row */}
      <div className="flex items-center justify-between px-6 sm:px-10 py-5 max-w-7xl mx-auto w-full">
        <Link to="/" className="text-sm font-semibold tracking-wide text-white no-underline flex items-center gap-0.5 z-10">
          ese agency<span className="text-[10px] text-white/60 -mt-1">™</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 sm:gap-8 list-none m-0 p-0">
          {links.map(({ label, to, dropdown }) => {
            const isActive = to && pathname === to
            if (dropdown) {
              return (
                <li
                  key={label}
                  className="relative py-1"
                  onMouseEnter={handleMouseEnter}
                >
                  <button
                    onClick={() => setIsDropdownOpen(prev => !prev)}
                    className={`inline-flex items-center gap-2 text-sm no-underline transition-colors duration-200 cursor-pointer bg-transparent border-none ${
                      isDropdownOpen ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isDropdownOpen
                          ? 'bg-white/20 border-white text-white'
                          : 'border-white/30 text-white/70 group-hover:border-white/60'
                      }`}
                    >
                      <svg
                        className={`w-2.5 h-2.5 transition-transform duration-300 ${
                          isDropdownOpen ? 'rotate-180 text-white' : 'rotate-0 text-white/70'
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </span>
                  </button>
                </li>
              )
            }
            return (
              <li key={label}>
                {to ? (
                  <Link
                    to={to}
                    className={`text-sm no-underline transition-colors duration-200 ${
                      isActive ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                ) : (
                  <a href="#" className="text-sm text-white/70 hover:text-white no-underline transition-colors duration-200">
                    {label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        {/* Mobile Hamburger Button (2 horizontal white lines) */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 text-white bg-transparent border-none cursor-pointer focus:outline-none z-10"
          aria-label="Open mobile menu"
        >
          <span className="w-5 h-[1.5px] bg-white block rounded-full"></span>
          <span className="w-5 h-[1.5px] bg-white block rounded-full"></span>
        </button>
      </div>

      {/* Desktop Mega Dropdown Panel sliding from top */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          clipPath: isDropdownOpen ? 'inset(0% 0% -100% 0%)' : 'inset(0% 0% 100% 0%)',
          transition: isDropdownOpen
            ? `clip-path ${DURATION} ${EASING}, opacity ${DURATION} ${EASING}`
            : `clip-path ${DURATION} ${EASING}, opacity ${DURATION} ${EASING}, visibility 0s ${DURATION}`,
          opacity: isDropdownOpen ? 1 : 0,
          visibility: isDropdownOpen ? 'visible' : 'hidden',
          pointerEvents: isDropdownOpen ? 'auto' : 'none',
        }}
        className="hidden md:block absolute top-full left-0 right-0 w-full bg-black border-b border-white/10 shadow-2xl origin-top z-50"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 lg:py-14">
          <div className="flex items-start gap-12">

            {/* Left Label */}
            <div className="w-48 shrink-0 pt-2">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/50 uppercase">
                Our Expertise
              </span>
            </div>

            {/* Center Category List */}
            <div className="flex flex-col flex-1">
              {expertiseCategories.map(({ name, to }, i) => (
                <Link
                  key={name}
                  to={to}
                  onClick={() => setIsDropdownOpen(false)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className="group flex items-center justify-between text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-tight no-underline transition-all duration-200 transform hover:translate-x-2 py-1.5"
                  style={{ color: hoveredIndex === i ? '#ffffff' : 'rgba(255,255,255,0.45)' }}
                >
                  <span>{name}</span>
                </Link>
              ))}
            </div>

            {/* Right — image that changes on hover */}
            <div className="shrink-0 relative" style={{ width: '420px' }}>
              {expertiseCategories.map(({ name, img }, i) => (
                <img
                  key={name}
                  src={img}
                  alt={name}
                  className="absolute top-0 right-0 w-full h-auto object-contain transition-opacity duration-500"
                  style={{ opacity: hoveredIndex === i ? 1 : 0 }}
                />
              ))}
              {/* spacer */}
              <img
                src={expertiseCategories[hoveredIndex].img}
                alt=""
                aria-hidden="true"
                className="w-full h-auto object-contain invisible"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Overlay Menu (Matches attached design pictures) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-[#121212] text-white flex flex-col justify-between overflow-y-auto">
          {/* Header Row in Mobile Menu: Logo Left, Close X Right */}
          <div className="flex items-center justify-between px-6 py-5 w-full shrink-0">
            <Link
              to="/"
              onClick={() => {
                setIsMobileMenuOpen(false)
                setMobileSubmenu(null)
              }}
              className="text-sm font-semibold tracking-wide text-white no-underline flex items-center gap-0.5"
            >
              ese agency<span className="text-[10px] text-white/60 -mt-1">™</span>
            </Link>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                setMobileSubmenu(null)
              }}
              className="p-2 text-white/80 hover:text-white bg-transparent border-none cursor-pointer focus:outline-none"
              aria-label="Close mobile menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation List */}
          <div className="flex-1 px-6 pt-8 pb-12 flex flex-col justify-start">
            {mobileSubmenu === null ? (
              /* Main Menu View (Matches Picture 2) */
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors"
                >
                  Home
                </Link>

                <Link
                  to="/work"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors"
                >
                  Work
                </Link>

                {/* Expertise Submenu Button */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setMobileSubmenu('expertise')}
                    className="flex items-center gap-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white bg-transparent border-none p-0 cursor-pointer text-left hover:text-white/80 transition-colors"
                  >
                    <span>Expertise</span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </span>
                  </button>
                </div>

                <Link
                  to="/agency"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors"
                >
                  Agency
                </Link>

                <Link
                  to="/work"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors"
                >
                  Jobs
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-semibold tracking-tight text-white no-underline hover:text-white/80 transition-colors"
                >
                  Contact
                </Link>
              </div>
            ) : (
              /* Expertise Submenu View (Matches Picture 3) */
              <div className="flex flex-col space-y-4">
                {/* Expertise Header with UP Arrow button & dimmed gray text */}
                <button
                  onClick={() => setMobileSubmenu(null)}
                  className="flex items-center gap-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white/40 bg-transparent border-none p-0 cursor-pointer text-left hover:text-white/60 transition-colors mb-2"
                >
                  <span>Expertise</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                  </span>
                </button>

                {/* Subcategories list */}
                {expertiseCategories.map(({ name, to }) => (
                  <Link
                    key={name}
                    to={to}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setMobileSubmenu(null)
                    }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white no-underline leading-tight hover:text-white/80 transition-colors max-w-xs"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}


