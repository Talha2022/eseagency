import { Link } from 'react-router-dom'

/* ─── Shared style objects ─── */
const headingStyle = {
  fontSize: '14px',
  fontWeight: 500,
  color: '#fff',
  margin: '0 0 20px',
  lineHeight: 1,
}

const linkStyle = {
  fontSize: '14px',
  fontWeight: 400,
  color: 'rgba(255,255,255,0.85)',
  textDecoration: 'none',
  lineHeight: '1.6',
  transition: 'color 0.2s ease',
  display: 'inline-block',
}

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
}

const legalStyle = {
  fontSize: '13px',
  color: '#9d9d9d',
  margin: 0,
}

const legalLinkStyle = {
  fontSize: '13px',
  color: '#9d9d9d',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0e0e0e',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Noise/grain texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.04,
        }}
      />

      {/* Main footer content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '80px 60px 0' }}>

        {/* Top row: Logo + 4 Columns */}
        <div
          style={{
            display: 'flex',
            gap: '80px',
            marginBottom: '80px',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          {/* Logo */}
          <div style={{ flexShrink: 0, minWidth: '130px', paddingTop: '2px' }}>
            <Link
              to="/"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                lineHeight: 1,
              }}
            >
              ese agency<span style={{ fontSize: '8px', verticalAlign: 'super', marginLeft: '1px' }}>™</span>
            </Link>
          </div>

          {/* Columns grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, auto)',
              gap: '60px',
              flex: 1,
              minWidth: 0,
            }}
          >
            {/* Contact */}
            <div>
              <p style={headingStyle}>Contact</p>
              <address style={{ fontStyle: 'normal', marginBottom: '16px' }}>
                <span style={{ ...linkStyle, display: 'block', lineHeight: '1.8' }}>
                  ESE Agency<br />
                  Grubenstrasse 54<br />
                  8045 Zürich<br />
                  Schweiz
                </span>
              </address>
              <a
                href="mailto:info@eseagency.ch"
                style={{ ...linkStyle, display: 'block', marginBottom: '6px' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              >
                info@eseagency.ch
              </a>
              <a
                href="tel:+41522123071"
                style={{ ...linkStyle, display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              >
                +41 52 212 30 71
              </a>
            </div>

            {/* Pages */}
            <div>
              <p style={headingStyle}>Pages</p>
              <ul style={listStyle}>
                {[
                  { name: 'Home', to: '/' },
                  { name: 'Work', to: '/work' },
                  { name: 'Agency', to: '/agency' },
                  { name: 'Team', to: '/team' },
                  { name: 'Jobs', to: '/jobs' },
                  { name: 'Contact', to: '/contact' },
                  { name: 'For You', to: '/for-you' },
                  { name: 'Web-Showcase', to: '/web-showcase' },
                  { name: 'Blog', to: '/blog' },
                  { name: 'History', to: '/history' },
                ].map((item) => (
                  <li key={item.name} style={{ marginBottom: '10px' }}>
                    <Link
                      to={item.to}
                      style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div>
              <p style={headingStyle}>Expertise</p>
              <ul style={listStyle}>
                {[
                  { name: 'Campaigning', to: '/expertise/campaigning' },
                  { name: 'Social Media', to: '/expertise/social-media' },
                  { name: 'Branding & Design', to: '/expertise/branding-design' },
                  { name: 'Employer Branding', to: '/expertise/employer-branding' },
                  { name: 'Websites', to: '/expertise/websites' },
                ].map((item) => (
                  <li key={item.name} style={{ marginBottom: '10px' }}>
                    <Link
                      to={item.to}
                      style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <p style={headingStyle}>Links</p>
              <ul style={listStyle}>
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/eseagency' },
                  { name: 'TikTok', url: 'https://tiktok.com' },
                  { name: 'Webflow', url: 'https://webflow.com' },
                  { name: 'Awwwards', url: 'https://awwwards.com' },
                ].map((item) => (
                  <li key={item.name} style={{ marginBottom: '10px' }}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            padding: '20px 0',
            flexWrap: 'wrap',
          }}
        >
          <p style={legalStyle}>All rights reserved 2026 © ESE Agency</p>
          <div style={{ display: 'flex', gap: '40px' }}>
            <a
              href="/datenschutz"
              style={legalLinkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9d9d9d')}
            >
              Data Protection
            </a>
            <a
              href="/impressum"
              style={legalLinkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9d9d9d')}
            >
              Imprint
            </a>
          </div>
        </div>
      </div>

      {/* Giant animated CTA marquee */}
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', paddingTop: '10px', lineHeight: 0.88 }}>
        <Link
          to="/contact"
          style={{ textDecoration: 'none', display: 'inline-flex', animation: 'footerMarquee 22s linear infinite' }}
          aria-label="Get in Contact"
        >
          {Array(6).fill(null).map((_, i) => (
            <span
              key={i}
              style={{
                fontSize: 'clamp(80px, 13vw, 210px)',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.97)',
                letterSpacing: '-0.03em',
                lineHeight: 0.88,
                paddingRight: '0.4em',
                fontFamily: "'Inter', system-ui, sans-serif",
                display: 'inline-block',
              }}
            >
              Get in Contact
            </span>
          ))}
        </Link>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes footerMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  )
}
