import React from 'react'

const JoyzenOffers = () => {
    return (
        <section className="relative w-full py-24 md:py-40 flex flex-col items-center justify-center overflow-hidden font-satoshi bg-white min-h-screen">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu" style={{ transform: 'translateZ(0)' }}>
                <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#b4def7] opacity-90 blur-[100px] rounded-full" />
                <div className="absolute top-[50%] right-[-10%] w-[40%] h-[40%] bg-[#ddc4df] opacity-90 blur-[100px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[0%] w-[100%] h-[20%] bg-[#EF8F60] opacity-90 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <p className="text-2xl font-sans md:text-3xl lg:text-4xl text-[#1A1A1A] leading-[1.4] md:leading-[1.4] font-medium text-pretty mb-12">
                    Joyzen offers structured care plans tailored to every stage of life, from hormonal balance and prevention to conception support and long-term reproductive health, ensuring each patient receives a{" "}
                    <span className="text-[#EF8F60]">
                        Personalized Care, Monitoring & Tracking, Consultations & Follow-ups, weekly follow-ups, Support & Guidance, and At-Home Care.
                    </span>{" "}
                    Because this isn’t just a package, it’s a healthcare system designed entirely around you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-white border font-sans border-[#FFFFFF0A] px-8 py-3 rounded-full font-medium shadow-sm transition-all hover:shadow-md hover:scale-105 active:scale-95">
                        Start Your Application
                    </button>
                    <button className="bg-[#00000024] font-sans text-[#1A1A1A] px-8 py-3 rounded-full font-medium transition-all hover:bg-[#D4D4D4] hover:scale-105 active:scale-95">
                        Buy a plan
                    </button>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </section>
    )
}

export default JoyzenOffers
