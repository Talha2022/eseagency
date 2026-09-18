import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, transparentNav = false }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div>
        <div className={transparentNav ? 'absolute top-0 left-0 right-0 z-50' : ''}>
          <Navbar transparent={transparentNav} />
        </div>
        {children}
      </div>
      <Footer />
    </div>
  )
}
