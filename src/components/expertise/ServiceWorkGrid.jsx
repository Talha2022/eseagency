import { useState } from 'react'

// ─── 24 work thumbnails (no duplicates) ───────────────────────────────────────
import img01 from '../../assets/work/imgi_8_6a1710328faa17e8b1ddcd43_ese-work-thumb-denner-the-socceritos.jpg'
import img02 from '../../assets/work/imgi_19_6a201f64ba6e562742a6a2b8_ese-work-thumb-kingfluencers.jpg'
import img03 from '../../assets/work/imgi_13_68b189b8cd9bd8c24a5d9523_ese-work-thumb-migrosmobile.jpg'
import img04 from '../../assets/work/imgi_14_6a045ed5496237db52d1af6b_ese-work-thumb-migros-gruppe.jpg'
import img05 from '../../assets/work/imgi_15_67974ebb36bb9334bd822b9b_ese-work-thumb-71.jpg'
import img06 from '../../assets/work/imgi_16_6672af610e5149a10eb4ed73_ese-work-thumb-65.jpg'
import img07 from '../../assets/work/imgi_17_664efdaf06751279681f4e0c_ese-work-thumb-67.jpg'
import img08 from '../../assets/work/imgi_18_66f56048eee0a60b4215a97d_ese-work-thumb-lay3.jpg'
import img09 from '../../assets/work/imgi_20_651d15fc8f27f4a03c14b6ec_ese-work-thumb-2.jpg'
import img10 from '../../assets/work/imgi_21_69fc7d0ecf1e7150bc8a4fa5_ese-work-thumb-lay5.jpg'
import img11 from '../../assets/work/imgi_22_678933081871230c62695091_ese-work-thumb-70.jpg'
import img12 from '../../assets/work/imgi_23_67892338194b106cd281c9b3_ese-work-thumb-69.jpg'
import img13 from '../../assets/work/imgi_24_651d15fc8f27f4a03c14b6cc_ese-work-thumb11.jpg'
import img14 from '../../assets/work/imgi_25_65c0c37543da67dca6aeb4a6_ese-work-thumb-35.jpg'
import img15 from '../../assets/work/imgi_26_65c0c4d0cbdf511291157942_ese-work-thumb-51.jpg'
import img16 from '../../assets/work/imgi_27_65c0c3a2748a66371467302e_ese-work-thumb-44.jpg'
import img17 from '../../assets/work/imgi_28_6723a140e98e21ce1f310ab5_ese-work-thumb-68 Kopie.jpg'
import img18 from '../../assets/work/imgi_29_68bad496c2b72e6b6ddde266_ese-work-thumb-lay26.jpg'
import img19 from '../../assets/work/imgi_30_666714180412c073c60290cd_ese-work-thumb-68.jpg'
import img20 from '../../assets/work/imgi_31_6704023227fbc906a6578ccb_ese-work-thumb2.jpg'
import img21 from '../../assets/work/imgi_32_651d15fc8f27f4a03c14b637_ese-work-thumb20.jpg'
import img22 from '../../assets/work/imgi_33_651d15fc8f27f4a03c14b6da_ese-work-thumb10.jpg'
import img23 from '../../assets/work/imgi_35_651d15fc8f27f4a03c14b603_ese-work-thumb5.jpg'
import img24 from '../../assets/work/imgi_12_6967a0446de547cd5c1dc357_ese-work-thumb-denner-whistleblower.jpg'

const ALL_ITEMS = [
  img01, img02, img03, img04, img05, img06,
  img07, img08, img09, img10, img11, img12,
  img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23, img24,
]

const INITIAL_COUNT = 8   // 2 rows × 4 cols visible by default
const FULL_COUNT    = 24  // 6 rows × 4 cols

/**
 * ServiceWorkGrid — project thumbnail grid.
 *
 * Props:
 *   heading – bold headline top-left (default "The digital worlds we've created. Dive in!")
 *   items   – array of image src strings (falls back to the built-in 24 work thumbs)
 */
export default function ServiceWorkGrid({
  heading = "The digital worlds we've created. Dive in!",
  items   = ALL_ITEMS,
}) {
  const [expanded, setExpanded] = useState(false)

  const visible = expanded ? items.slice(0, FULL_COUNT) : items.slice(0, INITIAL_COUNT)

  return (
    <section className="bg-black text-white">

      {/* Top border */}
      <div className="border-t border-white/10 mx-10" />

      {/* Heading */}
      <div className="px-10 pt-10 pb-6">
        <h2 className="text-xl sm:text-2xl font-bold leading-tight max-w-xs text-white">
          {heading}
        </h2>
      </div>

      {/* Grid — same px-10 padding so first column aligns with heading */}
      <div className="px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[3px]">
          {visible.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Project ${i + 1}`}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
              {/* subtle dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Show More / Show Less button */}
      {items.length > INITIAL_COUNT && (
        <div className="flex justify-center py-10">
          <button
            onClick={() => setExpanded(e => !e)}
            className="flex items-center gap-3 border border-white/20 rounded-full px-7 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/50 transition-all duration-200"
          >
            {expanded ? 'Show Less' : 'Show More'}
            <span
              className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center transition-transform duration-300"
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
        </div>
      )}

      {/* Bottom border */}
      <div className="border-b border-white/10 mx-10" />

    </section>
  )
}
