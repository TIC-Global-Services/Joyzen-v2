import React from 'react'
import banner from '@/assets/products/product_banner.png'
import Hero from '@/reUseable/Hero'

const HeroSection = () => {
  return (
    <div>
      <Hero
        title="Scientifically designed products to support reproductive health"
        description1=""
        description2=""
        backgroundImage={banner}
      />
    </div>
  )
}

export default HeroSection