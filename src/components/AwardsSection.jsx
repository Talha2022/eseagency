const awards = [
  { year: '2026', award: 'Brand Experience Gold', platform: 'Best of Swiss Web',   client: 'Migros' },
  { year: '2026', award: 'Creativity Silver',     platform: 'Best of Swiss Web',   client: 'Migros' },
  { year: '2025', award: 'Site of the Day',        platform: 'Awwwards',            client: 'Praxis Leandra Isler' },
  { year: '2025', award: 'Best Campaign',          platform: 'Swiss Digital Awards', client: 'Denner' },
  { year: '2024', award: 'Social Media Gold',      platform: 'Best of Swiss Web',   client: 'Feldschlösschen' },
  { year: '2024', award: 'Innovation Award',       platform: 'Cannes Lions',         client: 'Migros Mobile' },
]

export default function AwardsSection() {
  return (
    <section className="bg-black text-white px-10 py-24">

      {/* Heading */}
      <h2 className="text-[clamp(28px,4vw,56px)] font-bold leading-tight tracking-tight max-w-2xl mb-16">
        <span className="text-white">Our quality can be proven.</span>{' '}
        <span className="text-white/40">These are the awards that we are particularly proud of.</span>
      </h2>

      {/* Table */}
      <div className="w-full">
        {/* Header row */}
        <div className="grid grid-cols-[100px_1fr_1fr_1fr_32px] gap-4 pb-3 border-b border-white/10 text-xs text-white/40 tracking-widest uppercase">
          <span>Year</span>
          <span>Award</span>
          <span>Platform</span>
          <span>Client</span>
          <span />
        </div>

        {/* Award rows */}
        {awards.map((a, i) => (
          <div
            key={i}
            className="grid grid-cols-[100px_1fr_1fr_1fr_32px] gap-4 py-5 border-b border-white/10 items-center group cursor-pointer hover:bg-white/[0.03] transition-colors duration-200 -mx-2 px-2 rounded"
          >
            <span className="text-white/50 text-sm">{a.year}</span>
            <span className="text-white font-semibold text-sm">{a.award}</span>
            <span className="text-white/70 text-sm">{a.platform}</span>
            <span className="text-white/70 text-sm">{a.client}</span>
            <span className="text-white/40 group-hover:text-white transition-colors duration-200 text-sm">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}
