import React from 'react'
import HeroSection from '@/components/howwework/Hero'
import WhatWeAim from '@/components/howwework/whatweaim'
import BookACall from '@/components/about/bookacall'
import ContinuesCare from '@/components/howwework/continuescare'

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