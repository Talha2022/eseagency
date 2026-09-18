/**
 * ServiceStatement — large editorial quote with stats below a divider.
 *
 * Props:
 *   label  – small top-left label (default "This is ESE")
 *   text   – the large statement paragraph
 *   stats  – array of { value, label } objects (default: Projects / Awards / Years)
 */
export default function ServiceStatement({
  label = 'This is ESE',
  text,
  stats = [
    { value: '80', label: 'Projects' },
    { value: '17', label: 'Awards' },
    { value: '7',  label: 'Years of Experience' },
  ],
}) {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Top border */}
      <div className="border-t border-white/10 mx-10" />

      {/* Upper block — label + large text */}
      <div className="px-10 pt-16 pb-20 max-w-7xl mx-auto">
        <div className="flex gap-16">

          {/* Left — small label */}
          <div className="w-64 shrink-0 pt-2">
            <span className="text-xs tracking-widest text-white/50 uppercase">
              {label}
            </span>
          </div>

          {/* Right — large statement */}
          <div className="flex-1">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              {text}
            </p>
          </div>

        </div>
      </div>

      {/* Mid divider */}
      <div className="border-t border-white/10 mx-10" />

      {/* Lower block — stats */}
      <div className="px-10 pt-12 pb-16 max-w-7xl mx-auto">
        <div className="flex gap-16">

          {/* Left spacer — keeps stats aligned with the text column */}
          <div className="w-64 shrink-0" />

          {/* Stats row */}
          <div className="flex-1 flex gap-72">
            {stats.map(({ value, label: statLabel }) => (
              <div key={statLabel} className="flex flex-col gap-2">
                <span className="text-5xl sm:text-6xl font-bold text-white leading-none">
                  {value}
                </span>
                <span className="text-xs tracking-widest text-white/50 uppercase">
                  {statLabel}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom border */}
      <div className="border-b border-white/10 mx-10" />

    </section>
  )
}
