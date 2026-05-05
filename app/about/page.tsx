import HeroSection from '@/components/about/Hero'
import Buildformodern from '@/components/about/buildformodern'
import Joyzen from '@/components/about/joyzen'
import Future from '@/components/about/future'
import BookACall from '@/components/about/bookacall'
import React from 'react'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "About Joyzen | A New Approach to Reproductive Healthcare",

  description:
    "Joyzen is redefining reproductive healthcare with continuous, personalized care. Combining medical expertise, lifestyle guidance, and long-term health support for better outcomes.",

  keywords: [
    "About Joyzen",
    "Reproductive healthcare system",
    "Fertility care India",
    "Modern healthcare approach",
    "Continuous care fertility",
    "Women health and lifestyle",
    "Fertility clinic Chennai",
    "Holistic fertility care"
  ],

  openGraph: {
    title: "About Joyzen – The Future of Reproductive Healthcare",
    description:
      "Joyzen is building a continuous care system for fertility, hormones, and long-term health. Designed for modern life.",
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