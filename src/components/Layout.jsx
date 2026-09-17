import Navbar from './Navbar'

export default function Layout({ children, transparentNav = false }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className={transparentNav ? 'absolute top-0 left-0 right-0 z-50' : ''}>
        <Navbar transparent={transparentNav} />
      </div>
      {children}
    </div>
  )
}
