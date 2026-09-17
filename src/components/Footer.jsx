import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white px-10 pt-20 pb-10">

      {/* Main grid */}
      <div className="grid grid-cols-[1fr_1.2fr_1fr_1fr_1fr] gap-10 mb-20">

        {/* Logo */}
        <div>
          <span className="text-sm font-medium tracking-wide">ese agency™</span>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs text-white/40 tracking-widest uppercase mb-5">Contact</p>
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
          <p className="text-xs text-white/40 tracking-widest uppercase mb-5">Pages</p>
          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {['Home','Work','Agency','Team','Jobs','Contact','For You','Web-Showcase','Blog','History'].map(item => (
              <li key={item}>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors no-underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <p className="text-xs text-white/40 tracking-widest uppercase mb-5">Expertise</p>
          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {['Campaigning','Social Media','Branding & Design','Employer Branding','Websites'].map(item => (
              <li key={item}>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors no-underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs text-white/40 tracking-widest uppercase mb-5">Links</p>
          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {['LinkedIn','TikTok','Webflow','Awwwards'].map(item => (
              <li key={item}>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors no-underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-6 flex items-center justify-between">
        <p className="text-xs text-white/30">All Rights reserved 2026 © ESE Agency</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-white/30 hover:text-white transition-colors no-underline">Data Protection</a>
          <a href="#" className="text-xs text-white/30 hover:text-white transition-colors no-underline">Imprint</a>
        </div>
      </div>

    </footer>
  )
}
