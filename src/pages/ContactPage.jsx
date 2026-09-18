import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StaticBackground from '../components/StaticBackground'
import emanuelImg from '../assets/Contact/imgi_10_65d394c255321c24c981b193_ese-profilbild-emanuel-p-500.jpg'
import keyvisual  from '../assets/Contact/imgi_9_65310415aea0e5cfda5f0647_ese-keyvisual-contact2.jpg'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#121316] text-white flex flex-col justify-between overflow-x-hidden relative font-sans">
      {/* Top Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50 w-full pointer-events-auto">
        <Navbar transparent={true} />
      </div>

      {/* Main Split Layout */}
      <div className="flex-1 w-full flex flex-col lg:flex-row min-h-screen">

        {/* LEFT COLUMN: Contact Cards & Details */}
        <div className="w-full lg:w-[48%] xl:w-[45%] 2xl:w-[42%] relative px-6 sm:px-10 lg:px-14 pt-28 pb-14 flex flex-col justify-between z-10"
          style={{ backgroundColor: '#1c1c1e' }}
        >
          {/* TV static overlay scoped to left column */}
          <StaticBackground opacity={0.07} />
          <div className="relative z-10">
            {/* Main Title */}
            <h1 className="text-[56px] sm:text-[68px] lg:text-[76px] font-bold tracking-tight text-white mb-6 sm:mb-8 leading-none">
              Contact
            </h1>

            {/* Card 1: Emanuel Greeting */}
            <div className="bg-[#222428] hover:bg-[#26282e] border border-white/5 rounded-2xl p-5 sm:p-6 mb-4 sm:mb-5 transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-4 sm:gap-5">
                <img
                  src={emanuelImg}
                  alt="Emanuel"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 border border-white/10 shadow-md"
                />
                <div className="text-sm sm:text-base text-white/80 leading-snug sm:leading-relaxed">
                  Hi I am Emanuel and I will be happy to help you with your project 👏 request.
                  <br />
                  <span className="font-bold text-white">Just write me an email</span>
                  <br />
                  <a
                    href="mailto:emanuel@eseagency.ch"
                    className="font-bold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
                  >
                    emanuel@eseagency.ch
                  </a>
                  .
                </div>
              </div>
            </div>

            {/* Card 2: 3 Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5">
              {/* Call */}
              <button
                type="button"
                onClick={() => (window.location.href = 'tel:+41522123071')}
                className="bg-[#282a30] hover:bg-[#32353c] border border-white/5 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-200 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors mt-2">
                  Call
                </span>
              </button>

              {/* Email */}
              <button
                type="button"
                onClick={() => (window.location.href = 'mailto:info@eseagency.ch')}
                className="bg-[#282a30] hover:bg-[#32353c] border border-white/5 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-200 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors mt-2">
                  Email
                </span>
              </button>

              {/* Route */}
              <button
                type="button"
                onClick={() =>
                  window.open(
                    'https://maps.google.com/?q=Grubenstrasse+54+8045+Zurich+Switzerland',
                    '_blank'
                  )
                }
                className="bg-[#282a30] hover:bg-[#32353c] border border-white/5 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-200 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors mt-2">
                  Route
                </span>
              </button>
            </div>

            {/* Card 3: Phone Detail */}
            <div className="bg-[#222428] hover:bg-[#26282e] border border-white/5 rounded-2xl p-5 mb-4 sm:mb-5 transition-all duration-200 group cursor-pointer">
              <p className="text-xs text-white/40 font-medium tracking-wide mb-1">Phone</p>
              <a
                href="tel:+41522123071"
                className="text-base sm:text-lg font-semibold text-white/90 group-hover:text-white transition-colors no-underline block"
              >
                +41 52 212 30 71
              </a>
            </div>

            {/* Card 4: Email Detail */}
            <div className="bg-[#212328] hover:bg-[#26282e] border border-white/5 rounded-2xl p-5 mb-4 sm:mb-5 transition-all duration-200 group cursor-pointer">
              <p className="text-xs text-white/40 font-medium tracking-wide mb-1">Email</p>
              <a
                href="mailto:info@eseagency.ch"
                className="text-base sm:text-lg font-semibold text-white/90 group-hover:text-white transition-colors no-underline block"
              >
                info@eseagency.ch
              </a>
            </div>

            {/* Card 5: Address Detail */}
            <div className="bg-[#212328] hover:bg-[#26282e] border border-white/5 rounded-2xl p-5 transition-all duration-200">
              <p className="text-xs text-white/40 font-medium tracking-wide mb-1">Address</p>
              <div className="text-base sm:text-lg font-semibold text-white/90 leading-snug">
                ESE Agency
                <br />
                Grubenstrasse 54
                <br />
                8045 Zurich
                <br />
                Switzerland
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Keyvisual background */}
        <div
          className="w-full lg:w-[52%] xl:w-[55%] 2xl:w-[58%] min-h-[660px] lg:min-h-screen relative flex flex-col justify-end items-center overflow-hidden"
        >
          {/* Keyvisual background image */}
          <img
            src={keyvisual}
            alt="ESE Agency contact"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          

          {/* 3D Billboard & Stand Container */}
          <div className="relative z-10 w-full max-w-[660px] px-4 sm:px-8 pb-0 flex flex-col items-center justify-end">
            
            {/* The Illuminated Lightbox Sign Box */}
            <div className="relative w-full mb-[-6px]">
              
              {/* Outer Black Tubular Frame */}
              <div className="w-full rounded-[26px] p-2 sm:p-2.5 bg-[#090a0d] shadow-2xl border border-black/50 relative">
                
                {/* Top Metal Frame Handle Loop */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-8 border-[4px] border-[#090a0d] rounded-t-2xl bg-transparent pointer-events-none" />

               
              </div>

              {/* Power Cable Wire Hanging down on Left Side */}
              <svg
                className="absolute top-1/2 -left-6 sm:-left-10 w-16 sm:w-20 h-[340px] pointer-events-none z-20"
                viewBox="0 0 100 340"
                fill="none"
              >
                <path
                  d="M 55 0 C 15 90, 5 200, 20 260 C 35 300, 75 320, 90 340"
                  stroke="#08090b"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Dark Pedestal Box Stand */}
            <div className="w-[84%] sm:w-[88%] h-64 sm:h-80 bg-gradient-to-b from-[#090a0d] via-[#0c0d12] to-[#07080b] rounded-t-sm shadow-2xl border-t-2 border-x-2 border-black/80 relative z-0 flex items-center justify-center">
              {/* Subtle top edge highlight */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white/10" />
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
