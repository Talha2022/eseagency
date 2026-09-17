import ScrollStackSection from './ScrollStackSection'
import imgCampaigning from '../assets/homepage/expertise-campaigning.jpg'
import imgSocial from '../assets/homepage/expertise-social.jpg'
import imgWebsites from '../assets/homepage/expertise-websites.jpg'
import imgBranding from '../assets/homepage/expertise-branding.jpg'

const sections = [
  {
    label:           'Campaigning',
    title:           'Storytelling — Employer Branding',
    taglines:        ['Bold ideas. Real impact.', 'We make brands unforgettable.', 'From concept to campaign.'],
    background:      'linear-gradient(135deg, #F4A020 0%, #EE8020 25%, #E8551F 55%, #E8304A 80%, #DE2A3A 100%)',
    foregroundImage: imgCampaigning,
  },
  {
    label:           'Social Media',
    title:           'Content — Community — Growth',
    taglines:        ['Always-on brand presence.', 'Scroll-stopping content.', 'Built for the feed.'],
    background:      'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
    foregroundImage: imgSocial,
  },
  {
    label:           'Websites',
    title:           'Design — Build — Launch',
    taglines:        ['Pixel-perfect execution.', 'Fast. Beautiful. Functional.', 'Your brand, online.'],
    background:      'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    foregroundImage: imgWebsites,
  },
  {
    label:           'Branding',
    title:           'Identity — Strategy — Voice',
    taglines:        ['Timeless meets zeitgeist.', 'Brands that mean something.', 'Consistency at every touchpoint.'],
    background:      'linear-gradient(135deg, #200122 0%, #6f0000 100%)',
    foregroundImage: imgBranding,
  },
]

export default function WhyUsSection() {
  return (
    <>
      {/* Why us text block */}
      <section className="bg-black text-white px-10 py-24">
        <div className="max-w-5xl mx-auto flex gap-16">
          <p className="text-xs tracking-widest text-white/50 whitespace-nowrap pt-2 shrink-0">
            Why us
          </p>
          <p className="text-[clamp(24px,3.5vw,48px)] font-light leading-tight tracking-tight">
            We see our clients as strategic partners. This means: In close
            cooperation, we are there for a wide range of marketing tasks. We
            implement our ideas and concepts seamlessly — everything from a single
            source. We are not satisfied with "run-of-the-mill". We challenge
            ourselves and others. This is how we guarantee high-quality and
            sustainable results.
          </p>
        </div>
      </section>

      {/* Scroll-stacking service panels */}
      <ScrollStackSection sections={sections} />
    </>
  )
}
