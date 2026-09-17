import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AgencyPage from './pages/AgencyPage'
import ContactPage from './pages/ContactPage'
import ServicePage from './pages/ServicePage'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/agency" element={<AgencyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/expertise/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
