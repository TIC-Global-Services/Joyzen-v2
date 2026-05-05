import React from 'react'
import HeroSection from '@/components/howwework/Hero'
import WhatWeAim from '@/components/howwework/whatweaim'
import BookACall from '@/components/about/bookacall'
import ContinuesCare from '@/components/howwework/continuescare'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "How Joyzen Works | Continuous Fertility Care & IVF Process",

  description:
    "Discover how Joyzen delivers continuous fertility care with a dedicated doctor, daily guidance, hormone tracking, and personalized plans. Modern reproductive healthcare in Chennai.",

  keywords: [
    "How fertility treatment works",
    "IVF process Chennai",
    "Continuous fertility care",
    "Hormone tracking treatment",
    "Fertility consultation online India",
    "Personalized reproductive healthcare",
    "Fertility clinic Chennai process",
    "Women health care journey",
    "Fertility care steps"
  ],

  openGraph: {
    title: "How Joyzen Works – A New Standard in Fertility Care",
    description:
      "From understanding your body to continuous care and tracking, Joyzen provides a complete fertility care system.",
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