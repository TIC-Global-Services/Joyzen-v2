"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import alwaysaccesible from '@/assets/home/Always_Accessible.jpg'
import samedoctor from '@/assets/home/Same_doctor.jpg'
import continuesguide from '@/assets/home/Continuously_Guided.png'
import adoctor from '@/assets/home/doctor_who_actually_knows_you.jpg'
import lifestyle from '@/assets/home/Lifestyle.jpg'
import followup from '@/assets/home/Follow-ups.jpg'

interface BenefitItem {
    title: string;
    description: string;
    image: StaticImageData;
    width: string;
    isLarge?: boolean;
    maxW?: string;
}

const WhatYouGet = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const benefitItems: BenefitItem[] = [
        {
            title: "Always Accessible",
            description: "Speak to your doctor anytime, not just during appointment.",
            image: alwaysaccesible,
            width: "md:w-[45%]",
            isLarge: true,
            maxW: "max-w-[320px]"
        },
        {
            title: "Same doctor, Everywhere",
            description: "Online or in-clinic, your care stays with one person.",
            image: samedoctor,
            width: "md:w-[32%]",
            maxW: "max-w-[220px]"
        },
        {
            title: "Continuously Guided",
            description: "Your progress is tracked, adjusted, and supported every day.",
            image: continuesguide,
            width: "md:w-[23%]",
            maxW: "max-w-[180px]"
        },
        {
            title: "A doctor who actually knows you",
            description: "Not new opinions every time, real understanding.",
            image: adoctor,
            width: "md:w-[23%]",
            maxW: "max-w-[180px]"
        },
        {
            title: "Lifestyle, not just prescriptions",
            description: "Sleep, stress, nutrition, fitness, all part of treatment.",
            image: lifestyle,
            width: "md:w-[32%]",
            maxW: "max-w-[220px]"
        },
        {
            title: "Follow-ups that don't stop",
            description: "Care continues between visits, automatically.",
            image: followup,
            width: "md:w-[45%]",
            isLarge: true,
            maxW: "max-w-[320px]"
        }
    ];

    const topRow = benefitItems.slice(0, 3);
    const bottomRow = benefitItems.slice(3);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollPosition = scrollRef.current.scrollLeft;
            const cardWidth = scrollRef.current.offsetWidth * 0.85; // matching min-w-[85vw]
            const newIndex = Math.round(scrollPosition / cardWidth);
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    };

    const BenefitCard = ({ item, isEndRow, isMobile }: { item: BenefitItem, isEndRow?: boolean, isMobile?: boolean }) => (
        <div className={`relative w-full ${!isMobile ? item.width : ''} ${item.isLarge ? 'h-[380px] md:h-[35dvh]' : 'h-[380px] md:h-[30dvh]'} rounded-2xl overflow-hidden group shadow-sm ${isEndRow ? 'self-end' : 'self-start'}`}>
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
            <div className={`absolute bottom-0 left-0 ${item.isLarge ? 'p-8 md:p-10' : 'p-6'} text-white`}>
                <h3 className={`${item.isLarge ? 'text-xl md:text-2xl' : 'text-lg'} font-bold mb-1 md:mb-2`}>
                    {item.title}
                </h3>
                <p className={`${item.isLarge ? 'text-sm md:text-base' : 'text-xs md:text-sm'} opacity-90 ${item.maxW} leading-relaxed`}>
                    {item.description}
                </p>
            </div>
        </div>
    );

    return (
        <section className="relative py-24 px-4 md:px-10 overflow-hidden font-satoshi bg-white/10 backdrop-blur-[2px]">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none transform-gpu" style={{ transform: 'translateZ(0)' }}>
                <div className="absolute -bottom-[5%] -left-[40%] md:left-[-50%] w-[80%] h-[40%] bg-[#b4def7] opacity-80 rounded-[100%] md:blur-[80px] md:block hidden" />
                <div className="absolute -bottom-[5%] -left-[40%] w-[80%] h-[40%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.8)_0%,transparent_70%)]" />

                <div className="absolute -bottom-[5%] -right-[30%] w-[70%] h-[30%] bg-[#036132] opacity-70 rounded-[100%] md:blur-[80px] md:block hidden" />
                <div className="absolute -bottom-[5%] -right-[30%] w-[70%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.5)_0%,transparent_70%)]" />

                <div className="absolute -bottom-[20%] right-[20%] md:right-[-10%] w-[80%] h-[30%] bg-[#036132] opacity-50 rounded-[100%] md:blur-[140px] md:block hidden" />
                <div className="absolute -bottom-[20%] right-[20%] w-[80%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.3)_0%,transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-[2.5rem] font-medium text-center mb-16 leading-tight tracking-tight text-[#1A1A1A]">
                    Not online only, Not clinic only. With <span className="text-[#EF8F60]">Joyzen</span>, you get:
                </h2>

                {/* Mobile Slider */}
                <div className="md:hidden">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar scroll-smooth"
                    >
                        {benefitItems.map((item, idx) => (
                            <div key={`mobile-${idx}`} className="min-w-[85vw] snap-center">
                                <BenefitCard item={item} isMobile />
                            </div>
                        ))}
                    </div>
                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {benefitItems.map((_, idx) => (
                            <div
                                key={`dot-${idx}`}
                                className={`h-1 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#EF8F60]' : 'w-2 bg-[#EF8F60]/20'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex flex-col gap-2">
                    {/* Top Row */}
                    <div className="flex flex-col md:flex-row gap-2 h-full items-center justify-center">
                        {topRow.map((item, idx) => (
                            <BenefitCard key={`top-${idx}`} item={item} />
                        ))}
                    </div>


                    <div className="flex flex-col md:flex-row gap-2 items-start">
                        {bottomRow.map((item, idx) => (
                            <BenefitCard key={`bottom-${idx}`} item={item} isEndRow />
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </section>
    )
}


export default WhatYouGet

