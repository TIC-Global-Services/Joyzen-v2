'use client';
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Buildformodern = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (!container) return;

        const words = container.querySelectorAll('.word');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: () => window.innerWidth < 768 ? "top 80%" : "top 70%",
                end: () => window.innerWidth < 768 ? "bottom 60%" : "bottom 40%",
                scrub: 0.5,
                invalidateOnRefresh: true,
            }
        });

        // Set initial state
        gsap.set(words, { opacity: 0.2 });

        tl.to(words, {
            opacity: 1,
            stagger: 0.1,
            ease: "none"
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    // Helper to split text into words while keeping custom classes
    const splitText = (text: string, customClass: string = "text-black") => {
        return text.split(" ").map((word, i) => (
            <span key={`${word}-${i}`} className={`word opacity-20 inline-block mr-[0.2em] transition-opacity duration-300 ${customClass}`}>
                {word}
            </span>
        ));
    };
    return (
        <div className="relative py-24 px-4 md:py-32 w-full flex justify-center items-center font-satoshi min-h-screen">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none transform-gpu" style={{ transform: 'translateZ(0)' }}>
                {/* Replaced heavy blur filters with radial-gradients on mobile */}
                <div className="absolute -bottom-[5%] -left-[40%] md:left-[-40%] w-[80%] h-[20%] bg-[#EF8F60] opacity-100 rounded-[100%] md:blur-[100px] md:block hidden" />
                <div className="absolute -bottom-[5%] -left-[40%] w-[80%] h-[40%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.8)_0%,transparent_70%)]" />

                {/* <div className="absolute -bottom-[0%] -right-[30%] w-[70%] h-[30%] bg-[#ddc4df] opacity-100 rounded-[100%] md:blur-[80px] md:block hidden" /> */}
                <div className="absolute -bottom-[00%] -right-[30%] w-[70%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(221,196,223,0.8)_0%,transparent_70%)]" />

                <div className="absolute -bottom-[30%] right-[20%] md:right-[-50%] w-[80%] h-[40%] bg-[#f8e780] opacity-100 rounded-[100%] md:blur-[100px] md:block hidden" />
                <div className="absolute -bottom-[30%] right-[20%] w-[80%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(248,231,128,0.4)_0%,transparent_70%)]" />
            </div>

            <div ref={containerRef} className="text-center leading-[1.2] tracking-[-2px]">
                <p className="mb-2 md:mb-4 text-[60px] font-medium">
                    {splitText("Built for modern life")}
                    <br className="hidden md:block" />
                </p>

                <p className="mb-2 md:mb-4 text-[40px] font-normal">
                    {splitText("Health today is not static")}
                    <br className="hidden md:block" />

                </p>

                <p className="mb-2 md:mb-4 text-[40px] font-normal">
                    {splitText("your body, lifestyle, and needs keep changing.")}
                    <br className="hidden md:block" />
                    <span className="md:hidden"> </span>
                    {splitText("The system should too")}
                </p>
                <button className="bg-white border font-sans border-[#FFFFFF0A] px-8 py-3 rounded-full font-medium tracking-tight shadow-sm transition-all hover:shadow-md hover:scale-105 active:scale-95">
                        Start Your Application
                    </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </div>
    )
}

export default Buildformodern