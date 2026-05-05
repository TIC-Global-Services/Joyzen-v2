import React from 'react'
import banner from '@/assets/home/home_hero_banner.png'
import Hero from '@/reUseable/Hero'

const HeroSection = () => {
  return (
    <div>
      <Hero
        title="Healthcare Was Built for Visitors. We Built It for Life."
        description1="Not just online.Not just a clinic."
        description2="A doctor who stays with you, online and in person."
        backgroundImage={banner}
      />
    </div>
  )
}

export default HeroSection