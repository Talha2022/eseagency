import { useState } from 'react'
import Layout from '../components/Layout'

// Work thumbnails — using -p-500 variants, avoiding filenames with special chars
import imgSocceritos     from '../assets/work/imgi_75_6a1710328faa17e8b1ddcd43_ese-work-thumb-denner-the-socceritos-p-500.jpg'
import imgWhistleblower  from '../assets/work/imgi_80_6967a0446de547cd5c1dc357_ese-work-thumb-denner-whistleblower-p-500.jpg'
import imgMigrosMobile   from '../assets/work/imgi_81_68b189b8cd9bd8c24a5d9523_ese-work-thumb-migrosmobile-p-500.jpg'
import imgMigrosGruppe   from '../assets/work/imgi_82_6a045ed5496237db52d1af6b_ese-work-thumb-migros-gruppe-p-500.jpg'
import imgWork71         from '../assets/work/imgi_83_67974ebb36bb9334bd822b9b_ese-work-thumb-71-p-500.jpg'
import imgWork65         from '../assets/work/imgi_84_6672af610e5149a10eb4ed73_ese-work-thumb-65-p-500.jpg'
import imgWork67         from '../assets/work/imgi_85_664efdaf06751279681f4e0c_ese-work-thumb-67-p-500.jpg'
import imgLay3           from '../assets/work/imgi_86_66f56048eee0a60b4215a97d_ese-work-thumb-lay3-p-500.jpg'
import imgKingfluencers  from '../assets/work/imgi_87_6a201f64ba6e562742a6a2b8_ese-work-thumb-kingfluencers-p-500.jpg'
import imgWork2          from '../assets/work/imgi_88_651d15fc8f27f4a03c14b6ec_ese-work-thumb-2-p-500.jpg'
import imgLay5           from '../assets/work/imgi_89_69fc7d0ecf1e7150bc8a4fa5_ese-work-thumb-lay5-p-500.jpg'
import imgWork70         from '../assets/work/imgi_90_678933081871230c62695091_ese-work-thumb-70-p-500.jpg'
import imgWork69         from '../assets/work/imgi_91_67892338194b106cd281c9b3_ese-work-thumb-69-p-500.jpg'
import imgWork11         from '../assets/work/imgi_92_651d15fc8f27f4a03c14b6cc_ese-work-thumb11-p-500.jpg'
import imgWork35         from '../assets/work/imgi_93_65c0c37543da67dca6aeb4a6_ese-work-thumb-35-p-500.jpg'
import imgWork51         from '../assets/work/imgi_94_65c0c4d0cbdf511291157942_ese-work-thumb-51-p-500.jpg'
import imgWork44         from '../assets/work/imgi_95_65c0c3a2748a66371467302e_ese-work-thumb-44-p-500.jpg'
import imgWork68b        from '../assets/work/imgi_98_666714180412c073c60290cd_ese-work-thumb-68-p-500.jpg'
import imgWork73         from '../assets/work/imgi_77_6a2ac7aee566caedf3c78df3_682f3ddff59a762ae742f98e_ese-work-thumb-73-p-500.webp'
import imgLay26         from '../assets/work/imgi_97_68bad496c2b72e6b6ddde266_ese-work-thumb-lay26-p-500.jpg'
import imgWork20a        from '../assets/work/imgi_100_651d15fc8f27f4a03c14b637_ese-work-thumb20-p-500.jpg'
import imgWork10         from '../assets/work/imgi_101_651d15fc8f27f4a03c14b6da_ese-work-thumb10-p-500.jpg'
import imgSportify       from '../assets/work/imgi_102_6a2c0cb90e206bfabc2df7ae_651d15fc8f27f4a03c14b66f_vbs_sportify_thumbnail_1200x800_V2-p-500.webp'
import imgWork5a         from '../assets/work/imgi_103_651d15fc8f27f4a03c14b603_ese-work-thumb5-p-500.jpg'
import imgWork20b        from '../assets/work/imgi_104_651d15fc8f27f4a03c14b609_ese-work-thumb20-p-500.jpg'
import imgWork62         from '../assets/work/imgi_105_65c0c4a7380647cc99241dfc_ese-work-thumb-62-p-500.jpg'
import imgWork26         from '../assets/work/imgi_106_651d15fc8f27f4a03c14b644_ese-work-thumb26-p-500.jpg'
import imgWork50         from '../assets/work/imgi_107_65c0c43f29141c1f8beba32c_ese-work-thumb-50-p-500.jpg'
import imgWork25         from '../assets/work/imgi_108_651d15fc8f27f4a03c14b642_ese-work-thumb25-p-500.jpg'
import imgWork58         from '../assets/work/imgi_109_65c0c5ea97fe3af9e892fac2_ese-work-thumb-58-p-500.jpg'
import imgWork64         from '../assets/work/imgi_110_66fd3c62048d0ac8d6d8ea3c_ese-work-thumb-64-p-500.jpg'

const categories = ['Campaigning', 'Social Media', 'Branding & Design', 'Employer Branding', 'Websites']

const projects = [
  { id: 1,  img: imgSocceritos,    title: 'The Socceritos',       client: 'Denner',          category: 'Campaigning'       },
  { id: 2,  img: imgWhistleblower, title: 'Whistleblower',        client: 'Denner',          category: 'Campaigning'       },
  { id: 3,  img: imgMigrosMobile,  title: 'Stay Connected',       client: 'Migros Mobile',   category: 'Branding & Design' },
  { id: 4,  img: imgMigrosGruppe,  title: 'Migros Gruppe',        client: 'Migros',          category: 'Websites'          },
  { id: 5,  img: imgWork71,        title: 'Project 71',           client: 'ESE Agency',      category: 'Campaigning'       },
  { id: 6,  img: imgWork65,        title: 'Project 65',           client: 'ESE Agency',      category: 'Branding & Design' },
  { id: 7,  img: imgWork67,        title: 'Project 67',           client: 'ESE Agency',      category: 'Social Media'      },
  { id: 8,  img: imgLay3,          title: 'Layout 3',             client: 'ESE Agency',      category: 'Websites'          },
  { id: 9,  img: imgKingfluencers, title: 'Kingfluencers',        client: 'Kingfluencers',   category: 'Social Media'      },
  { id: 10, img: imgWork2,         title: 'Campaign 2',           client: 'ESE Agency',      category: 'Campaigning'       },
  { id: 11, img: imgLay5,          title: 'Layout 5',             client: 'ESE Agency',      category: 'Websites'          },
  { id: 12, img: imgWork70,        title: 'Project 70',           client: 'ESE Agency',      category: 'Branding & Design' },
  { id: 13, img: imgWork69,        title: 'Project 69',           client: 'ESE Agency',      category: 'Employer Branding' },
  { id: 14, img: imgWork11,        title: 'Work 11',              client: 'ESE Agency',      category: 'Social Media'      },
  { id: 15, img: imgWork35,        title: 'Work 35',              client: 'ESE Agency',      category: 'Branding & Design' },
  { id: 16, img: imgWork51,        title: 'Work 51',              client: 'ESE Agency',      category: 'Campaigning'       },
  { id: 17, img: imgWork44,        title: 'Work 44',              client: 'ESE Agency',      category: 'Employer Branding' },
  { id: 18, img: imgWork68b,       title: 'Work 68',              client: 'ESE Agency',      category: 'Social Media'      },
  { id: 19, img: imgWork73,        title: 'Work 73',              client: 'ESE Agency',      category: 'Websites'          },
  { id: 20, img: imgLay26,         title: 'Layout 26',            client: 'ESE Agency',      category: 'Websites'          },
  { id: 21, img: imgWork20a,       title: 'Work 20',              client: 'ESE Agency',      category: 'Campaigning'       },
  { id: 22, img: imgWork10,        title: 'Work 10',              client: 'ESE Agency',      category: 'Branding & Design' },
  { id: 23, img: imgSportify,      title: 'Sportify VBS',         client: 'VBS',             category: 'Employer Branding' },
  { id: 24, img: imgWork5a,        title: 'Work 5',               client: 'ESE Agency',      category: 'Social Media'      },
  { id: 25, img: imgWork20b,       title: 'Work 20 B',            client: 'ESE Agency',      category: 'Campaigning'       },
  { id: 26, img: imgWork62,        title: 'Work 62',              client: 'ESE Agency',      category: 'Branding & Design' },
  { id: 27, img: imgWork26,        title: 'Work 26',              client: 'ESE Agency',      category: 'Social Media'      },
  { id: 28, img: imgWork50,        title: 'Work 50',              client: 'ESE Agency',      category: 'Employer Branding' },
  { id: 29, img: imgWork25,        title: 'Work 25',              client: 'ESE Agency',      category: 'Branding & Design' },
  { id: 30, img: imgWork58,        title: 'Work 58',              client: 'ESE Agency',      category: 'Campaigning'       },
  { id: 31, img: imgWork64,        title: 'Work 64',              client: 'ESE Agency',      category: 'Websites'          },
]

export default function WorkPage() {
  const [selected, setSelected] = useState([])

  const toggle = (cat) =>
    setSelected(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])

  const isShowAll = selected.length === 0
  const filtered  = isShowAll ? projects : projects.filter(p => selected.includes(p.category))

  return (
    <Layout>
      {/* Hero */}
      <div className="px-10 pt-12 pb-16">
        <h1 className="text-[clamp(80px,16vw,200px)] font-bold leading-none tracking-tight mb-16">
          Work
        </h1>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelected([])}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              isShowAll ? 'bg-white text-black border-white' : 'bg-transparent text-white/70 border-white/30 hover:border-white/60 hover:text-white'
            }`}
          >
            Show all
          </button>

          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => toggle(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition-all duration-200 ${
                selected.includes(cat) ? 'bg-white text-black border-white' : 'bg-transparent text-white/70 border-white/30 hover:border-white/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}

          {selected.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm border border-white/30 text-white/70 hover:text-white hover:border-white/60 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
              </svg>
              Reset
            </button>
          )}
        </div>

        <div className="mt-12 border-t border-white/10" />
      </div>

      {/* Grid */}
      <div className="px-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(project => (
            <div
              key={project.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer bg-neutral-900"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
