import teamJulian    from '../assets/Agency/imgi_14_67c713daeb1cef1c0ff37225_ese-team-julian.jpg'
import teamAnna      from '../assets/Agency/imgi_15_66fe82e5e39115b5d85cb46f_ese-team-anna.jpg'
import teamMichelle  from '../assets/Agency/imgi_16_69d77a61cd91328a075ca725_ese-team-michelle.jpg'
import teamMirco     from '../assets/Agency/imgi_17_670d3bd13aecce572819fe27_ese-team-mirco.jpg'
import teamBianca    from '../assets/Agency/imgi_18_67cffbd5679100fda124b6ea_ese-team-bianca.jpg'
import teamEleonora  from '../assets/Agency/imgi_19_665dec4eda712c9706ecd39a_662f6ca4da88ff558ce9f2b9_65ba336a13ec0846da2285dd_ese-team-eleonora.jpg'
import teamDamian    from '../assets/Agency/imgi_20_6554bb45881ab5127b4f08d2_6528faae79a119a617a69cf9_ese-team-damian2.jpg'
import teamLino      from '../assets/Agency/imgi_21_697cbef5823291e3c6848c94_ese-team-lino.jpg'
import teamOtta      from '../assets/Agency/imgi_22_6980718465461800952940fc_ese-team-otta-2.jpg'
import teamGabriel   from '../assets/Agency/imgi_23_662f6ca5994c247d063df5fe_65ba336113ec0846da227b29_ese-team-gabriel.jpg'

const members = [
  { name: 'Julian',    role: 'Creative Director',  img: teamJulian   },
  { name: 'Anna',      role: 'Campaigning',         img: teamAnna     },
  { name: 'Michelle',  role: 'Social Media',        img: teamMichelle },
  { name: 'Mirco',     role: 'Web Developer',       img: teamMirco    },
  { name: 'Bianca',    role: 'Brand Strategy',      img: teamBianca   },
  { name: 'Eleonora',  role: 'Motion Design',       img: teamEleonora },
  { name: 'Damian',    role: 'Copywriting',         img: teamDamian   },
  { name: 'Lino',      role: 'Art Direction',       img: teamLino     },
  { name: 'Otta',      role: 'Strategy',            img: teamOtta     },
  { name: 'Gabriel',   role: 'Design',              img: teamGabriel  },
]

// Duplicate for seamless loop
const track = [...members, ...members]

export default function TeamSection() {
  return (
    <section className="bg-black text-white overflow-hidden relative py-0">

      {/* Scrolling card strip — height driven by image natural size */}
      <div className="relative">

        {/* The moving track */}
        <div className="flex animate-team-scroll" style={{ width: 'max-content' }}>
          {track.map((member, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden group cursor-pointer"
              style={{ width: 'calc(100vw / 3)' }}
            >
              {/* Real photo — natural height */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

              {/* Name + role */}
              <div className="absolute bottom-6 left-5">
                <p className="text-white font-semibold text-sm leading-tight">{member.name}</p>
                <p className="text-white/50 text-xs mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overlay title — centered on top of the strip */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <h2 className="text-[clamp(48px,8vw,110px)] font-bold leading-none tracking-tight text-white drop-shadow-2xl">
            The Team
          </h2>
        </div>

        {/* Discover button — below title, centered */}
        <div className="absolute inset-0 flex items-center justify-center z-10 mt-24 pointer-events-none">
          <a
            href="#"
            className="pointer-events-auto mt-24 flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm px-5 py-2.5 rounded-full transition-all duration-200"
          >
            Discover team
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
