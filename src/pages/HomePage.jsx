import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import WhyUsSection from '../components/WhyUsSection'
import ClientsSection from '../components/ClientsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar floats over the hero */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar transparent />
      </div>

      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <ClientsSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </div>
  )
}
