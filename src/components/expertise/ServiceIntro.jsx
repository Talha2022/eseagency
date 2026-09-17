/**
 * ServiceIntro — the "Why Us" section below the hero.
 *
 * Props:
 *   label – left column label (default "Why Us")
 *   text  – the body paragraph
 */
export default function ServiceIntro({
  label = 'Why Us',
  text,
}) {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      

      {/* Top border line */}
      <div className="border-t border-white/10 mx-10" />

      {/* Content */}
      <div className="relative z-10 flex gap-16 px-10 py-24 max-w-7xl mx-auto">

        {/* Left — label */}
        <div className="w-64 shrink-0 pt-1">
          <span className="text-xs tracking-widest text-white/50 uppercase">
            {label}
          </span>
        </div>

        {/* Right — body text */}
        <div className="flex-1 max-w-2xl">
          <p className="text-lg sm:text-xl leading-relaxed text-white/85">
            {text}
          </p>
        </div>

      </div>

      {/* Bottom border line */}
      <div className="border-b border-white/10 mx-10" />

    </section>
  )
}
