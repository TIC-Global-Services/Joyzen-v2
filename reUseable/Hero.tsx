'use client'
import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation'

interface HeroProps {
  title: string;
  description1: React.ReactNode;
  description2: React.ReactNode;
  backgroundImage?: StaticImageData;
  backgroundVideo?: string;
  className?: string;
  children?: React.ReactNode;
}

const Hero = ({ 
  title, 
  description1, 
  description2, 
  backgroundImage, 
  backgroundVideo,
  className = "",
  children
}: HeroProps) => {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '/who-it-is-for/' || pathname === '/how-we-work/' || pathname === '/contact/'
  const textColorClass = isHome ? 'text-black' : 'text-white'

  return (
    <div className={`relative w-full min-h-screen flex items-end ${className}`}>
      {/* Background Media */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {backgroundVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : backgroundImage ? (
          <Image 
            src={backgroundImage}
            alt={title || "Hero background"}
            fill
            priority
            className="object-cover"
          />
        ) : null}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>
      <div className="relative flex justify-end items-end px-6 md:px-12 xl:px-24 pb-20 z-15">
        <div className={`max-w-5xl ${textColorClass}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.750rem] font-epilogue font-normal md:font-medium leading-[1.2] tracking-tight mb-6 drop-shadow-md">
            {title}
          </h1>
          <div className="text-lg sm:text-xl font-epilogue lg:text-xl font-light drop-shadow-md leading-[1.2] tracking-tight whitespace-pre-wrap">
            {description1}
            <br />
            {description2}
          </div>
        </div>
      </div>
      <div className=" md:hidden absolute inset-x-0 bottom-0 h-full z-11 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
    </div>
  )
}

export default Hero
