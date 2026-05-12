import React from 'react'
import Image from 'next/image'
import logoPurple from '@/public/logo_purple.svg'
import Link from 'next/link'

const formattedDate = new Date().toISOString().split('T')[0]

const BookACall = () => {
  return (
    <section className="relative w-full py-24 px-6 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu" style={{ transform: 'translateZ(0)' }}>
        <div className="absolute md:bottom-[10%] bottom-[10%] left-[-10%] w-[50%] md:w-[40%] h-[40%] bg-[#b4def7] opacity-90 md:blur-[100px] blur-[20px] rounded-full" />
        {/* <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-[#f8e780] opacity-90 blur-[100px] rounded-full" /> */}
        <div className="absolute md:bottom-[-10%] bottom-[10%] md:right-[0%] right-[0%] md:w-[40%] w-[50%] h-[40%] bg-[#ddc4df] opacity-90 md:blur-[100px] blur-[20px] rounded-full" />
      </div>

      <div className="relative z-10 w-full md:max-w-7xl">
        <div className="bg-white/90 backdrop-blur-md border border-black/2.5 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          {/* Mobile Logo Background - Centered behind text */}
          <div className="absolute md:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-50 opacity-50 pointer-events-none z-0">
            <Image
              src={logoPurple}
              alt="Logo Background"
              fill
              className="object-contain blur-[2px]"
            />
          </div>

          <div className="relative z-10 flex-1 space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tight">
                Book a clarity call
              </h2>
              <p className="max-w-xl text-base md:text-xl leading-[1.1] tracking-tight font-normal">
                If you would like to understand your reproductive health better or learn how Joyzen can support your journey, you can schedule a conversation with our care team.
              </p>
            </div>

            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <Link href={`https://calendly.com/joyzen-system/15min?date=${formattedDate}`} target='_blank'>
                <button className='px-6 flex gap-2 text-sm lg:text-base items-center justify-center py-2.5 rounded-[2.625rem] border-[5.29px] border-[#FFFFFF0A] shadow-md font-epilogue font-medium bg-white/80 hover:bg-white transition-colors leading-none'>
                  Book Clarity Call
                  <span className="flex items-center"><Image src="/nav-icon.svg" alt="Icon" width={18} height={18} className="block" /></span>
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block relative w-64 h-64 flex-shrink-0 animate-pulse-slow">
            <Image
              src={logoPurple}
              alt="Joyzen Graphic"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
    </section>
  )
}

export default BookACall
