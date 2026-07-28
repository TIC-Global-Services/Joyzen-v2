import HeroSection from '@/components/about/Hero'
import Buildformodern from '@/components/about/buildformodern'
import Joyzen from '@/components/about/joyzen'
import Future from '@/components/about/future'
import BookACall from '@/components/about/bookacall'
import React from 'react'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "About Joyzen | Innovation to Health Tech & Human Longevity",

  description:
    "Joyzen is innovation to health tech for human longevity.",

  keywords: [
    "Joyzen",
    "Innovation to health tech",
    "Human longevity",
    "Health tech innovation",
    "Longevity healthcare"
  ],

  openGraph: {
    title: "About Joyzen – Innovation to Health Tech & Human Longevity",
    description:
      "Joyzen is innovation to health tech for human longevity.",
    url: "https://joyzen.in/about",
    siteName: "Joyzen",
    // images: [
    //   {
    //     url: "/og-about.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Joyzen Healthcare System",
    //   },
    // ],
    locale: "en_IN",
    type: "website",
  },

};

const page = () => {
  return (
    <>
   <HeroSection/>
   <Buildformodern/>
   <Joyzen/>
   <Future/>
   <BookACall/>
   </>
    
  )
}

export default page