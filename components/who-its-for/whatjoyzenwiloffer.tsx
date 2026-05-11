import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import logoPurple from '@/public/logo_purple.svg'

const offerItems = [
  // Column 1
  {
    col: 1,
    title: "For Adults\n(Hormones, PCOS,\nEveryday Health)",
    desc: "When your body feels off, you need more than quick fixes. Joyzen helps you manage hormones, PCOS, irregular cycles, and overall reproductive health, with continuous support.",
    customGradients: (
      <>

        <div className="absolute bottom-[15%] -left-[40%] md:left-[-50%] w-[80%] h-[40%] bg-[#b4def7] opacity-50 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[5%] -left-[40%] md:left-[-50%] w-[80%] h-[20%] bg-[#EF8F60] opacity-50 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[5%] -left-[40%] w-[80%] h-[40%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.8)_0%,transparent_70%)]" />

        <div className="absolute bottom-[10%] right-[-40%] w-[70%] h-[30%] bg-[#f8e780] opacity-60 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute bottom-[30%] right-[-40%] w-[70%] h-[30%] bg-[#ddc4df] opacity-65 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[5%] -right-[30%] w-[70%] h-[50%] md:hidden block bg-[radial-gradient(circle,#ddc4df_0%,transparent_70%)]" />
        <div className="absolute -bottom-[25%] -right-[40%] w-[70%] h-[50%] md:hidden block bg-[radial-gradient(circle,#f8e780_0%,transparent_70%)]" />

        <div className="absolute -bottom-[20%] right-[20%] md:right-[-20%] w-[100%] h-[40%] bg-[#EF8F60] opacity-65 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[20%] right-[0%] w-[100%] h-[50%] md:hidden block bg-[radial-gradient(circle,#EF8F60_0%,transparent_70%)]" />
      </>
    )
  },
  {
    col: 1,
    title: "For Couples\n(Trying to Conceive Naturally)",
    desc: "Fertility is a shared journey. Joyzen supports both partners together, with continuous guidance until conception.",
    customGradients: (
      <>

        <div className="absolute -bottom-[20%] -left-[20%] w-[80%] h-[50%] opacity-50 md:blur-[80px] blur-[60px] rounded-full transition-transform duration-700 ease-out group-hover:scale-150 group-hover:-translate-y-12 group-hover:translate-x-8" style={{ backgroundColor: "#ddc4df" }} />
        <div className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[50%] opacity-50 md:blur-[80px] blur-[60px] rounded-full transition-transform duration-700 ease-out group-hover:scale-150 group-hover:-translate-y-12 group-hover:-translate-x-8" style={{ backgroundColor: "#b4def7" }} />
      </>
    )
  },

  // Column 2
  {
    col: 2,
    title: "For Teens\n(Early Health & Awareness)",
    desc: "When your body feels off, you need more than quick fixes. Joyzen helps you manage hormones, PCOS, irregular cycles, and overall reproductive health, with continuous support.",
    customGradients: (
      <>
        <div className="absolute bottom-[-40%] right-[-20%] -translate-x-1/2 w-[30%] h-[70%] blur-[20px] opacity-50 rounded-full bg-[#b4def7]" />
        <div className="absolute -bottom-[10%] left-[30%] -translate-x-1/2 w-[100%] h-[35%] blur-[50px] opacity-50 rounded-full bg-[#036132]" />
      </>
    )
  },
  {
    col: 2,
    title: "For Pre-Pregnancy\n(Planning for the Future)",
    desc: "Preparing for pregnancy isn’t a checklist—it’s a phase. Joyzen helps you understand your body, balance hormones, and naturally improve conception chances.",
    customGradients: (
      <>
       <div className="absolute -bottom-[20%] -left-[20%] w-[40%] h-[50%] opacity-50 md:blur-[80px] blur-[60px] rounded-full transition-transform duration-700 ease-out group-hover:scale-150 group-hover:-translate-y-12 group-hover:translate-x-8" style={{ backgroundColor: "#f8e780" }} />
        <div className="absolute -bottom-[20%] right-[20%] w-[40%] h-[50%] opacity-50 md:blur-[80px] blur-[60px] rounded-full transition-transform duration-700 ease-out group-hover:scale-150 group-hover:-translate-y-12 group-hover:-translate-x-8" style={{ backgroundColor: "#ddc4df" }} />
        <div className="absolute -bottom-[20%] -right-[20%] w-[40%] h-[50%] opacity-50 md:blur-[80px] blur-[60px] rounded-full transition-transform duration-700 ease-out group-hover:scale-150 group-hover:-translate-y-12 group-hover:-translate-x-8" style={{ backgroundColor: "#b4def7" }} />
      </>
    )
  },
  {
    col: 2,
    title: "For Long-Term Health\n& Longevity",
    desc: "Reproductive health is the foundation of lifelong health. Joyzen helps you stay balanced, aware, and supported, for a healthier, longer life.",
    customGradients: (
      <>
        
        <div className="absolute bottom-[15%] -left-[40%] md:left-[-50%] w-[80%] h-[40%] bg-[#b4def7] opacity-50 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[5%] -left-[40%] md:left-[-50%] w-[80%] h-[20%] bg-[#EF8F60] opacity-50 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[5%] -left-[40%] w-[80%] h-[40%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.8)_0%,transparent_70%)]" />

        <div className="absolute bottom-[10%] right-[-40%] w-[70%] h-[30%] bg-[#f8e780] opacity-60 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute bottom-[30%] right-[-40%] w-[70%] h-[30%] bg-[#ddc4df] opacity-65 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[5%] -right-[30%] w-[70%] h-[50%] md:hidden block bg-[radial-gradient(circle,#ddc4df_0%,transparent_70%)]" />
        <div className="absolute -bottom-[25%] -right-[40%] w-[70%] h-[50%] md:hidden block bg-[radial-gradient(circle,#f8e780_0%,transparent_70%)]" />

        <div className="absolute -bottom-[20%] right-[20%] md:right-[-20%] w-[100%] h-[40%] bg-[#EF8F60] opacity-65 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[20%] right-[0%] w-[100%] h-[50%] md:hidden block bg-[radial-gradient(circle,#EF8F60_0%,transparent_70%)]" />
      </>
    )
  },

  // Column 3
  {
    col: 3,
    title: "For Men\n(Hormones, Energy, Fertility)",
    desc: "Men's health is often ignored until it becomes a problem. Joyzen supports testosterone, energy, sexual health, and fertility, proactively, not reactively.",
    customGradients: (
      <>
        <div className="absolute -bottom-[20%] -left-[20%] w-[80%] h-[50%] opacity-50 md:blur-[80px] blur-[60px] rounded-full transition-transform duration-700 ease-out group-hover:scale-150 group-hover:-translate-y-12 group-hover:translate-x-8" style={{ backgroundColor: "#ddc4df" }} />
        <div className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[50%] opacity-50 md:blur-[80px] blur-[60px] rounded-full transition-transform duration-700 ease-out group-hover:scale-150 group-hover:-translate-y-12 group-hover:-translate-x-8" style={{ backgroundColor: "#b4def7" }} />
      </>
    )
  },
  {
    col: 3,
    title: "For Pregnancy & Beyond",
    desc: "Support shouldn't stop after conception. Joyzen continues with you, through pregnancy, recovery, and long-term reproductive health.",
    customGradients: (
      <>
        <div className="absolute -bottom-[20%] -left-[20%] w-[80%] h-[50%] opacity-50 md:blur-[80px] blur-[60px] rounded-full transition-transform duration-700 ease-out group-hover:scale-150 group-hover:-translate-y-12 group-hover:translate-x-8" style={{ backgroundColor: "#b4def7" }} />
        <div className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[50%] opacity-50 md:blur-[80px] blur-[60px] rounded-full transition-transform duration-700 ease-out group-hover:scale-150 group-hover:-translate-y-12 group-hover:-translate-x-8" style={{ backgroundColor: "#036132" }} />
      </>
    )
  }
];

const WhatJoyzenWillOffer = () => {
  const col1 = offerItems.filter(item => item.col === 1);
  const col2 = offerItems.filter(item => item.col === 2);
  const col3 = offerItems.filter(item => item.col === 3);

  const renderItem = (item: any, index: number) => {
    return (
      <div
        key={`card-${index}`}
        className="w-full h-[380px] md:h-[560px] relative group p-8 md:p-10 text-left flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden  bg-white border border-[#F0F0F0]"
      >
        {/* Animated Mesh Gradient Background from Array */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {item.customGradients}
        </div>

        {/* Hover Logo Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:scale-110 pointer-events-none z-10">
          <Image
            src={logoPurple}
            alt="Joyzen Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute top-8 right-8 text-[#1A1A1A] opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 z-20">
          <ArrowUpRight className="w-6 h-6" />
        </div>

        <div className="relative z-20">
          <h3 className="text-xl md:text-[1.35rem] font-medium text-[#1A1A1A] mb-4 leading-tight whitespace-pre-line transition-transform duration-500 group-hover:-translate-y-1">
            {item.title}
          </h3>
          <p className="text-[16px] leading-[1.3] font-normal tracking-widetransition-transform duration-500 group-hover:-translate-y-1">
            {item.desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden font-satoshi bg-white">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#1A1A1A] mb-16 tracking-tight">
          What <span className="text-[#036132]">Joyzen</span> Will Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-4 md:mt-24">
            {col1.map(renderItem)}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 md:gap-4">
            {col2.map(renderItem)}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:gap-4 md:mt-24">
            {col3.map(renderItem)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatJoyzenWillOffer;