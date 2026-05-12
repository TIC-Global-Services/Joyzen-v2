import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative w-full h-[50svh] sm:h-[60svh] lg:h-[65svh] bg-[#b4def7] flex flex-col justify-between p-8 sm:p-10 lg:p-[4rem] overflow-hidden">
      {/* Top row */}
      <div className="flex justify-center sm:justify-end gap-6 sm:gap-12 text-xs sm:text-sm lg:text-base font-sans font-medium  relative z-10 tracking-tight md:mb-10  ">
        <a href="mailto:info@joyzenlife.in" className="hover:opacity-60 transition-opacity">Email: info@joyzenlife.in</a>
        <a href="https://www.instagram.com/joyzen.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Instagram: @joyzen.in</a>
      </div>
      <div className="absolute  top-0 z-40 left-0 w-full h-[30%] bg-gradient-to-b from-white via-white/30 to-transparent pointer-events-none" />
      {/* Logo center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none  z-0">
        <div className="relative w-full h-full will-change-transform">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Joyzen_glass_footer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className='flex px-[10%] md:px-[5%] text-xs md:text-sm text-white md:text-black  flex-col absolute bottom-[10%] md:bottom-[5%] z-40 left-0 w-full sm:flex-row justify-center items-center md:justify-between'>
        <span className="text-center sm:text-left">2026 Joyzen. Built for healthcare. Designed for trust.</span>
        <Link href="https://www.theinternetcompany.one/" target="_blank" rel="noopener noreferrer">
          <span className="text-center md:text-right">Designed and Developed by TIC Global Services</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer;
