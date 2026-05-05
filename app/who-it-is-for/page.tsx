import HeroSection from '@/components/who-its-for/Hero'
import JoyzenOffers from '@/components/who-its-for/joyzenoffers'
import WhatJoyzenWillOffer from '@/components/who-its-for/whatjoyzenwiloffer'
import { Metadata } from 'next';
import React from 'react'

export const metadata:Metadata = {
  title: "Who Joyzen Is For | Fertility & Hormonal Care for Every Stage",

  description:
    "Joyzen provides personalized fertility and reproductive healthcare for individuals, couples, teens, and men. From PCOS and hormone balance to conception and long-term health, get continuous care at every stage.",

  keywords: [
    "Fertility care for couples",
    "PCOS treatment Chennai",
    "Hormone imbalance treatment India",
    "Fertility support for men",
    "Reproductive health for teens",
    "Pre pregnancy care India",
    "Women fertility care Chennai",
    "Personalized fertility programs",
    "Continuous reproductive healthcare",
    "Fertility clinic Chennai"
  ],

  openGraph: {
    title: "Who Joyzen Is For – Personalized Fertility Care",
    description:
      "From hormone balance to conception and long-term health, Joyzen supports individuals and couples at every stage of life.",
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
    </>
  )
}

export default page