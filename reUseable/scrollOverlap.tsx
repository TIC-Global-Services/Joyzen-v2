"use client";
import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export interface OverlapCardData {
    title: React.ReactNode | string;
    description: React.ReactNode | string;
    customGradients?: React.ReactNode; // Allows sending fully customized <div> elements for gradients
}

export interface OverlapScrollProps {
    heading: React.ReactNode | string;
    centerImage?: StaticImageData | string | any;
    data: OverlapCardData[];
}

const OverlapScroll: React.FC<OverlapScrollProps> = ({ heading, centerImage, data }) => {
    const containerRef = useRef<HTMLElement>(null)
    const centerImageRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true, // GSAP handles the pinning automatically!
                start: "top top", // Start pinning when section hits top of screen
                end: "+=3000", // Keep it pinned for 3000px of scrolling
                scrub: 1,
            }
        });

        const duration = 2;
        const isMobile = window.innerWidth < 768;
        const staggerDelay = isMobile ? 0.8 : 0.4;

        // Center image: starts zoomed in, scales down to normal as cards enter
        if (centerImageRef.current) {
            gsap.set(centerImageRef.current, { scale: 1.5 });
            tl.to(centerImageRef.current, {
                scale: 1,
                ease: "sine.out",
                duration: 1
            }, 0);
        }

        cardsRef.current.forEach((card, index) => {
            if (!card) return;
            const startTimeline = 1 + index * staggerDelay;

            tl.fromTo(card,
                {
                    x: "100vw",
                    y: 400,
                    rotation: 15,
                    opacity: 1,
                    scale: 0.2
                },
                {
                    x: "-100vw",
                    ease: "none",
                    duration: duration
                },
                startTimeline
            );

            tl.to(card, {
                y: 0,
                rotation: 0,
                opacity: 1,
                scale: 1,
                ease: "sine.out",
                duration: duration / 2
            }, startTimeline);

            tl.to(card, {
                y: 400,
                rotation: -15,
                opacity: 1,
                scale: 0.2,
                ease: "sine.in",
                duration: duration / 2
            }, startTimeline + duration / 2);
        });

    }, { scope: containerRef, dependencies: [data] });

    return (
        <section ref={containerRef} className="relative w-full h-dvh lg:h-screen pt-10 flex flex-col items-center justify-center pb-10 bg-[#F9F9F7] z-10" style={{ overflow: "clip" }}>
          
            <div className="text-center z-20 w-full px-4 shrink-0 mb-8 md:mb-12">
                <h2 className="text-[32px] md:text-[44px] lg:text-[2.75rem] text-[#1A1A1A] leading-[1.1] font-medium tracking-tight font-sans">
                    {heading}
                </h2>
            </div>

            <div className="w-full px-4 relative flex justify-center items-center flex-1 min-h-0 z-10">
                
                <div className="relative w-[280px] md:w-[320px] lg:w-[380px] h-[380px] md:h-[420px] lg:h-[480px]">
                    
                    {/* Fixed Center Image behind cards */}
                    {centerImage && (
                        <div ref={centerImageRef} className="absolute inset-0 m-auto w-[65%] h-[65%] md:w-[75%] md:h-[75%] rounded-3xl overflow-hidden shadow-sm z-0">
                            <Image
                                src={centerImage}
                                alt="Background Visual"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el }}
                            className="absolute inset-0 shrink-0 rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 flex flex-col items-center justify-start pt-16 md:pt-20 px-6 md:px-10 text-center z-10"
                            style={{ willChange: 'transform, opacity' }}
                        >
                            {/* Custom HTML/JSX Gradients injected directly from data array */}
                            {item.customGradients && (
                                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                    {item.customGradients}
                                </div>
                            )}

                            {/* Card Text Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl md:text-[1.5rem] font-medium text-[#1A1A1A] mb-4 font-sans tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[#555555] text-sm md:text-[0.95rem] leading-relaxed font-epilogue font-normal">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OverlapScroll