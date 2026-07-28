import React from 'react'
import HeroSection from '@/components/products/Hero'
import LaunchingSoon from '@/components/products/launchingsoon'
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Products | Innovation to Health Tech & Human Longevity – Joyzen",

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
    title: "Joyzen Products – Innovation to Health Tech & Human Longevity",
    description:
      "Joyzen is innovation to health tech for human longevity.",
    url: "https://joyzen.in/products",
    siteName: "Joyzen",
    // images: [
    //   {
    //     url: "/og-products.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Joyzen Fertility Products",
    //   },
    // ],
    locale: "en_IN",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
        <HeroSection/>
        <LaunchingSoon/>
    </div>
  )
}

export default page