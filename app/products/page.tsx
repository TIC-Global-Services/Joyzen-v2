import React from 'react'
import HeroSection from '@/components/products/Hero'
import LaunchingSoon from '@/components/products/launchingsoon'
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Fertility Health Products | Launching Soon – Joyzen",

  description:
    "Joyzen is launching scientifically designed products to support reproductive health, hormones, and fertility. Stay tuned for innovative solutions built for modern life.",

  keywords: [
    "Fertility products India",
    "Reproductive health supplements",
    "Hormone support products",
    "Women fertility health products",
    "Fertility care Chennai",
    "Joyzen products",
    "IVF support supplements",
    "Fertility wellness products"
  ],

  openGraph: {
    title: "Joyzen Fertility Products – Coming Soon",
    description:
      "Scientifically designed products to support reproductive health and fertility. Launching soon.",
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