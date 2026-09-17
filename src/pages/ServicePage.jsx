import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import ServiceHero from '../components/expertise/ServiceHero'
import ServiceIntro from '../components/expertise/ServiceIntro'
import ServiceOffers from '../components/expertise/ServiceOffers'

import bgCampaigning from '../assets/homepage/expertise-campaigning.jpg'
import bgSocial      from '../assets/homepage/expertise-social.jpg'
import bgBranding    from '../assets/homepage/expertise-branding.jpg'
import bgWebsites    from '../assets/homepage/expertise-websites.jpg'
import bgEmployer    from '../assets/Agency/imgi_60_651d15fb8f27f4a03c14b041_ese-jobs-team13-p-500.jpg'

const services = {
  campaigning: {
    title: 'Campaigning',
    label: 'Campaigning',
    bg: bgCampaigning,
    intro: 'We create campaigns that cut through the noise — provocative, precise, and built to move people. From concept to execution, we combine strategic thinking with creative boldness to deliver campaigns that generate real impact for your brand.',
    offers: [
      'Creative Concept & Strategy',
      'Campaign Production',
      'Cross-Channel Media',
      'Performance & Analytics',
    ],
  },
  'social-media': {
    title: 'Social Media',
    label: 'Social Media',
    bg: bgSocial,
    intro: 'Social media is where culture happens. We craft content that fits natively into feeds, sparks conversation, and builds communities. From TikTok to Instagram, we speak the language of every platform — and the people on it.',
    offers: [
      'Content Strategy & Creation',
      'Community Management',
      'Short-form & Reels Production',
      'Paid Social Ads',
    ],
  },
  'branding-design': {
    title: 'Branding & Design',
    label: 'Branding & Design',
    bg: bgBranding,
    intro: 'A strong brand is more than a logo — it is a feeling, a promise, a world. We build visual identities that are coherent, timeless, and unmistakably yours. Every touchpoint considered, every detail intentional.',
    offers: [
      'Brand Strategy & Positioning',
      'Visual Identity & Logo Design',
      'Design Systems & Guidelines',
      'Brand Collateral',
    ],
  },
  'employer-branding': {
    title: 'Employer Branding',
    label: 'Employer Branding',
    bg: bgEmployer,
    intro: 'The best talent chooses companies with a story worth joining. We help you tell yours — authentically and compellingly. From culture communication to recruitment campaigns, we position you as the employer people want to work for.',
    offers: [
      'EVP & Employer Positioning',
      'Recruitment Campaigns',
      'Employee Storytelling',
      'Culture & Onboarding Asset Design',
    ],
  },
  websites: {
    title: 'Websites',
    label: 'Websites',
    bg: bgWebsites,
    intro: 'Our web experiences are based on coherent concepts — individually tailored to the use case. Our focus: functionality, storyline, gamification, or other web experiences. Key in all our over 80 projects: efficient user guidance, modern design, high-quality programming, and the cutting-edge web development tool Webflow.',
    offers: [
      'Concept/Wireframing',
      'Web Design',
      'Web Development',
      'SEO measures',
    ],
  },
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = services[slug] ?? {
    title: slug,
    label: slug,
    bg: bgWebsites,
    intro: 'Our web experiences are based on coherent concepts — individually tailored to the use case.',
    offers: [
      'Concept/Wireframing',
      'Web Design',
      'Web Development',
      'SEO measures',
    ],
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <Layout transparentNav>
      <ServiceHero
        title={service.title}
        label={service.label}
        bgImage={service.bg}
      />

      <ServiceIntro text={service.intro} />

      {/* Offers Section with TV Static hover effect */}
      <ServiceOffers offers={service.offers} />

      <Footer />
    </Layout>
  )
}
