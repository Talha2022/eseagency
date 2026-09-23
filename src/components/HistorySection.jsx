import HaloReel from './ui/HaloReel'

// Agency work images — picked from existing assets, no special chars
import img1 from '../assets/work/imgi_75_6a1710328faa17e8b1ddcd43_ese-work-thumb-denner-the-socceritos-p-500.jpg'
import img2 from '../assets/work/imgi_80_6967a0446de547cd5c1dc357_ese-work-thumb-denner-whistleblower-p-500.jpg'
import img3 from '../assets/work/imgi_81_68b189b8cd9bd8c24a5d9523_ese-work-thumb-migrosmobile-p-500.jpg'
import img4 from '../assets/work/imgi_82_6a045ed5496237db52d1af6b_ese-work-thumb-migros-gruppe-p-500.jpg'
import img5 from '../assets/work/imgi_83_67974ebb36bb9334bd822b9b_ese-work-thumb-71-p-500.jpg'
import img6 from '../assets/work/imgi_84_6672af610e5149a10eb4ed73_ese-work-thumb-65-p-500.jpg'
import img7 from '../assets/work/imgi_85_664efdaf06751279681f4e0c_ese-work-thumb-67-p-500.jpg'
import img8 from '../assets/work/imgi_87_6a201f64ba6e562742a6a2b8_ese-work-thumb-kingfluencers-p-500.jpg'
import img9 from '../assets/work/imgi_90_678933081871230c62695091_ese-work-thumb-70-p-500.jpg'
import img10 from '../assets/work/imgi_91_67892338194b106cd281c9b3_ese-work-thumb-69-p-500.jpg'
import img11 from '../assets/work/imgi_77_6a2ac7aee566caedf3c78df3_682f3ddff59a762ae742f98e_ese-work-thumb-73-p-500.webp'
import img12 from '../assets/work/imgi_102_6a2c0cb90e206bfabc2df7ae_651d15fc8f27f4a03c14b66f_vbs_sportify_thumbnail_1200x800_V2-p-500.webp'

const CARDS = [
  { src: img1,  alt: 'The Socceritos — Denner' },
  { src: img2,  alt: 'Whistleblower — Denner' },
  { src: img3,  alt: 'Migros Mobile' },
  { src: img4,  alt: 'Migros Gruppe' },
  { src: img5,  alt: 'Project 71' },
  { src: img6,  alt: 'Project 65' },
  { src: img7,  alt: 'Project 67' },
  { src: img8,  alt: 'Kingfluencers' },
  { src: img9,  alt: 'Project 70' },
  { src: img10, alt: 'Project 69' },
  { src: img11, alt: 'Work 73' },
  { src: img12, alt: 'Sportify VBS' },
]

export default function HistorySection() {
  return (
    <section className="bg-black text-white py-24">

      {/* Halo Reel */}
      <HaloReel
        items={CARDS}
        aria-label="ESE Agency history reel"
        cardWidth={280}
        cardHeight={380}
        minScale={0.35}
        radiusXRatio={0.38}
        centerXRatio={0}
        radiusYRatio={0.42}
        holdDuration={1200}
        stepDuration={700}
        spread={1.3}
        centerLabel={
          <span className="text-[5vw] sm:text-[3vw] font-bold tracking-tight text-white/80 leading-tight">
            Discover Our History
          </span>
        }
        className="h-[500px] sm:h-[600px] lg:h-[700px]"
      />
    </section>
  )
}
