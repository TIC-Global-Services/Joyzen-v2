import React from 'react'
import HeroSection from '@/components/howwework/Hero'
import WhatWeAim from '@/components/howwework/whatweaim'
import BookACall from '@/components/about/bookacall'
import ContinuesCare from '@/components/howwework/continuescare'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "How Joyzen Works | Innovation to Health Tech & Human Longevity",

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
    title: "How Joyzen Works – Innovation to Health Tech & Human Longevity",
    description:
      "Joyzen is innovation to health tech for human longevity.",
    url: "https://joyzen.in/how-we-work",
    siteName: "Joyzen",
    // images: [
    //   {
    //     url: "/og-how-we-work.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Joyzen Fertility Care Process",
    //   },
    // ],
    locale: "en_IN",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <HeroSection />
       <ContinuesCare />
       <WhatWeAim />
      <BookACall/>
    </div>
  )
}

export default page