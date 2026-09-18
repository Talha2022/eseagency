import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import WhyUsSection from '../components/WhyUsSection'
import ClientsSection from '../components/ClientsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'

export default function HomePage() {
  return (
    <Layout transparentNav>
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <ClientsSection />
      <TestimonialsSection />
      <BlogSection />
    </Layout>
  )
}
