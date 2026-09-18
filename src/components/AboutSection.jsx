import img1 from '../assets/homepage/work1.jpg'
import img2 from '../assets/homepage/work2.jpg'
import img3 from '../assets/homepage/work3.webp'
import img4 from '../assets/homepage/work4.jpg'
import img5 from '../assets/homepage/work5.jpg'
import img6 from '../assets/homepage/work6.jpg'
import img7 from '../assets/homepage/work7.jpg'
import img8 from '../assets/homepage/work8.jpg'
import StaticButton from './StaticButton'

const projects = [
  { id: 1, label: 'DENNER',            img: img1 },
  { id: 2, label: 'MIGROS',            img: img2 },
  { id: 3, label: 'ESE',               img: img3 },
  { id: 4, label: 'DENNER',            img: img4 },
  { id: 5, label: 'MIGROS Mobile',     img: img5 },
  { id: 6, label: 'MIGROS Gruppe',     img: img6 },
  { id: 7, label: 'ESE',               img: img7 },
  { id: 8, label: 'ESE',               img: img8 },
]

export default function AboutSection() {
  return (
    <section className="bg-black text-white">

      {/* About text */}
      <div className="px-10 py-24">
        <div className="max-w-5xl mx-auto flex gap-16">
          <p className="text-xs tracking-widest text-white/50 whitespace-nowrap pt-2 shrink-0">
            This is ESE
          </p>
          <p className="text-[clamp(24px,3.5vw,48px)] font-light leading-tight tracking-tight">
            Culture-driven, creative and competitive. Our digital agency creates
            impact for brands. In the disciplines Websites, social media, content
            marketing, campaigning and branding. Between timeless and zeitgeist.
            When we communicate: Effectively. Quick witted. Ambitious. This is ESE
            Agency.
          </p>
        </div>
      </div>

      {/* Work grid */}
      <div className="px-16 pb-16">
        <div className="grid grid-cols-4 gap-2">
          {projects.map((p) => (
            <div
              key={p.id}
              className="relative overflow-hidden rounded-sm group cursor-pointer bg-black"
            >
              {/* Image — natural size drives the card height */}
              <img
                src={p.img}
                alt={p.label}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-sm tracking-wide drop-shadow">
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show all button */}
        <div className="flex justify-center mt-10">
          <StaticButton className="text-white text-xs tracking-widest border border-white/30 rounded-full px-6 py-2.5 bg-[#555] hover:brightness-110 transition-all duration-300">
            Show all ↗
          </StaticButton>
        </div>
      </div>

    </section>
  )
}
