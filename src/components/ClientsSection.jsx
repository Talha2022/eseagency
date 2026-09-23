import logoMigros        from '../assets/homepage/logo-migros.svg'
import logoDenner        from '../assets/homepage/logo-denner.svg'
import logoFeldschloesschen from '../assets/homepage/logo-feldschloesschen.png'
import logoKaegi         from '../assets/homepage/logo-kaegi.svg'
import logoGeberit       from '../assets/homepage/logo-geberit.svg'
import logoHelvetia      from '../assets/homepage/logo-helvetia.svg'
import logo20Minuten     from '../assets/homepage/logo-20minuten.png'
import logoPepsi         from '../assets/homepage/logo-pepsi.png'
import logoNikin         from '../assets/homepage/logo-nikin.png'
import logoChimpy        from '../assets/homepage/logo-chimpy.svg'

const clients = [
  { name: 'Migros',          logo: logoMigros },
  { name: 'Denner',          logo: logoDenner },
  { name: 'Feldschlösschen', logo: logoFeldschloesschen },
  { name: 'Kägi',            logo: logoKaegi },
  { name: 'Geberit',         logo: logoGeberit },
  { name: 'Helvetia',        logo: logoHelvetia },
  { name: '20 Minuten',      logo: logo20Minuten },
  { name: 'Pepsi',           logo: logoPepsi },
  { name: 'Nikin',           logo: logoNikin },
  { name: 'Chimpy',          logo: logoChimpy },
]

export default function ClientsSection() {
  return (
    <section className="bg-black text-white px-6 sm:px-10 py-14 sm:py-20">
      <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight mb-8 sm:mb-10 max-w-xs">
        Together we are<br />achieving great things
      </h2>

      {/* Logo grid — 2 cols on mobile, 5 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[2px]">
        {clients.map((client, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] flex items-center justify-center min-h-[90px] sm:min-h-[120px] px-5 sm:px-8 py-6 sm:py-8 cursor-pointer group transition-colors duration-300 hover:bg-[#222]"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-14 sm:max-h-24 max-w-[140px] sm:max-w-[220px] w-auto object-contain filter invert brightness-75 group-hover:brightness-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
