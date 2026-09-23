import Layout from '../components/Layout'
import AgencyAbout from '../components/AgencyAbout'
import TeamSection from '../components/TeamSection'
import AwardsSection from '../components/AwardsSection'
import HistorySection from '../components/HistorySection'
import StaticBackground from '../components/StaticBackground'
import BlogSection from '../components/BlogSection'

export default function AgencyPage() {
  return (
    <Layout>
      <StaticBackground opacity={0.035} />

      {/* Hero */}
      <div className="relative z-10 px-6 sm:px-10 pt-8 sm:pt-12 pb-10 sm:pb-16">
        <h1 className="text-[clamp(56px,16vw,200px)] font-bold leading-none tracking-tight mb-16 sm:mb-32">
          Agency
        </h1>
        <div className="border-t border-white/10" />
      </div>

      <AgencyAbout />
      <HistorySection />
      <TeamSection />
      <AwardsSection />
      <BlogSection />
    </Layout>
  )
}
