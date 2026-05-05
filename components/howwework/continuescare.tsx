"use client"
import OverlapScroll from '@/reUseable/scrollOverlap'
import centerVisual from '@/assets/howwework/where_we_headed.jpg' // Use your real image here

const careData = [
  {
    title: "Understand You",
    description: "We assess your health, history, and goals.",
    customGradients: (
      <>
        <div className="absolute bottom-[15%] -left-[40%] md:left-[-50%] w-[80%] h-[40%] bg-[#b4def7] opacity-80 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[5%] -left-[40%] md:left-[-50%] w-[80%] h-[20%] bg-[#EF8F60] opacity-80 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[5%] -left-[40%] w-[80%] h-[40%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.8)_0%,transparent_70%)]" />

        <div className="absolute bottom-[10%] right-[-40%] w-[70%] h-[30%] bg-[#f8e780] opacity-90 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute bottom-[30%] right-[-40%] w-[70%] h-[30%] bg-[#ddc4df] opacity-100 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[5%] -right-[30%] w-[70%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.5)_0%,transparent_70%)]" />

        <div className="absolute -bottom-[20%] right-[20%] md:right-[-20%] w-[100%] h-[40%] bg-[#EF8F60] opacity-100 rounded-[100%] md:blur-[50px] md:block hidden" />
        <div className="absolute -bottom-[20%] right-[20%] w-[80%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.3)_0%,transparent_70%)]" />
      </>
    )
  },
  {
    title: "Get Your Doctor",
    description: "A dedicated doctor who stays with you, online and in-clinic.",
    customGradients: (
      <>
        <div className="absolute bottom-[-40%] right-[-20%] -translate-x-1/2 w-[30%] h-[70%] blur-[20px] opacity-100 rounded-full bg-[#b4def7]" />
        <div className="absolute -bottom-[10%] left-[30%] -translate-x-1/2 w-[100%] h-[35%] blur-[50px] opacity-100 rounded-full bg-[#036132]" />
      </>
    )
  },
  {
    title: "Full Support System",
    description: "Care team, dietitian, and fitness expert, working together for you.",
    customGradients: (
      <>
        <div className="absolute -bottom-[10%] left-[40%] -translate-x-1/2 w-[120%] h-[35%] blur-[25px] opacity-100 rounded-full bg-[#f8e780]" />
       
      </>
    )
  },
  {
    title: "Daily Guidance",
    description: "Not just consultations. Ongoing support, every day.",
    customGradients: (
      <>
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[40%] bg-[#b4def7] opacity-90 blur-[30px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[20%] w-[100%] h-[40%] bg-[#ddc4df] opacity-90 blur-[30px] rounded-full" />
      </>
    )
  },
  {
    title: "Clear, Structured Plan",
    description: "Everything mapped, hormones, lifestyle, recovery.",
    customGradients: (
      <>
        <div className="absolute -bottom-[10%] left-[20%] -translate-x-1/2 w-[90%] h-[40%] blur-[25px] opacity-70 rounded-full bg-[#EF8F60]" />
        <div className="absolute -bottom-[10%] right-[-40%] -translate-x-1/2 w-[60%] h-[35%] blur-[25px] opacity-100 rounded-full bg-[#f8e780]" />
      </>
    )
  },
  {
    title: "Track Your Progress",
    description: "Simple scores, insights, real improvements.",
    customGradients: (
      <>
        <div className="absolute -bottom-[10%] left-[10%] -translate-x-1/2 w-[50%] h-[55%] blur-[25px] opacity-70 rounded-full bg-[#f8e780]" />
        <div className="absolute -bottom-[10%] right-[-20%] -translate-x-1/2 w-[70%] h-[40%] blur-[25px] opacity-90 rounded-full bg-[#ddc4df]" />
        <div className="absolute -bottom-[10%] right-[-40%] -translate-x-1/2 w-[40%] h-[40%] blur-[25px] opacity-90 rounded-full bg-[#b4def7]" />
      </>
    )
  },
];

const ContinuesCare = () => {
  return (
    <div>
      <OverlapScroll
        heading={<>Continuous <span className="text-[#036132]">Care</span>. Not One-Time Visit</>}
        centerImage={centerVisual}
        data={careData}
      />
    </div>
  )
}

export default ContinuesCare
