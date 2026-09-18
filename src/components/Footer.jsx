import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white px-6 sm:px-10 pt-16 sm:pt-20 pb-10 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1.2fr_1fr_1fr_1fr] gap-10 mb-16 sm:mb-20">

          {/* Logo */}
          <div>
            <Link to="/" className="text-sm font-semibold tracking-wide text-white no-underline inline-block">
              ese agency<span className="text-[10px] text-white/60 -mt-1">™</span>
            </Link>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-white/40 tracking-widest uppercase mb-4 sm:mb-5 font-medium">Contact</p>
            <address className="not-italic text-sm text-white/60 leading-relaxed mb-4">
              ESE Agency<br />
              Grubenstrasse 54<br />
              8045 Zurich<br />
              Switzerland
            </address>
            <a href="mailto:info@eseagency.ch" className="block text-sm text-white/60 hover:text-white transition-colors no-underline mb-1">
              info@eseagency.ch
            </a>
            <a href="tel:+41522123071" className="block text-sm text-white/60 hover:text-white transition-colors no-underline">
              +41 52 212 30 71
            </a>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs text-white/40 tracking-widest uppercase mb-4 sm:mb-5 font-medium">Pages</p>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {[
                { name: 'Home', to: '/' },
                { name: 'Work', to: '/work' },
                { name: 'Agency', to: '/agency' },
                { name: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-sm text-white/60 hover:text-white transition-colors no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <p className="text-xs text-white/40 tracking-widest uppercase mb-4 sm:mb-5 font-medium">Expertise</p>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {[
                { name: 'Campaigning', to: '/expertise/campaigning' },
                { name: 'Social Media', to: '/expertise/social-media' },
                { name: 'Branding & Design', to: '/expertise/branding-design' },
                { name: 'Employer Branding', to: '/expertise/employer-branding' },
                { name: 'Websites', to: '/expertise/websites' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-sm text-white/60 hover:text-white transition-colors no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-white/40 tracking-widest uppercase mb-4 sm:mb-5 font-medium">Links</p>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {[
                { name: 'LinkedIn', url: 'https://linkedin.com' },
                { name: 'TikTok', url: 'https://tiktok.com' },
                { name: 'Webflow', url: 'https://webflow.com' },
                { name: 'Awwwards', url: 'https://awwwards.com' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors no-underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 m-0">All Rights reserved 2026 © ESE Agency</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors no-underline">Data Protection</a>
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors no-underline">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
