import React from 'react'
import Image from 'next/image'
import founder from '@/assets/about/kushal.jpg'

const Future = () => {
    return (
        <section className="relative w-full py-24 md:py-40 flex flex-col items-center justify-center overflow-hidden bg-white">
            {/* Background Soft Gradients */}
            {/* Background Soft Gradients and Logo */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu" style={{ transform: 'translateZ(0)' }}>
                <div className="absolute -bottom-[5%] -left-[40%] md:left-[-50%] w-[80%] h-[40%] bg-[#b4def7] opacity-80 rounded-[100%] md:blur-[80px] md:block hidden" />
                <div className="absolute -bottom-[5%] -left-[40%] w-[80%] h-[40%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.8)_0%,transparent_70%)]" />

                <div className="absolute -bottom-[5%] -right-[30%] w-[70%] h-[30%] bg-[#036132] opacity-70 rounded-[100%] md:blur-[80px] md:block hidden" />
                <div className="absolute -bottom-[5%] -right-[30%] w-[70%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.5)_0%,transparent_70%)]" />

                <div className="absolute -bottom-[20%] right-[20%] md:right-[-10%] w-[80%] h-[30%] bg-[#036132] opacity-50 rounded-[100%] md:blur-[140px] md:block hidden" />
                <div className="absolute -bottom-[20%] right-[20%] w-[80%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.3)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10  px-6 flex flex-col items-center text-center">
                <div className="space-y-4 mb-12">
                    <span className="text-2xl md:text-3xl font-medium text-[#1A1A1A]">
                        The Future
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tight text-[#1A1A1A] leading-tight">
                        We are building
                    </h2>
                </div>

                <div className="relative w-32 h-32 md:w-[15dvw] md:h-[30dvh] rounded-full overflow-hidden mb-12 border-4 border-white shadow-xl">
                    <Image
                        src={founder}
                        alt="Founder"
                        fill
                        className="object-cover object-top"
                    />
                </div>

                <p className="md:max-w-6xl text-lg md:text-xl lg:text-[1.35rem] text-[#1A1A1A] leading-[1.2] md:leading-[1.6] font-medium font-sans">
                    We are entering a new era of human life. Where living longer is becoming possible and how we build our health from the beginning defines how long and how well we live Yet healthcare is still built for illness, not for life. Joyzen exists to change that. We are building a continuous care system for reproductive health, human performance, and longevity, where every individual is guided, supported, and understood over time. Because the future of humanity will not be defined by treatment, but by how well we take care of life itself.
                </p>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
        </section>
    )
}

export default Future
