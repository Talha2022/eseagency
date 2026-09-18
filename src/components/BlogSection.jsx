import blog1 from '../assets/homepage/blog1.jpg'
import blog2 from '../assets/homepage/blog2.jpg'
import blog3 from '../assets/homepage/blog3.jpg'
import authorElia   from '../assets/homepage/author-elia.jpg'
import authorDamian from '../assets/homepage/author-damian.jpg'
import StaticButton from './StaticButton'

const posts = [
  {
    img:       blog1,
    category:  'Denner',
    title:     'ESE Agency & Manifesto Films: Denner blockbuster with Granit Xhaka and Terence Hill film-ready staged',
    author:    'Elia Binelli',
    avatar:    authorElia,
    readTime:  '6 min',
  },
  {
    img:       blog2,
    category:  'Migros Group',
    title:     'New employer appearance for the Migros Group',
    author:    'Elia Binelli',
    avatar:    authorElia,
    readTime:  '5 min',
  },
  {
    img:       blog3,
    category:  'Denner',
    title:     'Denner commits the Easter bunny as an official partner',
    author:    'Damian Steffen',
    avatar:    authorDamian,
    readTime:  '1 min',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-black text-white px-10 py-20">

      {/* Header row */}
      <div className="flex items-start justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight max-w-xs">
          News from the world<br />of ESE
        </h2>
        <StaticButton className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors duration-200 mt-1 shrink-0 border border-white/20 rounded-full px-4 py-2 bg-[#555]">
          Show all
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </StaticButton>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-[#1c1c1c] rounded-md overflow-hidden group cursor-pointer flex flex-col"
          >
            {/* Full natural image height */}
            <div className="overflow-hidden">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4 flex-1">
              {/* Category */}
              <span className="text-white/40 text-xs tracking-wide">{post.category}</span>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold leading-snug flex-1">
                {post.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-4 text-white/50 text-xs pt-3 border-t border-white/10">
                {/* Author with avatar */}
                <span className="flex items-center gap-2">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  {post.author}
                </span>

                {/* Read time */}
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
