import React from 'react'
import banner from '@/assets/howwework/how_we_work_banner.jpg'
import Hero from '@/reUseable/Hero'

const HeroSection = () => {
  return (
    <div>
      <Hero
        title="Care that supports your reproductive health at every stage of life."
        description1="Joyzen supports individuals and couples who want to better understand their bodies,"
        description2="maintain hormonal balance, and receive continuous guidance for their reproductive health."
        backgroundImage={banner}
        contentMaxWidth="max-w-7xl"
      />
    </div>
  )
}

export default HeroSection