import React from 'react'
import banner from '@/assets/about/about_banner.jpg'
import Hero from '@/reUseable/Hero'

const HeroSection = () => {
  return (
    <div>
      <Hero
        title="A New Health System"
        description1="Joyzen is not a clinic."
        description2="It’s a new way of delivering reproductive healthcare."
        backgroundImage={banner}
      />
    </div>
  )
}

export default HeroSection