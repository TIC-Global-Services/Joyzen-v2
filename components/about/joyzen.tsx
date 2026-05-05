"use client"
import React, { useState, useRef } from 'react'
import conceltings from '@/assets/about/concelting.jpg'
import software from '@/assets/about/software.png'
import Image from 'next/image'

const Joyzen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const col1 = [
    {
      type: 'card',
      title: "Beyond Visits",
      description: "Traditional care treats moments. Joyzen manages the entire journey continuously, not occasionally.",
    },
    {
      type: 'card',
      title: "Focused on Root, Not Symptoms",
      description: "Hormones, lifestyle, fertility, long-term health, everything connected, everything managed.",
    },
  ];

  const col2 = [
    {
      type: 'card',
      title: "Integrated Care",
      description: "Doctors, lifestyle, and emotional support, working together as one system.",
    },
    { type: 'logo' },
    {
      type: 'image',
      src: software,
      alt: "Software",
    },
  ];

  const col3 = [
    {
      type: 'image',
      src: conceltings,
      alt: "Consulting",
    },
    {
      type: 'card',
      title: "Designed for Better Outcomes",
      description: "Not more visits. Not more confusion. Clear direction. Continuous support. Real results.",
    },
  ];

  const mobileItems = [
    ...col1,
    col2[0],
    col2[2],
    ...col3,
  ];

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

  const renderItem = (item: any, index: number, isMobile?: boolean) => {
    const baseClasses = isMobile ? "h-[380px] w-full" : "flex-1 min-h-0 h-full";

    if (item.type === 'card') {
      return (
        <div key={index} className={`${baseClasses} group bg-white/40 backdrop-blur-md border border-[#EDEDED] rounded-xl p-8 md:p-10 text-left flex flex-col justify-end transition-all duration-300 hover:shadow-2xl shadow-xl hover:shadow-green-900/5`}>
          <h3 className="text-2xl md:text-[1.75rem] font-medium text-[#1A1A1A] mb-4 leading-tight">
            {item.title}
          </h3>
          <p className="text-[#555555] text-sm md:text-base leading-[1.2] tracking-tight font-medium">
            {item.description}
          </p>
        </div>
      );
    }

    if (item.type === 'image') {
      return (
        <div key={index} className={`${baseClasses} relative rounded-2xl overflow-hidden group shadow-lg transition-transform duration-500 hover:scale-[1.02]`}>
          <Image
            src={item.src}
            alt={item.alt || "Joyzen Feature"}
            fill
            className="object-cover"
          />
        </div>
      );
    }

    if (item.type === 'logo') {
      return (
        <div key={index} className="flex justify-center items-center py-4 md:py-6 shrink-0 h-full">
          <div className="relative w-40 h-16 transform transition-transform duration-500 hover:scale-110">
            <Image
              src="/orange_logo.svg"
              alt="Joyzen Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="relative w-full py-24 md:py-20 flex flex-col items-center justify-center overflow-hidden font-satoshi bg-white md:h-screen min-h-[100svh]">
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu" style={{ transform: 'translateZ(0)' }}>
        <div className="absolute bottom-[15%] -left-[40%] md:left-[-50%] w-[80%] h-[40%] bg-[#b4def7] opacity-80 rounded-[100%] md:blur-[80px] md:block hidden" />
        <div className="absolute -bottom-[5%] -left-[40%] md:left-[-50%] w-[80%] h-[20%] bg-[#EF8F60] opacity-80 rounded-[100%] md:blur-[80px] md:block hidden" />
        <div className="absolute -bottom-[5%] -left-[40%] w-[80%] h-[40%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.8)_0%,transparent_70%)]" />

        <div className="absolute bottom-[10%] right-[-40%] w-[70%] h-[30%] bg-[#f8e780] opacity-90 rounded-[100%] md:blur-[80px] md:block hidden" />
        <div className="absolute bottom-[30%] right-[-40%] w-[70%] h-[30%] bg-[#ddc4df] opacity-100 rounded-[100%] md:blur-[80px] md:block hidden" />
        <div className="absolute -bottom-[5%] -right-[30%] w-[70%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.5)_0%,transparent_70%)]" />

        <div className="absolute -bottom-[20%] right-[20%] md:right-[-20%] w-[100%] h-[40%] bg-[#EF8F60] opacity-100 rounded-[100%] md:blur-[140px] md:block hidden" />
        <div className="absolute -bottom-[20%] right-[20%] w-[80%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.3)_0%,transparent_70%)]" />
      </div>

      {/* Mobile Background Logo */}
      <div className="md:hidden absolute inset-0 z-[1] flex items-center justify-center pointer-events-none opacity-[0.05]">
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/orange_logo.svg"
              alt="Joyzen Background"
              fill
              className="object-contain"
            />
          </div>
      </div>

      <div className="relative z-10 px-[3%] w-full h-full flex flex-col justify-center">
        {/* Mobile Slider */}
        <div className="md:hidden w-full mt-4">
            <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar scroll-smooth"
            >
                {mobileItems.map((item, idx) => (
                    <div key={`mobile-${idx}`} className="min-w-[85vw] snap-center">
                        {renderItem(item, idx, true)}
                    </div>
                ))}
            </div>
            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {mobileItems.map((_, idx) => (
                    <div 
                        key={`dot-${idx}`} 
                        className={`h-1 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#EF8F60]' : 'w-2 bg-[#EF8F60]/20'}`}
                    />
                ))}
            </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-[1fr_0.75fr_1fr] gap-6 md:gap-x-8 h-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-8 h-full">
            {col1.map((item, idx) => renderItem(item, idx, false))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 md:gap-8 h-full">
            {col2.map((item, idx) => renderItem(item, idx, false))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:gap-8 h-full">
            {col3.map((item, idx) => renderItem(item, idx, false))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

export default Joyzen;