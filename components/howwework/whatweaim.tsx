import React from 'react'
import Image from 'next/image'
import whatweAim from '@/assets/howwework/what_we_aim.jpg'
import whereweheaded from '@/assets/howwework/where_we_headed.jpg'

const WhatWeAim = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#F9F9F7] font-satoshi overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-10">
          
          {/* Left Column: Image Top, Text Bottom */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl md:hidden md:text-4xl lg:text-[2.75rem] font-medium font-sans text-[#1A1A1A] mb-1 tracking-tight">
                Where We&apos;re Headed
              </h2>
            <div className="relative w-full aspect-[3/3] md:aspect-[4/2] rounded-3xl overflow-hidden shadow-sm">
              <Image
                src={whereweheaded}
                alt="Where We're Headed"
                fill
                style={{objectPosition:"30% 40%"}}
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl hidden md:block md:text-4xl lg:text-[2.75rem] font-medium font-sans text-[#1A1A1A] mb-6 tracking-tight">
                Where We&apos;re Headed
              </h2>
              <p className="text-[0.95rem] md:text-base leading-[1.2] tracking-tight font-epilogue font-normal">
                We Envision A Future Where Reproductive Healthcare Is Proactive, Personalized, And 
                Accessible At Every Stage Of Life. A Future Where People No Longer Wait For 
                Problems To Appear, But Instead Receive Guidance That Helps Them Stay Healthy 
                And Prepared For The Future. From First Cycles To Fertility Preparation To 
                Conception, Joyzen Aims To Support Healthier Individuals And Healthier Generations.
              </p>
            </div>
          </div>

          {/* Vertical Separator Line */}
          <div className="hidden lg:block w-[1px] self-stretch bg-black" />

          {/* Right Column: Text Top, Image Bottom */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1A1A1A] font-sans m-2 md:mb-6 tracking-tight">
                What We Aim To Do
              </h2>
              <div className="relative mb-4 md:hidden w-full aspect-[3/3] rounded-3xl overflow-hidden shadow-sm">
              <Image
                src={whatweAim}
                alt="What We Aim To Do"
                fill
                className="object-cover"
              />
            </div>
              <p className="text-[0.95rem] md:text-base leading-[1.2] font-epilogue font-normal">
                Our Mission Is To Empower People With Clarity, Prevention, And Personalized Medical 
                Support For Their Reproductive Health. Through Structured Programs And 
                Continuous Care, Joyzen Helps Individuals Maintain Hormonal Balance, Protect 
                Fertility, And Make Informed Health Decisions.
              </p>
            </div>
            <div className="relative hidden md:block w-full aspect-[4/2] rounded-3xl overflow-hidden shadow-sm">
              <Image
                src={whatweAim}
                alt="What We Aim To Do"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhatWeAim