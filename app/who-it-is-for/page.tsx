import HeroSection from '@/components/who-its-for/Hero'
import JoyzenOffers from '@/components/who-its-for/joyzenoffers'
import WhatJoyzenWillOffer from '@/components/who-its-for/whatjoyzenwiloffer'
import { Metadata } from 'next';
import React from 'react'

export const metadata:Metadata = {
  title: "Who Joyzen Is For | Innovation to Health Tech & Human Longevity",

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
    title: "Who Joyzen Is For – Innovation to Health Tech & Human Longevity",
    description:
      "Joyzen is innovation to health tech for human longevity.",
    url: "https://joyzen.in/who-it-is-for",
    siteName: "Joyzen",
    locale: "en_IN",
    type: "website",
  },


};


const page = () => {
  return (
    <>
      <HeroSection />
      <JoyzenOffers />
      <WhatJoyzenWillOffer />
      <section className="relative w-full overflow-hidden bg-white py-12 md:py-20">
        <div className="whitespace-nowrap animate-scroll-text">
          <span className="inline-block text-[120px] sm:text-[150px] md:text-[200px] font-medium text-[#1A1A1A] leading-none tracking-tight px-4">
            Wherever you are, Joyzen meets you there, and stays with you.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="inline-block text-[120px] sm:text-[150px] md:text-[200px] font-medium text-[#1A1A1A] leading-none tracking-tight px-4">
            Wherever you are, Joyzen meets you there, and stays with you.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="inline-block text-[120px] sm:text-[150px] md:text-[200px] font-medium text-[#1A1A1A] leading-none tracking-tight px-4">
            Wherever you are, Joyzen meets you there, and stays with you.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="inline-block text-[120px] sm:text-[150px] md:text-[200px] font-medium text-[#1A1A1A] leading-none tracking-tight px-4">
            Wherever you are, Joyzen meets you there, and stays with you.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </section>
    </>
  )
}

export default page